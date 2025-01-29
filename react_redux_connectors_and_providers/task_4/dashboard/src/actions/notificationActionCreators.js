import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';
import { bindActionCreators } from 'redux';

export const markAsRead = index => {
    return { type: MARK_AS_READ, index }
};
export const setNotificationFilter = (filter) => { 
    return { type: SET_TYPE_FILTER, filter };
}

export const boundMarkAsRead = (dispatch) => bindActionCreators(markAsRead, dispatch);
export const boundSetNotificationFilter = (dispatch) => bindActionCreators(setNotificationFilter, dispatch);
