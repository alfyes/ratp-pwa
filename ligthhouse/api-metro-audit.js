'use strict';

const Audit = require('lighthouse').Audit;

const MAX_API_METRO_REPONSE_TIME = 3000;

class LoadAudit extends Audit {
    static get meta() {
        return {
            category: 'MyPerformance',
            name: 'api-metro-audit',
            description: 'First response of metro api was successfully',
            failureDescription: 'The metro api  slow to response',
            helpText: 'Used to measure time from navigationStart to when the first' +
            ' metro api response is received.',

            requiredArtifacts: ['TimeToApi']
        };
    }

    static audit(artifacts) {
        const responseTime = artifacts.TimeToApi;

        const belowThreshold = responseTime <= MAX_API_METRO_REPONSE_TIME;

        return {
            rawValue: responseTime,
            score: belowThreshold
        };
    }
}

module.exports = LoadAudit;
