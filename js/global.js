let accOpend = false;
let notiOpend = false;
// $(".popup").hide();
function resetDropdowns() {
    notiOpend = false;
    accOpend = false;
    $(".notification-container").hide();
    $(".account-info-container").hide();
    $(".chat-container").hide();
    $(".blackoverlay").hide();

}
resetDropdowns()


//Notification button click
$(".blackoverlay").click(function() {
    $(this).hide("fast")
    $(".notification-container").hide("fast");
    resetDropdowns()
})
$(".close-noti").click(function() {
    $(".blackoverlay").hide("fast")
    $(".notification-container").hide("fast");
    resetDropdowns()
})

$(".fa-bell").click(function() {
        if (window.innerWidth >= 570) {
            if (notiOpend === false) {
                resetDropdowns()
                $(".notification-container").slideDown("fast");
                notiOpend = true;
            } else {
                $(".notification-container").slideUp("fast");
                notiOpend = false;
            }
        } else {
            if (notiOpend === false) {
                resetDropdowns()
                $(".blackoverlay").show()
                $(".notification-container").show();
                notiOpend = true;
                console.log("mobile")
            } else {
                $(".blackoverlay").hide()
                $(".notification-container").hide();
                notiOpend = false;
            }
        }
    })
    //Account Picture click

$(".account_pic img").click(function() {
    if (accOpend === false) {
        resetDropdowns()

        $(".account-info-container").slideDown("fast");
        accOpend = true;
    } else {

        $(".account-info-container").slideUp("fast");
        accOpend = false;
    }
})

// chat box code
clicks();
refresh();
let chatList = [
        ["instructorIssue01", "instructorIssue02", "instructorIssue03", "instructorIssue04", "instructorIssue05"],
        ["instructorIssue 01", "instructorIssue 02", "instructorIssue 03", "instructorIssue 04", "instructorIssue 05"],
        [1, 2, 3, 4, 5]
    ]
    // this function dectect which page are you in and add points in pagination
