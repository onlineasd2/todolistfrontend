//import React from 'react'

const ModalAdd = ({active, setActive}) => {
  return (
    <>
      <div className={active ? "block" : "hidden"}>
        <div onClick={() => setActive(false)} className="add-modal h-screen w-screen backdrop-opacity-40 fixed top-0 left-0 flex items-center justify-center bg-blue-900/40 z-10">
          <div onClick={e => e.stopPropagation()} className="relative add-modal__content p-8 rounded-lg bg-stone-50">
            <button onClick={() => setActive(false)} className="absolute top-0 right-0">x</button>
            <h2 className="text-center text-2xl font-bold pb-6 ">Добавить задачу</h2>
            <h4 className="text-left">Заголовок</h4>
            <input type="text" className="shadow-md w-96 p-2 mb-2 rounded-md"/>
            <h4 className="text-left">Текст</h4>
            <textarea className="shadow-md w-full h-48 p-2 mb-6 rounded-md" name="description" id="description"></textarea>
            <button className="w-full bg-green-500 text-slate-50 text-2xl text-center">+</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalAdd
