import 'tslib';
import { injectable } from 'inversify';
import { SampleService1, ServiceResponse } from '@/services/SampleService1';

@injectable()
export class SampleService1Mock extends SampleService1 {
    public override getServiceResponse(): ServiceResponse {
        return {
            key1: 'MockValue1',
            key2: 'MockValue2'
        };
    }
}
