import './index.scss'
import LogoS from '../../../assets/images/logo-s.png'
import { useRef, useEffect } from 'react'
import LogoSVG from './LogoSVG'

const Logo = () => {

  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  return (
    <div className='logo-container' ref={bgRef}>
      <img ref={solidLogoRef} src={LogoS} alt='logo-s-home' className='solid-logo' />
      <LogoSVG ref={outlineLogoRef} />
    </div>
  )
}

export default Logo