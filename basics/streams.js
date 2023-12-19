const fs = require("fs");

const readStream = fs.createReadStream(
  "D:/CAREER/nodeJs-notes/basics/docs/streamFile.txt",
  { encoding: "utf8" }
);
const writeStream = fs.createWriteStream(
  "D:/CAREER/nodeJs-notes/basics/docs/streamFile1.txt"
);

// readStream.on("data", (chunk) => {
//   console.log("new chunk -----");
//   //   console.log("chunk:", chunk.toString());
//   console.log("chunk:", chunk);
//   writeStream.write("\nNEW CHUNK\n");
//   writeStream.write(chunk);
// });

// Piping : its must be read stream to write stream
readStream.pipe(writeStream);
