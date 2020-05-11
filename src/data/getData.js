import data from './data.json';

const getData = () => {
  return Promise.resolve(data)
};

export default getData;