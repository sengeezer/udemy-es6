// Retrieve object's constructor
function myConstructor() {
  console.log(new.target === myConstructor, typeof new.target);
  if (typeof new.target === 'function') {
    console.log(new.target.name);
  }
}

// new / its value can only be accessed in the constuctor function

// will not work without 'new'
new myConstructor();
