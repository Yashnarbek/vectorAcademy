function selector (className){
    return document.querySelector(className)
}
function selectorAll (className){
    return document.querySelectorAll(className)
}
function dropDown(){
    let btn = selector(".header-wrapper__burger")
    let siteNav = selector(".site-nav")
    let elMain = selector(".site-main")
    btn.addEventListener("click", () => {
        console.log("aaa");
        btn.classList.toggle("header-wrapper__burger--closed")
        elMain.classList.toggle("main-styles")
        let classListArr = siteNav.classList.value.split(" ")
        if(!classListArr.includes("open")){
            siteNav.classList.add("open")
            siteNav.classList.remove("animation-closed")
        } else {
            siteNav.classList.add("animation-closed")
            setTimeout(() => {
                siteNav.classList.remove("open")
            }, 400)
        }
    })
}

function slider (){
    let position = 0
    let translate = 0
    for(let i of selectorAll(".customers-list__item")){
        selector(".customers-list")
        i.style.right = position + "px"
        position = position + 295
    }
    selector(".customers__btn-right")?.addEventListener("click", () => {
        if(translate < position - 295){
            translate = translate + 295
            Array.from(selectorAll(".customers-list__item")).map((element) => {
                element.style.transform = `translate(${translate}px)`
            })
        }
    })
    selector(".customers__btn-left")?.addEventListener("click", () => {
        if(translate > 0){
            translate = translate - 295
            Array.from(selectorAll(".customers-list__item")).map((element) => {
                element.style.transform = `translate(${translate}px)`
            })
        }
    })
}


slider()
dropDown()

