const imageReducer = (
  state = [
    "https://www.btgraphix.com/walk/w1.jpg",
    "https://www.btgraphix.com/walk/w2.jpg",
    "https://www.btgraphix.com/walk/w3.jpg",
    "https://www.btgraphix.com/walk/w4.jpg",
    "https://www.btgraphix.com/walk/w5.jpg",
    "https://www.btgraphix.com/walk/w6.jpg",
    "https://www.btgraphix.com/walk/w7.jpg",
    "https://www.btgraphix.com/walk/w8.jpg"
  ],
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default imageReducer;
