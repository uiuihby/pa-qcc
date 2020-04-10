let n=1
let url="https://www.qcc.com/search_index?key=%25E4%25B8%258A%25E6%25B5%25B7%25E5%25BB%25BA%25E7%25AD%2591&ajaxflag=1&p="+n+"&"
var request = require('superagent')
let cookie="QCCSESSID=abkhack5266f0ti0imn3vntbj4; UM_distinctid=17161bdb417206-05bd827c79b529-396c7f07-1aeaa0-17161bdb418baa; zg_did=%7B%22did%22%3A%20%2217161bdb49d168-09f7c9a839cb2c-396c7f07-1aeaa0-17161bdb49eadc%22%7D; hasShow=1; _uab_collina=158648275480008793982058; acw_tc=3a31f82d15864827548704157edf326216c16830a859b0698d2a86707f; CNZZDATA1254842228=468144435-1586481059-https%253A%252F%252Fwww.baidu.com%252F%7C1586491859; Hm_lvt_78f134d5a9ac3f92524914d0247e70cb=1586482775,1586483320,1586496535,1586496808; Hm_lpvt_78f134d5a9ac3f92524914d0247e70cb=1586496808; zg_de1d1a35bfa24ce29bbf2c7eb17e6c4f=%7B%22sid%22%3A%201586496535161%2C%22updated%22%3A%201586496817270%2C%22info%22%3A%201586482754724%2C%22superProperty%22%3A%20%22%7B%7D%22%2C%22platform%22%3A%20%22%7B%7D%22%2C%22utm%22%3A%20%22%7B%7D%22%2C%22referrerDomain%22%3A%20%22www.baidu.com%22%2C%22cuid%22%3A%20%22f075ac921cca2db4e7962c7ec8f9fd1e%22%2C%22zs%22%3A%200%2C%22sc%22%3A%200%7D"
var fs = require("fs")
let myInter=setInterval(function(){
  
   request
   .get(url)
   .set('Cookie', cookie)
   .set('user-agent',"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36")

   .then(res => {
        console.log(res.text);
        console.log(n);
        fs.writeFileSync("./text"+n+".html",res.text);  
   })
   .catch(err => {
      console.log(err);
   });
   n+=1
},5000)
setTimeout(function(){
   clearInterval(myInter);
},1250)