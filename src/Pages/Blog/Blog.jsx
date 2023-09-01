import React from "react";
import blog from "../../assets/blog.jpg"
import Pdf from "react-to-pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ref = React.createRef();

const Blog = () => {
  return (
    <>
    <div>
    <p className="my-10 text-3xl text-center">Blog </p>

    <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button className="btn btn-outline bg-[#372848] text-white" onClick={toPdf}>Download Pdf <FontAwesomeIcon icon={faFilePdf} shake size="xl" /></button>}
      </Pdf>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 my-10 p-10 "
    style={{ backgroundImage: `url(${blog})`}}
    ref={ref}
    >
      
      <div className="card w-auto bg-[#372848] shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            Tell us the differences between uncontrolled and controlled
            components.
          </h2>
          <p>
            {" "}
            <b>Uncontrolled components:</b>
            Values are managed by the DOM. The component does not have internal
            state. User input directly modifies the DOM. Typically used for
            simple forms or inputs.
            <br /> <b>Controlled components:</b> Values are managed by the
            component's state. The component has internal state to track and
            update the value. User input triggers state changes, which update
            the component and the DOM. Typically used for complex forms or
            inputs requiring validation or additional logic.
          </p>
        </div>
      </div>
      <div className="card w-auto bg-[#372848] shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            How to validate React props using PropTypes
          </h2>
          <p>
            <b>To validate React props using PropTypes:</b> Import the PropTypes
            library. Define the prop types for a component by creating a
            propTypes object inside the component. Specify the type and other
            validation requirements for each prop using PropTypes' available
            validators, such as string, number, array, object, etc. You can also
            use isRequired to make a prop mandatory. When a prop fails
            validation, a warning will be logged in the console during
            development, helping you identify and fix potential issues.
            PropTypes are only used for development and debugging purposes and
            are not enforced in production.
          </p>
        </div>
      </div>
      <div className="card w-auto bg-[#372848] shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            Tell us the difference between nodejs and express js.
          </h2>
          <p>
            Node.js is a runtime environment that allows you to execute
            JavaScript code on the server-side, outside of a web browser. It
            provides a platform for building scalable and efficient network
            applications. Express.js, on the other hand, is a web application
            framework that runs on top of Node.js. It simplifies the process of
            building web applications by providing a set of features and tools
            for routing, handling HTTP requests and responses, managing
            middleware, and more. In short, Node.js is the underlying runtime
            environment, while Express.js is a framework built on top of Node.js
            that provides additional abstractions and utilities specifically for
            web development.
          </p>
        </div>
      </div>
      <div className="card w-auto bg-[#372848] shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            What is a custom hook, and why will you create a custom hook?
          </h2>
          <p>
            A custom hook in React is a JavaScript function that starts with the
            prefix "use" and allows you to reuse stateful logic across different
            components. It is a way to extract and encapsulate reusable logic so
            that it can be easily shared and used in multiple components. You
            would create a custom hook in React to abstract away complex or
            repetitive logic that is used in multiple components. This helps to
            keep your codebase organized, improves reusability, and makes it
            easier to maintain and test your code. Custom hooks allow you to
            separate concerns and promote code reuse, making your codebase more
            modular and easier to understand. They can encapsulate state
            management, API calls, event listeners, animations, form handling,
            and other types of logic that need to be shared across different
            components.
          </p>
        </div>
      </div>
    </div>
    </>
   
  );
};

export default Blog;
