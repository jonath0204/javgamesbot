const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const prefix = "j!"
let pv = require("./pv.json")
let coins = require("./coins.json");
let gold = require("./gold.json");
let xp = JSON.parse(fs.readFileSync("./points.json", "utf8"));
let level = JSON.parse(fs.readFileSync("./points.json", "utf8"));
const drop = require("./drop.json");
let time1 = require("./time1.json");
let time2 = require("./time2.json");
let cookie = require("./cookie.json");


client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



client.on('ready', () => {
	client.user.setGame('j!help').catch(console.error)
	console.log(`JAVGame est connecter !`);
	console.log(` ${client.users.size} utilisateurs sur ${client.guilds.size} serveurs`);
})


client.on('message', (message) => {

  if (message.content.startsWith("j!ping")) {
			
    var now = require('performance-now');
    
    var startTime = now();
    
    message.channel.send("**pong :ping_pong: = ? **")
    
    .then(message => {
    
    var endTime = now();
    
    return message.edit("**pong :ping_pong: = " + Math.round(endTime - startTime) + " ms.**");
    
    }).catch(console.error);
    
    }
    if (message.content === 'j!invite') {
      message.channel.send('Invite moi sur ton serveur = https://discordapp.com/oauth2/authorize?client_id=485485977062604851&scope=bot&permissions=8')
    
}
if (message.content === 'j!guilde') {
	message.channel.send('Rejois le serveur du bot : https://discord.gg/KAe9nm8 ')
  
}




  

  if (message.content === 'j!info') {
		let m = " ";
        m += 'Voici les statistiques du bot: \n';
        m += '**Nombre de serveurs**: ' + client.guilds.size + '\n';
        m += '**Nombre d\'utilisateurs**: ' + client.users.size + '\n';
        m += '**Nombre total de salons textuels**:' + client.channels.size + '\n';
        message.channel.send(m);
    }
	
	if (message.content.startsWith("j!drop")) {
		let uDrop = drop[message.author.id].drop
	if(!drop[message.author.id])
		drop[message.author.id] = {
			drop: 1
    }
	  
	  fs.writeFile("./drop.json", JSON.stringify(drop), (err) => {
		if (err) console.log(err);
		});
message.channel.send(`Tu as un taux de drop de : ${uDrop} % `)
}

if (message.content.startsWith("j!coins")) {
	if (!drop[message.author.id])
		drop[message.author.id] = {
		drop: 1
		};
	let uDrop = drop[message.author.id].drop
	if(!coins[message.author.id])
	coins[message.author.id] = {
  coins: 0
	};



let coinAmt = Math.floor(Math.random() * uDrop) + 2

console.log(`${coinAmt}`);


	coins[message.author.id] = {
  coins: coins[message.author.id].coins + coinAmt
	};
	fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
	if (err) console.log(err);
	});
	let coinEmbed = new Discord.RichEmbed()
	.setAuthor(message.author.username)
	.setColor("RANDOM")
	.addField("💸", `${coinAmt} coins ajoutés !`);

	message.channel.send(coinEmbed).then(message => {message.delete(5000)});

	 

	
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if (message.content.startsWith("j!gold")) {
	if (!drop[message.author.id])
		drop[message.author.id] = {
		drop: 1
		};
	let uDrop = drop[message.author.id].drop
	if(!gold[message.author.id])
	gold[message.author.id] = {
  gold: 0
	};



let goldAmt = Math.floor(Math.random() * uDrop) + 1

console.log(`${goldAmt} `);


	gold[message.author.id] = {
  gold: gold[message.author.id].gold + goldAmt
	};
	fs.writeFile("./gold.json", JSON.stringify(gold), (err) => {
	if (err) console.log(err);
	});
	let coinEmbed5 = new Discord.RichEmbed()
	.setAuthor(message.author.username)
	.setColor("RANDOM")
	.addField("💰", `${goldAmt} gold ajoutés !`);

	message.channel.send(coinEmbed5).then(message => {message.delete(5000)});





}







				///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
				
					if (message.content.startsWith(prefix + "daily")) {	
						if (!drop[message.author.id])
	                 	drop[message.author.id] = {
	                  	drop: 1
	                	};
                    	let uDrop = drop[message.author.id].drop
						if(!coins[message.author.id])
							coins[message.author.id] = {
							coins: 0
							};
							if(!time1[message.author.id])
							time1[message.author.id] = {
							time1: 0
							};
							
						if ((time1[message.author.id].ratelimit > Date.now()) && (time1[message.author.id].ratelimit !== 0)) {
							var now = new Date().getTime();
							var distance = time1[message.author.id].ratelimit - now;
							var days = Math.floor(distance / (1000 * 60 * 60 * 24));
							var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
							var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
							var seconds = Math.floor((distance % (1000 * 60)) / 1000);
							return message.channel.send(":x: Vous pourrez récuperer votre récompense dans : " + hours + "h " + minutes + "m " + seconds + "s");
					}
		
	let Dcoins = Math.floor(Math.random() * uDrop) + 55


 
	coins[message.author.id] = {
		coins: coins[message.author.id].coins + Dcoins
		};
		fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
			if (err) console.log(err);
			});
			time1[message.author.id].ratelimit = Date.now() + 86400000 
      fs.writeFile("./time1.json", JSON.stringify(time1), (err) => { 
            if (err) console.error(err) 
			});
			message.channel.send(`Tu as obtenu(e) ${Dcoins} coins ! A demain !`)
		

 
}



