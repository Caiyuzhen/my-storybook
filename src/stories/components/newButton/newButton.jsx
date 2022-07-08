import React from 'react';
import './newButton.css';



const NewButton = ( { children } ) => {
	return (
		<button className="button">
			{children}
		</button>
	)
}

//more info: https://www.freecodecamp.org/news/what-is-storybook-and-how-can-i-use-it-to-create-a-component-libary-in-react/

export default NewButton;