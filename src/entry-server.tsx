const cryptoDescriptor = Object.getOwnPropertyDescriptor(globalThis, "crypto");

if (cryptoDescriptor?.get && !cryptoDescriptor.set && cryptoDescriptor.configurable) {
  Object.defineProperty(globalThis, "crypto", {
    configurable: true,
    enumerable: cryptoDescriptor.enumerable,
    value: cryptoDescriptor.get.call(globalThis),
    writable: true,
  });
}

const { createHandler, renderAsync, StartServer } = await import(
  "solid-start/entry-server"
);

export default createHandler(
  renderAsync((event) => <StartServer event={event} />)
);
