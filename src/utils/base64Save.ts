import * as fs from "fs";

export const base64Save = (base64: string) => {
  const base64Data = base64.replace(/^data:image\/jpeg;base64,/, "");
  const fileName = `${Date.now()+Math.floor(Math.random() * 100)}.jpeg`;
  const filePath = `${__dirname}/../${process.env.IMAGE_PATH}/${fileName}`;
  fs.writeFileSync(filePath, base64Data, 'base64');
  return fileName;
}
