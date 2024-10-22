//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'

function List() {
  //const [count, setCount] = useState(0)

  return (
    <>
        <div className="list flex justify-center flex-col gap-6 max-w-6xl">

            <div className="list__item flex items-center justify-between p-4 w-full bg-white rounded-md drop-shadow-md">
                <div className="list__title text-left w-9/12">
                <h3 className='text-2xl font-bold'>Задача 1</h3>
                <p className='truncate w-full text-gray-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                </div>
                <div className="list__buttons flex">
                <button className='list__button-edit w-20 bg-transparent'><img src="./btn-edit.svg" /></button>
                <button className='list__button-delete w-20 bg-transparent'><img src="./btn-delete.svg" /></button>
                </div>
            </div>

        </div>
    </>
  )
}

export default List
