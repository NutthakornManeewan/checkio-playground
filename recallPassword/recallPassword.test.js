const { recallPassword } = require("./recallPassword");

test(`recallPassword(['X...','..X.','X..X','....'],['itdf','gdce','aton','qrdi']) == 'icantforgetiddqd'`, () => {
  expect(
    recallPassword(
      ["X...", "..X.", "X..X", "...."],
      ["itdf", "gdce", "aton", "qrdi"]
    )
  ).toEqual("icantforgetiddqd");
});

test(`recallPassword(['....','X..X','.X..','...X'],['xhwc','rsqx','xqzz','fyzr']) == 'rxqrwsfzxqxzhczy'`, () => {
  recallPassword(
    ["....", "X..X", ".X..", "...X"],
    ["xhwc", "rsqx", "xqzz", "fyzr"]
  ) == "rxqrwsfzxqxzhczy";
});
