document.addEventListener('DOMContentLoaded', () => {
    let today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');
    const calendar = document.getElementById('calendar');
    const detailsDiv = document.getElementById('details');
    const selectedDateElem = document.getElementById('selected-date');
    const confirmationDiv = document.getElementById('confirmation');
    const currentMonthYearElem = document.getElementById('current-month-year');
    const periodo_select = document.getElementById('periodo_select');
    const sala_data_periodo = document.getElementById('sala_data_periodo');
    const horario_inicial = document.getElementById('horario_inicial');
    const horario_final = document.getElementById('horario_final');
    const intuito = document.getElementById('intuito');

    function generateCalendar(month, year) {
        calendar.innerHTML = '';
        currentMonthYearElem.textContent = `${monthNames[month]} ${year}`;

        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement('div');
            calendar.appendChild(emptyCell);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            const dayElem = document.createElement('div');
            dayElem.classList.add('day');
            if (date.getDay() === 0 || date < today) {
                dayElem.classList.add('sunday');
            }
            if (date >= today || (year > today.getFullYear() || (year === today.getFullYear() && month > today.getMonth()))) {
                dayElem.classList.add('selectable');
                dayElem.addEventListener('click', () => selectDate(date));
            }
            dayElem.textContent = day;
            calendar.appendChild(dayElem);
        }
    }

    function goToPreviousMonth() {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        generateCalendar(currentMonth, currentYear);
    }

    function goToNextMonth() {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        generateCalendar(currentMonth, currentYear);
    }

    prevMonthBtn.addEventListener('click', goToPreviousMonth);
    nextMonthBtn.addEventListener('click', goToNextMonth);

    function selectDate(date) {
        const previousSelected = document.querySelector('.day.selected');
        const periodo_confirm = document.getElementById('periodo_confirm');
        const selected_date_confirm = document.getElementById('selected_date_confirm');
        const confirmation = document.getElementById('confirmation');
        if (previousSelected) {
            previousSelected.classList.remove('selected');
        }

        const selectedElem = Array.from(calendar.children).find(elem =>
            elem.textContent == date.getDate() && !elem.classList.contains('sunday'));

        if (selectedElem) {
            selectedElem.classList.add('selected');
        }

        document.getElementById('Concluir_reserva').onclick = () =>{
            
            const period = document.getElementById('period').value;
            const previousSelected = document.querySelector('.day.selected').value;

            console.log(period);

            
            if(previousSelected !== "" && period !== ""){

                selectedDateElem.textContent = `Data da Reserva: ${date.toLocaleDateString()}`;
                periodo_select.textContent = `Periodo: ${period}`;
                detailsDiv.style.display = 'block';
                sala_data_periodo.style.filter = 'blur(10px)';
                
                     {

                        const period = document.getElementById('period').value;
                        const obs = document.getElementById('observacao').value;
                        const startTime = document.getElementById('start-time').value;
                        const endTime = document.getElementById('end-time').value;
                        
                       

                        if(obs !== "" && startTime !== ""  && endTime !== ""){
                            selected_date_confirm.textContent = `Data da Reserva: ${date.toLocaleDateString()}`;
                            periodo_confirm.textContent = `Periodo: ${period}`;
                            horario_inicial.textContent = `Horário Inicial: ${startTime}`;
                            horario_final.textContent = `Horário Inicial: ${endTime}`;
                            intuito.textContent = `Intuito da Reserva: ${obs}` ;

                            confirmationDiv.style.display = 'block';
                            detailsDiv.style.display = 'none';
                        }else{
                            // Swal.fire({
                            //     icon: "error",
                            //     text: "Insira o Horário Inicial e Final e o Intuito da Reserva!",
                            //   });    
                        }
                   
                    };


            } else{
                Swal.fire({
                    icon: "error",
                    text: "Selecione a Data de Reserva e o Periodo!",
                  });
            }   
        }
        
        document.getElementById('cancelar').onclick = () => {

            sala_data_periodo.style.filter = 'blur(0px)';
            detailsDiv.style.display = 'none';
        }

        document.getElementById('cancelar_confirm').onclick = () => {

            sala_data_periodo.style.filter = 'blur(10px)';
            detailsDiv.style.display = 'block';
            confirmation.style.display = 'none';
        }

        document.getElementById('confirm').onclick = () => {
            const period = document.getElementById('period').value;
            const obs = document.getElementById('observacao').value;
            const startTime = document.getElementById('start-time').value;
            const endTime = document.getElementById('end-time').value;
            
            selected_date_confirm.textContent = `Data da Reserva: ${date.toLocaleDateString()}`;
            periodo_confirm.textContent = `Periodo: ${period}`;
            horario_inicial.textContent = `Horário Inicial: ${startTime}`;
            horario_final.textContent = `Horário Inicial: ${endTime}`;
            intuito.textContent = `Intuito da Reserva: ${obs}` ;
            confirmationDiv.style.display = 'block';
            detailsDiv.style.display = 'none';
        };
    }

    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    generateCalendar(currentMonth, currentYear);

});

import { api } from "../requisicoes/handle.js";
document.getElementById('confirm_confirm').addEventListener('click', function() {

    const Sala_nome = document.getElementById('sala_nome').textContent;
    const data_selecionada = document.getElementById('selected_date_confirm').textContent;
    const Periodo = document.getElementById('periodo_confirm').textContent;   
    const obs = document.getElementById('observacao').textContent;
    const startTime = document.getElementById('horario_inicial').textContent;
    const endTime = document.getElementById('horario_final').textContent;

    const reserva = {
        nome_sala: Sala_nome,
        periodo: Periodo,
        data: data_selecionada,
        intuito: obs,
        horario_inicial: startTime,
        horario_final: endTime,
    };

    api.reserva.registrarReserva(reserva.Sala_nome,reserva.Periodo,reserva.data_selecionada,reserva.obs,reserva.horario_final,reserva.horario_inicial)

});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const filtros = document.getElementById('filtros');

    menuToggle.addEventListener('click', function() {
        filtros.classList.toggle('active');
    });
});
