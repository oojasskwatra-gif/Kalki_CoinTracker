let data = [];

async function fetchData() {
  try {
    const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd");
    const result = await res.json();

    data = result;
    display(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

function display(arr) {
  const container = document.getElementById("container");
  container.innerHTML = "";

  arr.map((coin) => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <h3>${coin.name}</h3>
      <p>Symbol: ${coin.symbol.toUpperCase()}</p>
      <p>Price: $${coin.current_price}</p>
      <p class="${coin.price_change_percentage_24h >= 0 ? 'green' : 'red'}">
        ${coin.price_change_percentage_24h.toFixed(2)}%
      </p>
    `;

    container.appendChild(div);
  });
}

// SEARCH
document.getElementById("search").addEventListener("input", function (e) {
  const value = e.target.value.toLowerCase();

  const filtered = data.filter((coin) =>
    coin.name.toLowerCase().includes(value) ||
    coin.symbol.toLowerCase().includes(value)
  );

  display(filtered);
});

// SORT
document.getElementById("sort").addEventListener("change", function (e) {
  const value = e.target.value;

  let sorted = [...data];

  if (value === "high") {
    sorted.sort((a, b) => b.current_price - a.current_price);
  } else if (value === "low") {
    sorted.sort((a, b) => a.current_price - b.current_price);
  }

  display(sorted);
});


fetchData();
