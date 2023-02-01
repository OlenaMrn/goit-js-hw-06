const form = document.querySelector(`.login-form`);

form.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(event) {
event.preventDefault();


const formData = new FormData(event.currentTarget);
    
 
    
 formData.forEach((value, name) => {
        if (value !== "") {
             console.log(name, value);           
           
        } else {alert("Всі поля повинні бути заповнені"); }
       
 });
    
    
};
