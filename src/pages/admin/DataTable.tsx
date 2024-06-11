// import { useState } from 'react';
// import Box from '@mui/material/Box';
// import {
//   DataGrid,
//   GridArrowUpwardIcon,
//   GridCheckIcon,
//   GridCloseIcon,
//   GridColDef,
//   GridToolbar,
//   GridDeleteIcon,
// } from '@mui/x-data-grid';
// import { IconButton } from '@mui/material';
// import FormProducts from './FormProducts';
// import { deleteProduct, updateProduct } from '@/Services/products.service';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import UpdateFormProducts from './UpdateFormProducts';
// import { GridSkeleton } from '@/Utils/Skeletons';
// // import UpdatePriceAndStockForm from './UpdatePriceAndStock';
// import { useTheme, useMediaQuery } from '@mui/material';

// export default function ProductList({ rows }: any) {
//   const columns: GridColDef[] = [
//     {
//       field: 'image',
//       headerName: 'Image',
//       minWidth: 115,
//       renderCell: (params) => (
//         <div
//           style={{
//             width: 50,
//             height: 50,
//             display: 'grid',
//             placeContent: 'center',
//           }}
//         >
//           <img
//             width={50}
//             height={50}
//             src={params.value}
//             alt="Product"
//             style={{
//               width: '45px',
//               height: '45px',
//               objectFit: 'cover',
//               borderRadius: '10%',
//             }}
//           />
//         </div>
//       ),
//     },
//     {
//       field: 'name',
//       headerName: 'Name',
//       minWidth: 130,
//     },
//     {
//       field: 'category',
//       headerName: 'Categoria',
//       minWidth: 130,
//     },
//     {
//       field: 'description',
//       headerName: 'Description',
//       minWidth: 140,
//     },
//     // {
//     //   field: 'price',
//     //   headerName: 'Precio',
//     //   type: 'number',
//     //   minWidth: 115,
//     //   editable: false,
//     //   renderCell: (params) => (
//     //     <>
//     //       <span
//     //         onClick={() =>
//     //           setUpdatePriceAndStockModal({
//     //             active: true,
//     //             id: Number(params.id),
//     //           })
//     //         }
//     //         style={{
//     //           backgroundColor: 'rgba(0, 255, 0, 0.5)',
//     //           padding: '4px 8px',
//     //           borderRadius: '10px',
//     //           color: 'black',
//     //         }}
//     //       >
//     //         ${params.value}
//     //       </span>
//     //       {/* <button
//     //         style={{ height: '5px', width: 'auto' }}
//     //         onClick={() => {
//     //           handlePriceChange(Number(params.id), params.value);
//     //         }}
//     //       >s
//     //       </button> */}
//     //     </>
//     //   ),
//     // },
//     // {
//     //   field: 'blocked',
//     //   headerName: 'Stock',
//     //   type: 'boolean',
//     //   minWidth: 115,
//     //   editable: false,
//     //   renderCell: (params) => (
//     //     <span
//     //       onClick={() =>
//     //         setUpdatePriceAndStockModal({
//     //           active: true,
//     //           id: Number(params.id),
//     //         })
//     //       }
//     //       style={{ color: params.value ? 'red' : 'green' }}
//     //     >
//     //       {params.value ? <GridCloseIcon /> : <GridCheckIcon />}
//     //     </span>
//     //   ),
//     // },
//     {
//       field: 'eliminate',
//       headerName: 'Eliminar',
//       width: 120,
//       renderCell: (params) => (
//         <>
//           <IconButton
//             aria-label="Delete"
//             onClick={() => handleDeleteProduct(params.row.id)}
//           >
//             <GridDeleteIcon />
//           </IconButton>
//         </>
//       ),
//     },
//     {
//       field: 'edit',
//       headerName: 'Editar',
//       width: 110,
//       renderCell: (params) => (
//         <>
//           <IconButton
//             aria-label="Edit"
//             onClick={() => handleUpdateProduct(params.row.id)}
//           >
//             <GridArrowUpwardIcon />
//           </IconButton>
//         </>
//       ),
//     },
//   ];

//   const [loading, setLoading] = useState(true);
//   const [updateModal, setUpdateModal] = useState({ active: false, id: 0 });
//   const [updatePriceAndStockModal, setUpdatePriceAndStockModal] = useState({
//     active: false,
//     id: 0,
//   });

//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery('(max-width: 474px)');
//   const styles = isSmallScreen
//     ? {
//         margin: '10px',
//         height: '70vh',
//         width: '95vw',
//         //TODO - Hacelo responsive
//         maxWidth: '975px',
//         display: 'flex',
//         flexDirection: 'column',
//       }
//     : {
//         margin: '10px',
//         height: '70vh',
//         width: '70vw',
//         //TODO - Hacelo responsive
//         maxWidth: '975px',
//         display: 'flex',
//         flexDirection: 'column',
//       };
//   const isExtraLargeScreen = useMediaQuery(theme.breakpoints.down('xl'));

//   const handleDeleteProduct = (id: number) => {
//     try {
//       deleteProduct(id);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   const handleUpdateProduct = (id: number) => {
//     setUpdateModal({
//       active: true,
//       id: id,
//     });
//   };

//   if (rows[0].image === 'ejemplo') {
//     return (
//       <div className="skeleton_container">
//         <GridSkeleton />
//       </div>
//     );
//   }

//   return (
//     <div className="skeleton_container">
//       <h2 className="product__title">Productos</h2>
//       <Box sx={styles}>
//         <ToastContainer
//           position="bottom-right"
//           autoClose={5000}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//           theme="light"
//         />
//         {/* Same as */}
//         <DataGrid
//           className="dataGrid"
//           rows={rows}
//           columns={columns}
//           initialState={{
//             pagination: {
//               paginationModel: {
//                 pageSize: 10,
//               },
//             },
//           }}
//           pageSizeOptions={[5]}
//           // checkboxSelection
//           disableRowSelectionOnClick
//           getRowClassName={(params: any) =>
//             params.id % 2 === 1 ? 'row-highlight' : ''
//           }
//           slots={{ toolbar: GridToolbar }}
//           slotProps={{
//             toolbar: {
//               showQuickFilter: true,
//               quickFilterProps: { debounceMs: 500 },
//             },
//           }}
//           disableColumnFilter
//           disableDensitySelector
//           disableColumnSelector
//         />
//         <FormProducts />
//         {updateModal && (
//           <UpdateFormProducts
//             updateModal={updateModal}
//             setUpdateModal={setUpdateModal}
//           />
//         )}

//         {/* <UpdatePriceAndStockForm
//           updatePriceAndStockModal={updatePriceAndStockModal}
//           setUpdatePriceAndStockModal={setUpdatePriceAndStockModal}
//         /> */}

//         <span
//           style={{
//             fontSize: '10px',
//             color: '#888',
//             margin: '10px',
//           }}
//         >
//           {/* C */}
//         </span>
//       </Box>
//     </div>
//   );
// }
