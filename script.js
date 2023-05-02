let body = document.querySelector('body')
let contener = document.querySelector('.contener')
let append_foter = document.querySelector('.append_foter')

let advertisement_flex = document.createElement('div')
let advertisement_one = document.createElement('img')
let advertisement_two = document.createElement('img')
let advertisement_three = document.createElement('img')
let flex_content = document.createElement('div')



for (let i = 0; i < 10; i++) {
    let content_img = document.createElement('img')
    let content_p = document.createElement('p')
    let content_h3 = document.createElement('h3')
    let content_button = document.createElement('button')
    let content_button_h5 = document.createElement('h5')
    let content = document.createElement('div')


    advertisement_flex.classList.add('advertisement_flex')
    advertisement_one.classList.add('advertisement_one')
    advertisement_two.classList.add('advertisement_two')
    advertisement_three.classList.add('advertisement_three')
    flex_content.classList.add('flex_content')
    content.classList.add('content')
    content_img.classList.add('content_img')
    content_p.classList.add('content_p')
    content_button.classList.add('content_button')


    advertisement_one.src = "img/one.png"
    advertisement_two.src = "img/two.png"
    advertisement_three.src = "img/three.png"
    content_img.src = 'img/phone.jpeg'

    content_p.innerHTML = `Cматфон Hiaomi Redmi Note 11Pro <br> 128GB 8 GB Grey`
    content_h3.innerHTML = '3 804 000'
    content_button_h5.innerHTML = 'В корзину'

    console.log(append_foter);

    body.append(contener)
    contener.append(advertisement_flex, flex_content, append_foter)
    flex_content.append(content)
    advertisement_flex.append(advertisement_one, advertisement_two, advertisement_three)
    content.append(content_img, content_p, content_h3, content_button)
    content_button.append(content_button_h5)


    content_button.onclick = () => {
        content_button.classList.toggle('active_btn')
        content_button_h5.innerHTML='x'
    }

}
/* memoryBtns.forEach(btn => {
    btn.onclick = () => {
        memoryBtns.forEach(el => el.classList.remove('active-btn'))
        btn.classList.add('active-btn')

        let addPrice = +btn.getAttribute('data-price')

        result.innerHTML = addCommas(originalPrice + addPrice)

    }
})
 */