"use client"
import { useEffect, useState } from "react"
import { governance, technical } from "@/lib/lenses"
import { UI } from "@/lib/config"

export default function SkillsSection({ lens }: any) {

  const [showBoth,setShowBoth]=useState(true)

  useEffect(()=>{
    if(lens){
      setShowBoth(false)

      const reveal = ()=>{
        setShowBoth(true)
        window.removeEventListener("wheel",reveal)
      }

      window.addEventListener("wheel",reveal)
    }
  },[lens])

  return (
    <section id="skills" style={{padding:UI.sectionPadding}}>

      <div style={{display:"flex",gap:"6vw",flexWrap:"wrap"}}>
        {(showBoth || lens==="governance") &&
          <div style={{color:"red",textShadow:"0 0 1.2px rgba(255,255,255,0.6)",flex:1,minWidth:320,paddingTop:"20px"}}>
            <h3>Governance & Human Context</h3>
            {governance.map(s=><p key={s}>{s}</p>)}
          </div>
        }

        {(showBoth || lens==="technical") &&
          <div style={{color:"blue",textShadow:"0 0 1.2px rgba(255,255,255,0.6)",flex:1,minWidth:320,paddingTop:"20px"}}>
            <h3>Technical & Systems</h3>
            {technical.map(s=><p key={s}>{s}</p>)}
          </div>
        }

      </div>

      {showBoth &&
        <div style={{marginTop:"4rem",textAlign:"center"}}>
          <p>
          The challenge in AI governance is not in choosing sides...
          </p>
          <p style={{ marginTop: "0.01rem" }}>
            It's in properly architecting systems where 
            <span style={{ color: "blue", fontWeight: "bold" }}> technical robustness </span> 
            and 
            <span style={{ color: "red", fontWeight: "bold" }}> institutional oversight </span> 
            reinforce one another.
          </p>          
          <p style={{marginTop:"1.7rem", fontStyle: "italic" }}>Now, using both lenses, let's look at some real-world impacts.</p>
        </div>
      }

    </section>
  )
}