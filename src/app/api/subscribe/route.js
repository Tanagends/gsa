import axios from 'axios';

export async function POST(req, res) {
  const { email, name } = await req.json();

  if (!email || !name) {
    console.error('Email or Name missing');
    return new Response(JSON.stringify({ error: 'Email and Name are required' }), { status: 400 });
  }else{
    console.log({email:email, name:name})
  }

  const API_KEY = process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY;
  const AUDIENCE_ID = process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID;

  if (!API_KEY || !AUDIENCE_ID) {
    console.error('Mailchimp API key or Audience ID missing');
    return new Response(JSON.stringify({ error: 'Mailchimp API key or Audience ID missing' }), { status: 500 });
  }

  const DATACENTER = API_KEY.split('-')[1];
  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

  const data = {
    email_address: email,
    status: 'subscribed',
    merge_fields: {
      FNAME: name,
    },
  };

  const headers = {
    Authorization: `apikey ${API_KEY}`,
    'Content-Type': 'application/json',
  };

  try {
    const response = await axios.post(url, data, { headers });
    console.log('Mailchimp response:', response.data);
    return new Response(JSON.stringify({ data: response.data }), { status: 200 });
  } catch (error) {
    console.error('Mailchimp error:', error.response.data);
    return new Response(JSON.stringify({ error: error.response.data.detail || 'An error occurred. Please try again.' }), { status: 500 });
  }
}

