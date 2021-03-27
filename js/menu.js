function menu(){
   let menu = document.querySelector('ul.menu-mobile')
   if(menu.classList.contains('esconder')){
      menu.classList.remove('esconder')
      menu.classList.add('mostrar')
   }else{
      menu.classList.remove('mostrar')
      menu.classList.add('esconder')
   }
}