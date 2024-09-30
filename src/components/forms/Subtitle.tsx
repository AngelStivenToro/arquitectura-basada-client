import React from "react";

const Subtitle = ({
										text,
										color = "default-foreground",
										className,
										required = false,
									}: {
	text: string;
	color?: string;
	className?: string;
	required?: boolean;
}) => {
	return (
		<p
			className={`flex justify-start items-center gap-1 font-medium text-${color} mb-[5px]`}
		>
			{required && <i className="bi bi-asterisk text-primary text-xs"></i>}{" "}
			{text}
		</p>
	);
};

export default Subtitle;
