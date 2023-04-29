"use strict";
class Movie {
    constructor(title, _year, id) {
        this.title = title;
        this._year = _year;
        this.id = id;
    }
    getYear() {
        return this._year;
    }
}
const movie = new Movie('The Dark Knight', 2008, 1);
//# sourceMappingURL=acessModify.js.map