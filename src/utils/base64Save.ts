import * as fs from "fs";

export const base64Save = (base64: string) => {
  const fileName = `${Date.now()}.png`;
  const filePath = `${__dirname}/../${process.env.IMAGE_PATH}/${fileName}`;
  fs.writeFileSync(filePath, base64, 'base64');
  return fileName;
}
