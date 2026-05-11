import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { pool } from '../config/db';

export const signupService = async (
  username: string,
  email: string,
  password: string
) => {

  const hashedPassword = await bcrypt.hash(password, 10);

  const result = await pool.query(
    `INSERT INTO users(username,email,password_hash)
     VALUES($1,$2,$3)
     RETURNING *`,
    [username, email, hashedPassword]
  );

  return result.rows[0];
};

export const loginService = async (
  email: string,
  password: string
) => {

  const result = await pool.query(
    `SELECT * FROM users WHERE email=$1`,
    [email]
  );

  if (result.rows.length === 0) {
    throw new Error('User not found');
  }

  const user = result.rows[0];

  const validPassword = await bcrypt.compare(
    password,
    user.password_hash
  );

  if (!validPassword) {
    throw new Error('Invalid password');
  }

  const token = jwt.sign(
    { id: user.id },
    process.env.JWT_SECRET as string,
    { expiresIn: '1d' }
  );

  return { token, user };
};