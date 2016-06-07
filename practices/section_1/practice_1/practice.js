function collect_same_elements(collection_a, collection_b) {
var k=0;
var arry=new Array();
  for (var i = 0;i<collection_a.length;i++) {
  	for (var j=0;j<collection_b.length;j++) {
  	   if(collection_a[i]==collection_b[j])
  	   {
          arry[k]=collection_a[i];
          k++;
          break;
  	   }
  	}
  }
  return arry;


}

module.exports = collect_same_elements;
