export const getRandNumber = (min, max) => {
  return (Math.random() * max + 1) - min;
}

export const getIntRandNumber = (min, max) => {
  return max - Math.round(Math.random() * min + 1);
}

export const getFileOriginName = path => {
  const originName = path.split("\\");
  return originName[originName.length - 1];
}