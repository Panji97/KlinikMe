const express = require('express')
const app = express()

const himpunan = [83, 1, 78, 26, 67, 54, 49, 7, 36, 99, 26, 19, 15, 7, 21, 39, 7, 2, 8]

// 1) Endpoint untuk menghitung jumlah anggota Himpunan Bilangan Asli
app.get('/jumlahAnggota', (req, res) => {
  let jumlah = 0
  for (let angka of himpunan) {
    jumlah += angka
  }
  res.json({ jumlahAnggota: jumlah })
})

// 2) Endpoint untuk menghasilkan anggota terkecil dari Himpunan Bilangan Asli
app.get('/anggotaTerkecil', (req, res) => {
  let terkecil = himpunan[0]
  for (let angka of himpunan) {
    if (angka < terkecil) {
      terkecil = angka
    }
  }
  res.json({ anggotaTerkecil: terkecil })
})

// 3) Endpoint untuk menghasilkan anggota terbesar dari Himpunan Bilangan Asli
app.get('/anggotaTerbesar', (req, res) => {
  let terbesar = himpunan[0]
  for (let angka of himpunan) {
    if (angka > terbesar) {
      terbesar = angka
    }
  }
  res.json({ anggotaTerbesar: terbesar })
})

// 4) Endpoint untuk mencari & menghasilkan anggota dengan nilai angka sama dan lebih dari satu
app.get('/anggotaDuplikat', (req, res) => {
  let duplikat = []
  for (let i = 0; i < himpunan.length; i++) {
    for (let j = i + 1; j < himpunan.length; j++) {
      if (himpunan[i] === himpunan[j] && !duplikat.includes(himpunan[i])) {
        duplikat.push(himpunan[i])
      }
    }
  }
  res.json({ anggotaDuplikat: duplikat })
})

// 5) Endpoint untuk menentukan urutan anggota dengan nilai sama dan lebih dari satu
app.get('/urutanDuplikat', (req, res) => {
  let urutan = 0
  let sortedHimpunan = [...himpunan].sort((a, b) => a - b)
  for (let i = 1; i < sortedHimpunan.length; i++) {
    if (sortedHimpunan[i] === sortedHimpunan[i - 1]) {
      urutan++
    } else {
      break
    }
  }
  res.json({ urutanDuplikat: urutan })
})

// 6) Endpoint untuk menghitung jumlah anggota bilangan ganjil dan genap
app.get('/jumlahGanjilGenap', (req, res) => {
  let jumlahGanjil = 0
  let jumlahGenap = 0
  for (let angka of himpunan) {
    if (angka % 2 === 0) {
      jumlahGenap++
    } else {
      jumlahGanjil++
    }
  }
  res.json({ jumlahGanjil, jumlahGenap })
})

// 7) Endpoint untuk mengelompokkan dan menampilkan anggota dalam kelompok bilangan ganjil dan genap
app.get('/kelompokGanjilGenap', (req, res) => {
  let ganjil = []
  let genap = []
  for (let angka of himpunan) {
    if (angka % 2 === 0) {
      genap.push(angka)
    } else {
      ganjil.push(angka)
    }
  }
  res.json({ kelompokGanjil: ganjil, kelompokGenap: genap })
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
