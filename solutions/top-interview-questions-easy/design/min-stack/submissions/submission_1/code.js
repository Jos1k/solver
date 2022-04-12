
var MinStack = function() {
    this.stack = [];
    this.min = undefined;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {

    if (!this.stack.length) {
        this.min = val;
    } else if(val < this.min) {
        this.min = val;
    }

    if (this.min === undefined || val < this.min) {
        this.min = val;
    }
    
    this.stack.push( { value: val, min: this.min });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
    
    if (!this.stack.length) {
        this.min = undefined;
    } else {
        this.min = this.stack[this.stack.length-1].min;
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1].value;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


module.exports = MinStack;