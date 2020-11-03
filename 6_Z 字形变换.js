// # 6. Z 字形变换

// 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。

// 比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：

//     L   C   I   R
//     E T O E S I I G
//     E   D   H   N
// 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。

// 请你实现这个将字符串进行指定行数变换的函数：

//     string convert(string s, int numRows);
// 示例 1:

//     输入: s = "LEETCODEISHIRING", numRows = 3
//     输出: "LCIRETOESIIGEDHN"

// 示例 2:

//     输入: s = "LEETCODEISHIRING", numRows = 4
//     输出: "LDREOEIIECIHNTSG"
//     解释:

//     L     D     R
//     E   O E   I I
//     E C   I H   N
//     T     S     G



// ## 解题

// 思路：

//     1、将字符串转换成数组
//     2、通过slice截取arr前几个  偶数列为完整的numRows个数 奇数列为z中间的 比偶数列少2
//     3、通过遍历行数  再通过行数去arr里取对应的字符 拼接起来

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
    if (numRows < 2) return s;
    const sArr = [...s];
    const resultArr = [];
    let lastArr = sArr;
    let i = 0;
    while(lastArr.length) {
        if (!(i%2)) {
            resultArr.push(lastArr.slice(0, numRows));
            lastArr = lastArr.slice(numRows);
        } else {
            resultArr.push(lastArr.slice(0, numRows - 2));
            lastArr = lastArr.slice(numRows - 2);
        }
        i += 1;
    }
    let result = '';
    for (let j = 0; j < numRows; j++) {
        resultArr.map((item, index)=>{
            if (!(index%2)) {
                if (item[j]) result += item[j];
            } else if (j > 0 && j < numRows - 1 && item[numRows - j - 2]){
                result += item[numRows - j - 2];
            }
        })
    }
    return result;
};