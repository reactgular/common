import {NgModule} from '@angular/core';
import {NgtUniversalModule} from '@ng-toolkit/universal';
import {LoggerService} from './logger/loggerService';
import {StackTraceService} from './stack-trace/stack-trace.service';

@NgModule({
    imports: [
        NgtUniversalModule
    ],
    providers: [
        LoggerService,
        StackTraceService
    ]
})
export class LoggerModule {
}