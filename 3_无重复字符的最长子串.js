// 3. 无重复字符的最长子串

// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例 1:
// 输入: "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

// 示例 2:
// 输入: "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

// 示例 3:
// 输入: "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。


// 这道题主要用到思路是：滑动窗口

// 什么是滑动窗口？

// 其实就是一个队列,比如例题中的 abcabcbb，进入这个队列（窗口）为 abc 满足题目要求，当再进入 a，队列变成了 abca，这时候不满足要求。所以，我们要移动这个队列！


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s) return 0;
    const arr = [...s];
    let maxLen = 0;
    arr.map((item, i)=>{
        const iArr = [item];
        for (j = i+1; j < arr.length; j++){
            if (iArr.indexOf(arr[j]) < 0){
                iArr.push(arr[j]);
            } else {
                break;
            }
        }
        maxLen = iArr.length > maxLen ? iArr.length : maxLen
    });
    return maxLen;
};


console.log(lengthOfLongestSubstring(''))
console.log(lengthOfLongestSubstring(' '))
console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('bbbbb'))
console.log(lengthOfLongestSubstring('pwwkew'))
