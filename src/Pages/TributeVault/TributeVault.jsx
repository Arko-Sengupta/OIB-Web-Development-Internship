import React from 'react'
import TributeHeader from './Components/Header'
import Footer from './Components/Footer'
import TributeData from '../../Data/TributeData'

const TributeVault = () => (
  <>
    <TributeHeader data={TributeData} />
    <Footer footerText={TributeData.Footer} />
  </>
)

export default TributeVault