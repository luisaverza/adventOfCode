import { readFileSync } from "fs";

const text = readFileSync("./input.txt", "utf-8");

const boardingPasses = text.split(`\n`);

const seats = boardingPasses.map((bordingPass: string): number[] => {
  let boardingRow: number = 0;
  let boardingCol: number = 0;
  const letters: string[] = bordingPass.split("");

  let maxRow: number = 127;
  let minRow: number = 0;
  let maxCol: number = 7;
  let minCol: number = 0;

  letters.forEach((letter: string, index): void => {
    let midPointRow = (maxRow + minRow) / 2;
    let midPointCol = (maxCol + minCol) / 2;

    if (index < 6) {
      letter === "F"
        ? (maxRow = Math.floor(midPointRow))
        : (minRow = Math.ceil(midPointRow));
    }

    if (index === 6) {
      boardingRow = letter === "F" ? minRow : maxRow;
    }

    if (index > 6) {
      letter === "L"
        ? (maxCol = Math.floor(midPointCol))
        : (minCol = Math.ceil(midPointCol));
    }

    if (index === 9) {
      boardingCol = letter === "L" ? minCol : maxCol;
    }
  });

  return [boardingRow, boardingCol];
});

const seatsID: number[] = seats.map((s): number => s[0] * 8 + s[1]);

const sortedSeats: number[] = seatsID.sort((a: number, b: number) => a - b);

const mySeat = sortedSeats.filter(
  (ss, i) => !sortedSeats.includes(ss + 1) && sortedSeats.includes(ss + 2)
);

console.log(mySeat[0] + 1);
