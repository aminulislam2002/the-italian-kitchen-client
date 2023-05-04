import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [loader, setLoader] = useState(false);

  const downloadPDF = () => {
    const downloadedPage = document.getElementById("downloadedPage");
    console.log(downloadedPage);
    setLoader(true);
    html2canvas(downloadedPage).then((canvas) => {
      const imageData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");
      const width = doc.internal.pageSize.getWidth();
      const height = doc.internal.pageSize.getHeight();
      doc.addImage(imageData, "PNG", 0, 0, width, height);
      setLoader(false);
      doc.save("blog.pdf");
    });
  };

  return (
    <div className="bg-dark bg-opacity-10 pb-5 pt-5">
      <div className="container" id="downloadedPage">
        <div className="bg-danger p-2 rounded-2 bg-opacity-10 my-3">
          <h3>The differences between uncontrolled and controlled components.</h3>
          <div className="d-flex justify-content-between py-2 px-1 px-md-3 px-lg-5">
            <div className="w-50">
              <ul>
                <li>A controlled component is a component that is controlled by React state.</li>
                <li>Generally faster as there's less state management.</li>
                <li>Easier to debug.</li>
                <li>Less complex code.</li>
              </ul>
            </div>
            <div className="w-50">
              <ul>
                <li>A uncontrolled component managed by component's own internal state.</li>
                <li>Generally slower as there's more state management.</li>
                <li>More difficult to debug.</li>
                <li>More complex code.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-danger p-2 rounded-2 bg-opacity-10 my-3">
          <h3>How to validate React props using PropTypes?</h3>
          <div className="py-2 px-1 px-md-3 px-lg-5">
            <ul>
              <li>PropTypes.any: The prop can be of any data type</li>
              <li>PropTypes.bool: The prop should be a Boolean</li>
              <li>PropTypes.number: The prop should be a number</li>
              <li>PropTypes.string: The prop should be a string</li>
              <li>PropTypes.func: The prop should be a function</li>
              <li>PropTypes.array: The prop should be an array</li>
              <li>PropTypes.object: The prop should be an object</li>
              <li>PropTypes.symbol: The prop should be a symbol</li>
            </ul>
          </div>
        </div>
        <div className="bg-danger p-2 rounded-2 bg-opacity-10 my-3">
          <h3>The difference between nodejs and express js.</h3>
          <div className="d-flex justify-content-between py-2 px-1 px-md-3 px-lg-5">
            <div className="w-50">
              <ul>
                <li>Node.js is open source class platform JavaScript code that runs on the server side.</li>
              </ul>
            </div>
            <div className="w-50">
              <ul>
                <li>Express.js is a web application framework for Node.js</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-danger p-2 rounded-2 bg-opacity-10 my-3">
          <h3>What is a custom hook, and why will you create a custom hook?</h3>
          <div className="py-2 px-1 px-md-3 px-lg-5">
            <ul>
              <li>Custom Hooks are reusable functions.</li>
              <li>useState - This hook is used for managing state in functional components.</li>
              <li>useEffect - This hook is used for fetching data from an API.</li>
              <li>useContext - This hook is used for accessing data that stored in a React context.</li>
              <li>
                useLocation - This hook is used for accessing the current URL location in a React component. It returns an
                object with information about the current location, including the pathName
              </li>
              <li>
                useParams - This hook is used for accessing the dynamic parameters in the URL path of a React Router route.
                It returns an object with key-value pairs of the parameters.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-center align-items-center">
        <button onClick={downloadPDF} disabled={!(loader === false)} type="button" className="btn btn-info mt-5">
          {loader ? <span>Downloading PDF</span> : <span>Download PDF</span>}
        </button>
        <button className="btn btn-info ms-4 mt-5">
            <Link className="text-decoration-none text-black" to="/">Back to Home</Link>
        </button>
      </div>
    </div>
  );
};

export default Blog;
