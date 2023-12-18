const fs = require("fs");

//? check access
// fs.access(path, fs.constants.X_OK, (err) => {
//   if (err) {
//     console.log("%s doesn't exist", path);
//   } else {
//     console.log("can execute %s", path);
//   }
// });

// fs.readdir("./docs", (err, files) => {
//   if (err) {
//     console.error("Error reading directory:", err);
//   } else {
//     console.log("Files in ./docs:", files);
//   }
// });

//? Read files
// fs.readFile("D:/CAREER/nodeJs-notes/basics/docs/blog1.txt", (err, data) => {
//   if (err) {
//     console.log("err", err);
//     //! to nbe solved always returning this
//     // ? solved after copy file path from files
//     // err [Error: ENOENT: no such file or directory, open 'D:\CAREER\nodeJs-notes\.docs\blog1.txt'] {
//     //   errno: -4058,
//     //   code: 'ENOENT',
//     //   syscall: 'open',
//     //   path: 'D:\\CAREER\\nodeJs-notes\\.docs\\blog1.txt'
//   }
//   console.log("data", data.toString());
// });

//? Write files
// fs.writeFile('D:/CAREER/nodeJs-notes/basics/docs/blog1.txt', 'hello world', () => {
//     console.log('file was created');
// });
// // create new file
// fs.writeFile('D:/CAREER/nodeJs-notes/basics/docs/blog2.txt', 'hello world with sandeep', () => {
//     console.log('file was created');
// });

//? directories
// fs.mkdir("D:/CAREER/nodeJs-notes/basics/assets", (err) => {
//   if (err) {
//     console.log("mkdir err:", err);
//   }
//   console.log("folder created");
// });

// ? runs only when folder not created
const isExist = fs.existsSync("D:/CAREER/nodeJs-notes/basics/assets");
if (!isExist) {
  fs.mkdir("D:/CAREER/nodeJs-notes/basics/assets", (err) => {
    if (err) {
      console.log("mkdir err:", err);
    }
    console.log("folder created");
  });
} else {
  fs.rmdir("D:/CAREER/nodeJs-notes/basics/assets", (err) => {
    if (err) {
      console.log("rmdir err:", err);
    }
    console.log("folder removed");
  });
}

//? deleting files
if (fs.existsSync("D:/CAREER/nodeJs-notes/basics/docs/blog2.txt")) {
  fs.unlink("D:/CAREER/nodeJs-notes/basics/docs/blog2.txt", (err) => {
    console.log("file removed", err);
  });
}
