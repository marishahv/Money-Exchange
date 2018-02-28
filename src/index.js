
module.exports = function makeExchange(currency) {
    var coinsArr = [{name: "H", value: 50}, {name: "Q", value: 25}, {name: "D", value: 10}, {name: "N", value: 5}, {name: "P", value: 1}];
    var i = 0;
    var result = {};

    if(currency <= 0)
        return result;
    if(currency > 10000)
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};

    function exchangeCurrency(currencyCount, nominal){
        var coinsCount = Math.floor(currencyCount / nominal.value);
        var rest = currencyCount % nominal.value;
        if(coinsCount > 0){
            result[nominal.name] = coinsCount;
        }
        if(rest > 0){
            i++;
            return exchangeCurrency(rest, coinsArr[i]);
        }        
    }
    exchangeCurrency(currency, coinsArr[i]);
    return result;
}
