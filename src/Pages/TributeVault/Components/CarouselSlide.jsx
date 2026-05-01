import React, { useRef, useEffect } from 'react'
import '../Styles/CarouselSlide.css'

const HeroSection = ({ image, title, subtitle, name }) => {
  const imgRef = useRef(null)

  useEffect(() => {
    const el = imgRef.current
    if (!el) return

    const OnScroll = () => {
      el.style.transform = `translateY(${window.scrollY * 0.35}px)`
    }

    window.addEventListener('scroll', OnScroll, { passive: true })
    OnScroll()
    return () => window.removeEventListener('scroll', OnScroll)
  }, [])

  return (
    <div className="hero">
      <img ref={imgRef} src={image} alt={title} className="hero__image" />
      <div className="hero__overlay" />
      <div className="hero__content">
        <span className="hero__tag">Tribute</span>
        <h1 className="hero__name">{name}</h1>
        <h2 className="hero__section">{title}</h2>
        <p className="hero__subtitle">{subtitle}</p>
      </div>
    </div>
  )
}

export default HeroSection