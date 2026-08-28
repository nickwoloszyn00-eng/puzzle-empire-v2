/* Thirty hand-authored level briefs. Boards vary through seed and objective. */
const LEVELS = [
 ['Ruby Run',0,10,22],['Sapphire Steps',1,12,22],['Emerald Edge',2,14,23],['Golden Grove',3,13,22],['Violet Vale',4,15,24],
 ['Rosewater Road',5,18,24],['Ruby Relay',0,20,23],['Bluebell Bridge',1,21,25],['Emerald Enclave',2,22,25],['Gilded Gate',3,23,24],
 ['Amethyst Arc',4,24,25],['Petal Path',5,25,26],['Royal Ruby',0,27,25],['Crystal Current',1,28,26],['Verdant Vault',2,29,27],
 ['Sunstone Summit',3,30,26],['Twilight Tower',4,31,27],['Blooming Bastion',5,32,28],['Scarlet Sanctuary',0,34,27],['Azure Abbey',1,35,28],
 ['Jade Journey',2,36,29],['Golden Gallery',3,38,28],['Purple Palace',4,39,29],['Coral Crown',5,40,30],
 ['Ruby Reprise',0,42,28],['Sapphire Siege',1,43,29],['Emerald Eclipse',2,44,30],['Golden Glory',3,46,29],['Violet Victory',4,47,30],['Empire Eternal',5,50,31]
].map((x,i)=>({id:i+1,name:x[0],targetGem:x[1],target:x[2],moves:x[3],companion:i<10?'Luma':i<20?'Rook':'Pip',type:['match','cards','jigsaw','word'][i%4]}));
/* These are town supplies, not abstract candy. Later milestones introduce richer items. */
const GEM_ICONS=['🌱','🪵','🫐','🏵️','🔮','🧶'];
const CHALLENGE_LABELS={match:'Gather supplies',cards:'Find matching supplies',jigsaw:'Restore the town scene',word:'Solve the town word'};
const BUILDINGS=[['🏰','Royal Hall',3],['🌳','Sun Orchard',8],['⛲','Moon Fountain',15],['🗼','Wizard Tower',23],['🎪','Festival Plaza',30]];

