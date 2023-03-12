import throttle from "lodash.throttle";


const STORAGE_KEY = 'feedback-form-state'
const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input'),
    textarea: document.querySelector('textarea')
}

loadFormState();


function saveFormState () {
    const state = {
        email: refs.input.value,
        message: refs.textarea.value,
        };
        
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    };

function loadFormState () {

    const stateString = localStorage.getItem(STORAGE_KEY);
    const parsedString = JSON.parse(stateString);
    if(parsedString) {
        refs.input.value = parsedString.email;
        refs.textarea.value = parsedString.message;
    }
    };


function onFormSubmit (event)  {
    event.preventDefault();
    

    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);

};


refs.form.addEventListener('input', throttle(saveFormState, 500));
refs.form.addEventListener('submit', onFormSubmit);
