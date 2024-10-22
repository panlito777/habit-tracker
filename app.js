document.getElementById('habit-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const date = document.getElementById('date').value;
    const notDrinking = document.getElementById('not-drinking').checked;
    const notSmoking = document.getElementById('not-smoking').checked;
    const notes = document.getElementById('notes').value;

    const habitData = { date, notDrinking, notSmoking, notes };

    // Save data in local storage
    let history = JSON.parse(localStorage.getItem('habitHistory')) || [];
    history.push(habitData);
    localStorage.setItem('habitHistory', JSON.stringify(history));

    renderHistory();
});

// Function to display saved history
function renderHistory() {
    const history = JSON.parse(localStorage.getItem('habitHistory')) || [];
    const historyDiv = document.getElementById('history');
    historyDiv.innerHTML = '';

    history.forEach(entry => {
        const entryDiv = document.createElement('div');
        entryDiv.classList.add('history-entry');
        entryDiv.innerHTML = `
            <p><strong>Дата:</strong> ${entry.date}</p>
            <p><strong>Не пил:</strong> ${entry.notDrinking ? '✅' : '❌'}</p>
            <p><strong>Не курил:</strong> ${entry.notSmoking ? '✅' : '❌'}</p>
            <p><strong>Примечания:</strong> ${entry.notes}</p>
        `;
        historyDiv.appendChild(entryDiv);
    });
}

// Render history on page load
renderHistory();