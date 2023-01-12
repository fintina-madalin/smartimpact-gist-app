import Gist from "../Gist";
import {Col} from "react-bootstrap";

function GistList({gists}) {
    return (
        <Col className="mt-4">
            {gists.map((gist) => (
                <Gist key={gist.id} gist={gist}/>
            ))}
        </Col>
    );
}

export default GistList