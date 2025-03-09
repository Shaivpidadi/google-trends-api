'use strict';
import api from './api';
import request from './request';
import {
  getInterestResults,
  constructInterestObj,
  constructTrendingObj,
  getTrendingResultsV2,
} from './utilities';

const interestHandler = {
  processor: getInterestResults,
  objectConstructor: constructInterestObj,
};

const trendHandler = {
  processor: getTrendingResultsV2,
  objectConstructor: constructTrendingObj,
};

const apiRequest = api.bind(this, request);

export default {
  autoComplete: apiRequest('Auto complete', interestHandler),
  dailyTrends: apiRequest('Daily trends', trendHandler),
  dailyTrendsV2: apiRequest('Daily trends', trendHandler),
  interestByRegion: apiRequest('Interest by region', interestHandler),
  interestOverTime: apiRequest('Interest over time', interestHandler),
  realTimeTrends: apiRequest('Real time trends', trendHandler),
  relatedQueries: apiRequest('Related queries', interestHandler),
  relatedTopics: apiRequest('Related topics', interestHandler),
};
