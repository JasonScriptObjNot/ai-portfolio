"use client"
import { useState } from "react"
import TopBar from "@/components/TopBar"
import FocusSection from "@/components/FocusSection"
import LensSection from "@/components/LensSection"
import SkillsSection from "@/components/SkillsSection"
import ImpactsSection from "@/components/ImpactsSection"
import ContactSection from "@/components/ContactSection"
import DownArrow from "@/components/DownArrow"

export default function Page(){

  const [lens,setLens]=useState<string|null>(null)

  return(
    <>
      <TopBar/>
      <DownArrow/>
      <div style={{paddingTop:70}}>
        <FocusSection/>
        <LensSection setLens={setLens}/>
        <SkillsSection lens={lens}/>
        <ImpactsSection/>
        <section id="info" style={{padding:"8vh 6vw"}}>
          <p style={{ 
            marginTop: "2rem", 
            lineHeight: "1.8", 
            fontSize: "1.1rem", 
            color: "white", 
            maxWidth: "600px" // Prevents lines from getting too long to read
          }}>
            AI systems, in isolation, are neither inherently <span style={{ fontWeight: "400", color: "cyan" }}>safe</span> nor <span style={{ fontWeight: "400", color: "red" }}>unsafe</span>.
            <br /><br />
            Robustness emerges when technical design, incentive structures, and oversight mechanisms are <span style={{ textDecoration: "underline" }}>architected together</span> — not patched independently.
            <br /><br />
            <span style={{ fontStyle: "italic", borderLeft: "2px solid cyan", borderRight: "2px solid red", paddingLeft: "10px", paddingRight: "10px"}}>
              My work focuses on building those architectures.
            </span>
          </p>
        </section>
        <ContactSection/>
      </div>
    </>
  )
}