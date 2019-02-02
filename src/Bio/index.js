import React, { Component } from "react";
import "./style.css";

const Bio = () => {
  return (
    <div className="bio">
      <section class="about-section p-3 p-lg-3 d-flex d-column" id="about">
        <div class="header-name">
          <h1 class="mb-0">Nyla
        <span class="text-primary">Sostre</span>
          </h1>
          <br></br>
          <p class="lead mb-5">Following the release of her debut album Nyla Live Live, the high intensity vocals of this singer songwriter paired with her live acoustic guitar "Betty Blue”, can be found on all popular streaming platforms including links…. Raw and unfiltered vocals and lyrical content are based on her life experiences as a black-hispanic youth growing up in Brooklyn NY. Representing her “afro- Latina” roots, Nyla uses every click of her tongue and belted harmony to tell the very human stories of Love, loss and lessons learned. Raised on the rebellious and uplifting sounds of artists like Nina Simone, Celia Cruz, Selena, Erykah Badu, Lauryn Hill, Etta James and Beyonce, Nyla’s sound while inspired is completely unique.</p>
          <button type="button" class="btn btn-secondary">Contact</button>
        </div>
      </section>
    </div>
  );
};
export default Bio;
