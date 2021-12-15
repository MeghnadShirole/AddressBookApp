window.addEventListener('DOMContentLoaded', (event) => {
    addressBookContactList = getAddressBookContactListFromStorage();
    document.querySelector(".person-count").textContent = addressBookContactList.length;
    createInnerHtml();
})

const getAddressBookContactListFromStorage = () => {
    return localStorage.getItem("AddressBookList") ?
        JSON.parse(localStorage.getItem("AddressBookList")) : [];
};

const createInnerHtml = () => {
    const headerHtml =
        "<th>Full Name</th>" +
        "<th>Address</th>" +
        "<th>City</th>" +
        "<th>State</th>" +
        "<th>Zip Code</th>" +
        "<th>Phone Number</th>" +
        "<th>Actions</th>";
    let innerHtml = `${headerHtml}`;
    for (let contactData of addressBookContactList) {
        innerHtml = `${innerHtml}
        <tr>
            <td>${contactData._name}</td>
            <td>${contactData._address}</td>
            <td>${contactData._city}</td>
            <td>${contactData._state}</td>
            <td>${contactData._zip}</td>
            <td>${contactData._phone}</td>
            <td>
                <img id="${contactData._id}" onclick="remove(this)" alt="delete" src="..//assets/icons/delete-black-18dp.svg">
                <img id="${contactData._id}" onclick="update(this)" alt="edit" src="..//assets/icons/create-black-18dp.svg">
            </td>
        </tr>
        `;
    }
    document.querySelector("#display").innerHTML = innerHtml;
};