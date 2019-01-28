import SassPlugin from '@pawjs/sass/webpack';
import ImageOptimizerPlugin from '@pawjs/image-optimizer/webpack';

export default class ProjectWebpack {
  constructor({ addPlugin }) {
    addPlugin(new SassPlugin());
    addPlugin(new ImageOptimizerPlugin({
      configLabel: 'MAX_QUALITY',
    }));
  }
}
