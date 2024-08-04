import { FC } from 'react'
import './ModalError.scss'
import { createPortal } from 'react-dom'
import Error from '../../assets/error.png'
import { ModuleProps } from '../../types/types'

const modalElement = document.getElementById('modal') as HTMLElement

const ModalError: FC<ModuleProps> = ({ setIsModule, isModule }) => {

  return createPortal(
    (
      <div className={isModule ? 'module-wrapper' : 'module-wrapper disabled'}>
        <div className='module'>
          <img
            src={Error}
            className='modal-image'
            alt='modal-image'
          />
          <p className='error-message-1'>Ooops!</p>
          <p className='error-message-2'>Input was empty...</p>
          <button className='button-cancel'
            onClick={() => setIsModule(false)}>Try again!</button>
        </div>
      </div>
    )
    , modalElement
  )

}

export default ModalError