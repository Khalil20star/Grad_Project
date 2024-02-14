(function (window) {
    function define_library() {
        var vanillaZoom = {};
        vanillaZoom.init = function (el) {

            var container = document.querySelector(el);
            if (!container) {
                console.error('No container element. Please make sure you are using the right markup.');
                return;
            }

            var firstSmallImage = container.querySelector('.small-preview');
            var zoomedImage = container.querySelector('.zoomed-image');

            if (!zoomedImage) {
                console.error('No zoomed image element. Please make sure you are using the right markup.');
                return;
            }

            if (!firstSmallImage) {
                console.error('No preview images on page. Please make sure you are using the right markup.');
                return;
            }
            else {
                // Set the source of the zoomed image.
                zoomedImage.style.backgroundImage = 'url(' + firstSmallImage.src + ')';
                firstSmallImage.classList.add('active');
            }

            // Change the selected image to be zoomed when clicking on the previews.
            container.addEventListener("click", function (event) {
                var elem = event.target;

                if (elem.classList.contains("small-preview")) {

                    var allSmallPreviews = container.querySelectorAll(".small-preview");

                    allSmallPreviews.forEach(function (preview) {
                        preview.classList.remove('active');
                    })

                    elem.classList.add('active');

                    var imageSrc = elem.src;
                    zoomedImage.style.backgroundImage = 'url(' + imageSrc + ')';
                }
            });

            // Zoom image on mouse enter.
            zoomedImage.addEventListener('mouseenter', function (e) {
                this.style.backgroundSize = "250%";
            }, false);


            // Show different parts of image depending on cursor position.
            zoomedImage.addEventListener('mousemove', function (e) {

                // getBoundingClientReact gives us various information about the position of the element.
                var dimentions = this.getBoundingClientRect();

                // Calculate the position of the cursor inside the element (in pixels).
                var x = e.clientX - dimentions.left;
                var y = e.clientY - dimentions.top;

                // Calculate the position of the cursor as a percentage of the total width/height of the element.
                var xpercent = Math.round(100 / (dimentions.width / x));
                var ypercent = Math.round(100 / (dimentions.height / y));

                // Update the background position of the image.
                this.style.backgroundPosition = xpercent + '% ' + ypercent + '%';

            }, false);


            // When leaving the container zoom out the image back to normal size.
            zoomedImage.addEventListener('mouseleave', function (e) {
                this.style.backgroundSize = "contain";
                this.style.backgroundPosition = "left center";
            }, false);

        }
        return vanillaZoom;
    }

    // Add the vanillaZoom object to global scope.
    if (typeof (vanillaZoom) === 'undefined') {
        window.vanillaZoom = define_library();
    }
    else {
        console.log("Library already defined.");
    }


})
function toggleMedicationTextbox() {
    var selectElement = document.getElementById("medication_select");
    var textboxElement = document.getElementById("medication_textbox");
    textboxElement.style.display = selectElement.value === "yes" ? "block" : "none";
}
function toggleMedication() {
    var selectElement = document.getElementById("medication_select_allergies");
    var textboxElement = document.getElementById("medication_text_allergies");
    textboxElement.style.display = selectElement.value === "yes" ? "block" : "none";
}
function validateForm() {
    // Get the values of the form fields
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    // Check the name
    if (!name || !/^[a-zA-Z\s-]+$/.test(name)) {
        alert('Please enter a valid name.');
        return false;
    }

    // Check the phone number
    if (!phone || !/^\d+(?:\s|\()?\d+(?:\s|\))?\d+$/.test(phone)) {
        alert('Please enter a valid phone number.');
        return false;
    }

    // Check the location
    if (!city || !country) {
        alert('Please enter a valid location.');
        return false;
    }

    // Check the password
    if (!password || password.length < 8 ||
        !/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':\"\\|,<.>/?]).*$/.test(password)) {
        alert('Please enter a strong password.');
        return false;
    }

    // Check the email
    if (!email || !/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // If all the checks pass, submit the form
    return true;
}

// Add an event listener to the form's submit event
document.getElementById('myForm').addEventListener('submit', validateForm);

(window);