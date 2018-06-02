$(document).ready(function() {
    console.log(users)
})

function fillTable(users) {
    for (i = 0; i <= users.length; i++) {
        var userRow = "<tr>" +
            "<td>" + users.name + "</td>" +
            "<td>" + users.lastname + "</td>" +
            "<td>" + users.phone + "</td>" +
            "</tr>"
        $("#table-content").append(userRow)
    }
}


function fillUsersCards(users) {
    console.log("cards")
    for (i = 0; i < users.length; i++) {
        var userCard = "<div class='col-sm-3'>" +
            "<div class='user-card'>" +
            "<img src='img/generic-user.png' alt='...'' class='img-circle center-block'>" +
            "<h4>Username Lastname</h4>" +
            "<p>Phone</p>" +
            "</div>" +
            "</div>"
        $("#card-wrapper").append(userCard)
    }
}