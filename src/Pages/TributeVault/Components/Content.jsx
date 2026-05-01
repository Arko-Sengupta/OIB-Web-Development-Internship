import React from 'react'
import '../Styles/Content.css'

const Content = ({ title, text }) => {
  const paragraphs = text ? text.split('\n').filter(Boolean) : []

  return (
    <section className="content-section">
      <h2 className="content-section__title">{title}</h2>
      <div className="content-section__divider">
        <div className="content-section__gem" />
      </div>
      <div className="content-section__body">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  )
}

export default Content