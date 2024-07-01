import React, { useState } from "react";

const PendingButton = () => {
	const [isPending, setIsPending] = useState(true);

	const handleClick = () => {
		setIsPending(!isPending);
	};

	return (
		<button
			className={`w-auto h-auto px-2 py-1 font-medium text-center rounded-md transform transition-transform duration-100 focus:outline-none active:scale-90 ${
				isPending
					? "bg-amber-200 hover:bg-amber-400"
					: "bg-green-400 hover:bg-green-600"
			}`}
			onClick={handleClick}
		>
			{isPending ? "Pending" : "Complete"}
		</button>
	);
};

export default PendingButton;
