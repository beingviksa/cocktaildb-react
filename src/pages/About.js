import React from "react";

const About = () => {
  return (
    <section className="section about-section">
      <h1 className="section-title">about us</h1>
      <p>
        This project is created by <strong>Vikram Singh Rajpurohit.</strong>{" "}
      </p>
      <p>
        It is a CocktailDB search project, where the user can find their
        favorite drinks.
      </p>
      <p>We used the CocktailDB API in order to fetch the real data.</p>
      <p>The front end has been created with React JS.</p>
    </section>
  );
};

export default About;
