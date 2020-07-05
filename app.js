var db = firebase.firestore();

function saveData(email) {
    return db.collection("leads").add({
        email: email,
    });
}

const input_email = document.getElementById("correo");


document.getElementById("enviar").addEventListener('click', async e => {
    e.preventDefault();
    const correo  = input_email.value;
    input_email.value = "";
    try {
        let promesa = await saveData(correo);
    } catch (error) {
        console.log(error);
    }

});