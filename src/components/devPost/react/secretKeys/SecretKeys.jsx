import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const SecretKeys = () => {
    const envfileData = `
    REACT_APP_API_KEY=abc123
    REACT_APP_API_URL=http://localhost:3000/api
    `;
    const accessFileData = `
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiUrl = process.env.REACT_APP_API_URL;
        `;
  return (
    <div>
      <h4>Enviroment variables in React</h4>
      <p>
        Sometimes, is required to store sensitive information such as API keys,
        passwords, and other configuration data. For this, an <code>.env </code>
        can be used as cofiguration file.
      </p>
      <p>
        The purpose of this file is to keep this sensitive information out of
        the application's source code and to make it easy to change the values
        of these variables without modifying the code. This makes it easier to
        manage and deploy the application to different environments (e.g.,
        development, testing, production).
      </p>
      <p>
        <br></br> The file should be placed in the root directory of the React
        app and should be named <code>.env</code> as shown in the image below:
      </p>
      <img src="/img/envfileexample.png" className="img-fluid" />
      <h4>How to store the variables? </h4>
      <p>Very simple, variables should be defined in a <strong>key-value pair</strong> format, with each variable <strong>separated by a newline character</strong> Example:</p>
      <SyntaxHighlighter language="C#" style={darcula}>
            {envfileData}
    </SyntaxHighlighter>
    <h4>How to access the variables? </h4>
    <p>In order to read the variables into a React is way easy, just write the following: </p>
    <SyntaxHighlighter language="javascript" style={darcula}>
            {accessFileData}
    </SyntaxHighlighter>
      <p>Ta da! that's the way to access the keys or passord using a <code>.env</code> file. <br></br>React uses the <a href="https://www.npmjs.com/package/react-dotenv" target="_blank">dotenv</a> package  to load environment variables from the <code>.env</code> file. </p>
    </div>
  );
};
