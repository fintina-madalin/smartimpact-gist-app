import Gist from "../Gist";

function GistList({gists}) {
    return (
        <div>
            {gists.map((gist) => (
                <Gist key={gist.id} gist={gist}/>
            ))}
        </div>
    );
}

export default GistList