function refresh() {
    if ($(".chat-body").attr("data-detect") === "1") {
        $(".back-icon").hide();
    } else {
        $(".back-icon").show();
    }
    $(".chat-pagination").html("");
    let count = $(".chat-body").attr("data-detect")
    for (let i = 0; i < count; i++) {
        $(".chat-pagination").html($(".chat-pagination").html() + "<span></span>")
    }
    $(".fa-facebook-messenger").click(function() {
        $(".chat-container").slideDown("fast");
    })
    $(".chat-header .close").click(function() {
        $(".chat-container").slideUp("fast");
    })
    $(".back-icon").click(function() {
        refresh();
        if ($(".chat-body").attr("data-detect") === "text-chat") {
            step01();
        } else if ($(".chat-body").attr("data-detect") === "2") {
            step01();
        }
    })
}
//this function deal with text chat
function textchat() {
    $(".chat-container").html(`<div class="chat-header">
    <div class="col leftside">
     <div class="back-icon"><i class="fa-solid fa-chevron-left"></i></div>
    <div class="assistant">iSchool Assistant</div>
    </div>
    <div class="col-auto">
    <div class="close"><i class="fa-solid fa-xmark"></i></div>
 </div>
</div>
<div class="chat-body" data-detect="text-chat">
    <div class="sendLine"><span class="sender-pic"></span><span class="sender-msg">Lorem ipsum dolor, </span></div>
    <div class="receiveLine"><span class="receiver-pic"></span><span class="receiver-msg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi sint nihil ad, nisi repellendus eum enim quae necessitatibus quis earum! Hic maiores nesciunt, ipsam aspernatur similique quibusdam possimus tempore at!</span></div>
    <div class="sendLine"><span class="sender-pic"></span><span class="sender-msg">Lorem ipsum dolor, sit amet  Hic maiores nesciunt, ipsam aspernatur similique quibusdam possimus tempore at!</span></div>
    <div class="receiveLine"><span class="receiver-pic"></span><span class="receiver-msg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi sint nihil ad, nisi repellendus eum enim quae necessitatibus quis earum! Hic maiores nesciunt, ipsam aspernatur similique quibusdam possimus tempore at!</span></div>
    <div class="sendLine"><span class="sender-pic"></span><span class="sender-msg">Lorem ipsum dolor,  Animi sint nihil ad, nisi repellendus eum enim quae necessitatibus quis earum! Hic maiores nesciunt, ipsam aspernatur similique quibusdam possimus tempore at!</span></div>
    <div class="receiveLine"><span class="receiver-pic"></span><span class="receiver-msg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi sint nihil ad, nisi repellendus eum enim quae necessitatibus quis earum! Hic maiores nesciunt, ipsam aspernatur similique quibusdam possimus tempore at!</span></div>
</div>
<div class="chat-footer">
    <div class="sending-container">
        <div class="row">
            <div class="col">
                <div class="emojis-ico"><i class="fa-solid fa-face-grin"></i></div>
                <div class="input-chat" contenteditable="true"></div>
                <div class="attachico"><i class="fa-solid fa-link"></i></div>
                <div class="voiceico"><i class="fa-solid fa-microphone"></i></div>
            </div>
            <div class="col-auto">
                <div class="sendbtn"> <i class="fa-solid fa-play"></i></div>
            </div>
        </div>
       
    </div>
</div>
`)
    clicks();
}
//this function is the first step in list chat
function step01() {
    $(".chat-container").html(`
    <!-- list chat -->
    <div class="chat-header">
        <div class="col leftside">
            <div class="back-icon"><i class="fa-solid fa-chevron-left"></i></div>
            <div class="assistant">iSchool Assistant</div>
        </div>
        <div class="col-auto">
            <div class="close"><i class="fa-solid fa-xmark"></i></div>
        </div>
    </div>
    <hr>
    <div class="chat-body" data-detect="1">
        <li class="chat-choices-items" id="instructorIssue">I have problem with Instructor</li>
        <li class="chat-choices-items" id="financeIssue">I have Finance problem</li>
        <li class="chat-choices-items" id="supportIssue">I have problem with support agent</li>
        <li class="chat-choices-items" id="sessionIssue">I have problem with session</li>
        <li class="chat-choices-items" id="advice">Give us an advice</li>
        <li class="chat-choices-items" id="goChat">Go to chat</li>
    </div>
    <div class="chat-footer">
        <div class="chat-pagination">

        </div>
    </div>
    <!-- End list chat -->`);
    refresh();
    clicks();
}
//this function is the second step in list chat
function step02() {
    $(".chat-container").html(`

    <!-- list chat -->
                <div class="chat-header">
                    <div class="col leftside">
                        <div class="back-icon"><i class="fa-solid fa-chevron-left"></i></div>
                        <div class="assistant">iSchool Assistant</div>
                    </div>
                    <div class="col-auto">
                        <div class="close"><i class="fa-solid fa-xmark"></i></div>
                    </div>
                </div>
                <hr>
                <div class="chat-body" data-detect="` + chatList[2][1] + `">
                    <li class="chat-choices-items" id="` + chatList[0][0] + `">` + chatList[1][0] + `</li>
                    <li class="chat-choices-items" id="` + chatList[0][1] + `">` + chatList[1][1] + `</li>
                    <li class="chat-choices-items" id="` + chatList[0][2] + `">` + chatList[1][2] + `</li>
                    <li class="chat-choices-items" id="` + chatList[0][3] + `">` + chatList[1][3] + `</li>
                    <li class="chat-choices-items" id="` + chatList[0][4] + `">` + chatList[1][4] + `</li>
                    <li class="chat-choices-items" id="goChat">Go to chat</li>
                </div>
                <div class="chat-footer">
                    <div class="chat-pagination">
    
                    </div>
                </div>
                <!-- End list chat -->
`);

    refresh();
    clicks();
}

function step03() {
    $(".chat-container").html(`

    <!-- list chat -->
                <div class="chat-header">
                    <div class="col leftside">
                        <div class="back-icon"><i class="fa-solid fa-chevron-left"></i></div>
                        <div class="assistant">iSchool Assistant</div>
                    </div>
                    <div class="col-auto">
                        <div class="close"><i class="fa-solid fa-xmark"></i></div>
                    </div>
                </div>
                <hr>
                <div class="chat-body" data-detect="` + chatList[2][1] + `">
                    <li class="chat-choices-items" id="` + chatList[0][0] + `">` + chatList[1][0] + `</li>
                    <li class="chat-choices-items" id="` + chatList[0][1] + `">` + chatList[1][1] + `</li>
                    <li class="chat-choices-items" id="` + chatList[0][2] + `">` + chatList[1][2] + `</li>
                    <li class="chat-choices-items" id="` + chatList[0][3] + `">` + chatList[1][3] + `</li>
                    <li class="chat-choices-items" id="` + chatList[0][4] + `">` + chatList[1][4] + `</li>
                    <li class="chat-choices-items" id="goChat">Go to chat</li>
                </div>
                <div class="chat-footer">
                    <div class="chat-pagination">
    
                    </div>
                </div>
                <!-- End list chat -->
`);

    refresh();
    clicks();
}

// this function reset all clicks
function clicks() {

    $(".chat-choices-items").click(function() {
        if ($(this).attr("id") === "goChat") {
            textchat();
        } else if (($(this).attr("id") === "instructorIssue")) {
            step02();

        } else if (($(this).attr("id") === "financeIssue")) {
            step02();

        } else if (($(this).attr("id") === "supportIssue")) {
            step02();

        } else if (($(this).attr("id") === "sessionIssue")) {
            step02();

        } else if (($(this).attr("id") === "advice")) {
            step02();

        }
        refresh();
    })

}