import { NgModule } from '@angular/core';

import { IsArrayPipe } from './is-array.pipe';
import { IsDefinedPipe } from './is-defined.pipe';
import { IsUndefinedPipe } from './is-undefined.pipe';
import { IsEmptyPipe } from './is-empty.pipe';
import { IsEmptyDimensionPipe } from './is-empty-dimension.pipe';
import { IsNullPipe } from './is-null.pipe';
import { IsEqualPipe } from './is-equal.pipe';
import { IsEqualTypePipe } from './is-equal-type.pipe';
import { IsNotEqualTypePipe } from './is-not-equal-type.pipe';
import { IsNotEqualPipe } from './is-not-equal.pipe';
import { IsLessPipe } from './is-less.pipe';
import { IsLessEqualPipe } from './is-less-equal.pipe';
import { IsGreaterEqualPipe } from './is-greater-equal.pipe';
import { IsGreaterPipe } from './is-greater.pipe';
import { IsFunctionPipe } from './is-function.pipe';
import { IsNilPipe } from './is-nil.pipe';
import { IsNumberPipe } from './is-number.pipe';
import { IsStringPipe } from './is-string.pipe';
import { IsObjectPipe } from './is-object.pipe';

@NgModule({
    declarations: [
        IsArrayPipe,
        IsDefinedPipe,
        IsUndefinedPipe,
        IsEmptyPipe,
        IsEmptyDimensionPipe,
        IsNullPipe,
        IsEqualPipe,
        IsEqualTypePipe,
        IsNotEqualTypePipe,
        IsNotEqualPipe,
        IsLessPipe,
        IsLessEqualPipe,
        IsGreaterEqualPipe,
        IsGreaterPipe,
        IsFunctionPipe,
        IsNilPipe,
        IsFunctionPipe,
        IsNumberPipe,
        IsStringPipe,
        IsObjectPipe
    ],
    exports: [
        IsArrayPipe,
        IsDefinedPipe,
        IsUndefinedPipe,
        IsEmptyPipe,
        IsEmptyDimensionPipe,
        IsNullPipe,
        IsEqualPipe,
        IsEqualTypePipe,
        IsNotEqualTypePipe,
        IsNotEqualPipe,
        IsLessPipe,
        IsLessEqualPipe,
        IsGreaterEqualPipe,
        IsGreaterPipe,
        IsFunctionPipe,
        IsNilPipe,
        IsFunctionPipe,
        IsNumberPipe,
        IsStringPipe,
        IsObjectPipe
    ]
})
export class BooleanPipesModule { }
