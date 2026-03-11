"use client"
import { useState, useRef, useEffect } from "react"
import NebulaGraph from "./NebulaGraph"
import PRIIPanel from "./PRIIPanel"
import { projects } from "@/lib/projects"

export default function ImpactsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [locked, setLocked] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [screenPos, setScreenPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setLocked(entry.isIntersecting),
      { threshold: 0.5 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="impacts" ref={sectionRef} style={{ height: "120vh", position: "relative", background: "#1a1a1a" }}>
      <div style={{
        position:"absolute",
        top:80,
        width:"100%",
        textAlign:"center",
        zIndex:10,
        fontSize:"1.2rem",
        opacity:0.8
      }}>
        Click nodes or scroll to explore the anaglyph
      </div>
      
      <NebulaGraph
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        setScreenPos={setScreenPos}
        locked={locked}
      />
      {locked && (
        <PRIIPanel
          node={projects[activeIndex]}
          screenPos={screenPos}
          offset={30} // tunable offset of PRII panel from node
        />
      )}
    </section>
  )
}