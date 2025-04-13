export enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

export const isWeekend = (day: number) => {
  if (day === 5 || day === 6) {
    return true;
  }
  return false;
};

export const message = () => console.log(isWeekend(DayOfWeek.Friday));
// false
export const message2 = () => console.log(isWeekend(DayOfWeek.Saturday));
// true
