// 你正在使用一堆木板建造跳水板。有两种类型的木板，其中长度较短的木板长度为shorter，长度较长的木板长度为longer。你必须正好使用k块木板。编写一个方法，生成跳水板所有可能的长度。

// 返回的长度需要从小到大排列。

// 示例：

// 输入：
// shorter = 1
// longer = 2
// k = 3
// 输出： [3,4,5,6]

// 提示：
// 0 < shorter <= longer
// 0 <= k <= 100000


/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
const divingBoard = (shorter, longer, k) => {
    if (!k) return [];
    const kArr = Array(k).fill(shorter);
    const result = [];
    const sum = kArr.reduce((a,b)=> a+b);
    kArr.map((_, i)=>{
        result.push(sum-i*shorter+i*longer)
    });
    // 遍历无法获取i=kArr.length 的情况 i=kArr.length 相当于全是longer的情况
    result.push(kArr.length*longer);
    return Array.from(new Set(result));
};

console.log(divingBoard(1,1,0));
console.log(divingBoard(2,1118596,979));
