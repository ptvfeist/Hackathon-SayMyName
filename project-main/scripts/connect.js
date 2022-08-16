const settings = {
    "async": true,
    "url": "http://192.168.3.61:3000",
    "method": "GET",
};
$.ajax(settings).done(function (response) {
    const encoded = encodeURIComponent(response);
    
    $("#spinner").css("display", "none");
/*const settings = {
    “async”: true,
    “crossDomain”: true,
    “url”: “https://qrickit-qr-code-qreator.p.rapidapi.com/api/qrickit.php?d=” + encoded,
    “method”: “GET”,
    “headers”: {
        “X-RapidAPI-Key”: “bb3bda8272msh93d31df978610c6p1ff625jsn9d993dc2e3de”,
        “X-RapidAPI-Host”: “qrickit-qr-code-qreator.p.rapidapi.com”
    }
};
$.ajax(settings).done(function (imageResp) {
    console.log(imageResp);
});*/
$("#qrCode").addClass("col-sm-4").
    prepend("<img alt='qrcode' src='https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=" + encoded + "' />");
    console.log(response);
});