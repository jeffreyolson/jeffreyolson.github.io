/* ©2026 J. J. Olson */
/***********************************************************/
/*                        sample.js                        */
/*                                                         */
/* Supports choice of random sample BFE/DFE/CFE exercises  */
/*                                                         */
/***********************************************************/

   // global data
   // a variety of phrases for part of the button text
   let phrases = [ "See another", "And another", "Yet another", "See a new",
       "Get one more", "Wow, here's another", "You'll like this", "Sightread this" ]
   // next phrase IDs to show from phrases[]
   let phidBFE = 0;
   let phidDFE = 0;
   let phidCFE = 0;
   // next exercise index to show from exercise lists
   let nextBFE = 0;
   let nextDFE = 0;
   let nextCFE = 0;
   // lists of selected exercise numbers for random display
   // from BFE 2025/09/15
   let listBFE = [1,2,3,10,14,16,21,23,26,31,32,33,37,39,41,44,47,
      50,54,59,61,65,66,67,73,74,79,80,83,84,86,118];
   // from DFE 2024/04/02 
   let listDFE = [2,12,15,27,36,42,48,76,77,159,175,178,196,204,225,228,246,261,269,
      279,285,304,305,315,353,379,738,755,765,766,767,768,773,779,797,831,834,888,904];
   // from CFE 2024/04/02 
   let listCFE = [12,28,30,31,75,89,110,124,171,192,195,203,208,241,244,246,249,252,
      261,265,276,292,302,483,487,523,525,574,591,641,663,677,721,763,775,776,781,
      194,275,284,561,594,605,698,708,745];

   // shuffle all lists and set hrefs for initial samples
   async function initSamples() {
      // testExLinks();
      shuffleBFE();
      shuffleDFE();
      shuffleCFE();
      document.getElementById("bfe").addEventListener('click', function(event) {
         setBFE();
      });
      document.getElementById("dfe").addEventListener('click', function(event) {
         setDFE();
      });
      document.getElementById("cfe").addEventListener('click', function(event) {
         setCFE();
      });
   }

   // do a Fisher-Yates shuffle on named exercise list
   function shuffleBFE() {
      for (let i = listBFE.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
         [listBFE[i], listBFE[j]] = [listBFE[j], listBFE[i]];
      }
   }
   function shuffleDFE() {
      for (let i = listDFE.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
         [listDFE[i], listDFE[j]] = [listDFE[j], listDFE[i]];
      }
   }
   function shuffleCFE() {
      for (let i = listCFE.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
         [listCFE[i], listCFE[j]] = [listCFE[j], listCFE[i]];
      }
   }

   // get next item from named exercise list
   function getBFE() {
      let bnxt = nextBFE;
      nextBFE++;
      if (nextBFE >= listBFE.length) { nextBFE = 0; }
      console.log("got listBFE[" + bnxt + "]\n");
      return listBFE[bnxt];
   }
   function getDFE() {
      let bnxt = nextDFE;
      nextDFE++;
      if (nextDFE >= listDFE.length) { nextDFE = 0; }
      console.log("got listDFE[" + bnxt + "]\n");
      return listDFE[bnxt];
   }
   function getCFE() {
      let bnxt = nextCFE;
      nextCFE++;
      if (nextCFE >= listCFE.length) { nextCFE = 0; }
      console.log("got listCFE[" + bnxt + "]\n");
      return listCFE[bnxt];
   }

   // get next phrase from phrases[]
   function phBFE() {
      let bph = phidBFE;
      if (phidBFE < phrases.length - 1) { phidBFE++; }
      return phrases[bph];
   }
   function phDFE() {
      let dph = phidDFE;
      if (phidDFE < phrases.length - 1) { phidDFE++; }
      return phrases[dph];
   }
   function phCFE() {
      let cph = phidCFE;
      if (phidCFE < phrases.length - 1) { phidCFE++; }
      return phrases[cph];
   }

   // set next exercise, re-shuffling if at end
   function setBFE() {
      if (nextBFE >= listBFE.length - 1) { 
         nextBFE = 0;
         shuffleBFE();
         console.log("auto shuffleBFE()\n");
      }
      let exBFE = getBFE();
      window.location.href = "BFE/ex/no" + exBFE + ".html";
      // window.open("BFE/ex/no" + exBFE + ".html", "_blank");
      document.getElementById("bfeph").innerHTML = phBFE();
   }
   function setDFE() {
      if (nextDFE >= listDFE.length - 1) { 
         nextDFE = 0;
         shuffleDFE();
         console.log("auto shuffleDFE()\n");
      }
      let exDFE = getDFE();
      window.location.href = "DFE/ex/no" + exDFE + ".html";
      // window.open("DFE/ex/no" + exDFE + ".html", "_blank");
      document.getElementById("dfeph").innerHTML = phDFE();
   }
   function setCFE() {
      if (nextCFE >= listCFE.length - 1) { 
         nextCFE = 0;
         shuffleCFE();
         console.log("auto shuffleCFE()\n");
      }
      let exCFE = getCFE();
      window.location.href = "CFE/ex/no" + exCFE + ".html";
      // window.open("CFE/ex/no" + exCFE + ".html", "_blank");
      document.getElementById("cfeph").innerHTML = phCFE();
   }

   // provide list of exercise links for testing
   function testExLinks() {
      let hrf = "";
      let tstBFE = "";
      listBFE.forEach(ex => {
         hrf = "BFE/ex/no" + ex + ".html";
         tstBFE += "<a href=\"" + hrf + "\">" + ex + "</a>, ";
      });
      document.getElementById("bfetst").innerHTML = tstBFE;
      let tstDFE = "";
      listDFE.forEach(ex => {
         hrf = "DFE/ex/no" + ex + ".html";
         tstDFE += "<a href=\"" + hrf + "\">" + ex + "</a>, ";
      });
      document.getElementById("dfetst").innerHTML = tstDFE;
      let tstCFE = "";
      listCFE.forEach(ex => {
         hrf = "CFE/ex/no" + ex + ".html";
         tstCFE += "<a href=\"" + hrf + "\">" + ex + "</a>, ";
      });
      document.getElementById("cfetst").innerHTML = tstCFE;
   }

