
// 给定一个整数数组 A，如果它是有效的山脉数组就返回 true，否则返回 false。

// 让我们回顾一下，如果 A 满足下述条件，那么它是一个山脉数组：

// A.length >= 3
// 在 0 < i < A.length - 1 条件下，存在 i 使得：
// A[0] < A[1] < ... A[i-1] < A[i]
// A[i] > A[i+1] > ... > A[A.length - 1]
 
<img src="./question_941.jpg"/>

// 示例 1：

// 输入：[2,1]
// 输出：false
// 示例 2：

// 输入：[3,5,5]
// 输出：false
// 示例 3：

// 输入：[0,3,2,1]
// 输出：true
//  

// 提示：

// 0 <= A.length <= 10000
// 0 <= A[i] <= 10000 


/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
    if (A.length < 3) return false;
    if (A.length === 3) {
        if (A[1] > A[0] && A[1] > A[2]) return true;
        return false;
    }
    let max_value = 0;
    let max_index = null;
    A.map((item, index)=>{
        if (item > max_value){
            max_value = item;
            max_index = index;
        }
    });
    if (max_index === 0 || max_index === (A.length - 1)) return false;

    for (let i = 0; i < A.length; i++) {
        if (i < max_index) {
            if (!(max_value > A[i]) || !(A[i] < A[i+1])) return false;
        }
        if (i > max_index && i < A.length - 1) {
            if (!(max_value > A[i]) || !(A[i] > A[i+1])) return false;
        }
    }
    return true;
};