import 'tslib';
import { injectable } from 'inversify';

@injectable()
export class SampleService1 {
    public getServiceResponse(): ServiceResponse {
        return {
            key1: 'Value1',
            key2: 'Value2'
        };
    }
}

export interface ServiceResponse {
    key1: string;
    key2: string;
}
