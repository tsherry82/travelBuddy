import axios from "axios";

export default {
    savePost : (post) => {
        return axios.post("api/posts", post);
},

    getPosts: () => {
        return axios.get("api/posts");

    }
}