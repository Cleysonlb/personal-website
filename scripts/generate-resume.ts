import { renderToFile } from "@react-pdf/renderer";
import path from "node:path";
import { ResumeDocument } from "../src/resume/resume-pdf";

const outputDir = path.join(process.cwd(), "public");
const outputFile = path.join(outputDir, "Cleyson-Leal-Resume.pdf");

async function main() {
  await renderToFile(ResumeDocument(), outputFile);
  console.log(`Resume generated: ${outputFile}`);
}

main().catch((error) => {
  console.error("Failed to generate resume PDF:", error);
  process.exit(1);
});
