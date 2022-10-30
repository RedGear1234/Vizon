let menu_checkbox = document.getElementById('menu_checkbox')

function On() {
    let nav_menu_id = document.getElementById('nav-menu-id')
   if(window.getComputedStyle(nav_menu_id).display === "none"){
        nav_menu_id.style.display="flex"
   }else{
      nav_menu_id.style.display = "none"
   }
}