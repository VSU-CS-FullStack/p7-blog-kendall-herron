import axios from 'axios';
import _ from 'lodash';

export const CREATE_POST = 'create_post';

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = "http://blog-server-kendall-herron.herokuapp.com/api/posts/5bc5f9ff9d9036001565f3b0";

export function fetchPosts(){
    const request = axios.get(`${ROOT_URL}/posts`);

    return ({
        type: FETCH_POSTS,
        payload: request
    })
}

export function createPost(values, callback) {
    if (!values.hasReferences || values.hasReferences===false)
        values =  _.omit(values, "references" );

    const request = axios
        .post(`${ROOT_URL}/posts`, values)
        .then(() => callback());

    return {
        type: CREATE_POST,
        payload: request
    };
}