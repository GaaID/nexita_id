(function(){
var reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
var $=function(i){return document.getElementById(i)};
function stripes(a,b,c,d,h){return"repeating-linear-gradient(0deg,"+a+" 0 "+h+"px,"+b+" "+h+"px "+h*2+"px,"+c+" "+h*2+"px "+h*3+"px,"+d+" "+h*3+"px "+h*4+"px)"}
var P=[
{n:"Merkurius",au:.387,cl:.613,s:.55,g:.38,km:"57,9 jt km",yr:"88 hari",mo:"0",tp:"−180 s/d 430 °C",d:"4.879 km",ac:"#d7cfc4",ac2:"#a79e92",glow:"rgba(215,207,196,.3)",bg:"radial-gradient(circle,#c5beb4,#8a837a 65%,#4a443e)",
 ds:"Planet terkecil dan terdekat dengan Matahari. Tanpa atmosfer berarti, siangnya membakar dan malamnya membeku.",
 f:["Satu hari matahari di Merkurius berlangsung sekitar 176 hari Bumi.","Meski paling dekat Matahari, Merkurius bukan planet terpanas. Gelar itu milik Venus."]},
{n:"Venus",au:.723,cl:.277,s:.8,g:.91,km:"108,2 jt km",yr:"225 hari",mo:"0",tp:"rata-rata 464 °C",d:"12.104 km",ac:"#f0b565",ac2:"#c9803a",glow:"rgba(240,181,101,.35)",bg:"radial-gradient(circle,#f1cf93,#d49a54 65%,#8a5a2b)",
 ds:"Seukuran Bumi, tapi atmosfernya yang tebal menjebak panas sampai lebih panas dari Merkurius.",
 f:["Satu hari di Venus lebih panjang daripada satu tahunnya.","Venus berputar mundur dibanding kebanyakan planet lain."]},
{n:"Bumi",au:1,cl:0,s:.8,g:1,km:"149,6 jt km",yr:"365 hari",mo:"1",tp:"rata-rata 15 °C",d:"12.756 km",ac:"#6fb6ff",ac2:"#3b7fd4",glow:"rgba(90,160,255,.4)",bg:"radial-gradient(ellipse at 40% 45%,rgba(90,170,90,.6) 0 12%,transparent 13%),radial-gradient(ellipse at 66% 62%,rgba(90,170,90,.5) 0 9%,transparent 10%),radial-gradient(circle,#3d86d6,#17479a 70%)",
 ds:"Satu-satunya rumah yang kita tahu punya kehidupan. Biru karena lautan, dan dilindungi atmosfer yang tipis.",
 f:["Sekitar 71% permukaan Bumi tertutup air.","Cahaya Matahari butuh sekitar 8 menit 20 detik untuk sampai ke Bumi."]},
{n:"Mars",au:1.524,cl:.524,s:.62,g:.38,km:"227,9 jt km",yr:"687 hari",mo:"2",tp:"rata-rata −65 °C",d:"6.792 km",ac:"#f08a5d",ac2:"#c4562f",glow:"rgba(240,138,93,.35)",bg:"radial-gradient(circle at 45% 50%,#e88a5f,#bb4f2b 65%,#6e2a14)",
 ds:"Dunia berdebu berwarna karat dengan jejak sungai kuno. Target utama manusia untuk perjalanan berikutnya.",
 f:["Olympus Mons di Mars sekitar 2,5 kali lebih tinggi dari Everest.","Langit siang di Mars berwarna kemerahan karena debu."]},
{n:"Jupiter",au:5.203,cl:4.203,s:1,g:2.36,km:"778,5 jt km",yr:"11,9 tahun",mo:"95",tp:"awan atas −110 °C",d:"142.984 km",ac:"#e2b484",ac2:"#b9814f",glow:"rgba(226,180,132,.35)",bg:stripes("#d9aa7a","#b27a4c","#ecd2ad","#9a6a42",13),
 ds:"Raksasa gas terbesar, cukup besar untuk memuat semua planet lain di dalamnya, dengan badai yang tak pernah reda.",
 f:["Bintik Merah Besar adalah badai yang sudah berputar lebih dari 150 tahun.","Satu hari di Jupiter kurang dari 10 jam."]},
{n:"Saturnus",au:9.537,cl:8.537,s:.8,g:.916,km:"1,43 miliar km",yr:"29,4 tahun",mo:"274",tp:"awan atas −140 °C",d:"120.536 km",ac:"#f6c98f",ac2:"#e39a5b",glow:"rgba(246,201,143,.35)",bg:stripes("#e8c88f","#c9a366","#f3dfb4","#b58f55",12),ring:1,
 ds:"Planet keenam dari Matahari dengan cincin es yang megah. Begitu ringan, rapat massanya lebih kecil dari air.",
 f:["Cincin Saturnus selebar ratusan ribu km, tapi tebalnya hanya puluhan meter.","Karena rapat massanya rendah, Saturnus akan mengapung di air, kalau ada bak sebesar itu."]},
{n:"Uranus",au:19.19,cl:18.19,s:.82,g:.89,km:"2,87 miliar km",yr:"84 tahun",mo:"28",tp:"−195 °C",d:"51.118 km",ac:"#8fe3e6",ac2:"#4fb0b8",glow:"rgba(143,227,230,.3)",bg:"radial-gradient(circle,#bdeff0,#7cc7cb 70%,#4b99a3)",
 ds:"Raksasa es yang pucat dan berputar miring. Dingin ekstrem, nyaris tanpa fitur yang terlihat dari luar.",
 f:["Uranus berputar miring sekitar 98°, seperti bola yang menggelinding di orbitnya.","Satu musim di Uranus berlangsung sekitar 21 tahun Bumi."]},
{n:"Neptunus",au:30.07,cl:29.07,s:.8,g:1.12,km:"4,5 miliar km",yr:"164 tahun",mo:"16",tp:"−200 °C",d:"49.528 km",ac:"#7f9bff",ac2:"#4a66e0",glow:"rgba(127,155,255,.35)",bg:"radial-gradient(circle,#7f9fff,#3b5fd8 70%,#22379c)",
 ds:"Planet terjauh, biru pekat, dan berangin kencang. Cahaya Matahari di sana hanya setitik.",
 f:["Angin di Neptunus bisa melebihi 2.000 km/jam.","Neptunus baru satu kali mengelilingi Matahari sejak ditemukan pada 1846."]}
];
var cur=5,T="info",kg=60,fi=0,root=document.documentElement;
function num(n,d){return n.toFixed(d).replace(".",",")}
function dur(s){if(s<60)return num(s,1)+" detik";if(s<3600)return Math.round(s/60)+" menit";return num(s/3600,1)+" jam"}

/* picker */
var pick=$("pick");
pick.innerHTML=P.map(function(p,i){return'<button class="mini" aria-label="'+p.n+'" title="'+p.n+'" data-i="'+i+'" style="background:'+p.bg+'"></button>'}).join("");
pick.addEventListener("click",function(e){var b=e.target.closest(".mini");if(b)go(+b.dataset.i)});

function card(){
  var p=P[cur],h="";
  if(T==="info"){
    h='<div><h3>Data singkat</h3><ul class="kv"><li><span>Diameter</span><b>'+p.d+'</b></li><li><span>Gravitasi permukaan</span><b>'+num(p.g,2)+' g</b></li><li><span>Jarak orbit</span><b>'+num(p.au,2)+' AU</b></li></ul></div>';
  }else if(T==="berat"){
    h='<div><label>Beratmu di Bumi (kg)<input id="kg" type="number" min="1" max="300" value="'+kg+'" inputmode="numeric"></label><div class="big"><span id="bw"></span><small>kg di '+p.n+'</small></div><p class="note" id="jp"></p></div>';
  }else if(T==="sinyal"){
    h='<div><div class="trk"><span>Bumi</span><div class="ln"><i id="pk"></i></div><span>'+(cur===2?"Bulan":p.n)+'</span></div><button class="btn" id="sd">Kirim sinyal</button><p class="note" id="sr">Sinyal merambat dengan kecepatan cahaya. Coba kirim dan lihat berapa lama sampai.</p></div>';
  }else{
    h='<div><p class="fx" id="fxt"></p><button class="ghost" id="fb">Fakta lain</button></div>';
  }
  $("card").innerHTML=h;
  if(T==="berat"){
    var up=function(){var v=Math.max(1,Math.min(300,+$("kg").value||1));kg=v;$("bw").textContent=num(v*p.g,1);
      $("jp").textContent="Lompatan setinggi 50 cm di Bumi menjadi sekitar "+Math.round(50/p.g)+" cm di sini."};
    $("kg").addEventListener("input",up);up();
  }
  if(T==="sinyal"){
    $("sd").addEventListener("click",function(){
      var sec=cur===2?1.28:p.cl*499,pk=$("pk");
      pk.className="";pk.style.removeProperty("--t");void pk.offsetWidth;
      pk.style.setProperty("--t",reduce?"0s":"2.2s");pk.className="go";
      $("sr").textContent="Sinyal dikirim...";
      setTimeout(function(){$("sr").textContent="Tiba dalam "+dur(sec)+" (searah), saat "+(cur===2?"Bulan":p.n)+" paling dekat. Balasan baru kembali setelah "+dur(sec*2)+".";},reduce?0:2300);
    });
  }
  if(T==="fakta"){
    var sh=function(){$("fxt").textContent=p.f[fi%p.f.length]};sh();
    $("fb").addEventListener("click",function(){fi++;sh()});
  }
}
function apply(){
  var p=P[cur];
  root.style.setProperty("--ac",p.ac);root.style.setProperty("--ac2",p.ac2);root.style.setProperty("--glow",p.glow);
  $("sph").style.background=p.bg;
  $("pl").style.setProperty("--s",p.s);
  $("pl").classList.toggle("rg",!!p.ring);
  $("nm").textContent=p.n;$("ds").textContent=p.ds;
  $("stats").innerHTML=[["km","dari Matahari"],["yr","lama setahun"],["mo","jumlah bulan"],["tp","suhu"]].map(function(x){return"<div><dd>"+p[x[0]]+"</dd><dt>"+x[1]+"</dt></div>"}).join("");
  $("cnt").textContent=(cur+1)+" / "+P.length;
  [].forEach.call(pick.children,function(b,i){var d=i-cur;b.classList.toggle("on",d===0);b.style.transform="translateY("+Math.min(d*d*4,26)+"px)";b.setAttribute("aria-pressed",d===0)});
  fi=0;card();
  if(GL3)GL3.set(cur);if(document.body.classList.contains("zm"))fitUI();
}
var timer;
function go(i){
  i=(i+P.length)%P.length;if(i===cur)return;
  cur=i;document.body.classList.add("sw");clearTimeout(timer);
  timer=setTimeout(function(){apply();document.body.classList.remove("sw")},reduce?0:260);
}
$("nx").onclick=function(){go(cur+1)};$("pv").onclick=function(){go(cur-1)};
addEventListener("keydown",function(e){if(cp!=="beranda"||/INPUT/.test(document.activeElement.tagName))return;if(e.key==="ArrowRight")go(cur+1);if(e.key==="ArrowLeft")go(cur-1)});
var sx=null;
$("stage").addEventListener("touchstart",function(e){sx=e.target.closest&&e.target.closest("#pl,#zl")?null:e.touches[0].clientX},{passive:true});
$("stage").addEventListener("touchend",function(e){if(sx===null)return;var dx=e.changedTouches[0].clientX-sx;sx=null;if(Math.abs(dx)>60)go(cur+(dx<0?1:-1))});

/* tabs from nav */
document.querySelectorAll(".tabs button").forEach(function(b){
  b.addEventListener("click",function(){
    T=b.dataset.tab;
    document.querySelectorAll(".tabs button").forEach(function(x){x.setAttribute("aria-selected",x===b)});
    card();
    if(innerWidth<900)$("card").scrollIntoView({behavior:reduce?"auto":"smooth",block:"center"});
  });
});

/* starfield */
var sky=$("sky"),c=sky.getContext("2d"),W,H,st=[],mx=0,my=0,t=0,wb=0;
function size(){var d=Math.min(devicePixelRatio||1,2);W=innerWidth;H=innerHeight;sky.width=W*d;sky.height=H*d;c.setTransform(d,0,0,d,0,0);
  st=[];for(var i=0;i<(W<700?90:170);i++)st.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.3+.3,p:Math.random()*6,s:Math.random()*.02+.005})}
addEventListener("resize",size);size();
addEventListener("pointermove",function(e){mx=e.clientX/W-.5;my=e.clientY/H-.5});
function draw(){
  if(document.body.classList.contains("lite")){c.clearRect(0,0,W,H);if(!reduce)requestAnimationFrame(draw);return}
  t++;c.clearRect(0,0,W,H);
  for(var i=0;i<st.length;i++){var s=st[i];
    c.globalAlpha=.25+.5*Math.abs(Math.sin(s.p+t*s.s));
    c.fillStyle="#f3efe8";
    var sx=s.x-mx*s.r*14,sy=s.y-my*s.r*14;c.beginPath();c.arc(sx,sy,s.r,0,6.283);c.fill();if(wb>.03){c.strokeStyle="#f3efe8";c.lineWidth=s.r*.9;c.beginPath();c.moveTo(sx,sy);c.lineTo(sx+(sx-W/2)*wb*.16,sy+(sy-H/2)*wb*.16);c.stroke()}}wb*=.93;
  if(!reduce)requestAnimationFrame(draw);
}
draw();

