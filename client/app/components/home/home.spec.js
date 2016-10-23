import HomeModule from "./home";
import Authentication from "../../common/authentication/authentication";

const { module } = angular.mock;

describe("Home", () => {
  let $rootScope, $componentController;

  beforeEach(module(Authentication)); //to load hookProvider
  beforeEach(module(HomeModule));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get("$rootScope");
    $componentController = $injector.get("$componentController");
  }));

  describe("Module", () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe("Controller", () => {
    // controller specs
    let controller;
    beforeEach(() => {
      controller = $componentController("home", {
        $scope: $rootScope.$new()
      });
    });

    it("has a name property", () => { // erase if removing this.name from the controller
      expect(controller).to.have.property("name");
    });
  });

  describe("View", () => {
    // view layer specs.
  });
});