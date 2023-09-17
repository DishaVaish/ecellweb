// Get all elements with class "block"
const blocks = document.querySelectorAll('.block4');

// Add a click event listener to each block
blocks.forEach(block => {
    block.addEventListener('click', () => {
        // Change the background color on click
        block.style.backgroundColor = '#ff0000'; // Use a function to generate a random color
    });
});
// Get all elements with class "block"
// const blockss = document.querySelectorAll('.block4');

// // Get the last square element
// const lastSquare = document.getElementById('block4');

// Initialize a counter to keep track of clicks
let clickCounter = 0;

// Add a click event listener to each block
blockss.forEach(block => {
    block.addEventListener('click', () => {
        clickCounter++;
        block.style.backgroundColor = '00f'; // Change the color of clicked block to blue
        block.textContent = `Click ${clickCounter}`; // Update the text to show the click order
        if (block === lastSquare) {
            // If the last square is clicked, change all block colors to blue in sequence
            blockss.forEach((b, index) => {
                setTimeout(() => {
                    b.style.backgroundColor = '00f'; // Blue color
                    b.textContent = `Click ${index + 1}`;
                }, index * 500); // Delay the color change by 500 milliseconds for each block
            });
        }
    });
});

// function toggleMenu() {
//     var navlinks = document.querySelector('.navlinks');
//     navlinks.classList.toggle('show');
//   }

    // Get references to the elements
    // const menubutton = document.querySelector('.menubutton');
    // const navlinks = document.querySelector('ul');

    // // Toggle the navigation links on menu button click
    // menuButton.addEventListener('click', () => {
    //     navlinks.classList.toggle('show');
    // });
  
    var div=document.getElementById('navlinks');
    var display=0;
    function hideshow()
    {
        if(display==1)
        {
            div.style.display('block');
            display=0;
        }
        else
        {
            div.style.display='none';
            display=1;
        }
    }
