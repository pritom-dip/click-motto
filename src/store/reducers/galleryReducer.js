import * as actions from '../actions/galleryActions'

const initialState = [];

export const galleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_ALL_DATA: {
            let items = [];
            if (action.payload.query === "videos") {
                items = action.payload?.data?.videos.slice(0, 15);
            } else {
                items = action.payload?.data?.photos.slice(0, 15);
            }
            return [...items];
        }
        default:
            return state;
    }
}