const image = document.querySelector('.bg-img')
const goto = document.querySelector('.header-goto')
const descr = document.querySelector('.header-descr')
const arrow = document.querySelector('.arrow')

const content = document.querySelector('.content')

window.onscroll = function() {
    var scrollPercent = (window.pageYOffset / (document.body.offsetHeight - window.innerHeight)) * 300;
    var scrollPercentHard = (window.pageYOffset / (document.body.offsetHeight - window.innerHeight)) * 600;
    image.style.transform = "translateY(" + scrollPercent * 1.5 + "%)";
    goto.style.transform = "translateY(-" + scrollPercentHard * 3 + "%)";
    descr.style.transform = "translateY(-" + scrollPercentHard * 8 + "%)";
    arrow.style.transform = "translateY(" + scrollPercentHard * 6 + "%)";

    var scrollDistance = window.pageYOffset - (window.innerHeight / 4)

    var textGotoFirst = document.querySelector('#cont-control')
    var textGotoSecond = document.querySelector('#cont-make')
    var textGotoThird = document.querySelector('#cont-profes')
    var textArea = document.querySelector('.content-text-small')
    var photosContent = document.querySelector('.box-content')

    var customizable = document.querySelector('.customizable')
    var customizableHeading = document.querySelector('.customizable p')

    var customizableText = document.querySelector('.text-header')
    var customizableImage = document.querySelector('#customizable-image')

    var switchDiv = document.querySelector('.switch')
    var switchText = document.querySelector('.switch-animation')
    var switchImage = document.querySelector('#switch-img')

    var premiumMaterials = document.querySelector('#premium-materials')
    var firstCard = document.querySelector('#first-card')
    var lastCard = document.querySelector('#last-card')
    
    if(scrollDistance >= textGotoFirst.offsetTop){
        textGotoFirst.classList.add('text-forward-right')
    }
    if(scrollDistance >= textGotoSecond.offsetTop){
        textGotoSecond.classList.add('text-forward-right')
    }
    if(scrollDistance >= textGotoThird.offsetTop){
        textGotoThird.classList.add('text-forward-right')
    }
    if(scrollDistance >= textArea.offsetTop){
        textArea.classList.add('content-text-small-op')
        photosContent.classList.add('photo-content-move-upside')
    }

    if(scrollDistance + window.innerHeight>= customizableHeading.offsetTop ){
        customizableHeading.classList.add('text-forward-right')
    }
    if(scrollDistance + window.innerHeight >= customizableText.offsetTop){
        customizableText.classList.add('text-forward-left')
        customizableImage.classList.add('photo-move-upside')
    }

    if(scrollDistance + window.innerHeight >= switchDiv.offsetTop){
        switchText.classList.add('text-forward-right')
        switchImage.classList.add('photo-move-upside')
    }

    if(scrollDistance + (window.innerHeight / 2)>= premiumMaterials.offsetTop){
        firstCard.classList.add('move-downside-card')
        lastCard.classList.add('move-upside-card')
    }
};

arrow.addEventListener('click', () => {
    const contentRect = content.getBoundingClientRect();
    const isContentInView = contentRect.top >= 0 && contentRect.bottom <= window.innerHeight;
  
    if (!isContentInView) {
      const targetPosition = content.offsetTop;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      let startTime = null;
  
      const animation = currentTime => {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeOutQuad(timeElapsed, startPosition, distance, 500);
        window.scrollTo(0, run);
        if (timeElapsed < 500) requestAnimationFrame(animation);
      };
  
      const easeOutQuad = (t, b, c, d) => c * (t /= d) * t + b;
  
      requestAnimationFrame(animation);
    }
  });
  
// ------------------------------------------------------------

const controllerAccessoriesMask = document.querySelectorAll('.controller-accessories-mask')
const controllerAccessories = document.querySelectorAll('.controller-accessories')

controllerAccessoriesMask.forEach((el, i) => {
    el.addEventListener('mouseenter', () => {
        el.classList.add('controller-accessories-animated-mask')
        controllerAccessories[i].classList.toggle('controller-accessories-animated')
    })

    el.addEventListener('mouseleave', () => {
        controllerAccessories[i].classList.toggle('controller-accessories-animated')
        el.classList.remove('controller-accessories-animated-mask')
    })
})


const cursorInner = document.querySelector('.cursor-inner')
const outerCursor = document.querySelector('.outer-cursor')

if(screen.width >= 821){
    document.addEventListener('mousemove',(e) => {
        let x = e.clientX
        let y = e.clientY
    
        cursorInner.style.left = `${x}px`
        cursorInner.style.top = `${y}px`
    
        outerCursor.style.left = `${x}px`
        outerCursor.style.top = `${y}px`
        cursorInner.classList.remove('none')
        outerCursor.classList.remove('none')
    })
} else {
    cursorInner.classList.add('none')
    outerCursor.classList.add('none')
}

let links = Array.from(document.querySelectorAll('a'))
let buttons = Array.from(document.querySelectorAll('.button'))
let images = Array.from(document.querySelectorAll('img'))

links.forEach( link => {
    link.addEventListener('mouseenter', () =>{
        cursorInner.classList.add('grow')
    })
    link.addEventListener('mouseleave', () =>{
        cursorInner.classList.remove('grow')
    })
})

buttons.forEach( button => {
    button.addEventListener('mouseover', () =>{
        cursorInner.classList.add('grow')
    })
    button.addEventListener('mouseleave', () =>{
        cursorInner.classList.remove('grow')
    })
})

images.forEach( image => {
    image.addEventListener('mouseover', () =>{
        cursorInner.classList.add('grow')
    })
    image.addEventListener('mouseleave', () =>{
        cursorInner.classList.remove('grow')
    })
})

document.querySelector('.elite-series').addEventListener('mouseover', () =>{
    cursorInner.classList.add('grow')
})
document.querySelector('.elite-series').addEventListener('mouseleave', () =>{
    cursorInner.classList.remove('grow')
})

goto.addEventListener('mouseover', () =>{
    cursorInner.classList.add('grow')
})
goto.addEventListener('mouseleave', () =>{
    cursorInner.classList.remove('grow')
})

descr.addEventListener('mouseover', () =>{
    cursorInner.classList.add('grow')
})
descr.addEventListener('mouseleave', () =>{
    cursorInner.classList.remove('grow')
})

arrow.addEventListener('mouseover', () =>{
    cursorInner.classList.add('grow')
})
arrow.addEventListener('mouseleave', () =>{
    cursorInner.classList.remove('grow')
})


const specRows = Array.from(document.querySelectorAll('.specifications-row'))

const specInfos = Array.from(document.querySelectorAll('.specification-row-info'))

specRows.forEach((specRow, i) =>{
    specRow.addEventListener('click', () => {
        specInfos[i].classList.toggle('content-info')
    })
})

const firstBtn = document.querySelector('#first-button')
const secondBtn = document.querySelector('#second-button')

firstBtn.addEventListener('mouseenter', () => {
    firstBtn.classList.toggle('btn-ret')
    secondBtn.classList.toggle('btn-ret')
})
firstBtn.addEventListener('mouseleave', () => {
    firstBtn.classList.toggle('btn-ret')
    secondBtn.classList.toggle('btn-ret')
})

secondBtn.addEventListener('mouseenter', () => {
    secondBtn.classList.toggle('btn-ret')
    firstBtn.classList.toggle('btn-ret')
})
secondBtn.addEventListener('mouseleave', () => {
    secondBtn.classList.toggle('btn-ret')
    firstBtn.classList.toggle('btn-ret')
})