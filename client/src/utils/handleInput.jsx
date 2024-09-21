export const handleInput = (setState) => (e) => {
  const { name, value, files } = e.target;

  // If the input is a file, create a preview URL
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

// export const handleInput = (setState) => (e) => {
//   const { name, value, files } = e.target;

//   setState((prevState) => ({
//     ...prevState,
//     [name]: files ? files[0] : value,
//   }));
// };

export const handleModelInput = (setState) => (e) => {
  const { name, value } = e.target;

  setState(value);
};
