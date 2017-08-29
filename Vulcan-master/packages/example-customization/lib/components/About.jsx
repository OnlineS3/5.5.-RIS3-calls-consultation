/*
A new custom page just for our app. 
Browse to http://localhost:3000/about to see it.
*/

import React from 'react';
import { registerComponent } from 'meteor/vulcan:core';

const About = () => {
  return (
    <div className="container">
      <h2>About the Application</h2>
      <p>This application is intended to help you assess calls for projects under SF operational programmes made by
          regional authorities. The RIS3 Calls Consultation application facilitates an open consultation process so that
          you as stakeholders can provide input on funding priorities and project selection criteria. The application
          acts as a standard online collaboration tool for collecting and assessing RIS3 project proposals.</p>
      <p>The following four steps are suggested for the consultation process. Three of these steps involve the invited
          stakeholders; they are shown in the diagram below.</p>
      <ul>
	    <li><i>Step 1:</i> Select the stakeholders to be invited. </li>
	    <li><i>Step 2:</i> Select the consultation form (or "mode"). </li>
	    <li><i>Step 3:</i> Define call assessment criteria under the RIS3 framework. </li>
	    <li><i>Step 4:</i> Analyse stakeholder' views and provide feedback to the Call authority. </li>
      </ul>
      <p>

      </p>
    </div>
  )
}

registerComponent('About', About);
