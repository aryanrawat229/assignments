function staircase(n) {
     for (let i = 0; i < n; i++) {
    const line = Array(i + 1)
      .fill("#")
      .join("")
      .padStart(n);
    console.log(line);
  }
}