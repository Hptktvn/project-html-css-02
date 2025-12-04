// let x = 5;

// // If thiếu/khuyết
// if (x < 10) {
// }

// // If đủ
// if (x < 10) {
//   // Thực thi khối lệnh nếu đk là True
// } else {
//   // Thực thi khối lệnh nếu đk là False
// }

//If- else if - else
if (x < 10) {
} else if (x > 5) {
} else {
}

// Switch-case
switch (z) {
  case 1:
    break;
  case 2:
    break;
  default:
}

console.log(x < 10 ? "x < 10" : "x >=10");

let x = 6,
  y = 3;
let z = 6 && 3;
console.log(z);
// Trả về first falsy or last truthy
let z1 = 6 || 3;
console.log(z1);
// Trả về first truthy or last falsy

// Vòng lặp for
// for (biểu thức 1,biểu thức 2, biểu thức 3){
//     // Khối lệnh
// }
// Biểu thức 1: Khởi tạo giá trị cho biến điều khiển (Chỉ chạy 1 lần duy nhất)
// Biểu thức 2: Kiểm tra điều kiện để tiếp tục hay thoát vòng lặp
// Biểu thức 3: Thay đổi giá trị của biến điều khiển

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// Vòng lặp while

let firstName = "Duy";
let lastName = "Vo Thanh";
console.log(lastName + " " + firstName);

// template string cho phép dev sử dụng dấu backtick `
console.log(`Họ tên dầy đủ là: ${lastName} ${firstName}`);

console.log(firstName.length);
console.log("This's my mom");
console.log(typeof firstName);

let str = new String("Duy");
// Tạo ra đối tượng
console.log(str);
// Sẽ hiện ra String dưới dạng đối tượng
console.log(typeof str);
// Kiểu dữ liệu là Object
console.log(str.length);

// Cú pháp function expression (Biểu thức hàm)
// Hàm ko có tên thì gọi là Anonymous function (Hàm ẩn danh)
let sum = function (a, b) {
  return a + b;
};
console.log(sum(2, 4));

// arrow function (hàm mũi tên)
// let arrowFunction = (a, b) => {
//   return a + b;
// };
// console.log(arrowFunction(4, 5));

let arrowFunction = (a, b) => a + b;
console.log(arrowFunction(4, 5));
