// أنشئ المصفوفة تحت هذا الكومنت
let orders = [


]
orders.push(newOrder)

function addOrder() {
  let name = document.getElementById("name").value;
  let id = document.getElementById("id").value;
  let phone = document.getElementById("phone").value;
  let order = document.getElementById("order").value;
  
  // أنشئ كائن newOrder
  let newOrder = 
  [
    name ,
    id, 
    phone ,
    number
  ]
  // أدرج الكائن إلى المصفوفة
  
  // طبق الخطوة 7 تحت هذا الكومنت
  load ()
}

function load( ) {
  let container = document.getElementById("container");
  container.innerHTML = "";
  // طبّق الخطوة 6 تحت هذا الكومنت
  orders.forEach (    `<div><h1>${item.name} - ${item.id}</h1><h3>${item.order}</h3></div>`
  )

}
