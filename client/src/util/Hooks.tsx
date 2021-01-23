import { useState } from 'react';

export const useForm = (callback: any, initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.SyntheticEvent) => {
    console.log('onSubmit clicked')
    e.preventDefault();
    callback();
  };

  return {
    onChange,
    onSubmit,
    values,
  };
};
