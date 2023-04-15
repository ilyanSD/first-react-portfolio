import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { useNavigate } from 'react-router-dom'
import Logo from './Logo'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = 'lyusarchuk'.split('')
  const jobArray = 'Software Engineer'.split('')

  const navigate = useNavigate()

  const contactMeHandler = () => {
    navigate('/contact')
  }

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 6000)
  }, [])

  return (
    <div className='container home-page'>
      <div className='text-zone'>
        <h1>
          <span className={`${letterClass} _11`}>H</span>
          <span className={`${letterClass} _12`}>i,</span>

          <br /> 

          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <span className={`${letterClass} _15`}> </span>
          <span className={`${letterClass} _16`}>I</span>
          <span className={`${letterClass} _17`}>l</span>
          <span className={`${letterClass} _18`}>y</span>
          <span className={`${letterClass} _19`}>a</span>

          <img src={LogoTitle} alt='developer' />
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={20} />
          <br />
          <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={30} />
        </h1>
        <h2>Backend & Web3 Developer | Laravel & NodeJS Expert</h2>
        <button className='flat-button' onClick={contactMeHandler}>CONTACT ME</button>
      </div>
      <Logo />
    </div>
  )
}

export default Home