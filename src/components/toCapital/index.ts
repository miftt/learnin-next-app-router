const toCapital = (text: string) => {
    if (typeof text !== 'string') {
      throw new Error('Input must be a string');
    }
  
    return text
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };
  
  export default toCapital;
  