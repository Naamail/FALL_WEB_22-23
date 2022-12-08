var activePage = window.location.pathname;
console.log(activePage);

const activeNav = document.querySelectorAll('nav a').forEach( link =>{
    if (link.href.includes(`${activePage}`)) {
        link.classList.add("active");
    }
}
    
);
console.log(activeNav);