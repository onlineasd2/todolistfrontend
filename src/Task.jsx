import { Link, useParams, useLocation } from 'react-router-dom'
//import List from "./components/list";
import React from "react";


function Item() {
	//const params = useParams()
	const location = useLocation()


	//const [task, setTask] = React.useState([]) // Подгрузка задач с сервера

	return (
		<>
			<Link to={'/'}>Домой</Link>
			<div className='container flex justify-center items-center'>
				<div className='p-10 rounded-lg bg-white shadow-lg'>
					<h3 className='text-left text-4xl font-bold mb-4'>
						{location.state.some.title.toString()}
					</h3>
					<p className='text-left'>
						{location.state.some.description.toString()}
					</p>
				</div>
			</div>
		</>
	)
}

export default Item
