export const createPageButtons = (quantity) => {
  let pagesButtonsHTML = "<div class='pages'><ul>";

  for (let i = 1; i <= quantity; i++)
    pagesButtonsHTML += `<li><button class="btn page-btn">${i}</button></li>`;

  pagesButtonsHTML += "</ul></div>";

  return pagesButtonsHTML;
};
