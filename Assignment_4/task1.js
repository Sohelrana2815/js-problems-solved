const a = process.argv.slice(2);
if (!a.length) console.log("");
else if (a.length == 1) {
  console.log(a[0]);
} else {
  const f = a[0];
  for (let l = f.length; l; l--)
    for (let i = 0; i <= f.length - l; i++) {
      const s = f.substr(i, l);
      if (a.every((x) => x.includes(s))) {
        console.log(s);
        process.exit();
      }
    }

  console.log("");
}
