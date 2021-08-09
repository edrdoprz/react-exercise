export const VOICEMAIL = {
  created_at: "2020-04-09T01:50:06.951221Z",
  id: "call-1",
  occurred_at: "2019-10-03T15:00:57.089927Z",
  dynamic_data: {
    user_name: "Sean Jones",
    voicemail_duration: 118,
  },
  type: "voicemail",
};
export const SUCCESS = {
  created_at: "2021-04-07T15:00:57.089927Z",
  id: "success-1",
  occurred_at: "2021-04-07T15:00:57.089927Z",
  dynamic_data: {
    user_name: "Sean Jones",
  },
  type: "success",
};
export const SENT_EMAIL = {
  created_at: "2020-10-28T13:19:45.637830Z",
  id: "sent_email-1",
  occurred_at: "2020-10-28T13:19:45.562226Z",
  dynamic_data: {
    counts: {
      clicks: 0,
      replies: 1,
      views: 20,
    },
    user_name: "Sean Jones",
  },
  static_data: {
    status: "sent",
    subject: "Modern Sales in SalesLoft",
  },
  type: "sent_email",
};
export const CALL = {
  created_at: "2020-04-11T23:09:18.196574Z",
  id: "call-2",
  occurred_at: "2019-10-03T15:00:56.523049Z",
  dynamic_data: {
    user_name: "Sean Jones",
    phone_number: "+12345678910",
  },
  static_data: {
    note_content:
      "LD off - office \n\nremembers my emails, says he's overseeing a team of 10 'inside sales specialist'....they're somewhat account managers. Conversation was short, so I didn't do much discovery, but he is open to seeing SL",
    note_id: 1,
    recording_urls: ["https://recordings.salesloft.com"],
    sentiment: "Discovery Call",
  },
  type: "call",
};
export const EMAIL_REPLY = {
  created_at: "2020-10-28T13:24:40.330852Z",
  id: "email_reply-1",
  occurred_at: "2020-10-28T13:24:31.000000Z",
  dynamic_data: {
    counts: {
      clicks: 0,
      replies: 1,
      views: 20,
    },
    user_name: "Sean Jones",
  },
  static_data: {
    body: "Hi Sean, A quick question for clarity - pricing includes free",
    email_reply_id: 2,
    headers: {
      to: ["s.jones@fakeemail.co"],
      cc: ["fake_email@fakeaddress.com"],
    },
    in_reply_to_id: 1,
    in_reply_to_subject: "Pricing",
    sender: "fake@fake.com",
  },
  type: "email_reply",
};
export const ADDED_TO_CADENCE = {
  created_at: "2020-04-05T07:37:24.043963Z",
  id: "added_to_cadence-1008718400",
  occurred_at: "2019-10-03T15:00:18.871103Z",
  dynamic_data: {
    cadence_name: "Opportunity | Active Opps",
    user_name: "Sean Jones",
  },
  static_data: {
    cadence_id: 123,
    instigator: {
      action_caller_id: 1,
      action_caller_name: "Sean Jones",
    },
  },
  type: "added_to_cadence",
};
export const ACTIVITIES = [
  VOICEMAIL,
  SUCCESS,
  SENT_EMAIL,
  CALL,
  EMAIL_REPLY,
  ADDED_TO_CADENCE,
];
