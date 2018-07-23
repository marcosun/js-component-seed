import React from 'react';
import {hot} from 'react-hot-loader';

import DemoComponent from 'js-component-seed';

/**
 * Export a form call api with post method
 */
@hot(module)
class Demo extends React.Component {
  /**
   * Render a form sending post data
   * @return {Node}
   */
  render() {
    return <DemoComponent />;
  }
}

export default Demo;
