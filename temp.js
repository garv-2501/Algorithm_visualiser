function createSubNavBar_sorting() {
    // Create new buttons for bubble sort, insertion sort, selection sort, and merge sort
    var bubbleSortButton = createButton("Bubble Sort");
    bubbleSortButton.class("sub-navbar-button-style");
    bubbleSortButton.position(10, 70);
    bubbleSortButton.size(buttonWidth, buttonHeight);
    buttons.push(bubbleSortButton);
    subNavButtons.push(bubbleSortButton);

    var insertionSortButton = createButton("Insertion Sort");
    insertionSortButton.class("sub-navbar-button-style");
    insertionSortButton.position(10 + buttonWidth + 10, 70);
    insertionSortButton.size(buttonWidth, buttonHeight);
    buttons.push(insertionSortButton);
    subNavButtons.push(insertionSortButton);

    var selectionSortButton = createButton("Selection Sort");
    selectionSortButton.class("sub-navbar-button-style");
    selectionSortButton.position(10 + buttonWidth * 2 + 20, 70);
    selectionSortButton.size(buttonWidth, buttonHeight);
    buttons.push(selectionSortButton);
    subNavButtons.push(selectionSortButton);

    var mergeSortButton = createButton("Merge Sort");
    mergeSortButton.class("sub-navbar-button-style");
    mergeSortButton.position(10 + buttonWidth * 3 + 30, 70);
    mergeSortButton.size(buttonWidth, buttonHeight);
    buttons.push(mergeSortButton);
    subNavButtons.push(mergeSortButton);

    var quickSortButton = createButton("Quick Sort");
    quickSortButton.class("sub-navbar-button-style");
    quickSortButton.position(10 + buttonWidth * 4 + 40, 70);
    quickSortButton.size(buttonWidth, buttonHeight);
    buttons.push(quickSortButton);
    subNavButtons.push(quickSortButton);

    var heapSortButton = createButton("Heap Sort");
    heapSortButton.class("sub-navbar-button-style");
    heapSortButton.position(10 + buttonWidth * 5 + 50, 70);
    heapSortButton.size(buttonWidth, buttonHeight);
    buttons.push(heapSortButton);
    subNavButtons.push(heapSortButton);

    var countingSortButton = createButton("Counting Sort");
    countingSortButton.class("sub-navbar-button-style");
    countingSortButton.position(10 + buttonWidth * 6 + 60, 70);
    countingSortButton.size(buttonWidth, buttonHeight);
    buttons.push(countingSortButton);
    subNavButtons.push(countingSortButton);

    var radixSortButton = createButton("Radix Sort");
    radixSortButton.class("sub-navbar-button-style");
    radixSortButton.position(10 + buttonWidth * 7 + 70, 70);
    radixSortButton.size(buttonWidth, buttonHeight);
    buttons.push(radixSortButton);
    subNavButtons.push(radixSortButton);

    var bucketSortButton = createButton("Bucket Sort");
    bucketSortButton.class("sub-navbar-button-style");
    bucketSortButton.position(10 + buttonWidth * 8 + 80, 70);
    bucketSortButton.size(buttonWidth, buttonHeight);
    buttons.push(bucketSortButton);
    subNavButtons.push(bucketSortButton);
}
