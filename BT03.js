let n = prompt ("Nhập số nguyên dương n");
let sum = 0; m = 0;
while (sum <= n) {
    m++;
    sum += m;
}
console.log("Số nguyên dương m lớn nhất sao cho tổng 1+2+3+...+m nhỏ hơn n là:", m - 1);