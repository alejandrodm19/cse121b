// Define the API URL
const API_URL = "https://api.coincap.io/v2/";

document.addEventListener("DOMContentLoaded", () => {
  const params = { id: "bitcoin" };

  const cryptoDataElement = document.getElementById("crypto-data");

  axios
    .get(`${API_URL}assets/${params.id}`)
    .then((response) => {
      const cripto = response.data.data;
      document.getElementById("crypto-title").textContent = params.id;
      document.getElementById("crypto-name").textContent = cripto.name;
      document.getElementById("crypto-symbol").textContent = cripto.symbol;

      // Display historical data
      axios
        .get(`${API_URL}assets/${params.id}/history?interval=d1`)
        .then((response) => {
          const history = response.data.data;
          const cryptoData = document.getElementById("crypto-data");

            history.forEach(({ date, priceUsd, time }) => {
              const formattedDate = dayjs(date).format("YYYY-MM-DD");
              const row = document.createElement("tr");
              row.innerHTML = `
        <td>${formattedDate}</td>
        <td>${parseFloat(priceUsd).toFixed(4)}</td>`;
              cryptoData.appendChild(row);});

        })
        .catch((error) => console.error(error));
    })
    .catch((error) => console.error(error));
});

function Cripto({ id, name, priceUSD, symbol, changePercent24Hr }) {
  const criptoElement = document.createElement("div");
  criptoElement.classList.add("cripto");

  const h2 = document.createElement("h2");
  h2.textContent = name;
  criptoElement.appendChild(h2);

  const info = document.createElement("div");
  info.classList.add("info");

  const priceP = document.createElement("p");
  priceP.innerHTML = `<span class="label">Price: </span>${parseFloat(
    priceUSD
  ).toFixed(4)}`;
  info.appendChild(priceP);

  const symbolP = document.createElement("p");
  symbolP.innerHTML = `<span class="label">Code: </span>${symbol}`;
  info.appendChild(symbolP);

  const changeP = document.createElement("p");
  const changeSpan = document.createElement("span");
  changeSpan.classList.add(
    parseFloat(changePercent24Hr).toFixed(3) > 0 ? "positive" : "negative"
  );
  changeSpan.textContent = `${parseFloat(changePercent24Hr).toFixed(3)}%`;
  changeP.innerHTML = `<span class="label">Variacion 24Hr: </span>`;
  changeP.appendChild(changeSpan);
  info.appendChild(changeP);

  const link = document.createElement("a");
  link.href = `/criptomonedas/${id}`;
  link.textContent = "Ver detalles";
  info.appendChild(link);

  criptoElement.appendChild(info);

  return criptoElement;
}
