const getTimes = lines => {
  return lines
    .reduce((acc, str) => {
      const time = str.split("m");
      acc.push(time[1]);
      return acc;
    }, [])
    .filter(str => str)
    .reduce((acc, str) => {
      const time = str.split("s");
      acc.push(time[0]);
      return acc;
    }, [])
    .filter(str => str)
    .map((str, i) => {
      return i % 3 === 0 ? str : undefined;
    })
    .filter(str => str)
    .map(str => Number(str));
};

const getMin = times => {
  return times.sort()[0];
};

const getMax = times => {
  return times.sort()[times.length - 1];
};

const getAvg = times => {
  const sum = times.reduce((acc, number) => {
    return acc + number;
  }, 0);

  return Number((sum / times.length).toFixed(3));
};

const str = process.argv[2];
const lines = str.split("\n");
const times = getTimes(lines);

const min = getMin(times);
const max = getMax(times);
const avg = getAvg(times);

console.log();
console.log("Best time");
console.log(min);
console.log();
console.log("Worst time");
console.log(max);
console.log();
console.log("Average time");
console.log(avg);
console.log();
