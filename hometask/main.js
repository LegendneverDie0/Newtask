// 1. Random son yaratish (masalan, 1 dan 100 gacha)
let randomSon = Math.floor(Math.random() * 100) + 1;

// 2. Hisoblashlar
let kopaytma = randomSon * 2;
let bolinma = randomSon / 2;
let qoldiq = randomSon % 3; // 3 ga bo'lgandagi qoldig'ini olish (misol uchun)

// 3. Natijalarni alertda chiqarish
alert(
  "Random son: " + randomSon + "\n" +
  "2 ga ko'paytirilgani: " + kopaytma + "\n" +
  "2 ga bo'lingani: " + bolinma + "\n" +
  "3 ga bo'lgandagi qoldig'i: " + qoldiq
);
