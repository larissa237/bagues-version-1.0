
document.addEventListener('DOMContentLoaded',function(){

    // fonction pour le caroussel
    let carousels = document.querySelectorAll('.glide')
    carousels.forEach(function(carousel){
        var glide = new Glide(carousel,{
            type: 'carousel',
            perView: 4,
            breakpoints: {
                800 : {
                    perView: 2
                },
                600 : {
                    perView: 1
                }
            },
            rewind: false
        })       
        glide.mount();
    })
    // fonction pour la zonne de recherche
    let recherche = document.querySelector('#partie2 #titre .search-container input')
    let container_search = document.querySelector('#partie2 #titre .search-container')
    recherche.addEventListener('click',function(){
        container_search.setAttribute('style', 'border:2.5px solid rgb(112, 187, 248)')
        container_search.style.boxShadow = '1px -1px 5px black'
           
    })
    function Endehorscontainer_search(element){
        if(!container_search.contains(element.target)){
            container_search.style.border = '1px solid black'
            container_search.style.boxShadow = 'none'
        }
    }

    document.addEventListener('click',Endehorscontainer_search)

    //fonction pour le mot de passe
    let container = document.querySelectorAll('.container')
    let eye = document.querySelector('.fa-eye')
    let eye_slash = document.querySelector('.fa-eye-slash')
    let input = document.querySelector('#Motdepasse')
    
    eye_slash.addEventListener('click',function(){
        eye.style.display ='inline-block';
        eye_slash.style.display='none'
        input.setAttribute('type','text')
    })

    eye.addEventListener('click',function(){
        eye_slash.style.display ='inline-block';
        eye.style.display='none' 
        input.setAttribute('type','password')

    })
    container.forEach(function(element){
        element.addEventListener('click',function(){
            // element.style.border = '3px solid rgb(76, 76, 182)'
            element.style.boxShadow = '0 0 0 2px  rgb(8, 87, 323)'
        })

    })
    
    
    document.addEventListener('click', (e)=>{
        container.forEach(element => {
            if(!element.contains(e.target)){
                element.style.border = '1px solid black'
                element.style.boxShadow = 'none'
    
            }
        })

    })

    })
    


    
