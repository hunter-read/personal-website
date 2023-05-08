import React, { Component } from "react";

class Projects extends Component {
  render() {
    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.projects;
      var projects = this.props.resumeProjects.map(function (projects) {
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4"
            key={projects.title}
          >
            <span className="portfolio-item d-block">
              <div className="foto">
                <div className="project-content">
                  <img
                    src={projects.image}
                    alt={projects.title}
                    height="230"
                    width="230"
                    className="mx-auto"
                    style={{marginBottom: 0, paddingBottom: 0, position: 'relative', maxWidth: "230px"}}
                  />
                  <span className="project-date">{projects.startDate}</span>
                  <br />
                  <h1 className="project-title-settings mt-3 mb-1">
                    {projects.title}
                  </h1>
                  <h2 style={{ padding: "5px 5px 0 5px", fontSize: "15px" }}>
                    {projects.urls.map(function (url, i) {
                      return (
                      <a
                        href={url.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-href"
                        style={{ color: "dark-gray" }}
                        key={i}
                      >
                        {url.name}                   <i
                    className="fas fa-external-link-alt"
                    style={{ marginRight: "10px", fontSize: "75%" }}
                  ></i>
                      </a>
                    )})}
                  </h2>
                  <p className="modal-description">{projects.description}</p>
                  <ul className="list-inline mx-auto">
                    {projects.technologies.map(function (tech, i) {
                      return (
                       <li className="list-inline-item mx-0" key={i}>
                        <span>
                          <div className="text-center" style={{ boxShadow: "none"}}>
                            <i className={tech.class} style={{ fontSize: "300%" }}>
                              <p className="text-center" style={{ fontSize: "30%" }}>
                                {tech.name}
                              </p>
                            </i>
                          </div>
                        </span>
                      </li>
                    )})}
                  </ul>
                </div>
              </div>
            </span>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">{projects}</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
