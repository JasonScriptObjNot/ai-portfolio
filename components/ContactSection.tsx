"use client"
import { useState } from "react"

export default function ContactSection() {

  const email = "liujson@cmu.edu"
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section
      id="contact"
      style={{
        padding: "14vh 6vw",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.8rem",
        position: "relative"
      }}
    >

      <style jsx>{`

        .emailCard {
          display:flex;
          align-items:center;
          gap:1rem;
          margin-top:1rem;
          padding:0.7rem 1.2rem;
          border-radius:10px;
          border:1px solid rgba(255,255,255,0.2);
          background:rgba(255,255,255,0.04);
          backdrop-filter:blur(4px);
          transition:all 0.25s ease;
        }

        .emailCard:hover {
          transform:translateY(-4px);
          box-shadow:0 10px 25px rgba(0,0,0,0.4);
          border-color:rgba(255,255,255,0.35);
        }

        .copyButton {
          position:relative;
          overflow:hidden;
          border:none;
          background:rgba(255,255,255,0.12);
          padding:0.4rem 0.8rem;
          border-radius:6px;
          cursor:pointer;
          font-size:0.9rem;
          transition:all 0.2s ease;
        }

        .copyButton:hover {
          transform:translateY(-1px);
          background:rgba(255,255,255,0.18);
        }

        /* SHINE SWEEP */

        .copyButton::before {
          content:"";
          position:absolute;
          top:-120%;
          left:-120%;
          width:200%;
          height:200%;
          background:linear-gradient(
            60deg,
            transparent 40%,
            rgba(255,255,255,0.6) 50%,
            transparent 60%
          );
          transform:translateX(-100%) rotate(20deg);
          animation:shine 3.5s infinite;
        }

        @keyframes shine {
          0% { transform:translateX(-150%) rotate(20deg); }
          100% { transform:translateX(150%) rotate(20deg); }
        }

      `}</style>


      <h3 style={{fontSize:"2rem", fontWeight:600, marginTop: "1rem", marginBottom: "0.0rem"}}>
        Connecting the Dots
      </h3>

      <p
        style={{
          maxWidth:"530px",
          opacity:0.8,
          marginTop: "0.05rem",  // reduce top spacing
          marginBottom: "0.1rem" // reduce bottom spacing
        }}
      >
        Many of the hardest problems in AI emerge where technical systems intersect with human institutions: 
        where oversight, coordination, and accountability all have to operate within the architecture itself.
        <br></br>
        <br></br>
        If you or your colleagues work within one of these spaces,  
        I’d love to explore these mechanisms further and design systems where those layers reinforce one another.
        Let's continue this conversation at:
      </p>


      <div className="emailCard">

        <a
          href={`mailto:${email}`}
          style={{
            fontSize:"1.05rem",
            textDecoration:"none",
            color:"inherit",
            fontWeight:500,
            letterSpacing:"0.02em"
          }}
        >
          {email}
        </a>

        <button
          onClick={copyEmail}
          className="copyButton"
        >
          {copied ? "Copied" : "Copy"}
        </button>

      </div>

    </section>
  )
}