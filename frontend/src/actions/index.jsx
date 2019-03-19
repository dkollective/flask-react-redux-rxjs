export const changeName = (name) => {
    return {
      type: 'NAME_CHANGE',
      name
    };
}

export const inputName = (name) => {
  return {
    type: 'NAME_INPUT',
    name
  };
}
