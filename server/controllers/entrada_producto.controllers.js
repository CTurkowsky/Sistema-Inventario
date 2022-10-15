import { Router } from 'express';
import { pool } from '../db.js';



export const createEntradaProducto = async (req, res) => {
  try {
    const { producto, entrada ,cantidad  } = req.body;
    const [result] = await pool.query(
      'INSERT INTO ENTRADA_PRODUCTO (producto, entrada, cantidad) VALUES (?,?,?)',
      [producto, entrada, cantidad]

    );

    res.json({
      producto,entrada,cantidad
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


export const getEntrdasProductos= async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM ENTRADA_PRODUCTO');
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


export const deleteEntradaProducto = async (req, res) => {
  try {
    const [result] = await pool.query('DELETE FROM ENTRADA_PRODUCTO WHERE entrada = ?', [
      req.params.id,
    ]);
    if (result.affectedRows === 0)
      return res.status(404).json({ message: 'Entrada no encontrado' });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


