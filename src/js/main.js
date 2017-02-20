import $ from 'jquery';
import token from "./token.js";

function gather(data, callback) {
    $.ajax({
        url: `https://api.github.com/users/TylerLaurenceau`,
        dataType: "json",
        headers: {
            "Authorization": `token ${token}`
        },
        success: placeInfo
    })
};
gather();

function placeInfo(data) {
    $(".info").append(`<ul class = "currentInfo">
                        <li>Name: ${data.name}</li>
                        <li><a href = "${data.html_url}">Github URL</a></li>
                        <li><a href = "https://www.youtube.com/channel/UC5n6RslnzgMRV5AyXXSw6qA">YouTube Channel</a>
                        <li>Email: ${data.email}</li>
                        <li>Phone Number: (470)269-5150</li>
                        <li>Location: ${data.location}</li>
                        </ul>`)
    placeAboutMe(data);
}

function placeAboutMe(data) {
    $(".aboutMe").append(`<div>${data.bio}</div>`);
    picture(data);
}
function picture(data){
  $(".picture").html(`<img src = "${data.avatar_url}"/>`);
  myName(data);
}
function myName(data){
  console.log(data);
  $(".header").html(`${data.name}`);
}