/* orbit page */
var PER=[.241,.615,1,1.881,11.86,29.46,84,164.8],VEL=[47.4,35,29.8,24.1,13.1,9.7,6.8,5.4],SZ=[3,5,5.5,4,11,9.5,7,7];
var oc=$("oc"),ox=oc.getContext("2d"),OW=0,OH=0,tilt=.5,yrs=0,spd=Math.pow(10,-.6),paused=reduce,labels=true,sel=5,last=0,run=false;
var TH=P.map(function(){return Math.random()*6.283}),AST=[];
for(var q=0;q<260;q++)AST.push({a:Math.random()*6.283,r:Math.random(),s:Math.random()});
function osize(){var d=Math.min(devicePixelRatio||1,2);OW=oc.parentElement.clientWidth;tilt=OW<700?.8:.52;OH=Math.round((OW/2-34)*tilt*2+90);oc.width=OW*d;oc.height=OH*d;oc.style.height=OH+"px";ox.setTransform(d,0,0,d,0,0)}
function R(au){var a=Math.sqrt(.387),b=Math.sqrt(30.07);return 52+(OW/2-86)*(Math.sqrt(au)-a)/(b-a)}
function pos(i){var r=R(P[i].au),th=TH[i]+6.2832*yrs/PER[i];return{x:OW/2+Math.cos(th)*r,y:OH/2+Math.sin(th)*r*tilt}}
function odraw(now){
  var cx=OW/2,cy=OH/2,i,p,r;ox.clearRect(0,0,OW,OH);
  for(i=0;i<P.length;i++){r=R(P[i].au);ox.beginPath();ox.ellipse(cx,cy,r,r*tilt,0,0,6.2832);ox.strokeStyle=i===sel?P[i].ac:"rgba(255,255,255,.11)";ox.lineWidth=i===sel?1.5:1;ox.globalAlpha=i===sel?.75:1;ox.stroke()}
  ox.globalAlpha=1;
  var r1=R(2.2),r2=R(3.2);ox.fillStyle="rgba(200,190,175,.6)";
  for(i=0;i<AST.length;i++){var a=AST[i],th=a.a+6.2832*yrs/4.5*(.8+a.s*.4),rr=r1+(r2-r1)*a.r;ox.fillRect(cx+Math.cos(th)*rr,cy+Math.sin(th)*rr*tilt,1.3,1.3)}
  var g=ox.createRadialGradient(cx,cy,0,cx,cy,46+Math.sin(now/500)*2);
  g.addColorStop(0,"#fff6d5");g.addColorStop(.3,"rgba(255,200,110,.9)");g.addColorStop(1,"rgba(255,160,60,0)");
  ox.fillStyle=g;ox.beginPath();ox.arc(cx,cy,50,0,6.2832);ox.fill();
  ox.font="12px 'Schibsted Grotesk',system-ui,sans-serif";
  for(i=0;i<P.length;i++){
    p=pos(i);ox.fillStyle=P[i].ac;ox.shadowColor=P[i].ac;ox.shadowBlur=i===sel?16:6;
    ox.beginPath();ox.arc(p.x,p.y,SZ[i],0,6.2832);ox.fill();ox.shadowBlur=0;
    if(P[i].ring){ox.beginPath();ox.ellipse(p.x,p.y,SZ[i]*1.9,SZ[i]*.6,-.3,0,6.2832);ox.strokeStyle="rgba(240,210,160,.75)";ox.lineWidth=1.5;ox.stroke()}
    if(i===2){var mo=yrs*77.7;ox.fillStyle="#fff";ox.fillRect(p.x+Math.cos(mo)*11,p.y+Math.sin(mo)*11*tilt,1.8,1.8)}
    if(i===sel){ox.strokeStyle="rgba(255,255,255,.8)";ox.lineWidth=1;ox.beginPath();ox.arc(p.x,p.y,SZ[i]+5,0,6.2832);ox.stroke()}
    if(labels){ox.fillStyle="rgba(243,239,232,.75)";ox.fillText(P[i].n,p.x+SZ[i]+7,p.y+4)}
  }
  $("oy").textContent="Tahun ke "+num(yrs,1);
}
function oloop(now){if(!run)return;if(!paused)yrs+=Math.min((now-last)/1000,.1)*spd;last=now;odraw(now);requestAnimationFrame(oloop)}
function osel(i){
  sel=i;var p=P[i];
  [].forEach.call($("ch").children,function(b,j){b.setAttribute("aria-pressed",j===i)});
  $("op").innerHTML="<div><h3>"+p.n+"</h3><ul class='kv'><li><span>Jarak dari Matahari</span><b>"+num(p.au,2)+" AU</b></li><li><span>Satu kali mengorbit</span><b>"+(PER[i]<1?num(PER[i]*365.25,0)+" hari":num(PER[i],1)+" tahun")+"</b></li><li><span>Kecepatan orbit</span><b>"+num(VEL[i],1)+" km/s</b></li></ul></div>";
}
$("ch").innerHTML=P.map(function(p,i){return'<button data-i="'+i+'">'+p.n+'</button>'}).join("");
$("ch").addEventListener("click",function(e){var b=e.target.closest("button");if(b)osel(+b.dataset.i)});
oc.addEventListener("pointerdown",function(e){
  var rc=oc.getBoundingClientRect(),x=e.clientX-rc.left,y=e.clientY-rc.top,best=-1,bd=24;
  for(var i=0;i<P.length;i++){var p=pos(i),d=Math.hypot(p.x-x,p.y-y);if(d<bd){bd=d;best=i}}
  if(best>=0)osel(best);
});
$("pp").textContent=paused?"Putar":"Jeda";
$("pp").onclick=function(){paused=!paused;this.textContent=paused?"Putar":"Jeda"};
function sv(){var v=+$("sp").value;spd=Math.pow(10,v);$("sv").textContent=num(spd,2)+" tahun/detik"}
$("sp").addEventListener("input",sv);sv();
$("lb").addEventListener("change",function(){labels=this.checked});
osel(5);

/* helpers */
function shuf(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=a[i];a[i]=a[j];a[j]=t}return a}

/* akun lokal dan progres */
var PF={a:"guest",l:[{id:"guest",n:"Tamu",c:"#a29e97"}]},PD;
function emp(){return{l:[],q:{b:0,n:0,c:0,t:0},g:{c:0,t:0},k:{n:0,s:"",a:0},m:{b:0,n:0,o:0,t:0},s:{d:"",n:0,m:0},dq:{d:"",q:0,g:0,m:0,done:0},x:0,b:[]}}
function norm(r){var e=emp();if(!r||typeof r!=="object")return e;
  if(Array.isArray(r.l))e.l=r.l.filter(function(x,i,a){return x>=0&&x<6&&x%1===0&&a.indexOf(x)===i});
  if(typeof r.x==="number"&&r.x>=0)e.x=Math.floor(r.x);
  if(Array.isArray(r.b))e.b=r.b.filter(function(x){return typeof x==="string"}).slice(0,40);
  ["q","g","k","m","s","dq"].forEach(function(k){if(r[k]&&typeof r[k]==="object")for(var x in e[k])if(typeof r[k][x]===typeof e[k][x])e[k][x]=r[k][x]});return e}
try{var pf0=JSON.parse(localStorage.getItem("sinyal-pf"));if(pf0&&pf0.l&&pf0.l.length&&pf0.a)PF=pf0}catch(e){}
if(!PF.l.some(function(x){return x.id===PF.a}))PF.a=PF.l[0].id;
function pact(){return PF.l.filter(function(x){return x.id===PF.a})[0]||PF.l[0]}
function pload(){var r=null;try{r=JSON.parse(localStorage.getItem("sinyal-d-"+PF.a))}catch(e){}PD=norm(r)}
function psave(){try{localStorage.setItem("sinyal-d-"+PF.a,JSON.stringify(PD));localStorage.setItem("sinyal-pf",JSON.stringify(PF))}catch(e){}}
pload();
try{var old=JSON.parse(localStorage.getItem("sinyal-belajar"));if(old&&old.length&&!PD.l.length&&PF.a==="guest"){PD.l=norm({l:old}).l;psave()}}catch(e){}

/* xp, streak, lencana */
function today(){var d=new Date();return d.getFullYear()+"-"+("0"+(d.getMonth()+1)).slice(-2)+"-"+("0"+d.getDate()).slice(-2)}
function dayDiff(a,b){return Math.round((new Date(b+"T00:00:00")-new Date(a+"T00:00:00"))/864e5)}
function lvl(x){return Math.floor(x/150)+1}
var TT2=["Kadet","Kadet","Navigator","Navigator","Astronom","Astronom","Komandan"];
function ttl(l){return TT2[Math.min(l,TT2.length)-1]}
function curStreak(){var s=PD.s;return s.d&&dayDiff(s.d,today())<=1?s.n:0}
function streak(){var t=today(),s=PD.s;if(s.d===t)return;s.n=(s.d&&dayDiff(s.d,t)===1)?s.n+1:1;s.d=t;s.m=Math.max(s.m,s.n);if(s.n>1)toast("Streak "+s.n+" hari berturut-turut!")}
var tq=[],tb=false;
function toast(m){tq.push(m);if(!tb)tnext()}
function tnext(){var m=tq.shift();if(!m){tb=false;return}tb=true;var d=document.createElement("div");d.className="toast";d.textContent=m;document.body.appendChild(d);setTimeout(function(){d.remove();tnext()},reduce?1600:2200)}
function xpchip(){var c=$("xpc");if(c)c.textContent="Lv "+lvl(PD.x)+" · "+PD.x+" XP"}
var BDG=[["b1","Penjelajah","Selesaikan 1 materi",function(){return PD.l.length>=1}],["b2","Astronom","Selesaikan 6 materi",function(){return PD.l.length>=6}],["b3","Skor sempurna","Raih 5 dari 5 di kuis",function(){return PD.q.b>=5}],["b4","Konsisten","Main kuis 3 kali",function(){return PD.q.n>=3}],["b5","Dwibahasa","10 jawaban benar di latihan bahasa",function(){return PD.g.c>=10}],["b6","Komandan","Selesaikan Misi Komando",function(){return PD.k.n>0}],["b7","Api kecil","Streak 3 hari",function(){return PD.s.m>=3}],["b8","Api besar","Streak 7 hari",function(){return PD.s.m>=7}],["b9","Level 5","Capai level 5",function(){return lvl(PD.x)>=5}],["b10","Penghindar","Bertahan 60 detik di Sinyal Runner",function(){return PD.m.t>=60}],["b11","Kolektor sinyal","Kumpulkan 50 sinyal di Sinyal Runner",function(){return PD.m.o>=50}],["b12","Seribu XP","Kumpulkan 1.000 XP",function(){return PD.x>=1000}]];
function badges(){dq();var ch=0;BDG.forEach(function(b){if(PD.b.indexOf(b[0])<0&&b[3]()){PD.b.push(b[0]);ch=1;toast("Lencana baru: "+b[1])}});if(ch)psave()}
function xp(n,why){if(n<=0)return;var l0=lvl(PD.x);streak();PD.x+=n;var l1=lvl(PD.x);toast("+"+n+" XP"+(why?" · "+why:""));if(l1>l0)toast("Naik level! Level "+l1+": "+ttl(l1));badges();psave();xpchip()}
function LV(){var l=lvl(PD.x),c=PD.x-(l-1)*150;return'<div class="card lvc"><div><h3>'+ttl(l)+' · Level '+l+'</h3><div class="mt"><span>XP level ini</span><div class="bar"><i style="width:'+Math.round(c/150*100)+'%"></i></div><b>'+c+'/150</b></div><div class="stt"><div><b>'+PD.x+'</b><span>total XP</span></div><div><b>'+curStreak()+'</b><span>streak hari</span></div><div><b>'+PD.s.m+'</b><span>streak terbaik</span></div><div><b>'+PD.m.b+'</b><span>skor Runner</span></div><div><b>'+PD.m.t+'s</b><span>bertahan terlama</span></div></div></div></div>'}

