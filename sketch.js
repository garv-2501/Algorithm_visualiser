var buttonWidth = 150;
var buttonHeight = 50;
var buttons = [];
var mainButtons = []; // array for main navigation buttons
var subNavButtons = []; // array for sub-navigation buttons

// Variables for breadth first search
var nodes = [];
var edges = [];

// the main canvas
var mainCanvas;

function setup() {
    // Create canvas
    mainCanvas = createCanvas(windowWidth, windowHeight);

    // Add buttons
    var button1 = createButton("Searching algorithms");
    button1.class("navbar-button-style");
    button1.position(10, 10);
    button1.size(buttonWidth, buttonHeight);
    button1.mousePressed(() => {
        removeSubNavButtons("searching");
        displaySearching();
    });
    buttons.push(button1);

    var button2 = createButton("Sorting algorithms");
    button2.class("navbar-button-style");
    button2.position(10 + buttonWidth + 10, 10);
    button2.size(buttonWidth, buttonHeight);
    button2.mousePressed(() => {
        removeSubNavButtons("sorting");
        displaySorting();
    });
    buttons.push(button2);

    var button3 = createButton("Path finding algorithms");
    button3.class("navbar-button-style");
    button3.position(10 + buttonWidth * 2 + 20, 10);
    button3.size(buttonWidth, buttonHeight);
    button3.mousePressed(() => {
        removeSubNavButtons("pathfinding");
        displayPathfinding();
    });
    buttons.push(button3);

    var button4 = createButton("Fractal generation algorithms");
    button4.class("navbar-button-style");
    button4.position(10 + buttonWidth * 3 + 30, 10);
    button4.size(buttonWidth, buttonHeight);
    button4.mousePressed(() => {
        removeSubNavButtons("fractals");
        displayFractals();
    });
    buttons.push(button4);

    // Adding the main buttons to the array mainbuttons
    mainButtons.push(button1);
    mainButtons.push(button2);
    mainButtons.push(button3);
    mainButtons.push(button4);
}

function draw() {
    mainCanvas.background(21, 21, 21);

    // Create a rectangle container for the visualizations
    var containerMargin = 20;
    fill(50, 50, 50);
    rectStartX = containerMargin;
    rectStartY = containerMargin + buttonHeight * 2 + 20;
    rectWidth = width - containerMargin * 2;
    rectHeight = height - containerMargin * 2 - buttonHeight * 2 - 20;
    rect(rectStartX, rectStartY, rectWidth, rectHeight);
}

var subNavVisible = ""; // variable to keep track of which sub-navigation is visible

function displaySearching() {
    // Function from the subnavbar.js file
    createSubNavBar_searching();
    subNavVisible = "searching";
}

function displaySorting() {
    // code to display sorting algorithms visualization
    createSubNavBar_sorting();
    subNavVisible = "sorting";
}

function displayPathfinding() {
    // code to display pathfinding algorithms visualization
    createSubNavBar_pathFinding();
    subNavVisible = "pathfinding";
}

function displayFractals() {
    // code to display fractal generation algorithms visualization
    createSubNavBar_displayFractals();
    subNavVisible = "fractals";
}

// Function to hide all sub-navigation buttons
function removeSubNavButtons(current) {
    if (subNavVisible !== "") {
        subNavButtons = subNavButtons.filter(
            (button) => !button.html().includes(subNavVisible)
        );
        subNavButtons.forEach((button) => {
            button.remove();
        });
        subNavVisible = current;
    }
}

function updateSubNavButtonPositions() {
    var x = 10;
    var y = 70;
    subNavButtons.forEach((button) => {
        button.position(x, y);
        x += buttonWidth + 10;
    });
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    updateSubNavButtonPositions();
}
