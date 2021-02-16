const steps = (N) => {
  for (let i = 1 ; i<=N ; i++) {
    const hash = '#';
    const space = ' ';
    console.log(`${hash.repeat(i)}${space.repeat(N - i)}`);
  }
}

// steps(20);

const stepsNoRepeat = (N) => {
  const hash = '#';
  const space = ' ';
  for (let i = 1 ; i<=N ; i++) {
    const arr =[];
    for (let x = 1 ; x <= N ; x++) {
      x <= i ? arr.push(hash) : arr.push(space)
    }
    console.log(arr.join(''));
  }
}

stepsNoRepeat(20);