/* learn */
var L=[
{t:"Matahari, bintang kita",b:["Matahari adalah bintang yang menjadi pusat tata surya. Massanya sekitar 99,8% dari seluruh massa tata surya, sehingga gravitasinya menahan semua planet pada orbitnya.","Di intinya, hidrogen menyatu menjadi helium lewat fusi nuklir dan melepaskan energi yang kita rasakan sebagai cahaya dan panas. Suhu permukaannya sekitar 5.500 °C, sedangkan intinya sekitar 15 juta °C."],
 k:["Diameter Matahari sekitar 109 kali Bumi.","Umurnya sekitar 4,6 miliar tahun, kira-kira setengah dari masa hidupnya.","Cahayanya butuh sekitar 8 menit 20 detik untuk sampai ke Bumi."],
 q:{q:"Apa sumber energi Matahari?",o:["Pembakaran batu bara","Fusi hidrogen menjadi helium","Reaksi kimia di permukaan","Panas sisa pembentukan saja"],a:1}},
{t:"Planet dalam dan luar",b:["Empat planet terdekat dari Matahari (Merkurius, Venus, Bumi, Mars) disebut planet dalam. Semuanya kecil, berbatu, dan punya permukaan padat.","Empat planet berikutnya adalah planet luar. Jupiter dan Saturnus adalah raksasa gas yang kaya hidrogen dan helium, sedangkan Uranus dan Neptunus adalah raksasa es dengan lebih banyak air, amonia, dan metana."],
 k:["Planet berbatu: Merkurius, Venus, Bumi, Mars.","Raksasa gas: Jupiter dan Saturnus.","Raksasa es: Uranus dan Neptunus.","Keempat planet luar memiliki cincin, tetapi hanya cincin Saturnus yang mudah terlihat."],
 q:{q:"Planet mana yang termasuk raksasa es?",o:["Jupiter","Saturnus","Neptunus","Mars"],a:2}},
{t:"Gravitasi dan orbit",b:["Planet bergerak mengelilingi Matahari karena gravitasi. Orbit mereka berbentuk elips yang hampir bulat, bukan lingkaran sempurna. Semakin dekat ke Matahari, semakin cepat sebuah planet bergerak.","Johannes Kepler menemukan bahwa kuadrat periode orbit sebanding dengan pangkat tiga jaraknya. Jika jarak a dalam AU dan periode T dalam tahun, maka T² = a³. Untuk Mars, a ≈ 1,52 AU sehingga T ≈ 1,88 tahun."],
 k:["Orbit planet berbentuk elips (Hukum Kepler I).","Planet bergerak lebih cepat saat mendekati Matahari.","Planet yang jauh butuh waktu jauh lebih lama untuk satu kali mengorbit."],
 x:'<a class="ghost" href="#orbit">Lihat di halaman Orbit</a>',
 q:{q:"Planet yang lebih jauh dari Matahari akan mengorbit...",o:["Lebih cepat","Dengan kecepatan yang sama","Lebih lambat","Tidak bergerak"],a:2}},
{t:"Satuan jarak: AU dan tahun cahaya",b:["Jarak di luar angkasa terlalu besar untuk kilometer. Di dalam tata surya dipakai satuan astronomi (AU), yaitu jarak rata-rata Bumi ke Matahari, sekitar 149,6 juta km.","Untuk jarak antarbintang dipakai tahun cahaya, yaitu jarak yang ditempuh cahaya dalam satu tahun, sekitar 9,46 triliun km. Bintang terdekat setelah Matahari, Proxima Centauri, berjarak sekitar 4,2 tahun cahaya."],
 k:["1 AU ≈ 149,6 juta km.","1 tahun cahaya ≈ 9,46 triliun km.","Neptunus berjarak sekitar 30 AU dari Matahari."],
 q:{q:"Satu tahun cahaya adalah satuan untuk mengukur...",o:["Waktu","Jarak","Kecepatan","Massa"],a:1}},
{t:"Asteroid, komet, planet kerdil",b:["Di antara orbit Mars dan Jupiter terdapat sabuk asteroid, kumpulan sisa pembentukan tata surya berupa batuan dan logam. Objek terbesarnya, Ceres, tergolong planet kerdil.","Di luar Neptunus ada Sabuk Kuiper yang berisi benda-benda es, termasuk Pluto. Sejak 2006 Pluto digolongkan sebagai planet kerdil. Komet adalah bola es dan debu yang membentuk ekor saat mendekati Matahari."],
 k:["Sabuk asteroid: antara Mars dan Jupiter.","Sabuk Kuiper: di luar orbit Neptunus.","Ekor komet selalu menjauhi Matahari."],
 q:{q:"Di mana letak sabuk asteroid?",o:["Antara Bumi dan Mars","Antara Mars dan Jupiter","Di luar Neptunus","Antara Venus dan Bumi"],a:1}},
{t:"Bulan dan pasang surut",b:["Bulan adalah satelit alami Bumi. Teori yang paling diterima menyatakan Bulan terbentuk dari tumbukan raksasa antara Bumi muda dan sebuah benda seukuran Mars.","Gravitasi Bulan menarik lautan Bumi dan menyebabkan pasang surut. Bulan juga selalu menghadapkan sisi yang sama ke Bumi karena periode rotasinya sama dengan periode orbitnya. Satu siklus fase Bulan berlangsung sekitar 29,5 hari."],
 k:["Fase Bulan berulang tiap sekitar 29,5 hari.","Dari Bumi kita selalu melihat sisi Bulan yang sama.","Pasang surut terutama disebabkan gravitasi Bulan, lalu Matahari."],
 q:{q:"Apa penyebab utama pasang surut air laut?",o:["Angin laut","Gravitasi Bulan","Putaran Mars","Arus sungai"],a:1}}
],li=0,done=[];
done=PD.l;
function lprog(){
  $("pb").style.width=(done.length/L.length*100)+"%";
  $("pn").textContent=done.length+" dari "+L.length+" materi selesai";
  $("ll").innerHTML=L.map(function(l,i){return'<button data-i="'+i+'" aria-current="'+(i===li)+'"><span class="ck'+(done.indexOf(i)>-1?" ok":"")+'">'+(done.indexOf(i)>-1?"✓":(i+1))+'</span>'+l.t+'</button>'}).join("");
}
function lshow(){
  var l=L[li],q=shuf([0,1,2,3]);
  $("ls").innerHTML='<div><h3>'+l.t+'</h3>'+l.b.map(function(x){return'<p>'+x+'</p>'}).join("")+'<h4>Poin penting</h4><ul>'+l.k.map(function(x){return'<li>'+x+'</li>'}).join("")+'</ul>'+(l.x||"")+
   '<div class="chk"><h4>Cek pemahaman</h4><p class="qt">'+l.q.q+'</p><div class="opts">'+q.map(function(i){return'<button class="opt" data-c="'+(i===l.q.a?1:0)+'">'+l.q.o[i]+'</button>'}).join("")+'</div><p class="note" id="lm"></p></div>'+
   '<div class="nv">'+(li>0?'<button class="ghost" id="lp">Sebelumnya</button>':"")+(li<L.length-1?'<button class="btn" id="ln">Materi berikutnya</button>':"")+'</div></div>';
  [].forEach.call($("ls").querySelectorAll(".opt"),function(b){b.onclick=function(){
    if(b.dataset.c==="1"){
      [].forEach.call($("ls").querySelectorAll(".opt"),function(x){x.disabled=true});b.classList.add("ok");
      if(done.indexOf(li)<0){done.push(li);psave();xp(50,"Materi selesai")}
      $("lm").textContent=done.length===L.length?"Benar. Semua materi selesai, kerja bagus! Sekarang coba halaman Kuis.":"Benar. Materi ini ditandai selesai.";lprog();
    }else{b.disabled=true;b.classList.add("no");$("lm").textContent="Belum tepat, coba pilih jawaban lain."}
  }});
  if($("ln"))$("ln").onclick=function(){li++;lshow();lprog()};
  if($("lp"))$("lp").onclick=function(){li--;lshow();lprog()};
}
$("ll").addEventListener("click",function(e){var b=e.target.closest("button");if(b){li=+b.dataset.i;lshow();lprog()}});
lprog();lshow();

/* quiz: acak soal dan urutan jawaban setiap putaran */
var QB=[
{q:"Planet mana yang terbesar di tata surya?",o:["Saturnus","Jupiter","Neptunus","Bumi"],a:1,e:"Jupiter cukup besar untuk memuat semua planet lain di dalamnya."},
{q:"Berapa hari Bumi satu tahun di Merkurius?",o:["88 hari","225 hari","365 hari","687 hari"],a:0,e:"Merkurius dekat Matahari sehingga orbitnya sangat singkat."},
{q:"Planet mana yang paling panas?",o:["Merkurius","Mars","Venus","Jupiter"],a:2,e:"Atmosfer tebal Venus menjebak panas, rata-rata sekitar 465 °C."},
{q:"Cahaya Matahari sampai ke Bumi dalam kira-kira...",o:["8 detik","8 menit","8 jam","8 hari"],a:1,e:"Sekitar 8 menit 20 detik untuk menempuh 1 AU."},
{q:"Planet mana yang rapat massanya lebih kecil dari air?",o:["Uranus","Mars","Saturnus","Venus"],a:2,e:"Saturnus begitu ringan sehingga secara teori akan mengapung."},
{q:"Planet mana yang berputar miring hingga hampir menggelinding?",o:["Neptunus","Uranus","Mars","Merkurius"],a:1,e:"Sumbu putar Uranus miring sekitar 98°."},
{q:"Sabuk asteroid terletak di antara orbit...",o:["Bumi dan Mars","Mars dan Jupiter","Jupiter dan Saturnus","Uranus dan Neptunus"],a:1,e:"Sabuk ini berisi sisa pembentukan tata surya."},
{q:"Berapa jumlah planet di tata surya?",o:["7","8","9","10"],a:1,e:"Sejak 2006 Pluto digolongkan sebagai planet kerdil."},
{q:"Planet mana yang dijuluki Planet Merah?",o:["Mars","Venus","Jupiter","Merkurius"],a:0,e:"Debu kaya oksida besi membuat Mars tampak kemerahan."},
{q:"Apa yang dimaksud dengan 1 AU?",o:["Jarak Bumi ke Bulan","Jarak rata-rata Bumi ke Matahari","Diameter Matahari","Jarak ke bintang terdekat"],a:1,e:"1 AU sekitar 149,6 juta km."},
{q:"Siapa manusia pertama yang terbang ke luar angkasa?",o:["Neil Armstrong","Yuri Gagarin","Buzz Aldrin","John Glenn"],a:1,e:"Gagarin mengorbit Bumi pada 12 April 1961."},
{q:"Satelit buatan pertama di dunia bernama...",o:["Explorer 1","Sputnik 1","Voyager 1","Hubble"],a:1,e:"Sputnik 1 diluncurkan Uni Soviet pada 1957."},
{q:"Badai raksasa di Jupiter disebut...",o:["Bintik Merah Besar","Mata Neptunus","Cincin Jupiter","Badai Kuiper"],a:0,e:"Badai ini sudah diamati lebih dari 150 tahun."},
{q:"Planet yang lebih dekat ke Matahari bergerak...",o:["Lebih lambat","Lebih cepat","Sama saja","Berhenti"],a:1,e:"Gravitasi Matahari makin kuat di dekatnya, sehingga orbitnya lebih cepat."},
{q:"Apa penyebab utama pasang surut air laut?",o:["Angin laut","Gravitasi Bulan","Putaran Mars","Arus sungai"],a:1,e:"Gravitasi Bulan menarik lautan Bumi."}
],rnd=[],qi=0,sc=0,NQ=5;
function newRound(){
  rnd=shuf(QB).slice(0,NQ).map(function(q){var ix=shuf([0,1,2,3]);return{q:q.q,o:ix.map(function(i){return q.o[i]}),a:ix.indexOf(q.a),e:q.e}});
  qi=0;sc=0;
}
function quiz(){
  var el=$("qz");
  if(qi>=rnd.length){
    PD.q.n++;PD.q.c+=sc;PD.q.t+=rnd.length;PD.q.b=Math.max(PD.q.b,sc);psave();if(sc===rnd.length)xp(30,"Skor sempurna");else badges();
    el.innerHTML='<div><div class="big">'+sc+' / '+rnd.length+'</div><p class="note">'+(sc===rnd.length?"Sempurna! Kamu siap jadi astronot.":sc>=3?"Mantap, kamu cukup kenal tata surya.":"Coba buka halaman Belajar dulu, lalu ulangi.")+'</p><button class="btn" id="qr" style="margin-top:1rem">Main lagi dengan soal baru</button></div>';
    $("qr").onclick=function(){newRound();quiz()};return;
  }
  var q=rnd[qi];
  el.innerHTML='<div><p class="note">Pertanyaan '+(qi+1)+' dari '+rnd.length+'</p><h3 class="qq">'+q.q+'</h3><div class="opts">'+q.o.map(function(o,i){return'<button class="opt" data-i="'+i+'">'+o+'</button>'}).join("")+'</div><p class="note" id="qe"></p></div>';
  [].forEach.call(el.querySelectorAll(".opt"),function(b){b.onclick=function(){
    var i=+b.dataset.i,ok=i===q.a;if(ok){sc++;xp(10)}
    [].forEach.call(el.querySelectorAll(".opt"),function(x,j){x.disabled=true;if(j===q.a)x.classList.add("ok");else if(j===i)x.classList.add("no")});
    $("qe").innerHTML=(ok?"Benar. ":"Belum tepat. ")+q.e+'<br><button class="btn" id="qn" style="margin-top:.9rem">'+(qi+1<rnd.length?"Lanjut":"Lihat skor")+'</button>';
    $("qn").onclick=function(){qi++;quiz()};
  }});
}
newRound();quiz();

/* kursor + efek klik */
var cr=$("cr"),cd=$("cd"),fx=$("fx"),fc=fx.getContext("2d"),px=-100,py=-100,rx=-100,ry=-100,hv=1,parts=[],fa=false,curOn=false;
function fsize(){fx.width=innerWidth;fx.height=innerHeight}
fsize();addEventListener("resize",fsize);
function cloop(){
  rx+=(px-rx)*.22;ry+=(py-ry)*.22;
  cr.style.transform="translate("+rx+"px,"+ry+"px) translate(-50%,-50%) scale("+hv+")";
  cd.style.transform="translate("+px+"px,"+py+"px) translate(-50%,-50%)";
  requestAnimationFrame(cloop);
}
addEventListener("pointermove",function(e){
  px=e.clientX;py=e.clientY;
  if(!curOn&&e.pointerType==="mouse"){curOn=true;rx=px;ry=py;document.body.classList.add("cur");requestAnimationFrame(cloop)}
});
document.addEventListener("pointerover",function(e){hv=e.target.closest&&e.target.closest("a,button,summary,input,label,#oc,#pl")?1.7:1});
function floop(){
  fc.clearRect(0,0,fx.width,fx.height);
  parts=parts.filter(function(o){
    if(o.ring){o.r+=2.6;o.l-=.045;fc.globalAlpha=Math.max(o.l,0);fc.strokeStyle=o.c;fc.lineWidth=2;fc.beginPath();fc.arc(o.x,o.y,o.r,0,6.2832);fc.stroke();return o.l>0}
    o.x+=o.vx;o.y+=o.vy;o.vx*=.94;o.vy*=.94;o.l-=.026;fc.globalAlpha=Math.max(o.l,0);fc.fillStyle=o.c;fc.strokeStyle=o.c;
    if(o.st){fc.lineWidth=1.5;fc.beginPath();fc.moveTo(o.x-o.s*2.4,o.y);fc.lineTo(o.x+o.s*2.4,o.y);fc.moveTo(o.x,o.y-o.s*2.4);fc.lineTo(o.x,o.y+o.s*2.4);fc.stroke()}
    else{fc.beginPath();fc.arc(o.x,o.y,o.s,0,6.2832);fc.fill()}
    return o.l>0;
  });
  fc.globalAlpha=1;
  if(parts.length)requestAnimationFrame(floop);else{fa=false;fc.clearRect(0,0,fx.width,fx.height)}
}
addEventListener("pointerdown",function(e){
  if(reduce||document.body.classList.contains("lite"))return;
  var col=getComputedStyle(root).getPropertyValue("--ac").trim()||"#f6c98f";
  for(var i=0;i<16;i++){var a=i/16*6.2832+Math.random()*.3,v=1.8+Math.random()*3.4;parts.push({x:e.clientX,y:e.clientY,vx:Math.cos(a)*v,vy:Math.sin(a)*v,l:1,c:col,s:1+Math.random()*1.8,st:i%3===0})}
  parts.push({ring:1,x:e.clientX,y:e.clientY,r:4,l:1,c:col});
  if(!fa){fa=true;requestAnimationFrame(floop)}
});

