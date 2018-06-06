'use strict';

const { h, Text } = require('ink');
const SelectInput = require('ink-select-input');
const opn = require('opn');

const open = url => opn(url, { wait: false });

const handleSelect = item => {
  if (item.url) {
    open(item.url);
  }

  if (item.action) {
    item.action();
  }
};

const items = [
  {
    label: 'Website',
    url: 'https://github.com/hkwid'
  },
  {
    label: 'Quit',
    action: () => {
      process.exit();
    }
  }
];

module.exports = () => (
  <div>
    <br />
    <div>
      <Text>I'm a Web frontend developer based in Berlin.</Text>
    </div>
    <br />
    <SelectInput items={items} onSelect={handleSelect} />
  </div>
);
