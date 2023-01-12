import './App.css';
import {useState} from "react";
import {useQuery} from 'react-query';
import GistList from "./components/GistList";
import UserInfo from "./components/UserInfo";


function App() {
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');

    const {data: gists, status} = useQuery(
        ['gists', username],
        async () => {
            try {
                const res = await axios.get(`https://api.github.com/users/${username}/gists`);
                return res.data;
            } catch (err) {
                setError(err.message);
                return err;
            }
        },
        {
            refetchOnWindowFocus: false,
            staleTime: 60 * 60 * 1000,
        }
    );

    const {data: user, status: userStatus} = useQuery(
        ['user', username],
        async () => {
            try {
                const res = await axios.get(`https://api.github.com/users/${username}`);
                return res.data;
            } catch (err) {
                setError(err.message);
                return err;
            }
        },
        {
            refetchOnWindowFocus: false,
            staleTime: 60 * 60 * 1000,
        }
    );

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                setUsername(e.target.elements.username.value);
            }}>
                <label htmlFor="username">Github username:</label>
                <input type="text" id="username" name="username"/>
                <button type="submit">Search</button>
            </form>
            {error && <p>Error: {error}</p>}
            {status === 'loading' && <p>Loading...</p>}
            {userStatus === 'success' && <UserInfo user={user}/>}
            {status === 'success' && <GistList gists={gists}/>}
        </div>
    );
}

export default App;
