var noOfRows = 0;
function createSubNavBar_searching() {
    // To check if the buttons are going out of the canvas
    var maxButtonsPerRow = Math.floor(windowWidth / (buttonWidth + 10));
    var noOfRows = 0;
    var row = 0;
    var buttonCount = 0;

    // Create new buttons for linear search, binary search, jump search, and interpolation search
    var x = 10;
    var y = 70 + row * (buttonHeight + 10);
    var linearSearchButton = createButton("Linear Search");
    linearSearchButton.class("sub-navbar-button-style");
    linearSearchButton.position(x, y);
    linearSearchButton.size(buttonWidth, buttonHeight);
    subNavButtons.push(linearSearchButton);
    buttonCount++;

    if (buttonCount >= maxButtonsPerRow) {
        row++;
        buttonCount = 0;
    }
    noOfRows = row;

    x = 10 + buttonCount * (buttonWidth + 10);
    y = 70 + row * (buttonHeight + 10);
    var binarySearchButton = createButton("Binary Search");
    binarySearchButton.class("sub-navbar-button-style");
    binarySearchButton.position(x, y);
    binarySearchButton.size(buttonWidth, buttonHeight);
    subNavButtons.push(binarySearchButton);
    buttonCount++;

    if (buttonCount >= maxButtonsPerRow) {
        row++;
        buttonCount = 0;
    }
    noOfRows = row;

    x = 10 + buttonCount * (buttonWidth + 10);
    y = 70 + row * (buttonHeight + 10);
    var jumpSearchButton = createButton("Jump Search");
    jumpSearchButton.class("sub-navbar-button-style");
    jumpSearchButton.position(x, y);
    jumpSearchButton.size(buttonWidth, buttonHeight);
    subNavButtons.push(jumpSearchButton);
    buttonCount++;

    if (buttonCount >= maxButtonsPerRow) {
        row++;
        buttonCount = 0;
    }
    noOfRows = row;

    x = 10 + buttonCount * (buttonWidth + 10);
    y = 70 + row * (buttonHeight + 10);
    var interpolationSearchButton = createButton("Interpolation Search");
    interpolationSearchButton.class("sub-navbar-button-style");
    interpolationSearchButton.position(x, y);
    interpolationSearchButton.size(buttonWidth, buttonHeight);
    subNavButtons.push(interpolationSearchButton);
    buttonCount++;

    if (buttonCount >= maxButtonsPerRow) {
        row++;
        buttonCount = 0;
    }
    noOfRows = row;
}

function createSubNavBar_sorting() {
    // To check if the buttons are going out of the canvas
    var maxButtonsPerRow = Math.floor(windowWidth / (buttonWidth + 10));
    var row = 0;
    var buttonCount = 0;

    // Create new buttons for bubble sort, insertion sort, selection sort, and merge sort
    var x = 10;
    var y = 70 + row * (buttonHeight + 10);
    var bubbleSortButton = createButton("Bubble Sort");
    bubbleSortButton.class("sub-navbar-button-style");
    bubbleSortButton.position(x, y);
    bubbleSortButton.size(buttonWidth, buttonHeight);
    subNavButtons.push(bubbleSortButton);
    buttonCount++;

    if (buttonCount >= maxButtonsPerRow) {
        row++;
        buttonCount = 0;
    }

    x = 10 + buttonCount * (buttonWidth + 10);
    y = 70 + row * (buttonHeight + 10);
    var insertionSortButton = createButton("Insertion Sort");
    insertionSortButton.class("sub-navbar-button-style");
    insertionSortButton.position(x, y);
    insertionSortButton.size(buttonWidth, buttonHeight);
    subNavButtons.push(insertionSortButton);
    buttonCount++;

    if (buttonCount >= maxButtonsPerRow) {
        row++;
        buttonCount = 0;
    }

    x = 10 + buttonCount * (buttonWidth + 10);
    y = 70 + row * (buttonHeight + 10);
    var selectionSortButton = createButton("Selection Sort");
    selectionSortButton.class("sub-navbar-button-style");
    selectionSortButton.position(x, y);
    selectionSortButton.size(buttonWidth, buttonHeight);
    subNavButtons.push(selectionSortButton);
    buttonCount++;

    if (buttonCount >= maxButtonsPerRow) {
        row++;
        buttonCount = 0;
    }

    x = 10 + buttonCount * (buttonWidth + 10);
    y = 70 + row * (buttonHeight + 10);
    var mergeSortButton = createButton("Merge Sort");
    mergeSortButton.class("sub-navbar-button-style");
    mergeSortButton.position(x, y);
    mergeSortButton.size(buttonWidth, buttonHeight);
    subNavButtons.push(mergeSortButton);
    buttonCount++;

    if (buttonCount >= maxButtonsPerRow) {
        row++;
        buttonCount = 0;
    }

    x = 10 + buttonCount * (buttonWidth + 10);
    y = 70 + row * (buttonHeight + 10);
    var quickSortButton = createButton("Quick Sort");
    quickSortButton.class("sub-navbar-button-style");
    quickSortButton.position(x, y);
    quickSortButton.size(buttonWidth, buttonHeight);
    subNavButtons.push(quickSortButton);
    buttonCount++;

    if (buttonCount >= maxButtonsPerRow) {
        row++;
        buttonCount = 0;
    }

    x = 10 + buttonCount * (buttonWidth + 10);
    y = 70 + row * (buttonHeight + 10);
    var heapSortButton = createButton("Heap Sort");
    heapSortButton.class("sub-navbar-button-style");
    heapSortButton.position(x, y);
    heapSortButton.size(buttonWidth, buttonHeight);
    subNavButtons.push(heapSortButton);
    buttonCount++;

    if (buttonCount >= maxButtonsPerRow) {
        row++;
        buttonCount = 0;
    }

    x = 10 + buttonCount * (buttonWidth + 10);
    y = 70 + row * (buttonHeight + 10);
    var countingSortButton = createButton("Counting Sort");
    countingSortButton.class("sub-navbar-button-style");
    countingSortButton.position(x, y);
    countingSortButton.size(buttonWidth, buttonHeight);
    subNavButtons.push(countingSortButton);
    buttonCount++;

    if (buttonCount >= maxButtonsPerRow) {
        row++;
        buttonCount = 0;
    }

    x = 10 + buttonCount * (buttonWidth + 10);
    y = 70 + row * (buttonHeight + 10);
    var bucketSortButton = createButton("Bucket Sort");
    bucketSortButton.class("sub-navbar-button-style");
    bucketSortButton.position(x, y);
    bucketSortButton.size(buttonWidth, buttonHeight);
    subNavButtons.push(bucketSortButton);
    buttonCount++;

    if (buttonCount >= maxButtonsPerRow) {
        row++;
        buttonCount = 0;
    }

    x = 10 + buttonCount * (buttonWidth + 10);
    y = 70 + row * (buttonHeight + 10);
    var radixSortButton = createButton("Radix Sort");
    radixSortButton.class("sub-navbar-button-style");
    radixSortButton.position(x, y);
    radixSortButton.size(buttonWidth, buttonHeight);
    subNavButtons.push(radixSortButton);
    buttonCount++;

    if (buttonCount >= maxButtonsPerRow) {
        row++;
        buttonCount = 0;
    }
}

