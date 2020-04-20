个人 LeetCode 题解，用图片的形式展示解题思路。

## 各题型常见「套路」

- [链表](#链表)：假节点、指针、双指针、假节点+双指针、递归、下一个节点
- [数组](#数组)：哈希表、双指针、栈
- [栈](#栈)：辅助栈
- [树](#树)：递归 or 栈

- [数学](数学)：哈希表
- [字符串](#字符串)：滑动窗口、动态规划、栈、双指针

## 链表
- [237. 删除链表中的节点](docs/237.md)：将下一个节点赋给当前节点，删除下一个节点。标签：`下一个节点`

假节点

- [2. 两数相加](docs/2.md)：使用一个假节点来链接链表
- [83. 删除排序链表中的重复元素](docs/83.md)：若重复，指向下下个节点

指针

* [24. 两两交换链表中的节点](docs/24.md)：25 题，k 固定为 2 的场景 
* [25. K 个一组翻转链表](docs/25.md)：分为已翻转、待翻转、未翻转，利用「指针」，分离原链表

双指针

- [141. 环形链表]()：有环：快指针跳两步，慢指针跳一步，两者总会相遇，标签：`快慢指针`

假节点 + 双指针

- [19. 删除链表的倒数第 N 个节点](/docs/19.md)：用一把长度为 N 的「尺子」，往右移动，右边到达末尾，左边就是倒数第 N 个节点。

递归

- [21. 合并两个有序链表](docs/21.md)：从最小的节点开始，将剩下的链表节点看成一个节点；递归找出剩下节点的最小节点。

## 数组

- [35. 搜索插入位置](35.md)：相当于返回目标值插入有序数组的位置，最直接的方式就是跟每一个元素比较
- [53. 最大子序和](docs/53.md)：需要记录到当前值的最大连续和；正数增益：当前值加上一个正数才大于当前值。标签：`正数增益`
- [66. 加一](docs/66.md)：从后往前遍历加 1，考虑 99->100，

哈希表

- [1. 两数之和](docs/1.md)：使用哈希表的 contains() 来比较其他元素是否符合条件，避免一一比较

双指针

- [26. 删除排序数组中的重复项](docs/26.md)：找到后面不重复元素（判断条件：当前元素和上一个元素是否相等），依次覆盖前面的元素，标签：`快慢指针`
- [27. 移除元素](docs/27.md)：不删除，只覆盖。相向（拷贝）覆盖：后面的非目标值覆盖前面的目标值，标签：`同向（快慢）双指针`。相向（拷贝）覆盖：右边的所有值（包含目标值）覆盖左边的目标值，标签：`相向（左右）双指针`
- [88. 合并两个有序数组](docs/88.md)：比较得到两个数组最大的元素，作为最大值放在最后。
- [905. 按奇偶排序数组](docs/905.md)：将后面的偶数跟前面的奇数交换。标签：`前后双指针`

栈

- [56. 合并区间](docs/56.md)：先排序，再利用栈

## 栈

辅助栈

- [155. 最小栈](docs/155.md)：栈存放正常元素，辅助栈存放最小元素。第一个元素为最小元素，如果后面比它小，入「小栈」，否则入「正常栈」
- [232. 用栈实现队列](docs/232.md)：使用两个栈，栈 s1 作为数据存储，辅助栈 s2 作为临时缓冲。

## 树

> 它既有链表的快速插入与删除操作的特点，又有数组快速查找的优势

递归 or 栈（深度优先遍历）

* [94. 二叉树的中序遍历](docs/94.md)：递归：左根右，如果没有左子树，记录其值。
* [100. 相同的树](docs/100.md)：利用递归，依次判断两个树的每一个节点的值是否相同。左左比较、右右比较
* [101. 对称二叉树](docs/101.md)：利用递归，依次判断对称节点的值是否相同。左右比较、右左比较
* [104. 二叉树的最大深度](docs/104.md)：递归：树的最大深度等于当前节点深度 1 加左右子树最大深度
* [107. 二叉树的层次遍历 II](docs/107.md)：队列存放节点
*  [108. 将有序数组转换为二叉搜索树](docs/108.md)：选择中位数作为根节点，再在左右两边选择一个中位数作为左右子树的根节点
* [144. 二叉树的前序遍历](/docs/144.md)：递归：根左右，先记录其值，再递归调用左右子树。栈：入栈：节点不为空；出栈：节点为空

## 数学

* [7. 整数反转](docs/7.md)：依次除 10 取余，考虑溢出
* [9. 回文数](docs/9.md)：从两头向中间依次比较左数和右数是否相等

哈希表

- [13. 罗马数字转整数](docs/13.md)：IV=4 等 6 种特殊情况总结为一种：左边数比右边数小。减去当前值

二分查找

- [69. x 的平方根](docs/68.md)：如果 `n^2 <= x && (n+1)^2 > x` 那么 n 就是平方根

## 字符串

* [14. 最长公共前缀](docs/14.md)：依次比较每个字符串的每一个字符
* [58. 最后一个单词的长度](docs/58.md)：反转字符串，如果长度 length 为 0，则代表最后字符为空，继续循环
* [67. 二进制求和](docs/67.md)：可转换为 10 进制求和，再转换为二进制

Sliding Window（滑动窗口）

- [3. 无重复字符的最长子串](docs/3.md)：滑动找到所有不重复的子字符串，如果子串长度最长，记录为最长子串串。

动态规划：Dynamic programming，简称 DP。通过子问题解决父问题，即父问题答案可以通过子问题得到。

- [5. 最长回文子串](docs/5.md)：先将字符串反转，两者比较，利用动态规划得到最长公共子串。再排除字符串首尾是反向副本的情况（`aacdcaa`）
- [91. 解码方法](/docs/91.md)：**从后往前遍历**，当前子序列的和（解码方法数）跟上一个和上上个子序列的和相关

栈

- [20. 有效的括号](docs/20.md)：利用栈，将字符串的字符依次入栈，弹出直接闭合的字符，最后栈为空，则为有效字符。
- [38. 外观数列](/docs/38.md)：利用栈得到相同元素的个数。

双指针

- [28. 实现 strStr()](/28.md)：将 needle（目标字符串） 依次与字符串 haystack 长度为 needle 的子串比较，完全相同则返回子串的数组下标。

---

## 动态规划

-  [70. 爬楼梯](docs/70.md)：需要找到规律

## 做题交流：每天一小时算法群
若二维码过期，可加我好友后拉你入群，请备注「算法」。

<!--个人思想：不求速度，重视过程，每天早上思考一小时，没做出来第二天再思考，-->
<p align="center">
    <img src="https://deppwang.oss-cn-beijing.aliyuncs.com/blog/2020-03-16-030233.png" height="360">
    <img src="https://deppwang.oss-cn-beijing.aliyuncs.com/blog/2020-03-16-030424.png" height="360">
</p>


##  思考

两个难点：

1. 整体思路
2. 将思路转换为代码

LeetCode 题库地址：https://leetcode-cn.com/problemset/all/

> 深度优先搜索（深度优先遍历） Depth-First-Search，简称 DFS，递归（栈）实现
>
> 宽度优先搜索（广度优先遍历）Breadth-First-Search，简称 BFS，队列实现
