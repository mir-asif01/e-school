const coursesDiv = document.getElementById('courses')
const cartDiv = document.getElementById('all-added-course')

const buyBtn = document.getElementsByClassName('buy-btn')

const itemCount = document.getElementById('item-counter')
const amount = document.getElementById('amount')
let amountValue = Number(amount.innerText);
let itemCounterValue = Number(itemCount.innerText);


for (let i = 0; i < buyBtn.length; i++) {
    buyBtn[i].addEventListener('click', (e) => {
        const parentElement = e.target.parentNode.parentNode
        const courseImage = parentElement.querySelector('.course-img').src
        const titelAndPrice = parentElement.childNodes[3]
        const title = titelAndPrice.querySelector('.course-title').textContent
        const price = Number(titelAndPrice.querySelector('.price').querySelector('.taka').textContent)

        const newCartItem = document.createElement('div')
        newCartItem.classList.add('added-course')

        newCartItem.innerHTML = `
        <div class="d-flex">
        <img class="cart-img" src=${courseImage} alt="">
        <div>
            <p class="">${title}</p>
            <p><span id="cart-price">${price}</span> tk</p>
        </div>
    </div>
    <button class="delete-btn"><img class="dlt-btn-img" src="./assets/x.png" alt=""></button>
        `
        cartDiv.appendChild(newCartItem)

        const removeCourseBtn = document.getElementsByClassName('delete-btn')
        for (let i = 0; i < removeCourseBtn.length; i++) {
            removeCourseBtn[i].addEventListener('click', (e) => {
                cartDiv.removeChild(e.target.parentNode.parentNode);
                const price = Number(e.target.parentNode.parentNode.querySelector('#cart-price').innerText)
                amountValue = amountValue - price
                amount.innerText = amountValue

                itemCounterValue = itemCounterValue - 1
                itemCount.innerText = itemCounterValue
            })
        }
        amountValue = amountValue + price
        amount.innerText = amountValue

        itemCounterValue = itemCounterValue + 1
        itemCount.innerText = itemCounterValue
    })
}