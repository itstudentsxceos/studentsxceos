import sharp from "sharp";
import path from "path";
import fs from "fs";

const inputFile = "./public/logos/medpart/shunpad.png";
const outputFile = "./public/logos-trim/shunpad.png";

// pastikan folder output ada
fs.mkdirSync(path.dirname(outputFile), { recursive: true });

async function trimOne() {
  console.log("Reading:", inputFile);

  await sharp(inputFile)
    .trim()
    .toFile(outputFile);

  console.log("✅ Trimmed:", path.basename(inputFile));
}

trimOne();