var db = firebase.firestore();

function storeData() {
    // Add a new document in collection "cities"
    db.collection("cities").doc("LA").set({
        name: "Los Angeles",
        state: "CA",
        country: "USA"
    }).then(function() {
        console.log("Document successfully written!");
    })
}

