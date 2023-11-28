const throwError = (msg) => {
  const PREFIX = '[ERROR]';

  throw new Error(`${PREFIX} ${msg}`);
};

export default throwError;
