"use client"
import { UI } from "@/lib/config"

export default function MathShape({ children }: any) {
  return (
    <div style={{
      position: "relative",
      width: "100%",
      marginTop: "4rem",
      marginBottom: "4rem",
      display: "grid",
      placeItems: "center",
      overflow: "hidden" // Prevents the scaled-up SVG from spilling out
    }}>
      <svg
        viewBox="0 0 1000 500"
        preserveAspectRatio="xMidYMid meet"
        style={{
          gridArea: "1/1",
          width: "100%",
          height: "auto",
          display: "block",
          // SCALING LOGIC
          transform: "scale(1.3)", // Increase this number to scale up more
          transformOrigin: "center" // Ensures it scales from the middle
        }}
      >
        <ellipse cx="320" cy="150" rx="130" ry="90" fill="black"/>
        <ellipse cx="680" cy="150" rx="130" ry="90" fill="black"/>
        <path
          d="M450 150 Q500 110 550 150"
          stroke="black"
          strokeWidth="30"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      <div style={{
        gridArea: "1/1",
        position: "relative",
        zIndex: 1,
        display: "flex",
        justifyContent: "center",
        gap: "4vw",
        width: "100%",
        padding: "2rem"
      }}>
        {children}
      </div>
    </div>
  )
}