class Movie {
  constructor(
    public title: string,
    private _year: number,
    readonly id: number
  ) {}

  getYear() {
    return this._year
  }
}

const movie = new Movie('The Dark Knight', 2008, 1)