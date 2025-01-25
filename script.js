document.getElementById('tracker-form').addEventListener('submit', function(e) {
    e.preventDefault();

    
    const cycleLength = parseInt(document.getElementById('cycle-length').value);
    const lastPeriodDate = new Date(document.getElementById('last-period-date').value);

    if (!cycleLength || isNaN(lastPeriodDate.getTime())) {
        alert("Please fill in both fields with valid information.");
        return;
    }

   
    let nextPeriodDate = new Date(lastPeriodDate);
    nextPeriodDate.setDate(lastPeriodDate.getDate() + cycleLength);

  
    const nextPeriodFormatted = nextPeriodDate.toLocaleDateString();

   
    document.getElementById('next-period').textContent = `Your next period will start on: ${nextPeriodFormatted}`;
});
