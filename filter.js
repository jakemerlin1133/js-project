const filterInput = document.querySelector('#filterInput');

filterInput.addEventListener('keyup', () =>{
    const inputValue = filterInput.value.toUpperCase();

    const ul = document.querySelector('#students-name');
    const li = ul.querySelectorAll('.collections-list');

    for(let i = 0; i < li.length; i++){
        const a = li[i].querySelector('a');

        if(a.innerHTML.toUpperCase().indexOf(inputValue) > -1){
            li[i].style.display = "";
        }else{
            li[i].style.display = "none";
        }
    }
});






