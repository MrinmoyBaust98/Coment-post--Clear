// Post Button ke select korbo
const postButton=document.getElementById('post-btn');
postButton=document.addEventListener('click',function(){

    //textfield ke select korbo..and je coment likbo setake nibo
    const textField=document.getElementById('write-comment');
    //amader likha comment
    const ourComment=textField.value;

    //ekta paragraph create korbo and sekhane amader lekha comment rakbo
    const newComment=document.createElement('p');
    newComment.innerText=ourComment;

    // amra je comment likbo tar font weight baray dibe .bold korbe 
    newComment.style.fontWeight='700'; 
    newComment.style.fontSize = "large";

    // akhon paragraph ke ager comment gular sathe add kore dibo

    // first ea comment er div ke select korbo, then child hisabe add kore dibo
    const commentBox=document.getElementById('coment-container');
    commentBox.appendChild(newComment);

    //textfiled clear
    textField.value='';
})