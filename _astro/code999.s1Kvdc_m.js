import{a as e,i as t,n,o as r}from"./Base.astro_astro_type_script_index_0_lang.B1hXZHwi.js";function i(e,t,n,r,i,a){let o=``,s=e=>Math.round(Math.random()*e),c=e=>e.toFixed(2);for(let l=0;l<r;l++)for(let r=0;r<n;r++){let n=e+r*(i+a),u=t+l*(i+a);o+=`<rect class="t" x="${c(n)}" y="${c(u)}" width="${i}" height="${i}"/>`;let d=i/4,f=``,p=2+s(1);for(let e=0;e<p;e++){let e=c(n+d*(1+s(2))),t=c(u+d*(1+s(2)));f+=Math.random()<.5?`M${e} ${t}h${c(d*(1+s(1)))}`:`M${e} ${t}v${c(d*(1+s(1)))}`}Math.random()<.35&&(f+=`M${c(n+d)} ${c(u+d)}h${c(d*2)}v${c(d*2)}`),o+=`<path class="g" d="${f}"/>`}return o}function a(e,t,n){let r=n*1.5,i=n*Math.sqrt(3),a=(e,t)=>[0,1,2,3,4,5].map(r=>{let i=Math.PI/3*r;return`${(e+n*.94*Math.cos(i)).toFixed(1)},${(t+n*.94*Math.sin(i)).toFixed(1)}`}).join(` `),o=``;for(let s=0,c=0;c<e+n;s++,c+=r)for(let e=s%2?i/2:0;e<t+i;e+=i)o+=`<polygon class="hx" points="${a(c,e)}" data-c="${c.toFixed(0)},${e.toFixed(0)}"/>`;return o}var o=`M70 64 Q200 18 330 64 Q342 150 200 192 Q58 150 70 64 Z`,s=`M24 112 Q200 -8 376 112 Q200 232 24 112 Z`;function c(){return`
  <div class="c9-hazard c9-hazard--top"></div>
  <div class="c9-hazard c9-hazard--bottom"></div>

  <section class="c9-scene c9-hud" data-s="hud">
    <svg class="c9-field" viewBox="0 0 900 360" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${a(900,360,34)}</svg>
    <div class="c9-frame"><i></i><i></i><i></i><i></i></div>
    <ol class="c9-log">
      <li>EVA-02 // 新2号機α ── PILOT 式波・アスカ・ラングレー</li>
      <li class="a">A.T.FIELD 自己干渉 ── 強制停止信号プラグ 到達不能</li>
      <li class="a">EMERGENCY OVERRIDE REQUEST ……</li>
      <li class="a">裏コード 999 ── 承認</li>
    </ol>
    <div class="c9-warn">
      ${[`EMERGENCY`,`危険`,`LIMITER`,`DANGER`,`封印`,`OVERRIDE`].map(e=>`<span class="hexw">${e}</span>`).join(``)}
    </div>
    <div class="c9-gauges">
      <div class="c9-g"><span class="k">SYNC RATIO</span><b class="v" data-v="sync">041.3</b><span class="u">%</span></div>
      <div class="c9-g"><span class="k">ANGEL BLOOD</span><b class="v" data-v="blood">000</b><span class="u">%</span>
        <div class="c9-tube"><i data-v="tube"></i></div></div>
      <div class="c9-g"><span class="k">PATTERN</span><b class="v pat" data-v="pat">ORANGE</b></div>
    </div>
    <p class="c9-cap" data-v="cap">A.T.フィールド ── 中和 不能</p>
  </section>

  <section class="c9-scene c9-card" data-s="card">
    <div class="c9-title">
      <span class="l1">裏コード</span>
      <span class="l2">九九九</span>
      <span class="l3">THREE NINE // スリーナイン</span>
    </div>
  </section>

  <section class="c9-scene c9-eye" data-s="eye">
    <svg viewBox="0 0 400 260" aria-hidden="true">
      <defs>
        <radialGradient id="c9-iris" cx="50%" cy="50%" r="50%">
          <stop offset="0" stop-color="#f2fdff"/><stop offset=".3" stop-color="#7ef4ff"/>
          <stop offset=".7" stop-color="#1b8fd6"/><stop offset="1" stop-color="#062844"/>
        </radialGradient>
        <radialGradient id="c9-bloom" cx="50%" cy="50%" r="50%">
          <stop offset="0" stop-color="#bff8ff" stop-opacity=".9"/><stop offset="1" stop-color="#1aa8ff" stop-opacity="0"/>
        </radialGradient>
        <clipPath id="c9-lid"><path d="${s}"/></clipPath>
        <clipPath id="c9-patch"><path d="${o}"/></clipPath>
        <clipPath id="c9-above"><rect x="-400" y="-2000" width="1200" height="2112"/></clipPath>
        <clipPath id="c9-col"><rect x="192" y="-420" width="16" height="540" rx="3"/></clipPath>
      </defs>
      <ellipse class="bloom" cx="200" cy="112" rx="190" ry="120" fill="url(#c9-bloom)"/>
      <g class="eyeball">
        <path class="lid" d="${s}"/>
        <g clip-path="url(#c9-lid)">
          <circle class="iris" cx="200" cy="112" r="60" fill="url(#c9-iris)"/>
          <circle class="ring" cx="200" cy="112" r="42"/>
          <circle class="pupil" cx="200" cy="112" r="15"/>
        </g>
        <path class="lash" d="M24 112 Q200 -8 376 112"/>
      </g>
      <g clip-path="url(#c9-above)"><g class="column-wrap">
        <g class="column" clip-path="url(#c9-col)">
          <rect class="col-glow" x="192" y="-420" width="16" height="540"/>
          ${i(193,-419,2,76,6.2,.9)}
        </g>
      </g></g>
      <g class="drops"><circle cx="196" cy="120" r="2.4"/><circle cx="205" cy="124" r="1.8"/><circle cx="201" cy="118" r="1.4"/><circle cx="193" cy="126" r="1.6"/></g>
      <g class="patch">
        <path class="strap" d="M-60 30 Q20 46 74 70 M326 70 Q380 46 460 24"/>
        <g clip-path="url(#c9-patch)">
          <rect class="base" x="50" y="10" width="300" height="200"/>
          <rect class="seam" x="50" y="10" width="300" height="200"/>
          ${i(52,12,22,14,11.6,1.6)}
        </g>
        <path class="rim" d="${o}"/>
      </g>
    </svg>
    <p class="c9-sub">LEFT EYE // 使徒封印用呪詛柱 ── 抜去</p>
  </section>

  <section class="c9-scene c9-card c9-final" data-s="final">
    <div class="c9-title">
      <span class="l1">使徒化</span>
      <span class="l3">EVA-02 新2号機α // ANGELIFICATION</span>
    </div>
  </section>

  <div class="c9-flash"></div>
  <div class="c9-noise"></div>
  <p class="c9-skip">ESC // SKIP</p>`}var l=null;function u(i){if(l)return;let a=()=>{i(`新2号機α ── 第9の使徒と融合。A.T.フィールド中和。`,`acc`),i(`配色已切换到 2 号机（本页有效；输入 theme unit02 可永久保留）。`)};if(e()===`off`){[`裏コード999（スリーナイン）── 承認`,`左眼 使徒封印用呪詛柱 ── 抜去`,`エンジェルブラッド 注入 ── 使徒化`].forEach(e=>i(e,`err`)),r(`unit02`,!1),a();return}let o=document.createElement(`div`);o.className=`c999`,o.setAttribute(`role`,`alert`),o.setAttribute(`aria-label`,`裏コード999`),o.innerHTML=c(),document.body.append(o);let s=document.documentElement,u=e=>o.querySelector(e),d=e=>[...o.querySelectorAll(e)],f=e=>u(`[data-v="${e}"]`),p=e=>u(`[data-s="${e}"]`),m=!1,h=()=>{m||(m=!0,r(`unit02`,!1),t()?.ripple(innerWidth/2,innerHeight/2,3),s.classList.add(`glitching`),setTimeout(()=>s.classList.remove(`glitching`),650))},g={sync:41.3,blood:0},_=()=>{f(`sync`).textContent=g.sync.toFixed(1).padStart(5,`0`),f(`blood`).textContent=String(Math.round(g.blood)).padStart(3,`0`),f(`tube`).style.transform=`scaleY(${g.blood/100})`},v=u(`.c9-noise`),y=u(`.c9-flash`),b=n.timeline({onComplete:()=>C()}),x=(e,t,n)=>{e&&b.set(p(e),{autoAlpha:0},n),b.set(p(t),{autoAlpha:1},n),b.fromTo(v,{opacity:.9},{opacity:0,duration:.2,ease:`steps(4)`},n)};n.set(d(`.c9-scene`),{autoAlpha:0}),b.fromTo(o,{opacity:0},{opacity:1,duration:.2},0),x(null,`hud`,0),b.from(d(`.c9-frame i`),{scale:1.4,opacity:0,duration:.3,stagger:.04},.05),b.from(d(`.c9-log li`),{opacity:0,x:-16,duration:.14,stagger:.3,ease:`steps(2)`},.15),b.from(d(`.c9-warn .hexw`),{opacity:0,scale:.6,duration:.2,stagger:.07},.4),b.from(d(`.c9-field .hx`),{opacity:0,duration:.5,stagger:{each:.002,from:`center`}},.2),b.to(u(`.c9-warn`),{opacity:.35,duration:.1,repeat:7,yoyo:!0,ease:`steps(1)`},.8),x(`hud`,`card`,1.5),b.from(u(`[data-s=card] .l1`),{autoAlpha:0,duration:.01},1.5),b.from(u(`[data-s=card] .l2`),{autoAlpha:0,duration:.01},1.8),b.from(u(`[data-s=card] .l3`),{autoAlpha:0,duration:.01},2.05),b.to(u(`[data-s=card] .c9-title`),{x:3,duration:.05,repeat:3,yoyo:!0,ease:`steps(1)`},2.5),x(`card`,`eye`,2.75),b.fromTo(u(`.c9-eye svg`),{scale:.92},{scale:1.04,duration:2.6,ease:`power1.out`},2.75),b.fromTo(u(`.patch .seam`),{opacity:.08},{opacity:.6,duration:.25,repeat:3,yoyo:!0,ease:`sine.inOut`},2.9),b.to(u(`.patch .seam`),{opacity:1,duration:.2},3.85),b.to(u(`.patch`),{x:-3,y:2,rotation:-1.2,svgOrigin:`200 112`,duration:.05,repeat:5,yoyo:!0,ease:`steps(1)`},3.6),b.to(u(`.patch`),{x:170,y:340,rotation:34,opacity:0,svgOrigin:`200 112`,duration:.55,ease:`power3.in`},4.05),b.fromTo(u(`.bloom`),{opacity:0},{opacity:1,duration:.4},4.15),b.fromTo(u(`.iris`),{opacity:.25},{opacity:1,duration:.35},4.2),b.to(u(`.ring`),{rotation:360,svgOrigin:`200 112`,duration:1.6,ease:`none`},4.2),b.to(u(`.pupil`),{attr:{r:6},duration:.3},4.3),b.fromTo(u(`.column-wrap`),{y:540},{y:0,duration:.85,ease:`power4.out`},4.6),b.fromTo(u(`.col-glow`),{opacity:.2},{opacity:1,duration:.2,repeat:3,yoyo:!0},4.6),b.fromTo(d(`.drops circle`),{opacity:1,x:0,y:0},{opacity:0,y:()=>40+Math.random()*60,x:()=>Math.random()*30-15,duration:.7,stagger:.05,ease:`power2.in`},4.7),b.from(u(`.c9-sub`),{autoAlpha:0,duration:.01},4.6),b.fromTo(y,{opacity:0},{opacity:1,duration:.08,yoyo:!0,repeat:1},5.45),x(`eye`,`hud`,5.6),b.set(d(`.c9-log, .c9-warn`),{autoAlpha:.22},5.6),b.call(()=>o.classList.add(`is-blood`),[],5.6),b.to(g,{blood:100,sync:999.9,duration:1.1,ease:`power2.in`,onUpdate:_},5.65),b.call(()=>void(f(`pat`).textContent=`BLUE`),[],6.2),b.call(()=>void(f(`cap`).textContent=`A.T.フィールド ── 中和`),[],6.75),b.to(u(`.c9-field`),{x:4,duration:.04,repeat:8,yoyo:!0,ease:`steps(1)`},6.4),b.to(d(`.c9-field .hx`),{opacity:0,scale:.2,transformOrigin:`50% 50%`,x:(e,t)=>(Number(t.getAttribute(`data-c`).split(`,`)[0])-450)*(.6+Math.random()),y:(e,t)=>(Number(t.getAttribute(`data-c`).split(`,`)[1])-180)*(.6+Math.random())+80,rotation:()=>Math.random()*180-90,duration:.7,ease:`power2.in`,stagger:{each:.0015,from:`center`}},6.75),b.fromTo(y,{opacity:0},{opacity:1,duration:.12},7.45),b.call(h,[],7.55),x(`hud`,`final`,7.6),b.to(y,{opacity:0,duration:.5},7.6),b.from(u(`[data-s=final] .l1`),{scale:1.25,filter:`blur(6px)`,duration:.5,ease:`power3.out`},7.6),b.from(u(`[data-s=final] .l3`),{autoAlpha:0,duration:.01},8),b.to(o,{opacity:0,duration:.5,ease:`power2.in`},9),Object.assign(o,{_tl:b}),e()===`low`&&b.timeScale(1.25);let S=e=>{e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),C())};function C(){l&&(l=null,b.kill(),window.removeEventListener(`keydown`,S,!0),h(),o.remove(),a())}l=C,window.addEventListener(`keydown`,S,!0),o.addEventListener(`click`,C),_()}export{u as code999};