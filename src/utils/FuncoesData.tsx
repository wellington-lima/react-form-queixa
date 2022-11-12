export const dataPadraoBr = (data: string) => {

  const newDate = new Date(data);
  newDate.setDate(new Date(data).getDate() + 1);

  return newDate.toLocaleDateString();
}

export const dataPadraoUS = (data: string) => {
  let dataUS = data.split('/').reverse().join('-');
  return dataUS;
}