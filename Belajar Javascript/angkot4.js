var jmlAngkot = 10;
var angkotBeroperasi = 5;
var angkot = 1;

for (angkot; angkot <= jmlAngkot; angkot++) {
	
	if (angkot <= angkotBeroperasi) {
		console.log('Angkot No. ' + angkot +' Beroperasi.');	
	} else if(angkot === 7 || angkot === 9 ){
		console.log('Angkot No. ' + angkot +' Lembur.');	
	} else {
		console.log('Angkot No. ' + angkot +' Tidak Beroperasi.');	
	}
}