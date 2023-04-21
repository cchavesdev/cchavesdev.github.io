import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const LoadJsonFile = () => {
    const loadExample1 = `
    import carsData from './data/cars.json';

    const MyComponent = () => {
        // Access the data object and render it as needed
        return (
          <div>
            <h1>Car Iventory</h1>
            <ul>
              {carsData.map(car => (
                <li key={car.id}>{car.name}</li>
              ))}
            </ul>
          </div>
        );
      };
      
      export default MyComponent;
    `;
  return (
    <div>
        <h4>Loading data from JSON file</h4>
        <p>Assuming the file <code>.JSON</code> we want to consume exists somewhere into the react folder, there's a way to load the data into a react component. </p>
        <ol>
            <li  className="mt-3"><strong>Create the file: </strong>As Example, I created a file named <code>cars.json</code>
                <br></br><img src="/img/jsonfilename.png"></img>
            </li>

            <li className="mt-3"><strong>Load the file:</strong> If you're using a module bundler like Webpack or Parcel, you can import the <code>.JSON</code> file directly into your React component like any other JavaScript module
            <br>
            </br>
            <SyntaxHighlighter language="react" style={darcula} className="col-12">
        {loadExample1}
      </SyntaxHighlighter>
            </li>

        </ol>
    
    </div>
  );
};
