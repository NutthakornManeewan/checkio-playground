const _ = require("lodash");

let posts = [
    { id: "1abc", title: "First blog post", content: "..." },
    { id: "2abc", title: "Second blog post", content: "..." },
    { id: "34abc", title: "The blog post we want", content: "..." }
];

let newPosts = _.keyBy(posts, "id");
console.log("newPosts >>> ", newPosts);
