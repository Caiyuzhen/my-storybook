import React from 'react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: '左侧目录 Example/Button', //配置左侧目录导航的名称
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    size:{control:{ type:'select', options: ['small', 'medium','large']}} //control 为选项控制器，比如可以配置一个下拉菜单去选择按钮尺寸s 
  },
};



// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

//👇左侧导航内的四个按钮 cell
export const Primary = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',//按钮名称
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',//按钮名称
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',//按钮名称
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',//按钮名称
};
