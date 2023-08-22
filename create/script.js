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

document.addEventListener('DOMContentLoaded', function() {
    
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
    
    const appliedFilters = {
        relevance: true,
        price: false,
        volume: false,
        ppl: false,
        minprice: 1,
        maxprice: 10,
        minlitres: 1,
        maxlitres: 7,
        carbonated: true,
        alcoholic: true,
        small: true,
        medium: true,
        large: true
    };

    const drinksIsFilteredCondition = (appliedFilters, DrinkType) => 
    (appliedFilters.minlitres <= DrinkType.litres && appliedFilters.maxlitres >= DrinkType.litres) &&
    (appliedFilters.minprice <= DrinkType.price && appliedFilters.maxprice >= DrinkType.price) &&
    ((appliedFilters.small == true && DrinkType.size == 1) || 
    (appliedFilters.medium == true && DrinkType.size == 2) || 
    (appliedFilters.large == true && DrinkType.size == 3)) &&
    (appliedFilters.carbonated == DrinkType.carbonated) && 
    (appliedFilters.alcoholic == DrinkType.alcoholic)
    
    // CARBONATED/ALCOHOLIC 0 = no; 1 = yes; 2 = both //
    // RELEVANCE, LITRES, PRICE, CARBONATED, BOTH CARBONATED AND NOT, ALCOHOLIC, BOTH ALCOHOLIC AND NOT, SIZE //
    let drinks = [
    
        new DrinkType(1, 1, 1, (true || false), (true || false), 1), // 100ml can (small)
        new DrinkType(2, 2, 2, true, false, 1), // 250ml can (medium)
        new DrinkType(3, 3, 3, true, false, 2), // 500ml can (large)
        
        new DrinkType(4, 4, 4, false, false, 2), // 750ml water bottle
        new DrinkType(5, 3, 3, (true || false), false, 2), // 500ml bottle
        new DrinkType(6, 3, 5, true, false, 2), // 500ml glass bottle
    
        new DrinkType(7, 5, 5, (true || false), false, 3), // 1000ml bottle (small)
        new DrinkType(8, 6, 7, true, false, 3), // 1500ml bottle (medium)
        new DrinkType(9, 7, 8, true, false, 3), // 2000ml bottle (large)
        
        new DrinkType(10, 3, 6, (true || false), true, 2), // 500ml beer bottle
        new DrinkType(11, 5, 9, (true || false), true, 3), // 1000ml whine bottle
        new DrinkType(12, 5, 10, (true || false), true, 3) // 1000ml champagne bottle
        
    ]

    function hideElement(elementID) {
        console.log(appliedFilters)
        console.log(DrinkType)
        var elementToHide = document.getElementById(elementID);
        elementToHide.style.display = 'none';
    }
    
    function showElement(elementID) {
        var elementToHide = document.getElementById(elementID);
        elementToHide.style.display = 'flex';
    }
    
    function renderDrinks(filteredDrinks, unFilteredDrinks)
    {
        for (let drink of filteredDrinks) {
            showElement(drink.relevance)
        }
        for (let drink of unFilteredDrinks) {
            hideElement(drink.relevance)
        }
    }
    
    function getFilteredDrinks(DrinkType, appliedFilters)
    {
        return DrinkType.filter( DrinkType => drinksIsFilteredCondition(appliedFilters, DrinkType,))
    };
    
    function getUnFilteredDrinks(DrinkType, appliedFilters)
    {
        return DrinkType.filter( DrinkType => !drinksIsFilteredCondition(appliedFilters, DrinkType))
    };

    renderDrinks(getFilteredDrinks(drinks, appliedFilters), getUnFilteredDrinks(drinks, appliedFilters))
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



// FILTERING SYSTEM //

// carbonated/alcoholic 0 = no; 1 = yes; 2 = both;
// size 1 = small; 2 = medium; 3 = large;




