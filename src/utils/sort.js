//sort the data
export const sortCharacters = (type, characters) => {
  switch (type) {
    case "character-az":
      characters.sort((item1, item2) => {
        if (item1.character > item2.character) {
          return 1;
        }
        if (item1.character < item2.character) {
          return -1;
        }
        return 0;
      });
      break;

    case "character-za":
      characters.sort((item1, item2) => {
        if (item1.character > item2.character) {
          return -1;
        }
        if (item1.character < item2.character) {
          return 1;
        }
        return 0;
      });
      break;

    case "quote-az":
      characters.sort((item1, item2) => {
        if (item1.quote > item2.quote) {
          return 1;
        }
        if (item1.quote < item2.quote) {
          return -1;
        }
        return 0;
      });
      break;

    case "quote-za":
      characters.sort((item1, item2) => {
        if (item1.quote > item2.quote) {
          return -1;
        }
        if (item1.quote < item2.quote) {
          return 1;
        }
        return 0;
      });
      break;

    default:
      break;
  }
};
