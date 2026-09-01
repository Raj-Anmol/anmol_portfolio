import sharp from "sharp";
import { promises as fs } from "fs";
import path from "path";

const tasks = [
  {
    name: "Profile image (512x512)",
    input: "public/profile.png",
    output: "public/profile.png",
    width: 512,
    format: "png",
    quality: 90,
  },
  {
    name: "Apple touch icon (180x180)",
    input: "public/profile.png",
    output: "public/apple-touch-icon.png",
    width: 180,
    format: "png",
    quality: 90,
  },
  {
    name: "Favicon PNG (32x32)",
    input: "public/profile.png",
    output: "public/favicon.png",
    width: 32,
    format: "png",
    quality: 90,
  },
  {
    name: "Profile WebP (512x512)",
    input: "public/profile.png",
    output: "public/profile.webp",
    width: 512,
    format: "webp",
    quality: 85,
  },
  {
    name: "Project: AI Student Travel Planner (1200px PNG)",
    input: "public/project image/ai-student-travel-planner.png",
    output: "public/project-image/ai-student-travel-planner.png",
    width: 1200,
    format: "png",
    quality: 85,
  },
  {
    name: "Project: AI Student Travel Planner (1200px WebP)",
    input: "public/project image/ai-student-travel-planner.png",
    output: "public/project-image/ai-student-travel-planner.webp",
    width: 1200,
    format: "webp",
    quality: 85,
  },
  {
    name: "Project: Krishi Seva Center (1200px PNG)",
    input: "public/project image/krishi-seva-center.png",
    output: "public/project-image/krishi-seva-center.png",
    width: 1200,
    format: "png",
    quality: 85,
  },
  {
    name: "Project: Krishi Seva Center (1200px WebP)",
    input: "public/project image/krishi-seva-center.png",
    output: "public/project-image/krishi-seva-center.webp",
    width: 1200,
    format: "webp",
    quality: 85,
  },
];

async function getFileSize(path) {
  try {
    const stats = await fs.stat(path);
    return (stats.size / 1024).toFixed(1) + " KB";
  } catch {
    return "N/A";
  }
}

async function optimizeImage(task) {
  const inputPath = path.join(process.cwd(), task.input);
  const outputPath = path.join(process.cwd(), task.output);

  try {
    await fs.access(inputPath);
  } catch {
    console.log(`⏭️  Skipped (not found): ${task.name}`);
    return null;
  }

  const beforeSize = await getFileSize(task.input);

  let pipeline = sharp(inputPath).resize(task.width, null, {
    withoutEnlargement: true,
    fit: "inside",
  });

  if (task.format === "webp") {
    pipeline = pipeline.webp({ quality: task.quality });
  } else if (task.format === "png") {
    pipeline = pipeline.png({
      quality: task.quality,
      compressionLevel: 9,
    });
  }

  // Get buffer first to allow same input/output path
  const buffer = await pipeline.toBuffer();
  await fs.writeFile(outputPath, buffer);

  const afterSize = await getFileSize(task.output);

  console.log(
    `✅ ${task.name}: ${beforeSize} → ${afterSize}`
  );

  return { name: task.name, before: beforeSize, after: afterSize };
}

async function main() {
  console.log("🚀 Starting image optimization with sharp...\n");

  const results = [];

  for (const task of tasks) {
    const result = await optimizeImage(task);
    if (result) results.push(result);
  }

  console.log("\n" + "=".repeat(60));
  console.log("📊 OPTIMIZATION SUMMARY");
  console.log("=".repeat(60));

  let totalBefore = 0;
  let totalAfter = 0;

  for (const r of results) {
    const before = parseFloat(r.before);
    const after = parseFloat(r.after);
    if (!isNaN(before)) totalBefore += before;
    if (!isNaN(after)) totalAfter += after;
    const saved = before - after;
    const percent = before > 0 ? ((saved / before) * 100).toFixed(1) : 0;
    console.log(
      `  ${r.name.padEnd(50)} ${r.before.padStart(10)} → ${r.after.padStart(10)} (${percent}% smaller)`
    );
  }

  console.log("-".repeat(60));
  const totalSaved = totalBefore - totalAfter;
  const totalPercent =
    totalBefore > 0 ? ((totalSaved / totalBefore) * 100).toFixed(1) : 0;
  console.log(
    `  ${"TOTAL".padEnd(50)} ${(totalBefore.toFixed(1) + " KB").padStart(10)} → ${(totalAfter.toFixed(1) + " KB").padStart(10)} (${totalPercent}% smaller)`
  );
  console.log("=".repeat(60));
  console.log(`\n✨ Optimized ${results.length} images successfully!`);
}

main().catch((err) => {
  console.error("❌ Error:", err);
  process.exit(1);
});