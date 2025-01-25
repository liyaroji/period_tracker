document.getElementById("cycleForm").addEventListener("submit", function(event) {
    event.preventDefault();

    
    const lastPeriodDate = document.getElementById("lastPeriod").value;
    const cycleLength = parseInt(document.getElementById("cycleLength").value, 10);

    if (!lastPeriodDate || isNaN(cycleLength)) {
        alert("Please provide valid inputs.");
        return;
    }

    
    const lastPeriod = new Date(lastPeriodDate);

    // Calculate ovulation date (typically 14 days before the next period)
    const ovulationDate = new Date(lastPeriod);
    ovulationDate.setDate(lastPeriod.getDate() + cycleLength - 14);

    // Display result
    const ovulationDay = ovulationDate.toDateString();
    document.getElementById("ovulationDay").textContent = ovulationDay;
    document.getElementById("result").classList.remove("hidden");
});
