import React from "react";
import { Select as SelectNextUi } from "@nextui-org/react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import Icon from "./ui/Icon";

interface Props {
	name?: string;
	icon?: string;
	placeholder?: string;
	required?: boolean;
	disallowEmptySelection?: boolean;
	value?: string;
	variant?: "flat" | "bordered" | "faded" | "underlined";
	defaultValue?: string;
	defaultValues?: string[];
	selectedKeys?: string[];
	selectionMode?: "multiple" | "single";
	className?: string;
	isDisabled?: boolean;
	disabledKeys?: string[];
	error?: string;
	onChange?: ({ name, value }: { name: string; value: string | null }) => any;
	children?: any;
}

const Select = ({
	name,
	icon,
	placeholder,
	required,
	disallowEmptySelection,
	className,
	isDisabled = false,
	disabledKeys,
	error,
	value,
	variant = "faded",
	defaultValue,
	defaultValues,
	selectionMode,
	onChange,
	children,
}: Props) => {
	return (
		<SelectNextUi
			aria-label={name}
			radius="lg"
			size="sm"
			startContent={
				icon && <Icon icon={icon} className={error && "text-red"} />
			}
			placeholder={placeholder ?? "Seleccionar una opción"}
			errorMessage={error ?? null}
			isInvalid={error ? true : false}
			classNames={{
				errorMessage: "text-sm font-medium",
				value: "text-base",
				listbox:"bg-default-white",
				popoverContent: "bg-default-white",
				innerWrapper: "bg-default-white",
				trigger: "bg-default-white"
			}}
			isDisabled={isDisabled}
			value={value}
			required={required}
			disabledKeys={disabledKeys}
			className={twMerge(clsx("mb-[10px] outline-none select-none", className))}
			variant={variant}
			selectionMode={selectionMode}
			disallowEmptySelection={disallowEmptySelection}
			onChange={(e) => {
				if (onChange) {
					const value = String(e.target.value).trim();
					onChange({
						name: String(e.target.name).trim(),
						value: value !== "" ? value : null,
					});
				}
			}}
			name={name}
			defaultSelectedKeys={
				defaultValues
					? defaultValues
					: defaultValue
					? [defaultValue]
					: undefined
			}
		>
			{children}
		</SelectNextUi>
	);
};

export default Select;

("mb-[10px] mx-0 p-2 w-full h-[39px] rounded-2xl bg-soft-white border border-borders-light transition-all outline-none select-none hover:border-soft-primary focus:border-primary input-shadow");
