export const NamingConventions = () => {
  return (
    <div className="">
      
      <h4 className="mt-5">Naming Conventions</h4>
      <hr></hr>
      <p>
        In React there are many naming conventions but below you will see the
        most popular ones.
      </p>
      <ol>
        <li>
          <p>
            <strong>Folder names:</strong> Folder names should generally be
            written in lowercase and be descriptive of the contents within.{" "}
            <br />
            Examples: components, pages, utils, styles, images, api, and config.{" "}
            <br />
            It's a good practice to use singular nouns for folders containing
            single entities and plural nouns for folders containing multiple
            entities.{" "}
          </p>
        </li>
        <li>
          <p>
            <strong>Component files:</strong> React components should be written
            as individual files with PascalCase naming convention. <br /> For
            example, a component that renders a button for shopping could be named <code>ShoppinngButton.jsx </code>
            or <code> ShoppingButton.js</code>.
          </p>
        </li>
        <li>
          <p>
            <strong>File extension:</strong> The file extension <code>.jsx</code> is often
            used to differentiate between components and other types of
            JavaScript files.
          </p>
        </li>
        <li>
          <p>
            <strong>Utility files:</strong> Utility functions and modules should
            be named based on their functionality. Examples include <code> auth.js, helpers.js, constants.js</code>
          </p>
        </li>
        <li>
          <p>
            <strong>Style files:</strong> Style files should be named based on the 
            component or page they are styling. For example, the styles for a
            component named Button could be named <code>Button.module.css</code> or
            <code> Button.scss.</code>
          </p>
        </li>
      </ol>     
      <h4 className="mt-5">Folder Tree</h4>
      <hr></hr>
      <p>
        Below you can find folder tree that will help you to understand good
        practices for folder architecure
      </p>
      <img className="img-fluid" src="/img/tree1.png" alt="code src"></img>
      
      <p className="mt-3">
      In this example, the <code> src </code> folder contains subfolders for different purposes such as: API consumption, React components, interfaces and utility functions.
      </p>
      <p>The <code>API</code> folder contains all files required for REST API consumption and Finally, we have a <code>interfaces</code> folder where you define the contracts you will be using (interfaces)</p>
      <h5 className="mt-5">
        The most important thing is to choose a consistent naming convention and
        stick to it throughout the project.
      </h5>
    </div>
  );
};
