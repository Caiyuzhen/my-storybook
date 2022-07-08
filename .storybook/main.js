module.exports = {
  "stories": [ //索引路径，如果文件夹被移动的话, 这里的路径也要更新
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [//🔥注意，如果要写 scss 的话，需要在 addons 进行插件的引入
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}
