import { useState } from 'react'
import { motion } from 'framer-motion'
import bluey from './assets/Bluey.webp'
import bingo from './assets/Bingo.png'
import bg from './assets/bg.webp'
import './App.css'

function App() {
  const [popup, setPopup] = useState(true);
  const [spanish, setSpanish] = useState(false);

  let audio = new Audio("/blueysong.mp3");

  const start = () => {
    audio.play();
  }

  return (
    <>
      { popup ?
        <div className='w-full min-h-screen bg-black'>
          <div className='w-full h-screen flex flex-col justify-center items-center gap-8'>
            <button onClick={() => {setPopup(false); start()}}
            className='rounded-lg px-[3.15rem] py-4 text-xl bg-blue-400'>
              English
            </button>

            <button onClick={() => {setPopup(false); setSpanish(true); start()}}
            className='rounded-lg px-12 py-4 text-xl bg-blue-400'>
              Español
            </button>
          </div>
        </div> :
        <div className='w-full bg-[url(./assets/bg.webp)] bg-cover bg-center'>
          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 3
              }
            }}
          >
          <div className='w-full h-screen flex flex-col items-center gap-3'>
            <div className='w-full flex flex-col items-start'>
              <img src={bluey} className='w-[150px] h-[180px]' />
            </div>

            {spanish ? 
              <div className='font-bold text-2xl'>¡Estás invitado a la Primera</div> :
              <div className='font-bold text-2xl'>You're invited to Analeia's</div>
            }

            {spanish ? 
              <div className='font-bold text-2xl'>Fiesta de</div> :
              <div className='hidden'></div>
            }

            {spanish ? 
              <div className='font-bold text-2xl'>Cumpleaños de Analeia!</div> :
              <div className='font-bold text-2xl'>1st Birthday Party!</div>
            }

            {spanish ?
              <div className='text-xl'>Ven con nosotros a celebrar</div> :
              <div className='text-xl'>Join us to celebrate</div>
            }

            {spanish ? 
              <div className='font-bold text-2xl'>Analeia Jade Torres</div> :
              <div className='font-bold text-2xl'>Analeia Jade Torres</div>
            }

            {spanish ?
              <div className='text-xl'>Sábado, Octubre 5 a las 5:00 PM</div> :
              <div className='text-xl'>Saturday, October 5th at 5:00 PM</div>
            }

            {spanish ?
              <div className='text-xl'>3896 Egypt Rd., Snellville, Georgia, 30039</div> :
              <div className='text-xl'>3896 Egypt Rd., Snellville, Georgia, 30039</div>
            }

            {spanish ?
              <div className='text-xl'>¿No sabes qué regalarle?</div> :
              <div className='text-xl'>Don't know what to get her?</div>
            }

            {spanish ?
              <div className='text-xl'>Mira aquí: <a className='cursor font-bold underline text-blue-600' href='https://www.amazon.com/hz/wishlist/ls/H3T2MBHXXZHC?ref_=wl_share'>Amazon</a></div> :
              <div className='text-xl'>Check here: <a className='cursor font-bold underline text-blue-600' href='https://www.amazon.com/hz/wishlist/ls/H3T2MBHXXZHC?ref_=wl_share'>Amazon</a></div>
            }

            <div className='w-full flex flex-col items-end'>
              <img src={bingo} className='w-[150px] h-[180px]' />
            </div>
          </div>
          </motion.div>
        </div>
      }
    </>
  )
}

export default App
