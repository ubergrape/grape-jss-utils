'use strict';

exports.__esModule = true;
exports['default'] = {
  clearfix: {
    zoom: 1,
    '&:after, &:before': {
      content: '""',
      display: 'table'
    },
    '&:after': {
      clear: 'both'
    }
  },
  ellipsis: {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    display: 'block'
  }
};
module.exports = exports['default'];