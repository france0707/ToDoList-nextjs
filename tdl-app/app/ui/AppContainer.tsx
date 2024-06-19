import React from "react";
import Header from "./Header";
import AddTask from "./AddTask";
import List from "./List";

const AppContainer = () => {
	return (
		<div className="bg-slate-400  w-3/5 h-full mx-auto flex flex-col justify-center">
			<Header></Header>
			<AddTask></AddTask>
			<List></List>
		</div>
	);
};

export default AppContainer;
