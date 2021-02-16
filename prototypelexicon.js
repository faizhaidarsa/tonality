var sj = `Demokrat menduga Presiden Joko Widodo (Jokowi) sedang menyiapkan putranya, Gibran Rakabuming Raka maju Pilgub DKI Jakarta 2024, di balik penghentian pembahasan RUU Pemilu.

DPP PDI Perjuangan (PDIP) menilai, pemikiran tersebut sangat pragmatis.

"Kok pola pikirnya sangat pragmatis dan dangkal ya," kata Ketua DPP PDIP Djarot Saiful Hidayat saat dihubungi Tribunnews.com, Kamis (11/2/2021).


"Bukankah kepentingan nasional yang harus lebih didahulukan kesehatan, pemulihan ekonomi rakyat," imbuhnya.

Menurut Djarot, dibutuhkan konsistensi dalam penerapan sebuah Undang-Undang.

Di mana dalam Undang-undang Nomor 10 Tahun 2016 mengatur penyelenggaraan Pilkada 2024.

"Konsistensi dalam menjalankan Undang-undang pilkada yang sudah disepakati di tahun 2024," ujarnya.

Baca juga: Demokrat Ngotot Pilkada 2022, Gerindra: Mungkin AHY Mau Maju di Pilgub DKI

Baca juga: Arief: Hanya Gibran yang Bisa Saingi Anies di Pilkada DKI Mendatang

Baca juga:  Viral Masjid Hanyut Sampai ke Laut, Alat Salat dan Pengeras Suara Ikut Terbawa

Terkait Pilkada 2024, Djarot menyatakan PDIP terus merapatkan barisan dan menyiapkan kader-kader terbaiknya.

"Tentang Pilkada di tahun 2024 tentunya partai ada mekanismenya tersendiri dan kita terus melalukan konsolidasi partai dan menyiapkan kader-kader pemimpin yang baik dan tetap teguh menjalankan Ideologi Pancasila," pungkas Djarot.

Demokrat menduga Presiden Joko Widodo (Jokowi) sedang menyiapkan putranya, Gibran Rakabuming Raka maju Pilgub DKI Jakarta 2024, di balik penghentian pembahasan RUU Pemilu.

DPP PDI Perjuangan (PDIP) menilai, pemikiran tersebut sangat pragmatis.

"Kok pola pikirnya sangat pragmatis dan dangkal ya," kata Ketua DPP PDIP Djarot Saiful Hidayat saat dihubungi Tribunnews.com, Kamis (11/2/2021).`;

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
        tokenBobot[1] = parseInt(lexicon[i].weight)
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


