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
		<div className="w-auto h-32 rounded-md overflow-hidden">
			<div className="bg-purple-800 w-full h-full rounded-br-full p-4">
				<h1 className="mb-4 text-5xl font-bold text-white text-center">
					To Do List
				</h1>
				<h2 className="text-3xl font-medium text-white">
					{formattedDay},{" "}
					<span className="text-xl">{formattedDate}</span>
				</h2>
			</div>
		</div>
	);
};

export default Header;
