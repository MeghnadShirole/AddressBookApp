//Added Validations For User Input
//Name Validation
const name = document.querySelector('#name');
const nameError = document.querySelector('.name-error');
name.addEventListener('input', function() {
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}[ : ][A-Z]{1}[a-z]{2,}$');
    if (nameRegex.test(name.value)) nameError.textContent = "";
    else nameError.textContent = "Name is Incorrect";
})

//Phone Number Validation
const phone = document.querySelector('#phone');
const phoneError = document.querySelector('.phone-error');
phone.addEventListener('input', function() {
    let phoneRegex = RegExp('^(?=.+)[0-9]{0,3}[0-9]{10}$');
    if (phoneRegex.test(phone.value)) phoneError.textContent = "";
    else phoneError.textContent = "Phone Number is Incorrect";
})


//Address Validation
const address = document.querySelector('#address');
const addressError = document.querySelector('.address-error');
address.addEventListener('input', function() {
    let addressRegex = RegExp('.*');
    if (addressRegex.test(address.value)) addressError.textContent = "";
    else addressError.textContent = "Address is Incorrect";
})

//on save
const save = () => {
    let contactList = createAddressBook();
};

const createAddressBook = () => {

    let contactList = new AddressBookContact();

    contactList.name = getInputValueById('#name');
    contactList.phone = getInputValueById('#phone');
    contactList.address = getInputValueById('#address');
    contactList.city = getInputValueById('#city');
    contactList.state = getInputValueById('#state');
    contactList.zip = getInputValueById('#zip');
    alert(contactList.toString());
    return contactList;
};

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
};