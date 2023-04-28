const loc = [
  {
    location_key: [32, 22, 11],
    autoassign: 1,
  },
  {
    location_key: [41, 42],
    autoassign: 1,
  },
];

const bulkConfig = [
  {
    dataValues: {
      config_key: 100,
    },
  },
  {
    dataValues: {
      config_key: 200,
    },
  },
];

const result = loc
  .map((locEl, index) => {
    return locEl.location_key.map((locationKey) => {
      return {
        location_key: locationKey,
        config_key: bulkConfig[index].dataValues.config_key,
        autoassign: locEl.autoassign,
      };
    });
  })
  .reduce((arr, acc) => arr.concat(acc), []);
console.log(result);
