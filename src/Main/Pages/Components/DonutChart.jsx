import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register the necessary Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement);

const DonutChart = ({ data, labels, colors, onClick }) => {
    const chartData = {
        labels,
        datasets: [
            {
                data,
                backgroundColor: colors,
                borderColor: colors.map(color => color),
                borderWidth: 1
            }
        ]
    };

    const options = {
        responsive: true,
        cutout: '50%', // Adjust the size of the inner circle
        plugins: {
            tooltip: {
                callbacks: {
                    label: (context) => {
                        const label = context.label || '';
                        const value = context.raw;
                        return `${label}: ${value}`;
                    }
                }
            },
            legend: {
                position: 'bottom',
                labels: {
                    color: '#e0e6ed',
                    boxWidth: 20,
                    padding: 15
                }
            }
        },
        elements: {
            arc: {
                borderWidth: 2,
                hoverBorderWidth: 4,
                hoverBorderColor: '#000'
            }
        },
        onClick: (event, elements) => {
            if (elements.length > 0) {
                const firstElement = elements[0]; // Get the first element clicked
                const datasetIndex = firstElement.datasetIndex;
                const index = firstElement.index;
                const label = chartData.labels[index];
                const value = chartData.datasets[datasetIndex].data[index];
                // Call the onClick prop with the label and value
                if (onClick) {
                    onClick({ label, value, index });
                }
            }
        }
    };

    return (
        <div style={{ position: 'relative', width: 300, height: 300 }}>
            <Doughnut data={chartData} options={options} />
        </div>
    );
};

export default DonutChart;
