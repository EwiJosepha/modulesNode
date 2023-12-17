
const getTxt = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data);
      }
    })
  })
}
//handling with aync await keywords

//  async function start () {

  try{
    const firstfile = await getTxt("./content/first.txt")
    console.log(firstfile);
  }
  catch{
console.log("err");
  }



start ()