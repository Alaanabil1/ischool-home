
  const phoneInputField = document.getElementById("phonenumInput");
  const phoneInput = window.intlTelInput(phoneInputField, {
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
  });

  const error = document.getElementById("phonenumInput_error");


  function isPhone() {


            const phoneNumber = phoneInput.getNumber();

            if (phoneInput.isValidNumber()) {

                $('#phonenumInput').val(phoneNumber);
                return true;
            } else {
                return false;
            }
    
  }
$(".step01").show();
$(".header .close-btn").click(function() {
    $(".header .nav").animate({
            right: "-85%",
        },
        300
    );
});
$(".header .menu-btn").click(function() {
    $(".header .nav").animate({
            right: 0,
        },
        300
    );
});
$("#countryInput1").click(function() {
    $(".country-menu").slideToggle("fast")
})
$("#countryInput1").keyup(function() {

    var filter = $(this).val();
    $(".country ul li").each(function() {
        if ($(this).text().search(new RegExp(filter, "i")) < 0) {
            $(this).hide();
        } else {
            $(this).show()
        }
    });
});
$(".country ul li").click(function() {
    $("#countryInput1").val($(this).html())
})
$(".btn.signup").click(function() {
    $(".step01").hide("drop", { direction: "left" }, 300);
    setTimeout(function() {
        $(".step02").show("drop", { direction: "right" }, 300);
    }, 400)
})

$(".scheduletableitem").click(function() {
    $(".scheduletableitem").removeClass("active");
    $(".check").removeClass("active");
    $(this).addClass("active");
    Num = $(this).index();
    $(".scheduletableitem:nth-child(" + (Num + 1) + ") .check").addClass("active")
})

$(".btn.next").click(async function() {
    $(".step02").hide("drop", { direction: "left" }, 300);
    setTimeout(function() {
        $(".step03").show("drop", { direction: "right " }, 300);
    }, 400)
})

$(".step02 .back").click(function() {
    $(".step02").hide("drop", { direction: "right" }, 300);
    setTimeout(function() {
        $(".step01").show("drop", { direction: "left" }, 300);
    }, 400)
})
$(".step03 .back").click(function() {
    $(".step03").hide("drop", { direction: "right" }, 300);
    setTimeout(function() {
        $(".step02").show("drop", { direction: "left" }, 300);
    }, 400)
})

var choosen_date_var = '';



function checkout() {
//     const configuration = {
//     locale : "en",  //default en
//     mode: DISPLAY_MODE.POPUP,  //required, allowed values [POPUP, INSIDE_PAGE, SIDE_PAGE]
// };
// FawryPay.checkout(buildChargeRequest(), configuration);

location.href = return_page+ "?orderStatus=PAID&statusCode=200&paymentMethod=PayUsingCC&merchantRefNumber="+choosen_ref
}

function buildChargeRequest() {
    var chargeRequest = {
        merchantCode: 'siYxylRjSPwQs0gHngum7Q==',
        merchantRefNum: choosen_ref,
        customerMobile: $("#phonenumInput").val(),
        customerEmail: $("#emailInput").val() ,
        customerProfileId :'1111',
        customerName: $("#firstnameInput").val(),
        chargeItems: [
                {
                    itemId: '6b5f',
                    description: 'Product Description',
                    price: choosen_pay_as,
                    quantity: 1,
                    imageUrl: 'https://your-site-link.com/photos/45566.jpg',

                }
                ],
                    returnUrl: return_page,
                    authCaptureModePayment: false,
                };
                    
chargeRequest.signature  = signRequest(chargeRequest);
                    
return chargeRequest;
}

function signRequest(chargeRequest){
var signString = chargeRequest['merchantCode']+chargeRequest.merchantRefNum;
signString += chargeRequest.customerProfileId!=null?chargeRequest.customerProfileId:'';
signString += chargeRequest.returnUrl!=null?chargeRequest.returnUrl:'';
var items = chargeRequest.chargeItems.sort(function (x, y) {
let a = x.itemId.toUpperCase(),
    b = y.itemId.toUpperCase();
return a == b ? 0 : a > b ? 1 : -1;});

items.forEach((item) => {
    signString += item.itemId+''+item.quantity+''+item.price.toFixed(2);
});
signString += "d05552a3-be4b-4b66-8a4f-e059f9b9b4cb";

return  sha256(signString);
}


$(".days-slider").hide();
var maxDays


function detectMonthdays(){
if($("#monthDate").val() === "01"||$("#monthDate").val() === "03"||$("#monthDate").val() === "05"||$("#monthDate").val() === "07"||$("#monthDate").val() === "08"||$("#monthDate").val() === "10"||$("#monthDate").val() === "12"){
    $(".mb-3.date.days .days-slider li").each(function(){
        $(this).show()
    })
    maxDays = 31;
}
else if($("#monthDate").val() === "02"){
    maxDays = 28;
    $(".mb-3.date.days .days-slider li").each(function(){
        if ($(this).index() > 27 ){
            $(this).hide();
        }
        else{
            $(this).show();
        }
    })
}
else{
    maxDays = 30;
    $(".mb-3.date.days .days-slider li").each(function(){
        if ($(this).index() > 29 ){
            $(this).hide();
        }
        else{
            $(this).show();
        }
    })
}
}

