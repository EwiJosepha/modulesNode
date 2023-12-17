// with promises

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

getTxt("./content/first.txt").then((res) => console.log(res)).catch((err) => console.log(err)).then
getTxt("./content/second.txt").then((res) => console.log(res)).catch((err) => console.log(err)).then