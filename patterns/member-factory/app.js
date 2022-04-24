function MemberFactory() {
  this.createMember = function (name, type) {
    let member;

    if (type === 'simple') {
      member = new SimpleMembership(name);
    } else if (type === 'standard') {
      member = new StandardMembership(name);
    } else if (type === 'premium') {
      member = new PremiumMembership();
    }

    member.type = type;

    member.define = function () {
      console.log(
        `Member Name: ${this.name}, Member type: ${this.type}, Member cost: ${this.cost}`
      );
    };

    return member;
  };
}

function SimpleMembership(name) {
  this.name = name;
  this.cost = '$5';
}
function StandardMembership(name) {
  this.name = name;
  this.cost = '$15';
}
function PremiumMembership(name) {
  this.name = name;
  this.cost = '$30';
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('Ahmed', 'standard'));
members.push(factory.createMember('Ahmed', 'premium'));
members.push(factory.createMember('Ahmed', 'simple'));
members.push(factory.createMember('Ahmed', 'premium'));
members.push(factory.createMember('Ahmed', 'standard'));
console.log(members);

members.forEach((member) => member.define());
