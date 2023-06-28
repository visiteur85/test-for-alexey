let Scroll = require('react-scroll');
let scroller = Scroll.scroller;

export const routingToMAinPAgeScrollToElementAndCloseNavMenu = (callback,locationPage, path, nav) => {
    callback(false)
    if (locationPage === '/videoLessons') {
        nav('/');
        setTimeout(() => {
            scroller.scrollTo(path, {
                smooth: true,
            })
        }, 100)

    }
}