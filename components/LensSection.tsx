"use client"
import MathShape from "./MathShape"
import { UI } from "@/lib/config"

export default function LensSection({ setLens }: any) {

  const choose = (lens:string)=>{
    setLens(lens)
    document.getElementById("skills")?.scrollIntoView({behavior:"smooth"})
  }

  return (
    <section id="lenses" style={{padding:UI.sectionPadding}}>
      <br></br>
      <h2>Most teams are forced to specialize. Choose your lens.</h2>

      <MathShape>
        <button
          onClick={() => choose("governance")}
          style={{
            background: "red",
            padding: "10px",
            borderRadius: UI.lensButtonRadius,
            border: "none",
            fontSize: "1rem",
            flex: 1,               // Forces equal width
            maxHeight: "60px",
            maxWidth: "140px",      // Ensures they don't get too giant
            cursor: "pointer",
            marginRight: "110px",
            marginTop: "-100px"
          }}
        >
          Governance & Human Context
        </button>

        <button
          onClick={() => choose("technical")}
          style={{
            background: "blue",
            padding: "10px",
            borderRadius: UI.lensButtonRadius,
            border: "none",
            fontSize: "1rem",
            flex: 1,               // Forces equal width
            maxHeight: "60px",
            maxWidth: "140px",      // Matches the first button
            cursor: "pointer",
            marginLeft: "110px",
            marginTop: "-100px"
          }}
        >
          Technical & Systems
        </button>
      </MathShape>
    </section>
  )
}