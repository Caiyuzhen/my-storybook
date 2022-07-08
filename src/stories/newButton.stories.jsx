import { action } from '@storybook/addon-actions'
import React from 'react';

import NewButton from '../components/newButton';


export default {
  title: 'newButton',
  component: NewButton,
};




export const Text = () => <NewButton onclick={action('clicked')}> Hello NewButton! 
</NewButton>