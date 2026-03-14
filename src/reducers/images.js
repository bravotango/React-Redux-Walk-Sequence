const initialState = {
  type: "person",
  images: [
    "/assets/walk/1.jpg",
    "/assets/walk/2.jpg",
    "/assets/walk/3.jpg",
    "/assets/walk/4.jpg",
    "/assets/walk/5.jpg",
    "/assets/walk/6.jpg",
    "/assets/walk/7.jpg",
    "/assets/walk/8.jpg",
  ],
};

const imageSets = {
  person: [
    "/assets/walk/1.jpg",
    "/assets/walk/2.jpg",
    "/assets/walk/3.jpg",
    "/assets/walk/4.jpg",
    "/assets/walk/5.jpg",
    "/assets/walk/6.jpg",
    "/assets/walk/7.jpg",
    "/assets/walk/8.jpg",
  ],
  frog: [
    "/assets/frog/1.png",
    "/assets/frog/1.png",
    "/assets/frog/2.png",
    "/assets/frog/3.png",
    "/assets/frog/4.png",
    "/assets/frog/5.png",
  ],
};

export default function imageReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_IMAGE_TYPE":
      const newType = action.payload;
      return {
        type: newType,
        images: imageSets[newType] || imageSets.person,
      };
    default:
      return state;
  }
}
