import { Router } from 'express';
import { pool } from '../db.js';

// Consulta por todos los equipos informaticos

export const getSalidas = async (req, res) => {
  try {
    const [result] = await pool.query(
      'SELECT s.idSalida, s.cantidad, date_format(s.fecha  , "%d-%m-%Y") AS fecha  ,  p.nombreProducto, u.nombre, a.nombreArea FROM salida s INNER JOIN producto p ON  s.producto = p.idProducto INNER JOIN usuario u ON s.usuario = u.idUsuario INNER JOIN area a ON s.area = a.idArea'
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Consulta por id un  equipo informatico

export const getSalida = async (req, res) => {
  try {
    const [result] = await pool.query(
      'SELECT * FROM SALIDA WHERE idSalida = ?',
      [req.params.id]
    );
    if (result.length == 0)
      return res.status(404).json({ messagge: 'Salida no encontrado' });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Crea un equipo informatico

export const createSalida = async (req, res) => {
  try {
    const { fecha, cantidad, usuario, producto, area } = req.body;
    const [result] = await pool.query(
      'INSERT INTO SALIDA (fecha, cantidad, usuario, producto, area  ) VALUES (?,?,?,?,?)',
      [fecha, cantidad, usuario, producto, area]
    );

    res.json({
      idEntrada: result.insertId,
      fecha,
      cantidad,
      usuario,
      producto,
      area,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Actualiza un atributo de un equipo informatico

export const updateSalida = async (req, res) => {
  try {
    const result = await pool.query('UPDATE SALIDA SET ? WHERE idSalida = ?', [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Elimina un equipo informatico por id
export const deleteSalida = async (req, res) => {
  try {
    const [result] = await pool.query('DELETE FROM SALIDA WHERE idSalida = ?', [
      req.params.id,
    ]);
    if (result.affectedRows === 0)
      return res.status(404).json({ message: 'Salida no encontrado' });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
