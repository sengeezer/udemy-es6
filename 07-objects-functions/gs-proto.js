let proto = {
  whoami() {
    console.log('I am proto');
  }
}

let obj = {
  whoami() {
    super.whoami();
    console.log('I am obj');
  }
}

console.log(Object.getPrototypeOf(obj));

Object.setPrototypeOf(obj, proto);

obj.whoami();
