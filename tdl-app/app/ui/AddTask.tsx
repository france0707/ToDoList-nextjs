"use client";
import React, { useState } from "react";
import AddButton from "./AddButton";

interface AddTaskProps {
	addTask: (task: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ addTask }) => {
	const [taskValue, setTaskValue] = useState<string>("");

	const handleAddTask = () => {
		if (taskValue.trim() !== "") {
			addTask(taskValue);
			setTaskValue("");
		}
	};

	return (
		<div className="flex flex-row w-full h-14 justify-evenly p-2 my-5">
			<input
				type="text"
				className="w-3/4 h-full px-2 py-1 border-2 rounded-lg"
				onChange={(e) => setTaskValue(e.target.value)}
			></input>
			<AddButton onClick={handleAddTask} />
		</div>
	);
};

export default AddTask;
