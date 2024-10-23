import React from 'react'
//import reactLogo from './assets/react.svg'

import './App.css'
import ModalAdd from './components/modalAdd'
import List from './components/list'

function App() {
  
  const [modalAddACtive, SetModalAddActive] = React.useState(false); // Модальное окно

  return (
    <>
      <ModalAdd active={modalAddACtive} setActive={SetModalAddActive}/>
      <main>
        <section className="section p-12">

          <header className='header flex justify-center items-center relative mb-8'>
            
            <button onClick={() => SetModalAddActive(true)} className="header__button_add p-0 border-none absolute top-0 left-4">
                <img src="./btn-add.svg" className='w-10 h-10' alt="" />
            </button>

            <div className="title flex flex-col justify-center items-center">
              <img className='w-12 h-12' src="./rocket-lunch.svg" alt="" />
              <h2 className='text-4xl font-bold'>Список Задач</h2>
            </div>            
          </header>
          <List/>

        </section>
      </main>
    </>
  )
}

export default App
