"use strict";

// Pull in our modules
import chalk from "chalk";
import boxen from "boxen";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import gradient from "gradient-string";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const colors = {
  border: "#ffffff",
  titles: "#2d7dd2",
  values: "#ff6700",
  fill: "#fcb52a",
};

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  title: "About me",
  titleAlignment: "center",
  borderColor: colors.border,
  borderStyle: "round",
  float: "center",
};

// Text + chalk definitions
const data = {
  name: chalk.hex(colors.values)("                     Adrian Tucci"),
  handle: chalk.hex(colors.fill)("bitandbang / bnb"),
  work: chalk.hex(colors.values)("SENIOR ENGINEER at NASA"),
  twitter:
    chalk.hex(colors.fill)("https://twitter.com/") +
    chalk.hex(colors.values)("adriantucci"),
  npm:
    chalk.hex(colors.fill)("https://npmjs.com/") +
    chalk.hex(colors.values)("adriantucci"),
  github:
    chalk.hex(colors.fill)("https://github.com/") +
    chalk.hex(colors.values)("adriangiulianotucci"),
  linkedin:
    chalk.hex(colors.fill)("https://linkedin.com/in/") +
    chalk.hex(colors.values)("adriantucci"),
  web: chalk.hex(colors.values)("https://adriantucci.im"),
  npx:
    chalk.red.hex(colors.fill)("npx") +
    " " +
    chalk.hex(colors.values)("adriantucci"),
  labelWork: chalk.hex(colors.titles).bold("    Work:"),
  labelTwitter: chalk.hex(colors.titles).bold(" Twitter:"),
  labelnpm: chalk.hex(colors.titles).bold("     npm:"),
  labelGitHub: chalk.hex(colors.titles).bold("  GitHub:"),
  labelLinkedIn: chalk.hex(colors.titles).bold("LinkedIn:"),
  labelWeb: chalk.hex(colors.titles).bold("     Web:"),
  labelCard: chalk.hex(colors.titles).bold("    Card:"),
};

// Actual strings we're going to output
const newline = "\n";
const heading = `${data.name} / ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const npming = `${data.labelnpm}  ${data.npm}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading + // data.name + data.handle
  newline +
  newline + // Add one whole blank line
  working +
  newline + // data.labelWork + data.work
  twittering +
  newline + // data.labelTwitter + data.twitter
  npming +
  newline + // data.labelnpm + data.npm
  githubing +
  newline + // data.labelGitHub + data.github
  linkedining +
  newline + // data.labelLinkedIn + data.linkedin
  webing +
  newline +
  newline + // data.labelWeb + data.web
  carding; // data.labelCard + data.npx

const newOutput =
  "                     Adrian Tucci / bitandbang / bnb" +
  "\n" +
  "\n" +
  "    Work: SENIOR ENGINEER at NASA" +
  "\n" +
  " Twitter: https://twitter.com/adriantucci" +
  "\n" +
  "     npm: https://npmjs.com/adriantucci" +
  "\n" +
  "  GitHub: https://github.com/adriangiulianotucci" +
  "\n" +
  "LinkedIn: https://linkedin.com/in/adriantucci" +
  "\n" +
  "     Web: https://adriantucci.im" +
  "\n" +
  "\n" +
  "    Card: npx adriantucci";

const styledOutput = gradient.vice(newOutput);
// MIND OR VICEEEEE???

const box = boxen(styledOutput, options);

fs.writeFileSync(path.join(__dirname, "bin/output"), box);
