let navbar = document.querySelector(".header .navbar");

document.querySelector("#menu-btn").onclick = () =>{
    navbar.classList.add('active');
};
document.querySelector("#close-navbar").onclick = () =>{
    navbar.classList.remove('active');
};

let registerbtn = document.querySelector('.account-form .register-btn');
let loginbtn = document.querySelector('.account-form .login-btn');

registerbtn.onclick = () =>{
    registerbtn.classList.add('active');
    loginbtn.classList.remove('active');
    document.querySelector('.account-form .login-form').classList.remove('active');
    document.querySelector('.account-form .register-form').classList.add('active');
};
loginbtn.onclick = () =>{
    registerbtn.classList.remove('active');
    loginbtn.classList.add('active');
    document.querySelector('.account-form .login-form').classList.add('active');
    document.querySelector('.account-form .register-form').classList.remove('active');
};

let accountform = document.querySelector(".account-form");

document.querySelector("#account-btn").onclick = () =>{
    accountform.classList.add('active');
};
document.querySelector("#close-form").onclick = () =>{
    accountform.classList.remove('active');
};




var swiper = new Swiper(".home-slider", {
    pagination: {
      el: ".swiper-pagination",
    //   type: "progressbar",
    },
    
    loop: true,
    grabCursor: true,
  });

 

  var swiper = new Swiper(".member-slider", {
    pagination: {
      el: ".swiper-pagination",
    },
    
    loop: true,
    grabCursor: true,
    spaceBetween:50,
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        991:{
            slidesPerView:3,
        },
    },
  });

  

  var swiper = new Swiper(".home-product-slider", {
    pagination: {
      el: ".swiper-pagination",
    },
    
    loop: true,
    grabCursor: true,
    spaceBetween:20,
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        991:{
            slidesPerView:3,
        },
    },
  });

  
  var swiper = new Swiper(".reviews-slider", {
    slidesPerView: 3,
    loop:true,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission from refreshing the page
  
    var form = event.target;
    var subject = "inquiry";
    var recipient = "info.medinst@gmail.com";
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
  
    // Construct the body content for the email
    var bodyContent = "Name: " + name + "\n"
                    + "Phone Number: " + phone + "\n"
                    + "Message: " + message;
  
    // Modify the form's action to include the recipient, subject, and body content
    form.action = "mailto:" + recipient + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(bodyContent);
  
    // Submit the form
    form.submit();
  });
  
 


  





