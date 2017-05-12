/*
A new custom page just for our app. 
Browse to http://localhost:3000/about to see it.
*/

import React from 'react';
import { registerComponent } from 'meteor/vulcan:core';

const About = () => {
  return (
    <div className="container">
      <h2>About</h2>
      <p>Assess calls for projects under SF operational programmes made by regional authorities. The RIS3 Calls Consultation application facilitates an open consultation process so that stakeholders can provide input on funding priorities and project selection criteria. The application acts as a standard online collaboration tool for collecting and assessing RIS3 project proposals.</p>

      <p>The logical steps of the application, based on its methodological description are:</p>
      <ul>
	<li><i>Step 1.</i> Selection of stakeholders to be invited. </li>
	<li><i>Step 2.</i> Selection of consultation mode. </li>
	<li><i>Step 3.</i> Definition of call assessment criteria under the RIS3 framework. </li>
	<li><i>Step 4.</i> Analysis of stakeholder' views and reportin gto the Call authority. </li>
      </ul>

    </div>
  )
}

registerComponent('About', About);
