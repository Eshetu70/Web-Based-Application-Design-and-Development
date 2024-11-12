let redBarCount = 0; // Count for stations marked red
const totalStations = 10; // Example total number of stations
const attentionOptions = ['Option1', 'Option2']; // Example options that require attention

// Function to save station data in localStorage
function saveData() {
    const stations = Array.from(document.querySelectorAll(".station-item")).map(stationItem => {
        return {
            name: stationItem.dataset.stationName,
            selected: stationItem.dataset.selected === "true",
            comments: Array.from(stationItem.querySelectorAll(".comment-item")).map(comment => comment.innerText),
            options: Array.from(stationItem.querySelector(".options-select").selectedOptions).map(option => option.value),
            red: stationItem.classList.contains("red")  // Save red state
        };
    });
    localStorage.setItem("stationsData", JSON.stringify(stations));
}

// Function to load station data from localStorage
function loadData() {
    const savedData = JSON.parse(localStorage.getItem("stationsData"));
    if (savedData) {
        savedData.forEach(stationData => {
            const stationItem = document.querySelector(`.station-item[data-station-name="${stationData.name}"]`);
            if (stationItem) {
                stationItem.dataset.selected = stationData.selected ? "true" : "false";
                const optionsSelect = stationItem.querySelector(".options-select");
                stationData.options.forEach(option => {
                    const optionElement = Array.from(optionsSelect.options).find(opt => opt.value === option);
                    if (optionElement) optionElement.selected = true;
                });

                // Add comments if available
                const commentsDiv = stationItem.querySelector(".comments");
                stationData.comments.forEach(comment => {
                    const commentItem = document.createElement("div");
                    commentItem.classList.add("comment-item");
                    commentItem.innerText = comment;
                    commentsDiv.appendChild(commentItem);
                });

                // Apply red state from saved data
                if (stationData.red) {
                    stationItem.classList.add("red");
                }
            }
        });
    }
}

// Function to toggle station options and update comments
function toggleOptions(stationItem, optionsSelect) {
    const selectedOptions = Array.from(optionsSelect.selectedOptions).filter(option => option.value);
    const commentsDiv = stationItem.querySelector(".comments");

    // Update comments with selected options
    commentsDiv.innerHTML = ""; // Clear previous comments
    selectedOptions.forEach(option => {
        const commentItem = document.createElement("div");
        commentItem.classList.add("comment-item");
        commentItem.innerText = option.value;
        commentItem.setAttribute("contenteditable", "true");  // Make the comment editable
        commentsDiv.appendChild(commentItem);
    });

    const needsAttention = selectedOptions.some(option => attentionOptions.includes(option.value));
    if (needsAttention) {
        stationItem.classList.add("needs-attention");
    } else {
        stationItem.classList.remove("needs-attention");
    }

    if (selectedOptions.length > 0 && stationItem.dataset.selected === "false") {
        stationItem.classList.add("red");
        stationItem.dataset.selected = "true";
        redBarCount++;
    } else if (selectedOptions.length === 0 && stationItem.dataset.selected === "true") {
        stationItem.classList.remove("red");
        stationItem.dataset.selected = "false";
        redBarCount--;
    }

    // Save data and update red bar percentage
    saveData();
    updateRedBarPercentage();
}

// Function to mark a station as done and remove red color
function markAsDone(stationItem, optionsSelect) {
    stationItem.classList.remove("red", "needs-attention");
    stationItem.dataset.selected = "false";

    // Deselect all options in the dropdown
    optionsSelect.selectedIndex = 0;

    // Clear comments
    const commentsDiv = stationItem.querySelector(".comments");
    commentsDiv.innerHTML = "";

    // Clear extra comments
    const addCommentElement = stationItem.querySelector(".add-comment");
    addCommentElement.value = "";

    // Decrease redBarCount if station was marked as red
    if (redBarCount > 0) {
        redBarCount--;
    }

    // Save data and update red bar percentage
    saveData();
    updateRedBarPercentage();
}

// Function to update the red bar percentage
function updateRedBarPercentage() {
    const percentage = ((redBarCount / totalStations) * 100).toFixed(2);
    document.getElementById("totalRed").innerText = `Red Bar Percentage: ${percentage}%`;
}

// Function to create stations (this is just an example, adjust as needed)
function createStations() {
    const stationContainer = document.getElementById("station-container");
    for (let i = 1; i <= totalStations; i++) {
        const stationItem = document.createElement("div");
        stationItem.classList.add("station-item");
        stationItem.dataset.stationName = `Station ${i}`;
        stationItem.dataset.selected = "false";

        const optionsSelect = document.createElement("select");
        optionsSelect.classList.add("options-select");
        const option1 = document.createElement("option");
        option1.value = "Option1";
        option1.innerText = "Option 1";
        const option2 = document.createElement("option");
        option2.value = "Option2";
        option2.innerText = "Option 2";
        optionsSelect.append(option1, option2);

        const commentsDiv = document.createElement("div");
        commentsDiv.classList.add("comments");

        const markDoneButton = document.createElement("button");
        markDoneButton.innerText = "Done";
        markDoneButton.addEventListener("click", () => markAsDone(stationItem, optionsSelect));

        stationItem.append(optionsSelect, commentsDiv, markDoneButton);
        stationContainer.append(stationItem);

        // Event listener to toggle options and update comments
        optionsSelect.addEventListener("change", () => toggleOptions(stationItem, optionsSelect));
    }
}

// Initialize stations and load data from localStorage
createStations();
loadData();
