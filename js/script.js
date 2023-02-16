// let navbar = document.querySelector('.navbar');

// document.querySelector('#btn').onclick = () =>{
//     navbar.classList.toggle('active');
// }

// window.onscroll = () =>{
//     navbar.classList.remove('active');
// }



function scrollTrigger(selector, options = {}){
    let els = document.querySelectorAll(selector)
    els = Array.from(els)
    els.forEach(el => {
        addObserver(el, options)
    })
}

function addObserver(el, options){
    if(!('IntersectionObserver' in window)){
        if(options.cb){
            options.cb(el)
        }else{
            entry.target.classList.add('active')
        }
        return
    }
    let observer = new IntersectionObserver((entries, observer) => { //this takes a callback function which receives two arguments: the elemts list and the observer instance
        entries.forEach(entry => {
            if(entry.isIntersecting){
                if(options.cb){
                    options.cb(el)
                }else{
                    entry.target.classList.add('active')
                }
                observer.unobserve(entry.target)
            }
        })
    }, options)
    observer.observe(el)
}


scrollTrigger('.our_mission', {
    rootMargin: '-250px',
})

scrollTrigger('.list',{
    rootMargin: '-100px',
})

scrollTrigger('.card',{
    // rootMargin: '-50px',
})


scrollTrigger('.worker',{
    // rootMargin: '-50px',
})
// scrollTrigger('.loader', {
//     rootMargin: '-200px',
//     cb: function(el){
//         el.innerText = 'Loading...'
//         setTimeout(() => {
//             el.innerText = 'Task Complete!'
//         }, 1000)
//     }
// })