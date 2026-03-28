// Mock data for the dashboard
const deliveryData = [
    { client: "Stellar Residences", service: "Curtain Cleaning", status: "In-Progress", priority: "High" },
    { client: "John Smith", service: "Express Dry Clean", status: "Done", priority: "Medium" },
    { client: "Astoria Corporate", service: "Uniform Laundry", status: "Pending", priority: "High" },
    { client: "Marina Bay Suites", service: "Carpet Steaming", status: "In-Progress", priority: "Low" }
];

// Populate Table
const tableBody = document.getElementById('delivery-table');
deliveryData.forEach(item => {
    const row = `
        <tr>
            <td><strong>${item.client}</strong></td>
            <td>${item.service}</td>
            <td><span class="status ${item.status === 'Done' ? 'done' : 'pending'}">${item.status}</span></td>
            <td>${item.priority}</td>
        </tr>
    `;
    tableBody.innerHTML += row;
});

// Chart Configuration (using Chart.js)
const ctxOrder = document.getElementById('orderChart').getContext('2d');
new Chart(ctxOrder, {
    type: 'line',
    data: {
        labels: ['', '', '', '', '', ''],
        datasets: [{
            data: [30, 45, 35, 60, 50, 70],
            borderColor: '#4680ff',
            backgroundColor: 'rgba(70, 128, 255, 0.1)',
            fill: true,
            tension: 0.4,
            pointRadius: 0
        }]
    },
    options: {
        plugins: { legend: { display: false } },
        scales: { x: { display: false }, y: { display: false } }
    }
});

const ctxUtil = document.getElementById('utilizationChart').getContext('2d');
new Chart(ctxUtil, {
    type: 'line',
    data: {
        labels: ['', '', '', '', '', ''],
        datasets: [{
            data: [20, 40, 30, 50, 40, 60],
            borderColor: '#9ccc65',
            backgroundColor: 'rgba(156, 204, 101, 0.1)',
            fill: true,
            tension: 0.4,
            pointRadius: 0
        }]
    },
    options: {
        plugins: { legend: { display: false } },
        scales: { x: { display: false }, y: { display: false } }
    }
});