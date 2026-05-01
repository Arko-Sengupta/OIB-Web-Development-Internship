import React, { useState } from 'react'
import '../Styles/Header.css'
import HeroSection from './CarouselSlide'
import Content from './Content'

const TABS = ['Early-life', 'Career', 'Filmography', 'Business', 'Music', 'Awards']

const TributeHeader = ({ data }) => {
  const [activeTab, setActiveTab] = useState('Early-life')

  const tabData      = data[activeTab] || {}
  const carouselData = tabData.Carousel || {}
  const contentData  = tabData.Content  || {}

  return (
    <>
      <nav className="tribute-nav">
        <div className="tribute-nav__inner">
          {TABS.map((tab) => (
            <button
              key={tab}
              className={`tribute-nav__tab${activeTab === tab ? ' active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.replace('-', ' ')}
            </button>
          ))}
        </div>
      </nav>

      <HeroSection
        image={carouselData.Image}
        title={carouselData.Title}
        subtitle={carouselData.Subtitle}
        name={data.Header}
      />

      <Content
        title={contentData['Content-Title']}
        text={contentData['Content-Text']}
      />
    </>
  )
}

export default TributeHeader