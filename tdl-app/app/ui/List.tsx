import React from "react";
import Item from "./Item";
import ListPlaceHolder from "./ListPlaceHolder";

interface ListProps {
	tasks: string[];
	deleteTask: (index: number) => void;
}

const List: React.FC<ListProps> = ({ tasks, deleteTask }) => {
	return (
		<div>
			<ul>
				{tasks.length === 0 ? (
					<ListPlaceHolder />
				) : (
					tasks.map((task, index) => (
						<Item
							key={index}
							task={task}
							index={index}
							deleteTask={deleteTask}
						/>
					))
				)}
			</ul>
		</div>
	);
};

export default List;
