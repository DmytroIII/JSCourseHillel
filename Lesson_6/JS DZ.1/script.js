
function delSymbol(text,letters) {
   let textArray = text.split("");
   let result = [];
   for (let e of textArray) {
      if(!letters.includes(e)) {
         result.push(e);
      }
   }
   return result.join('');

}
   