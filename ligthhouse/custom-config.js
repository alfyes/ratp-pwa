'use strict';

module.exports = {

    extends: 'lighthouse:default',

    passes: [{
        passName: 'defaultPass',
        gatherers: [
            'card-gatherer', 'api-metro-gatherer'
        ]
    }],

    audits: [
        'card-audit', 'api-metro-audit'
    ],

    categories: {
        ratp_pwa: {
            name: 'Ratp pwa metrics',
            description: 'Metrics for the ratp timetable site',
            audits: [
                {id: 'card-audit', weight: 1},
                {id: 'api-metro-audit', weight: 1}
            ]
        }
    }
};
