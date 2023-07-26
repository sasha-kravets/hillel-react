import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <div>
        <h2>Page Not Found</h2>
      </div>

      <div>
        <Link to="/">Go to Home page</Link>
      </div>
    </div>
  );
};

export default PageNotFound;
