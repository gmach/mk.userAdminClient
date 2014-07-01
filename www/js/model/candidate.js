function Candidate(name, contact_no, contact_email) {

    this.name = name;
    this.contact_no = contact_no;
    this.contact_email = contact_email;
}

var c1 = new Candidate('Bob', '1234', 'bob@abc.com');
var c2 = new Candidate('Sam', '567', 'sam@abc.com');
var c3 = new Candidate('Wendy', '890', 'wedny@abc.com');

var candidates = [c1, c2, c3];