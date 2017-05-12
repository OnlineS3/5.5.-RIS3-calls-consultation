/*
A new custom page just for our app. 
Browse to http://localhost:3000/related to see it.
*/

import React from 'react';
import { registerComponent } from 'meteor/vulcan:core';

const RelatedDocuments = () => {
  return (
    <div className="container">
      <h2>Related Documents</h2>
      <p style={{"fontFamily":"verdana"}}>
	Selected use cases using the RIS3 Calls Consultation tool of the Online-S3 plaform:
      </p>
      <a href="#" style={{"marginLeft": "1rem"}}>Will be uploaded soon</a>
      <p style={{"margin": "20px 0 3px 0"}}>
	Selected RIS3 strategies including the Calls Consultation method in their implementation process:
      </p>
      <ul className="dashed">
	<li>...</li>
      </ul>
    </div>
  )
}

registerComponent('RelatedDocuments', RelatedDocuments);
