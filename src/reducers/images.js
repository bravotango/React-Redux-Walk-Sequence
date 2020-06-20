const imageReducer = (
  state = [
    "/assets/walk/1.jpg",
    "/assets/walk/2.jpg",
    "/assets/walk/3.jpg",
    "/assets/walk/4.jpg",
    "/assets/walk/5.jpg",
    "/assets/walk/6.jpg",
    "/assets/walk/7.jpg",
    "/assets/walk/8.jpg"
  ],
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default imageReducer;
