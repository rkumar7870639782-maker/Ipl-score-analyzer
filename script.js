function analyzeMatch(){

const runs =
document.getElementById("oversInput")
.value
.split(",")
.map(Number);

if(runs.length !== 20){
alert("Please enter exactly 20 overs");
return;
}

let best3 = -Infinity;
let best3Start = 0;

for(let i=0;i<=17;i++){

let sum = 0;

for(let j=i;j<i+3;j++){
sum += runs[j];
}

if(sum > best3){
best3 = sum;
best3Start = i+1;
}
}

let best4 = -Infinity;
let best4Start = 0;

for(let i=0;i<=16;i++){

let sum = 0;

for(let j=i;j<i+4;j++){
sum += runs[j];
}

if(sum > best4){
best4 = sum;
best4Start = i+1;
}
}

let worst4 = Infinity;
let worst4Start = 0;

for(let i=0;i<=16;i++){

let sum = 0;

for(let j=i;j<i+4;j++){
sum += runs[j];
}

if(sum < worst4){
worst4 = sum;
worst4Start = i+1;
}
}

let powerplay =
runs.slice(0,6)
.reduce((a,b)=>a+b,0);

let middle =
runs.slice(6,15)
.reduce((a,b)=>a+b,0);

let death =
runs.slice(15,20)
.reduce((a,b)=>a+b,0);

let strongest =
Math.max(
powerplay,
middle,
death
);

let weakest =
Math.min(
powerplay,
middle,
death
);

let strongestPhase = "";

if(strongest === powerplay)
strongestPhase = "Powerplay";

else if(strongest === middle)
strongestPhase = "Middle Overs";

else
strongestPhase = "Death Overs";

let weakestPhase = "";

if(weakest === powerplay)
weakestPhase = "Powerplay";

else if(weakest === middle)
weakestPhase = "Middle Overs";

else
weakestPhase = "Death Overs";

document.getElementById("results")
.innerHTML = `

<div class="card green">
<h3>🔥 Best 3 Overs</h3>
<p>Overs ${best3Start}-${best3Start+2}</p>
<p>${best3} Runs</p>
</div>

<div class="card blue">
<h3>🚀 Best 4 Overs</h3>
<p>Overs ${best4Start}-${best4Start+3}</p>
<p>${best4} Runs</p>
</div>

<div class="card red">
<h3>❄ Worst 4 Overs</h3>
<p>Overs ${worst4Start}-${worst4Start+3}</p>
<p>${worst4} Runs</p>
</div>

<div class="card orange">
<h3>⚡ Powerplay</h3>
<p>${powerplay} Runs</p>
</div>

<div class="card purple">
<h3>🎯 Middle Overs</h3>
<p>${middle} Runs</p>
</div>

<div class="card blue">
<h3>💥 Death Overs</h3>
<p>${death} Runs</p>
</div>

<div class="card green">
<h3>🏆 Strongest Phase</h3>
<p>${strongestPhase}</p>
</div>

<div class="card red">
<h3>📉 Weakest Phase</h3>
<p>${weakestPhase}</p>
</div>

<div class="card orange">
<h3>📊 Final Insight</h3>
<p>Match changed during Overs
${best4Start}-${best4Start+3}</p>
</div>

`;
}