if (message.content.startsWith(prefix + "hr")) {
	if (!drop[message.author.id])
	                 	drop[message.author.id] = {
	                  	drop: 1
	                	};
                    	let uDrop = drop[message.author.id].drop	
	
	if(!gold[message.author.id])
		gold[message.author.id] = {
		gold: 0
		};
		if(!time2[message.author.id])
		time2[message.author.id] = {
		time2: 0
		};
		
	if ((time2[message.author.id].ratelimit > Date.now()) && (time2[message.author.id].ratelimit !== 0)) {
		var now = new Date().getTime();
		var distance =time2[message.author.id].ratelimit - now;
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		return message.channel.send(":x: Vous pourrez récuperer votre récompense dans : " + hours + "h " + minutes + "m " + seconds + "s");
}

let hcoins = Math.floor(Math.random() * uDrop) + 20





gold[message.author.id] = {
gold: gold[message.author.id].gold + hcoins
};
fs.writeFile("./gold.json", JSON.stringify(gold), (err) => {
if (err) console.log(err);
});
time2[message.author.id].ratelimit = Date.now() + 3600000 
fs.writeFile("./time2.json", JSON.stringify(time2), (err) => { 
	if (err) console.error(err) 
	});
	message.channel.send(`Tu as obtenu(e)s ${hcoins} golds ! A dans 1 Heure`)


}


