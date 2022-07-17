import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


const List = () => {
  const rows = [
    {
      id: 100,
      product: "T Shirt",
      img: "https://rukminim1.flixcart.com/image/495/594/kf8kvbk0-0/t-shirt/s/g/p/m-printed-half-t-shirt-larry-eva-original-imafvqggnegvwkxs.jpeg?q=50",
      customer: "ABhishek Dubey",
      date: "1 July",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 102,
      product: "I Phone 13 Pro max",
      img: "https://rukminim1.flixcart.com/image/416/416/ktketu80/mobile/c/g/4/iphone-13-pro-max-mlll3hn-a-apple-original-imag6vpg3r7dyvhm.jpeg?q=70",
      customer: "Himanshi Satpute",
      date: "22 July",
      amount: 129000,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 104,
      product: "Sun Glases",
      img: "https://rukminim1.flixcart.com/image/800/960/kr0ynbk0/sunglass/v/i/t/as-18022-89-14883-m-aislin-original-imag4wf5mxkz39u7.jpeg?q=50",
      customer: "Pramod Tiwari",
      date: "10 July",
      amount: 935,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 106,
      product: "Dell Laptop",
      img: "https://rukminim1.flixcart.com/image/312/312/l44hyfk0/computer/u/8/s/-original-imagf35ee3xwgkzv.jpeg?q=70",
      customer: "Himanshi Satpute",
      date: "12 July",
      amount: 71920,
      method: "Online",
      status: "Approved",
    },
    {
      id: 108,
      product: "Smart Watch",
      img: "https://rukminim1.flixcart.com/image/312/312/k0mqtu80/smartwatch/2/h/h/ftw4026-fossil-original-imafkduxftasnnqd.jpeg?q=70",
      customer: "ABhishek Dubey",
      date: "15 July",
      amount: 20000,
      method: "Online",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;