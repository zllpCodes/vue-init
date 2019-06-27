const fs = require('fs');

function fromJSONFile(filename) {
    return (req, res) => {
        const data = fs.readFileSync(`public/json/${filename}.json`).toString();
        const json = JSON.parse(data);
        return res.json(json);
    };
}

const proxy = {
    'GET /api/pictureList': fromJSONFile('pictureList')
};

module.exports = proxy;