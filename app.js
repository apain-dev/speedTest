const speedTest = require('speedtest-net');

speedTest.visual({maxTime: 5000}, (err, data) => {
    console.dir(data);
});
