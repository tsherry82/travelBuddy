import axios from "axios";

export default {
    savePost : (post) => {
        return axios.post("api/posts", post);
},

    getPosts: () => {
        return axios.get("api/posts");

    },
    getUserById: () => {
        return axios.get("api/user/:id");
    },
    saveUserById: () => {
        return axios.post("api/user/id");
    }
}