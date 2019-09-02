function symmetric(mat) {
  for (let i = 0; i < mat.length; i++) {
      const row = mat[i];
      for (let j = 0; j < row.length; j++) {
          if(mat[i][j] !== -(mat[j][i])) {
              return false;
              break;
          }
      }
  }
    return true;
}

module.exports = {
  symmetric
};
