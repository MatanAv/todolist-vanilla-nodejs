export const createPageButtons = (quantity) => {
  let pagesButtonsHTML = "<ul class='pages'>";

  for (let i = 1; i <= quantity; i++)
    pagesButtonsHTML += `<li><button class="page-btn">${i}</button></li>`;

  pagesButtonsHTML += "</ul>";

  return pagesButtonsHTML;
};
