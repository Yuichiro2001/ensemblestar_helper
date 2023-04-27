
var unitplus_nothreestar={
    fivestar:{
        0:0,
        1:0.2,
        2:0.5,
        3:0.75,
        4:1,
        5:1.5
    },
    fourstar:{
        0:0,
        1:0.05,
        2:0.15,
        3:0.25,
        4:0.35,
        5:0.5
    },
    threestar:{
        0:0,
        1:0.01,
        2:0.02,
        3:0.03,
        4:0.04,
        5:0.05
    }
};
var unitplus_withthreestar={
    fivestar:{
        0:0,
        1:0.2,
        2:0.5,
        3:0.75,
        4:1,
        5:1.5
    },
    fourstar:{
        0:0,
        1:0.07,
        2:0.2,
        3:0.3,
        4:0.45,
        5:0.6
}}

function time_remain(){
    //活动时间计算初始化
    var inital_act_start= new Date("2023-04-22 12:00:00");
    var inital_act_end=new Date("2023-04-30 22:00:00");
    var inital_act_next_start=new Date("2023-05-06 12:00:00");
    var total_time=inital_act_next_start.getTime()-inital_act_start.getTime();
    var act_last=inital_act_end.getTime()-inital_act_start.getTime();
    //处理真实时间
    var now = new Date();
    var now_poccess=(now.getTime()-inital_act_start.getTime())%total_time;
    //在活动时间内
    if (now_poccess<act_last){
        return parseInt((act_last-now_poccess)/1000/60);
    }
    //不在活动时间内
    else{
        return act_last/1000/60
    }
}
function total_bp(time_remain,bp){
    var bp_remain=parseInt(time_remain/30)+bp;
    return bp_remain;
}

function total_workpass(time_remain,workpass,workpass_limit,workpass_recovery){
    var workpass_remain= (time_remain/workpass_recovery)+workpass
    return workpass_remain;
}
function total_other_bp(bp1,bp10){
    var total_other_bp=bp1+bp10*10;
    return total_other_bp;
}
function pack(monthpass,doublepack,pack1,pack2,dailybp,dailydia,time_remain){
    var pack_detail={
        double_card:0,
        bp1:0,
        bp10:10
    }
    //处理剩余多少天
    var day_remain=parseInt(time_remain/60/24);
    //应援月卡
    if (monthpass){
        pack_detail.double_card=pack_detail.double_card+(15*day_remain)
    }
    //翻倍卡礼包
    if (doublepack){
        pack_detail.double_card=pack_detail.double_card+200
    }
    //演唱会特享礼包
    if (pack1){
        pack_detail.double_card=pack_detail.double_card+300
        pack_detail.bp1=pack_detail.bp1+300
    }
    //演唱会助力大礼包
    if (pack2>0){
        pack_detail.double_card=pack_detail.double_card+(500*pack2)
        pack_detail.bp1=pack_detail.bp1+(500*pack2)
    }
    //每日BP礼包
    if (day_remain>=dailybp>0){
        pack_detail.bp1=pack_detail.bp1+(20*dailybp)
    }
    else if (dailybp>day_remain){4
        alert("每日BP礼包可购买次数超过上限，当前距离活动结束还有"+day_remain+"天")
    }
    //每日付费单抽
    if(day_remain>=dailydia>0){
        pack_detail.bp1=pack_detail.bp1+(3*dailydia)
    }
    else if (dailydia>day_remain){
        alert("每日钻石礼包可购买次数超过上限，当前距离活动结束还有"+day_remain+"天")
    }
    return pack_detail;
}
function total_resource(bp,workpass,double_card,pack){
    total_bp=bp+pack.bp1+pack.bp10*10;
    total_double_card=double_card+pack.double_card;
    return {bp:total_bp,doublecard:total_double_card,workpass:workpass};
}
function double_card(total_resource){
    //默认只在bp消耗时使用翻倍卡，活动歌曲不使用
    //当总可用BP小于翻倍卡时，计算消耗掉总可用BP的翻倍卡数量并导出剩余翻倍卡至钻石消耗计算
    if (total_resource.bp<total_resource.doublecard){
        doublecard_remain=total_resource.doublecard-total_resource.bp;
        return{
            doublecard_remain:true,
            doublecard_remain_quantity:doublecard_remain,
        }
    }
    else{
        return {
            doublecard_remain:false
        }
    }
}
function total_pass(){
    var pass_remain=1
    return pass_remain;
}
function common_pt(common_score,common_plus){
    if (common_score=0){
    var common_score=2000*(1+common_plus)}
    else{
    var common_score=(2000+(common_score/5000))*(1+common_plus);
    return common_score;
}
}
function act_pt(act_score,act_plus){
    if (act_score=0){
    var act_score=10000*(1+act_plus)}
    else{
    var act_score=(10000+(act_score/5000))*(1+act_plus);
    return act_score;
}
}
function work_pt(is_limit_work){
    if (is_limit_work){
        var work_score=375
        return work_score
    }
    else{
        var work_score=250
        return work_score
    }
}

