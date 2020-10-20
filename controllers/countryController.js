const puppeteer = require('puppeteer');

exports.retrieveCountryStates = async function (req, res) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(
        'https://www.iso.org/obp/ui/#iso:code:3166:' + req.query.countryAlpha2Code, { waitUntil: 'networkidle0' }
    ); 
    const countryStates = await page.evaluate((divisions)=>{
        const rawDivisionTypes = document.querySelectorAll("#subdivision > tbody > tr > td:first-child");
        let indexes = [];

        for (let i = 0, end = rawDivisionTypes.length; i < end; i++) {
            if(divisions.includes(rawDivisionTypes[i].innerHTML)) {
                indexes.push(i);
            }
        }

        const rawDivisions = document.querySelectorAll("#subdivision > tbody > tr > td:nth-child(3)");
        let elements = [];

        for (let i = 0, end = indexes.length; i < end; i++) {
            elements.push(rawDivisions[indexes[i]].innerHTML); 
        }

        return elements;
    }, req.query.divisions);

    res.status(200).send(JSON.stringify(countryStates));
    await browser.close();
    return;
}

exports.retrieveCountryDivisions = async function (req, res) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(
        'https://www.iso.org/obp/ui/#iso:code:3166:' + req.query.countryAlpha2Code, { waitUntil: 'networkidle0' }
    ); 
    const subdivisionElements = await page.evaluate(()=>{
        const rawDivisionTypes = document.querySelectorAll("#subdivision > tbody > tr > td:first-child");
        let elements = [];
        for (let i = 0, end = rawDivisionTypes.length; i < end; i++) {
            if(!elements.includes(rawDivisionTypes[i].innerHTML)) {
                elements.push(rawDivisionTypes[i].innerHTML);
            }
        }
        return elements;
    });  
    res.status(200).send(JSON.stringify(subdivisionElements));
    await browser.close();
    return;
}