let alert = document.querySelector('.alert');
let input = document.getElementById('input1');
let submit1 = document.querySelector('.submit1')
let item = document.querySelector('.item');
let delBtn = document.getElementById('delBtn');
let editBtn = document.getElementById('editBtn');
let removedBtn = document.querySelector('.item-removed');
let grocery = document.querySelector('.grocery-list');

let editElement;
let editFlag = false;
let editId = '';



let value = input.value;

 submit1.addEventListener('click',function() {
   // e.preventDefault();
    let id = new Date().getTime().toString();
    // console.log(id);
      let value = input.value;
    
      ///////////////////////////////////
    if (value !== '' && editFlag === false) {
        document.getElementById('input1').value = '';
          //    create element

      let element = document.createElement('article')
      element.classList.add('container')
      element.innerHTML = ` 
      <span class="item">${value}</span>
      <span>
          <button id="delBtn">
            <i class="fas fa-trash-alt"></i>
          </button>
          <button id="editBtn">
            <i class="fas fa-edit"></i>
          </button>
      </span>
      
    `
      element.classList.add('show') 
      removedBtn.classList.add('show-item')
      console.log(element);
      grocery.appendChild(element);
 
        setTimeout(function () {
            alert.classList.add('xyz')       
       },1000)
        alert.innerText = 'value added to list';
        alert.classList.add('abc')
        
    //    console.log('add item to list'); 
    }else if (value !== '' && editFlag === true) {
       console.log('editing'); 
    }else{
       
        alert.innerText = 'value empty';
        alert.classList.add('abc')
    //     setTimeout(function () {
    //         alert.classList.add('xyz')       
    //    },1000)
    //    console.log('value empty'); 
    }
    
         setTimeout(function () {
            alert.classList.add('xyz')       
       },1000)
    
       
 }); 

 
    
 
 removedBtn.addEventListener('click',function (event) {
     event.preventDefault()
     
      grocery.classList.add('aaa')
 })
 


