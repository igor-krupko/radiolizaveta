// alert('Это просто MVP версия если что');
// alert('Тут ничего не работает');

function timeSince(date1, date2) {

  var seconds = Math.floor((date2 - date1) / 1000);

  var interval = Math.floor(seconds / 31536000);
  let result = '';

  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    result += interval + " дней ";
    seconds -= interval * 86400;
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    result += interval + " часов ";
    seconds -= interval * 3600;
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    result += interval + " минут ";
    seconds -= interval * 60;
  }
  result += Math.floor(seconds) + " секунд";
  return result;
}

const timerLabel = document.getElementById('secretTimer');
const date = new Date();
const secretDate = new Date(2023,3,28,18,0,0,0);
timerLabel.innerHTML = timeSince(date, secretDate);

