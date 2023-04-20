import { series } from './data.js';
var seriesTB = document.getElementById('series-data');
renderSeriesInTable(series);
getPromSeasons(series);
function renderSeriesInTable(series) {
    series.forEach(function (s) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(s.id, "</td>\n                            <td>").concat(s.name, "</td>\n                            <td>").concat(s.platform, "</td>\n                            <td>").concat(s.seasons, "</td>");
        trElement.onclick = function () {
            renderDetail(s, trElement);
        };
        seriesTB.appendChild(trElement);
    });
}
function getPromSeasons(series) {
    var trElement = document.createElement("p");
    var totalSeasons = 0;
    var count = 0;
    series.forEach(function (s) {
        totalSeasons = totalSeasons + s.seasons;
        count += 1;
    });
    if (count === 0) {
        trElement.innerHTML = count.toString();
    }
    else {
        var answer = totalSeasons / count;
        trElement.innerHTML = 'Seasons average: ' + answer.toString();
    }
    seriesTB.appendChild(trElement);
}
;
function renderDetail(serie, trElement) {
    var detailCard = document.getElementById('series-detail');
    detailCard.classList.remove('d-none');
    detailCard.querySelector('.card-title').textContent = serie.name;
    detailCard.querySelector('.card-text').textContent = serie.description;
    detailCard.querySelectorAll('.card-link')[1].href = serie.link;
    detailCard.querySelectorAll('.card-link')[1].href = serie.img;
}
