let DAT = [, 9, 8, 5, 2, 4, 6, 1, 7, 3]; // 添字1から利用するのが一般的らしい
const N = DAT.length - 1;

const swap = (DAT, left, right) => {
  let tempDat = DAT[left];
  DAT[left] = DAT[right];
  DAT[right] = tempDat;
};

const heapSort = DAT => {
  constructionHeap(DAT);
  console.log('DAT:', DAT);
  let i = N;
  while (i > 1) {
    swap(DAT, 1, i);
    i = i - 1;
    downHeap(DAT, 1, i);
  }
};

// 根だけが条件を満たさないヒープをヒープに際構築
// 根の値を大きい葉の値と交換することを繰り返して適切な位置まで落とす
const downHeap = (DAT, root, tail) => {
  let work = DAT[root];
  let j = root * 2; // 左の子を仮の候補に

  if (j + 1 <= tail && DAT[j + 1] > DAT[j]) {
    j = j + 1; // 右の子に変更
  }

  while (j <= tail && work < DAT[j]) {
    DAT[root] = DAT[j]; // 子を上にあげる
    root = j;
    j = root * 2;
    if (j + 1 <= tail && DAT[j + 1] > DAT[j]) {
      j = j + 1;
    }
  }
  DAT[root] = work;
};

const constructionHeap = DAT => {
  let i = Math.floor(N / 2);
  for (i; i >= 1; i--) {
    downHeap(DAT, i, N);
  }
};

heapSort(DAT);
console.log('DAT:', DAT);
