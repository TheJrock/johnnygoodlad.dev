/*!
* Start Bootstrap - Stylish Portfolio v6.0.6 (https://startbootstrap.com/theme/stylish-portfolio)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', event => {

    const sidebarWrapper = document.getElementById('sidebar-wrapper');
    let scrollToTopVisible = false;
    // Closes the sidebar menu
    const menuToggle = document.body.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', event => {
        event.preventDefault();
        sidebarWrapper.classList.toggle('active');
        _toggleMenuIcon();
        menuToggle.classList.toggle('active');
    })

    // Closes responsive menu when a scroll trigger link is clicked
    var scrollTriggerList = [].slice.call(document.querySelectorAll('#sidebar-wrapper .js-scroll-trigger'));
    scrollTriggerList.map(scrollTrigger => {
        scrollTrigger.addEventListener('click', () => {
            sidebarWrapper.classList.remove('active');
            menuToggle.classList.remove('active');
            _toggleMenuIcon();
        })
    });

    function _toggleMenuIcon() {
        const menuToggleBars = document.body.querySelector('.menu-toggle > .fa-bars');
        const menuToggleTimes = document.body.querySelector('.menu-toggle > .fa-xmark');
        if (menuToggleBars) {
            menuToggleBars.classList.remove('fa-bars');
            menuToggleBars.classList.add('fa-xmark');
        }
        if (menuToggleTimes) {
            menuToggleTimes.classList.remove('fa-xmark');
            menuToggleTimes.classList.add('fa-bars');
        }
    }

    // Scroll to top button appear
    document.addEventListener('scroll', () => {
        const scrollToTop = document.body.querySelector('.scroll-to-top');
        if (document.documentElement.scrollTop > 100) {
            if (!scrollToTopVisible) {
                fadeIn(scrollToTop);
                scrollToTopVisible = true;
            }
        } else {
            if (scrollToTopVisible) {
                fadeOut(scrollToTop);
                scrollToTopVisible = false;
            }
        }
    })
})

// Projects carousel: previous / next arrows, and clicking a faded card scrolls it into focus
window.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('project-track');
    if (!track) return;
    const prev = document.querySelector('.project-arrow-prev');
    const next = document.querySelector('.project-arrow-next');

    // Hide an arrow when there's nothing more to see in its direction
    const updateArrows = () => {
        const maxScroll = track.scrollWidth - track.clientWidth;
        prev.disabled = track.scrollLeft <= 1;
        next.disabled = track.scrollLeft >= maxScroll - 1;
    };
    track.addEventListener('scroll', updateArrows, { passive: true });
    window.addEventListener('resize', updateArrows);
    updateArrows();

    // Move one card per click
    const scrollByCard = direction => {
        const cardWidth = track.querySelector('.project-col').offsetWidth;
        track.scrollBy({ left: direction * cardWidth });
    };
    prev.addEventListener('click', () => scrollByCard(-1));
    next.addEventListener('click', () => scrollByCard(1));

    // A click on a card that's (partly) in the faded strips brings it into focus,
    // instead of following whatever link was clicked
    track.addEventListener('click', event => {
        const col = event.target.closest('.project-col');
        if (!col) return;
        const trackBox = track.getBoundingClientRect();
        const style = getComputedStyle(track);
        const focusLeft = trackBox.left + parseFloat(style.paddingLeft);
        const focusRight = trackBox.right - parseFloat(style.paddingRight);
        const colBox = col.getBoundingClientRect();
        if (colBox.left >= focusLeft - 2 && colBox.right <= focusRight + 2) return;
        event.preventDefault();
        col.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    });
});

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};
