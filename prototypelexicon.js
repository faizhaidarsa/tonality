
//Menghilangkan tanda baca spasi
function hapusKarakter(kalimat){
  var noline = kalimat.replace(/(\r\n|\n|\r)/gm,"")
  return noline.replace(/[^\w\s]/gi, '') 
}

//Memecah token
function tokenisasi(kalimat){
  return kalimat.split(" ")
}

function removeEmpty(listToken){
  return listToken.filter(item=>{
    if(item!==""){
      return item
    }
  })
}

//Menghitung bobot artikel
function hitungBobot(listToken){
  var hasil = listToken.map((s)=>{
    var tokenBobot = [s,0]
    for (i = 0;i<lexicon.length;i++){
      if(s.toLowerCase()==lexicon[i].word.toLowerCase()){
        tokenBobot[1] += parseInt(lexicon[i].weight)
      }
    }
    return tokenBobot
})
  return hasil
}

//hitung bobot akhir
function bobotFinal(listTokenBobot){
  var bobotfinal = 0;
  listTokenBobot.map(item=>{
    bobotfinal+=item[1]
  })
  return bobotfinal
}


//Mengklasifikasikan
function klasifikasi(bobotfinal){
  var klasifikasi = ""
  if(bobotfinal>0){
    klasifikasi="Positif"
  }else if(bobotfinal<0){
    klasifikasi="Negatif"
  }else{
    klasifikasi="Netral"
  }
  return klasifikasi
}


//Hasil
function hasilAkhir(bobotfinal,klasifikasi){
  console.log("Bobot Final: "+bobotfinal);
  console.log("Klasifikasi: "+klasifikasi);
}


