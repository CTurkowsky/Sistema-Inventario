import { Router } from 'express';
import { pool } from '../db.js';

// Crear un area 

export const createArea = async (req, res) => {
  try {
    const { nombreArea } = req.body;
    const [result] = await pool.query(
      'INSERT INTO AREA (nombreArea) VALUES (?)',
      [nombreArea]
    );

    res.json({
      idArea: result.insertId,
      nombreArea,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Obtener Areas

export const getAreas = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM AREA');
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};



