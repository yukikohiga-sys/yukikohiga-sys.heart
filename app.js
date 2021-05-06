// app.js

//音源を生成
var synth = new Tone.Synth().toMaster();

//「C5」の音を「2分音符」で発音
synth.triggerAttackRelease('C5', '2n');