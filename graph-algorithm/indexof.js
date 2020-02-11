function indexOf(value) {
    for (var i = this.length; i-- && this[i] !== value;) {}
    return i;
  }