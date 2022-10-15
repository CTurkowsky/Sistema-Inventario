import { Router } from 'express';
import { pool } from '../db.js';



export const createProductoSalida = async (req, res) => {
  try {
    const { producto, salida,cantidad  } = req.body;
    const [result] = await pool.query(
      'INSERT INTO PRODUCTO_SALIDA (producto, salida, cantidad) VALUES (?,?,?)',
      [producto, salida, cantidad]

    );

    res.json({
      producto,entrada,cantidad
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


export const getProductoSalida = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM ENTRADA_PRODUCTO');
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


export const deleteProductoSalida= async (req, res) => {
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

