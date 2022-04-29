const events = [
    {
        name: 'string',
        virtual_meeting_link: 'a url(can be a dummy link)',
        study_group: 'foreign key(required)',
        start_time: 'date time',
        end_time: 'date time',
        number_of_attendees: 'integer',
        cancelled: 'boolean(default false)',

    }
]


module.exports = events;