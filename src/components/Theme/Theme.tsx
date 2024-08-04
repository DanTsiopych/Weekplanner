import { useState, useEffect } from 'react'
import './Theme.scss'
function Theme() {
    const bodyElement = document.querySelector('body') as HTMLElement
    const [theme, setTheme] = useState(false)

    useEffect(() => {
        bodyElement.setAttribute('data-theme', 'light')
    }, [])

    return (
        <div className={!theme ? 'switcher-button' : 'switcher-button active'}
            onClick={() => {
                if (theme) {
                    bodyElement.setAttribute('data-theme', 'light')
                }
                else {
                    bodyElement.setAttribute('data-theme', 'dark')
                }
                setTheme(!theme)
            }}
        >
            <div className={!theme ? 'switcher' : 'switcher active'}></div>
        </div>
    )
}

export default Theme