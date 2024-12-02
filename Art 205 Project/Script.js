// Modal for About Me  
const myPhoto = document.getElementById("my-photo");  
const modal = document.getElementById("myModal");  
const closeModal = document.getElementsByClassName("close")[0];  
		
if (myPhoto) {  
    myPhoto.onclick = function() {  
        modal.style.display = "block";  
    };  
}  

if (closeModal) {  
    closeModal.onclick = function() {  
        modal.style.display = "none";  
    };  
}  

window.onclick = function(event) {  
    if (event.target == modal) {  
        modal.style.display = "none";  
    }  
}  

// Contact Form Confirmation  
const contactForm = document.getElementById("contactForm");  
const confirmModal = document.getElementById("confirmModal");  
const confirmYes = document.getElementById("confirmYes");  
const confirmNo = document.getElementById("confirmNo");  

if (contactForm) {  
    contactForm.onsubmit = function(event) {  
        event.preventDefault(); // Stop form from submitting immediately  
        confirmModal.style.display = "block"; // Show confirmation modal  
    };  

    confirmYes.onclick = function() {  
        contactForm.submit(); // Submit the form  
    };  

    confirmNo.onclick = function() {  
        confirmModal.style.display = "none"; // Hide confirmation modal  
    };  
}  

window.onclick = function(event) {  
    if (event.target == confirmModal) {  
        confirmModal.style.display = "none";  
    }  
}  
