const path = require('path');

const svgFilePaths = ['/src/assets/img/svg'].map((v) => path.resolve(v));
const tagName = 'icon';

module.exports = {
  tagName,
  svgFilePath: svgFilePaths,
  svgoConfig: {},
  pathAlias: {},
  transformAssetUrls: {},
};
