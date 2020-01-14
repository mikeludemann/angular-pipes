import { NgModule } from '@angular/core';

import { MatchPipe } from './match.pipe';
import { TestPipe } from './test.pipe';

@NgModule({
    declarations: [
        MatchPipe,
        TestPipe
    ],
    exports: [
        MatchPipe,
        TestPipe
    ]
})
export class RegexpPipesModule { }
