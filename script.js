// Função para converter números em letras
function numeroParaPalavra(num) {
    const palavras = [
        "0", "10", "20", "30", "40", "50",
        "60", "70", "80", "90", "100", "110", "120",
        "130", "140", "150", "160", "170",
        "180", "190", "200"
    ];
    return palavras[num] || num.toString(); // Retorna o número como string se não estiver na lista
}

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Tradicional', 'Extraforte', 'Superior', 'Gourmet', 'Especial'],
        datasets: [{
            label: 'Vendas',
            data: [280, 500, 120, 310, 190], // Números originais
            backgroundColor: [
                'rgba(83, 83, 236, 0.2)', // Vermelho
                'rgba(83, 83, 236, 0.2)', // Azul
                'rgba(83, 83, 236, 0.2)', // Amarelo
                'rgba(83, 83, 236, 0.2)', // Verde-água
                'rgba(83, 83, 236, 0.2)' // Roxo
            ],
            borderColor: [
                'rgba(83, 83, 236, 1)', // Vermelho
                'rgba(83, 83, 236, 1)', // Azul
                'rgba(83, 83, 236, 1)', // Amarelo
                'rgba(83, 83, 236, 1)', // Verde-água
                'rgba(83, 83, 236, 1)' // Roxo
            ],
            borderWidth: 1,
            datalabels: {
                anchor: 'end',
                align: 'end',
                formatter: (value) => numeroParaPalavra(value), // Converte os números em palavras
                color: '#5353ec' // Cor vermelha para os rótulos de dados
            }
        }]
    },
    options: {
        plugins: {
            datalabels: {
                display: true,
                color: 'red', // Cor do texto dos rótulos
                font: {
                    weight: 'bold'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#5353ec' // Cor vermelha para os rótulos dos meses
                },
                title: {
                    display: true,
                    text: 'Livros',
                    color: '#5353ec'
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#5353ec', // Cor vermelha para os rótulos dos números
                    callback: function(value) {
                        return numeroParaPalavra(value); // Substitui os números por palavras
                    }
                },
                title: {
                    display: true,
                    text: 'Vendas',
                    color: '#5353ec'
                }
            }
        },
        layout: {
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        },
        elements: {
            bar: {
                borderWidth: 2, // Espessura das bordas das barras
                borderSkipped: 'bottom' // Impede a borda embaixo das barras
            }
        }
    },
    plugins: [ChartDataLabels] // Inclui o plugin
});
