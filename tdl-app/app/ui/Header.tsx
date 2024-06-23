import React from "react";

const Header: React.FC = () => {
	const today = new Date();
	const dayOptions: Intl.DateTimeFormatOptions = { weekday: "long" };
	const dateOptions: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "long",
		day: "numeric",
	};
	const formattedDay = today.toLocaleDateString(undefined, dayOptions);
	const formattedDate = today.toLocaleDateString(undefined, dateOptions);

	return (
		<div className="w-auto h-28">
			<div className="bg-purple-400 w-full h-full rounded-br-full p-4">
				<h1 className="text-2xl font-bold">To Do List</h1>
				<h2 className="text-xl font-medium text-white">
					{formattedDay}
				</h2>
				<h2 className="text-lg font-light text-white">
					{formattedDate}
				</h2>
			</div>
		</div>
	);
};

export default Header;
