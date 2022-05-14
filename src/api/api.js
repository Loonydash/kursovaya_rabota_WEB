const url = 'https://www.cbr-xml-daily.ru/daily_json.js';

export const API = {
    getValute(isList, valute) {
        return (
            fetch(url)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('HTTP error, status = ' + response.status);
                    }
                    return response.json();
                })
                .then((json) => {
                    if (isList)
                        return (json.Valute)
                    else
                        return (json.Valute[valute]);

                }).then(data => data)
        )
    }
}