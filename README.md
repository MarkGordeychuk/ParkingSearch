# ParkingSearch - *приложение для поиска адресов при помощи поисковой системы SPHINX*

Поисковая система Sphinx индексирует список адресов из СУБД PostgreSQL.
Web-приложение на Flask использует Sphinx для поиска адресов.

## Используемые технологии

- Python
- Flask
- SphinxSearch
- PostgeSQL

## Как запустить с помощью Docker?

1. Клонируйте или скачайте проект.
2. Смените директорию на *ParkingSearch*
3. Создайте образ: `docker-compose build`
4. Запустите базу данных `docker-compose up -d postgres` и немного подождите
5. Проиндексируйте список адресов `docker-compose run sphinx indexer --all --config /opt/sphinx/conf/sphinx.conf`
6. Запустите Sphinx `docker-compose up -d sphinx`
7. Запустите web-приложение `docker-compose up -d web`
8. Теперь приложение доступно по адресу: http://127.0.0.1:5000/