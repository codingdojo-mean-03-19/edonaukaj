//first number appeared is 1
function fib() {
    let prev = 0;
    let curr = 1;

    function nacci() {
        const temp = prev;

        console.log(curr);

        prev = curr;
        curr = curr + temp;
    }
    return nacci
}
//function fib is invoked and (each number is the sum of its two predecessors)
const fibCounter = fib();
fibCounter()
fibCounter()
fibCounter()
fibCounter()
fibCounter()
fibCounter()