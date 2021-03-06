export function changeList(state, options) {
    state.listData = options
}
export function removeList(state, options) {
    state.listData = state.listData.filter(item => {
        return item.bookId != options.bookId
    })
}
export function collectList(state, options) {
    let str = state.collectData.some(item => {
        return item.bookId == options.bookId
    })
    if (str) {
        alert('已经收藏了')
        return
    }
    state.collectData.unshift(options)
}
//添加图书
export function addData(state, options) {
    state.listData.unshift(options);
}
export function removeCollect(state, options) {
    state.collectData = state.collectData.filter(item => {
        return item.bookId != options.bookId
    })
}