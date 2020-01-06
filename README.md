个人 LeetCode 题解，用图片的形式展示解题思路。

## 常见「套路」

- [链表](#链表)：假节点、指针、双指针（快慢指针）、假节点+双指针、递归、下一个节点
- [栈](#栈)：辅助栈
- [树](#树)：递归 or 栈
- [数组](#数组)：哈希表、双指针、栈
- [数学](数学)：哈希表
- [字符串](#字符串)：滑动窗口、动态规划、栈
- [动态规划](#动态规划)

## 链表

假节点

- [2. 两数相加](docs/2.md)：使用一个假节点来链接链表

指针

* [24. 两两交换链表中的节点](docs/24.md)：25 题，k 固定为 2 的场景 
* [25. K 个一组翻转链表](docs/25.md)：分为已翻转、待翻转、未翻转，利用「指针」，分离原链表

双指针（快慢指针）

- [141. 环形链表]()：有环：快指针跳两步，慢指针跳一步，两者总会相遇

假节点+双指针

- [19. 删除链表的倒数第 N 个节点](/docs/19.md)：前后两个指针相隔 K 个节点，同时往后遍历，当前指针到达末节点，后指针就是倒数第 K 个节点。

递归

- [21. 合并两个有序链表](docs/21.md)：将剩下部分看出一个节点，递归选出最小节点。

下一个节点

- [237. 删除链表中的节点](docs/237.md)：将下一个节点赋给当前节点，删除下一个节点。

## 栈

辅助栈

- [155. 最小栈](docs/155.md)：栈存放正常元素，辅助栈存放最小元素。第一个元素为最小元素，如果后面比它小，入「小栈」，否则入「正常栈」
- [232. 用栈实现队列](docs/232.md)：栈 s1 作为数据存储，辅助栈 s2 作为临时缓冲。入队：元素压入栈 s1；出队：s1 倒入 s2，弹出 s2 顶部元素。优化：s2 不用倒回。

## 树

递归 or 栈（深度优先遍历）

* [94. 二叉树的中序遍历](docs/94.md)：左根右，如果没有左子树，记录其值。
* [104. 二叉树的最大深度](/docs/104.md)：递归：1+max(left_height,right_height)
* [144. 二叉树的前序遍历](/docs/144.md)：递归：根左右，先记录其值，再递归调用左右子树。栈：入栈：节点不为空；出栈：节点为空

## 数组
哈希表
- [1. 两数之和](docs/1.md)：使用哈希表的 contains() 来比较其他元素是否符合条件

双指针

- [26. 删除排序数组中的重复项](docs/26.md)：快指针循环遍历，当前元素不等于前面元素时，覆盖慢指针指向元素，慢指针往后移动一位
- [27. 移除元素](docs/27.md)：实则没有移除元素，只是将不需要复制到前面。快慢双指针：快指针指向的非目标值覆盖慢指针指向的值。前后双指针：每次移动一个元素，只有前指针指向的值为目标值，才有后指针替换
- [905. 按奇偶排序数组](docs/905.md)：（左右/前后）双指针向中间移动，每次只移动其中一个，前指针为偶数则跳过，为奇数则交换。

栈

- [56. 合并区间](docs/56.md)：先排序，在利用栈

## 数学

* [7. 整数反转](docs/7.md)：依次除 10 取余，考虑溢出。
* [9. 回文数](docs/9.md)：依次比较最高位和最低位是否相等。

哈希表

- [13. 罗马数字转整数](docs/13.md)：IV=4 等 6 种特殊情况总结为一种：左边数比右边数小。减去当前值。

## 字符串

* [14. 最长公共前缀](docs/14.md)：先将第一个字符串作为公共前缀。

Sliding Window（滑动窗口）

- [3. 无重复字符的最长子串](docs/3.md)：滑动找到所有不重复的子字符串，如果长度最长，记录为最长字符串。

动态规划

- [5. 最长回文子串](docs/5.md)：先将字符串反转，两者比较，利用动态规划得到最长公共子串。再排除字符串首尾是反向副本的情况（`aacdcaa`）

栈

- [20. 有效的括号](docs/20.md)：将字符串的字符依次入栈，弹出直接闭合的字符，最后栈为空，则为有效字符

## 动态规划

> Dynamic programming，简称 DP。通过子问题解决父问题，即父问题答案可以通过子问题得到。

- [91. 解码方法](/docs/91.md)：从后往前遍历，当前子序列总和为上一个加上上一个

---

LeetCode 题库地址：https://leetcode-cn.com/problemset/all/

> 深度优先搜索（深度优先遍历） Depth-First-Search，简称 DFS，递归（栈）实现
>
> 宽度优先搜索（广度优先遍历）Breadth-First-Search，简称 BFS，队列实现

