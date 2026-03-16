(function () {
    // Year in footer
    const y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  
    // Theme toggle (saved in localStorage)
    const themeToggle = document.getElementById("themeToggle");
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") document.body.classList.add("dark");
  
    if (themeToggle) {
      themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
      });
    }
  
    // Program modal dynamic content
    const progModal = document.getElementById("progModal");
    if (progModal) {
      progModal.addEventListener("show.bs.modal", (event) => {
        const btn = event.relatedTarget;
        const title = btn?.getAttribute("data-title") || "Programma";
        const desc = btn?.getAttribute("data-desc") || "";
        const age = btn?.getAttribute("data-age") || "";
  
        document.getElementById("progTitle").textContent = title;
        document.getElementById("progDesc").textContent = desc;
        document.getElementById("progAge").textContent = age;
      });
    }
  
    // News modal dynamic content
    const newsModal = document.getElementById("newsModal");
    if (newsModal) {
      newsModal.addEventListener("show.bs.modal", (event) => {
        const btn = event.relatedTarget;
        const title = btn?.getAttribute("data-title") || "Jaunums";
        const date = btn?.getAttribute("data-date") || "";
        const text = btn?.getAttribute("data-text") || "";
  
        document.getElementById("newsTitle").textContent = title;
        document.getElementById("newsDate").textContent = date;
        document.getElementById("newsText").textContent = text;
      });
    }
  
    // News filter
    const filter = document.getElementById("newsFilter");
    const items = Array.from(document.querySelectorAll(".news-item"));
  
    function applyFilter(value) {
      items.forEach((item) => {
        const cat = item.getAttribute("data-cat");
        const show = value === "all" || value === cat;
        item.classList.toggle("d-none", !show);
      });
    }
  
    if (filter) {
      filter.addEventListener("change", () => applyFilter(filter.value));
      applyFilter(filter.value);
    }
  
    // Apply form (demo)
    const applyForm = document.getElementById("applyForm");
    const applyMsg = document.getElementById("applyMsg");
  
    if (applyForm) {
      applyForm.addEventListener("submit", (e) => {
        e.preventDefault();
  
        const data = new FormData(applyForm);
        const payload = Object.fromEntries(data.entries());
  
        // Demo behavior: show success + reset
        if (applyMsg) {
          applyMsg.className = "small text-success";
          applyMsg.textContent = `Paldies! Pieteikums (demo) pieņemts: ${payload.parent}, ${payload.phone}.`;
        }
        applyForm.reset();
  
        // close modal after short delay
        setTimeout(() => {
          const modalEl = document.getElementById("pieteikumsModal");
          const modal = bootstrap.Modal.getInstance(modalEl);
          modal?.hide();
        }, 900);
      });
    }
  
    // Quick form (demo)
    const quickForm = document.getElementById("quickForm");
    const quickMsg = document.getElementById("quickFormMsg");
  
    if (quickForm) {
      quickForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const data = new FormData(quickForm);
        const payload = Object.fromEntries(data.entries());
  
        if (quickMsg) {
          quickMsg.className = "small text-success";
          quickMsg.textContent = `Saņemts (demo)! Sazināsimies ar ${payload.vards} pa tālruni ${payload.talrunis}.`;
        }
        quickForm.reset();
      });
    }
  
    // Privacy link demo
    const privacyLink = document.getElementById("privacyLink");
    if (privacyLink) {
      privacyLink.addEventListener("click", (e) => {
        e.preventDefault();
        alert("Privātuma politika (demo): šī ir parauga mājaslapa. Pievieno savu īsto politiku šeit.");
      });
    }
  
    // Copy iframe example for map
    const copyBtn = document.getElementById("copyMapCode");
    const mapCopyMsg = document.getElementById("mapCopyMsg");
  
    const iframeExample = `<iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..."
    width="100%" height="320" style="border:0;"
    allowfullscreen="" loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"></iframe>`;
  
    if (copyBtn) {
      copyBtn.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(iframeExample);
          if (mapCopyMsg) {
            mapCopyMsg.className = "small text-success";
            mapCopyMsg.textContent = "Ielīmēšanas kods nokopēts! (demo)";
          }
        } catch {
          if (mapCopyMsg) {
            mapCopyMsg.className = "small text-danger";
            mapCopyMsg.textContent = "Neizdevās nokopēt. Iespējams, pārlūks bloķē clipboard.";
          }
        }
      });
    }
  })();