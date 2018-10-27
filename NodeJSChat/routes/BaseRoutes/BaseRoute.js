import express from 'express';
import fs from 'fs';

export default class BaseRoute {
    constructor(route = express.Router(), fileStream = fs) {
        this._route = route;
        this._fs = fileStream;
    }
}
