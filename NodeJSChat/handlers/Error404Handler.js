import ErrorHandler from "./base/ErrorHandler";

export default class Error404Handler extends ErrorHandler{

    constructor() {
        super(404, 'Page not found.');
    }
}
