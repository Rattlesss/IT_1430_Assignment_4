// Yates | Due July 12, 2026 | Assignment 4



// ===== orderTics() =====
// Called when the order form is submitted
// Displays a fixed price alert and prevents form navigation

function orderTics() {
    alert("Your total price is: $35");
    return false;
}

// ===== rideInfo() =====
// Called when a ride name is clicked on info.html
// Displays the ride's ID and name in an alert

function rideInfo(id, name) {
    alert("You clicked on the ride with the ID of: " + id + " and name of: " + name)
}
