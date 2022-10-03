console.log('aa')

const controls = document.querySelectorAll('#home .slideshow-control span')
let controlActive = 0;

const backgroundSlider = document.querySelector('#home .background .background--slider')

controls.forEach((c,k) => {
    c.addEventListener('click', () => {
        controlActive = k;

        backgroundSlider.style.setProperty('--transform', (100 * k))

        controls.forEach( (i,x) => {
            if (x === controlActive) {
                i.classList.add('active')
            } else {
                i.classList.remove('active')
            }
        })
    })
})