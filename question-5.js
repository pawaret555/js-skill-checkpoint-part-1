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

const promotionCode = "SALE20";
// เริ่มเขียนโค้ดตรงนี้              array    โค้ดส่วนลด
function calculateTotalPrice(products,promotionCode) {
  let total = 0
  for (let i = 0; i < products.length; i++) {
   let sum = products[i].price * products[i].quantity
    total = sum + total
  }

    if (promotionCode === "SALE50") {
      total = total * 0.5;
    } else if (promotionCode === "SALE20"){
      total = total * 0.8;
    }
    return total;
  }
  

  
console.log(calculateTotalPrice(products, promotionCode));


//เอาจำนวน * ราคา แล้วบวกเข้าด้วยกัน