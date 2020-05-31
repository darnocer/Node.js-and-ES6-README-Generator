function generateCredits(credits) {
  let creditsArr = credits.split(",");

  for (var i = 0; i < creditsArr.length; i++) {
    creditsArr[i] = creditsArr[i].trim().toLowerCase();
  }

  console.log(creditsArr);

  let renderCredits = [];

  for (var j = 0; j < creditsArr.length; j++) {
    if (creditsArr[j] === "inquirer") {
      renderCredits.push(
        `* [Inquirer](https://www.npmjs.com/package/inquirer)`
      );
    } else if (creditsArr[j] === "jest") {
      renderCredits.push(`* [Jest](https://jestjs.io/)`);
    } else if (creditsArr[j] === "bootstrap") {
      renderCredits.push(`* [Bootstrap](https://getbootstrap.com/)`);
    } else if (creditsArr[j] === "font awesome" || "fontawesome") {
      renderCredits.push(`* [Font Awesome](https://fontawesome.com/)`);
    } else if (creditsArr[j] === "moments" || "moments.js") {
      renderCredits.push(`* [Moments.js](https://momentjs.com/)`);
    } else {
      renderCredits.push(`* ${creditsArr[j]}`);
    }
  }

  return renderCredits.join("\n\n");
}

module.exports = generateCredits;
