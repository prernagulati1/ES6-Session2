const radius = '5';
const length = '4';
const width = '3';
const height = '15';

const areaOfCircle = (radius) => 3.14 * radius * radius;
const areaOfRectangle = (length , width) => length * width;
const areaOfCylinder = (radius, height) => 2* 3*14 * radius * height + 2 * 3.14 * radius * radius;

export {radius , height , length , width , areaOfCircle, areaOfRectangle, areaOfCylinder};