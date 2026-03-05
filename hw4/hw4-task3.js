const userYearBirth = prompt("Enter your year of birth");
if (userYearBirth === null) {
  alert("It's a pity you chose not to enter your year of birth");
}

const userCity = prompt("Enter the city you live in");
if (userCity === null) {
  alert("It's a pity you chose not to enter your city");
}

const userFavoriteSport = prompt("Enter your favorite sport");
if (userFavoriteSport === null) {
  alert("It's a pity you chose not to enter your favorite sport");
}

const userAge = new Date().getFullYear() - Number(userYearBirth);

const countryByCapital = {
  London: "Great Britain",
  Kyiv: "Ukraine",
  Washington: "the United States of America",
};

const championBySport = {
  football: "David Beckham",
  tennis: "Roger Federer",
  basketball: "Michael Jordan",
};

if (userYearBirth !== null && userCity !== null && userFavoriteSport !== null) {
  alert(
    `Hello, you are ${userAge} years old. ${
      userCity in countryByCapital
        ? `You live in the capital city of ${countryByCapital[userCity]}.`
        : `You live in ${userCity}.`
    } ${
      userFavoriteSport in championBySport
        ? `Do you want to be like ${championBySport[userFavoriteSport]}?`
        : ""
    }`
  );
}
