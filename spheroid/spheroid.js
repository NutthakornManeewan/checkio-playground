const pi = Math.PI;
function surfaceOblate(c, a) {
  const [aPow, cPow] = [Math.pow(a, 2), Math.pow(c, 2)];
  const e = Math.sqrt(1 - cPow / aPow);
  let t1 = 2 * pi * aPow;
  let t2 = (pi * cPow) / e;
  let t3 = Math.log((1 + e) / (1 - e));
  return t1 + t2 * t3;
}

function surfaceProlate(c, a) {
  const [aPow, cPow] = [Math.pow(a, 2), Math.pow(c, 2)];
  const e = Math.sqrt(1 - aPow / cPow);
  let t1 = 2 * pi * aPow;
  let t2 = 1 + (c * Math.asin(e)) / (a * e);
  return t1 * t2;
}

function spheroidVolume(c, a) {
  const aPow = Math.pow(2 * a, 2);
  return (pi / 6) * aPow * (2 * c);
}

function spheroid(c, a) {
  let [C, A] = [c / 2, a / 2];
  let S = 0;
  let V = spheroidVolume(C, A);
  if (C < A) {
    S = surfaceOblate(C, A);
  } else if (C > A) {
    S = surfaceProlate(C, A);
  } else {
    S = 4 * pi * Math.pow(C, 2);
    V = (4 / 3) * pi * Math.pow(C, 3);
  }
  console.log(C,A);
  return [Math.round(V * 100) / 100, Math.round(S * 100) / 100];
}

module.exports = {
  spheroid
};
