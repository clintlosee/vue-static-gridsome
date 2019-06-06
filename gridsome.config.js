// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// const path = require('path');

// function addStyleResource(rule) {
//   rule.use('style-resource').loader('style-resource-loader').options({
//     patterns: [path.resolve(__dirname, './src/assets/*.scss')]
//   });
// }

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'posts/**/*.md',
        typeName: 'BlogPost',
        baseDir: './src',
        route: '/posts/:slug'
      }
    },
    {
      use: 'gridsome-plugin-sass-resources-loader',
      options: {
        resources: './src/assets/*.scss'
      }
    }
  ],
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
    }
  },

  // chainWebpack: config => {
  //   const types = [ 'vue-modules', 'vue', 'normal-modules', 'normal'];
  //   types.forEach(
  //     type => addStyleResource(config.module.rule('scss').oneOf(type))
  //   );
  // }
}
