function search() {
   const towns=Array.from(document.querySelectorAll('ul#towns li'));
   const input=document.getElementById(`searchText`).value;
   let matches=0;
   towns.forEach(town=>{
      if(town.textContent.includes(input)){
         town.style.fontWeight=`bold`;
         town.style.textDecoration=`underline`;
         matches++;
      }else{
         town.style.fontWeight=``;
         town.style.textDecoration=``;
      }
   });
   document.getElementById(`result`).textContent=`${matches} matches found`;
   
}
