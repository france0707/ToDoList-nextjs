import React, { useState } from "react";
import DeleteButton from "./DeleteButton";
import PendingButton from "./PendingButton";

interface ItemProps {
	task: { id: number; text: string };
	deleteTask: (id: number) => void;
}

const Item: React.FC<ItemProps> = ({ task, deleteTask }) => {
	const [isDeleting, setIsDeleting] = useState(false);

	const handleDelete = () => {
		setIsDeleting(true);
		setTimeout(() => deleteTask(task.id), 500);
	};

	return (
		<>
			<li
				className={`bg-inherit hover:bg-gray-200 w-full h-auto px-4 py-2 flex flex-row justify-between items-center transition-all ${
					isDeleting ? "animate-fade-out-left" : ""
				}`}
			>
				<div className="w-4/5 flex flex-row justify-start items-center">
					<PendingButton />
					<p className="p-4 w-full h-auto">{task.text}</p>
				</div>

				<DeleteButton onClick={handleDelete} />
			</li>
			<hr className="pb-1 rounded-b-md" />
		</>
	);
};

export default Item;
