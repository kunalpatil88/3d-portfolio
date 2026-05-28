import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend Developer / Data Engineer</h4>
                <h5>Facileserv Technologies</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Developing scalable microservices-based applications using Python. Building
              and maintaining RESTful APIs for large-scale systems. Deploying cloud-native
              applications on AWS, containerizing services with Docker, and optimizing
              SQL queries and Elasticsearch indexing.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend Developer Intern</h4>
                <h5>Wharf Street Strategies</h5>
              </div>
              <h3>Jul–Oct 2023</h3>
            </div>
            <p>
              Developed REST APIs using Django REST Framework. Implemented authentication
              and authorization, improved API response efficiency, and debugged and
              optimized backend services.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend Developer Intern (Python)</h4>
                <h5>ASORG Softtech India Pvt. Ltd.</h5>
              </div>
              <h3>Jan–Jul 2023</h3>
            </div>
            <p>
              Built high-performance APIs using FastAPI. Implemented JWT authentication,
              developed backend services following microservices architecture, and improved
              request handling and application performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
