//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <section className="section p-12">
          <header className='header flex justify-center relative'>
            <button className="header__button_add p-0 border-none absolute top-0 left-0"><img src="./btn-add.svg" className='w-10 h-10' alt="" /></button>
            <div className="title flex flex-col justify-center items-center">
              <img className='w-12 h-12' src="./rocket-lunch.svg" alt="" />
              <h2 className='text-4xl font-bold'>Список Задач</h2>
            </div>            
          </header>
          <div className="list flex justify-center flex-col gap-6 max-w-6xl">

            <div className="list__item flex items-center justify-between p-4 w-full bg-white rounded-md drop-shadow-md">
              <div className="list__title text-left w-9/12">
                <h3 className='text-2xl font-bold'>Задача 1</h3>
                <p className='truncate w-full'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
              </div>
              <div className="list__buttons flex">
                <button className='list__button-edit w-20 bg-transparent'><img src="./btn-edit.svg" /></button>
                <button className='list__button-delete w-20 bg-transparent'><img src="./btn-delete.svg" /></button>
              </div>
            </div>

          </div>

        </section>
      </main>
    </>
  )
}

export default App
