import CurrencyInput from "react-currency-input-field";

interface Props {
  name: string;
  defaultValue?: number;
  onChange: any;
  className?: string;
  label?: string;
  required?: boolean;
}

const InputMoney = ({
  name,
  className,
  defaultValue,
  onChange,
  label,
  required = false,
}: Props) => {
  const classInput =
    "mb-[10px] items-center py-2 pl-7 pr-2 w-full h-[48px] rounded-2xl bg-default-white border-2 border-divider outline-none select-none hover:border-[#A9A9A9] ";

  return (
    <>
      <div className="relative">
        <p className="flex justify-start items-center font-medium mb-1">
          {required && <i className="bi bi-asterisk text-primary text-xs"></i>}{" "}
          {label}
        </p>
        <i
          className="bi bi-currency-dollar absolute mt-[10px] ml-2 text-xl text-dark-gray"
          title="Valor númerico"
        ></i>
        <CurrencyInput
          id={name}
          name={name}
          placeholder="100.000"
          className={classInput + className ?? ""}
          defaultValue={defaultValue}
          allowDecimals={false}
          allowNegativeValue={false}
          onValueChange={(value, name) =>
            onChange({ name, value: isNaN(Number(value)) ? 0 : Number(value) })
          }
        />
      </div>
    </>
  );
};

export default InputMoney;
