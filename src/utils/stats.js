export const calcTotalLiked = (characters) => {
  let total = 0;
  characters.forEach((item) => {
    if (item.liked === true) {
      total++;
    }
  });

  return total;
};