if (message.content.startsWith("j!pv")) {
	if (!drop[message.author.id])
		drop[message.author.id] = {
		drop: 1
		};
	let uDrop = drop[message.author.id].drop
	if(!pv[message.author.id])
	pv[message.author.id] = {
  pv: 0
	};



let pvAmt = Math.floor(Math.random() * uDrop) + 2

console.log(`${pvAmt}`);


	pv[message.author.id] = {
  pv: pv[message.author.id].pv + pvAmt
	};
	fs.writeFile("./pv.json", JSON.stringify(pv), (err) => {
	if (err) console.log(err);
	});
	let coinEmbed9 = new Discord.RichEmbed()
	.setAuthor(message.author.username)
	.setColor("RANDOM")
	.addField("❤", `${pvAmt} pv ajoutés !`);

	message.channel.send(coinEmbed9).then(message => {message.delete(5000)});




}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    
if(message.content.startsWith(prefix + "shop")){
	if(!coins[message.author.id])
		coins[message.author.id] = {
		coins: 0
		};
		
	if(!gold[message.author.id])
		gold[message.author.id] = {
		gold: 0
		};
		if(!drop[message.author.id])
		drop[message.author.id] = {
		drop: 1
		};
		
	(async function() {
		let uCoins = coins[message.author.id].coins
		let uGold = gold[message.author.id].gold
	 const mainMessage = await message.channel.send(` Bienvenue sur le JAVshop. Votre solde : ${uCoins} 💸 | ${uGold} 💰 \n 💸 : Ameliore ton taux de drop  pour 1500 coins ! \n 💰 Ameliore ton taux de drop pour 2000 golds \n ❌ Annuler  `);
	
	 await mainMessage.react("💸")
	 await mainMessage.react("💰")
	  await mainMessage.react("❌")
		 
		
	const panier = mainMessage.createReactionCollector((reaction, user) => user.id === message.author.id);
	 
	panier.on('collect', async(reaction) => 
	{
	
	
	if (reaction.emoji.name === "❌") {
		

		mainMessage.delete(0);
message.channel.send("A bientot sur le JAVshop !")
	
		}
		
	
	
	
		if (reaction.emoji.name === "💸") {
			if (uCoins > 1500){
				coins[message.author.id] = {
					coins: coins[message.author.id].coins - 1500
					};
					fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
					if (err) console.log(err);
					});		
					drop[message.author.id] = {
						drop: drop[message.author.id].drop + 1
						};
						fs.writeFile("./drop.json", JSON.stringify(drop), (err) => {
						if (err) console.log(err);
						});		
					mainMessage.delete(0)
					message.channel.send("Tu as améliorer ton drop de 1% !")
				}
				
	
				if (uCoins < 1500){	
		
					mainMessage.edit("Tu n' as pas assez de coins !")
		}
		mainMessage.edit("Tu n' as pas assez de coins !")

	}

	if (reaction.emoji.name === "💰") {
		
			
			
		if (uGold > 2000){
			gold[message.author.id] = {
				gold: gold[message.author.id].gold - 2000
				};
				fs.writeFile("./gold.json", JSON.stringify(gold), (err) => {
				if (err) console.log(err);
				});		
				drop[message.author.id] = {
					drop: drop[message.author.id].drop + 2
					};
					fs.writeFile("./drop.json", JSON.stringify(drop), (err) => {
					if (err) console.log(err);
					});		
				mainMessage.delete(0)
				message.channel.send("Tu as améliorer ton drop de 2% !")
			}
			

			if (uCoins < 2000){	
	
				mainMessage.edit("Tu n' as pas assez de coins !")
	}
	mainMessage.edit("Tu n' as pas assez de coins !")

		
		
		}
	 await reaction.remove(message.author.id);
	
	});
	 }());
	}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////



let xpAdd = Math.floor(Math.random() * 6) + 8;

if (!message.content.startsWith(prefix)) return;
if (message.author.bot) return;
if(!xp[message.author.id]){
  xp[message.author.id] = {
	xp: 0,
	level: 1
  };
}


let curxp = xp[message.author.id].xp;
let curlvl = xp[message.author.id].level;
let nxtLvl = xp[message.author.id].level * 70;
xp[message.author.id].xp =  curxp + xpAdd;
if(nxtLvl <= xp[message.author.id].xp){
  xp[message.author.id].level = curlvl + 1;
  let pvlvl = Math.floor(Math.random() * curlvl) + 2
  message.channel.send(`Tu est passé niv __${curlvl + 1}__ \nTu as récupéré ${pvlvl} pv :heart:`).then(message => {message.delete(10000)});
 
  
if(!pv[message.author.id])
	pv[message.author.id] = {
	pv: 0
	};

	pv[message.author.id] = {
		pv: pv[message.author.id].pv + pvlvl
		};
		fs.writeFile("./pv.json", JSON.stringify(pv), (err) => {
			if (err) console.log(err);
			});
}

fs.writeFile("./points.json", JSON.stringify(xp), (err) => {
  if(err) console.log(err)
});


