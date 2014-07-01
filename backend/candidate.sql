CREATE TABLE IF NOT EXISTS candidate (
  candidate_id int(11) NOT NULL AUTO_INCREMENT,
  cust_name varchar(45) DEFAULT NULL,
  contact_no varchar(45) DEFAULT NULL,
  contact_email varchar(45) DEFAULT NULL,
  PRIMARY KEY (candidate_id)
) ENGINE=InnoDBcandidate