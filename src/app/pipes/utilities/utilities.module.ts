import { NgModule } from '@angular/core';

import { AfterPipe } from './after.pipe';
import { AfterWherePipe } from './after-where.pipe';
import { BeforePipe } from './before.pipe';
import { BeforeWherePipe } from './before-where.pipe';
import { ChunkByPipe } from './chunk-by.pipe';
import { ConcatPipe } from './concat.pipe';
import { ContainsPipe } from './contains.pipe';
import { DefaultsPipe } from './defaults.pipe';
import { EveryPipe } from './every.pipe';
import { FilterByPipe } from './filter-by.pipe';
import { FirstPipe } from './first.pipe';
import { FlattenPipe } from './flatten.pipe';
import { FuzzyPipe } from './fuzzy.pipe';
import { FuzzyByPipe } from './fuzzy-by.pipe';
import { IsEmptyCollectionPipe } from './is-empty-collection.pipe';
import { JoinPipe } from './join.pipe';
import { LastPipe } from './last.pipe';
import { MapPipe } from './map.pipe';
import { ObjectToArrayPipe } from './object-to-array.pipe';
import { OmitPipe } from './omit.pipe';
import { PickPipe } from './pick.pipe';
import { RangePipe } from './range.pipe';
import { RemoveWithPipe } from './remove-with.pipe';
import { SearchfieldPipe } from './searchfield.pipe';
import { UniquePipe } from './unique.pipe';
import { WherePipe } from './where.pipe';
import { XorPipe } from './xor.pipe';

@NgModule({
    declarations: [
        AfterPipe,
        AfterWherePipe,
        BeforePipe,
        BeforeWherePipe,
        ChunkByPipe,
        ConcatPipe,
        ContainsPipe,
        DefaultsPipe,
        EveryPipe,
        FilterByPipe,
        FirstPipe,
        FlattenPipe,
        FuzzyPipe,
        FuzzyByPipe,
        IsEmptyCollectionPipe,
        JoinPipe,
        LastPipe,
        MapPipe,
        ObjectToArrayPipe,
        OmitPipe,
        PickPipe,
        RangePipe,
        RemoveWithPipe,
        SearchfieldPipe,
        UniquePipe,
        WherePipe,
        XorPipe
    ],
    exports: [
        AfterPipe,
        AfterWherePipe,
        BeforePipe,
        BeforeWherePipe,
        ChunkByPipe,
        ConcatPipe,
        ContainsPipe,
        DefaultsPipe,
        EveryPipe,
        FilterByPipe,
        FirstPipe,
        FlattenPipe,
        FuzzyPipe,
        FuzzyByPipe,
        IsEmptyCollectionPipe,
        JoinPipe,
        LastPipe,
        MapPipe,
        ObjectToArrayPipe,
        OmitPipe,
        PickPipe,
        RangePipe,
        RemoveWithPipe,
        SearchfieldPipe,
        UniquePipe,
        WherePipe,
        XorPipe
    ]
})
export class UtilitiesPipesModule { }
