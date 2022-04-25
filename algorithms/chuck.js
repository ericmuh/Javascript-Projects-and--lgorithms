function chuck(a, n) {
  const chuched = [];

  for (let i  of a) {
    const last = chuched[chuched.length - 1]; // last array in the chuncked array
    if (!last || last.length === n) {
      chuched.push([i]); // 
    } else {
      last.push(i);
    }
  }
return chuched
}

console.log(chuck([1,2,2,8,8,8,8,8,8,8,8,8,8,], 4))
