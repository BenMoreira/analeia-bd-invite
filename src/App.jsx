import { useState } from 'react'
import { motion } from 'framer-motion'
import bluey from './assets/Bluey.webp'
import bingo from './assets/Bingo.png'
import bg from './assets/bg.webp'
import './App.css'

function App() {
  const [popup, setPopup] = useState(true);
  const [spanish, setSpanish] = useState(false);

  return (
    <>
      { popup ?
        <div className='w-full min-h-screen bg-black'>
          <div className='w-full h-screen flex flex-col justify-center items-center gap-8'>
            <button onClick={() => setPopup(false)}
            className='rounded-lg px-[3.15rem] py-4 text-xl bg-blue-400'>
              English
            </button>

            <button onClick={() => {setPopup(false); setSpanish(true)}}
            className='rounded-lg px-12 py-4 text-xl bg-blue-400'>
              Español
            </button>
          </div>
        </div> :
        <div className='w-full min-h-screen bg-[url(./assets/bg.webp)] bg-cover bg-center'>
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
          <div className='w-full h-screen flex flex-col items-center gap-5'>
            <div className='w-full flex flex-col items-start'>
              <img src={bluey} className='w-[150px] h-[180px]' />
            </div>

            {spanish ? 
              <div className=''>Hay un bebé en Camino...</div> :
              <div className='font-bold text-4xl'>First Birthday Party</div>
            }

            {spanish ?
              <div className=''>Que crees que es?</div> :
              <div className='text-2xl'>Join us to celebrate</div>
            }

            {spanish ? 
              <div className=''>Niño</div> :
              <div className='font-bold text-3xl'>Analeia Jade Torres</div>
            }

            {spanish ?
              <div>O</div> :
              <div className='text-2xl'>Saturday, October 5th at 0:00 PM</div>
            }

            {spanish ?
              <div>Niña?</div> :
              <div className='text-2xl'>3896 Egypt Rd., Snellville, Georgia, 30039</div>
            }

            {spanish ?
              <div className=''>Ven y descubrelo en la</div> :
              <div className='text-2xl'>Amazon Link</div>
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
