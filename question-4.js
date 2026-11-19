// Question #4 loop, function, 
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
let minName = inventory[0].name;
let minQuantity = inventory[0].quantity;

for (let i = 0; i < inventory.length; i++) {
  if(inventory[i].quantity < minQuantity){
    minName = inventory[i].name
    minQuantity = inventory[i].quantity
  }
  
}
console.log(minName);
console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังคือ ${minName} ซึ่งมี ${minQuantity} ชิ้น`);

