"use client"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"
import { useRef, useMemo, useEffect } from "react"
import { projects } from "@/lib/projects"
import { Line } from '@react-three/drei'

// Tunables
const SCROLL_THRESHOLD = 80
const BASE_SCALE = 1.4
const ACTIVE_SCALE = 1.5
const NODE_SIZE = 0.25
const MAX_PARALLAX = 0.18     // max horizontal separation
const PARALLAX_STRENGTH = 0.12
const MORPH_SPEED = 0.06

function NebulaScene({ activeIndex, setActiveIndex, setScreenPos, locked }: any) {
  const group = useRef<THREE.Group>(null!)
  const { camera, size } = useThree()

  const nodesRef = useRef<THREE.Vector3[]>([])
  const morphTargets = useRef<THREE.Vector3[]>([])
  const scrollAccum = useRef(0)

  /* -------------------------
     Initialize spherical layout
  -------------------------- */

  nodesRef.current = useMemo(() => {
    return projects.map((_, i) => {
      const phi = Math.acos(-1 + (2 * i) / projects.length)
      const theta = Math.sqrt(projects.length * Math.PI) * phi
      return new THREE.Vector3(
        BASE_SCALE * Math.cos(theta) * Math.sin(phi),
        BASE_SCALE * Math.sin(theta) * Math.sin(phi),
        BASE_SCALE * Math.cos(phi)
      )
    })
  }, [])

  morphTargets.current = useMemo(
    () => nodesRef.current.map((v) => v.clone()),
    []
  )

  /* -------------------------
     Scroll Lock
  -------------------------- */

  useEffect(() => {
    if (!locked) return

    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      scrollAccum.current += e.deltaY

      if (scrollAccum.current > SCROLL_THRESHOLD) {
        setActiveIndex((prev: number) =>
          Math.min(prev + 1, projects.length - 1)
        )
        scrollAccum.current = 0
      } else if (scrollAccum.current < -SCROLL_THRESHOLD) {
        setActiveIndex((prev: number) =>
          Math.max(prev - 1, 0)
        )
        scrollAccum.current = 0
      }
    }

    window.addEventListener("wheel", onWheel, { passive: false })
    return () => window.removeEventListener("wheel", onWheel)
  }, [locked, setActiveIndex])

  /* -------------------------
     Frame Loop
  -------------------------- */

  useFrame((state, delta) => {
    if (!group.current) return

    /* -------------------------
      Global slow rotation
    -------------------------- */

    group.current.rotation.y += delta * 0.4
    group.current.rotation.x += delta * 0.15

    /* -------------------------
      Morph animation
    -------------------------- */

    nodesRef.current.forEach((node, i) => {
      const isActive = i === activeIndex

      const targetZ = isActive
        ? -2.4                 // stronger pull forward
        : node.z * 1.15       // push others slightly back

      const spread = isActive ? 2.2 : 1

      const targetX = node.x * spread
      const targetY = node.y * spread

      morphTargets.current[i].x +=
        (targetX - morphTargets.current[i].x) * MORPH_SPEED

      morphTargets.current[i].y +=
        (targetY - morphTargets.current[i].y) * MORPH_SPEED

      morphTargets.current[i].z +=
        (targetZ - morphTargets.current[i].z) * MORPH_SPEED
    })

    /* -------------------------
      Stereo Separation
    -------------------------- */

    group.current.children.forEach((nodeGroup, i) => {
      const basePos = morphTargets.current[i]
      if (!basePos) return

      nodeGroup.position.copy(basePos)

      const worldPos = nodeGroup.getWorldPosition(new THREE.Vector3())
      const viewPos = worldPos.clone().applyMatrix4(camera.matrixWorldInverse)

      const depth = -viewPos.z

      // Strong nonlinear amplification
      const depthFactor = Math.pow(1 / depth, 1.8)

      const separation = THREE.MathUtils.clamp(
        depthFactor * 1.2,   // stronger scaling
        0,
        0.8                  // larger max separation
      )

      const verticalSeparation = separation * 0.35

      const redMesh = nodeGroup.children[0] as THREE.Mesh
      const cyanMesh = nodeGroup.children[1] as THREE.Mesh

      redMesh.position.set(separation, verticalSeparation, 0)
      cyanMesh.position.set(-separation, -verticalSeparation, 0)
    })

    /* -------------------------
      Screen projection for UI
    -------------------------- */

    const activeWorld =
      morphTargets.current[activeIndex]
        .clone()
        .applyMatrix4(group.current.matrixWorld)

    const projected = activeWorld.project(camera)

    const x = (projected.x * 0.5 + 0.5) * size.width
    const y = (-projected.y * 0.5 + 0.5) * size.height

    setScreenPos({ x, y })
  })

  /* -------------------------
     Render
  -------------------------- */

  return (
    <group ref={group}>
      {morphTargets.current.map((pos, i) => (
        <group key={i}>
          {/* Red Eye */}
          <mesh onClick={() => setActiveIndex(i)}>
            <sphereGeometry args={[NODE_SIZE, 48, 48]} />
            <meshBasicMaterial
              color="red"
              transparent
              opacity={0.65}
              depthWrite={true}
            />
          </mesh>

          {/* Cyan Eye */}
          <mesh onClick={() => setActiveIndex(i)}>
            <sphereGeometry args={[NODE_SIZE, 48, 48]} />
            <meshBasicMaterial
              color="cyan"
              transparent
              opacity={0.65}
              depthWrite={true}
            />
          </mesh>
        </group>
      ))}

      {/* Connection Lines */}
      {morphTargets.current.map((a, i) =>
        morphTargets.current.map((b, j) => {
          if (i >= j) return null

          const points = [a, b]

          return (
            <group key={`${i}-${j}`}>
              <Line 
                points={points}       // Drei handles the geometry automatically
                color="red"
                transparent
                opacity={0.23}
              />
              <Line 
                points={points}
                color="cyan"
                transparent
                opacity={0.23}
              />
            </group>
          )
        })
      )}
    </group>
  )
}

/* -------------------------
   Canvas Wrapper
-------------------------- */

export default function NebulaGraph({
  activeIndex,
  setActiveIndex,
  setScreenPos,
  locked
}: any) {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 50 }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} />
      <NebulaScene
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        setScreenPos={setScreenPos}
        locked={locked}
      />
    </Canvas>
  )
}