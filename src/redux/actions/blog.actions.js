import * as types from "../constants/blog.constants";
import api from "../../apiService";

const getPosts = (pageNum, limit, field_name) => async (dispatch) => {
  dispatch({ type: types.GET_POSTS_REQUEST });
  try {
    let query = "";
    if (field_name) {
      query = `&title[$regex]=${field_name}&title[$options]=i`;
    }
    const url = `/blogs?page=${pageNum}&limit=${limit}${query}&sortBy[createdAt]=1`;
    const res = await api.get(url);
    console.log(" success", res.data.success);
    if (res.data.success === true) {
      console.log("data", res.data.data.blogs);
      dispatch({ type: types.GET_POSTS_SUCCESS, payload: res.data.data.blogs });
    }
  } catch (error) {
    console.log("error", error);
    dispatch({ type: types.GET_POSTS_FAILURE, payload: error });
  }
};
const blogActions = {
  getPosts,
};

export default blogActions;
