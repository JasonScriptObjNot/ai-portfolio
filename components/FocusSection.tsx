import { UI } from "@/lib/config"

export default function FocusSection() {
  return (
    <section id="focus" style={{padding:UI.sectionPadding, paddingTop:UI.topBarHeight+60}}>
      <h1 style={{fontSize:"clamp(2rem,4vw,3rem)", maxWidth:900}}>
        Designing AI systems that remain controllable, auditable, and predictable under real-world deployment?
      </h1>

      <p style={{maxWidth:800, fontSize:"1.4rem", marginTop:"2rem"}}>
        I design AI architectures that integrate technical robustness with explicit models of human and institutional interaction, ensuring systems behave as intended as they scale.
      </p>
    </section>
  )
}