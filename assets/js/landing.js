const currencyObj = {
    USD: "UNITED STATES DOLLAR",
    EUR: "EURO",
    AUD: "AUSTRALIAN DOLLAR",
    JPY: "JAPANESE YEN",
    GBP: "POUND STERLING",
    CAD: "CANADIAN DOLLAR",
    CHF: "SWISS FRANC",
}

// cryptocurrency
const cryptoObj = {
    BTC: "BITCOIN",
    ETH: "ETHERIUM",
    LTC: "LITECOIN",
    BCH: "BITCOIN CASH",
    ADA: "CARDANO",
    LINK: "CHAINLINK",
}

// consumables
const consumablesObj = {
    RICE: "RICE",
    COFFEE: "ARABICA COFFEE",
    ROBUSTA: "ROBUSTA COFFEE",
    CSCU22: "CHEESE",
    COCOA: "COCOA",
    CORN: "CORN",
    DCU22: "MILK",
    OAT: "OATS",
}

// metals
const metalsObj = {
    XAU: "GOLD (TROY OUNCE)",
    XAG: "SILVER (TROY OUNCE",
    XCU: "COPPER",
    ALU: "ALUMINIUM",
    IRD: "IRIDIUM (TROY OUNCE)",
    NI: "NICKEL",
    XPD: "PALLADIUM (TROY OUNCE)",
}

// resources
const resourcesObj = {
    HOU22: "HEATING OIL",
    CPO: "CRUDE PALM OIL",
    NG: "NATURAL GAS",
    CANO: "CANOLA",
    COAL: "COAL",
    ETHANOL: "ETHANOL",
    LUMBER: "LUMBER",
    LCAT: "LIVE CATTLE",
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }