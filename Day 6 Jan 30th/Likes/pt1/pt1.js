var myLikes = 3;
var countLikes = document.querySelector(".likes");

console.log(countLikes);

function addLike() {
    myLikes++;
    countLikes.innerText = myLikes + " like(s)"
    console.log(myLikes);
}
