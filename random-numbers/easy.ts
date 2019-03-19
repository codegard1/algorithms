/**
 * 
 * @param max The maximum number to return 
 */
function getRandomInt(max: number): number {
  return Math.floor(Math.random() * Math.floor(max));
}

!function (): boolean {

  for (let i = 1; i < 100000; i++) {
    console.log(i + "  " + getRandomInt(i));
  }

  return true;
}();