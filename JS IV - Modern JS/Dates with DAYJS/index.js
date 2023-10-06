const dayjs = require("dayjs");

function birthday(date) {
  const birthday = dayjs(date);
  const today = dayjs();
  const ageInYears = today.diff(birthday, 'year');
  const nextBirthday = birthday.add(ageInYears + 1, 'year');
  const daysToNextBirthday = nextBirthday.diff(today, 'day') + 1;

  console.log(`Age: ${ageInYears}`);
  console.log(`Next birthday: ${nextBirthday.format('MM/DD/YYYY')}`);
  console.log(`Days until turning ${ageInYears + 1} years old: ${daysToNextBirthday}`);
}

birthday("1995-09-02");
