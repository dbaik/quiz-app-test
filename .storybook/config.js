import { configure } from '@storybook/react';
import { configureViewport, INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);

configureViewport({ viewports: INITIAL_VIEWPORTS });
