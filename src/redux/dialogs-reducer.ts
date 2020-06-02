const SEND_MESSAGE = "SEND-MESSAGE";

type DialogType = {
  id: number;
  name: string;
};
type MessageType = {
  id: number;
  message: string;
};

let initialState = {
  dialogs: [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrew" },
    { id: 3, name: "User" },
    { id: 4, name: "Test" },
    { id: 5, name: "New User" },
  ] as Array<DialogType>,
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Test" },
  ] as Array<MessageType>,
};

export type InitialStateType = typeof initialState;

const dialogsReducer = (
  state = initialState,
  action: any
): InitialStateType => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: 5,
            message: body,
          },
        ],
      };
    default:
      return state;
  }
};

type SendMessageCreatorActionType = {
  type: typeof SEND_MESSAGE;
  newMessageBody: string;
};

export const sendMessageCreator = (
  newMessageBody: string
): SendMessageCreatorActionType => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default dialogsReducer;
