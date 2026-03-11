"use client"
import { UI } from "@/lib/config"

export default function TopBar() {

  const links = ["focus","lenses","skills","impacts","info","contact"]

  return (
    <div style={{
      position:"fixed",
      top:0,
      width:"100%",
      height:UI.topBarHeight,
      background:"#151515",
      display:"flex",
      alignItems:"center",
      padding:"0 4vw",
      boxSizing:"border-box",
      zIndex:100
    }}>
      <div style={{
        display:"flex",
        alignItems:"center",
        gap:15,
        fontWeight:600
      }}>
        <a href="#focus">
          <img src="/logo.png" style={{height:34}} />
        </a>
          Jason Liu
      </div>
      

      <div style={{
        marginLeft:"auto",
        display:"flex",
        gap:"2vw",
        flexWrap:"wrap"
      }}>
        {links.map(l => (
          <a key={l} href={`#${l}`} style={{whiteSpace:"nowrap"}}>
            {l[0].toUpperCase()+l.slice(1)}
          </a>
        ))}
      </div>
    </div>
  )
}