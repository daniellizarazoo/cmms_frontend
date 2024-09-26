import './Reports.css';

const Reports = () => {
    return (
        <>
            <h1 style={{ fontFamily: 'Lucida Sans', textAlign: 'left', margin: '2%' }}>Reportes</h1>
            <div className='reports'>
                <div className='reports-data-selectors'>
                    <div className="date-container left">
                        <p>Fecha final</p>
                        <input type="date" />
                    </div>
                    <div className="date-container right">
                        <p>Fecha inicio</p>
                        <input type="date" />
                    </div>
                </div>
                <div className='reports-selectors'>
                    <button>Órdenes de trabajo</button>
                    <button>Equipos</button>
                </div>
                <div className='reports-cards'>
                    {/* Aquí se pueden agregar más cartas */}
                    <div className='card'>
                        <p className='card-title'>Órdenes de trabajo abiertas</p>
                        <p className='card-content'>5</p>
                        <p>+2% desde el mes pasado</p>
                    </div>
                    <div className='card'>
                        <p className='card-title'>Órdenes de trabajo completadas</p>
                        <p className='card-content'>10</p>
                        <p>+2% desde el mes pasado</p>
                    </div>
                    <div className='card'>
                        <p className='card-title'>Mantenimientos predictivos pendientes</p>
                        <p className='card-content'>3</p>
                        <p>+2% desde el mes pasado</p>
                    </div>
                    <div className='card'>
                        <p className='card-title'>Número total de equipos</p>
                        <p className='card-content'>250/500</p>
                        <p>+2% desde el mes pasado</p>
                    </div>
                    {/* Agrega más cartas si es necesario */}
                </div>
            </div>
        </>
    );
};

export default Reports;
