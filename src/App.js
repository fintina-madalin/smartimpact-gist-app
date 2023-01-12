import './App.css';
import {useEffect, useState} from 'react';
import { useQuery } from 'react-query';
import GistList from './components/GistList';
import UserInfo from './components/UserInfo';
import GithubAPI from './service/ApiService';
import { Alert, Button, Container, Form } from 'react-bootstrap';

function App() {
    const api = new GithubAPI();
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');

    const { data: user, status: userStatus } = useQuery(
        ['user', username],
        async () => {
                return await api.getUser(username);
        },
        {
            refetchOnWindowFocus: false,
            staleTime: 60 * 60 * 1000
        }
    );

    useEffect(() => {
        if (userStatus === 'error') {
            setError(user.message);
        }
    }, [userStatus, user]);

    const { data: gists, status } = useQuery(
        ['gists', username],
        async () => {
                return await api.getGists(username);
        },
        {
            refetchOnWindowFocus: false,
            staleTime: 60 * 60 * 1000
        }
    );

    useEffect(() => {
        if (status === 'error') {
            setError(gists.message);
        }
    }, [status, gists]);

console.log({status})
console.log({error})
    return (
        <Container className="mt-4">
            <Form className="center" onSubmit={(e) => {
                e.preventDefault();
                setUsername(e.target.elements.username.value);
            }}>
                <Form.Group className="mb-3">
                    <Form.Control id="username" type="text" placeholder="Enter username" />
                    <Button type="submit">Submit</Button>
                </Form.Group>
            </Form>
            {(error && username) && <Alert variant={`danger`}>Error: {error}</Alert>}
            {(userStatus === 'success' && username) && <UserInfo user={user}/>}
            {(status === 'loading' && username) && <Alert variant={`info`}>Loading...</Alert>}
            {(status === 'success' && username) && <GistList gists={gists}/>}
        </Container>
    );
}

export default App;
