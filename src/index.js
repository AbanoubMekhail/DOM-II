import './less/index.less'

// Your code goes here!
console.log('hello!');

// load event 
window.onload = function (evt) {
    console.log(`event ${evt.type} fired! ready to go!`)
    const heading = document.querySelector('h1');
    heading.textContent = 'READY TO GO!';
// copy event 
    window.addEventListener('copy', () => {
        navigator.clipboard.readText()
        .then(text => {
            heading.textContent += text
        })
    })

    // click event 
    document.body.addEventListener('click', evt => {
        evt.target.classList.toggle('mirror')
    })

    // double click 
    document.body.addEventListener('dblclick' , evt => {
        evt.target.innerHTML = ''
    })

    // keydown
    window.addEventListener('keydown' , evt => {
        if (evt.key == 6) {
            document.body.innerHTML = '<h1> ORDER 66!!</h1>'
        }
    })

    // mousemove
    document.body.addEventListener('mousemove' , evt => {
        const {clientX , clientY} = evt
        console.log(`mouse is at ${clientX}, ${clientY}`)
    })

    // mouseenter && mouseleave
    const destinations = document.querySelectorAll('.destination')
    console.log(destinations)
    for ( let destination of destinations ) {
        destination.addEventListener('mouseenter' , evt => {
            destination.style.fontWeight = 'bold'
        })
        destination.addEventListener('mouseleave', evt => {
            destination.style.fontWeight = 'initial'
        })
    }

}
