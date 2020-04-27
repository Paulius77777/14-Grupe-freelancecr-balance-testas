const account = [
    { month: 10, income: 150 },
    { month: 1, income: 200, expense: 50 },
    { month: 3, income: 450, expense: 200 },
    { month: 7, expense: 50 },
    { month: 2, income: 50 },
    { month: 5, income: 150, expense: 50 },
    { month: 9, income: 700, expense: 400 },
    { month: 4, income: 10, expense: 300 },
    { month: 6, expense: 50 },
    { month: 11, income: 150, expense: 30 },
    { month: 8, income: 450, expense: 120 },
    { month: 12, expense: 200 }
];

const months = ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Geguze', 'Birzelis', 'Liepa', 'Rugpjutis', 'Rugsejis', 'Spalis', 'Lapkritis', 'Gruodis']

let table = document.querySelector('.table-content');

console.log(table);

let HTML = '';

 function get(elem, list) {
     for (let i=1; i<=elem.length; i++) {
     HTML += `<div class="table-row">
                <div class="cell">1</div>
                <div class="cell">${i}</div>
                <div class="cell">150.00 Eur</div>
                <div class="cell">-</div>
                <div class="cell">150.00 Eur</div>
            </div>`;
    }

    table.innerHTML = HTML;
 }

 get(months);
