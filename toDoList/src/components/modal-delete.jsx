
const ModalDelete = () => {
    return (
      <>
        <div className='absolute w-full h-full t-0 l-0 z-30 flex justify-center items-center'>
            <div className="center bg-white drop-shadow-lg rounded-lg pl-20 pr-20 pt-6 pb-6 z-30">
            <button className="absolute top-0 right-0 bg-white">X</button>
            <h3 className='text-2xl font-bold mb-6'>Вы уверены что хотите удалить задачу ?</h3>
            <button className='delete-button bg-red-600 w-full p-4 rounded-lg text-white'>X</button>
            </div>
        </div>
      </>
    )
  }
  
  export default ModalDelete
  