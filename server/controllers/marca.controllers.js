import { Router } from 'express';
import { pool } from '../db.js';

// Crea marca
export const createMarca = async (req, res) => {
  try {
    const { nombreMarca } = req.body;
    const [result] = await pool.query(
      'INSERT INTO MARCA(nombreMarca) VALUES (?)',
      [nombreMarca]
    );

    res.json({
      idMarca: result.insertId,
      nombreMarca,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Obtiene todas las marcas
export const getMarcas = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM MARCA');
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


