import { FaCalendarAlt } from "react-icons/fa";
import CardDashboard from "../../components/Dashboard/CardDashboard";
import { FaDollarSign } from "react-icons/fa6";
import TitleCard from "../../components/ui/TitleCard";
import { Chart } from "primereact/chart";
import { useState } from "react";
import Title from "../../components/ui/Title";

export default function Dashboard() {
  const barData = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
    datasets: [
      {
        label: 'Período 2024',
        backgroundColor: '#42A5F5',
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: 'Período 2023',
        backgroundColor: '#FFA726',
        data: [28, 48, 40, 19, 86, 27, 90]
      }
    ]
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#495057'
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#495057'
        },
        grid: {
          color: '#ebedef'
        }
      },
      y: {
        ticks: {
          color: '#495057'
        },
        grid: {
          color: '#ebedef'
        }
      }
    }
  };

  const pieData = {
    labels: ['Bovino', 'Suíno', 'Equino'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726'],
        hoverBackgroundColor: ['#64B5F6', '#81C784', '#FFB74D']
      }
    ]
  };

  const pieOptions = {
    plugins: {
      legend: {
        labels: {
          color: '#495057'
        }
      }
    }
  };

  const lineData = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    datasets: [
        {
            label: 'Saldo',
            data: [50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000, 90000, 95000, 100000, 105000],
            borderColor: '#42A5F5',
            fill: false,
            tension: 0.4
        },
        {
            label: 'Despesas',
            data: [20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000],
            borderColor: '#FFA726',
            fill: false,
            tension: 0.4
        },
        {
            label: 'Receita',
            data: [70000, 80000, 90000, 100000, 110000, 120000, 130000, 140000, 150000, 160000, 170000, 180000],
            borderColor: '#66BB6A',
            fill: false,
            tension: 0.4
        }
    ]
};

const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            labels: {
                color: '#495057'
            }
        }
    },
    scales: {
        x: {
            ticks: {
                color: '#495057'
            },
            grid: {
                color: '#ebedef'
            }
        },
        y: {
            min: 0,
            max: 100000,
            ticks: {
                color: '#495057'
            },
            grid: {
                color: '#ebedef'
            }
        }
    }
};

  return (
    <div className="flex flex-col w-full gap-8">
      <Title content={'Bem vindo, Capataz'} />

      <TitleCard border={'border-l-4 border-green-500'} title={'Suas Fazendas'} content={'São Carlos'} />

      <div className="flex gap-6">
        <CardDashboard
          borderColor={'border-green-500'}
          title={'RECEITAS (MENSAIS)'}
          value={'R$ 45000.60'}
          icon={<FaCalendarAlt size={35} />}
        />
        <CardDashboard
          borderColor={'border-green-600'}
          title={'RECEITAS (ANUAIS)'}
          value={'R$ 90000.30'}
          icon={<FaDollarSign size={35} />}
        />
        <CardDashboard
          borderColor={'border-yellow-400'}
          title={'DESPESAS (MENSAIS)'}
          value={'R$ 25000.60'}
          icon={<FaCalendarAlt size={35} />}
        />
        <CardDashboard
          borderColor={'border-red-500'}
          title={'DESPESAS (ANUAIS)'}
          value={'R$ 43000.70'}
          icon={<FaDollarSign size={35} />}
        />

      </div>
      <div className="flex gap-6">
        <div className="w-3/5">
          <TitleCard title={'Resumo Financeiro Anual'} content={<Chart type="line" data={lineData} options={lineOptions} style={{ height: '400px' }} />} />
        </div>

        <div className="w-2/5">
          <TitleCard title={'Animais'} customClasses={'flex justify-center items-center'} content={<Chart type="pie" data={pieData} options={pieOptions} className={'max-h-96'} />} />
        </div>
      </div>
      <div className="flex gap-6">
        <TitleCard title={'Resumo Anual de Chuvas'} content={<Chart type="bar" data={barData} options={barOptions}  />} />
      </div>
    </div>
  );
}