/* planet 3D (Three.js, tekstur dibuat prosedural di canvas) */
var GL3=null;
(function(){
  if(!window.THREE)return;
  var cv=document.createElement("canvas"),ren;cv.id="gl";cv.setAttribute("aria-hidden","true");
  try{ren=new THREE.WebGLRenderer({canvas:cv,antialias:true,alpha:true})}catch(e){return}
  var dpr=Math.min(devicePixelRatio||1,2),TX=[],lw=0,lh=0;
  ren.setPixelRatio(dpr);ren.setClearColor(0x000000,0);ren.outputEncoding=THREE.sRGBEncoding;
  function Hh(x,y,s){var n=Math.sin(x*127.1+y*311.7+s*74.7)*43758.5453;return n-Math.floor(n)}
  function vn(x,y,px,s){var xi=Math.floor(x),yi=Math.floor(y),xf=x-xi,yf=y-yi;xf=xf*xf*(3-2*xf);yf=yf*yf*(3-2*yf);
    var x0=((xi%px)+px)%px,x1=(x0+1)%px,a=Hh(x0,yi,s),b=Hh(x1,yi,s),c=Hh(x0,yi+1,s),d=Hh(x1,yi+1,s);
    return a+(b-a)*xf+(c-a)*yf+(a-b-c+d)*xf*yf}
  function fb(u,v,f,o,s){var t=0,a=.5,m=0;for(var i=0;i<o;i++){t+=a*vn(u*f,v*f*.5,f,s+i);m+=a;a*=.5;f*=2}return t/m}
  function ct(n,lo,hi){return Math.max(0,Math.min(.999,(n-lo)/(hi-lo)))}
  function ramp(r,n){for(var i=1;i<r.length;i++){if(n<=r[i][0]){var a=r[i-1],b=r[i],t=(n-a[0])/(b[0]-a[0]);return[a[1]+(b[1]-a[1])*t,a[2]+(b[2]-a[2])*t,a[3]+(b[3]-a[3])*t]}}var z=r[r.length-1];return[z[1],z[2],z[3]]}
  function bands(u,v,nb,amp,s){return .5+.5*Math.sin(v*Math.PI*nb+fb(u,v,5,4,s)*amp)}
  function cap(c,W,Hc,h){var g=c.createLinearGradient(0,0,0,Hc);g.addColorStop(0,"rgba(255,255,255,.95)");g.addColorStop(h,"rgba(255,255,255,0)");g.addColorStop(1-h,"rgba(255,255,255,0)");g.addColorStop(1,"rgba(255,255,255,.95)");c.fillStyle=g;c.fillRect(0,0,W,Hc)}
  var PT=[
  {f:function(u,v){return ct(fb(u,v,4,6,1),.3,.7)},r:[[0,58,54,50],[.5,140,133,124],[1,205,198,186]],bump:1,atm:0,tilt:.03,
   post:function(c,W,Hc){for(var i=0;i<90;i++){var r=2+Math.random()*Math.random()*16;c.beginPath();c.arc(Math.random()*W,Math.random()*Hc,r,0,6.283);c.fillStyle="rgba(35,32,28,.28)";c.fill();c.strokeStyle="rgba(225,215,200,.3)";c.lineWidth=1;c.stroke()}}},
  {f:function(u,v){var w=fb(u,v,3,3,2);return ct(fb(u+w*.3,v+w*.15,5,4,3),.25,.75)},r:[[0,175,125,65],[.5,228,184,112],[1,252,236,188]],atm:.9,tilt:.05},
  {f:function(u,v){return ct(fb(u,v,3,6,4),.24,.76)},r:[[0,8,30,92],[.44,20,78,170],[.5,66,150,214],[.515,206,192,132],[.55,64,132,62],[.68,44,102,52],[.8,128,104,72],[.92,160,150,140],[1,250,250,250]],bump:1,atm:1,tilt:.41,post:function(c,W,Hc){cap(c,W,Hc,.09)}},
  {f:function(u,v){return ct(fb(u,v,4,6,5),.28,.72)},r:[[0,72,28,16],[.5,172,82,48],[1,232,152,102]],bump:1,atm:.35,tilt:.44,post:function(c,W,Hc){cap(c,W,Hc,.045)}},
  {f:function(u,v){return ct(bands(u,v,13,3.2,6)*.8+fb(u,v,8,3,7)*.4,.12,.92)},r:[[0,118,68,40],[.25,170,110,70],[.5,216,170,120],[.75,238,214,176],[1,250,240,216]],atm:.3,tilt:.05,
   post:function(c,W,Hc){var g=c.createRadialGradient(W*.6,Hc*.64,2,W*.6,Hc*.64,Hc*.16);g.addColorStop(0,"rgba(190,70,40,.95)");g.addColorStop(1,"rgba(190,70,40,0)");c.fillStyle=g;c.beginPath();c.ellipse(W*.6,Hc*.64,Hc*.16,Hc*.09,0,0,6.283);c.fill()}},
  {f:function(u,v){return ct(bands(u,v,9,1.6,8)*.7+fb(u,v,6,3,9)*.3,.2,.85)},r:[[0,150,115,70],[.5,214,184,125],[1,244,230,188]],atm:.25,tilt:-.4},
  {f:function(u,v){return ct(.55*bands(u,v,6,1,10)+.35*fb(u,v,2,3,11),.1,.9)},r:[[0,110,190,198],[.5,160,225,228],[1,206,246,246]],atm:1,tilt:1.7},
  {f:function(u,v){return ct(bands(u,v,8,3.5,12)*.6+fb(u,v,5,4,13)*.5,.15,.95)},r:[[0,18,40,130],[.5,50,90,215],[1,140,175,255]],atm:1,tilt:.5}];
  function canvasTex(W,fn,post){var c2=document.createElement("canvas");c2.width=W;c2.height=W/2;var c=c2.getContext("2d"),im=c.createImageData(W,W/2),d=im.data,k=0,x,y,q;
    for(y=0;y<W/2;y++)for(x=0;x<W;x++){q=fn(x/W,y/(W/2));d[k++]=q[0];d[k++]=q[1];d[k++]=q[2];d[k++]=q[3]}
    c.putImageData(im,0,0);if(post)post(c,W,W/2);return c2}
  function paint(i,hq){var t=PT[i];return canvasTex(hq?1024:(innerWidth<700?384:512),function(u,v){var q=ramp(t.r,t.f(u,v));return[q[0],q[1],q[2],255]},t.post)}
  function tex(c,srgb){var t=new THREE.CanvasTexture(c);t.anisotropy=4;if(srgb)t.encoding=THREE.sRGBEncoding;return t}

  var sc=new THREE.Scene(),cam=new THREE.PerspectiveCamera(30,1.35,.1,50);cam.position.set(0,0,6.34);
  var sun=new THREE.DirectionalLight(0xfff3df,1.7);sun.position.set(-4,2,4);sc.add(sun);sc.add(new THREE.AmbientLight(0x2a3350,.55));
  var piv=new THREE.Group(),grp=new THREE.Group(),spin=new THREE.Group(),pitch=.38;piv.rotation.x=pitch;sc.add(piv);piv.add(grp);grp.add(spin);
  var mat=new THREE.MeshStandardMaterial({roughness:1,metalness:0}),mesh=new THREE.Mesh(new THREE.SphereGeometry(1,64,48),mat);spin.add(mesh);
  var clouds=new THREE.Mesh(new THREE.SphereGeometry(1.012,48,32),new THREE.MeshStandardMaterial({map:tex(canvasTex(512,function(u,v){return[255,255,255,ct(fb(u,v,4,6,9),.42,.78)*255]}),1),transparent:true,depthWrite:false,roughness:1}));
  clouds.visible=false;spin.add(clouds);
  var rt=tex(canvasTex(256,function(u){var r=u,a=r<.2?.18:r<.35?.35:r<.6?.9:r<.66?.06:r<.95?.75:.4;a*=.85+.15*Math.sin(r*220);return[228,203,158,a*255]}),1);
  var rgm=new THREE.RingGeometry(1.25,2.2,128,1),pos=rgm.attributes.position,uv=rgm.attributes.uv,v3=new THREE.Vector3();
  for(var i=0;i<pos.count;i++){v3.fromBufferAttribute(pos,i);uv.setXY(i,(v3.length()-1.25)/.95,.5)}
  var ring=new THREE.Mesh(rgm,new THREE.MeshLambertMaterial({map:rt,transparent:true,side:THREE.DoubleSide,depthWrite:false}));ring.rotation.x=-Math.PI/2;ring.visible=false;grp.add(ring);
  var atm=new THREE.Mesh(new THREE.SphereGeometry(1.07,48,32),new THREE.ShaderMaterial({
    uniforms:{c:{value:new THREE.Color(0x6fb6ff)},k:{value:1}},
    vertexShader:"varying vec3 vN;void main(){vN=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",
    fragmentShader:"uniform vec3 c;uniform float k;varying vec3 vN;void main(){float i=pow(max(.72-dot(vN,vec3(0.,0.,1.)),0.),3.);gl_FragColor=vec4(c*i*1.8*k,i*k);}",
    side:THREE.BackSide,blending:THREE.AdditiveBlending,transparent:true,depthWrite:false}));grp.add(atm);

  function set(i){
    try{
      curGL=i;var t=PT[i],tx=TX[i]||(TX[i]=tex(paint(i),1));
      mat.map=tx;mat.bumpMap=t.bump?tx:null;mat.bumpScale=.04;mat.needsUpdate=true;
      clouds.visible=i===2;ring.visible=!!P[i].ring;
      atm.material.uniforms.c.value.set(P[i].ac);atm.material.uniforms.k.value=t.atm;
      grp.rotation.z=t.tilt;
    }catch(e){$("pl").classList.remove("d3");GL3=null;cv.remove()}
  }
  document.body.appendChild(cv);$("pl").classList.add("d3");
  var drag=false,lx=0,ly=0,yaw=0,sv=.002,def=reduce?0:.002;
  on("pointerdown",function(e){drag=true;lx=e.clientX;ly=e.clientY;try{e.currentTarget.setPointerCapture(e.pointerId)}catch(x){}});
  addEventListener("pointermove",function(e){if(!drag)return;var dx=e.clientX-lx,dy=e.clientY-ly;lx=e.clientX;ly=e.clientY;yaw+=dx*.008;sv=dx*.008;pitch=Math.max(.05,Math.min(.9,pitch+dy*.004));piv.rotation.x=pitch});
  addEventListener("pointerup",function(){drag=false});addEventListener("pointercancel",function(){drag=false});
  var zt=1,zc=1,pts={},pd0=0,HQ=[],curGL=5,mid=$("mid");
  function setZ(v){
    zt=Math.max(1,Math.min(4,v));document.body.classList.toggle("zm",zt>1.25);if(zt>1.25)fitUI();
    if(zt>1.6&&!HQ[curGL]){HQ[curGL]=1;toast("Memuat detail planet...");setTimeout(function(){var i=curGL;try{TX[i]=tex(paint(i,1),1);if(i===curGL){mat.map=TX[i];if(mat.bumpMap)mat.bumpMap=TX[i];mat.needsUpdate=true}}catch(e){}},60)}
  }
  function on(ev,fn,o){$("mid").addEventListener(ev,fn,o);$("zl").addEventListener(ev,fn,o)}
  on("wheel",function(e){e.preventDefault();setZ(zt*(e.deltaY<0?1.12:.89))},{passive:false});
  on("dblclick",function(){setZ(zt>1.5?1:2.6)});
  on("pointerdown",function(e){pts[e.pointerId]=[e.clientX,e.clientY];var k=Object.keys(pts);if(k.length===2){drag=false;pd0=Math.hypot(pts[k[0]][0]-pts[k[1]][0],pts[k[0]][1]-pts[k[1]][1])}});
  addEventListener("pointermove",function(e){if(!pts[e.pointerId])return;pts[e.pointerId]=[e.clientX,e.clientY];var k=Object.keys(pts);if(k.length===2){var d=Math.hypot(pts[k[0]][0]-pts[k[1]][0],pts[k[0]][1]-pts[k[1]][1]);if(pd0)setZ(zt*d/pd0);pd0=d}});
  function pup(e){delete pts[e.pointerId];pd0=0}
  addEventListener("pointerup",pup);addEventListener("pointercancel",pup);
  var zb=document.createElement("div");zb.className="zc";zb.innerHTML='<button aria-label="Perbesar planet">+</button><button aria-label="Perkecil planet">&minus;</button><button aria-label="Ukuran normal">1x</button>';document.body.appendChild(zb);
  zb.children[0].onclick=function(){setZ(zt*1.35)};zb.children[1].onclick=function(){setZ(zt/1.35)};zb.children[2].onclick=function(){setZ(1)};
  function loop(){
    requestAnimationFrame(loop);
    if(!GL3||document.body.dataset.p!=="beranda"||document.body.classList.contains("lite"))return;
    var w=innerWidth,h=innerHeight;
    if(w!==lw||h!==lh){lw=w;lh=h;ren.setSize(w,h,false)}
    zc+=(zt-zc)*(reduce?1:.14);
    var pe=$("pl"),rc=pe.getBoundingClientRect(),r0=rc.width/2,ppu=Math.max(r0*zc,4);
    cam.aspect=w/h;cam.fov=2*Math.atan(h/(2*6.34*ppu))*57.29578;
    cam.position.x=-(rc.left+r0-w/2)/ppu;cam.position.y=(rc.top+rc.height/2-h/2)/ppu;cam.updateProjectionMatrix();
    cv.style.opacity=getComputedStyle(pe).opacity;
    if(!drag){yaw+=sv;sv+=(def-sv)*.03}
    spin.rotation.y=yaw;clouds.rotation.y+=reduce?0:.0005;
    ren.render(sc,cam);
  }
  GL3={set:set};requestAnimationFrame(loop);
})();

