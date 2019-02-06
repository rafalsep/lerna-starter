import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Airport from '../index';

const stories = storiesOf('Airport', module);

stories.add('Standard Airport', () => (
  <Airport>
  </Airport>
));
