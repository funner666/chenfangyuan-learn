const fs = require('fs')
fs.readFile('./file/成绩.txt','utf8',function(err,dataStr){
    if(err) {
        return console.log("读取文件失败！" + err.message)
    }
    console.log('读取文件成功' + dataStr)
   const arrOld = dataStr.split(' ')
   const arrNew = []
   arrOld .forEach(item => {
    arrNew.push(item.replace('=',':'))
    })
    const newStr = arrNew.join('\r\n');
    console.log(newStr)
    fs.writeFile('./file/成绩-OK.txt',newStr,function(err){
        if(err){
            return
        }
        console.log('写入成功')
    })
})