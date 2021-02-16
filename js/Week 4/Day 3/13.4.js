const steps = (N) => {
  for (let i = 1 ; i<=N ; i++) {
    const hash = '#';
    const space = ' ';
    console.log(`${hash.repeat(i)}${space.repeat(N - i)}`);
  }
}

steps(20);