if (message.content.startsWith("j!inv")) {
	if (!coins[message.author.id])
		coins[message.author.id] = {
		coins: 0
		};
	
	 if (!gold[message.author.id])
		gold[message.author.id] = {
		gold: 0
		};
		
	
	if (!pv[message.author.id])
		pv[message.author.id] = {
		pv: 0
		};
		
	if (!drop[message.author.id])
		drop[message.author.id] = {
		drop: 1
		};

		if (!cookie[message.author.id])
		cookie[message.author.id] = {
		cookie: 0
		};
		
		
		
	let urep = cookie[message.author.id].cookie
    let uDrop = drop[message.author.id].drop
	let uCoins = coins[message.author.id].coins
	let uGold = gold[message.author.id].gold
	let upv = pv[message.author.id].pv
	let coinsEmbed7 = new Discord.RichEmbed()
	.setAuthor("Inventaire de " + message.author.username)
	.setColor("RANDOM")
	.addField("Tu es level", curlvl)
	.addField("Taux DROP % : ", uDrop ,)
	.addField("PV ❤ :", upv )
	.addField("COINS 💸 : ", uCoins)
	.addField("GOLD 💰 : ", uGold)
	.addField("Réputation :chart_with_downwards_trend: : ", urep)
	
  
	message.channel.send(coinsEmbed7)

}





   if (message.content === 'j!help') {
	message.channel.send({
		embed: {
			  color: 823648,
			  description: "Help envoyée en dm !"
		}
	  
	})
	
	


	
	message.author.send({
		embed: {
			color: 1234567,
			title: "Help :tools:",
			description: "Ici tu trouvera toutes les commandes help ",
			timestamp: new Date(),
			footer: {
				  text: "©JAVbot"
			},
			fields: [
				{ 
					name: "j!info",
					   value: "Les infos du bot.  "
				 },
				 { 
					name: "j!invite",
					   value: "Invite JAVGames sur ton serveur.  "
				 },
				 { 
					name: "j!guilde",
					   value: "Rejoins le serveur officiel de JAVGames.  "
				 },
				  {
					   name: "j!inv",
					  value: "Pour crée un compte et voir votre inventaire."
				},
				{
					 name: "j!coins",
					  value: "Génère des coins avec un drop aléatoires."
				},
				{
					  name: "j!gold",
					  value: "Génère du gold avec un drop aléatoires. "
				},
				{
					name: "j!pv",
					value: "Génère des points de vie avec un drop aléatoires. "
			  },
				{
					name: "j!boss",
					value: "Bats toi dans l' arène pour gagner des ressources ! "
				},
				{
					name: "j!daily",
					value: "Recupères ta récompense toutes les 24 heures. "
				},
				 
				{ 
					   name: "j!hr",
					  value: "Recupères ta récompense toutes les heures."
				},
				{ 
					  name: "j!shop",
					 value: "Pour voir le shop et acheter si possible."
				   }, 
				   { 
					name: "j!slots",
				   value: "Gagnes des coins gratuitement !"
				 },   
			],
			thumbnail: {
				url: message.guild.iconURL //l'avatar du bot
			},
		  }
	});
}
if (message.content.startsWith(prefix + "coinflip")) {
	if(!coins[message.author.id])
		coins[message.author.id] = {
		coins: 0
		};
	
	
const result = Math.round(Math.random());
if (result) {
	coins[message.author.id] = {
		coins: coins[message.author.id].coins + 10
		};
		fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
		if (err) console.log(err);
		});
	let coinEmbed12 = new Discord.RichEmbed()
	.setTitle(`Coinflip`)
	.setDescription(`La pièce est tombée sur **Face**. Tu as gagné **10 coins**`)
	.setColor(`GREEN`)
	.setFooter(new Date())
	message.channel.send(coinEmbed12)
} else {
	coins[message.author.id] = {
		coins: coins[message.author.id].coins - 7
		};
		fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
		if (err) console.log(err);
		});
	let coinEmbed13 = new Discord.RichEmbed()
  .setTitle(`Coinflip`)
  .setDescription(`La pièce est tombée sur **pile**. Tu as perdu **7 coins**`)
  .setColor(`BLUE`)
  .setFooter(new Date())
  message.channel.send(coinEmbed13)
}
}
let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
	let args = messageArray.slice(1);
	//////////////////////////////////////////////////////////////////////////////////////
if (message.content.startsWith(prefix + "give")){
	return message.channel.send("Erreur...")
	var mentionned = message.mentions.users.first();
	if(message.mentions.users.size === 0){
		return message.reply("Tu dois mentionner une personne ! **j!give (la personne) (la quantité)** !")
		}
		
	

let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

if(!coins[message.author.id]){
	return message.reply("Tu n' as pas de coins !")
}

if(!coins[pUser]){
	coins[pUser] = {
		coins: 0
	};
}

let pCoins = coins[pUser].coins;
let sCoins = coins[message.author.id].coins;

if(sCoins < args[1]) {
return message.channel.send("Tu n' as pas assez de coins !");
}
if(args[1] < 0) {
	return message.channel.send(":warning: Tu ne peux pas donner un nombre negatif de coins !");
	}
	
	



		

coins[message.author.id] = {
	coins: sCoins - parseInt(args[1])
};

coins[pUser] = {
	coins: pCoins + parseInt(args[1])
};

message.channel.send(`${message.author} a donné à ${pUser} ${args[1]} coins.`);

fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
	if(err) cosole.log(err)
});
}





