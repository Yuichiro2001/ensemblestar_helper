<script setup>
import { computed, onMounted, reactive, watch } from 'vue'
// do not use same name with ref
const personal = reactive({
  bp: 20,
  workpass: 0,
  pass: 0,
  bp1: 0,
  bp10: 0,
  double: 0,
  bpgift: 0,
  passgift: 450,
  workpassgift: 0,
  bp1gift: 0,
  bp10gift: 0,
  doublegift: 0,
  monthcard: "",
  doublepack: "",
  actsppack: "",
  actgift:0,
  dailybp: 0,
  dailydia: 0,
  bp100gift:false,
  
})
const act_detail =reactive({
  date1: '',
  date2: '',
  date3: '',
  pt_now: '',
  common: '',
  acivity: '',
  bp: '',
  pass: '',
  workpass: '',
  workpass_interval: '',
  waste_bp: '',
  waste_pass: '',
  work: false,
})
const common_plus=reactive({
  fivestarcard: 0,
  fourstarcard: 0,
  threestarcard1: 0,
  threestarcard2: 0,
  threestarcard3: 0,
  summary_plus:0,
})
const act_plus=reactive({
  fivestarcard: 0,
  fourstarcard: 0,
  threestarcard1: 0,
  threestarcard2: 0,
  threestarcard3: 0,
  summary_plus:0,
})
const general_plus=reactive({

})
const onSubmit = () => {
  console.log('submit!')
}

onMounted(() => {
  act_detail.date2 = new Date(0,0,0,22,0,0)
  console.log('mounted!')
  console.log(unitplus_nothreestar.fivestar[5])
  console.log(time_remain())
  console.log(total_bp(time_remain(),personal.bp))
  
})
computed(()=>{
  // if 
  // common_plus.summary_plus=
})
</script>


