"use client";
import React, { useState } from "react";
import Header from "./Header";
import AddTask from "./AddTask";
import List from "./List";

const AppContainer: React.FC = () => {
	const [tasks, setTasks] = useState<string[]>([]);

	const addTask = (task: string) => {
		setTasks([...tasks, task]);
	};

	const deleteTask = (index: number) => {
		setTasks(tasks.filter((_, i) => i !== index));
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
