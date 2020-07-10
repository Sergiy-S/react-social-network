import profileReducer, { actions } from "./profile-reducer";

let state = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 15 },
    { id: 2, message: "It's my first post", likesCount: 20 },
    { id: 3, message: "Lorem ipsum", likesCount: 20 },
    { id: 4, message: "TEXT TEXT TEXT", likesCount: 20 },
  ],
  profile: null,
  status: "",
};

it("length of posts should be incremented", () => {
  // 1. test data
  let action = actions.addPostActionCreator("test text");

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(5);
});

it("message of new post should be correct", () => {
  // 1. test data
  let action = actions.addPostActionCreator("test text");

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts[4].message).toBe("test text");
});

it("after deleting length of message should be decrement", () => {
  // 1. test data
  let action = actions.deletePost(1);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(3);
});

it("after deleting length shouldn't be decrement if id is incorrect", () => {
  // 1. test data
  let action = actions.deletePost(1000);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(4);
});
