import { NgModule } from '@angular/core';

import { BooleanPipesModule } from './boolean/boolean.module';
import { MathPipesModule } from './math/math.module';
import { ObjectPipesModule } from './object/object.module';
import { RegexpPipesModule } from './regular_expression/regexp.module';
import { StringPipesModule } from './string/string.module';
import { UtilitiesPipesModule } from './utilities/utilities.module';
import { CollectionPipesModule } from './collection/collection.module';

export { BooleanPipesModule } from './boolean/boolean.module';
export { MathPipesModule } from './math/math.module';
export { ObjectPipesModule } from './object/object.module';
export { RegexpPipesModule } from './regular_expression/regexp.module';
export { StringPipesModule } from './string/string.module';
export { UtilitiesPipesModule } from './utilities/utilities.module';
export { CollectionPipesModule } from './collection/collection.module';

@NgModule({
  exports: [
    BooleanPipesModule,
    MathPipesModule,
    RegexpPipesModule,
    ObjectPipesModule,
    StringPipesModule,
    UtilitiesPipesModule,
    CollectionPipesModule
  ]
})
export class PipesModule { }
