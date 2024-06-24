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

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			handleAddTask();
		}
	};

	return (
		<div className="sticky top-0 bg-inherit flex flex-row w-full h-16 justify-center items-center py-3 my-5">
			<input
				type="text"
				className="w-3/4 h-full px-2 py-1 border-2 rounded-lg border-purple-300 outline-none"
				value={taskValue}
				onChange={(e) => setTaskValue(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
			<AddButton onClick={handleAddTask} />
		</div>
	);
};

export default AddTask;
