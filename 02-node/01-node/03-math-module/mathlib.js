module.exports = function() {
    return {
        add: function(num1, num2) {
            return num1 + num2;

        },
        multiply: function(num1, num2) {
            return num1 * num2;


        },
        square: function(num) {
            num * num;
        },
        random: function(num1, num2) {
            return Math.floor(math.random() * num2) + 1;
        }
    };
};