/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let maxWealth = 0;

    for (let account of accounts) {
    
        let localSum = 0;

        for (let j = 0; j < account.length; j++) {
            localSum += account[j];
        }

        if (localSum > maxWealth) {
            maxWealth = localSum;
        }
    }

    return maxWealth;
};