/* pengaturan aksesibilitas */
var SET={sz:0,hc:0,lite:0};
try{SET=JSON.parse(localStorage.getItem("sinyal-set"))||SET}catch(e){}
$("gp").innerHTML='<h4>Aksesibilitas dan penghematan</h4><div class="row"><span>Ukuran teks</span><div class="seg"><button data-sz="0">Normal</button><button data-sz="1">Besar</button><button data-sz="2">Sangat besar</button></div></div><label class="row"><span>Kontras tinggi</span><input type="checkbox" id="hcx"></label><label class="row"><span>Mode hemat (tanpa 3D dan efek)</span><input type="checkbox" id="lx"></label>';
function sapply(){
  root.style.fontSize=["100%","112.5%","125%"][SET.sz||0];
  document.body.classList.toggle("hc",!!SET.hc);document.body.classList.toggle("lite",!!SET.lite);
  try{localStorage.setItem("sinyal-set",JSON.stringify(SET))}catch(e){}
  [].forEach.call($("gp").querySelectorAll("[data-sz]"),function(b){b.setAttribute("aria-pressed",+b.dataset.sz===(SET.sz||0))});
  $("hcx").checked=!!SET.hc;$("lx").checked=!!SET.lite;
}
$("gp").addEventListener("click",function(e){var b=e.target.closest("[data-sz]");if(b){SET.sz=+b.dataset.sz;sapply()}});
$("hcx").addEventListener("change",function(){SET.hc=this.checked?1:0;sapply()});
$("lx").addEventListener("change",function(){SET.lite=this.checked?1:0;sapply()});
function gclose(){$("gp").hidden=true;$("gb").setAttribute("aria-expanded","false")}
$("gb").addEventListener("click",function(){var o=$("gp").hidden;if(o)gpPlace();$("gp").hidden=!o;this.setAttribute("aria-expanded",o)});
document.addEventListener("click",function(e){if(!e.target.closest("#gp,#gb"))gclose()});
addEventListener("keydown",function(e){if(e.key==="Escape"){gclose();navClose()}});
sapply();

/* bahasa: kamus, frasa, latihan */
var GT=[["planet","planet"],["bintang","star"],["Matahari","Sun"],["Bulan","Moon"],["orbit","orbit"],["gravitasi","gravity"],["atmosfer","atmosphere"],["asteroid","asteroid"],["komet","comet"],["galaksi","galaxy"],["teleskop","telescope"],["roket","rocket"],["satelit","satellite"],["astronot","astronaut"],["gerhana","eclipse"],["cincin","ring"],["badai","storm"],["permukaan","surface"],["suhu","temperature"],["tahun cahaya","light-year"],["planet kerdil","dwarf planet"],["sabuk asteroid","asteroid belt"],["stasiun luar angkasa","space station"],["peluncuran","launch"],["penjelajah","rover"],["ruang hampa","vacuum"],["pasang surut","tide"],["sumbu","axis"],["rotasi","rotation"],["kecepatan cahaya","speed of light"]];
var PH=[["Bumi mengorbit Matahari.","The Earth orbits the Sun."],["Cahaya Matahari sampai ke Bumi dalam delapan menit.","Sunlight reaches the Earth in eight minutes."],["Jupiter adalah planet terbesar.","Jupiter is the largest planet."],["Astronot tinggal di stasiun luar angkasa.","Astronauts live on the space station."],["Bulan menyebabkan pasang surut.","The Moon causes the tides."],["Gravitasi menahan planet pada orbitnya.","Gravity keeps the planets in their orbits."]];
var BD=[["Waluku (Lintang Waluku)","Orion","tradisi Jawa","Rasi Orion yang dalam tradisi Jawa dilihat seperti luku, alat bajak sawah. Kemunculannya menjadi penanda musim tanam dalam pranata mangsa."],["Gubug Penceng","Southern Cross (Crux)","tradisi Jawa","Rasi Salib Selatan yang dikenal sebagai penanda arah selatan."],["Lintang Kartika (Lintang Wuluh)","Pleiades","tradisi Jawa","Gugus bintang yang juga disebut Bintang Tujuh. Kemunculannya dipakai sebagai penanda musim tanam dalam pranata mangsa."],["Bintang Kejora","Venus, the Morning Star","Indonesia","Planet Venus yang tampak sangat terang menjelang fajar."]];
var canSay="speechSynthesis" in window,pm=0,pS=0,pT=0,lgv="kamus";
function say(t,l){try{var u=new SpeechSynthesisUtterance(t);u.lang=l;u.rate=.9;speechSynthesis.cancel();speechSynthesis.speak(u)}catch(e){}}
function sb(t,l,lab){return canSay?'<button class="sy" data-t="'+t+'" data-l="'+l+'" aria-label="Dengarkan '+lab+': '+t+'">'+lab+'</button>':""}
function lg(v){
  lgv=v;var b=$("lgb");
  [].forEach.call($("lgt").children,function(x){x.setAttribute("aria-selected",x.dataset.v===v)});
  if(v==="kamus"){
    b.innerHTML='<input id="lq" class="srch" placeholder="Cari istilah..." aria-label="Cari istilah"><div class="gl2" id="gl2"></div>';
    var rl=function(){var q=$("lq").value.toLowerCase();$("gl2").innerHTML=GT.filter(function(g){return!q||g[0].toLowerCase().indexOf(q)>-1||g[1].toLowerCase().indexOf(q)>-1}).map(function(g){return'<div class="gi"><div><b>'+g[0]+'</b><span>'+g[1]+'</span></div><div class="sys">'+sb(g[0],"id-ID","ID")+sb(g[1],"en-US","EN")+'</div></div>'}).join("")||'<p class="note">Istilah tidak ditemukan.</p>'};
    $("lq").addEventListener("input",rl);rl();
  }else if(v==="frasa"){
    b.innerHTML='<div class="ph">'+PH.map(function(g){return'<div class="gi"><div><b>'+g[0]+'</b><span>'+g[1]+'</span></div><div class="sys">'+sb(g[0],"id-ID","ID")+sb(g[1],"en-US","EN")+'</div></div>'}).join("")+'</div>';
  }else if(v==="budaya"){
    b.innerHTML='<p class="note" style="margin-bottom:1rem">Sebelum teleskop, manusia membaca langit dengan mata. Berikut beberapa sebutan lokal dan padanannya dalam bahasa Inggris. Sebutan dapat berbeda antardaerah.</p><div class="ph">'+BD.map(function(g){return'<div class="gi"><div><b>'+g[0]+'</b><span>'+g[1]+' ('+g[2]+')</span><span style="display:block;margin-top:.3rem">'+g[3]+'</span></div></div>'}).join("")+'</div>';
  }else{
    var it=GT[Math.floor(Math.random()*GT.length)],qs=pm?it[1]:it[0],an=pm?it[0]:it[1],op=shuf([it].concat(shuf(GT.filter(function(g){return g!==it})).slice(0,3)));
    b.innerHTML='<div class="card qz"><div class="seg" style="margin-bottom:1rem"><button data-m="0" aria-pressed="'+(pm===0)+'">Indonesia ke Inggris</button><button data-m="1" aria-pressed="'+(pm===1)+'">Inggris ke Indonesia</button></div><p class="note">Skor '+pS+' / '+pT+'</p><h3 class="qq">'+qs+' '+sb(qs,pm?"en-US":"id-ID","Dengar")+'</h3><div class="opts">'+op.map(function(g){var a=pm?g[0]:g[1];return'<button class="opt" data-c="'+(g===it?1:0)+'">'+a+'</button>'}).join("")+'</div><p class="note" id="lf"></p></div>';
    [].forEach.call(b.querySelectorAll(".opt"),function(o){o.onclick=function(){
      var ok=o.dataset.c==="1";pT++;if(ok)pS++;PD.g.t++;if(ok)PD.g.c++;psave();if(ok)xp(5);
      [].forEach.call(b.querySelectorAll(".opt"),function(x){x.disabled=true;if(x.dataset.c==="1")x.classList.add("ok")});if(!ok)o.classList.add("no");
      $("lf").innerHTML=(ok?"Benar. ":"Belum tepat. ")+qs+" = "+an+'<br><button class="btn" id="lnx" style="margin-top:.9rem">Kata berikutnya</button>';
      $("lnx").onclick=function(){lg("latih")};
    }});
    [].forEach.call(b.querySelectorAll("[data-m]"),function(m){m.onclick=function(){pm=+m.dataset.m;lg("latih")}});
  }
}
$("lgt").addEventListener("click",function(e){var x=e.target.closest("button");if(x)lg(x.dataset.v)});
$("lgb").addEventListener("click",function(e){var x=e.target.closest(".sy");if(x)say(x.dataset.t,x.dataset.l)});
lg("kamus");

/* misi komando */
var MS=[
{t:"Rapat awal kru",s:"Wahana Sinyal-1 menuju Mars membawa empat awak dari empat negara. Saat briefing, dua orang tampak bingung dengan istilah yang dipakai, tetapi tidak ada yang bertanya.",o:[
 {t:"Langsung bagi tugas tanpa diskusi supaya cepat.",d:[-10,0,-5],w:"Cepat tanpa memastikan semua paham justru memicu kesalahan."},
 {t:"Minta tiap awak menyampaikan pandangan, lalu ulangi instruksi dengan kata sederhana.",d:[15,-5,10],w:"Komunikasi lintas bahasa dan budaya butuh kejelasan serta ruang untuk bertanya."},
 {t:"Biarkan awak menyelesaikan kebingungannya sendiri.",d:[-5,-5,-10],w:"Pemimpin yang pasif membiarkan masalah kecil membesar."}]},
{t:"Kebocoran oksigen kecil",s:"Sensor mendeteksi kebocoran oksigen kecil di modul belakang. Cadangan masih cukup beberapa hari, tetapi awak bisa panik jika mengetahuinya.",o:[
 {t:"Rahasiakan dulu supaya awak tidak panik.",d:[-15,-10,-15],w:"Menyembunyikan informasi merusak kepercayaan dan memperbesar risiko."},
 {t:"Umumkan dengan tenang, lalu bagi tugas perbaikan sesuai keahlian tiap awak.",d:[10,-5,15],w:"Transparansi dan pendelegasian sesuai keahlian membuat tim bergerak bersama."},
 {t:"Perbaiki sendiri diam-diam tanpa melibatkan siapa pun.",d:[-5,-10,-5],w:"Memikul semuanya sendirian membuat pemimpin kelelahan dan tim tidak belajar."}]},
{t:"Dua awak berselisih",s:"Dua awak berselisih soal jadwal pemakaian laboratorium. Suasana mulai tegang dan memengaruhi awak lain.",o:[
 {t:"Putuskan sepihak siapa yang menang agar cepat selesai.",d:[-10,0,0],w:"Keputusan sepihak mungkin cepat, tetapi meninggalkan rasa tidak adil."},
 {t:"Dengarkan keduanya, lalu susun jadwal bergantian yang adil.",d:[15,-5,5],w:"Mendengarkan dan mencari solusi bersama menumbuhkan kepedulian dan kolaborasi."},
 {t:"Abaikan, nanti juga reda sendiri.",d:[-15,-5,-5],w:"Konflik yang dibiarkan biasanya membesar."}]},
{t:"Awak kelelahan",s:"Seorang awak tampak sangat lelah, padahal target kerja hari ini masih padat.",o:[
 {t:"Minta ia tetap lanjut karena target harus tercapai.",d:[-20,5,-15],w:"Mengabaikan kondisi orang demi target merusak keselamatan dan semangat."},
 {t:"Atur ulang beban kerja, minta awak lain membantu, dan beri ia waktu istirahat.",d:[10,-5,10],w:"Kepedulian dan berbagi beban menjaga tim tetap kuat dalam jangka panjang."},
 {t:"Hentikan seluruh pekerjaan tim sehari penuh.",d:[5,-15,0],w:"Peduli, tetapi tanpa perencanaan keputusan ini terlalu boros sumber daya."}]},
{t:"Peluang di luar rencana",s:"Teleskop menangkap fenomena menarik di luar rencana. Mengamatinya butuh waktu dan sedikit sumber daya tambahan.",o:[
 {t:"Abaikan, ikuti rencana awal saja.",d:[-5,5,0],w:"Aman, tetapi melewatkan kesempatan belajar yang bisa bermanfaat bagi banyak orang."},
 {t:"Ajak awak memutuskan bersama, ambil data singkat, lalu kirim ke ilmuwan di Bumi untuk dianalisis bersama.",d:[15,-5,5],w:"Partisipasi tim dan berbagi data memperluas dampak penemuan."},
 {t:"Ubah rute seluruh misi sendirian demi fenomena itu.",d:[-10,-10,-10],w:"Keputusan besar tanpa melibatkan tim dan tanpa perhitungan membahayakan misi."}]}
],mi=0,mv=[60,60,60],mlog=[],MN=["Moral awak","Sumber daya","Keselamatan"];
function mbars(){return MN.map(function(n,i){return'<div class="mt"><span>'+n+'</span><div class="bar"><i style="width:'+mv[i]+'%"></i></div><b>'+mv[i]+'</b></div>'}).join("")}
function mk(){
  var el=$("mk");
  if(mi>=MS.length){
    var avg=Math.round((mv[0]+mv[1]+mv[2])/3),sty=avg>=70?"Pemimpin kolaboratif":avg>=45?"Pemimpin yang berkembang":"Pemimpin yang perlu lebih banyak mendengar";
    PD.k.n++;PD.k.s=sty;PD.k.a=avg;psave();xp(60,"Misi Komando selesai");var tx="Aku jadi "+sty+" di Misi Komando NEXITA. Moral "+mv[0]+", sumber daya "+mv[1]+", keselamatan "+mv[2]+". Coba juga!";
    el.innerHTML=mbars()+'<div class="card"><div><h3 class="qq">'+sty+'</h3><p class="note">Pelajaran dari keputusanmu:</p><ul>'+mlog.map(function(x){return'<li>'+x+'</li>'}).join("")+'</ul><div class="nv"><button class="btn" id="mc">Salin hasil untuk dibagikan</button><button class="ghost" id="mr">Main lagi</button></div><p class="note" id="mn"></p></div></div>';
    $("mc").onclick=function(){var ok=function(){$("mn").textContent="Hasil disalin."},no=function(){$("mn").textContent="Salin manual: "+tx};try{navigator.clipboard.writeText(tx).then(ok,no)}catch(e){no()}};
    $("mr").onclick=function(){mi=0;mv=[60,60,60];mlog=[];mk()};return;
  }
  var sc2=MS[mi],op=shuf(sc2.o);
  el.innerHTML=mbars()+'<div class="card"><div><p class="note">Keputusan '+(mi+1)+' dari '+MS.length+'</p><h3 class="qq">'+sc2.t+'</h3><p>'+sc2.s+'</p><div class="opts" style="margin-top:1rem">'+op.map(function(o,i){return'<button class="opt" data-i="'+i+'">'+o.t+'</button>'}).join("")+'</div><div id="mf"></div></div></div>';
  [].forEach.call(el.querySelectorAll(".opt"),function(b){b.onclick=function(){
    var o=op[+b.dataset.i];
    [].forEach.call(el.querySelectorAll(".opt"),function(x){x.disabled=true});b.classList.add("ok");
    for(var i=0;i<3;i++)mv[i]=Math.max(0,Math.min(100,mv[i]+o.d[i]));
    mlog.push(o.w);
    function sg(n){return(n>0?"+":"")+n}
    $("mf").innerHTML='<p class="note" style="margin-top:1rem">'+o.w+'</p><div class="eff"><span>Moral '+sg(o.d[0])+'</span><span>Sumber daya '+sg(o.d[1])+'</span><span>Keselamatan '+sg(o.d[2])+'</span></div><button class="btn" id="mx">'+(mi+1<MS.length?"Keputusan berikutnya":"Lihat hasil")+'</button>';
    $("mx").onclick=function(){mi++;mk()};
  }});
}
mk();

