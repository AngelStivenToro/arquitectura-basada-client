"use client";

import { useState } from "react";
import Select from "../Select";
import Subtitle from "./Subtitle";
import { validateValue, Validations } from "../hooks/useValidateForm";


interface Props {
	name: string;
	placeholder?: string;
	icon?: string;
	label?: { value?: string; required?: boolean; className?: string };
	onChange?: ({
		name,
		value,
	}: {
		name: string;
		value: string | number | null;
	}) => any;
	children?: any;
	validations?: (nameField: string) => Validations | undefined;
	required?: boolean;
	defaultValue?: string;
	variant?: "flat" | "bordered" | "faded" | "underlined";
	onlySelect?: boolean;
	className?: string;
}

const SelectForm = ({
	name,
	placeholder,
	icon,
	label,
	onChange,
	children,
	validations: getValidators,
	required,
	defaultValue,
	variant,
	onlySelect = false,
	className,
}: Props) => {
	const [error, setError] = useState<string | undefined>(undefined);

	const validations =
		typeof getValidators === "function" ? getValidators(name) : undefined;

	const handleChange = ({
		name,
		value,
	}: {
		name: string;
		value: string | null;
	}) => {
		const result = validateValue(value, validations);

		if (result.error) {
			setError(result.error);
		} else {
			setError(undefined);
		}

		if (onChange)
			onChange({
				name,
				value: result.value,
			});
		return { name, value: result.value };
	};

	if (onlySelect) {
		return (
			<Select
				className={className}
				name={name}
				placeholder={placeholder ?? "Seleccionar " + name}
				icon={icon}
				variant={variant}
				error={error}
				onChange={handleChange}
				defaultValue={defaultValue}
				disallowEmptySelection={
					required ?? validations?.required ? true : false
				}
			>
				{children}
			</Select>
		);
	}

	return (
		<div className="text-start w-full">
			<Subtitle
				text={
					label?.value ??
					name[0].toString().toUpperCase() + name.toString().substring(1) + ":"
				}
				required={label?.required ?? true}
				className={label?.className}
			/>
			<Select
				className={className}
				name={name}
				placeholder={placeholder ?? "Seleccionar " + name}
				icon={icon}
				variant={variant}
				error={error}
				onChange={handleChange}
				defaultValue={defaultValue}
				disallowEmptySelection={
					required ?? validations?.required ? true : false
				}
			>
				{children}
			</Select>
		</div>
	);
};

export default SelectForm;
