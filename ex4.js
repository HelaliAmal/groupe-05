<p>
             <button  id="bclick" >cliquer pour compter</button><span id="nb">1</span>
<button id="bretrn" >cliquer pour retour a zero</button>
         </p>
     </div>
     <script>
        var bclick =document.getElementById('bclick');
        var bretrn =document.getElementById('brtern');
        var nb=document.getElementById('nb');
        var cpt =parseInt(nb.InnerText);
         bclick.addEventListener('click',function(){
             cpt= cpt+1 ;
             nb.innerHTML = cpt ;
             alert("vous avez cliquer "+ cpt +" fois");
         })

     </script>