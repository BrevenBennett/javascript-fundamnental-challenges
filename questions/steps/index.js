/** Print out steps based on a given positive integer N.
 * For each line, print out the character '#' to demonstrate
 * a step and make sure to use spaces to fill in the line.
 *
 * @example
 * steps(2)
 *  '# '
 *  '##'
 * steps(3)
 *  '#  '
 *  '## '
 *  '###'
 * steps(4)
 *  '#   '
 *  '##  '
 *  '### '
 *  '####'
 */

const steps = (n) => {
  for (i = 0; i < n; ++i) {
    let step = "";
    for (j = 0; j < n; ++j) {
      if (j <= i) {
        step += "#";
      } else {
        step += " ";
      }
    }
    console.log(step);
  }
};

module.exports = steps;
