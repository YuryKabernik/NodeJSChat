import ErrorHandler from './base/ErrorHandler';

export default class Error500Handler extends ErrorHandler {

    constructor() {
        super(500, 'Internal server error.');
    }
}
