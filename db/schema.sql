DROP DATABASE IF EXISTS meet_up_groups;

CREATE DATABASE meet_up_groups;

\c meet_up_groups;

CREATE TABLE groups ( 
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    main_focus TEXT NOT NULL,
    date_formed INT,
    contact_email TEXT
    );

CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    virtual_meeting_link TEXT NOT NULL,
    study_group_id FOREIGN KEY,
    start_time INT,
    end_time INT,
    number_of_attendees INT,
)

