import { useState } from "react";

interface IForm<T> {
  [key: string]: T;
}

const useForm = <T,>(initialValues: IForm<T>) => {
  const [values, setValues] = useState<IForm<T>>(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value as T, // Cast to T to fit the generic type
    }));
  };

  return { values, handleChange };
};

export default useForm;
