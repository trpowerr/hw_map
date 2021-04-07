export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
    this.errors.set(111, 'Error111');
    this.errors.set(222, 'Error222');
    this.errors.set(333, 'Error333');
    this.errors.set(444, 'Error444');
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Unknown error';
  }
}
