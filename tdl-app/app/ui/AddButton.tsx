import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

interface AddButtonProps {
	onClick: () => void;
}

const AddButton: React.FC<AddButtonProps> = ({ onClick }) => {
	return (
		<button
			className="h-fit w-12 mx-4 rounded-md flex justify-center items-center transform transition-transform duration-100 focus:outline-none active:scale-90"
			onClick={onClick}
		>
			<FontAwesomeIcon
				className="text-5xl text-purple-600 hover:text-purple-800"
				icon={faSquarePlus}
			/>
		</button>
	);
};

export default AddButton;
