import React from 'react';


const Example = () => {
    var retrievedData = sessionStorage.getItem('contacts');
    var contacts = JSON.parse(retrievedData);
    alert(retrievedData.length)
    console.log(contacts)

    return (
        <h1>Buscar</h1>
    );
}

export default Example;