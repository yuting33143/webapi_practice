$(function(){
    $.ajax({
        url:"https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-069?Authorization=CWB-ABCE75C5-ADA1-4E31-8A2F-1544D8AF6208&locationName=%E6%9D%BF%E6%A9%8B%E5%8D%80&elementName=T",
        method:"GET",
        dataType:"JSON",

        success:function(res){
            console.log(res);
            console.log(res.records.locations[0].location[0].weatherElement[0].time[0].elementValue[0].value);
            $('#city_name').html(res.records.locations[0].locationsName);
            $('#district').html(res.records.locations[0].location[0].locationName);
            $('#tempture').html(res.records.locations[0].location[0].weatherElement[0].time[0].elementValue[0].value+"&#176");
            const week = ["MON","TUE","WED","THU",'FRI'];
            const html1 = `<div class="d-flex flex-column block"><small class="text-muted mb-0">`;
            const html2 = `</small><div class="text-center"><img class="symbol-img" src="`;
            const html3 = `"></div><h6><strong>`;
            const html4 = `&#176;</strong></h6></div>`;
            let weather_html = "";
            let j = 0;
            let img = "";
            for(let i = 0 ; i < 10 ; i += 2){
                let tempture = res.records.locations[0].location[0].weatherElement[0].time[0].elementValue[0].value ;
                if(tempture > 19){
                    img = "https://i.imgur.com/Shrg84B.png";
                }else{
                    img = "https://i.imgur.com/BeWfUuG.png";
                }
                weather_html = weather_html + html1 + week[j] + html2 + img + html3 + tempture + html4 ;
                j++;
            }
            console.log(weather_html);
            $('#weekday').html(weather_html);
        },
        error:function(err){
            console.log(err)
        },
    });
});