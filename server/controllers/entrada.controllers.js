import { Router } from 'express';
import { pool } from '../db.js';

// Consulta por todos las  entradas

export const getEntradas = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT e.idEntrada, e.cantidad,  date_format(e.fecha , "%d-%m-%Y") AS fecha ,  p.nombreProducto, u.nombre FROM entrada e INNER JOIN producto p ON  e.producto = p.idProducto INNER JOIN usuario u ON e.usuario = u.idUsuario;');
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Consulta por id una entrada

export const getEntrada = async (req, res) => {
  try {
    const [result] = await pool.query(
      'SELECT * FROM ENTRADA WHERE idEntrada = ?',
      [req.params.id]
    );
    if (result.length == 0)
      return res.status(404).json({ messagge: 'Entrada no encontrado' });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Crea una entrada 

export const createEntrada = async (req, res) => {
  try {
    const { fecha, cantidad, usuario, producto } = req.body;
    const [result] = await pool.query(
      'INSERT INTO ENTRADA (fecha, cantidad, usuario, producto  ) VALUES (?,?,?,?)',
      [fecha, cantidad, usuario, producto]
    );

    res.json({
      idEntrada: result.insertId,
      fecha,
      cantidad,
      usuario,
      producto,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Actualiza un atributo de una entrada

export const updateEntrada = async (req, res) => {
  try {
    const result = await pool.query(
      'UPDATE ENTRADA SET ? WHERE idEntrada = ?',
      [req.body, req.params.id]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Elimina una entrada
export const deleteEntrada = async (req, res) => {
  try {
    const [result] = await pool.query(
      'DELETE FROM ENTRADA WHERE idEntrada = ?',
      [req.params.id]
    );
    if (result.affectedRows === 0)
      return res.status(404).json({ message: 'Entrada no encontrado' });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
