const garden = document.querySelectorAll('.garden__space');
const gardenGrid = document.querySelector('.garden')
const tree__info = document.querySelector('.tree__info');

let actived = false;

function select(){
    if(!actived){
        actived = true
        gardenGrid.style.paddingLeft='17rem';
        tree__info.style.display='block';
    }else{
        actived = false;
        gardenGrid.style.paddingLeft='25rem';
        tree__info.style.display='none';
    }
};

garden.forEach(space => {
    space.addEventListener('click',select)
});


