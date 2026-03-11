"use client"

export default function DownArrow() {

  const scrollNext = () => {
    const sections = Array.from(document.querySelectorAll("section"))
    const currentY = window.scrollY + window.innerHeight / 2

    for (let i = 0; i < sections.length; i++) {
      const rect = sections[i].getBoundingClientRect()
      const top = rect.top + window.scrollY

      if (top > currentY) {
        window.scrollTo({ top, behavior: "smooth" })
        break
      }
    }
  }

  return (
    <div
      onClick={scrollNext}
      style={{
        position:"fixed",
        bottom:20,
        left:"50%",
        transform:"translateX(-50%)",
        fontSize:"2rem",
        opacity:0.35,
        cursor:"pointer",
        zIndex:200
      }}
    >
      ↓
    </div>
  )
}