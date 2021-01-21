import { readFileSync } from "fs";

const text = readFileSync("./input.txt", "utf-8");

const boardingPasses = text.split(`\n`);

const seat = boardingPasses.map((bordingPass: string): number[] => {
  let boardingRow: number = 0;
  let boardingCol: number = 0;
  const letters: string[] = bordingPass.split("");

  let maxRow: number = 127;
  let minRow: number = 0;
  let maxCol: number = 7;
  let minCol: number = 0;

  letters.forEach((letter: string, index): void => {
    let midPointRow = Math.floor((maxRow + minRow) / 2);
    let midPointCol = Math.floor((maxCol + minCol) / 2);

    if (index < 6) {
      letter === "F" ? (maxRow = midPointRow) : (minRow = midPointRow);
    }

    if (index === 6) {
      boardingRow = midPointRow;
    }

    if (index > 6) {
      letter === "L" ? (maxCol = midPointCol) : (minCol = midPointCol);
    }

    if (index === 9) {
      boardingCol = midPointCol;
    }
  });

  return [boardingRow, boardingCol];
});

const seatID: number[] = seat.map((s): number => s[0] * 8 + s[1]);

console.log(Math.max(...seatID));
const sortedSeats: number[] = seatID.sort((a: number, b: number) => a - b);
console.log(sortedSeats);
