import axios from "axios";

class GithubAPI {
    constructor() {
        this._baseURL = 'https://api.github.com';
        this.client = axios.create({
            baseURL: this._baseURL,
        });
    }

    async getUser(username) {
        try {
            const {data} = await this.client.get(`/users/${username}`);
            return data;
        } catch (error) {
            throw error;
        }
    }

    async getGists(username) {
        try {
            const {data} = await this.client.get(`/users/${username}/gists`);
            return data;
        } catch (error) {
            throw error;
        }
    }

    async getGist(url) {
        try {
            const {data} = await this.client.get(url);
            throw data;
        } catch (error) {
            return error;
        }
    }
}

export default GithubAPI