if (message.content.startsWith(prefix + "slots")) {
	let uGold = gold[message.author.id].gold
	if(!gold[message.author.id])
		gold[message.author.id] = {
		gold: 0
		};
		
		
if (uGold < 5) {
return message.channel.send("Tu n' as pas assez de gold !")

}
	let reel = [
		':custard:',
		':candy:',
		':cake:',
		':icecream:',
		':lollipop:',
		':chocolate_bar:',
	    ':moneybag:',
		':shaved_ice:',
		':doughnut:'
		
	  ];
	
	  let reels = [];
	  for (let i = 0; i < 3; i++) {
		reels.push(reel[Math.floor(Math.random() * reel.length)]);
	  }
	
	  let result = 'Désolé mais tu as perdu !  ';
	  if (reels[0] === reels[1] && reels[1] === reels[2]) {
		result = 'Bravo tu as Gagné 5 golds !';
		gold[message.author.id] = {
			gold: gold[message.author.id].gold + 5
			};
			fs.writeFile("./gold.json", JSON.stringify(gold), (err) => {
			if (err) console.log(err);
			});
	  }
	
	  message.channel.send({
		embed: {
		  color: 123456,
		  title: 'Machine a sous ',
		  description: reels.join(' \u05C0 '),
		  footer: {
			text: result
		  }
		}
	  }).catch(e => {
		Bastion.log.error(e);
	  });

}

if (message.content.startsWith(prefix + "boss list")){
	message.channel.send("Voici l interface de l' arène : \n Boss 1 (500pv) (j!boss 1) \n Boss 2 (1200pv) (j!boss 2)")
}
if (message.content.startsWith(prefix + "boss 1")){
	if(!pv[message.author.id])
	pv[message.author.id] = {
  pv: 0
	};
	(async function() {
		let upv = pv[message.author.id].pv
	 const mainMessage = await message.channel.send(` Bienvenue dans l' arène ! Veux tu te battre contre le boss 1 ? (500pv) ? Vous avez ${upv} :heart: \n ✅ Oui ! \n ❌ Non ! `);
	
	 await mainMessage.react("✅")
	  await mainMessage.react("❌")
		 
		
	const panier = mainMessage.createReactionCollector((reaction, user) => user.id === message.author.id);
	 
	panier.on('collect', async(reaction) => 
	{
	
	
	if (reaction.emoji.name === "❌") {
		

		mainMessage.delete(0);
message.channel.send("A bientot dans l' arène !")
	
		}
		if (reaction.emoji.name === "✅") {
		if (upv > 500){
			pv[message.author.id] = {
				pv: pv[message.author.id].pv - 500
				};
				fs.writeFile("./pv.json", JSON.stringify(pv), (err) => {
				if (err) console.log(err);
				});	
				coins[message.author.id] = {
					coins: coins[message.author.id].coins + 60
					};
					fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
					if (err) console.log(err);
					});	
					gold[message.author.id] = {
						gold: gold[message.author.id].gold + 35
						};
						fs.writeFile("./gold.json", JSON.stringify(gold), (err) => {
						if (err) console.log(err);
						});
			mainMessage.delete(0);
	message.channel.send(":crown: Tu viens de vaincre le boss de l' arène pour te récompenser voici **60coins et 35golds** !")
		
			}
			if (upv < 500){
				pv[message.author.id] = {
					pv: pv[message.author.id].pv - upv
					};
					fs.writeFile("./pv.json", JSON.stringify(pv), (err) => {
						if (err) console.log(err);
						});
						mainMessage.delete(0);
						message.channel.send(":crossed_swords: Aie tu viens de perde touts tes points de vies ! Reviens te battre quand tu auras assez de vie !")
			}


		}
	});
}());
	
}

