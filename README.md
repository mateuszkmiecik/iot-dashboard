# iot-dashboard

### Wymagania
- NodeJS
- Mongo

### Szybki start

```
npm install -g bower
npm install
bower install
npm start
```

### Opis projektu

Dashboard wyświetlający wykres ostatnich 50 średnich temperatur w "biurze".

- `bin/www` - adres do bazy danych w Mongo konfigurowalny w 22 linijce
- `app.js` - 28, 29 linijka - definicje ścieżek API
- `routes/index.js` - metoda GET -  zwracane jest ostatnie 50 danych z kolekcji `temp`
- `routes/sync.js` - metoda POST - przyjmuje dane w postaci `{ val: [number], date: [timestamp] }` i wrzuca je do kolekcji w Mongo
- `public/app.js` - aplikacja AngularJS pobiera dane z endpointu `/api/get_data` i wyświetla je za pomocą biblioteki `angular-chart.js`