<template>
  <div>
  <el-tabs type="card" background-color="">
    <el-tab-pane label="活动信息"> 
      <el-form :model="act_detail" label-width="120px" class="main" label-position="top" >
        <el-form-item label="活动结束时间">
          <el-col :span="12">
          <el-date-picker
            v-model="act_detail.date1"
            type="date"
            placeholder="选择日期"
            style="width: 100%"
          /></el-col><el-col :span="12"><el-time-picker
            v-model="act_detail.date2"
            placeholder="选择时间"
            style="width: 100%"
            format="HH:mm"
            ></el-time-picker></el-col>
          </el-form-item>
            <el-form-item label="当前已获得PT">
          <el-input v-model="act_detail.pt_now" style="width: 100%;"/>
          </el-form-item>
          <el-form-item label="普通曲打歌分数">
          <el-input v-model="act_detail.common" />
          </el-form-item>
          <el-form-item label="活动曲打歌分数">
          <el-input v-model="act_detail.acivity" />
          </el-form-item>
          <el-row>
          <el-col :span="12">
          <el-form-item label="使用BP">
            <el-select v-model="act_detail.bp" placeholder="选择消耗BP" >
            <el-option label="1" value="1" />
            <el-option label="2" value="2" />
            <el-option label="3" value="3" />
            <el-option label="6" value="6" />
            <el-option label="10" value="10" />
          </el-select>
          </el-form-item></el-col>
          <el-col :span="12">
          <el-form-item label="使用通行证">
            <el-select v-model="act_detail.pass" placeholder="选择消耗通行证" >
            <el-option label="100" value="100" />
            <el-option label="500" value="500" />
            <el-option label="1000" value="1000" />
          </el-select>
          </el-form-item></el-col></el-row>
          <el-form-item label="工作劵上限">
          <el-input v-model="act_detail.workpass" />
          </el-form-item>
          <el-form-item label="工作卷恢复间隔">
          <el-input v-model="act_detail.workpass_interval" />
          </el-form-item>
          <el-form-item label="每天浪费BP">
          <el-input v-model="act_detail.waste_bp" />
          </el-form-item>
          <el-form-item label="每天浪费通行证">
          <el-input v-model="act_detail.waste_pass" />
          </el-form-item>
          <el-form-item label="是否可以进行活动限定工作">
          <el-switch v-model="act_detail.work" />
          </el-form-item>
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="资源信息"><el-container>
      <el-form :model="personal" label-width="120px" class="main" label-position="top">   
        <el-form-item label="当前持有资源">
          <el-row>
            <el-col :span="8">
              <el-form-item label="BP">
                <el-input v-model="personal.bp"/>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="工作劵">
                <el-input v-model="personal.workpass"/>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="哨子">
                <el-input v-model="personal.bp1"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="扩音器">
                <el-input v-model="personal.bp10"/>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="通行证">
                <el-input v-model="personal.pass"/>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="翻倍卡">
                <el-input v-model="personal.double"/>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="赠送资源">
          <el-form-item label="是否赠送100哨子">
          <el-switch v-model="personal.bp100gift" />
          </el-form-item>
          <!-- <el-row>
            <el-col :span="8">
              <el-form-item label="BP">
                <el-input v-model="personal.bpgift"/>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="工作劵">
                <el-input v-model="personal.workpassgift"/>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="哨子">
                <el-input v-model="personal.bp1gift"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="扩音器">
                <el-input v-model="personal.bp10gift"/>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="通行证">
                <el-input v-model="personal.passgift"/>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="翻倍卡">
                <el-input v-model="personal.doublegift"/>
              </el-form-item>
            </el-col>
          </el-row> -->
        </el-form-item>
        <el-form-item label="礼包">
          <el-row justify="center">
            <el-col :span="8" >
              <div>
              <el-form-item label="应援月卡">
             <el-select v-model="personal.monthcard">
            <el-option label="买" value=true />
            <el-option label="不买" value=false />
            </el-select>
              </el-form-item></div>
            </el-col>
            <el-col  :span="8" ><div>
              <el-form-item label="翻倍卡礼包">
             <el-select v-model="personal.doublepack">
            <el-option label="买" value=true />
            <el-option label="不买" value=false />
            </el-select>
            </el-form-item></div>
            </el-col>
            <el-col  :span="8" ><div>
              <el-form-item label="演唱会助力大礼包">
             <el-select v-model="personal.monthcard">
            <el-option label="买" value=true />
            <el-option label="不买" value=false />
            </el-select></el-form-item></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="演唱会助力大礼包">
              <el-input v-model="personal.actgift" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="每日BP礼包">
              <el-input v-model="personal.dailybp" />
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="每日付费钻单抽">
              <el-input v-model="personal.dailydia" />
              </el-form-item>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="活动企划能力每日首次额外获得pt">
          <el-input v-model="personal.producerpt" />
        </el-form-item>
        <el-form-item label="是否完成星光演唱会">
          <el-select v-model="personal.starfinish">
            <el-option label="是" value=true />
            <el-option label="否" value=false />
          </el-select>
        </el-form-item>
        <el-row>
          <el-col :span="8">
          <el-form-item label="当前等级">
            <el-input v-model="personal.levelnow" />
          </el-form-item>
          </el-col>
          <el-col :span="8">
          <el-form-item label="目标等级">
            <el-input v-model="personal.leveltarget" />
          </el-form-item>
          </el-col>  
          <el-col :span="8">
          <el-form-item label="距下一等级经验">
          <el-input v-model="personal.leveltarget" />
          </el-form-item>
          </el-col>
        </el-row>
  </el-form>
    </el-container></el-tab-pane>

    <el-tab-pane label="活动加成卡" class="main">
      <el-form-item label="活动卡池是否有三星">
      <el-select v-model="general_plus.threestar">
        <el-option label="无" value=false />
        <el-option label="有" value=true />
      </el-select></el-form-item>
    <el-form :model="common_plus" label-width="120px"  label-position="top">
      <el-form-item label="普通曲组队加成">
        <el-form-item label="五星">
        <el-select v-model="common_plus.fivestarcard" >
          <el-option label="无" value="0" />
          <el-option label="1卡" value="1" />
          <el-option label="2卡" value="2" />
          <el-option label="3卡" value="3" />
          <el-option label="4卡" value="4" />
          <el-option label="5卡" value="5" />
        </el-select>
        </el-form-item>
        <el-form-item label="四星">
        <el-select v-model="common_plus.fourstarcard" >
          <el-option label="无" value="0" />
          <el-option label="1卡" value="1" />
          <el-option label="2卡" value="2" />
          <el-option label="3卡" value="3" />
          <el-option label="4卡" value="4" />
          <el-option label="5卡" value="5" />
        </el-select>
        </el-form-item>
        <el-form-item label="三星1">
        <el-select v-model="common_plus.threestarcard1" >
          <el-option label="无" value="0" />
          <el-option label="1卡" value="1" />
          <el-option label="2卡" value="2" />
          <el-option label="3卡" value="3" />
          <el-option label="4卡" value="4" />
          <el-option label="5卡" value="5" /></el-select>
      </el-form-item>
      <el-form-item label="三星2">
        <el-select v-model="common_plus.threestarcard2" >
          <el-option label="无" value="0" />
          <el-option label="1卡" value="1" />
          <el-option label="2卡" value="2" />
          <el-option label="3卡" value="3" />
          <el-option label="4卡" value="4" />
          <el-option label="5卡" value="5" /></el-select>
      </el-form-item>
      <el-form-item label="三星3">
        <el-select v-model="common_plus.threestarcard3" >
          <el-option label="无" value="0" />
          <el-option label="1卡" value="1" />
          <el-option label="2卡" value="2" />
          <el-option label="3卡" value="3" />
          <el-option label="4卡" value="4" />
          <el-option label="5卡" value="5" /></el-select>
      </el-form-item>
      <el-form-item label="总加成(若计算有误在此手动输入)">
        <el-input></el-input>
      </el-form-item>
      </el-form-item>
    </el-form>
    <el-form :model="act_plus" label-width="120px"  label-position="top">
      <el-form-item label="活动曲组队加成">
        <el-form-item label="五星">
        <el-select v-model="act_plus.fivestarcard" >
          <el-option label="无" value="0" />
          <el-option label="1卡" value="1" />
          <el-option label="2卡" value="2" />
          <el-option label="3卡" value="3" />
          <el-option label="4卡" value="4" />
          <el-option label="5卡" value="5" />
        </el-select>
        </el-form-item>
        <el-form-item label="四星">
        <el-select v-model="act_plus.fourstarcard" >
          <el-option label="无" value="0" />
          <el-option label="1卡" value="1" />
          <el-option label="2卡" value="2" />
          <el-option label="3卡" value="3" />
          <el-option label="4卡" value="4" />
          <el-option label="5卡" value="5" />
        </el-select>
        </el-form-item>
        <el-form-item label="三星1">
        <el-select v-model="act_plus.threestarcard1" >
          <el-option label="无" value="0" />
          <el-option label="1卡" value="1" />
          <el-option label="2卡" value="2" />
          <el-option label="3卡" value="3" />
          <el-option label="4卡" value="4" />
          <el-option label="5卡" value="5" /></el-select>
      </el-form-item>
      <el-form-item label="三星2">
        <el-select v-model="act_plus.threestarcard2" >
          <el-option label="无" value="0" />
          <el-option label="1卡" value="1" />
          <el-option label="2卡" value="2" />
          <el-option label="3卡" value="3" />
          <el-option label="4卡" value="4" />
          <el-option label="5卡" value="5" /></el-select>
      </el-form-item>
      <el-form-item label="三星3">
        <el-select v-model="act_plus.threestarcard3" >
          <el-option label="无" value="0" />
          <el-option label="1卡" value="1" />
          <el-option label="2卡" value="2" />
          <el-option label="3卡" value="3" />
          <el-option label="4卡" value="4" />
          <el-option label="5卡" value="5" /></el-select>
      </el-form-item>
      <el-form-item label="总加成(若计算有误在此手动输入)">
        <el-input v-model="act_plus.summary_plus"></el-input>
      </el-form-item>
      </el-form-item>
    </el-form>
    </el-tab-pane>
    <el-tab-pane label="Task">Task</el-tab-pane>
  </el-tabs>
   
    
  </div>
</template>

<style scoped>
.main{
    padding: 12px;
    background-color:#ecf5ff ;
}

</style>
<style>
.el-tabs__header{
  margin: 0px
}
</style>