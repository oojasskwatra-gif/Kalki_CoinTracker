# Kalki_CoinTracker

# 🪙 Crypto Market Dashboard

## 📖 Project Overview
This project is a dynamic web application that tracks real-time cryptocurrency data. Its purpose is to allow users to easily monitor current market prices, search for specific coins, and organize the market data to find trends. It is built to demonstrate JavaScript API integration, UI development, and data manipulation.

## 🔌 API Being Used
This project integrates the **CoinGecko Public API**.
* **Endpoint:** `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`
* This API is free, requires no authentication key, and returns live data including coin names, symbols, current prices, market capitalization, and 24-hour price changes.

## ✨ Planned Features (Core Logic)
The following features will be implemented strictly using JavaScript Array Higher-Order Functions (like `map`, `filter`, `sort`, and `includes`) as required by the project guidelines:
* **Live Data Display:** Fetch and dynamically render the top cryptocurrencies using the `fetch` API and Promises.
* **Search:** A search bar allowing users to find a specific cryptocurrency by typing its name or symbol (e.g., "Bitcoin" or "BTC").
* **Filtering:** Interactive buttons to filter the dashboard, such as showing only coins that have a positive 24-hour price trend (in the green).
* **Sorting:** Options to sort the displayed coins by Current Price (High to Low / Low to High) or by Market Cap.

## 💻 Technologies Involved
* **HTML5:** To build the semantic structure of the dashboard and the individual coin cards.
* **CSS3:** For styling and ensuring the application is fully responsive across mobile, tablet, and desktop screens. 
* **JavaScript (Vanilla):** To handle API network requests, manage loading states, manipulate the DOM, and process the array data.

## 🛠️ Setup and Run Instructions
1. Clone this repository to your local machine.
2. Navigate into the project folder.
3. Open the `index.html` file in your preferred web browser. (Alternatively, open the folder in an editor like VS Code and use the "Live Server" extension).
4. No build tools or package installations (`npm`) are required.
5. **Note:** An active internet connection is required to fetch the live API data.
