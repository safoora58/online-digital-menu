const add = document.querySelector('.add');
const ordersList = document.querySelector('.orders-list');
const shopping = document.querySelector('#shopping');
const quantity = document.querySelector('#quantity');
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
const menuBox = document.querySelector('.menu-box');
const itemNavModal = document.querySelector('.itemNav-modal');
let closeMmodal = document.querySelector('.close-modal');
let closeMmodall = document.querySelector('.menu-box-modal');

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
        name: 'موکا | mocha',
        price: 1000,
        imgName: 'mocha.jpg',
        description: 'شکلات , شیر فرم گرفته , اسپرسو و خامه زده شده '
    },
    {
        id: 2,
        categoryId: 2,
        name: 'شیراز | shiraz',
        price: 1000,
        imgName: 'shiraz.jpg',
        description: ' سکنجبین , زعفران و آب سودا'
    },
    {
        id: 3,
        categoryId: 3,
        name: 'چای سبز| green tea',
        price: 1000,
        imgName: 'green.jpg',
        description: 'چای سبز و عسل'
    },
    {
        id: 4,
        categoryId: 4,
        name: 'چری بری|cherry berry',
        price: 1000,
        imgName: 'chery.jpg',
        description: 'شاتوت , توت فرنگی و آلبالو '
    },
    {
        id: 5,
        categoryId: 1,
        name: 'چاکلت | chocolate',
        price: 1000,
        imgName: 'mint.jpg',
        description: 'هات چاکلت , نعنا و شیر '
    },
    {
        id: 6,
        categoryId: 2,
        name: 'کاشان  | kashan',
        price: 1000,
        imgName: 'kashan.jpg',
        description: 'زعفران , تخم شربتی, پنیرک و خاکشیر'
    },
    {
        id: 7,
        categoryId: 6,
        name: 'جینجر لایم | gingerlime',
        price: 1000,
        imgName: 'ginger.jpg',
        description: 'زنجبیل و لیمو'
    },
    {
        id: 8,
        categoryId: 3,
        name: 'گلدن وانیلا | golden vanila',
        price: 1000,
        imgName: 'vanill.jpg',
        description: ' میخک , وانیل , دارچین و سیب زرد'
    },
    {
        id: 9,
        categoryId: 4,
        name: 'مانگو بری| mongo berry',
        price: 1000,
        imgName: 'mongo.jpg',
        description: ' توت فرنگی , آب انبه و پرتقال'
    },
    {
        id: 10,
        categoryId: 5,
        name: 'ترامیسو | tiramisu',
        price: 1000,
        imgName: 'tramiso.jpg',
        description: ' بیسکوییت , پنیر خامه ای و کافی میکس'
    }
];

function displayNavbarCategory() {
    category.forEach(itemCategory => {
        const tagNav = `
            <li class="item-nav >
                <div class="menu-box">
                    <a href="#cat-${itemCategory.id}" class="menu-box">
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
    containerModal.classList.add('display');
    createModalCategory(category)
})

function closeContainerModal() {
    containerModal.style.visibility = "hidden";
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
    <button class="add-modal">افزودن</button>
    <p id="Beverage-modal"><span>قیمت : </span> ${order.price} تومان </p>
    </div>
    <p class="close-modal"> بستن </p>
    </div>
    </div> 
    `;
    containerModalBaverage.insertAdjacentHTML('beforeend', tagModal);
}
main.addEventListener('click', e => {
    const orderElement = e.target.closest('.container-Beverages');
    const orderElementId = orderElement && orderElement.id;
    const order = orders.find(item => `beverage-${item.id}` == orderElementId);
    order && createModalOrder(order)
})
containerModalBaverage.addEventListener('click', (e) => {
    closeMmodal = document.querySelector('.close-modal')
    if (e.target.classList.contains('close-modal'))
        containerModalBaverage.style.visibility = "hidden";
})


function displayMainProducts() {
    category.forEach(cat => {
        const tagCat = `
        <div id="cat-${cat.id}" ></div>
        <div id="container-title-category">
          <h3> ${cat.title} </h3>
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
                <p id="Beverage-p"><span>قیمت : </span> ${order.price} تومان </p>
                <button class="add">افزودن</button>
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

  