if (message.content.startsWith(prefix + "boss 2")){
	if(!pv[message.author.id])
	pv[message.author.id] = {
  pv: 0
	};
	(async function() {
		let upv = pv[message.author.id].pv
	 const mainMessage = await message.channel.send(` Bienvenue dans l' arène ! Veux tu te battre contre le boss 2 ? (1200pv) ? Vous avez ${upv} :heart: \n ✅ Oui ! \n ❌ Non ! `);
	
	 await mainMessage.react("✅")
	  await mainMessage.react("❌")
		 
		
	const panier = mainMessage.createReactionCollector((reaction, user) => user.id === message.author.id);
	 
	panier.on('collect', async(reaction) => 
	{
	
	
	if (reaction.emoji.name === "❌") {
		

		mainMessage.delete(0);
message.channel.send("A bientot dans l' arène !")
	
		}
		if (reaction.emoji.name === "✅") {
		if (upv > 1200){
			pv[message.author.id] = {
				pv: pv[message.author.id].pv - 1200
				};
				fs.writeFile("./pv.json", JSON.stringify(pv), (err) => {
				if (err) console.log(err);
				});	
				coins[message.author.id] = {
					coins: coins[message.author.id].coins + 140
					};
					fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
					if (err) console.log(err);
					});	
					gold[message.author.id] = {
						gold: gold[message.author.id].gold + 90
						};
						fs.writeFile("./gold.json", JSON.stringify(gold), (err) => {
						if (err) console.log(err);
						});
			mainMessage.delete(0);
	message.channel.send(":crown: Tu viens de vaincre le boss de l' arène pour te récompenser voici **140coins et 90golds** !")
		
			}
			if (upv < 500){
				pv[message.author.id] = {
					pv: pv[message.author.id].pv - upv
					};
					fs.writeFile("./pv.json", JSON.stringify(pv), (err) => {
						if (err) console.log(err);
						});
						mainMessage.delete(0);
						message.channel.send(":crossed_swords: Aie tu viens de perde touts tes points de vies ! Reviens te battre quand tu auras assez de vie !")
			}


		}
	});
}());
	
}


							  
					  
					   
								

var msgc = message.content
if (msgc.startsWith(prefix + 'myrep')) {
	if(!cookie[message.author.id])
		cookie[message.author.id] = {
		cookie: 0
		};
		
	
  var test5 = cookie[message.author.id].cookie
  if (!cookie[message.author.id]) {
	return message.channel.send("Oh, c'est triste, mais il semble que vous n'avez pas encore de cookies");
  }
	message.channel.send("Vous avez " + test5 + " point(s) de réputation(s) !")
}else if (msgc.startsWith(prefix + "rep")) {
	if(!cookie[message.author.id])
	cookie[message.author.id] = {
	cookie: 0
	};
	var mentionned = message.mentions.users.first();
	if (!mentionned) 
	return message.channel.send("Erreur : j!rep <@mention> ");
	if ((cookie[message.author.id].ratelimit > Date.now()) && (cookie[message.author.id].ratelimit !== 0)) {
				 var now = new Date().getTime();
				 var distance = cookie[message.author.id].ratelimit - now;
				 var days = Math.floor(distance / (1000 * 60 * 60 * 24));
				 var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				 var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
				 var seconds = Math.floor((distance % (1000 * 60)) / 1000);
				 return message.channel.send(":x: Vous pourrez utilisez cette commande dans : " + hours + "h " + minutes + "m " + seconds + "s");
			 }
	if (!cookie[mentionned.id]) {
	   cookie[mentionned.id] = {
		  cookie: "1" 
	   }
	   cookie[message.author.id].ratelimit = Date.now() + 86400000
	   fs.writeFile("./cookie.json", JSON.stringify(cookie), (err) => { 
			 if (err) console.error(err) 
			 });
	   message.channel.send("Vous avez donné un point de réputation à **" + mentionned.username + "**");    
	}else {
		cookie[mentionned.id].cookie++; 
		cookie[message.author.id].ratelimit = Date.now() + 86400000 
		 fs.writeFile("./cookie.json", JSON.stringify(cookie), (err) => {
			  if (err) console.error(err) 
			  });
		message.channel.send("Vous avez donné un cookie à **" + mentionned.username + "**");       
	 }



 }









});




client.login('NDg1NDg1OTc3MDYyNjA0ODUx.Dm1YAQ.OnAjWWj4yXyBvdTZbqJNmQOsOYY')