function optmizeZero(){
    $(".mb-3.date .form-control").each(function(){
        if($(this).val() === "1" ||$(this).val() === "2" ||$(this).val() === "3" ||$(this).val() === "4" ||$(this).val() === "5" ||$(this).val() === "6" ||$(this).val() === "7" ||$(this).val() === "8" ||$(this).val() === "9"){
            $(this).val(("0" + $(this).val())) 
        }
    })
}
function detectDay(){
    if($("#dayDate").val() < 1){
        $("#dayDate").val("01") 
        $(".mb-3.date.days .days-slider li").removeClass("active");
        $(".mb-3.date.days .days-slider li:first-child").addClass("active")
    }
    else if ($("#dayDate").val() > maxDays) {
        $("#dayDate").val(maxDays)
        $(".mb-3.date.days .days-slider li").removeClass("active");
        $(".mb-3.date.days .days-slider li:nth-child(" + maxDays +")").addClass("active")
    }
    else{
        $(".mb-3.date.days .days-slider li").removeClass("active");
        $(".mb-3.date.days .days-slider li:nth-child(" + $("#dayDate").val() +")").addClass("active")
    }
}
function detectMonth(){
    if($("#monthDate").val() < 1){
        $("#monthDate").val("01") 
        $(".mb-3.date.months .days-slider li").removeClass("active");
        $(".mb-3.date.months .days-slider li:first-child").addClass("active")
    }
    else if ($("#monthDate").val() > 12) {
        $("#monthDate").val("12")
        $(".mb-3.date.months .days-slider li").removeClass("active");
        $(".mb-3.date.months .days-slider li:nth-child(12)").addClass("active")
    }
    else{
        $(".mb-3.date.months .days-slider li").removeClass("active");
        $(".mb-3.date.months .days-slider li:nth-child(" + $("#monthDate").val() +")").addClass("active")
    }
}
let Yearsarr = [];
for (i = 1; i <= 13 ; i++ ){
    Yearsarr.push($(".mb-3.date.years .days-slider li:nth-child(" + i +")").text())
}
function detectyear(){
 
    if(!Yearsarr.includes($("#yearDate").val())){
        $("#yearDate").addClass("error")
    }
    else if($("#yearDate").val("")){
        $("#yearDate").addClass("error")
    }
    else{
        $("#yearDate").removeClass("error")
    }
}
genrateYears();

$("#dayDate").click(function(){
    $(".mb-3.date.days .days-slider").toggle(100);
})
$("#yearDate").click(function(){
    $(".mb-3.date.years .days-slider").toggle(100);
})
$("#dayDate").focusout(function(){
    detectMonthdays();
    optmizeZero();
    detectDay();
    detectMonth();
})
$("#monthDate").focusout(function(){
    detectMonthdays();
    optmizeZero();
    detectMonth();
    detectDay();
})
$("#yearDate").focusout(function(){
    detectMonthdays();
    optmizeZero();
    detectMonth();
    detectDay();
    detectyear();
})
$("#monthDate").click(function(){
    $(".mb-3.date.months .days-slider").toggle(100);
})


$(document).click(function() {
    var container = $(".mb-3.date.days .days-slider");
    var textb = $("#dayDate");
    if (!container.is(event.target) && !container.has(event.target).length) {
        if(!textb.is(event.target)){
            container.hide();
        } 
    }
});
$(document).click(function() {
    var container = $(".mb-3.date.months .days-slider");
    var textb = $("#monthDate");
    if (!container.is(event.target) && !container.has(event.target).length) {
        if(!textb.is(event.target)){
            container.hide();
        } 
    }
});

$(".mb-3.date.months .days-slider li").click(function(){
    $(".mb-3.date.months .days-slider li").removeClass("active")
    $(this).addClass("active")
    $("#monthDate").val($(this).html())
    $(".mb-3.date.months .days-slider").hide();
    detectMonthdays();
    detectMonth();
    detectDay();
})
$(".mb-3.date.days .days-slider li").click(function(){
    $(".mb-3.date.days .days-slider li").removeClass("active")
    $(this).addClass("active")
    $("#dayDate").val($(this).html())
    $(".mb-3.date.days .days-slider").hide();
    detectMonthdays();
    detectDay();
    detectMonth();
})
$(".mb-3.date.years .days-slider li").click(function(){
    $(".mb-3.date.years .days-slider li").removeClass("active")
    $(this).addClass("active")
    $("#yearDate").val($(this).html())
    $(".mb-3.date.years .days-slider").hide();
    detectMonthdays();
    detectDay();
    detectMonth();
})

function genrateYears(){
    var date = new Date
    for (i = Number(date.getFullYear() - 18); i <= Number(date.getFullYear() -6) ; i++ ){
        $(".mb-3.date.years .days-slider").html( $(".mb-3.date.years .days-slider").html() + "<li>" + i +"</li>" )
    } 

}
$(document).click(function() {
    var container = $(".mb-3.date.years .days-slider");
    var textb = $("#yearDate");
    if (!container.is(event.target) && !container.has(event.target).length) {
        if(!textb.is(event.target)){
            container.hide();
        } 
    }
});