function createSubNavBar_pathFinding() {
    // To check if the buttons are going out of the canvas
    var maxButtonsPerRow = Math.floor(windowWidth / (buttonWidth + 10));
    var row = 0;
    var buttonCount = 0;
    // Create new buttons for breadth first search, depth first search, dijkstra's algorithm, and A* algorithm
    var x = 10;
    var y = 70 + row * (buttonHeight + 10);
    var breadthFirstSearchButton = createButton("Breadth First Search");
    breadthFirstSearchButton.class("sub-navbar-button-style");
    breadthFirstSearchButton.position(x, y);
    breadthFirstSearchButton.size(buttonWidth, buttonHeight);
    subNavButtons.push(breadthFirstSearchButton);
    buttonCount++;

    if (buttonCount >= maxButtonsPerRow) {
        row++;
        buttonCount = 0;
    }

    x = 10 + buttonCount * (buttonWidth + 10);
    y = 70 + row * (buttonHeight + 10);
    var depthFirstSearchButton = createButton("Deapth First Search");
    depthFirstSearchButton.class("sub-navbar-button-style");
    depthFirstSearchButton.position(x, y);
    depthFirstSearchButton.size(buttonWidth, buttonHeight);
    subNavButtons.push(depthFirstSearchButton);
    buttonCount++;

    if (buttonCount >= maxButtonsPerRow) {
        row++;
        buttonCount = 0;
    }

    x = 10 + buttonCount * (buttonWidth + 10);
    y = 70 + row * (buttonHeight + 10);
    var dijkstraAlgorithmButton = createButton("Dijkstra's Algorithm");
    dijkstraAlgorithmButton.class("sub-navbar-button-style");
    dijkstraAlgorithmButton.position(x, y);
    dijkstraAlgorithmButton.size(buttonWidth, buttonHeight);
    subNavButtons.push(dijkstraAlgorithmButton);
    buttonCount++;

    if (buttonCount >= maxButtonsPerRow) {
        row++;
        buttonCount = 0;
    }

    x = 10 + buttonCount * (buttonWidth + 10);
    y = 70 + row * (buttonHeight + 10);
    var aStarAlgorithmButton = createButton("A* Algorithm");
    aStarAlgorithmButton.class("sub-navbar-button-style");
    aStarAlgorithmButton.position(x, y);
    aStarAlgorithmButton.size(buttonWidth, buttonHeight);
    subNavButtons.push(aStarAlgorithmButton);
    buttonCount++;

    if (buttonCount >= maxButtonsPerRow) {
        row++;
        buttonCount = 0;
    }

    x = 10 + buttonCount * (buttonWidth + 10);
    y = 70 + row * (buttonHeight + 10);
    var greedyBestFirstSearchButton = createButton("Greedy Best First Search");
    greedyBestFirstSearchButton.class("sub-navbar-button-style");
    greedyBestFirstSearchButton.position(x, y);
    greedyBestFirstSearchButton.size(buttonWidth, buttonHeight);
    subNavButtons.push(greedyBestFirstSearchButton);
    buttonCount++;

    if (buttonCount >= maxButtonsPerRow) {
        row++;
        buttonCount = 0;
    }
}

