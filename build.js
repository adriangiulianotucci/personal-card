"use strict";

// Pull in our modules
import chalk from "chalk";
import boxen from "boxen";
import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  title: "About me",
  titleAlignment: "center",
  borderColor: "#d62828",
  borderStyle: "round",
  float: "center",
};

// Text + chalk definitions
const data = {
  name: chalk.hex("eae2b7")("                     Adrian Tucci"),
  handle: chalk.hex("eae2b7")("bitandbang / bnb"),
  work: chalk.hex("#fcbf49")("SENIOR ENGINEER at NASA"),
  twitter:
    chalk.hex("#fcbf49")("https://twitter.com/") +
    chalk.hex("#eae2b7")("adriantucci"),
  npm:
    chalk.hex("#fcbf49")("https://npmjs.com/") +
    chalk.hex("#eae2b7")("adriantucci"),
  github:
    chalk.hex("#fcbf49")("https://github.com/") +
    chalk.hex("#eae2b7")("adriangiulianotucci"),
  linkedin:
    chalk.hex("#fcbf49")("https://linkedin.com/in/") +
    chalk.hex("#eae2b7")("adriantucci"),
  web: chalk.hex("#eae2b7")("https://adriantucci.im"),
  npx: chalk.red("npx") + " " + chalk.hex("eae2b7")("adriantucci"),
  labelWork: chalk.hex("#f77f00").bold("    Work:"),
  labelTwitter: chalk.hex("#f77f00").bold(" Twitter:"),
  labelnpm: chalk.hex("#f77f00").bold("     npm:"),
  labelGitHub: chalk.hex("#f77f00").bold("  GitHub:"),
  labelLinkedIn: chalk.hex("#f77f00").bold("LinkedIn:"),
  labelWeb: chalk.hex("#f77f00").bold("     Web:"),
  labelCard: chalk.hex("#f77f00").bold("    Card:"),
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

fs.writeFileSync(path.join(__dirname, "bin/output"), boxen(output, options));
