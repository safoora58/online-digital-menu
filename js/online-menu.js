const itemNav = document.querySelector('.item-nav');
const main = document.querySelector('.main');
const selected = document.querySelector('.p-selected');
const navbarCategory = document.querySelector('#navbar-category');
const hideDisplay = document.querySelector('#hideDisplay');
const containerModal = document.querySelector('.container-modal');
const displayCategory = document.querySelector('.p-category');
const containerBeverages = document.querySelector('.container-Beverages');
const containerModalBaverage = document.querySelector('.container-modal-baverage');
const displayBox = document.querySelector('.display-box-modal');
const modal = document.querySelector('.modal');
const add = document.querySelector('.add');
const menuBox = document.querySelector('.menu-box');
const itemNavModal = document.querySelector('.itemNav-modal');
let closeMmodal = document.querySelector('.close-modal');
let closeMmodall = document.querySelector('.menu-box-modal');
const addModal = document.querySelector('.container-modal-baverage #add');




const category = [
    { id: 1, title: "نوشیدنی های گرم", imgName: "hot-drink_2387020.png" },
    { id: 2, title: "نوشیدنی های سرد", imgName: "ice-cream_938012.png" },
    { id: 3, title: "چای و دمنوش  ", imgName: "tea.png" },
    { id: 4, title: "فراپه و اسموتی ", imgName: "smoothies_.png" },
    { id: 5, title: "کیک و دسر ", imgName: "cake.png" },
    { id: 6, title: "ماکتیل ", imgName: "mocktail.png" }
];

let orders = [
    {
        id: 1,
        categoryId: 1,
        name: 'موکا | Mocha',
        price: 80000,
        imgName: 'mocha.jpg',
        description: 'شکلات , شیر فرم گرفته , اسپرسو و خامه زده شده '
    },
    {
        id: 2,
        categoryId: 2,
        name: 'شیراز | Shiraz',
        price: 1000,
        imgName: 'shiraz.jpg',
        description: ' سکنجبین , زعفران و آب سودا'
    },
    {
        id: 3,
        categoryId: 3,
        name: 'چای سبز| Green tea',
        price: 40000,
        imgName: 'green.jpg',
        description: 'چای سبز و عسل'
    },
    {
        id: 4,
        categoryId: 4,
        name: 'چری بری|Cherry berry',
        price: 1000,
        imgName: 'chery.jpg',
        description: 'شاتوت , توت فرنگی و آلبالو '
    },
    {
        id: 5,
        categoryId: 1,
        name: ' وایت چاکلت | Chocolate',
        price: 95000,
        imgName: 'mint.jpg',
        description: 'شکلات سفید , وانیل و شیر '
    },
    {
        id: 6,
        categoryId: 2,
        name: 'کاشان  | Kashan',
        price: 1000,
        imgName: 'kashan.jpg',
        description: 'زعفران , تخم شربتی, پنیرک و خاکشیر'
    },
    {
        id: 7,
        categoryId: 6,
        name: 'جینجر لایم | Gingerlime',
        price: 1000,
        imgName: 'ginger.jpg',
        description: 'زنجبیل و لیمو'
    },
    {
        id: 8,
        categoryId: 3,
        name: 'گلدن وانیلا | Golden vanila',
        price: 1000,
        imgName: 'vanill.jpg',
        description: ' میخک , وانیل , دارچین و سیب زرد'
    },
    {
        id: 9,
        categoryId: 4,
        name: 'مانگو بری| Mongo berry',
        price: 1000,
        imgName: 'mongo.jpg',
        description: ' توت فرنگی , آب انبه و پرتقال'
    },
    {
        id: 10,
        categoryId: 5,
        name: 'ترامیسو | Tiramisu',
        price: 1000,
        imgName: 'tramiso.jpg',
        description: ' بیسکوییت , پنیر خامه ای و کافی میکس'
    },
    {
        id: 11,
        categoryId: 4,
        name: 'موهیتو | Mojito',
        price: 125000,
        imgName: 'mohito.jpg',
        description: ' آب گازدار , برگ نعناع , شکر , رام سفید و آبلیمو '
    },
    {
        id: 12,
        categoryId: 3,
        name: 'چای مراکشی | Moroccan ',
        price: 72000,
        imgName: 'marakeshi.jpg',
        description: ' چای سیاه، چای سبز،برگ نعناع، تکه های میوه های استوایی'
    },
    {
        id: 13,
        categoryId: 1,
        name: 'ماسالا| Masala',
        price: 95000,
        imgName: 'masala.jpg',
        description: 'چای سیاه، شیر ,زنجبیل , هل , دارچین و فلفل سیاه'
    },
    {
        id: 14,
        categoryId: 2,
        name: 'کافه گلاسه|Cafe glace',
        price: 111000,
        imgName: 'glaseh.jpg',
        description: 'شیر, بستنی , نسکافه و سس شکلات'
    },
    {
        id: 15,
        categoryId: 2,
        name: 'آیس لته|iced latte',
        price: 110000,
        imgName: 'icelate.jpg',
        description: 'اسپرسو , یخ و شیر سرد '
    }
];

