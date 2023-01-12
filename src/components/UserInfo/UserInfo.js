import { Card, Image } from 'react-bootstrap';

function UserInfo({ user }) {
    return (
        <Card>
            <Card.Body>
                <Image src={user.avatar_url} roundedCircle width="100" height="100" className="mb-3" />
                <Card.Title>{user.login}</Card.Title>
                <Card.Text>{user.bio}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default UserInfo;
