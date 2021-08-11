import { UPDATE_POSTS } from './actionTypes';

export function fetchPosts() {
    return (dispatch) => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
            .then((response) => {
                console.log("Response",response);
                return response.json();
            })
            .then((data) => {
                console.log("Data",data);
                dispatch(updatePosts(data));
            })
            .catch(error => {
                console.log("error",error);
            })
    }
}

export function updatePosts(posts) {
    return {
        type:UPDATE_POSTS,
        posts,
    }
}