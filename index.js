const csv = require('csv-parser')
const fs = require('fs');
const txtHeaders = 'country, year, population'
fs.unlink('canada.txt', function(err){
    if(err){
        return console.error(err)
    }
})
fs.unlink('usa.txt', function(err){
    if(err){
        return console.error(err)
    }
})
const data = fs.createReadStream('input_countries.csv')
.pipe(csv())
.on('data', (row)=> {
    
    if(row.country == 'Canada'){
        
        fs.writeFile('canada.txt', row.country + ',' + row.year + ',' + row.population + '\n', {flag: 'a'}, function(err){
            if(err) return console.log(err)
        })
    }
    
    if(row.country == 'United States'){
        
        fs.writeFile('usa.txt', row.country + ',' + row.year + ',' + row.population + '\n', {flag: 'a'}, function(err){
            if(err) return console.log(err)
        })
    }
    
});


