import {useState} from "react";

import SyntaxHighlighter from 'react-syntax-highlighter';
import {atomOneDark} from 'react-syntax-highlighter/dist/esm/styles/hljs';

// import LanguageBadge from 'language-badges';
function Gist({gist}) {
    const [showCode, setShowCode] = useState(false);

    return (
        <div>
            <h2>{gist.title}</h2>
            <p>Created at: {gist.created_at}</p>
            {/*<LanguageBadge language={gist.language} color="blue" />*/}
            <button onClick={() => setShowCode(!showCode)}>
                {showCode ? 'Hide' : 'Show'} Code
            </button>
            {showCode && (
                <SyntaxHighlighter language={gist.language} style={atomOneDark}>
                    {gist.files[Object.keys(gist.files)[0]].content}
                </SyntaxHighlighter>
            )}
        </div>
    );
}

export default Gist