'use strict';
import React from 'react';

let configs = {
  dev: {
    url: 'http://localhost:3000'
     //url: 'http://192.168.178.192:3000'
  },
  prod: {
    url: 'http://192.168.178.192:3000'
  }
}

module.exports = {
  current() {
    return __DEV__ ? configs.dev: configs.prod;
  }
}
