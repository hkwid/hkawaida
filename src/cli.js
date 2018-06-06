#!/usr/bin/env node
'use strict';

const path = require('path');
const importJsx = require('import-jsx');
const { h, render } = require('ink');

const ui = importJsx('./ui');

render(h(ui));
