const fs = require('fs');
const path = require("path")

const autoSideBar2 = require('./utils/autoSidebar2');

console.log(path);
module.exports = {
  title: 'DOUMJUN',
  description: '欢迎访问我的博客',
  base: '/vuepress.blog/',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/guide/about', target:'' },
      { text: '博客', link: '/guide/BLOG/' ,target:''},
      { text: '日常', link: '/guide/daily/', target:'' },
      {
        text: '更多',
        items: [
          { text: 'Github', link: 'https://github.com/DouMJun' ,target:'_blank'},
          { text: 'bilibili', link: 'https://space.bilibili.com/8096424', target:'_blank' }
        ]
      },
      
    ],
    sidebar: {
      '/guide/BLOG/': [
        {
          title: '博客',
          children: autoSideBar2('/guide/BLOG/')
        }
      ],
      '/guide/daily/': [
        {
          title: '日常',
          children: autoSideBar2('/guide/daily/')
         
        }
      ],
      '/guide/': [
        {
          title: '首页',
          children: [  
          'contact', 
        ]
      }
      ]
    },
    lastUpdated: 'Last Updated', 
    smoothScroll: true
  }
}