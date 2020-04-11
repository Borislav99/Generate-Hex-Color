(function(){
 //varijable
 let btn = document.querySelector('.container__link');
 let hexSpan = document.querySelector('.container__hex-color--value');
 //eventi
 btn.addEventListener('click', ()=>{
  let hex = '#';
  let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
  for(let i = 0;6>i;i++){
   let random = Math.floor(Math.random()*values.length);
   hex+=values[random];
  }
  //primjeni
  document.body.style.backgroundColor = hex;
  hexSpan.textContent = hex;
 }) 
})()