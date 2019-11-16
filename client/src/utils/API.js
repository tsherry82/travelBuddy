import axios from "axios";

export default {
    savePost: (post) => {
        return axios.post("api/posts", post);
    },

    getPosts: () => {
        return axios.get("api/posts");

    },
    // adding logic to post and get the users searches to the database to be able to track desired loations

    saveSearch: (userSearch) => {
        return axios.post('api/search', userSearch);
    },

    getSearch: () => {
        return axios.get('api/search')
    }
}