import axios from 'axios';
import _ from 'lodash';

export const CREATE_POST = 'create_post';

export const FETCH_POSTS = 'fetch_posts';

export const FETCH_POST = "fetch_post";

export const DELETE_POST = "delete_post";

const ROOT_URL = "https://blog-server-kendall-herron.herokuapp.com/api";

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

export function fetchPosts(){
    const request = axios.get(`${ROOT_URL}/posts`);

    return ({
        type: FETCH_POSTS,
        payload: request
    })
}

export function fetchPost(id) {
    const request = axios.get(`${ROOT_URL}/posts/${id}`);

    return {
        type: FETCH_POST,
        payload: request
    };
}

export function deletePost(id, callback) {
    const request = axios
        .delete(`${ROOT_URL}/posts/${id}`)
        .then(() => callback());

    return {
        type: DELETE_POST,
        payload: id
    };
}