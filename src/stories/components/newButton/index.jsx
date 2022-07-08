
// Inside src/components/Button/Button.js

import React from 'react';




const NewButton = ({ children, ...rest }) => {
	return (
	  <button className="button" {...rest}>
		{ children }
	  </button>
	)
  }
  


export { default } from './newButton';
