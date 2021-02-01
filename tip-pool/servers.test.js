describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = "Alice";
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should add a server', function () {
    //submitServerInfo();
    console.log(allServers.length);
    expect(allServers.length > 0).toBe(true);
  });

  afterEach(function() {
    // teardown logic
    allServers = {};
    servverID = 0;
    serverNameInput.value = '';
  });
});
