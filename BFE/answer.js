/* ©2025 Boulder Guitar Society */
/**********************************************************/
/*                        answers.js                      */
/*                                                        */
/* Supports hiding and display of answer text blocks      */
/*                                                        */
/**********************************************************/

   let answerOn = 0;   // 0 when hidden, 1 when displayed
   function toggleAnswer() {
      let answerBlock = document.getElementById("answer");
      if (!answerBlock) {
         console.log("can't find answer element");
      }
      if (answerOn == 0) {
         // off, so turn it on
         console.log("make answer visible");
         answerBlock.style.visibility = 'visible';
         answerOn = 1;
      } else {
         // on, so turn it off
         console.log("make answer hidden");
         answerBlock.style.visibility = 'hidden';
         answerOn = 0;
      }
   }
