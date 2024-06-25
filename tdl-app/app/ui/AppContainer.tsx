"use client";
import React, { useState } from "react";
import Header from "./Header";
import AddTask from "./AddTask";
import List from "./List";

interface Task {
	id: number;
	text: string;
}

const AppContainer: React.FC = () => {
	const [tasks, setTasks] = useState<Task[]>([]);
	const [taskId, setTaskId] = useState<number>(0);

	const addTask = (task: string) => {
		const newTask = { id: taskId, text: task };
		setTasks((prevTasks) => [...prevTasks, newTask]);
		setTaskId((prevId) => prevId + 1);
	};

	const deleteTask = (id: number) => {
		setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
	};

	return (
		<div className="bg-gray-50 min-w-96 max-w-xl sm:mt-8 h-full mx-auto flex flex-col justify-center rounded-md">
			<Header />
			<AddTask addTask={addTask} />
			<hr />
			<List tasks={tasks} deleteTask={deleteTask} />
		</div>
	);
};

export default AppContainer;
