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
        });
    });
});

/* function sortFilters() {
    const filtersContainer = document.querySelector('.filters-container');
    const filterElements = Array.from(document.querySelectorAll('.filters'));

    const activeFilters = filterElements.filter(filter => filter.classList.contains('active'));
    const inactiveFilters = filterElements.filter(filter => !filter.classList.contains('active'));

    filtersContainer.innerHTML = '';

    activeFilters.forEach(filter => filtersContainer.appendChild(filter));
    inactiveFilters.forEach(filter => filtersContainer.appendChild(filter));
} */
document.addEventListener('DOMContentLoaded', function() {
    const filtersContainer = document.querySelector('.filters-container-size');
    const filterElements = Array.from(document.querySelectorAll('.filters-size'));

    filterElements.forEach(filter => {
        filter.addEventListener('click', () => {
            if (filter.classList.contains('active')) {
                filter.classList.remove('active');
            } else {
                filter.classList.add('active');
            }

        });
    });

    function getActiveFilters() {
        return filterElements.filter(filter => filter.classList.contains('active'));
    }
});


document.addEventListener('DOMContentLoaded', function filter() {
    
    class DrinkType {
    
        constructor(relevance, litres, price, size, carbonated, alcoholic, notcarbonated, notalcoholic) { 
            this.relevance = relevance;
            this.litres = litres;
            this.price = price;
            this.ppl = price / litres;
            this.size = size;
            this.carbonated = carbonated;
            this.alcoholic = alcoholic;
            this.notcarbonated = notcarbonated;
            this.notalcoholic = notalcoholic;
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
        alcoholic: false,
        notcarbonated: false, /* reverse from carb except if all is on */
        notalcoholic: true, /* reverse from carb except if all is on */
        small: true,
        medium: true,
        large: true,
        showall: true
    };

    const drinksIsFilteredCondition = (appliedFilters, drink) => 
    ((appliedFilters.minlitres <= drink.litres && appliedFilters.maxlitres >= drink.litres) &&
    (appliedFilters.minprice <= drink.price && appliedFilters.maxprice >= drink.price) &&
    ((appliedFilters.small && drink.size === 1) || 
    (appliedFilters.medium && drink.size === 2) || 
    (appliedFilters.large && drink.size === 3)) &&
    ((appliedFilters.carbonated && drink.carbonated) || 
    (appliedFilters.notcarbonated && drink.notcarbonated)) && 
    ((appliedFilters.alcoholic && drink.alcoholic) || 
    (appliedFilters.notalcoholic && drink.notalcoholic)) || appliedFilters.showall == true && ((appliedFilters.small && drink.size === 1) || 
    (appliedFilters.medium && drink.size === 2) || 
    (appliedFilters.large && drink.size === 3)) && (appliedFilters.minlitres <= drink.litres && appliedFilters.maxlitres >= drink.litres) &&
    (appliedFilters.minprice <= drink.price && appliedFilters.maxprice >= drink.price));
    
    // CARBONATED/ALCOHOLIC 0 = no; 1 = yes; 2 = both //
    // RELEVANCE, LITRES, PRICE, SIZE, CARBONATED, ALCOHOLIC, NOT CARBONATED, NOT ALCOHOLIC //
    let drinks = [ 
    
        new DrinkType(1, 1, 1, 1, true, true, true, true), // 100ml can (small)
        new DrinkType(2, 2, 2, 1, true, true, true, true), // 250ml can (medium)
        new DrinkType(3, 3, 3, 2, true, false, false, true), // 500ml can (large)
        
        new DrinkType(4, 4, 2, 2, false, false, true, true), // 750ml water bottle
        new DrinkType(5, 3, 4, 2, true, false, true, false), // 500ml bottle
        new DrinkType(6, 3, 5, 2, true, false, false, true), // 500ml glass bottle
    
        new DrinkType(7, 5, 5, 3, true, false, true, true), // 1000ml bottle (small)
        new DrinkType(8, 6, 7, 3, true, false, false, true), // 1500ml bottle (medium)
        new DrinkType(9, 7, 8, 3, true, false, false, true), // 2000ml bottle (large)
        
        new DrinkType(10, 3, 6, 2, true, true, true, false), // 500ml beer bottle
        new DrinkType(11, 5, 9, 3, false, true, true, false), // 1000ml whine bottle
        new DrinkType(12, 5, 10, 3, true, true, true, false) // 1000ml champagne bottle
        
    ]

    function hideElement(elementID) {
        console.log(appliedFilters)
        console.log(DrinkType)
        var elementToHide = document.getElementById(elementID);
        elementToHide.style.display = 'none';
    }
    
    function showElement(elementID) {
        var elementToShow = document.getElementById(elementID);
        elementToShow.style.display = 'flex';
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

    // FILTER BUTTONS
    
    const showAllButton = document.getElementById('showall');
    const alcoholicFilterButton = document.getElementById('alcoholic');
    const carbonatedFilterButton = document.getElementById('carbonated');
    const smallFilterButton = document.getElementById('small');
    const mediumFilterButton = document.getElementById('medium');
    const largeFilterButton = document.getElementById('large');
    const minPriceSlider = document.getElementById('minprice');
    const maxPriceSlider = document.getElementById('maxprice');
    const minVolumeSlider = document.getElementById('minvolume');
    const maxVolumeSlider = document.getElementById('maxvolume');
    const resetPriceButton = document.getElementById('resetprice');
    const resetVolumeButton = document.getElementById('resetvolume');
    

    // FIX THIS!
    function showAllClick() {
        appliedFilters.showall = !appliedFilters.showall
        renderDrinks(getFilteredDrinks(drinks, appliedFilters), getUnFilteredDrinks(drinks, appliedFilters))
    }

    // WORKS
    
    function alcoholicFilterClick() {
        appliedFilters.alcoholic = !appliedFilters.alcoholic;
        appliedFilters.notalcoholic = !appliedFilters.alcoholic;
        renderDrinks(getFilteredDrinks(drinks, appliedFilters), getUnFilteredDrinks(drinks, appliedFilters))
    }

    function carbonatedFilterClick() {
        appliedFilters.carbonated = !appliedFilters.carbonated;
        appliedFilters.notcarbonated = !appliedFilters.carbonated;
        renderDrinks(getFilteredDrinks(drinks, appliedFilters), getUnFilteredDrinks(drinks, appliedFilters))
    }

    function smallFilterClick() {
        appliedFilters.small = !appliedFilters.small
        renderDrinks(getFilteredDrinks(drinks, appliedFilters), getUnFilteredDrinks(drinks, appliedFilters))
    }

    function mediumFilterClick() {
        appliedFilters.medium = !appliedFilters.medium
        renderDrinks(getFilteredDrinks(drinks, appliedFilters), getUnFilteredDrinks(drinks, appliedFilters))
    }

    function largeFilterClick() {
        appliedFilters.large = !appliedFilters.large
        renderDrinks(getFilteredDrinks(drinks, appliedFilters), getUnFilteredDrinks(drinks, appliedFilters))
    }
    
    function minPriceChanged() {
        appliedFilters.minprice = minPriceSlider.value;
        renderDrinks(getFilteredDrinks(drinks, appliedFilters), getUnFilteredDrinks(drinks, appliedFilters))
    }

    function maxPriceChanged() {
        appliedFilters.maxprice = maxPriceSlider.value
        renderDrinks(getFilteredDrinks(drinks, appliedFilters), getUnFilteredDrinks(drinks, appliedFilters))
    }

    function minVolumeChanged() {
        appliedFilters.minlitres = minVolumeSlider.value;
        renderDrinks(getFilteredDrinks(drinks, appliedFilters), getUnFilteredDrinks(drinks, appliedFilters))
    }

    function maxVolumeChanged() {
        appliedFilters.maxlitres = maxVolumeSlider.value;
        renderDrinks(getFilteredDrinks(drinks, appliedFilters), getUnFilteredDrinks(drinks, appliedFilters))
    }

    function resetPrice() {
        minPriceSlider.value = 1
        maxPriceSlider.value = 11
        appliedFilters.minprice = 1
        appliedFilters.maxprice = 11
        renderDrinks(getFilteredDrinks(drinks, appliedFilters), getUnFilteredDrinks(drinks, appliedFilters))
    }

    
    function resetVolume() {
        minVolumeSlider.value = 1
        maxVolumeSlider.value = 7
        appliedFilters.minlitres = 1
        appliedFilters.maxlitres = 7
        renderDrinks(getFilteredDrinks(drinks, appliedFilters), getUnFilteredDrinks(drinks, appliedFilters))
    }
    


    // Attach the appropriate click event handlers to each filter
    showAllButton.addEventListener('click', showAllClick);
    alcoholicFilterButton.addEventListener('click', alcoholicFilterClick);
    carbonatedFilterButton.addEventListener('click', carbonatedFilterClick);
    smallFilterButton.addEventListener('click', smallFilterClick);
    mediumFilterButton.addEventListener('click', mediumFilterClick);
    largeFilterButton.addEventListener('click', largeFilterClick);
    minPriceSlider.addEventListener('input', minPriceChanged);
    maxPriceSlider.addEventListener('input', maxPriceChanged);
    minVolumeSlider.addEventListener('input', minVolumeChanged);
    maxVolumeSlider.addEventListener('input', maxVolumeChanged);
    resetPriceButton.addEventListener('click', resetPrice);
    resetVolumeButton.addEventListener('click', resetVolume);
});

// Get each filter element by its ID

const styleContainers = document.querySelectorAll('.style-container');

styleContainers.forEach((container) => {
  const styleDivs = container.querySelectorAll('.style');

  styleDivs.forEach((div) => {
    div.addEventListener('click', () => {
      styleDivs.forEach((div) => {
        div.classList.remove('active');
      });

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

    div.classList.add('active');
  });
});