/* halaman profil */
function esc(t){return String(t).replace(/[&<>"']/g,function(c){return"&#"+c.charCodeAt(0)+";"})}
function av(){var a=pact(),b=$("av");b.textContent=a.id==="guest"?"?":a.n.charAt(0).toUpperCase();b.style.background=a.c;b.title="Profil dan progres: "+a.n;xpchip();badges()}
function pswitch(id){PF.a=id;pload();done=PD.l;psave();av();lprog();lshow();prof()}
var COLS=["#f6c98f","#6fb6ff","#8fe3e6","#f08a5d","#b8a4ff","#9be28f"],pcol=COLS[0],pmsg="",pdel=false;
function mergeIn(x){
  var n=norm(x);n.l.forEach(function(i){if(PD.l.indexOf(i)<0)PD.l.push(i)});
  ["q","g","m"].forEach(function(k){for(var f in PD[k])PD[k][f]=Math.max(PD[k][f],n[k][f])});PD.x=Math.max(PD.x,n.x);n.b.forEach(function(i){if(PD.b.indexOf(i)<0)PD.b.push(i)});var ms=Math.max(PD.s.m,n.s.m);if(n.s.d>PD.s.d)PD.s=n.s;PD.s.m=ms;
  if(n.k.n>PD.k.n)PD.k=n.k;psave();
}
function prof(){
  var a=pact(),nl=PD.l.length,bq=PD.q.b/5,bg=Math.min(PD.g.c,10)/10,bk=PD.k.n>0?1:0,ov=Math.round((nl/6+bq+bg+bk)/4*100),acc=PD.g.t?Math.round(PD.g.c/PD.g.t*100):0;
  function row(n,v,t){return'<div class="mt"><span>'+n+'</span><div class="bar"><i style="width:'+Math.round(v*100)+'%"></i></div><b>'+t+'</b></div>'}
  var B=BDG.map(function(b){return[b[1],b[2],PD.b.indexOf(b[0])>-1]});
  $("pfv").innerHTML='<div class="pfg">'+
   LV()+
   '<div class="card"><div><h3>Progres '+esc(a.n)+'</h3><div class="ov"><div class="pr" style="--p:'+ov+'"><b>'+ov+'%</b></div><p class="note" style="margin:0">Rata-rata dari materi, kuis, latihan bahasa, dan Misi Komando.</p></div>'+
   row("Materi belajar",nl/6,nl+"/6")+row("Kuis terbaik",bq,PD.q.b+"/5")+row("Latihan bahasa",bg,Math.min(PD.g.c,10)+"/10")+row("Misi Komando",bk,bk+"/1")+
   '<p class="note">Kuis dimainkan '+PD.q.n+' kali. Akurasi latihan bahasa '+acc+'%.'+(PD.k.s?' Gaya kepemimpinan terakhir: '+esc(PD.k.s)+'.':'')+'</p></div></div>'+
   '<div class="card"><div><h3>Lencana</h3><div class="bds">'+B.map(function(x){return'<div class="bd'+(x[2]?" on":"")+'"><b>'+x[0]+'</b><span>'+x[1]+'</span></div>'}).join("")+'</div></div></div>'+
   '<div class="card"><div><h3>Akun</h3>'+(a.id==="guest"?'<p class="note">Kamu masuk sebagai Tamu. Buat akun agar progres tersimpan atas namamu. Progres tamu akan dibawa.</p>':'')+
   '<div class="ph" style="margin-bottom:1rem">'+PF.l.map(function(x){return'<div class="gi"><div><b>'+esc(x.n)+'</b><span>'+(x.id===PF.a?"Sedang dipakai":x.id==="guest"?"Tanpa akun":"Akun lokal")+'</span></div>'+(x.id===PF.a?'':'<button class="sy" data-u="'+x.id+'">Pakai</button>')+'</div>'}).join("")+'</div>'+
   '<input id="zn" class="srch" maxlength="20" placeholder="Nama untuk akun baru" aria-label="Nama akun baru"><div class="cols" id="zc">'+COLS.map(function(c){return'<button class="sw2" data-c="'+c+'" aria-label="Warna '+c+'" aria-pressed="'+(c===pcol)+'" style="background:'+c+'"></button>'}).join("")+'</div>'+
   '<div class="nv" style="margin-top:0"><button class="btn" id="zb">Buat akun</button>'+(a.id==="guest"?'':'<button class="ghost" id="zx">Keluar ke Tamu</button><button class="ghost" id="zd">'+(pdel?"Klik lagi untuk menghapus":"Hapus akun ini")+'</button>')+'</div></div></div>'+
   '<div class="card"><div><h3>Pindahkan progres</h3><p class="note" style="margin:0">Salin kode untuk memulihkan progres di perangkat lain. Memulihkan menggabungkan, bukan menimpa.</p><div class="nv"><button class="ghost" id="zk">Salin kode progres</button><button class="ghost" id="zr">Pulihkan dari kode</button></div><textarea id="zi" aria-label="Kode progres" placeholder="Tempel kode di sini untuk memulihkan"></textarea></div></div>'+
   '</div><p class="note" id="zm" role="status" style="margin-top:1rem">'+pmsg+'</p>';
  pmsg="";
}
$("pfv").addEventListener("click",function(e){
  var t=e.target.closest("button");if(!t)return;
  if(t.dataset.u){pdel=false;pswitch(t.dataset.u);return}
  if(t.dataset.c){pcol=t.dataset.c;[].forEach.call($("zc").children,function(x){x.setAttribute("aria-pressed",x===t)});return}
  if(t.id==="zb"){
    var nm=$("zn").value.trim();if(!nm){$("zm").textContent="Isi nama dulu.";return}
    var was=PF.a==="guest",g=was?JSON.parse(JSON.stringify(PD)):null,id="u"+Date.now().toString(36);
    PF.l.push({id:id,n:nm,c:pcol});PF.a=id;pload();
    if(g&&(g.l.length||g.q.n||g.g.t||g.k.n))PD=g;
    done=PD.l;psave();av();lprog();lshow();pmsg="Akun dibuat"+(was?", progres tamu dibawa ke akun ini.":".");prof();return;
  }
  if(t.id==="zx"){pdel=false;pswitch("guest");return}
  if(t.id==="zd"){
    if(!pdel){pdel=true;prof();return}
    var gone=PF.a;PF.l=PF.l.filter(function(x){return x.id!==gone});try{localStorage.removeItem("sinyal-d-"+gone)}catch(x){}
    pdel=false;pmsg="Akun dihapus.";pswitch("guest");return;
  }
  if(t.id==="zk"){
    var code=btoa(unescape(encodeURIComponent(JSON.stringify({v:1,d:PD}))));
    var ok=function(){$("zm").textContent="Kode disalin. Tempel di perangkat lain."},no=function(){$("zi").value=code;$("zm").textContent="Salin kode dari kolom di atas."};
    try{navigator.clipboard.writeText(code).then(ok,no)}catch(x){no()}return;
  }
  if(t.id==="zr"){
    try{var o=JSON.parse(decodeURIComponent(escape(atob($("zi").value.trim()))));mergeIn(o.d);av();lprog();lshow();pmsg="Progres dipulihkan dan digabungkan.";prof()}
    catch(x){$("zm").textContent="Kode tidak valid. Pastikan seluruh kode tersalin."}
  }
});
av();

/* minigame: Sinyal Runner */
var gc=$("gc"),gx=gc.getContext("2d"),GW=600,GH=420,G=null,grun=false,gl=0,gk={l:0,r:0},gcol="#ffb454";
function gsize(){var w=Math.max(260,Math.min($("gcv").clientWidth,720)),d=Math.min(devicePixelRatio||1,2);GW=w;GH=innerWidth<700?400:440;gc.width=w*d;gc.height=GH*d;gc.style.width=w+"px";gc.style.height=GH+"px";gx.setTransform(d,0,0,d,0,0)}
function gnew(){var s=[];for(var i=0;i<80;i++)s.push({x:Math.random()*GW,y:Math.random()*GH,v:.4+Math.random()*1.6});G={x:GW/2,tx:GW/2,o:[],sp:30,f:0,lv:3,inv:0,orb:0,sc:0,s:s}}
function govset(h){var o=$("gov");o.innerHTML=h;o.hidden=!h}
function gready(){gsize();gnew();gdraw();govset('<h3>Sinyal Runner</h3><p>Geser mouse atau jari (atau tombol ← →) untuk menggerakkan wahana. Kumpulkan sinyal emas, hindari asteroid. Skor tertinggimu: '+PD.m.b+'. Bertahan terlama: '+PD.m.t+' detik.</p><button class="btn" id="gs">Mulai</button>');$("gs").onclick=gstart}
function gstart(){gnew();govset("");grun=true;gl=performance.now();gcol=getComputedStyle(root).getPropertyValue("--ac").trim()||"#ffb454";requestAnimationFrame(gloop)}
function gloop(now){if(!grun)return;var dt=Math.min((now-gl)/16.67,3);gl=now;gstep(dt);gdraw();if(grun)requestAnimationFrame(gloop)}
function gscore(){G.sc=G.orb*10+Math.floor(G.f/60)*2}
function gstep(dt){
  var g=G,df,i,o,dx,dy;g.f+=dt;df=Math.min(1+g.f/60/45,2.6);
  if(gk.l)g.tx-=8*dt;if(gk.r)g.tx+=8*dt;g.tx=Math.max(18,Math.min(GW-18,g.tx));g.x+=(g.tx-g.x)*Math.min(.25*dt,1);
  g.sp-=dt;
  if(g.sp<=0){g.sp=Math.max(12,40/df);var orb=Math.random()<.24,r=orb?9:12+Math.random()*14,j=[];for(i=0;i<9;i++)j.push(.8+Math.random()*.4);g.o.push({x:r+Math.random()*(GW-2*r),y:-30,r:r,vy:(orb?2.2:2.2+Math.random()*1.5)*df,orb:orb,a:Math.random()*6,j:j})}
  for(i=g.o.length-1;i>=0;i--){
    o=g.o[i];o.y+=o.vy*dt;o.a+=.02*dt;dx=o.x-g.x;dy=o.y-(GH-46);
    if(Math.sqrt(dx*dx+dy*dy)<o.r+13){
      g.o.splice(i,1);
      if(o.orb)g.orb++;else if(g.inv<=0){g.lv--;g.inv=70;if(g.lv<=0){gscore();gend();return}}
      continue;
    }
    if(o.y>GH+40)g.o.splice(i,1);
  }
  if(g.inv>0)g.inv-=dt;
  for(i=0;i<g.s.length;i++){var t2=g.s[i];t2.y+=t2.v*df*dt;if(t2.y>GH){t2.y=0;t2.x=Math.random()*GW}}
  gscore();
}
function gdraw(){
  var g=G,i,o,k;if(!g)return;
  gx.clearRect(0,0,GW,GH);gx.fillStyle="#0d0d12";gx.fillRect(0,0,GW,GH);gx.fillStyle="rgba(243,239,232,.6)";
  for(i=0;i<g.s.length;i++)gx.fillRect(g.s[i].x,g.s[i].y,1.4,1.4);
  for(i=0;i<g.o.length;i++){
    o=g.o[i];
    if(o.orb){gx.fillStyle=gcol;gx.shadowColor=gcol;gx.shadowBlur=14;gx.beginPath();gx.arc(o.x,o.y,o.r,0,6.2832);gx.fill();gx.shadowBlur=0}
    else{gx.save();gx.translate(o.x,o.y);gx.rotate(o.a);gx.beginPath();for(k=0;k<9;k++){var an=k/9*6.2832;gx[k?"lineTo":"moveTo"](Math.cos(an)*o.r*o.j[k],Math.sin(an)*o.r*o.j[k])}gx.closePath();gx.fillStyle="#5e564f";gx.fill();gx.strokeStyle="#a79e92";gx.lineWidth=1.5;gx.stroke();gx.restore()}
  }
  if(g.inv<=0||Math.floor(g.inv/5)%2===0){
    gx.save();gx.translate(g.x,GH-46);gx.fillStyle="#d6e6ff";gx.beginPath();gx.moveTo(0,-18);gx.lineTo(12,14);gx.lineTo(0,8);gx.lineTo(-12,14);gx.closePath();gx.fill();
    gx.fillStyle=gcol;gx.beginPath();gx.moveTo(-5,12);gx.lineTo(0,22+Math.random()*6);gx.lineTo(5,12);gx.closePath();gx.fill();gx.restore();
  }
  gx.font="600 15px 'Schibsted Grotesk',system-ui,sans-serif";gx.fillStyle="#f3efe8";
  gx.fillText("Skor "+g.sc,14,26);gx.fillText(Math.floor(g.f/60)+" detik",14,46);gx.fillText("Rekor bertahan "+Math.max(PD.m.t,Math.floor(g.f/60))+" dtk",14,66);
  for(i=0;i<3;i++){gx.beginPath();gx.arc(GW-20-i*20,22,6,0,6.2832);if(i<g.lv){gx.fillStyle=gcol;gx.fill()}else{gx.strokeStyle="rgba(243,239,232,.4)";gx.lineWidth=1.5;gx.stroke()}}
}
function gend(){
  grun=false;
  var pts=G.sc,gain=Math.min(80,Math.floor(pts/25)),nb=pts>PD.m.b,sec=Math.floor(G.f/60),pp=P[(Math.random()*P.length)|0],fact=pp.f[(Math.random()*pp.f.length)|0];
  var oldT=PD.m.t;PD.m.n++;PD.m.o+=G.orb;PD.m.t=Math.max(PD.m.t,sec);if(nb)PD.m.b=pts;psave();
  gdraw();
  govset('<h3>Wahana rusak</h3><p>Skor '+pts+(nb?" (rekor baru!)":"")+'. Bertahan '+sec+' detik'+(sec>oldT?' (rekor waktu baru!)':' (rekor '+oldT+' dtk)')+', '+G.orb+' sinyal terkumpul. XP: +'+gain+'.</p><p class="note">Tahukah kamu? '+fact+'</p><button class="btn" id="gs">Main lagi</button>');
  $("gs").onclick=gstart;
  if(gain)xp(gain,"Sinyal Runner");else badges();
}
function gpt(e){if(!G)return;var r=gc.getBoundingClientRect();G.tx=(e.clientX-r.left)*(GW/r.width)}
gc.addEventListener("pointermove",gpt);gc.addEventListener("pointerdown",gpt);
addEventListener("keydown",function(e){if(cp!=="game")return;var k=e.key;if(k==="ArrowLeft"||k==="a"||k==="A"){gk.l=1;e.preventDefault()}if(k==="ArrowRight"||k==="d"||k==="D"){gk.r=1;e.preventDefault()}});
addEventListener("keyup",function(e){var k=e.key;if(k==="ArrowLeft"||k==="a"||k==="A")gk.l=0;if(k==="ArrowRight"||k==="d"||k==="D")gk.r=0});

/* lab: umur, bulan, misi harian */
function dq(){
  var q=PD.dq,t=today();
  if(q.d!==t){PD.dq=q={d:t,q:PD.q.n,g:PD.g.c,m:PD.m.n,done:0};psave()}
  if(!q.done&&PD.q.n-q.q>=1&&PD.g.c-q.g>=5&&PD.m.n-q.m>=1){q.done=1;psave();xp(40,"Misi harian selesai")}
}
function ageShow(){
  var v=$("bd").value,o=$("bo");
  if(!v){o.innerHTML="<li><span>Pilih tanggal lahir</span><b>-</b></li>";return}
  var d=(Date.now()-new Date(v+"T00:00:00"))/864e5;
  if(!(d>0)){o.innerHTML="<li><span>Tanggal harus di masa lalu</span><b>-</b></li>";return}
  o.innerHTML=P.map(function(p,i){return"<li><span>"+p.n+"</span><b>"+num(d/365.25/PER[i],1)+" tahun</b></li>"}).join("");
}
function moon(){
  var S=29.530588853,JD=Date.now()/864e5+2440587.5,age=((JD-2451550.1)%S+S)%S,f=age/S,ill=(1-Math.cos(6.28318*f))/2,c=$("moonc").getContext("2d"),R=50,cx=60,cy=60,wax=f<.5;
  c.clearRect(0,0,120,120);c.fillStyle="#2a2a30";c.beginPath();c.arc(cx,cy,R,0,6.2832);c.fill();
  c.save();c.beginPath();c.arc(cx,cy,R,0,6.2832);c.clip();
  c.fillStyle="#efe7d4";c.fillRect(wax?cx:cx-R,cy-R,R,2*R);
  c.fillStyle=ill<.5?"#2a2a30":"#efe7d4";c.beginPath();c.ellipse(cx,cy,R*Math.abs(1-2*ill),R,0,0,6.2832);c.fill();c.restore();
  var nm=f<.03||f>.97?"Bulan Baru":f<.22?"Sabit Awal":f<.28?"Kuartal Pertama":f<.47?"Cembung Awal":f<.53?"Purnama":f<.72?"Cembung Akhir":f<.78?"Kuartal Akhir":"Sabit Akhir";
  function dt(x){return new Date(Date.now()+x*864e5).toLocaleDateString("id-ID",{day:"numeric",month:"long"})}
  $("mt").innerHTML="<b style='font-family:var(--serif);font-size:1.4rem;font-weight:400'>"+nm+"</b><p class='note' style='margin:.3rem 0 0'>Iluminasi sekitar "+Math.round(ill*100)+"%. Umur Bulan "+num(age,1)+" hari.<br>Bulan baru berikutnya sekitar "+dt(S-age)+", purnama sekitar "+dt(((S/2-age)+S)%S)+". Perkiraan dari rata-rata bulan sinodis; tampilan disederhanakan.</p>";
}
function dmRender(){
  dq();var q=PD.dq,a=PD.q.n-q.q,b=PD.g.c-q.g,c=PD.m.n-q.m;
  function it(ok,t){return'<li class="'+(ok?"on":"")+'">'+(ok?"✓ ":"○ ")+t+"</li>"}
  $("dm").innerHTML='<ul class="dl">'+it(a>=1,"Selesaikan 1 putaran kuis ("+Math.min(a,1)+"/1)")+it(b>=5,"5 jawaban benar di latihan bahasa ("+Math.min(b,5)+"/5)")+it(c>=1,"Main Sinyal Runner 1 kali ("+Math.min(c,1)+"/1)")+'</ul><p class="note">'+(q.done?"Selesai hari ini, bonus 40 XP sudah diterima. Kembali besok.":"Selesaikan ketiganya untuk bonus 40 XP. Direset tiap hari.")+"</p>";
}
function labShow(){$("bd").max=today();$("bd").oninput=ageShow;ageShow();moon();dmRender()}

/* banding planet */
function dn(i){return +P[i].d.replace(/[^0-9]/g,"")}
function cmpShow(){
  var o=P.map(function(p,i){return'<option value="'+i+'">'+p.n+"</option>"}).join("");
  if(!$("ca").options.length){
    $("ca").innerHTML=o;$("cb").innerHTML=o;$("ca").value=0;$("cb").value=4;
    $("ca").onchange=$("cb").onchange=cmpRender;
    $("cs").onclick=function(){var t=$("ca").value;$("ca").value=$("cb").value;$("cb").value=t;cmpRender()};
  }
  cmpRender();
}
function cmpRender(){
  var a=+$("ca").value,b=+$("cb").value,A=P[a],B=P[b],da=dn(a),db2=dn(b),mx=Math.max(da,db2),bx=Math.max(120,Math.min(240,($("cmp").clientWidth-60)/2));
  function sph(p,d){var z=Math.max(8,Math.round(bx*d/mx));return'<div class="cs"><div class="cb2" style="width:'+z+"px;height:"+z+"px;background:"+p.bg+'"></div><b>'+p.n+"</b></div>"}
  function row(l,x,y){return"<div><span>"+x+"</span><b>"+l+"</b><span>"+y+"</span></div>"}
  var big=da>=db2?A:B,sm=da>=db2?B:A,r=Math.max(da,db2)/Math.min(da,db2);
  $("cmp").innerHTML='<div class="cc">'+sph(A,da)+sph(B,db2)+"</div>"+(a===b?'<p class="note">Pilih dua planet yang berbeda.</p>':'<p class="cmt">'+big.n+" berdiameter "+num(r,1)+" kali lebih lebar dari "+sm.n+", dan volumenya sekitar "+Math.round(Math.pow(r,3)).toLocaleString("id-ID")+" kali lebih besar.</p>")+
   '<div class="cmpt">'+row("Diameter",A.d,B.d)+row("Gravitasi",num(A.g,2)+" g",num(B.g,2)+" g")+row("Jarak dari Matahari",A.km,B.km)+row("Lama setahun",A.yr,B.yr)+row("Jumlah bulan",A.mo,B.mo)+row("Suhu",A.tp,B.tp)+row("Beratmu ("+kg+" kg di Bumi)",num(kg*A.g,1)+" kg",num(kg*B.g,1)+" kg")+'</div><p class="note">Ukuran bola digambar sesuai skala diameter. Data: NASA Planetary Fact Sheet.</p>';
}

/* papan peringkat */
var lbMode="lokal",lbKey="x";
function lbRowsLocal(){return PF.l.map(function(a){var d=a.id===PF.a?PD:norm((function(){try{return JSON.parse(localStorage.getItem("sinyal-d-"+a.id))}catch(e){return null}})());return{n:a.n,x:d.x,s:d.m.b,t:d.m.t,me:a.id===PF.a}})}
function lbHtml(rows){
  rows.sort(function(a,b){return(+b[lbKey]||0)-(+a[lbKey]||0)});
  return'<div class="ph">'+rows.slice(0,20).map(function(r,i){var v=(+r[lbKey]||0)+(lbKey==="x"?" XP":lbKey==="t"?" dtk":"");return'<div class="gi'+(r.me?" me":"")+'"><div><b>'+(i+1)+". "+esc(r.n||"?")+(r.me?" (kamu)":"")+"</b></div><b>"+v+"</b></div>"}).join("")+"</div>";
}
async function lbOnline(){
  var el=$("lbv"),db=null,user=null;
  try{if(window.claude&&claude.use){db=await claude.use("db");user=await claude.use("user")}}catch(e){}
  if(!db||!user){el.innerHTML='<p class="note">Papan online tidak tersedia di sini. Fitur ini hanya aktif jika halaman dibuka lewat claude.ai oleh pengguna yang diizinkan pemilik halaman. Gunakan tab Perangkat ini.</p>';return}
  var uid=await user.id();
  el.innerHTML='<div class="nv" style="margin-top:0"><button class="btn" id="lbs">Kirim skor saya</button></div><p class="note" id="lbm" role="status"></p><div id="lbl"></div>';
  async function load(){
    try{var q=await db.collection("lb").orderBy(lbKey,"desc").limit(20).get();
      var rows=q.docs.map(function(d){var x=d.data()||{};return{n:String(x.n||"?").slice(0,20),x:+x.x||0,s:+x.s||0,t:+x.t||0,me:d.id===uid}});
      $("lbl").innerHTML=rows.length?lbHtml(rows):'<p class="note">Belum ada skor. Jadilah yang pertama.</p>';
    }catch(e){$("lbl").innerHTML='<p class="note">Gagal memuat papan online.</p>'}
  }
  $("lbs").onclick=async function(){
    var a=pact();
    try{await db.collection("lb").doc(uid).set({n:a.id==="guest"?"Tamu":a.n,x:PD.x,s:PD.m.b,t:PD.m.t,at:Date.now()});$("lbm").textContent="Skor terkirim.";load()}
    catch(e){$("lbm").textContent=e&&e.code==="not_granted"?"Kamu belum punya izin menulis di papan ini (butuh peran Contributor).":"Gagal mengirim skor."}
  };
  load();
}
function lbDraw(){if(lbMode==="lokal")$("lbv").innerHTML=lbHtml(lbRowsLocal());else lbOnline()}
$("lbt").addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;lbMode=b.dataset.v;[].forEach.call($("lbt").children,function(x){x.setAttribute("aria-selected",x===b)});lbDraw()});
$("lbk").addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;lbKey=b.dataset.k;[].forEach.call($("lbk").children,function(x){x.setAttribute("aria-selected",x===b)});lbDraw()});