// Function for creating sub navigation bar buttons to display fractals
function createSubNavBar_displayFractals() {
    // To check if the buttons are going out of the canvas
    var maxButtonsPerRow = Math.floor(windowWidth / (buttonWidth + 10));
    var row = 0;
    var buttonCount = 0;
    // Create new buttons for the Koch Snowflake, Sierpinski Triangle, and Mandelbrot Set

    var x = 10;
    var y = 70 + row * (buttonHeight + 10);
    var kochSnowflakeButton = createButton("Koch Snowflake");
    kochSnowflakeButton.class("sub-navbar-button-style");
    kochSnowflakeButton.position(x, y);
    kochSnowflakeButton.size(buttonWidth, buttonHeight);
    subNavButtons.push(kochSnowflakeButton);
    buttonCount++;

    if (buttonCount >= maxButtonsPerRow) {
        row++;
        buttonCount = 0;
    }

    x = 10 + buttonCount * (buttonWidth + 10);
    y = 70 + row * (buttonHeight + 10);
    var sierpinskiTriangleButton = createButton("Sierpinski Triangle");
    sierpinskiTriangleButton.class("sub-navbar-button-style");
    sierpinskiTriangleButton.position(x, y);
    sierpinskiTriangleButton.size(buttonWidth, buttonHeight);
    subNavButtons.push(sierpinskiTriangleButton);
    buttonCount++;

    if (buttonCount >= maxButtonsPerRow) {
        row++;
        buttonCount = 0;
    }

    x = 10 + buttonCount * (buttonWidth + 10);
    y = 70 + row * (buttonHeight + 10);
    var mandelbrotSetButton = createButton("Mandelbrot Set");
    mandelbrotSetButton.class("sub-navbar-button-style");
    mandelbrotSetButton.position(x, y);
    mandelbrotSetButton.size(buttonWidth, buttonHeight);
    subNavButtons.push(mandelbrotSetButton);
    buttonCount++;

    if (buttonCount >= maxButtonsPerRow) {
        row++;
        buttonCount = 0;
    }

    x = 10 + buttonCount * (buttonWidth + 10);
    y = 70 + row * (buttonHeight + 10);
    var juliaSetButton = createButton("Julia Set");
    juliaSetButton.class("sub-navbar-button-style");
    juliaSetButton.position(x, y);
    juliaSetButton.size(buttonWidth, buttonHeight);
    subNavButtons.push(juliaSetButton);
    buttonCount++;

    if (buttonCount >= maxButtonsPerRow) {
        row++;
        buttonCount = 0;
    }

    x = 10 + buttonCount * (buttonWidth + 10);
    y = 70 + row * (buttonHeight + 10);
    var burningShipButton = createButton("Burning Ship");
    burningShipButton.class("sub-navbar-button-style");
    burningShipButton.position(x, y);
    burningShipButton.size(buttonWidth, buttonHeight);
    subNavButtons.push(burningShipButton);
    buttonCount++;

    if (buttonCount >= maxButtonsPerRow) {
        row++;
        buttonCount = 0;
    }

    x = 10 + buttonCount * (buttonWidth + 10);
    y = 70 + row * (buttonHeight + 10);
    var burningShipJuliaSetButton = createButton("Burning Ship Julia Set");
    burningShipJuliaSetButton.class("sub-navbar-button-style");
    burningShipJuliaSetButton.position(x, y);
    burningShipJuliaSetButton.size(buttonWidth, buttonHeight);
    subNavButtons.push(burningShipJuliaSetButton);
    buttonCount++;

    if (buttonCount >= maxButtonsPerRow) {
        row++;
        buttonCount = 0;
    }

    x = 10 + buttonCount * (buttonWidth + 10);
    y = 70 + row * (buttonHeight + 10);
    var mandelbrotSetJuliaSetButton = createButton("Mandelbrot Set Julia Set");
    mandelbrotSetJuliaSetButton.class("sub-navbar-button-style");
    mandelbrotSetJuliaSetButton.position(x, y);
    mandelbrotSetJuliaSetButton.size(buttonWidth, buttonHeight);
    subNavButtons.push(mandelbrotSetJuliaSetButton);
    buttonCount++;

    if (buttonCount >= maxButtonsPerRow) {
        row++;
        buttonCount = 0;
    }
}
