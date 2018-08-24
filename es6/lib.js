// Export de módulos
export const alfandega = (nacional) => {
  if (nacional) console.log('Pode passar');
  else console.log('Fica preso em Curitiba');
};

// Export padrão
export default () => console.log('Este é o export padrão');
