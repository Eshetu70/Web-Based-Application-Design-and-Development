function createStationItem(stationName) {
    const stationItem = document.createElement("div");
    stationItem.classList.add("station-item");
    stationItem.dataset.selected = "false";
    stationItem.dataset.stationName = stationName;

    const stationTitle = document.createElement("span");
    stationTitle.innerText = stationName;
    stationItem.appendChild(stationTitle);

    // Dropdown menu for options
    const optionsSelect = document.createElement("select");
    optionsSelect.classList.add("options-select");
    optionsSelect.multiple = true; // Enable multiple selection
    optionsSelect.addEventListener("change", () => toggleOptions(stationItem, optionsSelect));
    
    // Default unselected option
    const defaultOption = document.createElement("option");
    defaultOption.innerText = "Select Options";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    optionsSelect.appendChild(defaultOption);

    options.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.innerText = option;
        optionsSelect.appendChild(optionElement);
    });
    stationItem.appendChild(optionsSelect);

    // "Done" button
    const doneButton = document.createElement("button");
    doneButton.classList.add("done-button");
    doneButton.innerText = "Done";
    doneButton.addEventListener("click", () => markAsDone(stationItem, optionsSelect));
    stationItem.appendChild(doneButton);

    // Comments section
    const commentsDiv = document.createElement("div");
    commentsDiv.classList.add("comments");
    stationItem.appendChild(commentsDiv);

    // Add comment button
    const addComment = document.createElement("textarea");
    addComment.classList.add("add-comment");
    addComment.placeholder = "Add extra comments...";
    addComment.addEventListener("input", () => addMoreComment(stationItem, addComment));
    stationItem.appendChild(addComment);

    // Add hyperlinks for OpsTech and RME
    const opsTechLink = document.createElement("a");
    opsTechLink.href = "https://t.corp.amazon.com/create/copy/V1573569886";
    opsTechLink.target = "_blank"; // Open link in new tab
    opsTechLink.innerText = "OpsTech";
    opsTechLink.classList.add("link-button");

    const rmeLink = document.createElement("a");
    rmeLink.href = "https://t.corp.amazon.com/create/copy/V1560699329";
    rmeLink.target = "_blank"; // Open link in new tab
    rmeLink.innerText = "RME";
    rmeLink.classList.add("link-button");

    // Add the links to the station item
    stationItem.appendChild(opsTechLink);
    stationItem.appendChild(rmeLink);

    return stationItem;
}
