const getAlphabet = () => ({
  consonants: "BCDFGHJKLMNPQRSTVWXYZ",
  vowels: "AEIOU",
  keys: ["consonants", "vowels"],
  refresh: function (type, index) {
    const target = this[this.keys[type % 2]];
    this[this.keys[type % 2]] +=
      target.slice(0, index) + target.slice(index + 1, target.length);
  },
  getChar: function (type) {
    const target = this[this.keys[type % 2]];
    const index = Math.floor(Math.random() * target.length);
    this.refresh(type, index);
    this.purge(type);
    return target.charAt(index);
  },
  addChar: function (char) {
    for (const key of this.keys)
      if (this[key].includes(char)) this[key] += char;
  },
  customize: function (word, weight) {
    word = word.toUpperCase();
    for (let j = 0; j < weight; j++)
      for (let i = 0; i < word.length; i++) this.addChar(word.charAt(i));
  },
  purge: function (type) {
    const target = this[this.keys[type % 2]];
    let temp = "";
    for (let i = 0; i < (target.length / 3) * 2 + 1; i++)
      temp += target.charAt(Math.floor(Math.random() * target.length));
    this[this.keys[type % 2]] = temp;
  },
});

const generateName = ({ length, customWord = "", weight = 1 }) => {
  const alphabet = getAlphabet();
  alphabet.customize(customWord, weight);

  let name = "";
  let type = Math.round(Math.random());

  for (let i = 0; i < length; i++) name += alphabet.getChar(type++);

  return name;
};

module.exports = generateName;
