import Music from '../../assets/christmas-music.mp3'
import Media from '../../assets/media.png'
import './MusicPlayer.scss'
function MusicPlayer() {

    const onPlay = () => {
        new Audio(Music).play()
    }

    return (
        <img
            src={Media}
            alt='media-img'
            onClick={() => onPlay()} 
            className='music-player'
            />
    )
}

export default MusicPlayer