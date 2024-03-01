// 01 find user in list
const list = ['anrug', 'chirag', 'deepak', 'hitesh', 'mithun']


function isUserpresent(username) {
    if (list.includes(username)) {
        console.log(`yes, ${username} is valid user`);
    } else {
        console.log(`${username} is not valid user`);
    }
}
isUserpresent('mithun');
isUserpresent('Someone');
