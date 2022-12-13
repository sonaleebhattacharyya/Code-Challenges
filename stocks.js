stocks = [15, 10, 20, 22, 1, 9]
function best(stocks) {
    for (i=0; i<stocks.length; i++) {
        for (j=i+1; j<stocks.length; j++ ) { 
            console.log(i,j)
        }
    }
} 