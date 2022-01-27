let alert = document.querySelector('.alert');
let input = document.getElementById('input1');
let submit1 = document.querySelector('.submit1')
let item = document.querySelector('.item');
// let delBtn = document.getElementById('delBtn');
// let editBtn = document.getElementById('editBtn');
let removedBtn = document.querySelector('.item-removed');
let grocery = document.querySelector('.grocery-list');


 
let element ;
//let delBtn = element.querySelector('#delBtn');
let editElement;
let editFlag = false;
let editId = '';
//console.log(input);
//console.log(delBtn)
//console.log(item);
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

       element = document.createElement('article')
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
          <button id="completeTask">
          <i class="fas fa-check-circle"></i>
          </button>
      </span>
      
    `
    console.log(element);
   // let list111 ;    
    let list11 = element.children[1] ;
    let list12 = list11.children[0] ;
    let list13 = list11.children[1] ;
    let list14 = list11.children[2] ;
    console.log(list13);
  
    list13.addEventListener('click' ,function ( ) {
    //  this.parentElement.previousElementSibling.nodeValue = 'ahmed'
    // this.parentElement.parentElement.childElement.nodeValue 
    

   let edit1 = this.parentElement.parentElement.firstElementChild.innerText
   let editVal = prompt('enter value',edit1) ;
   this.parentElement.parentElement.firstElementChild.innerText = editVal
    console.log(this.parentElement.parentElement.firstElementChild.innerText);
    //  console.log(this.parentElement.previousElementSibling=value);
    })
    list12.addEventListener('click',function () {
   //  list111 =  element.children[0];
    // list111.replaceWith('')
    // list11.replaceWith('')
    console.log(this);
    this.parentElement.parentElement.remove() ;
    
   // list111.setAttribute('id','hide1')
   // console.log(list111);
      console.log('clicked');
    })

      list14.addEventListener('click',function ( ) {
    let task = this.parentElement.parentElement.firstElementChild ;
    task.setAttribute('class','task1')
        console.log(this.parentElement.parentElement.firstElementChild.innerText);
      })






      console.log(list11.children[0]);
    console.log(element.children[1]);
    
    let delbtn1 = element.getElementsByTagName('button')
    //console.log(delbtn1);
  //  console.log(delBtn);
    //let editBtn = element.getElementById('editBtn');
   // console.log(editBtn);
      
    element.classList.add('show') 
      removedBtn.classList.add('show-item')
    //  console.log(element);
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

//console.log(delBtn);
//      delBtn.addEventListener('click',function ( ) {
//     let s23 = this.previousElementSibling.remove()
//       console.log(s23);     
//  //  grocery.classList.add('aaa')
// })
 
    
// console.log(removedBtn);


removedBtn.addEventListener('click',function (e) {
//   console.log(this.parentElement.children[5].replaceWith(''));
// let q1  =   this.parentElement.replaceWith('') ;
// let q2 = q1.children[5].replaceWith('')
// console.log(q1);
e.preventDefault();
//console.log(this);
element.parentElement.innerText = '' ;
console.log(element.parentElement.innerText = '');
//  element.children[0].replaceWith('')   
     //  grocery.replaceWith('') ;
     // grocery.classList.add('show12')
    // this.parentNode.childNodes[8].remove();
     //  grocery.classList.add('aaa')
  })

