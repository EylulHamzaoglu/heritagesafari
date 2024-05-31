document.addEventListener('DOMContentLoaded', function() {
    const calendar = document.getElementById('calendar');
    const currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    // Ay bazında özel etkinlik günleri
    const eventDays = {
        5: [14], // May: 14th
        6: [5, 14, 18, 22] // June: 5th, 14th, 18th, 22nd
        // Diğer aylar için de günler eklenebilir
    };

    const renderCalendar = () => {
        calendar.innerHTML = '';

        // Header
        const header = document.createElement('div');
        header.classList.add('calendar-header');
        header.innerHTML = `
            <button id="prev-month">&lt;</button>
            <div>
                <span>${months[currentMonth]}</span>
                <span>${currentYear}</span>
            </div>
            <button id="next-month">&gt;</button>
        `;
        calendar.appendChild(header);

        // Days of the week
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const daysRow = document.createElement('div');
        daysRow.classList.add('calendar-body');
        daysOfWeek.forEach(day => {
            const dayElement = document.createElement('div');
            dayElement.classList.add('calendar-day');
            dayElement.innerText = day;
            daysRow.appendChild(dayElement);
        });
        calendar.appendChild(daysRow);

        // Days in the month
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        const daysGrid = document.createElement('div');
        daysGrid.classList.add('calendar-body');

        // Blank days before the first day of the month
        for (let i = 0; i < firstDay; i++) {
            const blankDay = document.createElement('div');
            blankDay.classList.add('calendar-day');
            daysGrid.appendChild(blankDay);
        }

        // Days of the month
        for (let i = 1; i <= daysInMonth; i++) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('calendar-day');
            dayElement.innerText = i;

            // Belirtilen günler için yeşil renk
            const monthEvents = eventDays[currentMonth + 1] || [];
            if (monthEvents.includes(i)) {
                dayElement.classList.add('event');
            }

            daysGrid.appendChild(dayElement);
        }

        calendar.appendChild(daysGrid);

        document.getElementById('prev-month').addEventListener('click', () => {
            currentMonth--;
            if (currentMonth < 0) {
                currentMonth = 11;
                currentYear--;
            }
            renderCalendar();
        });

        document.getElementById('next-month').addEventListener('click', () => {
            currentMonth++;
            if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
            renderCalendar();
        });
    };

    renderCalendar();
});
