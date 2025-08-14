 function toggleSection(id) {
      const section = document.getElementById(id);
      section.classList.toggle("hidden");
    }

    function toggleDarkMode() {
      document.body.classList.toggle("dark-mode");
    }