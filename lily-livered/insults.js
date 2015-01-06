  /* javascript function to randomly generate
  *  a three word insult based on entries
  *  from three arrays */

  var colAText = "artless,bawdy,beslubbering,bootless,churlish,cockered,clouted,craven,currish,dankish,dissembling,droning,errant,fawning,fobbing,froward,frothy,gleeking,goatish,gorbellied,impertinent,infectious,jarring,loggerheaded,lumpish,mammering,mangled,mewling,paunchy,pribbling,puking,puny,quailing,rank,reeky,roguish,ruttish,saucy,spleeny,spongy,surly,tottering,unmuzzled,vain,venomed,villainous,warped,wayward,weedy,yeasty,brazen,distempered,fitful,gnarling,greasy,grizzled,hideous,jaded,knavish,lewd,peevish,pernicious,prating,purpled,queasy,sottish,waggish,wanton,wenching";

  var colBText = "base-court,bat-fowling,beef-witted,beetle-headed,boil-brained,clapper-clawed,clay-brained,common-kissing,crook-pated,dismal-dreaming,dizzy-eyed,doghearted,dread-bolted,earth-vexing,elf-skinned,fat-kidneyed,fen-sucked,flap-mouthed,fly-bitten,folly-fallen,fool-born,full-gorged,guts-griping,half-faced,hasty-witted,hedge-born,hell-hated,idle-headed,ill-breeding,ill-nurtured,knotty-pated,milk-livered,motley-minded,onion-eyed,plume-plucked,pottle-deep,pox-marked,reeling-ripe,rough-hewn,rude-growing,rump-fed,shard-borne,sheep-biting,spur-galled,swag-bellied,tardy-gaited,tickle-brained,toad-spotted,urchin-snouted,weather-bitten, bunch-backed,empty-hearted,heavy-headed,horn-mad,ill-composed,iron-witted,lean-witted,lily-livered,pale-hearted,paper-faced,pinch-spotted,raw-boned-rug-headed,shag-eared,sour-faced,weak-hinged";

  var colCText = "apple-john,baggage,barnacle,boar-pig,bugbear,bum-bailey,canker-blossom,clack-dish,clotpole,coxcomb,codpiece,death-token,dewberry,flap-dragon,flax-wench,flirt-gill,foot-licker,fustilarian,giglet,gudgeon,haggard,harpy,hedge-pig,horn-beast,hugger-mugger,jolthead,lewdster,lout,maggot-pie,malt-worm,mammet,measle,minnow,miscreant,moldwarp,mumble-news,nut-hook,pigeon-egg,pignut,puttock,pumpion,ratsbane,scut,skainsmate,strumpet,varlet,vassal,whey-face,wagtail,cutpurse,dogfish,egg-shell,gull-catcher,malkin,pantaloon,rabbit-sucker,ruffian,scantling,scullion,snipe,waterfly";

  function insult() {
  	var colA = colAText.split(",");
  	var a = Math.floor(Math.random() * colA.length);
  	var colB = colBText.split(",");
  	var b = Math.floor(Math.random() * colB.length);
  	var colC = colCText.split(",");
  	var c = Math.floor(Math.random() * colC.length);

  	document.getElementById("result").innerHTML = new String("Thou " + colA[a] + ", " + colB[b] + " " + colC[c]) + ".";
  }

  insult();