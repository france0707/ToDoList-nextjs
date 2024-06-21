import React from "react";
import Item from "./Item";

interface ListProps {
	tasks: string[];
}

const List: React.FC<ListProps> = ({ tasks }) => {
	return (
		<div>
			<ul>
				{tasks.map((task, index) => (
					<Item key={index} task={task} />
				))}
			</ul>
		</div>
	);
};

export default List;
