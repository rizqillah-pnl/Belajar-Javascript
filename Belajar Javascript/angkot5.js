var jmlAngkot = 10;
var angkotBeroperasi = 5;
var angkot = 1;

for (angkot; angkot <= jmlAngkot; angkot++) {
	
	if(angkot === 7 || angkot === 9 || angkot === 4 ){
		console.log('Angkot No. ' + angkot +' Lembur.');	
	}else if (angkot <= angkotBeroperasi) {
		console.log('Angkot No. ' + angkot +' Beroperasi.');	
	} else {
		console.log('Angkot No. ' + angkot +' Tidak Beroperasi.');	
	}
}