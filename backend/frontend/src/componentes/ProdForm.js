import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import axios from 'axios';

const ProdForm = ({ selectedItem, onSaved, onCancel }) => {
  const [codigo, setCodigo] = useState('');
  const [nombre_producto, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [marca, setMarca] = useState('');
  const [valor, setValor] = useState('');
  const [cantidad, setCantidad] = useState('');

  useEffect(() => {
    if (selectedItem) {
      setCodigo(selectedItem.codigo);
      setNombre(selectedItem.nombre_producto);
      setDescripcion(selectedItem.descripcion);
      setMarca(selectedItem.marca);
      setValor(selectedItem.valor);
      setCantidad(selectedItem.cantidad);
    } else {
      setCodigo('');
      setNombre('');
      setDescripcion('');
      setMarca('');
      setValor('');
      setCantidad('');
    }
  }, [selectedItem]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const API = 'http://localhost:4000';
    if (selectedItem) {
      await axios.put(`${API}/api/inventario/${selectedItem._id}`, {
        codigo, nombre_producto, descripcion, marca, valor, cantidad,
      });
    } else {
      await axios.post(`${API}/api/inventario`, {
        codigo, nombre_producto, descripcion, marca, valor, cantidad,
      });
    }
    onSaved();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField fullWidth label="Código" value={codigo} onChange={(e) => setCodigo(e.target.value)} required />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Nombre Producto" value={nombre_producto} onChange={(e) => setNombre(e.target.value)} required />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth multiline rows={3} label="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Marca" value={marca} onChange={(e) => setMarca(e.target.value)} required />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Valor" value={valor} onChange={(e) => setValor(e.target.value)} required />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth type="number" label="Cantidad" value={cantidad} onChange={(e) => setCantidad(e.target.value)} required />
        </Grid>
        <Grid container justifyContent="flex-end" spacing={2} sx={{ mt: 2 }}>
            <Grid item>
                <Button onClick={onCancel} color="secondary" variant="outlined">
                Cancelar
                </Button>
            </Grid>
            <Grid item>
                <Button type="submit" variant="contained" color="primary">
                Guardar
                </Button>
            </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default ProdForm;
