const { exec } = require("child_process");
const path = require("path");

const dir = "allocate variable";

const langs = [
  { language: "         C", time: 0, laptime: 0, dots: " " },
  { language: "       C++", time: 0, laptime: 0, dots: " " },
  { language: "   Crystal", time: 0, laptime: 0, dots: " " },
  { language: "    Elixir", time: 0, laptime: 0, dots: " " },
  { language: "        Go", time: 0, laptime: 0, dots: " " },
  { language: "      Java", time: 0, laptime: 0, dots: " " },
  { language: "Javascript", time: 0, laptime: 0, dots: " " },
  { language: "    Kotlin", time: 0, laptime: 0, dots: " " },
  { language: "       Php", time: 0, laptime: 0, dots: " " },
  { language: "    Python", time: 0, laptime: 0, dots: " " },
  { language: "      Ruby", time: 0, laptime: 0, dots: " " },
  { language: "      Rust", time: 0, laptime: 0, dots: " " },
  { language: "     Scala", time: 0, laptime: 0, dots: " " },
  { language: "     Swift", time: 0, laptime: 0, dots: " " }
];

const raceCmd = (lang, dir) => {
  return `bash "${path.join(__dirname, lang, dir, "race.sh")}"`;
};

const promises = langs.map(lang => {
  return new Promise((resolve, reject) => {
    exec(raceCmd(lang.language.trim(), dir), (err, stdout, stderr) => {
      if (err) return reject(err);
      return resolve(stdout);
    });
  });
});

Promise.all(promises).then(res => {
  const times = res.map(str => str.split("\n")).map(arr => arr[2]);
  let runTimes = times.map(timeStr => parseFloat(timeStr)).map((time, i) => {
    langs[i].laptime = time;
    langs[i].time = time * 1000;
    return langs[i];
  });

  let count = 0;

  while (runTimes.length > 0) {
    console.log();

    runTimes.forEach(timeObj => {
      timeObj.dots += timeObj.time === 0 ? "D" : ".";
      console.log(`${timeObj.language}${timeObj.dots}`);
    });

    console.log();
    console.log("--------------------------");

    runTimes = runTimes.map(timeObj => {
      timeObj.time = timeObj.time - 1;
      return timeObj;
    });

    if (!runTimes.find(timeObj => timeObj.time >= 0)) break;
    count = count + 1;
  }

  runTimes.forEach(timeObj => {
    timeObj.dots += `   ${timeObj.laptime}s`;
    console.log(`${timeObj.language}${timeObj.dots}`);
  });

  console.log();
  console.log("--------------------------");
});
