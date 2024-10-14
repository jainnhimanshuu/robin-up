import { IUnknownRecord } from "@rbu/types";
import { useState } from "react";

const useForm = (initialValues: IUnknownRecord) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  return { values, handleChange };
};

export default useForm;
