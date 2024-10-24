import React from 'react'
//import reactLogo from './assets/react.svg'
import axios from "axios"
import './App.css'
import Modal from './components/modal'
import List from './components/list'

function App() {

  const [modalAddActive, SetModalAddActive] = React.useState(false); // Модальное окно
  const [taskTitle, setTaskTitle] = React.useState('');  // Поле заголовка в модальном окне
  const [taskDescription, setTaskDescription] = React.useState(''); // Поле описания в модальном окне
  const [tasks, setTasks] = React.useState([]); // Подгрузка задач с сервера
  const [isSubmitAdd, setIsSubmitAdd] = React.useState(false); // Состояние для блокировки повторной отправки
  const [editTaskId, setEditTaskId] = React.useState(null); // ID редактируемой задачи
  const [modalEditActive, setModalEditActive] = React.useState(false); // Модальное окно для редактирования


  // Загружаем задачи при загрузке страницы один раз
  React.useEffect(() => {
    FetchTask(); // Функция для загрузки задач GET запрос
  }, []);

  // Функция для загрузки задач GET запрос
  const FetchTask = async () => {
    try {
        const response = await axios.get("https://671796f7b910c6a6e0290314.mockapi.io/tasks");
        setTasks(response.data); // Добавляем задачу визуально на страницу
    } catch (error) {
      console.error("Ошибка при загрузке задач:", error);
    }
  }

  // Отправка Post запроса из формы
  const handleAddTask = async () => {
    if (isSubmitAdd) return; // Если запрос уже выполняется, блокируем повторную отправку
    setIsSubmitAdd(true); // Устанавливаем флаг отправки в true
    try {
      const response = await axios.post("https://671796f7b910c6a6e0290314.mockapi.io/tasks", {
        title: taskTitle, // отправляем из формы в post запрос json
        description: taskDescription // отправляем из формы в post запрос json
      });
      console.log('Задача добавлена:', response.data);
      setTaskTitle(''); // Очищаем заголовок
      setTaskDescription(''); // Очищаем описание
      FetchTask(); // Функция для загрузки задач GET запрос
      SetModalAddActive(false); // Закрываем модальное окно после отправки
    } catch (error) {
      console.error('Ошибка при добавлении задачи:', error);
    } finally {
      setIsSubmitAdd(false); // Снимаем флаг отправки после завершения запроса
    }
  };

    // Функция для удаления задачи
    const handleDeleteTask = async (taskId) => {
      try {
        await axios.delete(`https://671796f7b910c6a6e0290314.mockapi.io/tasks/${taskId}`);
        setTasks((prevTasks) => prevTasks.filter(task => task.id !== taskId)); // Удаляем задачу из состояния
      } catch (error) {
        console.error('Ошибка при удалении задачи:', error);
      }
    };

    // Функция для открытия модального окна редактирования и загрузки текущих данных задачи
    const handleEditClick = (task) => {
      setTaskTitle(task.title);
      setTaskDescription(task.description);
      setEditTaskId(task.id); // Сохраняем ID редактируемой задачи
      setModalEditActive(true); // Открываем модальное окно для редактирования
    };

    // Функция для редактирования задачи
    const handleEditTask = async () => {
      if (isSubmitAdd) return;
      setIsSubmitAdd(true);
      try {
        console.log(editTaskId);
        await axios.put(`https://671796f7b910c6a6e0290314.mockapi.io/tasks/${editTaskId}`, {
          title: taskTitle,
          description: taskDescription,
        });
        setTaskTitle('');
        setTaskDescription('');
        setModalEditActive(false);
        FetchTask(); // Перезагружаем задачи для обновления списка
      } catch (error) {
        console.error('Ошибка при редактировании задачи:', error);
      } finally {
        setIsSubmitAdd(false);
      }
    };

  return (
    <>
      <Modal active={modalAddActive} setActive={SetModalAddActive}>
        <h2 className="text-center text-2xl font-bold pb-6 ">Добавить задачу</h2>
        <h4 className="text-left">Заголовок</h4>
        <input 
          type="text" 
          className="shadow-md w-96 p-2 mb-2 rounded-md" 
          value={taskTitle} // используем здесь переменную
          onChange={(e) => setTaskTitle(e.target.value)} 
        />
        <h4 className="text-left">Текст</h4>
        <textarea
          className="shadow-md w-full h-48 p-2 mb-6 rounded-md"
          name="description"
          id="description"
          value={taskDescription} // используем здесь переменную
          onChange={(e) => setTaskDescription(e.target.value)} 
        />
        <button 
          onClick={handleAddTask} // Отправка Post запроса из формы
          disabled={isSubmitAdd} // Делаем кнопку неактивной, если идет отправка запроса
          className="shadow-md w-full bg-green-500 text-slate-50 text-2xl text-center">
          {isSubmitAdd ? 'Отправка...' : '+'} </button>
      </Modal>

      {/* Модальное окно для редактирования задачи */}
      <Modal active={modalEditActive} setActive={setModalEditActive}>
        <h2 className="text-center text-2xl font-bold pb-6">Редактировать задачу</h2>
        <h4 className="text-left">Заголовок</h4>
        <input
          type="text"
          className="shadow-md w-96 p-2 mb-2 rounded-md"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <h4 className="text-left">Текст</h4>
        <textarea
          className="shadow-md w-full h-48 p-2 mb-6 rounded-md"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
        <button
          className="shadow-md w-full bg-blue-500 text-slate-50 text-2xl text-center"
          onClick={handleEditTask}
          disabled={isSubmitAdd} // Делаем кнопку неактивной при отправке
        >
          {isSubmitAdd ? 'Сохранение...' : 'Сохранить'} {/* Меняем текст кнопки в зависимости от состояния отправки */}
        </button>
      </Modal>

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
          <List tasks={tasks} onDelete={handleDeleteTask} onEdit={handleEditClick} /> {/* Отправка Post запроса из формы */}

        </section>
      </main>
    </>
  )
}
  


export default App
