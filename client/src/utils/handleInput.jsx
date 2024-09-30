export const handleInput = (setState) => (e) => {
  const { name, value, files } = e.target;


  if (files && files.length > 0) {
    const file = files[0];
    const previewURL = URL.createObjectURL(file);

    setState((prevState) => ({
      ...prevState,
      [name]: file,
      [`${name}_preview`]: previewURL,
    }));
  } else {
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
};

export const handleModelInput = (setState) => (e) => {
  const { value } = e.target;
  setState(value);
};
