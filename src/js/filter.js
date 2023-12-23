const filterForm = document.querySelector('#filterForm');
const filterSelectCategories = document.querySelector('#categories')

export function renderFilterSelect(data) {
    filterSelectCategories.insertAdjacentHTML("beforeend", markup(data));  
}

 function markup(arr) {
    const selects = arr
    .map((categorie) => `
    <option value="${categorie}" class="js-option">${categorie}</option>
    `);
    selects.unshift('<option value="" disabled selected>Categories</option>');
    return selects.join("")
}

