import { resume } from "./src/resume";
import fs from "node:fs";
fs.writeFileSync("resume.json", JSON.stringify(resume, null, 2));

const command = "resume export resume.html --theme elegant";

import { execSync } from "node:child_process";
execSync(command);

fs.copyFileSync("resume.html", "my-resume/public/index.html");
fs.unlinkSync("resume.html");
fs.unlinkSync("resume.json");
