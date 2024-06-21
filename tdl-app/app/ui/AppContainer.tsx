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
	return (
		<div className="bg-slate-200  w-3/5 h-full mx-auto flex flex-col justify-center">
			<Header></Header>
			<AddTask addTask={addTask}></AddTask>
			<List tasks={tasks}></List>
		</div>
	);
};

export default AppContainer;
