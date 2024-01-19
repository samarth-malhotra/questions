// given an object and dot seperated properties return the value of property

const someDataObject = {
  places: {
    earthKingdom: {
      capital: "Ba Sing Se",
    },
    fireNation: {
      capital: "Capital City",
    },
    waterTribe: {
      capital: "North Pole",
    },
  },
};

const getValueHelper = (o, ar, out) => {
  if (Array.length === 0) return out;
  if (o.hasOwnProperty(ar[0])) {
    if (o[ar[0]] instanceof Object) {
      out = getValueHelper(o[ar[0]], ar.slice(1));
    } else {
      out = o[ar[0]];
    }
  }
  return out;
};

const getValue = (o, p) => {
  return getValueHelper(o, p.split("."));
};

console.log(getValue(someDataObject, "places.waterTribe.capital"));

// given an array of number, least difference consecutive pair print

const ar = [1, 4, 7, 3, 9, 10, 20, 21];
const sorted = ar.sort((a, b) => a - b);

let ob = {};

for (let i = 0; i < sorted.length - 1; i++) {
  if (ob[sorted[i + 1] - sorted[i]]) {
    ob[sorted[i + 1] - sorted[i]].push(sorted[i] + " " + sorted[i + 1]);
  } else {
    ob[sorted[i + 1] - sorted[i]] = [sorted[i] + " " + sorted[i + 1]];
  }
}

console.log(ob[Object.keys(ob).sort((a, b) => a - b)[0]].join("\n"));
