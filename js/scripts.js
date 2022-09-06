const dragList = document.querySelector('.drag-list');
const progress = document.querySelector('.progress-bar');
const total = document.querySelector('.drag-total');
const dragTarget = document.querySelector('.drag-target');
const dragItems = document.querySelectorAll('.drag-list .drag-item');
const sortable = new Sortable(dragList, {
    animation: 150,
    direction: 'vertical',
    forceFallback: true,
    group: 'shared',
    sort: true,
    onAdd: function (evt) {
        const dataWeight = parseInt(evt.clone.getAttribute('data-weight'), 10);
        weight -= dataWeight;
        progress.style.width = `${weight}%`;
        total.textContent = `${weight} lbs`;

        weightStatus(weight);
    },
});

const target = new Sortable(dragTarget, {
    animation: 150,
    direction: 'vertical',
    forceFallback: true,
    group: 'shared',
    emptyInsertThreshold: 5,
    sort: true,
    onAdd: function (evt) {
        const dataWeight = parseInt(evt.clone.getAttribute('data-weight'), 10);
        let className = '';
        weight += dataWeight;
        progress.style.width = `${weight}%`;
        total.textContent = `${weight} lbs`;

        weightStatus(weight);
    },
});

function weightStatus(val) {
    val > 0 ? 
        total.classList.remove('d-none') : 
        total.classList.add('d-none');
}

let weight = 0;
progress.style.width = `${0}%`;