var AccessModifierPerson = /** @class */ (function () {
    function AccessModifierPerson(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(AccessModifierPerson.prototype, "FirstName", {
        get: function () {
            return this._firstName;
        },
        set: function (param) {
            this._firstName = param;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccessModifierPerson.prototype, "LastName", {
        get: function () {
            return this._lastName;
        },
        set: function (param) {
            this._lastName = param;
        },
        enumerable: false,
        configurable: true
    });
    AccessModifierPerson.prototype.getFullName = function () {
        return this.FirstName + ' ' + this.LastName;
    };
    AccessModifierPerson.Declaration = function () {
        console.log('I will bind to the rules');
    };
    return AccessModifierPerson;
}());
var Joseph = new AccessModifierPerson('Joseph', 'Abhilashh');
console.log(Joseph.getFullName());
