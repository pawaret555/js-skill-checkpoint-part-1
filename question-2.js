// Question #2reassign apple =>200,เพิ่มorange ราคา20 300ชิ้น ,รวม ให้ได้13,500 
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
inventory[0].quantity=200;
inventory.push({name: "Orange", price: 20, quantity: 300});
console.log(inventory)

let appleResult = inventory[0].price * inventory[0].quantity
let BananaResult = inventory[1].price * inventory[1].quantity
let OrangeResult = inventory[2].price * inventory[2].quantity

let total = appleResult + BananaResult + OrangeResult
console.log(`มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${total} บาท `);
