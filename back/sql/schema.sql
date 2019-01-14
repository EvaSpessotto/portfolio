create table project(
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100),
  project_type VARCHAR(100),
  project_desc TEXT,
  start_date date,
  end_date date
);

create table image(
  name VARCHAR(128),
  path VARCHAR(250),
  project_id INTEGER NOT NULL
);

ALTER TABLE image ADD CONSTRAINT fk_project_id FOREIGN KEY (project_id) REFERENCES project(id);