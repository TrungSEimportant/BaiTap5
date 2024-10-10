
// Cho 2 biến heigth , width hình chữ nhật
var height = 5;
var width = 8;
//Công thức tính chu vi hình chữ nhật
const  chu_vi =(width,height) => ((width + height) * 2);
// Công thức tính diện tích hình chữ nhật
const dien_tich = (width,height) => width * height;
// Tính chu vi
let tinh_chuvi= chu_vi(width, height) ;
console.log('Chu vi hình chữ nhật là: ' + tinh_chuvi);
// Tính diện tích 
let tinh_dientich = dien_tich(width, height);
console.log('Diện tích hình chữ nhật là: ' + tinh_dientich);