function displayNavbarCategory() {
    category.forEach(itemCategory => {
        const tagNav = `
            <li class="item-nav >
                <div class="menu-box">
                    <a href="#cat-${itemCategory.id}" class="menu-box" id="Title">
                        <img src="images/${itemCategory.imgName}">
                        <p class="title">${itemCategory.title}</p>
                        </a>
                </div>
            </li>
        `;
        navbarCategory.insertAdjacentHTML("beforeend", tagNav);
    });
}
displayNavbarCategory();


function createModalCategory(itemCategory) {
    displayBox.innerHTML = ''
    displayBox.style.visibility = "visible";
    itemCategory.forEach(itemCategory => {
        const tagModalCat = `              
                <li class="itemNav-modal" >
                 <div class="menu-box-modal">
                   <a href="#cat-${itemCategory.id}" class="menu-box-modal">
                     <img src="images/${itemCategory.imgName}">
                     <p class="title-modal">  ${itemCategory.title} </p>
                   </a>
                 </div>
               </li>              
    `;
        displayBox.insertAdjacentHTML('beforeend', tagModalCat);
    })
    const itemNavModals = document.querySelectorAll('.itemNav-modal');
    itemNavModals.forEach(itemNavModal => {
        itemNavModal.addEventListener('click', () => {
            closeContainerModal();
        });
    });
}
displayCategory.addEventListener('click', () => {
    containerModal.style.display = "flex";
    createModalCategory(category)
})

function closeContainerModal() {
    containerModal.style.display = "none";
    const itemNavModals = document.querySelectorAll('.itemNav-modal');
    itemNavModals.forEach(itemNavModal => {
        itemNavModal.style.visibility = "hidden";
    });
}

function createModalOrder(order) {
    containerModalBaverage.style.visibility = "visible"
    containerModalBaverage.innerHTML = "";
    const tagModal = `
    <div class="display-box-baverage">
    <img src="images/${order.imgName}">
    <h2 class="Beverage-title-modal" > ${order.name}</h2>
    <div class="Beverage-modal">
    <span> محتویات : </span>
    <p id="Beverage-modal">${order.description}</p>
    <div class="baverage-add-modal">
    <p class="close-modal"> بستن </p>
    <p id="Beverage-modal"><span>قیمت : </span> ${order.price.toLocaleString()} تومان </p>
    </div>
    <button class="addModal" id ="add-${order.id}">افزودن</button>
    </div>
    </div> 
    `;
    containerModalBaverage.insertAdjacentHTML('beforeend', tagModal);
}
main.addEventListener('click', e => {
    if (!e.target.classList.contains('add')) {
        const orderElement = e.target.closest('.container-Beverages');
        const orderElementId = orderElement && orderElement.id;
        const order = orders.find(item => `beverage-${item.id}` == orderElementId);
        order && createModalOrder(order)
    }
})
containerModalBaverage.addEventListener('click', (e) => {
    closeMmodal = document.querySelector('.close-modal')
    if (e.target.classList.contains('close-modal'))
        containerModalBaverage.style.visibility = "hidden";
})



function displayMainProducts() {
    category.forEach(cat => {
        const tagCat = `
        <div id="container-title-category">
          <h3>
          <a href="" id="cat-${cat.id}"></a>
           ${cat.title} 
           </h3>
        </div>     
        `;
        main.insertAdjacentHTML("beforeend", tagCat);
        const ordersCategory = orders.filter(item => item.categoryId === cat.id);
        ordersCategory.forEach(order => {
            const navTag = `
        <div id="container-title">      
            <div class="container-Beverages" id="beverage-${order.id}">
                <div class="Beverage">
                 <div class="containet-title">
                  <h2 class="Beverage-title" id="title-mocha"> ${order.name} </h2>
             </div>
                 <img src="images/${order.imgName}">
            <div class="Beverage-p">
              <span> محتویات : </span>
              <p id="Beverage-p"> ${order.description}</p>
              <div class="baverage-add">
                <p id="Beverage-p"><span>قیمت : </span> ${order.price.toLocaleString()} تومان </p>
                <button class="add" id="add-item-${order.id}">افزودن</button>
              </div>
            </div>
            </div>
          </div>
        </div>
        `;
            main.insertAdjacentHTML("beforeend", navTag);
        })

    })
}
displayMainProducts();


