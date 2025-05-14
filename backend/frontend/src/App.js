import React, { useState } from 'react';
import ListaProd from './componentes/Productos';
import ProdForm from './componentes/ProdForm';
import { Dialog, DialogTitle, DialogContent, Button, AppBar, Toolbar, Typography, Container } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Snackbar, Alert } from '@mui/material';


function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);
  const [formOpen, setFormOpen] = useState(false);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success', // puede ser 'error', 'info', 'warning'
  });

  const handleEdit = (item) => {
    setSelectedItem(item);
    setFormOpen(true);
  };

  const handleAdd = () => {
    setSelectedItem(null);
    setFormOpen(true);

    setSnackbar({
      open: true,
      message: selectedItem ? 'Producto actualizado correctamente' : 'Producto agregado correctamente',
      severity: 'success',
    });
  };

  const handleSaved = () => {
    setFormOpen(false);
    setSelectedItem(null);
    setRefreshKey(old => old + 1);

    setSnackbar({
      open: true,
      message: selectedItem ? 'Producto actualizado correctamente' : 'Producto agregado correctamente',
      severity: 'success',
    });
  };

  const handleCancel = () => {
    setFormOpen(false);
    setSelectedItem(null);
    setSnackbar({
      open: true,
      message: 'Edición cancelada',
      severity: 'info',
    });
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
            onCancel={handleCancel} // pasamos función al form
          />
        </DialogContent>
      </Dialog>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}

export default App;
