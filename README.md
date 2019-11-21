个人 LeetCode 题解，用图片的形式展示解题思路。

## 目录

* [画解 LeetCode：1. 两数之和](docs/1.%20two-sum.md)：使用哈希表的 contains() 来比较其他元素是否符合条件。标签：`哈希表`
* [画解 LeetCode：2. 两数相加](docs/2.%20add-two-numbers.md)：使用一个假节点来链接链表。标签：`链表`
* [画解 LeetCode：3. 无重复字符的最长子串](docs/3.%20longest-substring-without-repeating-character.md)：滑动找到所有不重复的子字符串，如果长度最长，记录为最长字符串。标签：`字符串`、`Sliding Window`
* [画解 LeetCode：5. 最长回文子串](docs5/.%20longest-palindromic-substring.md)：先将字符串反转，两者比较，利用动态规划得到最长公共子串。再排除字符串首尾是反向副本的情况（`aacdcaa`）。标签：`字符串`、`动态规划`
* [画解 LeetCode：7. 整数反转](docs/7.%20reverse-integer.md)：依次除 10 取余，考虑溢出。标签：`数学`
* [画解 LeetCode：9. 回文数](docs/9.%20palindrome-number.md)：依次比较最高位和最低位是否相等。标签：`数学`
* [画解 LeetCode：13. 罗马数字转整数](docs/13.%20roman-to-integer)：
  IV=4 等 6 种特殊情况总结为一种：左边数比右边数小。减去当前值。标签：`字符串`
* [画解 LeetCode：14. 最长公共前缀](docs/https://depp.wang/2019/10/06/14.%20longest-common-prefix)：先将第一个字符串作为公共前缀。标签：`字符串`
* [画解 LeetCode：20. 有效的括号](docs/https://depp.wang/2019/10/28/14.%20valid-parentheses)：将字符串的字符依次入栈，弹出直接闭合的字符，最后栈为空，则为有效字符。标签：`栈`
* [画解 LeetCode：21. 合并两个有序链表](docs/https://depp.wang/2019/11/15/21.%20merge-two-sorted-lists)：较小的头结点作为结果头结点，next 节点从剩余节点中取最小。标签：`递归`
* [画解 LeetCode：26. 删除排序数组中的重复项](docs/https://depp.wang/2019/11/18/26.%20remove-duplicates-from-sorted-array)：一个指针从前往后遍历数组，一个指针记录不重复元素的数量（数组下标）。标签：`双指针`
* [画解 LeetCode：94. 二叉树的中序遍历](docs/https://depp.wang/2019/07/31/94.%20binary-tree-inoder-traversal/)：左跟右，如果没有左子树，记录其值。标签：`递归`、`栈`
* [画解 LeetCode：232. 用栈实现队列](docs/https://depp.wang/2019/09/18/232.%20implement-queue-using-stacks)：使用两个栈，入队，元素压入栈 s1；出队，s1 倒入 s2，弹出 s2 顶部元素，不用倒回。标签：`栈`


LeetCode 题库地址：https://leetcode-cn.com/problemset/all/
