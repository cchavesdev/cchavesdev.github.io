import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const Router = () => {
  const outletPlaceholder = "<Outlet />";
  const laytoutPlaceholder = "<Layout/>";
  const homePlaceholder = "<Home/>";
  const aboutPlaceholder = "<About/>";
  const contactPlaceholder = "<Contact/>";

  const routerCode = `
    //importing the components from the library
    import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

    //importing our components or pages that we have in our App
    import Home from './components/Home';
    import About from './components/About';
    import Contact from './components/Contact';

    function App() {
    return (
        <Router>
        {/* These are  the navigation links, using the Link component provided from the library */}
        <nav>       
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            {/* Add more links here */}
        </nav>

        {/*  The following defines the router and which component will be displayed when the route gets hit */}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        {/* Define more routes here */}
        </Router>
    );
    }

    export default App;
    `;

  const laytouExample = `  
  import { SidebarNav } from './Layout/SidebarNav'
  import { Footer } from './Layout/Footer'
  import {Outlet} from 'react-router-dom'

  export const Layout = () => {
    return (
      <div>
        <SidebarNav/>       
        <div className='content-app mt-3  pb-5'>
          <Outlet/>
        </div>
        <Footer>
      </div>
    )
  }
  `;

  const nestingExample = `
    const router = createBrowserRouter(
      [
        {
          path: '/',
          element: <Layout />,
          children: [
            { index: true, element: <Home /> },
            { path: 'about', element: <About /> },
            { path: 'contact', element: <Contact /> },
          ]
        }
      ];
    );
    `;
  return (
    <div>
      <h4>React Router</h4>
      <p>
        It is a widely used routing library for building single-page
        applications (SPAs) with React. <br></br>Also, it allows developers to handle
        <strong> client-side</strong> routing that helps to create interactive web applications.
      </p>
      <br />
      <p>The library now provides two main types of routers:</p>
      <ol className="mt-3">
        <li className="mt-3">
          <strong>BrowserRouter: </strong> This router uses HTML5 history API to
          handle client-side routing. It is typically used in production
          applications that are hosted on a web server and have access to
          server-side configuration
        </li>
        <li>
          <strong>MemoryRouter: </strong> This router does not rely on the
          browser's history API, but instead stores the routing state in memory.
          It is useful for applications that are not hosted on a web server,
          such as server-side rendering (SSR) or testing environments.
        </li>
      </ol>
      <h4 className="mb-3">How to use it?</h4>
      <ol>
        <li>
          First thing first, let's install the library by running the command{" "}
          <br></br> <code>npm install react-router-dom</code>
        </li>
        <li>
          <p>
            Next we need to set up the router code, for this example as
            reference, let's create it into the App.js file
          </p>
          <SyntaxHighlighter
            language="javascript"
            style={nightOwl}
            className="mt-3"
          >
            {routerCode}
          </SyntaxHighlighter>
        </li>
      </ol>
      <h4 className="mt-5">Nested Routing in React Router</h4>
      <p className="mt-3">
        Nested routing allows you to define child routes within a parent route,
        allowing for hierarchical routing and rendering of components within a
        layout. This can be useful for creating multi-level navigation, nested
        menus, or handling different sections of a web application.
      </p>
      <p>
        <br />
        <strong> Example:</strong>
        <br />
        Let's consider a simple example where we have a <code>{laytoutPlaceholder}</code> component that
        acts as a container for our other components: <br />{" "}
        <code> {homePlaceholder}</code>, <code>{aboutPlaceholder}</code>, and
        <code> {contactPlaceholder}</code>. <br />
        The <code>{laytoutPlaceholder}</code> component will have a <strong>'sidebar nav'</strong> and{" "}
        <strong>'footer'</strong> components. <br></br>It will use the{" "}
        <code> {outletPlaceholder} </code>component provided by the React router
        library to render the child component inside. <br />
        For better explanation here's a picture.
      </p>
      <img src="/img/reactrouter/layout.png" alt="explaining nesting wwith layout" className="img-fluid" />

      <p className="mt-5">
        Below you can find a code example of the Layout component and the Outlet
        component:{" "}
      </p>
      <SyntaxHighlighter language="react" style={nightOwl} className="mt-3">
        {laytouExample}
      </SyntaxHighlighter>

      <p className="mt-5">
        As next step, let's define the routes that the app will use.
        <br />
        <br />
        <code>/</code> (root): This will be the root path and the{" "}
        <code>{homePlaceholder}</code> component will be displayed, to do this,
        the <code>index</code> property must be <code>true</code>.
        <br />
        <code>/about</code>: The <code>{aboutPlaceholder}</code> component will
        be displayed
        <br />
        <code>/contact</code>: The <code>{contactPlaceholder}</code> component
        will be displayed
      </p>
      <SyntaxHighlighter language="typescript" style={nightOwl} className="mt-3">
        {nestingExample}
      </SyntaxHighlighter>
      <p>
        It's important to notice that above we have set the{" "}
        <code>{laytoutPlaceholder}</code> component as root, so all its children
        will be renderend into the spot we placed the{" "}
        <code>{outletPlaceholder}</code>
      </p>
      <p className="mt-3">
        Example: Let's asumme someone hits the URL <code>/about</code> into the
        app.
      </p>
      <img src="/img/reactrouter/about.png" alt="explaining nesting about" />
      <p className="mt-3">
        Now, let's asumme someone hits the URL <code>/contact</code> into the
        app.
      </p>
      <img src="/img/reactrouter/contact.png" alt="explaining nesting contact" />

      <h4 className="mt-5">Conclusion:</h4>
      <p>
        Nested routing in React Router version 6 allows you to create complex
        and dynamic routing scenarios in your React applications. By defining
        child routes within a parent route and using the <code>{outletPlaceholder}</code> tag
        to render the child components within a layout, you can create a
        flexible and scalable routing structure.
      </p>
    </div>
  );
};
