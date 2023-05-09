const showSection = (sectionId) => {
  // Hide all content sections
  const contentSections = document.querySelectorAll('.content-section');
  contentSections.forEach((section) => {
    section.classList.add('hidden');
  });

  // Show the selected content section
  const selectedSection = document.getElementById(sectionId);
  selectedSection.classList.remove('hidden');
};

function init() {
  // Add event listeners to the navigation links
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      // Remove active class from all nav items
      navLinks.forEach((navLink) => {
        navLink.classList.remove('active');
      });

      // Add active class to the clicked nav item
      link.classList.add('active');

      const sectionId = link.getAttribute('href').substring(1);
      showSection(sectionId);
    });
  });
}
export default init;