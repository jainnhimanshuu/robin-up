import { useState } from "react";

interface IForm<T> {
  [key: string]: T;
}

const useForm = <T extends IForm>(initialValues: T) => {
  const [values, setValues] = useState<T>(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  return { values, handleChange };
};

export default useForm;
