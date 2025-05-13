import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Paper, Typography, List, ListItem, ListItemText, IconButton, Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const ListaProd = ({ onEdit }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const API = 'http://localhost:4000';
      const response = await axios.get(`${API}/api/inventario`);
      const data = response.data.data;
      setItems(Array.isArray(data) ? data : data.items || []);
    } catch (error) {
      console.error('Error al obtener ítems:', error);
    }
  };

  const deleteItem = async (id) => {
    const API = 'http://localhost:4000';
    await axios.delete(`${API}/api/inventario/${id}`);
    fetchItems();
  };

  return (
    <Paper elevation={3} sx={{ p: 3, backgroundColor: '#e3f2fd' }}>
  <Typography variant="h6" color="primary" gutterBottom>
    Lista de productos
  </Typography>
      <List>
        {items.map((item) => (
          <ListItem key={item._id} divider secondaryAction={
            <Stack direction="row" spacing={1}>
              <IconButton edge="end" onClick={() => onEdit(item)}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" onClick={() => deleteItem(item._id)} color="error">
                <DeleteIcon />
              </IconButton>
            </Stack>
          }>
            <ListItemText
              primary={`${item.nombre_producto} (${item.marca})`}
              secondary={`Código: ${item.codigo} | Cantidad: ${item.cantidad} | Valor: $${item.valor}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default ListaProd;
