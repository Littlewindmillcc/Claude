// List of popular time zones
const timeZones = [
    { name: 'New York', zone: 'America/New_York' },
    { name: 'Los Angeles', zone: 'America/Los_Angeles' },
    { name: 'London', zone: 'Europe/London' },
    { name: 'Paris', zone: 'Europe/Paris' },
    { name: 'Tokyo', zone: 'Asia/Tokyo' },
    { name: 'Sydney', zone: 'Australia/Sydney' },
    { name: 'Dubai', zone: 'Asia/Dubai' },
    { name: 'Singapore', zone: 'Asia/Singapore' },
    { name: 'Hong Kong', zone: 'Asia/Hong_Kong' },
    { name: 'Bangkok', zone: 'Asia/Bangkok' },
    { name: 'Dubai', zone: 'Asia/Dubai' },
    { name: 'Mexico City', zone: 'America/Mexico_City' },
    { name: 'Toronto', zone: 'America/Toronto' },
    { name: 'São Paulo', zone: 'America/Sao_Paulo' },
    { name: 'Moscow', zone: 'Europe/Moscow' },
    { name: 'Istanbul', zone: 'Europe/Istanbul' },
    { name: 'Mumbai', zone: 'Asia/Kolkata' },
    { name: 'Bangkok', zone: 'Asia/Bangkok' },
    { name: 'Jakarta', zone: 'Asia/Jakarta' },
];

// Store active clocks
let activeClock = [];

// Initialize with default time zones
function initializeClocks() {
    const defaultZones = [
        { name: 'New York', zone: 'America/New_York' },
        { name: 'London', zone: 'Europe/London' },
        { name: 'Tokyo', zone: 'Asia/Tokyo' },
    ];
    
    defaultZones.forEach(tz => addClock(tz.zone, tz.name));
}

// Add a new clock
function addClock(zone, name) {
    const clockId = `clock-${Date.now()}`;
    
    const clockCard = document.createElement('div');
    clockCard.className = 'clock-card';
    clockCard.id = clockId;
    
    clockCard.innerHTML = `
        <div class="clock-header">
            <div>
                <div class="zone-name">${name}</div>
                <div class="zone-offset" id="offset-${clockId}"></div>
            </div>
            <button class="remove-btn" onclick="removeClock('${clockId}')">×</button>
        </div>
        <div class="digital-clock" id="time-${clockId}">--:--:--</div>
        <div class="date-info" id="date-${clockId}"></div>
        <div class="time-details">
            <div class="detail-item">
                <div class="detail-label">HOUR</div>
                <div class="detail-value" id="hour-${clockId}">--</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">MINUTE</div>
                <div class="detail-value" id="minute-${clockId}">--</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">SECOND</div>
                <div class="detail-value" id="second-${clockId}">--</div>
            </div>
            <div class="detail-item">
                <div class="detail-label">PERIOD</div>
                <div class="detail-value" id="period-${clockId}">--</div>
            </div>
        </div>
    `;
    
    document.getElementById('clocksGrid').appendChild(clockCard);
    
    activeClock.push({ id: clockId, zone, name });
    updateClock(clockId, zone);
}

// Update clock time
function updateClock(clockId, zone) {
    const now = new Date();
    
    // Get time in specific timezone
    const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: zone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    });
    
    const dateFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: zone,
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
    
    const timeString = formatter.format(now);
    const dateString = dateFormatter.format(now);
    
    // Parse time
    const [hours, minutes, seconds] = timeString.split(':');
    const hourValue = parseInt(hours);
    const period = hourValue >= 12 ? 'PM' : 'AM';
    const displayHour = hourValue % 12 || 12;
    
    // Format display time
    const displayTime = `${hours}:${minutes}:${seconds}`;
    
    // Update elements
    document.getElementById(`time-${clockId}`).textContent = displayTime;
    document.getElementById(`date-${clockId}`).textContent = dateString;
    document.getElementById(`hour-${clockId}`).textContent = String(displayHour).padStart(2, '0');
    document.getElementById(`minute-${clockId}`).textContent = minutes;
    document.getElementById(`second-${clockId}`).textContent = seconds;
    document.getElementById(`period-${clockId}`).textContent = period;
    
    // Calculate and display UTC offset
    updateUTCOffset(clockId, zone);
}

// Update UTC offset display
function updateUTCOffset(clockId, zone) {
    const now = new Date();
    
    // Get UTC time
    const utcTime = new Date(now.toLocaleString('en-US', { timeZone: 'UTC' }));
    
    // Get timezone time
    const tzTime = new Date(now.toLocaleString('en-US', { timeZone: zone }));
    
    // Calculate offset in hours
    const offset = (utcTime - tzTime) / (1000 * 60 * 60);
    const sign = offset <= 0 ? '+' : '-';
    const absOffset = Math.abs(offset);
    const hours = Math.floor(absOffset);
    const minutes = Math.round((absOffset - hours) * 60);
    
    const offsetString = `UTC ${sign}${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
    document.getElementById(`offset-${clockId}`).textContent = offsetString;
}

// Remove a clock
function removeClock(clockId) {
    const element = document.getElementById(clockId);
    element.style.opacity = '0';
    element.style.transform = 'scale(0.9)';
    
    setTimeout(() => {
        element.remove();
        activeClock = activeClock.filter(c => c.id !== clockId);
    }, 300);
}

// Show zone selector
document.getElementById('addZoneBtn').addEventListener('click', () => {
    showZoneSelector();
});

// Show zone selector modal
function showZoneSelector() {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    `;
    
    const content = document.createElement('div');
    content.style.cssText = `
        background: white;
        border-radius: 15px;
        padding: 30px;
        max-width: 500px;
        width: 90%;
        max-height: 600px;
        overflow-y: auto;
    `;
    
    content.innerHTML = `
        <h2 style="margin-bottom: 20px; color: #333;">Select Time Zone</h2>
        <input type="text" id="zoneSearch" placeholder="Search time zones..." style="
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 2px solid #eee;
            border-radius: 8px;
            font-size: 1rem;
        ">
        <div id="zoneList" style="max-height: 400px; overflow-y: auto;"></div>
    `;
    
    modal.appendChild(content);
    document.body.appendChild(modal);
    
    // Populate zone list
    const zoneList = document.getElementById('zoneList');
    const searchInput = document.getElementById('zoneSearch');
    
    function populateZones(filter = '') {
        zoneList.innerHTML = '';
        timeZones
            .filter(tz => tz.name.toLowerCase().includes(filter.toLowerCase()))
            .forEach(tz => {
                const item = document.createElement('div');
                item.style.cssText = `
                    padding: 12px;
                    border: 1px solid #eee;
                    margin-bottom: 8px;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.2s;
                `;
                item.textContent = `${tz.name} (${tz.zone})`;
                item.onmouseover = () => item.style.background = '#f5f5f5';
                item.onmouseout = () => item.style.background = 'white';
                item.onclick = () => {
                    addClock(tz.zone, tz.name);
                    modal.remove();
                };
                zoneList.appendChild(item);
            });
    }
    
    populateZones();
    
    searchInput.addEventListener('input', (e) => {
        populateZones(e.target.value);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Update all clocks every second
function updateAllClocks() {
    activeClock.forEach(clock => {
        updateClock(clock.id, clock.zone);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeClocks();
    updateAllClocks();
    setInterval(updateAllClocks, 1000);
});
