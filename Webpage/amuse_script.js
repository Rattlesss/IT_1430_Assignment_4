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

// ===== showRides() =====
// Dynamically writes ride information to rides.html using arrays and a loop
function showRides() {

    // Array of ride names
    var rideNames = [
        "Aquaman",
        "Titan",
        "Runaway Mountain",
        "Texas SkyScreamer",
        "Judge Roy Scream",
        "Shock Wave"
    ];

    // Array of ride descriptions
    var rideDescriptions = [
        "Aquaman is a new type of liquid coaster, the first of its kind, " +
        "that is sure to create a splash in your summer fun! " +
        "Riders will be launched across a U-shaped track, " +
        "suspended precariously over a pool of water! " +
        "This massive 148 foot ride suspends riders at 90-degree angles " +
        "before launching them back down towards the water! " +
        "Riders get to experience the \"aqua\" first hand on this " +
        "ultimate adrenaline rush of a roller coaster!",

        "Titan is the tallest, longest, fastest, and meanest hyper-coaster in all of Texas! " +
        "At speeds of up to 85 miles per hour, and drops of over 250 feet into dark tunnels, " +
        "Titan is the ideal coaster for thrill seekers! " +
        "Riders will scream through loops, spirals, and 5G turns at blistering speeds! " +
        "Titan is an unparalleled beast, proving yet again that everything is bigger in Texas!",

        "Runaway Mountain is one of the more unique rides in the park! " +
        "Located entirely indoors, it plunges riders into total darkness for over 45 seconds! " +
        "Riders are oblivious to the sudden drops, banks, and twists within the depths! " +
        "With its biggest drop nearing 60 feet, this ride is guaranteed to satiate even the biggest of adrenaline junkies! " +
        "Runaway Mountain is the perfect escape from the Texas heat, but at what cost?",

        "Texas SkyScreamer takes families and thrill-seekers alike to new heights as one of the tallest swing rides in the world! " +
        "Soaring over 400 feet above the ground, and pushing riders outwards into a 124-foot circle, " +
        "it offers stunning views of the entire park and beyond! " +
        "Riders will be amazed by the views of the Dallas-Fort Worth skyline as they soar among the clouds. " +
        "Perhaps it's best to focus on the skyline; you wouldn't want to end up like Icarus!",

        "Judge Roy Scream stands as the parks very first wooden rollercoaster, a title it's held since 1980. " +
        "This nostalgic ride follows closely along the parks scenic lake, offering riders with scenic views of the parks natural beauty. " +
        "The coaster rattles along through drops and airtime hills that echo of a time lost. " +
        "It's the perfect roller coaster for families and enthusiasts alike!",

        "Shock Wave is a legendary, award-winning coaster that is world-renowned for its back-to-back vertical loops! " +
        "Riders will be subject to almost 6Gs of force through its towering loops as they race along its twisted paths. " +
        "Emerald-green, full of airtime hills, and riddled with high-speed drops, the Shock Wave continues to earn its spot as a fan-favorite! " +
        "Riders of all types are bound to enjoy this classic adrenaline-inducing coaster."
    ];

    // Array of image filenames
    var rideImages = [
        "../reference-Files/Aquaman_medium.jpg",
        "../reference-Files/Titan_medium.jpg",
        "../reference-Files/Runaway_Mountain_Medium.jpg",
        "../reference-Files/Texas_Skyscreamer_medium.jpg",
        "../reference-Files/Judge_roy_scream_medium.jpg",
        "../reference-Files/Shockwave_medium.jpg"
    ];


}