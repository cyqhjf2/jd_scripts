/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
let CookieJDs = [
    'pt_key=AAJf9CcDADCh5BYnp0iZUW-J6snOsd6hoviaSDnfxFmgr5d1yEKSQ-ZE-db2Qrw9TKwqK_qwvls;pt_pin=18650489762_p;',
    'pt_key=AAJf9CqYADB46STGY_MN633Ed1AR-B0sEMDnVV3_UrffGvzwqzWeZNghusczwjZoOvGGWku_0wE;pt_pin=jd_KOrsQoULPlXK;',
    'pt_key=AAJf9CxeADBFh-QGYWkTJ66oOMCZbdJlD5Nht3q0ux7uu6v3USi7EOebLonbNPjPzLX-D_60aFY;pt_pin=jd_77d20c4558fbe;',
    'pt_key=AAJf9GloADCbvZ1IVhWFmto57a0710VymE6og2_GqAN1sdyPb1wqIvs3oqPMFMwXVZxZ4eAoeoQ;pt_pin=jd_vyeLCjWpuHjd;',
    'pt_key=AAJf9CX_ADDNTSB7XezKsMnIoY1RTmOmRDNH3gNUtX9q2p31B3F03M-_ZdQoGmJtGNVkE9p95RM;pt_pin=%E7%A5%9D%E5%BB%BA%E6%98%8E0306;',

    'pt_key=AAJgDXmsADCeCFY4Zdw1NLA2OWNCm_ZSMH4taJmeLzZBU0oP8R7YFTd-v_mWZiNIgZXWcfplYh4;pt_pin=jd_AvrydtTcZnZj;',
    'pt_key=AAJgDXneADDyJJYqXj6Gzi-D76Q9DNSKon36sL3v8GR00MQZb4F8V7ucU5G8HNta3adXvCQfhZY;pt_pin=jd_gqlTQCBoimMu;',
    'pt_key=AAJf9CeoADD7PruqbsLOgTlKRq_QrLfUwNZr6LGnE0KdbcrqSWoACtPnGffkEECvcobqYGyVq3w;pt_pin=jd_795c379c25b15;',
    'pt_key=AAJf9DIJADDz9Uw34CCBrwsoPtvv_cetAu3wRCLyiUS0mw4VaM2XUUKGE_c447mpUEDRtAym8Qw;pt_pin=jd_7aac884f55669;',
    'pt_key=AAJgDXoSADC0JlGDDGOeg_Mvm0Iz2ul13WDRMsQCUeuUZgow3kNUXRER6XI-Dgtt8TY5tRO8jhk;pt_pin=Dick139;',
    'pt_key=AAJgDXrZADCa82n0JLcGxy6ROXWOBTaL-ZGFJJczQZkvJshDO9746qn4jK86_NUg90ORBgv1elo;pt_pin=jd_uzAlKbHwraCG;',

    'pt_key=AAJf9EH1ADAZEfdrSnO-HEMfQ6d1YWxjp1e4rhkp7ZQXQwi2B07y71ksR396RM6SHFVp0syRCyU;pt_pin=13901977661_p;',
    'pt_key=AAJf9EQVADA-7Mz3rsn_wxVBFGyV61dGowVeAK4Z4mo9WenzIdU2n3yWI8byUsWbLktdoU1_TtI;pt_pin=xrzhang;',
    'pt_key=AAJf9CeGADCtMKhzFQfBSMeYBid2I1-tlvhagUDtnNCdGHL-tGIDdJdxpBszl65vfnc60vRdK1Q;pt_pin=ying_xx;',
    'pt_key=AAJf9GdfADBAnCvxRzM00lsVM2s89tP2UVlv971dkAFjdguhhQHjax58gFkflnRczrmUu0pureo;pt_pin=raoxiaoting;'
]
// 判断环境变量里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else {
    CookieJDs = [process.env.JD_COOKIE];
  }
}
if (JSON.stringify(process.env).indexOf('GITHUB')>-1) {
  console.log(`请勿使用github action运行此脚本,无论你是从你自己的私库还是其他哪里拉取的源代码，都会导致我被封号\n`);
  !(async () => {
    await require('./sendNotify').sendNotify('提醒', `请勿使用github action、滥用github资源会封我仓库以及账号`)
    await process.exit(0);
  })()
}
CookieJDs = [...new Set(CookieJDs.filter(item => item !== "" && item !== null && item !== undefined))]
console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`);
console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i].trim();
}