/* menu lainnya */
$("mb").addEventListener("click",function(e){e.stopPropagation();var o=!$("mm").classList.contains("open");navClose();if(o){$("mm").classList.add("open");this.setAttribute("aria-expanded","true")}});
document.addEventListener("click",function(e){if(!e.target.closest("#mm,#mb,#mp,#bg"))navClose()});

/* layar selamat datang */
var holdLd=!!$("ws"),wsc=$("wsc"),wcx=wsc?wsc.getContext("2d"):null,WS=[],wW=0,wH=0,wwarp=0,wwt=0,wrun=false,wskip=false,wdone=false,wfast=false;
if(holdLd)document.body.classList.add("nxi");
function tm(ms){return wfast?1:ms}
function sleep(ms){return new Promise(function(r){setTimeout(r,ms)})}
function WA(el,kf,o){return el.animate(kf,Object.assign({fill:"both"},o)).finished}
function wsz(){var d=Math.min(devicePixelRatio||1,2);wW=innerWidth;wH=innerHeight;wsc.width=wW*d;wsc.height=wH*d;wcx.setTransform(d,0,0,d,0,0);WS=[];for(var i=0;i<(wW<700?110:200);i++)WS.push({a:Math.random()*6.2832,r:Math.random(),s:Math.random()*1.2+.3})}
function wloop(){
  if(!wrun)return;requestAnimationFrame(wloop);
  wwarp+=(wwt-wwarp)*.05;wcx.clearRect(0,0,wW,wH);
  var cx=wW/2,cy=wH*.46,m=Math.hypot(cx,cy);wcx.lineCap="round";
  for(var i=0;i<WS.length;i++){
    var o=WS[i];o.r+=(.0007+wwarp*.04)*o.s*(.35+o.r);o.a+=.00015;
    if(o.r>1.05){o.r=.02+Math.random()*.08;o.a=Math.random()*6.2832}
    var r1=o.r*m,r0=Math.max(0,(o.r-(.004+wwarp*.16*o.r))*m),ca=Math.cos(o.a),sa=Math.sin(o.a);
    wcx.strokeStyle="rgba(243,239,232,"+Math.min(1,.15+o.r*.9)+")";wcx.lineWidth=.6+o.s*.9*(.4+o.r);
    wcx.beginPath();wcx.moveTo(cx+ca*r0,cy+sa*r0);wcx.lineTo(cx+ca*r1,cy+sa*r1);wcx.stroke();
  }
}
function quickAccount(nm){
  var ex=PF.l.filter(function(x){return x.n.toLowerCase()===nm.toLowerCase()})[0];
  if(ex){pswitch(ex.id);return}
  var g=JSON.parse(JSON.stringify(PD)),id="u"+Date.now().toString(36);
  PF.l.push({id:id,n:nm,c:COLS[PF.l.length%COLS.length]});PF.a=id;pload();
  if(g.l.length||g.q.n||g.g.t||g.k.n||g.x)PD=g;
  done=PD.l;psave();av();lprog();lshow();
}
function wreveal(){
  if(wdone)return;
  var wc=$("wc"),a=pact();
  $("wnm2").textContent=a.id==="guest"?"Penjelajah":a.n;
  $("wcrew").innerHTML=a.id==="guest"?'<input id="wnm" maxlength="20" placeholder="Nama panggilan" aria-label="Nama panggilan (opsional)" autocomplete="off">':esc(a.n)+" · Level "+lvl(PD.x);
  wc.hidden=false;
  [].forEach.call(wc.querySelectorAll(".wi"),function(e,i){WA(e,[{opacity:0,transform:"translateY(26px)"},{opacity:1,transform:"none"}],{duration:tm(700),delay:wfast?0:i*110,easing:"cubic-bezier(.2,.8,.2,1)"})});
  setTimeout(function(){var f=$("wnm")||$("wgo");if(f)f.focus()},wfast?0:850);
}
function wfin(){
  if(wdone)return;wdone=true;wskip=true;
  var ws=$("ws"),d=wfast?1:800;
  document.body.classList.remove("nxi");wwt=1;
  WA($("wsc"),[{transform:"scale(1)"},{transform:"scale(1.4)"}],{duration:d,easing:"cubic-bezier(.5,0,.2,1)"});
  ws.animate([{opacity:1},{opacity:0}],{duration:d,easing:"cubic-bezier(.5,0,.2,1)",fill:"forwards"}).finished.then(function(){
    wrun=false;ws.remove();removeEventListener("resize",wsz);
    document.body.style.overflow="";[].forEach.call(document.querySelectorAll("header,main,.pick,.hint,.zc"),function(e){e.inert=false});
  });
  holdLd=false;document.body.classList.remove("ld");wb=1;
  if(document.activeElement&&document.activeElement.blur)document.activeElement.blur();
}
async function wgo(){
  if(wdone)return;
  var nm=($("wnm")?$("wnm").value:"").trim(),cd=$("wcd");
  $("wgo").disabled=true;if(nm)quickAccount(nm);
  WA($("wc"),[{opacity:1},{opacity:0,transform:"scale(.96)"}],{duration:tm(350)});
  wwt=1;
  if(!wfast){for(var n=3;n>0;n--){if(wdone)return;cd.textContent=n;await WA(cd,[{opacity:0,transform:"scale(1.7)"},{opacity:1,transform:"scale(1)",offset:.35},{opacity:0,transform:"scale(.7)"}],{duration:520,easing:"ease-out"})}}
  wfin();
}
async function nxIntro(){
  var ws=$("ws");if(!ws)return;
  window.__nx=true;
  try{
    wfast=reduce||!!(SET&&SET.lite);
    document.body.style.overflow="hidden";
    [].forEach.call(document.querySelectorAll("header,main,.pick,.hint,.zc"),function(e){e.inert=true});
    wsz();addEventListener("resize",wsz);wrun=true;requestAnimationFrame(wloop);
    $("wsk").onclick=wfin;$("wgo").onclick=wgo;
    $("wc").addEventListener("keydown",function(e){if(e.key==="Enter"&&e.target.id==="wnm")wgo()});
    addEventListener("keydown",function(e){if(e.key==="Escape"&&!wdone)wfin()});
    var wl=$("wl"),lgo=$("wlg"),tx=$("wtx");
    lgo.innerHTML=document.querySelector(".brand svg").outerHTML;
    tx.innerHTML=Array.prototype.map.call("NEXITA",function(c){return'<span class="wch">'+c+"</span>"}).join("");
    try{await Promise.race([document.fonts.ready,sleep(1500)])}catch(e){}
    if(wdone)return;
    var svg=lgo.firstChild,pth=svg.querySelector(".nxp"),dots=svg.querySelectorAll(".nxd"),chs=tx.children;
    if(wfast){
      lgo.style.opacity=1;tx.style.maxWidth="none";tx.style.marginLeft=".4em";[].forEach.call(chs,function(c){c.style.opacity=1});
      var a0=wl.getBoundingClientRect(),b0=document.querySelector(".brand").getBoundingClientRect();
      wl.style.transform="translate("+(b0.left+b0.width/2-a0.left-a0.width/2)+"px,"+(b0.top+b0.height/2-a0.top-a0.height/2)+"px) scale("+(b0.width/a0.width)+")";
      wreveal();return;
    }
    var tw=tx.scrollWidth,gap=parseFloat(getComputedStyle(wl).fontSize)*.4,L=pth.getTotalLength?pth.getTotalLength():110;
    pth.style.strokeDasharray=L;
    WA(pth,[{strokeDashoffset:L},{strokeDashoffset:0}],{duration:1100,delay:500,easing:"ease-in-out"});
    [].forEach.call(dots,function(d,i){d.style.transformBox="fill-box";d.style.transformOrigin="center";WA(d,[{transform:"scale(0)"},{transform:"scale(1.7)",offset:.6},{transform:"scale(1)"}],{duration:520,delay:700+i*160})});
    await WA(lgo,[{transform:"scale(.12) rotate(-18deg)",opacity:0,filter:"blur(10px)"},{transform:"scale(1.18) rotate(4deg)",opacity:1,filter:"blur(0px)",offset:.72},{transform:"scale(1) rotate(0deg)",opacity:1,filter:"blur(0px)"}],{duration:1900,easing:"cubic-bezier(.22,.8,.2,1)"});
    if(wskip)return;
    await sleep(200);if(wskip)return;
    WA(tx,[{maxWidth:"0px",marginLeft:"0px"},{maxWidth:(tw+4)+"px",marginLeft:gap+"px"}],{duration:1000,easing:"cubic-bezier(.65,0,.2,1)"});
    [].forEach.call(chs,function(c,i){WA(c,[{opacity:0,transform:"translateY(55%) scale(.85)",filter:"blur(10px)"},{opacity:1,transform:"none",filter:"blur(0px)"}],{duration:800,delay:250+i*95,easing:"cubic-bezier(.2,.8,.2,1)"})});
    await sleep(250+5*95+800+350);if(wskip)return;
    var a=wl.getBoundingClientRect(),b=document.querySelector(".brand").getBoundingClientRect(),k=b.width/a.width,dx=b.left+b.width/2-(a.left+a.width/2),dy=b.top+b.height/2-(a.top+a.height/2);
    wwt=.35;
    await WA(wl,[{transform:"translate(0,0) scale(1)"},{transform:"translate("+dx+"px,"+dy+"px) scale("+k+")"}],{duration:1150,easing:"cubic-bezier(.65,0,.2,1)"});
    if(wskip)return;
    wreveal();
  }catch(e){wfin()}
}

