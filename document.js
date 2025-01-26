const visorYear = document.querySelector('.year');
const visorMonth = document.querySelector('.month');
const visorDay = document.querySelector('.day');

function calcularIdade() {
    const inputYear = parseInt(document.querySelector('#year').value, 10);
    const inputMonth = parseInt(document.querySelector('#month').value, 10) - 1; // Mês começa em 0 no JavaScript
    const inputDay = parseInt(document.querySelector('#day').value, 10);
    const labelTitles = document.querySelectorAll('label')
    const borders = document.querySelectorAll('input')

    const textYear = document.querySelector('.text-year')

    const textMonth = document.querySelector('.text-month')
    const textDay = document.querySelector('.text-day')
    const infos = document.querySelectorAll('.info')

    const hoje = new Date()

    if (
        (isNaN(inputYear)) || (isNaN(inputMonth)) || (isNaN(inputDay))

    ) {
        infos.forEach(item => {
            item.innerHTML = "Insira um valor"
            item.style.color = '#ff5757'
        });
        
        borders.forEach(item => {
            item.style.borderColor = '#ff5757'
        });
        labelTitles.forEach(item => {
            item.style.color = '#ff5757'
        })
        return
    }


    if (inputYear > hoje.getFullYear()) {
        textYear.innerHTML = 'Insira um ano válido'
        textYear.style.color = '#ff5757'
        borders.forEach(item => {
            item.style.borderColor = '#ff5757'
        });
        labelTitles.forEach(item => {
            item.style.color = '#ff5757'
        })
        return
    } if (inputMonth < 0 || inputMonth > 11) {
        textMonth.innerHTML = 'Insira um mês válido';
        textMonth.style.color = '#ff5757';
        borders.forEach(item => {
            item.style.borderColor = '#ff5757';
        })
        labelTitles.forEach(item => {
            item.style.color = '#ff5757';
        })
        return
    } if (inputDay < 1 || inputDay > 31) {
        textDay.innerHTML = 'Insira um dia válido';
        textDay.style.color = '#ff5757';
        borders.forEach(item => {
            item.style.borderColor = '#ff5757';
        })
        labelTitles.forEach(item => {
            item.style.color = '#ff5757';
        })
        return
    }



    else {
        textYear.innerHTML = '';
        textMonth.innerHTML = '';
        textDay.innerHTML = ''
        borders.forEach(item => {
            item.style.borderColor = ''
        });
        labelTitles.forEach(item => {
            item.style.color = ''
        });
    }



    // Calcular o Ano
    let anos = hoje.getFullYear() - inputYear

    //Calcular o mês
    let meses = hoje.getMonth() - inputMonth
    if (meses < 0 || (meses === 0 && hoje.getDate < inputDay)) {
        anos--  // Reduzir um ano se o mês/dia atual não passou
        meses += 12
    }

    //Calcular os dias
    const ultimoDiaMesAnterior = new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate()
    let dias = hoje.getDate() - inputDay
    if (dias < 0) {
        dias += ultimoDiaMesAnterior; //Isso corrige a contagem de dias para que fique positiva.
        meses--;
    }

    visorYear.innerHTML = anos;
    visorMonth.innerHTML = meses;
    visorDay.innerHTML = dias;
}

const btn = document.querySelector('button').addEventListener('click', calcularIdade)

