"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

interface AddButtonProps {
	onClick: () => void;
}

const AddButton: React.FC<AddButtonProps> = ({ onClick }) => {
	return (
		<button
			className="bg-green-400 h-full w-11 rounded-md flex justify-center items-center"
			onClick={onClick}
		>
			<FontAwesomeIcon className="text-3xl" icon={faSquarePlus} />
		</button>
	);
};

export default AddButton;
