function create(words) {
  const content=document.getElementById('content');
   for (let word of words) {
      let div=document.createElement('div');
      let p=document.createElement('p');
      p.textContent=word;
      p.style.display='none';
      div.appendChild(p);
      div.addEventListener('click',onclick);
      content.appendChild(div);


   }
   function onclick(event){
      event.target.children[0].style.display='block';

   }


}
