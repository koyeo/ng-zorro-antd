import {
  chain,
  Rule
} from '@angular-devkit/schematics';
import { buildComponent } from '../utils/build-component';

import { Schema } from './schema';

export default function(options: Schema): Rule {
  return chain([
    buildComponent(
      { ...options }
    )
  ]);
}
