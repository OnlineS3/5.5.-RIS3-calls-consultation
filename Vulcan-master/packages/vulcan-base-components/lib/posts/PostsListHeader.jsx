import { Components, registerComponent } from 'meteor/vulcan:core';
import React from 'react';

const PostsListHeader = () => {

  return (
	<div className="col-sm-3">
	  Calls
	  <br/>
	  <Components.SearchForm/>
	  <hr/>
	  <Components.CategoriesList/>
	</div>
  )
}

PostsListHeader.displayName = "PostsListHeader";

registerComponent('PostsListHeader', PostsListHeader);
