// not replaced as unique context is required to create objects
const Entity = function( name, delay ) {
    this.name = name;
    this.delay = delay;
};

// again, default context required, don't want to bind to external context
Entity.prototype.greet = function() {
    setTimeout(() => {
        console.log( 'Hi, I am ' + this.name );
    }, this.delay );
};

const java = new Entity( 'Java', 5000 );
const cpp = new Entity( 'C++', 30 );

java.greet();
cpp.greet();
