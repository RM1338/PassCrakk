export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { password } = req.body;

  // Get the correct password from environment variable
  const correctPassword = process.env.VITE_ACCESS_PASSWORD;

  if (!correctPassword) {
    return res.status(500).json({ error: 'Server configuration error' });
  }

  // Compare passwords
  if (password === correctPassword) {
    // Password is correct
    return res.status(200).json({ 
      success: true,
      message: 'Access granted'
    });
  } else {
    // Password is incorrect
    return res.status(401).json({ 
      success: false,
      message: 'Incorrect password'
    });
  }
}