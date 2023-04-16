var categoryList = document.querySelectorAll('.category-list');
var categoryM = document.getElementById('category-m');
var description = document.getElementById('description');
var descriptionContainer = document.getElementById('description-container');
var dropdownList = document.getElementById('dropdown-list');
var categoryContainer = document.getElementById('category-container');
var dateContainer = document.getElementById('date-container');
var date = document.getElementById('date');




for(let i of categoryList) {

    if(i.innerText == "Personal") {
        i.style.backgroundColor = 'lightblue';
    }

    else if(i.innerText == "Work") {
        i.style.backgroundColor = 'purple';
    }

    else if(i.innerText == "School") {
        i.style.backgroundColor = 'yellow';
    }

    else if(i.innerText == "Cleaning") {
        i.style.backgroundColor = 'green';
    }

    else if(i.innerText == "Other") {
        i.style.backgroundColor = 'pink';
    }
}


descriptionContainer.addEventListener("mouseover", () => {
    description.style.backgroundColor = "gainsboro";
    descriptionContainer.style.backgroundColor = "gainsboro";
});

descriptionContainer.addEventListener("mouseout", () => {
    description.style.backgroundColor = "white"
    descriptionContainer.style.backgroundColor = "white";
});


categoryContainer.addEventListener("mouseover", () => {
    categoryContainer.style.backgroundColor = "gainsboro";
    dropdownList.style.backgroundColor = "gainsboro";
});

categoryContainer.addEventListener("mouseout", () => {
    categoryContainer.style.backgroundColor = "white";
    dropdownList.style.backgroundColor = "white";
});


dateContainer.addEventListener("mouseover", () => {
    dateContainer.style.backgroundColor = "gainsboro"
    date.style.backgroundColor = "gainsboro";
});

dateContainer.addEventListener("mouseout", () => {
    dateContainer.style.backgroundColor = "white"
    date.style.backgroundColor = "white";
});