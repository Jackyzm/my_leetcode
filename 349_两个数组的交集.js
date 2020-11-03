// 349. 两个数组的交集

// 给定两个数组，编写一个函数来计算它们的交集。

// 示例 1：

// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2]
// 示例 2：

// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出：[9,4]
//  

// 说明：

// 输出结果中的每个元素一定是唯一的。
// 我们可以不考虑输出结果的顺序。


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    if (!nums1 || !nums1.length || !nums2 || !nums2.length) return [];
    const set1 = new Set(nums1);
    const array1 = Array.from(set1);
    const set2 = new Set(nums2);
    const array2 = Array.from(set2);
    const result = [];
    array1.map((item)=>{
        if (array2.indexOf(item) > -1) result.push(item)
    });
    return result;
};

intersection([1,2,2,1], [2,2]) // [2];