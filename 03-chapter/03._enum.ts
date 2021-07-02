// 默认从0开始
enum Status {
  OFFLINE,
  ONLINE,
  DELETED
}

console.log(Status.OFFLINE)
console.log(Status.ONLINE)
console.log(Status.DELETED)

function getResult(status: any): string {
  if (status === Status.OFFLINE) {
    return 'offline'
  } else if (status === Status.ONLINE) {
    return 'online'
  } else if (status === Status.DELETED) {
    return 'deleted'
  }
  return 'error'
}

const res = getResult(Status.OFFLINE)
console.log(res)