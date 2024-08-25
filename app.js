const wrapper = document.querySelector(".sliderWrapper");
const prevButton = document.querySelector(".prevButton");
const nextButton = document.querySelector(".nextButton");
let currentIndex = 0;
const totalSlides = 4; // Total number of slides
let sliderInterval;

// Function to apply the transformation
function moveSlider(index)
{
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
}

// Timer to move the slider every 3 seconds and loop through the slides
function startSlider()
{
    sliderInterval = setInterval(() =>
    {
        currentIndex = (currentIndex + 1) % totalSlides; // Loop back to the first slide after the last one
        moveSlider(currentIndex);
    }, 5000); // transform takes 2 secs if it was 1 sec, the user won't be able to see the content
}

// Start the slider on page load
startSlider();

// Add click event to the "Previous" button
prevButton.addEventListener("click", () => {
    clearInterval(sliderInterval); // Stop the timer when clicking
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Loop back to the last slide if on the first
    moveSlider(currentIndex);
    startSlider(); // Restart the timer after the click
});

// Add click event to the "Next" button
nextButton.addEventListener("click", () => {
    clearInterval(sliderInterval); // Stop the timer when clicking
    currentIndex = (currentIndex + 1) % totalSlides; // Loop back to the first slide if on the last
    moveSlider(currentIndex);
    startSlider(); // Restart the timer after the click
});


//End of Slider
//////////////////////////////////////////////////////////////////////////////////////////////////////////






// JSON to HTML
/*
document.addEventListener('DOMContentLoaded', () => {
    fetch('FakeCoffeeAPI.json')
        .then(response => response.json())
        .then(data => {
            const productsContainer = document.querySelector('.products');

            data.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.className = 'product';



                const img = document.createElement('img');
                img.src = product.image_url ; // Replace with a default image or handle missing image
                img.alt = product.name;
                img.className = 'productImg';

                const productDetailsDiv = document.createElement('div');
                productDetailsDiv.className = 'productDetails';

                const title = document.createElement('h1');
                title.className = 'productTitle';
                title.textContent = product.name;

                const price = document.createElement('h2');
                price.className = 'productPrice';
                price.textContent = `$${product.price.toFixed(2)}`;

                const description = document.createElement('h2');
                description.className = 'productDesc';
                description.textContent = product.description;

                const weight = document.createElement('h3');
                weight.className = 'productWeight';
                weight.textContent = `${product.weight} gram`;

                const region = document.createElement('h3');
                region.className = 'productRegion';
                region.textContent = product.region;

                const roastLevel = document.createElement('h3');
                roastLevel.className = 'productRoastLevel';
                roastLevel.textContent =  `roast level ${product.roast_level}/5`;

                const flavorProfile = document.createElement('h4');
                flavorProfile.className = 'productFlavorProfile';
                flavorProfile.textContent = product.flavor_profile.join(', ');

                const grindOptionDiv = document.createElement('div');
                grindOptionDiv.className = 'grindOption';
                if (product.grindOptions && product.grindOptions.length > 0) {
                    const grindOptionsList = document.createElement('ul');
                    product.grindOptions.forEach(option => {
                        const listItem = document.createElement('li');
                        listItem.textContent = option;
                        grindOptionsList.appendChild(listItem);
                    });
                    grindOptionDiv.appendChild(grindOptionsList);
                }

                const addButton = document.createElement('button');
                addButton.className = 'productButton';
                addButton.textContent = 'Add To Cart';
                addButton.addEventListener('click', () =>
                {
                    // Handle add to cart logic
                    alert('Added to cart');
                });

                productDetailsDiv.appendChild(title);
                productDetailsDiv.appendChild(price);
                productDetailsDiv.appendChild(description);
                productDetailsDiv.appendChild(weight);
                productDetailsDiv.appendChild(roastLevel);
                productDetailsDiv.appendChild(region);
                productDetailsDiv.appendChild(flavorProfile);
                productDetailsDiv.appendChild(grindOptionDiv);
                productDetailsDiv.appendChild(addButton);

                productDiv.appendChild(img);
                productDiv.appendChild(productDetailsDiv);

                productsContainer.appendChild(productDiv);
            });
        })
        .catch(error => console.error('Error loading JSON:', error));
});*/

 total = document.querySelector(".total");
 total=0; // reset
document.addEventListener('DOMContentLoaded', () => {
    fetch('FakeCoffeeAPI.json')
        .then(response => response.json())
        .then(data => {
            const productsContainer = document.querySelector('.products');
            const products = data;
            data.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.className = 'product';

                // Product image
                const img = document.createElement('img');
                img.src = product.image_url; // Using the product's image URL from JSON
                img.alt = product.name;
                img.className = 'productImg';

                const productDetailsDiv = document.createElement('div');
                productDetailsDiv.className = 'productDetails';

                // Product title
                const title = document.createElement('h1');
                title.className = 'productTitle'; // Matches your class 'ProductTitle'
                title.textContent = product.name;

                // Product price
                const price = document.createElement('h2');
                price.className = 'productPrice'; // Matches your class 'price'
                price.textContent = `$${product.price.toFixed(2)}`;

                // Product description
                const description = document.createElement('h2');
                description.className = 'productDesc'; // Matches your class 'productDesc'
                description.textContent = product.description;

                // Product weight
                const weight = document.createElement('h3');
                weight.className = 'productWeight'; // Matches your class 'weight'
                weight.textContent = `${product.weight} gram`;

                // Product region
                const region = document.createElement('h3');
                region.className = 'productRegion'; // Matches your class 'region'
                region.textContent = product.region;

                // Product roast level
                const roastLevel = document.createElement('h3');
                roastLevel.className = 'productRoastLevel'; // Matches your class 'roastLevel'
                roastLevel.textContent = `Roast Level: ${product.roast_level}/5`; // Adjust according to your data

                // Product flavor profile
                const flavorProfile = document.createElement('h4');
                flavorProfile.className = 'productFlavorProfile'; // Matches your class 'flavorProfile'
                flavorProfile.textContent = product.flavor_profile.join(', ');


                // Add to cart button
                const addButton = document.createElement('button');
                addButton.className = 'productButton'; // Matches your class 'productButton'
                addButton.textContent = 'Add To Cart';
                addButton.addEventListener('click', () => {
                    // Handle add to cart logic
                    alert(`${product.name} added to cart!`);
                    total += parseFloat(product.price);
                    document.getElementById('totalValue').textContent = total.toFixed(2);
                });

                // Append all details to product details div
                productDetailsDiv.appendChild(title);
                productDetailsDiv.appendChild(price);
                productDetailsDiv.appendChild(description);
                productDetailsDiv.appendChild(weight);
                productDetailsDiv.appendChild(roastLevel);
                productDetailsDiv.appendChild(region);
                productDetailsDiv.appendChild(flavorProfile);
                productDetailsDiv.appendChild(addButton);

                // Append image and product details to main product div
                productDiv.appendChild(img);
                productDiv.appendChild(productDetailsDiv);

                // Append product div to container
                productsContainer.appendChild(productDiv);
            });
        })
        .catch(error => console.error('Error loading JSON:', error));
});


// Add to Cart Function


// scroll all the way uppppppppp

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})








