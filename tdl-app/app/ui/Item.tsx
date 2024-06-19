import React from "react";

const Item = () => {
	return (
		<li className="bg-amber-200 w-full h-auto px-4 py-2 flex flex-row justify-between item items-center">
			<div className="w-auto flex flex-row justify-start items-center">
				<button className="bg-gray-400 w-auto h-auto px-2 py-1 text-center rounded-md">
					Pending
				</button>
				<p className="p-4 w-full h-auto">Lorem ipsum dolor sit amet</p>
			</div>

			<button className="bg-red-500 w-auto h-12 px-2 text-center rounded-md">
				Trash
			</button>
		</li>
	);
};

export default Item;
