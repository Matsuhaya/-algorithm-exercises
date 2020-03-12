const swap = (DAT, left, right) => {
  let tempDat = DAT[left];
  DAT[left] = DAT[right];
  DAT[right] = tempDat;
};

const quickSoat = (DAT, left, right) => {
  let pivot = DAT[right];
  let lb = left;
  let rb = right;

  while (lb !== rb) {
    while (DAT[lb] < pivot) {
      lb = lb + 1;
    }
    while (lb < rb && DAT[rb - 1] >= pivot) {
      rb = rb - 1;
    }
    if (lb < rb) {
      swap(DAT, lb, rb - 1);
    }
  }

  swap(DAT, lb, right);

  if (lb - 1 > left) {
    quickSoat(DAT, left, lb - 1);
  }
  if (rb + 1 < right) {
    quickSoat(DAT, rb + 1, right);
  }
};

let DAT = [41, 26, 50, 28, 21, 11, 63, 18, 36, 35];

quickSoat(DAT, 0, DAT.length - 1);
console.log('DAT:', DAT);
