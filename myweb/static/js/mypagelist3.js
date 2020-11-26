//CPU 資料
function cpu(){
    var cpu_num =navigator.hardwareConcurrency;
    console.log('cpu:',cpu_num)
    $("#s3_box1").html("");  
    $("#s3_box1").append('CPU數量 : ',cpu_num);
}

$(function(){
    $("#s3_btn1_id").click(function() {
        cpu();
    });
});

//======================================================================
// 判斷瀏覽器
function browser(){
    var explorer =navigator.userAgent
    console.log('explorer:',explorer)
    $("#s3_box2").html("");  
    if (explorer.indexOf("Firefox") >= 0) {
        $("#s3_box2").append("這是 Firefox 瀏覽器");
    }
    else if(explorer.indexOf("Chrome") >= 0){
        $("#s3_box2").append("這是 Chrome 瀏覽器");
    }else  { 
        $("#s3_box2").append("我不知道是甚麼瀏覽器"); 
    }
}
$(function(){
    $("#s3_btn2_id").click(function() {
        browser();
    });
});

//======================================================================

// 判斷IP
function ip_info(){
    $.ajax({
        method: 'GET',
        url: '//api.ipify.org/?format=json',
        success: function(data){
            console.log(data);
            $("#s3_box3").html("");  
            $("#s3_box3").append(data.ip);
        },
    });
};

$(function(){
    $("#s3_btn3_id").click(function() {
        ip_info();
    });
});

//======================================================================

// 判斷作業系統
function sys(){
    var sys =navigator.userAgent
    console.log(sys);
    if (sys.indexOf("Windows NT 10") >= 0) {
        $("#s3_box4").append("這是 Windows 10 版本"+'<br>');
    }
    else if(sys.indexOf("Windows NT 8") >= 0){
        $("#s3_box4").append("這是 Windows 8 版本");
    }else if(sys.indexOf("Windows NT 7") >= 0){
        $("#s3_box4").append("這是 Windows 7 版本");
    }else  { 
        $("#s3_box4").append("我不知道是甚麼作業系統"); 
    }
};

// 判斷作業系統版本
function sys_ver(){
    var sys_ver =navigator.userAgent
    if (sys_ver.indexOf("x64") >= 0) {
        $("#s3_box4").append("64位元");
    }
    else if(sys_ver.indexOf("x86") >= 0){
        $("#s3_box4").append("32位元");
    }else  { 
        $("#s3_box4").append("我不知道是甚麼作業系統版本"); 
    }
}

$(function(){
    $("#s3_btn4_id").click(function() {
        $("#s3_box4").html("");
        sys();
        sys_ver();
    });
});

//======================================================================


// 清除資料
$(function(){
    $("#s3_clean").click(function() {
        $("#s3_box1").html("");
        $("#s3_box2").html("");
        $("#s3_box3").html("");
        $("#s3_box4").html("");
    });
});

