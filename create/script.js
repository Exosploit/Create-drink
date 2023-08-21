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


// carb/alc 0 = no; 1 = yes; 2 = both;
// size 1 = small; 2 = medium; 3 = large;

class appliedFilters {
    relev = true;
    price = false;
    volume = false;
    ppl = false;
    carb = 2;
    alc = 2;
    minlitres = 0;
    maxlitres = 2000;
    minprice = 0;
    minprice = 299;
    small = true;
    medium = true;
    large = true;
}

// Cans

class smallCan {
    relev = 0;
    litres = 0.1;
    price = 0.19;
    ppl = price / litres;
    carb = 2;
    alc = 2;
    size = 1;
}

class mediumCan {
    relev = 1;
    litres = 0.25;
    price = 0.39;
    ppl = price / litres;
    carb = 2;
    alc = 2;
    size = 1;
}

class largeCan {
    relev = 2;
    litres = 0.5;
    price = 0.49;
    ppl = price / litres;
    carb = 2;
    alc = 0;
    size = 2;
}

// Bottles

class waterBottle {
    relev = 3;
    litres = 0.75;
    price = 0.49;
    ppl = price / litres;
    carb = 0;
    alc = 0;
    size = 2;
}

class sodaBottle {
    relev = 4;
    litres = 0.5;
    price = 0.69;
    ppl = price / litres;
    carb = 2;
    alc = 0;
    size = 2;
}

class glassBottle {
    relev = 5;
    litres = 0.5;
    price = 1.19;
    ppl = price / litres;
    carb = 2;
    alc = 0;
    size = 2;
}

// Large Bottles

class largeBottle {
    relev = 6;
    litres = 1;
    price = 1.19;
    ppl = price / litres;
    carb = 2;
    alc = 0;
    size = 3;
}

class xlargeBottle {
    relev = 7;
    litres = 1.5;
    price = 1.59;
    ppl = price / litres;
    carb = 2;
    alc = 0;
    size = 3;
}

class xxlargeBottle {
    relev = 8;
    litres = 2;
    price = 1.79;
    ppl = price / litres;
    carb = 2;
    alc = 0;
    size = 3;
}

// Alcoholics

class beerBottle {
    relev = 9;
    litres = 0.5;
    price = 1.39;
    ppl = price / litres;
    carb = 2;
    alc = 1;
    size = 3;
}

class whineBottle {
    relev = 10;
    litres = 1;
    price = 2.39;
    ppl = price / litres;
    carb = 2;
    alc = 1;
    size = 3;
}

class champagneBottle {
    relev = 11;
    litres = 1;
    price = 2.99;
    ppl = price / litres;
    carb = 2;
    alc = 1;
    size = 3;
}