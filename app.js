let menu_checkbox = document.getElementById('menu_checkbox')

function On() {
    let nav_menu_id = document.getElementById('nav-menu-id')
   if(window.getComputedStyle(nav_menu_id).display === "none"){
        nav_menu_id.style.display="flex"
   }else{
      nav_menu_id.style.display = "none"
   }
}


// const svg = document.getElementById('triangles')

// svg.onclick =(e) =>{
//    const colors = ['red', 'blue', 'yellow', 'green','pink','purple']
//    const rando = () => colors[Math.floor(Math.random() * colors.length)]
//    document.documentElement.style.cssText= `
//    --dark-color : ${rando()}
//    --light-color : ${rando()}
//    `
// }