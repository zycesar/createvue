
function formatNumber(n) {
    const str = n.toString()
    return str[1] ? str : `0${str}`
}
//时间格式化 2021/03/04 15:57:42
export function formatTime(date) {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    const t1 = [year, month, day].map(formatNumber).join('/')
    const t2 = [hour, minute, second].map(formatNumber).join(':')

    return `${t1} ${t2}`
}
// 获取时间字符串 20210304155913
export function getTimeStr() {
    let date=new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    const t1 = [year, month, day].map(formatNumber).join('')
    const t2 = [hour, minute, second].map(formatNumber).join('')
    return `${t1}${t2}`
}






