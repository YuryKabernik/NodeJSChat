import ErrorHandler from "./base/ErrorHandler";

export default class Error404Handler extends ErrorHandler{

    constructor() {
        super(401, 'Page not found.');
    }
}
