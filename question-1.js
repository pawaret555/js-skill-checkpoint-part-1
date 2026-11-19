// Question #1 เพิ่ม id:5, todo: "walk the dog" , แก้เบอร์4 เป็น "Go to the gym", ลบ object สุดท้ายออก
const myTodo = [
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish homework" },
  { id: 3, todo: "Call mom" },
  { id: 4, todo: "Wash dishes" },
];

myTodo.push({id :5, todo: "walk the dog"})
myTodo[3].todo="go to the gym"
myTodo.pop()
console.log(myTodo)

console.log(`To-do id:${myTodo[3].id}, ${myTodo[3].todo} `);
