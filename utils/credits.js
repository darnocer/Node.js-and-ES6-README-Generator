function generateCredits(credits) {
  if (credits === "inquirer") {
    return `* [Inquirer](https://www.npmjs.com/package/inquirer)`;
  } else {
    return `* ${credits}`;
  }
}

module.exports = generateCredits;
