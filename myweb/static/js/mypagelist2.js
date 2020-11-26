function cpu_info(){
    $.ajax({
        method: 'GET',
        url: 'cpu_info',
        success: function(data){
            console.log(data);
            $("#s2_box1").html("");  
            $("#s2_box1").append("cpu數量為 : " + data.num +'<br>'+ 
            "cpu核心數為 : "+ data.core_num +'<br>'+ 
            "cpu型號為 : " + data.core_no);
        },
        error: function(error_data){
            console.log('error');
        }
    });
};

$(function(){
    $("#s2_btn1_id").click(function() {
        console.log('data');
        cpu_info();
    });
});

//======================================================================

function disk_info(){
    $.ajax({
        method: 'GET',
        url: 'disk',
        success: function(data){
            console.log(data);
            $("#s2_box2").html("");  
            $("#s2_box2").append(
            "制造商 : " + data.Manufacturer +'<br>'+ 
            "型號 : "+ data.Model +'<br>'+ 
            "sn : " + data.SerialNumber +'<br>'+
            "大小 : " + data.Size);
        },
        error: function(error_data){
            console.log('error');
        }
    });
};

$(function(){
    $("#s2_btn2_id").click(function() {
        disk_info();
    });
});

//======================================================================

function net_ip_info(){
    $.ajax({
        method: 'GET',
        url: 'net_ip',
        success: function(data){
            console.log(data);
            $("#s2_box3").html("");  
            $("#s2_box3").append(
            "ip : " + data.ip);
        },
        error: function(error_data){
            console.log('error');
        }
    });
};

$(function(){
    $("#s2_btn3_id").click(function() {
        net_ip_info();
    });
});

//======================================================================

function sys_info(){
    $.ajax({
        method: 'GET',
        url: 'sys',
        success: function(data){
            console.log(data);
            $("#s2_box4").html("");  
            $("#s2_box4").append(
            "系統名稱 : " + data.sys_name +'<br>'+ 
            "系統版本 : "+ data.sys_ver);
        },
        error: function(error_data){
            console.log('error');
        }
    });
};

$(function(){
    $("#s2_btn4_id").click(function() {
        sys_info();
    });
});

//======================================================================

// 判斷瀏覽器
$(function(){
    var explorer =navigator.userAgent
    if (explorer.indexOf("Firefox") >= 0) {
        $("#s2_box5").append("這是 Firefox 瀏覽器");
    }
    else if(explorer.indexOf("Chrome") >= 0){
        $("#s2_box5").append("這是 Chrome 瀏覽器");
    }else  { 
        $("#s2_box5").append("我不知道是甚麼瀏覽器"); 
    }
})

//======================================================================

// 清除資料
$(function(){
    $("#s2_clean").click(function() {
        $("#s2_box1").html("");
        $("#s2_box2").html("");
        $("#s2_box3").html("");
        $("#s2_box4").html("");
    });
});