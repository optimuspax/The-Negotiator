var Choice;
var Completion = 2;
console.log(Completion);
onEvent("dropdown1", "change", function( ) {
	console.log("Selected option: " + getText("dropdown1"));
});
onEvent("Continue", "click", function( ) {
	console.log("Continue clicked!");
	if (getText("dropdown1") == "Buyer") {
	  Choice = 1;
	  if (Choice == 1) {
	    console.log(Choice);
	    setScreen("buyerGame");
	  }
	}
	if (getText("dropdown1") == "Seller") {
	  Choice = 2;
	  if (Choice == 2) {
	    console.log(Choice);
	    setScreen("sellerGame");
	  }
	}
});
Buyer();
function Buyer() {
  onEvent("lvl1BG", "click", function( ) {
  	console.log("lvl1BG clicked!");
  	setScreen("buyerAP");
  	onEvent("F1", "click", function( ) {
  		console.log("F1 clicked!");
  		setScreen("buyerGame");
  		setProperty("lvl1BG", "background-color", "black");
  		onEvent("lvl1BG", "click", function( ) {
  			console.log("lvl1BG clicked!");
  			setScreen("buyerGame");
  		});
  		onEvent("lvl2BG", "click", function( ) {
  			console.log("lvl2BG clicked!");
  			setScreen("buyerBATNA");
  			onEvent("BGBATNAIN1", "change", function( ) {
  				if (getText("BGBATNAIN1") >= 15000 && (getText("BGBATNAIN1")) <= 18000) {
  				  console.log(getText("BGBATNAIN1"));
  				  showElement("BE1");
  				  showElement("F2");
  				}
  				onEvent("F2", "click", function( ) {
  					console.log("F2 clicked!");
  					setScreen("buyerGame");
  					setProperty("lvl2BG", "background-color", "black");
  					onEvent("lvl2BG", "click", function( ) {
  						console.log("lvl2BG clicked!");
  						setScreen("buyerGame");
  					});
  					onEvent("lvl3BG", "click", function( ) {
  						console.log("lvl3BG clicked!");
  						setScreen("buyerZOPA");
  						onEvent("BGZOPAIN1", "change", function( ) {
  							if (getText("BGZOPAIN1") >= 8000 && (getText("BGZOPAIN1")) <= 10000) {
  							  console.log(getText("BGWATNAIN1"));
  							  showElement("ZE1");
  							  showElement("F3");
  							}
  							onEvent("F3", "click", function( ) {
  								console.log("F3 clicked!");
  								setScreen("buyerGame");
  								setProperty("lvl3BG", "background-color", "black");
  								onEvent("lvl3BG", "click", function( ) {
  									console.log("lvl3BG clicked!");
  									setScreen("buyerGame");
  								});
  								onEvent("lvl4BG", "click", function( ) {
  									console.log("lvl4BG clicked!");
  									setScreen("buyerWATNA");
  									onEvent("BGWATNAIN1", "change", function( ) {
  										if (getText("BGWATNAIN1") >= 11000 && (getText("BGWATNAIN1")) <= 12000) {
  										  console.log(getText("BGWATNAIN1"));
  										  showElement("WE1");
  										  showElement("F4");
  										}
  										onEvent("F4", "click", function( ) {
  											console.log("F4 clicked!");
  											setScreen("buyerGame");
  											setProperty("lvl4BG", "background-color", "black");
  											onEvent("lvl4BG", "click", function( ) {
  												console.log("lvl4BG clicked!");
  												setScreen("buyerGame");
  											});
  											onEvent("lvl5BG", "click", function( ) {
  												console.log("lvl5BG clicked!");
  												setScreen("buyerWAP");
  												onEvent("F5", "click", function( ) {
  													console.log("F5 clicked!");
  													setScreen("buyerGame");
  													setProperty("lvl5BG", "background-color", "black");
  													showElement("B1");
  													onEvent("B1", "click", function( ) {
  														console.log("B1 clicked!");
  														setScreen("ChoicePage");
  														onEvent("Continue", "click", function( ) {
  															console.log("Continue clicked!");
  															if (getText("dropdown1") == "Buyer") {
  															  Choice = 1;
  															  if (Choice == 1) {
  															    console.log(Choice);
  															    setScreen("ChoicePage");
  															    Completion = Completion - 1;
  															    console.log(Completion);
  															  }
  															}
  														});
  													});
  													onEvent("lvl5BG", "click", function( ) {
  														console.log("lvl5BG clicked!");
  														setScreen("buyerGame");
  													});
  												});
  											});
  										});
  									});
  								});
  							});
  						});
  					});
  				});
  			});
  		});
  	});
  });
}
seller();
function seller() {
  onEvent("lvl1SG", "click", function( ) {
  	console.log("lvl1SG clicked!");
  	setScreen("sellerAP");
  	onEvent("F6", "click", function( ) {
  		console.log("F6 clicked!");
  		setScreen("sellerGame");
  		setProperty("lvl1SG", "background-color", "black");
  		onEvent("lvl1SG", "click", function( ) {
  			console.log("lvl1sG clicked!");
  			setScreen("sellerGame");
  		});
  		onEvent("lvl2SG", "click", function( ) {
  			console.log("lvl2SG clicked!");
  			setScreen("sellerBATNA");
  			onEvent("SGBATNAIN1", "change", function( ) {
  				if (getText("SGBATNAIN1") >= 15000 && (getText("SGBATNAIN1")) <= 20000) {
  				  console.log(getText("SGBATNAIN1"));
  				  showElement("BGBATNA2");
  				  showElement("BE2");
  				  showElement("F7");
  				}
  				onEvent("F7", "click", function( ) {
  					console.log("F7 clicked!");
  					setScreen("sellerGame");
  					setProperty("lvl2SG", "background-color", "black");
  					onEvent("lvl2SG", "click", function( ) {
  						console.log("lvl2SG clicked!");
  						setScreen("sellerGame");
  					});
  					onEvent("lvl3SG", "click", function( ) {
  						console.log("lvl3SG clicked!");
  						setScreen("sellerZOPA");
  						onEvent("SGZOPAIN1", "change", function( ) {
  							if (getText("SGZOPAIN1") >= 8000 && (getText("SGZOPAIN1")) <= 10000) {
  							  console.log(getText("SGZOPAIN1"));
  							  showElement("BGZOPA2");
  							  showElement("ZE2");
  							  showElement("F8");
  							}
  							onEvent("F8", "click", function( ) {
  								console.log("F8 clicked!");
  								setScreen("sellerGame");
  								setProperty("lvl3SG", "background-color", "black");
  								onEvent("lvl3SG", "click", function( ) {
  									console.log("lvl3SG clicked!");
  									setScreen("sellerGame");
  								});
  								onEvent("lvl4SG", "click", function( ) {
  									console.log("lvl4SG clicked!");
  									setScreen("sellerWATNA");
  									onEvent("SGWATNAIN1", "change", function( ) {
  										if (getText("SGWATNAIN1") >= 12000 && (getText("SGWATNAIN1")) <= 15000) {
  										  console.log(getText("SGWATNAIN1"));
  										  showElement("BGWATNA2");
  										  showElement("WE2");
  										  showElement("F9");
  										}
  										onEvent("F9", "click", function( ) {
  											console.log("F9 clicked!");
  											setScreen("sellerGame");
  											setProperty("lvl4SG", "background-color", "black");
  											onEvent("lvl4SG", "click", function( ) {
  												console.log("lvl4SG clicked!");
  												setScreen("sellerGame");
  											});
  											onEvent("lvl5SG", "click", function( ) {
  												console.log("lvl5SG clicked!");
  												setScreen("sellerWAP");
  												onEvent("F10", "click", function( ) {
  													console.log("F10 clicked!");
  													setScreen("sellerGame");
  													setProperty("lvl5SG", "background-color", "black");
  													showElement("B2");
  													onEvent("B2", "click", function( ) {
  														console.log("B2 clicked!");
  														setScreen("ChoicePage");
  														onEvent("Continue", "click", function( ) {
  															console.log("Continue clicked!");
  															if (getText("dropdown1") == "Seller") {
  															  Choice = 2;
  															  if (Choice == 2) {
  															    console.log(Choice);
  															    setScreen("ChoicePage");
  															    Completion = Completion - 1;
  															    console.log(Completion);
  															  }
  															}
  														});
  													});
  													onEvent("lvl5SG", "click", function( ) {
  														console.log("lvl5SG clicked!");
  														setScreen("sellerGame");
  													});
  												});
  											});
  										});
  									});
  								});
  							});
  						});
  					});
  				});
  			});
  		});
  	});
  });
}
endScreen();
function endScreen() {
  if (Completion==0) {
    showElement("GOB");
    onEvent("GOB", "click", function( ) {
    	console.log("GOB clicked!");
    	setScreen("endScreen");
    });
  }
}
