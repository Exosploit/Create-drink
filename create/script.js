// script.js

document.addEventListener('DOMContentLoaded', function() {
    const filtersContainer = document.querySelector('.filters-container');
    const filterElements = Array.from(document.querySelectorAll('.filters'));

    const activeFilters = filterElements.filter(filter => filter.classList.contains('active'));
    const inactiveFilters = filterElements.filter(filter => !filter.classList.contains('active'));

    filtersContainer.innerHTML = '';

    activeFilters.forEach(filter => filtersContainer.appendChild(filter));
    inactiveFilters.forEach(filter => filtersContainer.appendChild(filter));

    filterElements.forEach(filter => {
        filter.addEventListener('click', () => {
            filter.classList.toggle('active');
            sortFilters();
        });
    });

    sortFilters();
});

function sortFilters() {
    const filtersContainer = document.querySelector('.filters-container');
    const filterElements = Array.from(document.querySelectorAll('.filters'));

    const activeFilters = filterElements.filter(filter => filter.classList.contains('active'));
    const inactiveFilters = filterElements.filter(filter => !filter.classList.contains('active'));

    filtersContainer.innerHTML = '';

    activeFilters.forEach(filter => filtersContainer.appendChild(filter));
    inactiveFilters.forEach(filter => filtersContainer.appendChild(filter));
}

document.addEventListener('DOMContentLoaded', function() {
    const filtersContainer = document.querySelector('.filters-container-size');
    const filterElements = Array.from(document.querySelectorAll('.filters-size'));

    const activeFilters = filterElements.filter(filter => filter.classList.contains('active'));
    const inactiveFilters = filterElements.filter(filter => !filter.classList.contains('active'));

    filtersContainer.innerHTML = '';

    activeFilters.forEach(filter => filtersContainer.appendChild(filter));
    inactiveFilters.forEach(filter => filtersContainer.appendChild(filter));

    filterElements.forEach(filter => {
        filter.addEventListener('click', () => {
            filter.classList.toggle('active');
            sortFilters();const selectedFilters = Array.from(document.querySelectorAll('.filters-size.active'));
            if (selectedFilters.length === 0) {
                filter.classList.add('active');
                sortFilters();
            }
        });
    });
});

// Get each filter element by its ID
const nonCarbonatedFilter = document.getElementById('non-carbonated');
const alcoholicFilter = document.getElementById('alcoholic');
const carbonatedFilter = document.getElementById('carbonated');
const nonAlcoholicFilter = document.getElementById('non-alcoholic');

// Define click event handling functions for each filter
function nonCarbonatedFilterClick() {
    // Add your custom logic for the non-carbonated filter here
}

function alcoholicFilterClick() {
    // Add your custom logic for the alcoholic filter here
}

function carbonatedFilterClick() {
    // Add your custom logic for the carbonated filter here
}

function nonAlcoholicFilterClick() {
    // Add your custom logic for the non-alcoholic filter here
}

// Attach the appropriate click event handlers to each filter
nonCarbonatedFilter.addEventListener('click', nonCarbonatedFilterClick);
alcoholicFilter.addEventListener('click', alcoholicFilterClick);
carbonatedFilter.addEventListener('click', carbonatedFilterClick);
nonAlcoholicFilter.addEventListener('click', nonAlcoholicFilterClick);

const styleContainers = document.querySelectorAll('.style-container');

styleContainers.forEach((container) => {
  const styleDivs = container.querySelectorAll('.style');

  styleDivs.forEach((div) => {
    div.addEventListener('click', () => {
      styleDivs.forEach((div) => {
        div.classList.remove('active');
      });

      // ADD SOME TYPE OF MEMORY OF WHICH IS SELECTED
      div.classList.add('active');
    });
  });
});


const styleDivs = document.querySelectorAll('.drinks');

styleDivs.forEach((div) => {
  div.addEventListener('click', () => {
    styleDivs.forEach((div) => {
      div.classList.remove('active');
    });

    // ADD SOME TYPE OF MEMORY OF WHICH IS SELECTED
    div.classList.add('active');
  });
});

// carbonated/alcoholic 0 = no; 1 = yes; 2 = both;
// size 1 = small; 2 = medium; 3 = large;

const appliedFilters = {
    relevance: true,
    price: false,
    volume: false,
    ppl: false,
    minprice: 1,
    maxprice: 11,
    minlitres: 1,
    maxlitres: 7,
    carbonated: 2,
    alcoholic: 2,
    small: true,
    medium: true,
    large: true
};

// FILTERING SYSTEM //

class DrinkType {

    constructor(relevance, litres, price, carbonated, alcoholic, size) { 
        this.relevance = relevance;
        this.litres = litres;
        this.price = price;
        this.ppl = price / litres;
        this.carbonated = carbonated;
        this.alcoholic = alcoholic;
        this.size = size;
    }

}

function hideElement(elementID) {
        var elementToHide = document.getElementById(elementID);
        elementToHide.style.display = 'none';
}

function showElement(elementID) {
    var elementToHide = document.getElementById(elementID);
    elementToHide.style.display = 'flex';
}

function filter(drinks, appliedFilters)
{
    return drinks.filter( drink =>
    {
        let matches = true

        if ((appliedFilters.minlitres <= drink.litres && appliedFilters.maxlitres >= drink.litres) &&
        (appliedFilters.minprice <= drink.price && appliedFilters.maxprice >= drink.price) &&
        (appliedFilters.small == true && drink.size == 1) || 
        (appliedFilters.medium == true && drink.size == 2) || 
        (appliedFilters.large == true && drink.size == 3) &&
        (appliedFilters.carbonated == drink.carbonated) &&
        (appliedFilters.alcoholic == drink.alcoholic)) 
        {
            showElement() // GET ID AND INSERT
        }
        else {
            hideElement() // GET ID AND INSERT
        };

        matches = matches && drink.size === options.size

        return matches
    }
    )
};


// CARBONATED/ALCOHOLIC 0 = no; 1 = yes; 2 = both
// RELEVANCE, LITRES, PRICE, CARBONATED, ALCOHOLIC, SIZE //
let smallCan = new DrinkType(0, 0.1, 0.19, 2, 2, 1)
let mediumCan = new DrinkType(1, 0.25, 0.39, 2, 2, 1)
let largeCan = new DrinkType(2, 0.5, 0.49, 2, 0, 2)

let waterBottle = new DrinkType(3, 0.75, 0.49, 0, 0, 2)
let sodaBottle = new DrinkType(4, 0.5, 0.69, 2, 0, 2)
let glassBottle = new DrinkType(5, 0.5, 1.19, 2, 0, 2)

let bigBottle = new DrinkType(6, 1, 1.19, 2, 0, 3)
let largeBottle = new DrinkType(7, 1.5, 1.59, 2, 0, 3)
let hugeBottle = new DrinkType(8, 2, 1.79, 2, 0, 3)

let beerBottle = new DrinkType(9, 0.5, 1.39, 2, 1, 2)
let whineBottle = new DrinkType(10, 1, 2.39, 2, 1, 3)
let champagneBottle = new DrinkType(11, 1, 2.99, 2, 1, 3)