
const Modal = ({active, setActive, children}) => {
  return (
    <>
      <div className={active ? "block" : "hidden"}>
        <div onClick={() => setActive(false)} className="add-modal h-screen w-screen backdrop-opacity-40 fixed top-0 left-0 flex items-center justify-center bg-blue-900/40 z-10">
          <div onClick={e => e.stopPropagation()} className="relative add-modal__content p-8 rounded-lg bg-stone-50">
          <button onClick={() => setActive(false)} className="absolute top-0 right-0">X</button>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
