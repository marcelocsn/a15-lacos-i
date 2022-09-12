let conta = 0;
let moreFoods = prompt('Você deseja comer mais? [S/N').toUpperCase()

while (moreFoods != 'S' && moreFoods != 'N') {
    alert('Insira um valor válido! [S/N]');
    moreFoods = prompt('Você deseja comer mais? [S/N]').toUpperCase()
    }

while (moreFoods === 'S') {
    conta += 2.50;
    //moreFoofds = 'N';
    moreFoods = prompt('Você deseja comer mais? [S/N]').toUpperCase()
    while (moreFoods != 'S' && moreFoods != 'N') {
        alert('Insira um valor válido! [S/N]');
        moreFoods = prompt('Você deseja comer mais? [S/N]').toUpperCase()

    }
}

console.log('O valor total de sua conta é ${conta}')