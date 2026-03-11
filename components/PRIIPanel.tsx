"use client"
import React from "react"

export default function PRIIPanel({ node, screenPos, offset = 30 }: any) {
  if (!node) return null

  const panelWidth = 320
  const panelHeight = 420

  return (
    <>
      {/* Gray line from panel to node */}
      <svg
        style={{
          position: "fixed",
          top: -133,
          left: 0,
          pointerEvents: "none",
          width: "6vw",
          height: "100vh",
        }}
      >
        <line
          x1={screenPos.x}
          y1={screenPos.y}
          x2={screenPos.x + panelWidth / 2 + offset}
          y2={screenPos.y + panelHeight / 2}
          stroke="#d4d0d0"
          strokeWidth={1}
        />
      </svg>

      <div
        style={{
          position: "fixed",
          top: screenPos.y - panelHeight / 2,
          left: screenPos.x + offset,
          width: panelWidth,
          height: panelHeight,
          background: "rgba(30,30,30,0.9)",
          color: "#fff",
          padding: "1rem",
          borderRadius: "0.5rem",
          pointerEvents: "auto",
        }}
      >
        <h3>{node.title}</h3>
        <p><strong>Problem:</strong> {node.problem}</p>
        <p><strong>Risk:</strong> {node.risk}</p>
        <p><strong>Intervention:</strong> {node.intervention}</p>
        <p><strong>Impact:</strong> {node.impact}</p>
      </div>
    </>
  )
}