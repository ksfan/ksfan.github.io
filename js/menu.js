function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(function (section) {
        section.classList.remove('active');
    });
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.classList.add('active');
    }

    const allMenuItems = document.querySelectorAll('.dropdown-menu li');
    allMenuItems.forEach(item => {
        if(item.id === 'dropdown-'+ sectionId) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    const allSideMenuItems = document.querySelectorAll('.side-menu li');
    allSideMenuItems.forEach(item => {
        if(item.id === 'side-'+ sectionId) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    if(sectionId === 'math') {
        document.getElementById('academics-container').style.backgroundImage = "url('img/slides/1.jpg')";
    } else {
        document.getElementById('academics-container').style.backgroundImage = 'none'; 
    }

}

document.addEventListener("DOMContentLoaded", () => {
    // Check if a hash is present in the URL
    const hash = window.location.hash;
    if (hash) {
        // Remove the '#' and handle the section
        const section = hash.substring(1); // Remove '#'
        showSection(section); // Call your existing function to handle the section
    }
});