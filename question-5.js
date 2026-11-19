// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "SALE50";
// เริ่มเขียนโค้ดตรงนี้              array    โค้ดส่วนลด
function calculateTotalPrice(products,promotionCode) {
  let total = 0
  let discount = 0
  for (let i = 0; i < products.length; i++) {
   let sum = products[i].price * products[i].quantity
    total = sum + total
    if (promotionCode = "SALE50") {
      discount = total * 0.5;
    } else if (promotionCode = "SALE20"){
      discount = total * 0.2;
    }
    
  }
  console.log(total);
  return discount
}
  
console.log(discount);



calculateTotalPrice(products,promotionCode)

console.log(products)

//เอาจำนวน * ราคา แล้วบวกเข้าด้วยกัน