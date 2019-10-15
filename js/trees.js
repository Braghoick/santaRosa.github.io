const trees = document.querySelectorAll('.tree');
const treeSelector = document.querySelector('.tree_select')
const guanacasteDash = document.querySelector('.guanacaste__dash');
const pochoteDash = document.querySelector('.pochote__dash');
const malicheDash = document.querySelector('.maliche__dash');
const cortesDash = document.querySelector('.cortes__dash');
const caobaDash = document.querySelector('.caoba__dash');


let active = false;

function select(e){
    
    treeSelector.style.top='0';
    if(e.target.id==='guanacaste'){
        console.log(e.target.id);
        guanacasteDash.style.display='block';
        pochoteDash.style.display="none";
        malicheDash.style.display="none";
        cortesDash.style.display="none";
        caobaDash.style.display="none";
        
    }else if(e.target.id==='pochote'){
        console.log(e.target.id);
        guanacasteDash.style.display='none';
        pochoteDash.style.display="block";
        malicheDash.style.display="none";
        cortesDash.style.display="none";
        cortesDash.style.display="none";
    }else if(e.target.id==='maliche'){
        console.log(e.target.id);
        guanacasteDash.style.display='none';
        pochoteDash.style.display="none";
        malicheDash.style.display="block";
        cortesDash.style.display="none";
        caobaDash.style.display="none";
    }else if(e.target.id==='cortes'){
        console.log(e.target.id);
        guanacasteDash.style.display='none';
        pochoteDash.style.display="none";
        malicheDash.style.display="none";
        cortesDash.style.display="block";
        caobaDash.style.display="none";
    }else if(e.target.id==='caoba'){
        console.log(e.target.id);
        guanacasteDash.style.display='none';
        pochoteDash.style.display="none";
        malicheDash.style.display="none";
        cortesDash.style.display="none";
        caobaDash.style.display="block";
    }
}

trees.forEach(tree => {
    tree.addEventListener('click',select)
});