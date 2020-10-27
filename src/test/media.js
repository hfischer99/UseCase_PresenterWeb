
function notaMedia(prova_1_B1, prova_2_B1, prova_1_B2, prova_2_B2) {
  var provaSoma = 0;
  provaSoma = prova_1_B1 + prova_2_B1 + prova_1_B2 + prova_2_B2;

  var provaMedia = 0;

  provaMedia = provaSoma/2;

  return provaMedia;
  
}

module.exports = notaMedia;


// function aprovacao(media) {
//   if(media > 7){
//     return true
//   }else{
//     return false
//   }

// }
// module.exports = aprovacao;