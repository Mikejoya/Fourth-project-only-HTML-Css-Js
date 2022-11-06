console.log("hola perro");
//boton
const info = document.querySelectorAll('#question');
const infoTitle = document.querySelectorAll('#info-title');
//no mostror
const response = document.querySelectorAll('#response');
const arrowUp = document.querySelectorAll('#arrow')

console.log(info);
console.log(response);

info.forEach((e, p)=> {
    e.addEventListener('click', ()=> {       
        response[p].classList.toggle('inactive');
        if(response[p].classList.contains('inactive')){
            console.log("vamos");
            e.classList.remove('show');
            response[p].classList.remove('show-text'); 
            arrowUp[p].classList.remove('arrow-up');
        }else{
            console.log("aqui estoy");
            e.classList.add('show');
            response[p].classList.add('show-text');
            arrowUp[p].classList.add('arrow-up');
        }
        function showComment(){
            response.forEach(function(el, po) {
                if (response[po] != response[p]){
                    el.classList.add('inactive');
                    arrowUp[po].classList.remove('arrow-up');
                    console.log("si")
                }
            });
        }
        console.log(showComment);
        showComment();//console.log(info.nextElementSibling.innerText);
    });

})
/*function removeSelection (){
    info.forEach((deleted) => {
        deleted.classList.add('inactive');
        console.log(deleted.classList.add('inactive'));
    })
}
const array1 = ["a", "b", "c"];

array1.forEach(e => console.log(e));*/