/* animasi ui zoom dan transisi halaman */
function fitUI(){
  if(cp!=="beranda")return;
  var sr=$("stage").getBoundingClientRect(),W2=innerWidth,H2=innerHeight,fs=parseFloat(getComputedStyle(root).fontSize)||16,bot=H2-5.6*fs-6;
  [[document.querySelector(".l"),0],[document.querySelector(".r"),1]].forEach(function(x){
    var el=x[0],nl=sr.left+el.offsetLeft,nt=sr.top+el.offsetTop,w=el.offsetWidth,h=el.offsetHeight;
    var dx=x[1]?(W2-.05*W2-3*fs)-(nl+w):.03*W2-nl,dy=bot-(nt+h);
    el.style.setProperty("--tx",Math.round(dx)+"px");el.style.setProperty("--ty",Math.round(dy)+"px");
  });
}
addEventListener("resize",function(){if(document.body.classList.contains("zm"))fitUI()});
if(window.ResizeObserver){var ro=new ResizeObserver(function(){if(document.body.classList.contains("zm"))fitUI()});[].forEach.call(document.querySelectorAll(".l,.r"),function(e){ro.observe(e)})}
var ORD=["beranda","belajar","orbit","banding","game","peringkat","misi","kuis","bahasa","komando","lab","tentang","profil"];
function trans(a,b){
  if(!a||a===b||reduce||document.body.classList.contains("lite"))return;
  var el=document.querySelector('[data-page="'+b+'"]'),d=ORD.indexOf(b)>=ORD.indexOf(a)?1:-1,w=$("wp");
  if(el){el.style.setProperty("--dir",d);el.classList.remove("pin");void el.offsetWidth;el.classList.add("pin")}
  if(w){w.style.setProperty("--dir",d);w.classList.remove("go");void w.offsetWidth;w.classList.add("go")}
  wb=1;
}

/* navbar kapsul */
function navClose(){
  $("mm").classList.remove("open");$("mb").setAttribute("aria-expanded","false");
  $("mp").classList.remove("open");$("bg").setAttribute("aria-expanded","false");$("bg").setAttribute("aria-label","Buka menu");
}
function gpPlace(){var g=$("gb"),ref=(g.offsetParent?g:$("bg")).getBoundingClientRect();$("gp").style.top=Math.round(ref.bottom+10)+"px";$("gp").style.right=Math.max(8,Math.round(innerWidth-ref.right))+"px"}
var indInit=false;
function navInd(){
  var act=document.querySelector(".links a[aria-current=page]"),ind=$("ind");
  $("mb").classList.toggle("on",!!document.querySelector("#mm a[aria-current=page]"));
  if(!act||!act.offsetWidth){ind.style.opacity=0;return}
  if(!indInit)ind.style.transition="none";
  ind.style.opacity=1;ind.style.width=act.offsetWidth+"px";ind.style.transform="translateX("+act.offsetLeft+"px)";
  if(!indInit){indInit=true;void ind.offsetWidth;ind.style.transition=""}
}
$("mp").innerHTML='<div class="mpg">'+[].map.call(document.querySelectorAll(".links a[data-p],#mm a[data-p]"),function(a){return'<a href="'+a.getAttribute("href")+'" data-p="'+a.dataset.p+'">'+a.textContent+"</a>"}).join("")+'</div><div class="mpa"><button class="ghost" id="mpa">Aksesibilitas (Aa)</button><a class="ghost" href="#profil">Profil</a></div>';
$("bg").addEventListener("click",function(e){e.stopPropagation();var o=!$("mp").classList.contains("open");navClose();if(o){$("mp").classList.add("open");this.setAttribute("aria-expanded","true");this.setAttribute("aria-label","Tutup menu")}});
$("mp").addEventListener("click",function(e){if(e.target.closest("a"))navClose()});
$("mpa").onclick=function(e){e.stopPropagation();navClose();$("gb").click()};
addEventListener("scroll",function(){$("pill").classList.toggle("sc",scrollY>12)},{passive:true});
addEventListener("resize",function(){if(innerWidth>899)navClose();navInd()});
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(navInd);

/* router */
var cp="",pages=document.querySelectorAll("[data-page]"),TT={beranda:"NEXITA: Jelajah Tata Surya",orbit:"Orbit | NEXITA",misi:"Misi | NEXITA",kuis:"Kuis | NEXITA",belajar:"Belajar | NEXITA",bahasa:"Bahasa | NEXITA",komando:"Komando | NEXITA",tentang:"Tentang | NEXITA",profil:"Profil | NEXITA",game:"Sinyal Runner | NEXITA",banding:"Banding | NEXITA",peringkat:"Peringkat | NEXITA",lab:"Lab | NEXITA"};
function route(){
  var h=location.hash.slice(1);if(!TT[h])h="beranda";var pv=cp;cp=h;document.body.dataset.p=h;document.title=TT[h];
  [].forEach.call(pages,function(m){m.hidden=m.dataset.page!==h});
  [].forEach.call(document.querySelectorAll(".nav a[data-p]"),function(a){a.setAttribute("aria-current",a.dataset.p===h?"page":"false")});
  scrollTo(0,0);
  trans(pv,h);
  navInd();
  if(h==="profil")prof();
  if(h==="game")gready();else grun=false;
  if(h==="banding")cmpShow();
  if(h==="peringkat")lbDraw();
  if(h==="lab")labShow();
  navClose();
  if(h==="orbit"){osize();run=true;last=performance.now();requestAnimationFrame(oloop)}else run=false;
}
addEventListener("hashchange",route);
addEventListener("resize",function(){if(cp==="orbit")osize();if(cp==="game"&&!grun)gready()});
route();

apply();
requestAnimationFrame(function(){requestAnimationFrame(function(){if(!holdLd)document.body.classList.remove("ld");else setTimeout(nxIntro,40)})});
})();
