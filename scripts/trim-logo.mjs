import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = "./public/logos/medpart";
const outputDir = "./public/logos-trim/medpart";

console.log("Reading from:", inputDir);

if (!fs.existsSync(inputDir)) {
  console.log("❌ Folder public/logos tidak ditemukan");
  process.exit(1);
}

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const files = fs.readdirSync(inputDir);
console.log("Files found:", files);

for (const file of files) {
  if (!file.match(/\.(png|jpg|jpeg|webp)$/)) continue;

  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(outputDir, file);

  await sharp(inputPath)
    .trim()
    .toFile(outputPath);

  console.log("✅ Trimmed:", file);
}

console.log("Done!");