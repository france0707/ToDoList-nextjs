import React from "react";
import AddButton from "./AddButton";

const AddTask = () => {
	return (
		<div className="flex flex-row w-full h-12 justify-evenly p-2">
			<input
				type="text"
				className="w-3/4 px-2 py-1 border-2 rounded-lg"
			></input>
			<AddButton></AddButton>
		</div>
	);
};

export default AddTask;
