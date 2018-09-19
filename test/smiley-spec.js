describe("smiley", function() {
  it("will append :) to string", function() {
    var someWords = "Hello World";

    expect(smiley(someWords)).toEqual("Hello World :)");
  });
});