let rerenderEntireTree = () => {
  console.log(1);
};

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 15 },
      { id: 2, message: "It's my first post", likesCount: 20 },
      { id: 3, message: "Lorem ipsum", likesCount: 20 },
      { id: 4, message: "TEXT TEXT TEXT", likesCount: 20 }
    ],
    newPostText: "test text"
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: "Dimych" },
      { id: 2, name: "Andrew" },
      { id: 3, name: "User" },
      { id: 4, name: "Test" },
      { id: 5, name: "New User" }
    ],
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "Test" }
    ]
  }
};

window.state = state;

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export const updateNewPostText = newText => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const subscribe = observer => {
  rerenderEntireTree = observer;
};

export default state;
