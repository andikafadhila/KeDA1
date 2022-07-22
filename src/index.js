//1. Buatlah fungsi dengan parameter berapa banyak angka yg akan ditampilkan secara looping, dimana jika angka tersebut habis dibagi 3 cetak "fish" jika habis dibagi 5 cetak "bash" dan jika habis dibagi 15 cetak "fish bash", cetak cukup salah satu dari kondisi tersebut, cetak menggunakan console log atau sejenisnya.

//2. Buatlah fungsi dengan input array integer untuk mengurutkan angka dari kecil kebesar dan besar kekecil dengan manual tanpa fungsi bawaan javascript,

//3. Buatlah fungsi dengan input string jika string tersebut dibalik dan tetap sama dengan string yang diinputkan maka return true jika tidak return false

// 1. FishBash
const FishBash = (num) => {
  for (let i = 1; i < num + 1; i++) {
    if (i % 15 == 0) console.log("Fish Bash");
    else if (i % 5 == 0) console.log("Bash");
    else if (i % 3 == 0) console.log("Fish");
    else console.log(i);
  }
};
// FishBash(15);

// 2. sort array of int
const sort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

// 3. Palindrom
const isPalindrome = (str) => {
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

module.exports = {
  FishBash,
  sort,
  isPalindrome,
};
