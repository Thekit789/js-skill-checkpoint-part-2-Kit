const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้

let result = students
  .filter((search) => search.score > 50)
  .map((search) => (search.score += (search.score * 10) / 100))   // จริงๆใช้ *0.1 ก็ได้ แต่กลัวลืมวิธีหาค่า % 55
  .reduce((acc, cur) => acc + cur, 0);

console.log(`Total score is  ${result}`);
