/**
 * Adds delay in execution of a program
 * @param ms intended number of milliseconds to sleep for
 */
function sleep(ms) {
    if (typeof ms !== "number" || ms < 0){
        throw new Error("Invalid time parameter")
    }
    return new Promise(resolve => setTimeout(resolve, ms));
  }

module.exports = sleep