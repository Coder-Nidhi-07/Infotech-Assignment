// document.addEventListener('DOMContentLoaded', () => {
//     const hamburger = document.querySelector('.hamburger-menu');
//     const navLinks = document.querySelector('.nav-links');

//     hamburger.addEventListener('click', () => {
//         navLinks.classList.toggle('active');
//     });
// });

// // document.addEventListener("DOMContentLoaded", function () {
// //   const heroContent = document.querySelector(".hero-content");
// //   const heroText = document.querySelector(".hero-text");
// //   const heroImage = document.querySelector(".hero-image");

// //   const adjustLayout = () => {
// //     const isMobile = window.innerWidth <= 992;

// //     if (isMobile) {
// //       // On mobile, move the image to be the first item in the container
// //       heroContent.insertBefore(heroImage, heroText);
// //     } else {
// //       // On desktop, move the text back to be the first item (original order)
// //       heroContent.insertBefore(heroText, heroImage);
// //     }
// //   };

// //   adjustLayout();

// //   // Run the function again whenever the window is resized
// //   window.addEventListener("resize", adjustLayout);
// // });
// document.addEventListener("DOMContentLoaded", () => {
//   const hamburger = document.querySelector(".hamburger-menu");
//   const navLinks = document.querySelector(".nav-links");

//   hamburger.addEventListener("click", () => {
//     navLinks.classList.toggle("active");
//   });

//   // Close menu when clicking a link
//   document.querySelectorAll(".nav-links a").forEach(link => {
//     link.addEventListener("click", () => {
//       navLinks.classList.remove("active");
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger-menu");
  const sidebar = document.querySelector(".mobile-sidebar");
  const closeBtn = document.querySelector(".close-btn");

  hamburger.addEventListener("click", () => {
    sidebar.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });

  // Close sidebar on clicking any link
  document.querySelectorAll(".sidebar-links a").forEach(link => {
    link.addEventListener("click", () => {
      sidebar.classList.remove("active");
    })
  });
});
