import React from "react";
import Item from "./Item";

interface ListProps {
	tasks: string[];
	deleteTask: (index: number) => void;
}

const List: React.FC<ListProps> = ({ tasks, deleteTask }) => {
	return (
		<div>
			<ul>
				{tasks.map((task, index) => (
					<Item
						key={index}
						task={task}
						index={index}
						deleteTask={deleteTask}
					></Item>
				))}
			</ul>
		</div>
	);
};

export default List;
