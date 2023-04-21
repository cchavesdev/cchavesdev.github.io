import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const Typescript = () => {
  const codeString = `{
    "compilerOptions": {
      "target": "es5",
      "lib": [
        "dom",
        "dom.iterable",
        "esnext"
      ],
      "allowJs": true,
      "skipLibCheck": true,
      "esModuleInterop": true,
      "allowSyntheticDefaultImports": true,
      "strict": true,
      "forceConsistentCasingInFileNames": true,
      "noFallthroughCasesInSwitch": true,
      "module": "esnext",
      "moduleResolution": "node",
      "resolveJsonModule": true,
      "isolatedModules": true,
      "noEmit": true,
      "jsx": "react-jsx"
    },
    "include": [
      "src"
    ]
  }`;

  return (
    <div>
      <h4>Typescript</h4>
      <hr></hr>
      <p>
        TypeScript is an open-source programming language developed by
        Microsoft. It is a superset of JavaScript, which means that any valid
        JavaScript code is also valid TypeScript code. TypeScript adds several
        features to JavaScript, including static typing, classes, and
        interfaces.
      </p>
      <p>Below you can find some bennefits:</p>
      <ol>
        <li>
          <p>
            <strong>Catching errors at compile-time:</strong> With TypeScript,
            developers can catch errors during compilation, rather than during
            runtime.
            <br /> This means that errors are caught earlier in the development
            process, making it easier to fix them before they cause more serious
            problems.
          </p>
        </li>
        <li>
          <p>
            <strong>Better code quality and maintainability: </strong>
            The static typing system (<code>number, string, boolean ...</code>)
            makes it easier to write code that is more consistent, robust, and
            maintainable.<br></br> It allows developers to define data types,
            interfaces, and classes, which can make code easier to read,
            understand, and modify.
          </p>
        </li>
        <li>
          <strong>Strong community support:</strong> It has a large and active
          community of developers, which provides support, documentation, and a
          wide range of third-party libraries and tools
        </li>
      </ol>
      <h4>How to install ?</h4>
      <p>Here are some steps in order to install it into a react app</p>
      <ol>
        <li>
          <p>
            Install typescript opening the terminal in your app's root folder
            and running the command: <code>npm install typescript</code>
          </p>
        </li>
        <li>
          <p>
            Create a <code>tscofig.json</code> file that contains the following
          </p>
          <SyntaxHighlighter language="javascript" style={darcula}>
            {codeString}
          </SyntaxHighlighter>
          <p>Most import thing is the key <code>'jsx':'react-jsx'</code> This specifies that TypeScript should use React's JSX syntax in .tsx files.</p>
        </li>
        <li>
          <p>Install the TypeScript definitions for React using the following command:<br></br> <code>npm install --save-dev @types/react @types/react-dom</code></p>
        </li>
        <li>
          <p>In the React project, rename all <strong>React component</strong> files from <code>.jsx</code> to <code>.tsx</code> file extension. <br></br>This tells TypeScript to interpret these files as containing TypeScript code.</p>
        </li>       
      </ol>
      <p>That should be all to start using TypeScript in a React App</p>
    </div>
  );
};
