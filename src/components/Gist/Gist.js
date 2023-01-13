import {useEffect, useState} from "react";
import {Card, Button, Badge} from 'react-bootstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {atomOneDark} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import GithubApi from "../../service/ApiService/GithubApi";
import {getLanguageColor} from "../../helpers";

function Gist({gist}) {
    const [showCode, setShowCode] = useState(false);
    const [content, setContent] = useState(false);
    const data = gist.files[Object.keys(gist.files)[0]]

    useEffect(() => {
        const fetchData = async () => {
            const client = new GithubApi()
            setContent(await client.getGist(data.raw_url))
        }
        fetchData().then(r => console.log(r))
    }, [data.raw_url]);

    return (
        <Card className="mt-2 p-1">
            <Card.Header>
                <Card.Title className="p-2">{data.filename}
                    {data.language &&
                        <span style={{background: getLanguageColor(data.language), color: "white"}}
                              className=" p-1 float-end">
                        {data.language}
                    </span>}
                </Card.Title>
                <Card.Subtitle> Created at: {gist.created_at}</Card.Subtitle>
            </Card.Header>
            <Card.Body>
                <Button variant="outline-danger" className="float-end" onClick={() => setShowCode(!showCode)}>
                    {showCode ? 'Hide' : 'Show'} Code
                </Button>
                {showCode && (
                    <SyntaxHighlighter language={data.language} style={atomOneDark}>
                        {content}
                    </SyntaxHighlighter>
                )}
            </Card.Body>
        </Card>
    );
}

export default Gist;