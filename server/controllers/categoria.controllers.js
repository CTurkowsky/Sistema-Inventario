import { Router } from 'express';
import { pool } from '../db.js';


// Crea categoria

export const createCategoria= async (req, res) => {
  try {
    const { nombreCategoria  } = req.body;
    const [result] = await pool.query(
      'INSERT INTO CATEGORIA(nombreCategoria) VALUES (?)',
      [nombreCategoria]
    );

    res.json({
      idCategoria: result.insertId,
      nombreCategoria,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Obtiene todas las categorias

export const getCategorias= async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM CATEGORIA');
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


