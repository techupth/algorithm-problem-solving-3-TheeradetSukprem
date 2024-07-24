let customers = ["Somchai", "Arthit", "Suchada", "Napasorn", "Pimchanok"];


function sortCustomerName(customers) {
  for (let i = 0; i < customers.length - 1; i++) {
    console.log(customers[i]);
    for (let j = 0; j < customers.length - 1 - i; j++) {
      if (customers[j] > customers[j + 1]) {
        console.log(customers[j]);
        let temp = customers[j];
        console.log(customers);
        customers[j] = customers[j + 1];
        customers[j + 1] = temp;
        console.log(customers); 
      }
    }
  }
  return customers
}

console.log(sortCustomerName(customers));
// ตอบคำถามตรงนี้จ้า Big o เป็น n ^ 2 เพราะว่ามี for loop ซ้อนกันทำให้ทบกัน 