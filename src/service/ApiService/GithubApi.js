import axios from "axios";

class GithubAPI {
    constructor() {
        this._baseURL = 'https://api.github.com';
        this.client = axios.create({
            baseURL: this._baseURL,
        });
    }

    async getUser(username) {
            const {data} = await this.client.get(`/users/${username}`);
            return data;
    }

    async getGists(username) {
            const {data} = await this.client.get(`/users/${username}/gists`);
            return data;
    }

    async getGist(url) {
            const {data} = await this.client.get(url);
            return data;
    }
}

export default GithubAPI