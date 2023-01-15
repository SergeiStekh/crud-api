import fs from 'fs/promises';
import path from 'path';
import { UserType } from 'src/models/userModel';

async function writeFileToDatabase(data: UserType) {
  const filePath = path.join(__dirname, '../data/data.json');
  const file = await fs.readFile(filePath, 'utf-8');
  const fileData: UserType[] = JSON.parse(file);
  const newFile = [...fileData, data];
  let writeData = JSON.stringify(newFile);
  await fs.writeFile(filePath, writeData);
}

export { writeFileToDatabase }