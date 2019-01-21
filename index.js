const form = document.querySelector('form');
const name = document.querySelector('#name');
const cph = document.querySelector('#cph');
const prr = document.querySelector('#prr');
const error = document.querySelector('#error');

form.addEventListener('submit', e => {

    e.preventDefault();

    if( name.value && cph.value ){
        const item = {
            name : name.value,
            cph : parseInt(cph.value)
        };

        db.collection('performance').add(item).then(res =>{
            name.value ="";
            cph.value = "";
            error.textContent = "";
        })

    }else {
        error.textContent = 'Please enter the correct Performance';
    }
});