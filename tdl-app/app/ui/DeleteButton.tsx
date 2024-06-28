import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

interface DeleteButtonProps {
	onClick: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick }) => {
	return (
		<button
			className="bg-red-500 hover:bg-red-700 w-10 h-10 flex justify-center items-center rounded-md transform transition-transform duration-100 focus:outline-none active:scale-90"
			onClick={onClick}
		>
			<FontAwesomeIcon className="text-xl" icon={faTrashCan} />
		</button>
	);
};

export default DeleteButton;
