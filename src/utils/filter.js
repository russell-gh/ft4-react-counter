export const filterCharacters = (filter = "", characters) => {
  return characters.filter((item) => {
    if (item.character.toLowerCase().includes(filter.toLowerCase())) {
      return true;
    }
    return false;
  });
};
