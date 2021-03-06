'use strict';

module.exports.VERSION = '0.1.8';

module.exports.MAX_NUM_CONNECTIONS = 50;
module.exports.DEFAULT_NUM_CONNECTIONS = 5;

module.exports.CONNECTION_STATUS = {
    OPENED: 1,
    ON_PROGRESS: 2,
    DONE: 3,
    ERROR: 4
};
module.exports.MAX_REDIRECT_COUNT = 3;
module.exports.PROGRESS_BAR_LEN = 60;