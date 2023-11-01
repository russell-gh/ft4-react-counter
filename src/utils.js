export const sort = (todos, done) => {
  const copy = [...todos];
  //sort by completed
  copy.sort((item1, item2) => {
    if (item1.completed === true) {
      return -1;
    }
    if (item2.completed === true) {
      return 1;
    }
    return 0;
  });
  //reverse array if needed
  if (done) {
    copy.reverse();
  }
  return copy;
};
