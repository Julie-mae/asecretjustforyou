
document.addEventListener("DOMContentLoaded", () => {

  const pages = document.querySelectorAll(".story-page");

  // TRACK WHICH LETTERS ARE OPEN
  const openedLetters = {
    first: false,
    final: false
  };

  // PAGE NAVIGATION
  function showPage(pageNumber) {

    // Page 3 requires opening the first letter
    if (pageNumber === 3 && !openedLetters.first) {
      pageNumber = 2;
    }

    pages.forEach(page => {
      page.classList.remove("active-page");
    });

    const nextPage = document.getElementById(
      "page" + pageNumber
    );

    if (!nextPage) return;

    nextPage.classList.add("active-page");

    window.scrollTo(0, 0);
  }

  // NEXT AND BACK BUTTONS
  document.querySelectorAll("[data-page]").forEach(button => {

    button.addEventListener("click", () => {

      const targetPage = Number(
        button.getAttribute("data-page")
      );

      showPage(targetPage);

    });

  });

  // FIRST ENVELOPE
  const firstEnvelope =
    document.getElementById("firstEnvelope");

  const firstLetter =
    document.getElementById("firstLetter");

  const firstHint =
    document.getElementById("firstHint");

  firstEnvelope.addEventListener("click", () => {

    if (openedLetters.first) return;

    openedLetters.first = true;

    firstEnvelope.classList.add("open");
    firstEnvelope.setAttribute("aria-expanded", "true");

    firstHint.textContent =
      "A little letter, finally opened.";

    setTimeout(() => {
      firstLetter.hidden = false;
    }, 1200);

  });

  // FINAL CONFESSION ENVELOPE
  const finalEnvelope =
    document.getElementById("finalEnvelope");

  const finalLetter =
    document.getElementById("finalLetter");

  const finalHint =
    document.getElementById("finalHint");

  finalEnvelope.addEventListener("click", () => {

    if (openedLetters.final) return;

    openedLetters.final = true;

    finalEnvelope.classList.add("open");
    finalEnvelope.setAttribute("aria-expanded", "true");

    finalHint.textContent =
      "Some feelings are worth sharing.";

    setTimeout(() => {
      finalLetter.hidden = false;
    }, 1200);

  });

  // INITIAL PAGE
  showPage(1);

});
