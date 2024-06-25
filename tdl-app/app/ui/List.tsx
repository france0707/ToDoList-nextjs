import React from "react";
import Item from "./Item";
import ListPlaceHolder from "./ListPlaceHolder";

interface ListProps {
	tasks: { id: number; text: string }[];
	deleteTask: (id: number) => void;
}

const List: React.FC<ListProps> = ({ tasks, deleteTask }) => {
	return (
		<div>
			<ul>
				{tasks.length === 0 ? (
					<ListPlaceHolder />
				) : (
					tasks.map((task) => (
						<Item
							key={task.id}
							task={task}
							deleteTask={deleteTask}
						/>
					))
				)}
			</ul>
		</div>
	);
};

export default List;
