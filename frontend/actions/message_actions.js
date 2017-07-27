export const RECEIVE_ALL_MESSAGES = 'RECEIVE_ALL_MESSAGES';
export const RECEIVE_SINGLE_MESSAGE = 'RECEIVE_SINGLE_MESSAGE';
export const REMOVE_MESSAGE = "REMOVE_MESSAGE";
export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
export const MAKE_MESSAGE = "MAKE_MESSAGE";
import * as MessageUtil from '../util/message_api_util';

export const requestAllMessages = () => (dispatch) => {
  return MessageUtil.fetchAllMessages()
    .then(messages => dispatch(receiveAllMessages(messages)));
};

export const requestSingleMessage = (id) => (dispatch) => {
  return MessageUtil.fetchSingleMessage(id).then(message => {
    dispatch(receiveSingleMessage(message));
    return message;
  });
};

export const createMessage = message => dispatch => (
  MessageUtil.createMessage(message).then(message => {
    dispatch(makeMessage(message));
    return message;
  })
);

export const makeMessage = message =>({
  type: MAKE_MESSAGE,
  message
});

export const updateMessage = id => dispatch => {
  return (
    MessageUtil.editMessage(id).then(
      message => dispatch(changeMessage(message)))
  );
};

export const deleteMessage = message => dispatch => (
  MessageUtil.deleteMessage(message).then(
    message => dispatch(removeMessage(message)))
);


export const changeMessage = message => ({
  type: UPDATE_MESSAGE,
  message
});
export const receiveAllMessages = messages => ({
  type: RECEIVE_ALL_MESSAGES,
  messages
});

export const receiveSingleMessage = message => ({
  type: RECEIVE_SINGLE_MESSAGE,
  message
});

export const removeMessage = message => ({
  type: REMOVE_MESSAGE,
  message
});
