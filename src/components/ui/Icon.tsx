"use client";

const Icon = ({
	icon,
	className = "",
}: {
	icon: string;
	className?: string;
}) => {
	return (
		<i className={`bi bi-${icon}`}></i>
	);
};

export default Icon;