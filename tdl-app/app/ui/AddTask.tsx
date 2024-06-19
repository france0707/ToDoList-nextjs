import React from "react";

const AddTask = () => {
	return (
		<div className="flex flex-row w-full h-12 justify-evenly p-2">
			<input
				type="text"
				className="w-3/4 px-2 py-1 border-2 rounded-lg"
			></input>
			<button className="bg-green-400 px-4 rounded-lg text-center">
				ADD
			</button>
		</div>
	);
};

export default AddTask;
