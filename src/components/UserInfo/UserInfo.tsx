function UserInfo({ user }) {
    return (
        <div>
            <img src={user.avatar_url} alt={user.login} width="100" height="100" />
            <h2>{user.login}</h2>
            <p>{user.bio}</p>
        </div>
    );
}

export default UserInfo;
