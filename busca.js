function separa(){
var str = tweet.text;
var res = str.split(" ");
document.getElementById(tweet.id).innerHTML = res;
}
var texto = "idiota";
function testcomp()
{for (int i = 0; i < separa.length; i++){
    if (nomes[i].contains(texto)) {
        posicao = i;
        break;        
    }
}
if (posicao > -1 ){
    System.out.println(posicao);
} else {
    System.out.println("Não foi encontrado nenhum nome que contenha: " + texto);
}
}

separa();
testcomp();


//1----------------------------------------------
//RODANDO O COMANDO DE AGREGAÃ‡ÃƒO
// var a = db.runCommand(
//    { aggregate: "articles",
//      pipeline: [
//                  { $project: { tags: 1 } },
//                  { $unwind: "$tags" },
//                  { $group: {
//                              _id: "$tags",
//                              count: { $sum : 1 }
//                            }
//                  }
//                ]
//    }
// );

//2------------------------------------------------------
// map = function() {
//     var array = this.tweet.text.split(' ');
//     emit(this.tweet.text, array);
// }

//3---------------------------------------------------------
// reduce = function(key, values) {
//     return values;
// }

// result = db.runCommand({
//         "mapreduce" : "original", 
//         "map" : map,
//         "reduce" : reduce,
//         "out" : "resultado"
// });



//ITERANDO SOBRE O RESULTADO E SALVANDO CADA ITEM
// a.result.forEach(function(data){
//     db.tags.insert(data);
//     printjson(data);
// });

//USANDO O MAPREDUCE

//INSERINDO DADOS PRO TESTE
// db.orders.insert([
//     {
//          cust_id: "abc123",
//          ord_date: new Date("Oct 04, 2012"),
//          status: 'A',
//          price: 25,
//          items: [ { sku: "mmm", qty: 5, price: 2.5 },
//                   { sku: "nnn", qty: 5, price: 2.5 } ]
//     },
//     {
//          cust_id: "zxc789",
//          ord_date: new Date("Oct 05, 2013"),
//          status: 'A',
//          price: 50,
//          items: [ { sku: "mmm", qty: 10, price: 2.5 },
//                   { sku: "nnn", qty: 10, price: 2.5 } ]
//     }
// ]);

//CRIANDO FUNCAO DE MAP 01
// var mapFunction1 = function() {
//    emit(this.cust_id, this.price);
// };


//CRIANDO FUNCAO DE REDUCE 01
// var reduceFunction1 = function(keyCustId, valuesPrices) {
//     return Array.sum(valuesPrices);
// };

//EXECUTANDO O MAPREDUCE 01, CRIARÃ UMA COLECAO NOVA
// db.orders.mapReduce(
//    mapFunction1,
//    reduceFunction1,
//    { out: "map_reduce_example" }
// );


//CRIANDO FUNCAO DE MAP 02
// var mapFunction2 = function() {
//                        for (var idx = 0; idx < this.items.length; idx++) {
//                            var key = this.items[idx].sku;
//                            var value = {
//                                          count: 1,
//                                          qty: this.items[idx].qty
//                                        };
//                            emit(key, value);
//                        }
//                     };


//CRIANDO FUNCAO DE REDUCE 02
// var reduceFunction2 = function(keySKU, countObjVals) {
//                      reducedVal = { count: 0, qty: 0 };

//                      for (var idx = 0; idx < countObjVals.length; idx++) {
//                          reducedVal.count += countObjVals[idx].count;
//                          reducedVal.qty += countObjVals[idx].qty;
//                      }

//                      return reducedVal;
//                   };

//CRIANDO FUNCAO DE FINALIZE  02
// var finalizeFunction2 = function (key, reducedVal) {

//                        reducedVal.avg = reducedVal.qty/reducedVal.count;

//                        return reducedVal;

//                     };

//EXECUTANDO O EXEMPLO 02 DE MAPREDUCE
// db.orders.mapReduce( mapFunction2,
//                      reduceFunction2,
//                      {
//                        out: { merge: "map_reduce_example" },
//                        query: { ord_date:
//                                   { $gt: new Date('01/01/2012') }
//                               },
//                        finalize: finalizeFunction2
//                      }
//                    )  ;                  


//EXEMPLO QUEBRANDO A STRING
// db.orders.insert([
//     {
//          cust_id: "abc123",
//          ord_date: new Date("Oct 04, 2012"),
//          status: 'A',
//          price: 25,,
//          descricao: "Apple iPhone 6s 128gb prata",
//          items: [ { sku: "mmm", qty: 5, price: 2.5 },
//                   { sku: "nnn", qty: 5, price: 2.5 } ]
//     },
//     {
//          cust_id: "zxc789",
//          ord_date: new Date("Oct 05, 2013"),
//          status: 'A',
//          price: 50,
//          descricao: "Motorola MotoX 64gb preto",
//          items: [ { sku: "mmm", qty: 10, price: 2.5 },
//                   { sku: "nnn", qty: 10, price: 2.5 } ]
//     }
// ]);

// var mapFunction3 = function() {
//                        emit(this.cust_id, this.descricao);
//                    };

// var reduceFunction3 = function(keyCustId, descricoes) {
//     var wordsArray = [];
//                         descricoes.forEach(function(descricao){
//                             wordsArray.push(descricao.split(" "));
//                         });

//                           return wordsArray; nao terminei
//                       };



