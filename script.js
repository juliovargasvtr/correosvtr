// Initialize Parse
Parse.initialize("VR3JNLs2F6JbgtbTKqMUk73CCeZVR6Viwpqla575", "LnDsPQgtHemrI2BRcFwSKE3bjT6wjzpRFcHzsrSh");
Parse.serverURL = "https://parseapi.back4app.com/";

// Create a new object in a custom class
async function saveObject() {
    // Creates a new Parse object with the className "CustomClass"
    let CustomClass = Parse.Object.extend("CustomClass");
    let customObject = new CustomClass();

    // Set the input values to the new object
    customObject.set("email", document.getElementById("email").value);
    customObject.set("name", document.getElementById("name").value);

    try {
        // Call the save method, which returns the saved object if successful
        customObject = await customObject.save();
        if (customObject !== null) {
            // Notify the success by getting the attributes from the object, by using the get method (the id attribute needs to be accessed directly, though)
            alert(
                `Listo estás fuera: ${customObject.id
                }, ${customObject.get("email")} - ${customObject.get("name")}`
            );
        }
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
}

// Add on click listener to call the save object function
document.getElementById("saveButton").addEventListener("click", async function () {
    saveObject();
});
