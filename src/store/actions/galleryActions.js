import { getData } from "../../Api/Api";

export const GET_ALL_DATA = "GET_ALL_DATA";

export const getAllData = (query = "all") => async (dispatch) => {
    try {
        const { data } = await getData(query);
        dispatch({ type: GET_ALL_DATA, payload: { data, query } });
    } catch (error) {
        console.log(error);
    }

}