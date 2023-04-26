
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
function double_card(double,total_bp,total_other_bp){
    

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

