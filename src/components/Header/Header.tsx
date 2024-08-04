import './Header.scss'

import Timer from '../Timer/Timer'
import Theme from '../Theme/Theme'
import MusicPlayer from '../MusicPlayer/MusicPlayer'

const Header = () => {
  return (
    <header className='header'>
      <div className='header-info'>
        <p className='header-title'>Weekly Planner</p>
        <Timer />
        <MusicPlayer />
      </div>
      <Theme />
    </header>
  )
}

export default Header