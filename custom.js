const popUp = document.querySelector('#popUpBody');
function OpenModel(){
    popUp.style.opacity = '1';
    popUp.style.zIndex = '1';
    popUp.style.transform = 'scale(1)';

}
function closePop(){
    popUp.style.opacity = '0';
    popUp.style.zIndex = '-1';
    popUp.style.transform = 'scale(0)';
   
}
function validateForm() {

    console.log("paji");
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const country = document.getElementById('country').value;
    console.log(country);

    if (name === '') {
        alert('Please enter your name.');
        return false;
    } else if (email === '') {
        alert('Please enter your email.');
        return false;
    } else if (number === '') {
        alert('Please enter your phone number.');
        return false;
    } else if (country === '') {
        alert('Please select the country.');
        return false;
    }
    return true; // This line allows the form to submit when all fields are filled
}
