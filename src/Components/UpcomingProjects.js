import React from "react";

const upcomingProjects = [
  {
    title: "Netflix Clone",
    description: "Developing a clone of Netflix using React, Redux, and Firebase. The project includes features such as user authentication, real-time database, and media streaming.",
    eta: "August 2024",
  },
  {
    title: "Swiggy Clone",
    description: "Creating a Swiggy-like food delivery application using React Native, Node.js, and MongoDB. The project aims to implement functionalities like user authentication, real-time order tracking, and payment integration.",
    eta: "September 2024",
  },
];

const UpcomingProjects = () => {
  return (
    <section className="padding" id="upcoming-projects">
      <h2 style={{ textAlign: "center" }}>Upcoming Projects</h2>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem" }}>
        {upcomingProjects.map((project, index) => (
          <div
            key={index}
            style={{
              maxWidth: "600px",
              padding: "1.5rem",
              border: "1px solid #ddd",
              borderRadius: "8px",
              textAlign: "center",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>ETA:</strong> {project.eta}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingProjects;
