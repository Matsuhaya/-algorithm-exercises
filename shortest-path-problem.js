const M = 10000;
const N = 8;
let distance = [];
let visit = [];
let path = [];

const route = [
  [M, 1, 4, 5, M, M, M, M],
  [1, M, M, 3, 6, M, M, M],
  [4, M, M, 2, M, M, M, M],
  [5, 3, 2, M, 2, M, 5, M],
  [M, 6, M, 2, M, 2, 1, 3],
  [M, M, M, M, 2, M, M, 4],
  [M, M, M, 5, 1, M, M, 6],
  [M, M, M, M, 3, 4, 6, M]
];

const shortest_path = start => {
  let min, v, size;

  // 初期処理
  for (let i = 0; i < N; i++) {
    distance[i] = route[start][i];
    visit[i] = 0;
    path[i] = start;
  }
  visit[start] = 1;
  size = 1; // 確定した節数を1とする

  distance[start] = 0;
  path[start] = -1;

  while (size < N) {
    min = M;
    for (let i = 0; i < N; i++) {
      if (visit[i] === 0 && distance[i] < min) {
        min = distance[i];
        v = i;
      }
    }

    visit[v] = 1;
    size++;

    for (let x = 0; x < N; x++) {
      if (route[v][x] !== M && visit[x] === 0) {
        if (distance[x] > distance[v] + route[v][x]) {
          distance[x] = distance[v] + route[v][x];
          path[x] = v;
        }
      }
    }
  }

  console.log('distance:', distance);
  console.log('path:', path);
};

shortest_path(3);
