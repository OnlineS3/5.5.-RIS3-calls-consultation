/*
A new custom page just for our app. 
Browse to http://localhost:3000/guide to see it.
*/

import React from 'react';
import { registerComponent } from 'meteor/vulcan:core';

const Guide = () => {
  return (
    <div className="container">
		<h2>Using the Calls Consultation App</h2>
    	<a href="/RIS3 Calls Consultation Application Guideline.pdf" id="download-guide" className="pull-right" onclick="">Download pdf <i className="fa fa-file-pdf-o" aria-hidden="true"/></a>
		<p>This guide describes how to use the Calls Consultation app for two groups of users: organisers and
			participants in call consultation processes. Participants in the process can skip the steps marked as
		    "for the organiser".</p>
    	<p className="steps">Step 1: Selection of stakeholders to be invited (for the organiser)</p>
    	<p>
			Starting from the stakeholders' mapping, this stage aims to identify the basic categories of stakeholders, based on their level of interest and influence on the specific call.
    	</p>

		<br/>

    	<p className="steps"><strong>Step 2 - Selection of consultation mode</strong></p>
	    <p>
			A choice should be made as to whether the consultation method is going to be open to the public or targeted.
	    </p>
		<ol>
			<li>
				Create a collaboration board and invite users (by default boards are public).
				<div className="img-container">
					<img src="img/createCall.png" style={{width: 620}}/>
				</div>
				<p className="img-caption">Figure 1a: Creating a discussion board for a specific call.</p>
			</li>
			<li>
				Create a point for discussion concerning this call such as <q>Funding priorities</q> and invite members of a specific group to contribute.
				<div className="img-container">
					<img src="img/createPost.png" style={{width: 620}}/>
				</div>
				<p className="img-caption">Figure 1b: Creating a new post.</p>
			</li>
			<li>
				Raise a item within the discussion and express your opinion concerning this topic.
				<div className="img-container">
					<img src="img/createComment.png" style={{width: 620}}/>
				</div>
				<p className="img-caption">Figure 1c: Creating a new comment and voting.</p>
			</li>
		</ol>

		<br/>

      <p className="steps"><strong>Step 3 - Definition of call assessment criteria under the RIS3 framework</strong></p>
      <p>
	Considering factors highlighted by the follow assessment grid communicate and collaborate in the definition of call assessment criteria.
      </p>

	<div className="container" style={{"width": "80%", "fontSize": "12px"}}>

		<h6 style={{"textAlign": "center"}}><i>Table 1 - </i>Assessment grid of consistency between RIS3 and a Call of action</h6>

		<table className="table table-condensed">
			<thead>
				<tr>
					<th style={{"textAlign": "center"}}>RIS3 Steps and Sections</th>
					<th style={{"textAlign": "center"}}>Assessment of features of the proposed call/action</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td style={{"textAlign": "center"}}>
						Phase 1<br/>
						<img src="http://www.onlines3.eu/wp-content/onlines3-images/home_step_02.png"/><br/>
						Governance
					</td>
					<td>
						<ul className="list-group" style={{"fontSize": "80%"}}>
							<li className="list-group-item" onClick={()=>console.log(this)}>-Has the action been designed in collaboration with stakeholders or with other forms of broad participation?</li>
							<li className="list-group-item">-Are the outcomes of the action to be disseminated to a larger audience?</li>
							<li className="list-group-item">-Do the public outcomes of the action follow an open science/innovation approach?</li>
						</ul>
					</td>
				</tr>
				<tr>
					<td style={{"textAlign": "center"}}>
						Phase 2<br/>
						<img src="http://www.onlines3.eu/wp-content/onlines3-images/home_step_01.png"/><br/>
						Analysis of Context
					</td>
					<td>
						<ul className="list-group">
							<li className="list-group-item">-Does the action consider the results of RIS3 SWOT analysis and the innovation potential of the region?</li>
							<li className="list-group-item">-Does the action contribute to extroversion of productive activities or their positioning in trans-regional and international value chains?</li>
							<li className="list-group-item">-What is the degree of alignment between the action results of the EDP process? (fully-aligned, partly-aligned, EDP has not been realised or the action does not relate to EDP results)</li>
						</ul>
					</td>
				</tr>
				<tr>
					<td style={{"textAlign": "center"}}>
						Phase 3<br/>
						<img src="http://www.onlines3.eu/wp-content/onlines3-images/home_step_03.png"/><br/>
						Shared Vision/Strategy Formulation
					</td>
					<td>
						<ul className="list-group">
							<li className="list-group-item">-Does the action contribute to research and innovation activities?</li>
							<li className="list-group-item">-Are social, organisational, service and market innocation considered beside technological and science based innovation?</li>
							<li className="list-group-item">-Does the action contribute to private sector research and innovation?</li>
							<li className="list-group-item">-Are the societal inclusive, environmental and sustainable economic development challenges addressed?</li>
							<li className="list-group-item">-Are challenges of modernisation/diversification of productive activities addressed by the action?</li>
						</ul>
					</td>
				</tr>
				<tr>
					<td style={{"textAlign": "center"}}>
						Phase 4<br/>
						<img src="http://www.onlines3.eu/wp-content/onlines3-images/home_step_04.png"/><br/>
						Priortiy Setting
					</td>
					<td>
						<ul className="list-group">
							<li className="list-group-item">-Is the action in alignment with context analysis and harvesting of entrepreneurial discoveries and DAE?</li>
							<li className="list-group-item">-Is the concentration of resources sufficient to achieve the objective of the action?</li>
						</ul>
					</td>
				</tr>
				<tr>
					<td style={{"textAlign": "center"}}>
						Phase 5<br/>
						<img src="http://www.onlines3.eu/wp-content/onlines3-images/home_step_05.png"/><br/>
						Policy Mix/Action Plan Implementation
					</td>
					<td>
						<ul className="list-group">
							<li className="list-group-item">-Do eligible activities fall within the priority sectors and activities of RIS3?</li>
							<li className="list-group-item">-Are there private organisations or a mix of public and private organisations supported by the action?</li>
							<li className="list-group-item">-Is the action a follow-up of pilot projects or a small scale implementation?</li>
						</ul>
					</td>
				</tr>
				<tr>
					<td style={{"textAlign": "center"}}>
						Phase 6<br/>
						<img src="http://www.onlines3.eu/wp-content/onlines3-images/home_step_06.png"/><br/>
						Monitoring and Evaluation
					</td>
					<td>
						<ul className="list-group">
							<li className="list-group-item">-Does the action define output and result indicators?</li>
							<li className="list-group-item">-Are indicators linked to priorites with clearly identified baselines and targets?</li>
							<li className="list-group-item">-Are the outcomes of the action sustainable in the long run?</li>
						</ul>
					</td>
				</tr>
			</tbody>
		</table>
	</div>

	<br/>

    <p className="steps"><strong>Step 4 - Analysis of stakeholders' views and reporting to the Call authority</strong></p>
    <p>
		Subscribe to newsletters to retrieve periodic reports concerning users' opinions and priorities on calls.
		<div className="img-container">
			<img src="img/subscribe.png" style={{width: 620}}/>
		</div>
		<p className="img-caption">Figure 2: Subscribe to newsletters via <q>My profile</q> or the Newsletter banner.</p>
    </p>

    </div>
  )
}

registerComponent('Guide', Guide);
