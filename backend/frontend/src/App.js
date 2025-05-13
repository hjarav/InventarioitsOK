import React, { useState } from 'react';
import ListaProd from './componentes/Productos';
import ProdForm from './componentes/ProdForm';
import { Dialog, DialogTitle, DialogContent, Button, AppBar, Toolbar, Typography, Container } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);
  const [formOpen, setFormOpen] = useState(false);

  const handleEdit = (item) => {
    setSelectedItem(item);
    setFormOpen(true);
  };

  const handleAdd = () => {
    setSelectedItem(null);
    setFormOpen(true);
  };

  const handleSaved = () => {
    setFormOpen(false);
    setSelectedItem(null);
    setRefreshKey(old => old + 1);
  };

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Inventario de Ropa - itsOK
          </Typography>
          <Button variant="contained" startIcon={<AddIcon />} onClick={handleAdd} sx={{ backgroundColor: '#90caf9' }}>
            Agregar producto
          </Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <ListaProd key={refreshKey} onEdit={handleEdit} />
      </Container>

      <Dialog open={formOpen} onClose={() => setFormOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ backgroundColor: '#e3f2fd' }}>
          {selectedItem ? 'Editar producto' : 'Agregar nuevo producto'}
        </DialogTitle>
        <DialogContent dividers>
          <ProdForm
            selectedItem={selectedItem}
            onSaved={handleSaved}
            onCancel={() => setFormOpen(false)} // pasamos función al form
          />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default App;
