/* 分页公共函数*/
module.exports = handlePages = (pageNum, pageSize, total) => {
    let startRow = total > 0 ? ((pageNum - 1) * pageSize + 1) : 0;
    let endRow = pageNum * pageSize <= total ? pageNum * pageSize : total;
    return {
        pageNum,
        pageSize,
        recordCounts:total,
        startRow,
        endRow
    }
}