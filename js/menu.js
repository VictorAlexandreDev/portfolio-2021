function menu(){
   let button = document.querySelector('h3>i.fa')
   let menu = document.querySelector('ul.menu-mobile')
   if(menu.classList.contains('esconder')){
      button.classList.remove('fa-bars')
      button.classList.add('fa-times')
      menu.classList.remove('esconder')
      menu.classList.add('mostrar')
   }else{
      button.classList.remove('fa-times')
      button.classList.add('fa-bars')
      menu.classList.remove('mostrar')
      menu.classList.add('esconder')
   }
}