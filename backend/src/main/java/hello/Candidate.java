package hello;

public class Candidate {
    String name;
    String contact_no;
    String contact_email;

    public Candidate(String name, String contact_no, String contact_email) {
        this.name = name;
        this.contact_no = contact_no;
        this.contact_email = contact_email;
    }

    public String getName() {
        return name;
    }

    public String getContact_no() {
        return contact_no;
    }

    public String getContact_email() {
        return contact_email;
    }
}