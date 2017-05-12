import React from 'react';
import { withCurrentUser, getSetting, Components, registerComponent } from 'meteor/vulcan:core';

const Header = (props, context) => {
  
  const logoUrl = getSetting("logoUrl");
  const siteTitle = getSetting("title", "My App");
  const tagline = getSetting("tagline");

  return (
      <header id="site-header">
	<nav id="top-menu">
	  <ul>
	    <li><a href="http://www.onlines3.eu/">Online S3 Project</a></li>
	    <li className="active"><a href="http://www.s3platform.eu/applications/"><i className="fa fa-lightbulb-o" aria-hidden="true"></i>Applications</a></li>
	    <li><a href="http://www.s3platform.eu/toolbox/"><i className="fa fa-cog" aria-hidden="true"></i>Toolbox</a></li>
	    <li><a href="http://www.s3platform.eu/analytics/"><i className="fa fa-bar-chart" aria-hidden="true"></i>Analytics</a></li>
	    <li><a href="http://www.s3platform.eu/support/"><i className="fa fa-life-ring" aria-hidden="true"></i>Support</a></li>
	    <li><a href="http://www.onlines3.eu/contact/"><i className="fa fa-envelope-o" aria-hidden="true"></i>Contact</a></li>
	  </ul>
	</nav>

	<div id="header-main">
	  <div className="top-section">
	    <div className="headers">
		<img className="logo-img" src="https://raw.githubusercontent.com/OnlineS3/Common-Assets/master/Layout%20code/img/logo.png?token=AY7agUBF0nx90zOIIXfEzJ18peap1f4Qks5ZGcRuwA%3D%3D" width="77"/>
	        <div>
		  <p className="heading"><a href="http://www.s3platform.eu/">Online S3 Platform</a></p>
		  <p className="sub-heading">Calls Consultation</p>
		</div>
	      </div>

	      <div className="social-links">
		<a href="https://twitter.com/online_s3" title="Twitter" target="_blank"><i className="fa fa-twitter-square" aria-hidden="true"></i></a>
		<a href="https://plus.google.com/102042915278982824881" title="Google+" target="_blank"><i className="fa fa-google-plus-square" aria-hidden="true"></i></a>
		<a href="https://www.youtube.com/channel/UCuYNnd9rdrN_EbF5_P0Nmog" title="YouTube" target="_blank"><i className="fa fa-youtube-square" aria-hidden="true"></i></a>	
{/*
		<!-- <a href="https://twitter.com/online_s3" title="Twitter" target="_blank">L</a>  -->
		<!-- <a href="https://plus.google.com/102042915278982824881" title="Google+" target="_blank">G</a>  -->
		<!-- <a href="https://www.youtube.com/channel/UCuYNnd9rdrN_EbF5_P0Nmog" title="YouTube" target="_blank">X</a>  -->
		<!-- <a href="http://www.onlines3.eu/feed/" title="Newsfeed" target="_blank">R</a> -->
*/}
	    </div>
	  </div>
	  <div className="bottom-section">
	    <div className="menu">
	      <ul>
		<li><a href="/about"> About </a></li>
		<li><a href="/guide"> Guide </a></li>
		<li><a href="/related"> Related Documents </a></li>
		<li><a id="tool" href="/"> Access to application </a></li>
	      </ul>
	    </div>
	    <div className="user-btns">
{/*TODO*/}
	      {!!props.currentUser ? <Components.UsersMenu/> : <Components.UsersAccountMenu/>}
{/*TODO*/}
	      <button className="login-btn" disabled> Sign in </button>
	      <button className="register-btn" disabled> Sign up </button>
	    </div>
	  </div>
	</div>
	<div id="breadcrumb">
	  <ul>
	    <li><a href="http://www.s3platform.eu/"> Online S3 Platform </a></li>
	    <li><a href="http://www.s3platform.eu/applications/2-analysis-of-context/"> Analysis of context </a></li>
	    <li><span> Calls Consultation </span></li>
	  </ul>
	</div>
     </header>    
  )
}

Header.displayName = "Header";

Header.propTypes = {
  currentUser: React.PropTypes.object,
};

registerComponent('Header', Header, withCurrentUser);
