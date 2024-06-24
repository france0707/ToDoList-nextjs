import React from "react";
import DeleteButton from "./DeleteButton";
import PendingButton from "./PendingButton";

interface ItemProps {
	task: string;
	index: number;
	deleteTask: (index: number) => void;
}

const Item: React.FC<ItemProps> = ({ task, index, deleteTask }) => {
	return (
		<>
			<li className="hover:bg-gray-200 w-full h-auto px-4 py-2 flex flex-row justify-between item items-center">
				<div className="w-auto flex flex-row justify-start items-center">
					<PendingButton />
					<p className="p-4 w-full h-auto">{task}</p>
				</div>

				<DeleteButton onClick={() => deleteTask(index)} />
			</li>
			<hr />
		</>
	);
};

export default Item;
