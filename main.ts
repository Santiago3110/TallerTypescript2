import { Serie } from './serie.js'
import { series } from './data.js'

const seriesTB = document.getElementById('series-data')!;

renderSeriesInTable(series);
getPromSeasons(series);

function renderSeriesInTable(series: Serie[]): void {
  series.forEach(s => {
    let trElement = document.createElement("tr");
      trElement.innerHTML = `<td>${s.id}</td>
                            <td>${s.name}</td>
                            <td>${s.platform}</td>
                            <td>${s.seasons}</td>`;
      trElement.onclick = () => {
        renderDetail(s, trElement);
      };
      seriesTB.appendChild(trElement);
  });
}


function getPromSeasons(series: Serie[]): void {
  let trElement = document.createElement("p");
  let totalSeasons: number = 0;
  let count: number = 0;
  series.forEach(s => {
    totalSeasons = totalSeasons + s.seasons;
    count += 1
  });
  if(count === 0){
    trElement.innerHTML = count.toString();
  } else {
    let answer = totalSeasons / count;
    trElement.innerHTML = 'Seasons average: '+answer.toString();
  }
  seriesTB.appendChild(trElement);
};


function renderDetail(serie: Serie, trElement: HTMLTableRowElement){
  const detailCard = document.getElementById('series-detail')!;
  detailCard.classList.remove('d-none');
  detailCard.querySelector('.card-title')!.textContent = serie.name;
  detailCard.querySelector('.card-text')!.textContent = serie.description;
  (detailCard.querySelectorAll('.card-link')[1] as HTMLAnchorElement).href = serie.link;
  (detailCard.querySelectorAll('.card-link')[1] as HTMLAnchorElement).href = serie.img;

}
