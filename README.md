# 🌐 luguard

**Генерация конфигурации CloudFlare Warp + оживление WireGuard протокола**

---

## 📦 Установка зависимостей

Для установки необходимых зависимостей выполните команду:

```bash
pip install -r requirements.txt
```

Загрузите Wireguard с официального сайта: https://www.wireguard.com/

## 🚀 Запуск программы
Запустите программу с помощью следующей команды: 

```bash
python main.py
```

## 🛠️ Модули
 **Generate config for Wireguard**
 
>> Генерирует конфигурацию Warp WireGuard с возможностью использования прокси.

**Send fake packets to the Wireguard port**

>> Отправляет пустой UDP пакет на сервер engage.cloudflareclient.com, что позволяет обойти проверки на следующие пакеты.

**Use automatic configuration file [settings.cfg]**

>> Производит автоматическое подключение к тунелю, отправив UDP пакет. (Для работы требуются права администратора)

## 📣 Присоединяйтесь к моему Telegram каналу
👉 Telegram канал: https://t.me/shalopaybase

