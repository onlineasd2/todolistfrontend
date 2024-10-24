// import React from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'

//import axios from "axios"

function List({ tasks, onDelete }) {

  return (
    <>
        <div className="list flex justify-center flex-col gap-6 max-w-6xl">
            {tasks?.map((task) => (
            <div key={task.id} className="cursor-pointer list__item flex items-center justify-between p-4 w-full bg-white rounded-md drop-shadow-md">
                <div className="list__title text-left w-9/12">
                    <h3 className='text-2xl font-bold'>{task.title}</h3>
                    <p className='truncate w-full text-gray-600'>{task.description}</p>
                </div>
                <div className="list__buttons flex">
                    <button className='list__button-edit w-20 bg-transparent'><img src="./btn-edit.svg" /></button>
                    <button 
                        onClick={() => onDelete(task.id)} // Удаляем задачу при нажатии
                        className='list__button-delete w-20 bg-transparent'>
                            <img 
                                src="./btn-delete.svg" />
                    </button>
                </div>
            </div>
            ))}
        </div>
    </>
  )
}

export default List
