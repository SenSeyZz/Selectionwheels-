// pages/api/groups/create.js
/*
import pool from '../../../pages/mySQL';  // Adjust the path accordingly

export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { groupName } = req.body;
  
      try {
        // Perform the INSERT query
        const results = await pool.promise().query('INSERT INTO groups (group_name) VALUES (?)', [groupName]);
  
        // Send the inserted group ID as a response
        res.status(200).json({ groupId: results[0].insertId });
      } catch (error) {
        console.error('Error creating group:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  } */
