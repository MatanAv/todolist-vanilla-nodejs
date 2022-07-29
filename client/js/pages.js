export const createPageButtons = (quantity, curr) => {
  let pagesButtonsHTML = "<div class='pages'><ul>";

  for (let i = 1; i <= quantity; i++)
    pagesButtonsHTML += `<li><button class="btn page-btn" ${
      i === curr + 1 && "disabled"
    }>${i}</button></li>`;

  pagesButtonsHTML += "</ul></div>";

  return pagesButtonsHTML;
};
