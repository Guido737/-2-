contract SimpleNameRegistry {
  mapping (bytes64 => address) public names;

  function SimpleNameRegistry() {
    names["donate"] = msg.sender;
  }

  function register(bytes64 name, address addr) {
    if (names[name] == 0) {
      names[name] = addr;
    }
  }
}