const addButtons = document.querySelectorAll('.add');
const ordersList = document.querySelector('.orders-list');
const total = document.querySelector('#total');
const quantity = document.querySelector('#quantity');
const orderItem = document.querySelector('.order-item');
const shopping = document.querySelector('#shopping');
const closeShopping = document.querySelector('#closeShopping');
const count = document.querySelector('#count');
const containerOrderList = document.querySelector('.container-order-list');


shopping.addEventListener('click', () => {
    containerOrderList.classList.add('display');
})

closeShopping.addEventListener('click', () => {
    containerOrderList.classList.remove('display');
})

let shoppingCart = [];
let totalPrice = 0;
const buttonStates = {};

function addToCart(itemId) {
    const selectedProduct = orders.find(product => product.id == itemId);
    const existingItem = shoppingCart.find(item => item.id === selectedProduct.id);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        shoppingCart.push({ ...selectedProduct, quantity: 1 });
    }
    totalPrice += selectedProduct.price;
    updateCart();

    buttonStates[itemId] = true;
}

main.addEventListener('click', e => {
    if (e.target.className == 'add') {
        const itemId = e.target.id.split('-')[2];
        console.log(itemId)

        if (!buttonStates[itemId]) {
            addToCart(itemId);
            e.target.disabled = true;
            buttonStates[itemId] = true;
        }
    }
})
containerModalBaverage.addEventListener('click', e => {
    if (e.target.className == 'addModal') {
        const itemId = e.target.id.split('-')[1];
        console.log(itemId)

        if (!buttonStates[itemId]) {
            addToCart(itemId);
            e.target.disabled = true;
            buttonStates[itemId] = true;
        }
    }
})

function changeQuantity(index, newQuantity) {
    if (newQuantity <= 0) {
        shoppingCart.splice(index, 1);
        totalPrice = shoppingCart.length === 0 ? 0 : shoppingCart.reduce((acc, item) => acc + item.price, 0);
    } else {

        shoppingCart[index].quantity = newQuantity;
        const shopItem = orders.find(order => order.name == shoppingCart[index].name)
        shoppingCart[index].price = newQuantity * shopItem.price;
        totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0);
    }
    updateCart();
}

function updateCart() {
    ordersList.innerHTML = '';
    shoppingCart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.classList.add('order-item');
        listItem.innerHTML = `
            <div class="main-order">
                <img src="images/${item.imgName}">
                <p class="order-item-title">${item.name}</p>
                <p class="order-item-price"> ${item.price.toLocaleString()} </p>
                <div class="btn-box">
                    <button id="decrease" class="btn" onclick="changeQuantity(${index}, ${item.quantity - 1})"> - </button>
                    <span id="count${index}"> ${item.quantity} </span>
                    <button id="increase" class="btn" onclick="changeQuantity(${index}, ${item.quantity + 1})"> + </button>
                </div>
            </div>
        `;
        ordersList.appendChild(listItem);
    });

    total.textContent = `قیمت کل : ${totalPrice} تومان`;
    quantity.textContent = shoppingCart.reduce((acc, item) => acc + item.quantity, 0);
}






















//دسترسی به المان‌های مورد نیاز
// const quantityElement = document.getElementById('quantity');
// const totalCountElement = document.getElementById('totalCount');
// const totalButton = document.getElementById('total');
// const increaseButton = document.getElementById('increase');
// const decreaseButton = document.getElementById('decrease');

// //let quantity = 0;
// let totalCount = 0;
// let totalPrice = 0;

// // اضافه کردن به سبد خرید
// increaseButton.addEventListener('click', function() {
//   quantity++;
//   totalCount++;
//   totalPrice += 80000; // قیمت هر مورد
//   quantityElement.textContent = quantity;
//   totalCountElement.textContent = totalCount;
//   totalButton.textContent = `قیمت کل : ${totalPrice} تومان`;
// });

// // کاهش از سبد خرید
// decreaseButton.addEventListener('click', function() {
//   if (quantity > 0) {
//     quantity--;
//     totalCount--;
//     totalPrice -= 80000; // قیمت هر مورد
//     quantityElement.textContent = quantity;
//     totalCountElement.textContent = totalCount;
//     totalButton.textContent = `قیمت کل : ${totalPrice} تومان`;
//   }
// });
