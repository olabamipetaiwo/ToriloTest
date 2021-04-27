var foo = Array.from({ length: 10 }, (_, i) => i + 1);

console.log("star is:", foo);

foo.map((star) => {
  console.log("star is:", star);
});
