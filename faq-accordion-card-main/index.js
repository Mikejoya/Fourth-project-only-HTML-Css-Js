console.log("hola perro");
const info = document.querySelectorAll('#question');
const infoTitle = document.querySelectorAll('#info-title');
const response = document.querySelectorAll('#response');
const arrowUp = document.querySelectorAll('#arrow')


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
        showComment();
    });

})


