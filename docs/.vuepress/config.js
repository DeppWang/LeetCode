const leetcodeArr = [
  '/',
  '/1.%20two-sum',
  '/2.%20add-two-numbers',
  '/3.%20long-substring-without-repeating-character',
  '/5.%20longest-palindromic-substring',
  '/7.%20reverse-integer',
  '/9.%20palindrome-number',
  '/94.%20binary-tree-inoder-traversal'
]

const noteArr = [
  "",
  "linux-note",
  "git-note"
];

// .vuepress/config.js
module.exports = {
  themeConfig: {
    repo: "deppwang/LeetCode",
    sidebar: [
      {
        title: '画解算法',
        collapsable: false,
        children: leetcodeArr
      }
    ]
  }

}