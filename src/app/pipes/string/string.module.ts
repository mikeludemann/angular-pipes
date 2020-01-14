import { NgModule } from '@angular/core';

import { CamelizePipe } from './camelize.pipe';
import { EndsWithPipe } from './ends-with.pipe';
import { LatinizePipe } from './latinize.pipe';
import { LefttrimPipe } from './lefttrim.pipe';
import { LowerPipe } from './lower.pipe';
import { LowercaseFirstPipe } from './lowercase-first.pipe';
import { RepeatPipe } from './repeat.pipe';
import { ReversePipe } from './reverse.pipe';
import { RighttrimPipe } from './righttrim.pipe';
import { SlugifyPipe } from './slugify.pipe';
import { SplitPipe } from './split.pipe';
import { StartsWithPipe } from './starts-with.pipe';
import { StringularPipe } from './stringular.pipe';
import { StriptagsPipe } from './striptags.pipe';
import { TitleizePipe } from './titleize.pipe';
import { TrimPipe } from './trim.pipe';
import { TruncatePipe } from './truncate.pipe';
import { UpperPipe } from './upper.pipe';
import { UppercaseFirstPipe } from './uppercase-first.pipe';
import { UriComponentEncodePipe } from './uri-component-encode.pipe';
import { UriEncodePipe } from './uri-encode.pipe';
import { WrapPipe } from './wrap.pipe';

@NgModule({
    declarations: [
        CamelizePipe,
        EndsWithPipe,
        LatinizePipe,
        LefttrimPipe,
        LowerPipe,
        LowercaseFirstPipe,
        RepeatPipe,
        ReversePipe,
        RighttrimPipe,
        SlugifyPipe,
        SplitPipe,
        StartsWithPipe,
        StringularPipe,
        StriptagsPipe,
        TitleizePipe,
        TrimPipe,
        TruncatePipe,
        UpperPipe,
        UppercaseFirstPipe,
        UriComponentEncodePipe,
        UriEncodePipe,
        WrapPipe
    ],
    exports: [
        CamelizePipe,
        EndsWithPipe,
        LatinizePipe,
        LefttrimPipe,
        LowerPipe,
        LowercaseFirstPipe,
        RepeatPipe,
        ReversePipe,
        RighttrimPipe,
        SlugifyPipe,
        SplitPipe,
        StartsWithPipe,
        StringularPipe,
        StriptagsPipe,
        TitleizePipe,
        TrimPipe,
        TruncatePipe,
        UpperPipe,
        UppercaseFirstPipe,
        UriComponentEncodePipe,
        UriEncodePipe,
        WrapPipe
    ]
})
export class StringPipesModule { }
