//asynchronous wth callbacks
const {readFile, writeFile} = require("fs")
//your course on assynchronuos file reading system is incomplete josepha

readFile("./content/first.txt",'utf8', (err, result)=>{
  if(err){
    console.log(err);
    return
  }

  const firsttxt = result
  readFile("./content/second.txt", "utf8", (err, result) =>{
    if(err){
      console.log(err);
    }

    const sec = result
       writeFile("content/newresult.txt","this asynchronous err it seems cool",  (err, result)=>{
        if(err){
          console.log(err);
        }
        const finalresult = result
      })
  })

}) 



