import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const DeleteButton = () => {
	return (
		<button className="bg-red-500 hover:bg-red-700 w-10 h-10 flex justify-center items-center rounded-md">
			<FontAwesomeIcon className="text-xl" icon={faTrashCan} />
		</button>
	);
};

export default DeleteButton;
