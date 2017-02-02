describe("sampleTest", function() {
  var itemsWithoutPassword;
  var itemsWithPassword;

  beforeEach(function() {
    itemsWithoutPassword = ['asdfa', 'ytuyter', 'mvffdhfkd'];
    itemsWithPassword = ['asdfa', 'ytuyter', 'Password'];
  });

  it("should be able to detect no password", function() {
    var result = detectStringPassword(itemsWithoutPassword);
    expect(result).not.toBe(true);
  });

  it("should be able to detect password", function() {
    var result = detectStringPassword(itemsWithPassword);
    expect(result).toBe(true);
  });
});
