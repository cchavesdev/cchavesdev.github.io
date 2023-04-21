import { useNavigate } from "react-router-dom";
import docFiles from "../../data/posts.json";

export const DevBlog = () => {
  const navigate = useNavigate();
  const parentUrl = "/docs";

  function navigateTo(doc) {
    // Remove leading/trailing whitespaces
    let url = doc.postTitle;
    url = url.trim().toLowerCase();

    // Replace spaces with %20
    url = url.replace(/\s+/g, "-");

    // Encode special characters
    url = encodeURIComponent(url);

    navigate(`${doc.category}/${url}`);
  }

  const renderDocs = docFiles.map((doc, index) => {
    return (
      <a
        onClick={() => {
          navigateTo(doc);
        }}
        className="doc-link col-12 mt-3"
      >
        <div className="">
          <div className="">
            <div className="card-body">
              <div className="d-flex align-items-center">
              <img
                  src={`/img/categories/${doc.category}.png`}
                  className="img-fluid custom-sizing me-1"
                />
                <h5 className="card-title"> {doc.postTitle} </h5>
                
              </div>

              <div className="d-flex align-items-center">
                <p className="card-text ">{doc.description}</p>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </a>
    );
  });

  return (
    <div id="docsContainer">
      <h3>Quick guides for development</h3>
      <div className="d-flex">
      <div className="mt-3 col-12 col-md-3">
        <input className="form-control" placeholder="Search" />
      </div>
      <div className="mt-3 col-12 col-md-3 ms-3">
        <select className="form-select" placeholder="Category">
          <option>Category</option>
          <option>React</option>
          <option>ASP.NET</option>
        </select>
      </div>
      </div>
      <div className="row align-items-center mt-3">{renderDocs}</div>
    </div>
  );
};
