import * as React from "react";
import Layout from "../components/layout";
import * as containerS from "./index.css";
import { graphql } from "gatsby";
import {
  Box,
  Collapse,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export const query = graphql`
  query {
    directus {
      Member {
        id
        name
        enrollment {
          Subject_id{
            id
            subject_name
            day
            start_time
            end_time
          }
        }
      }
    }
  }
`;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function Row(props) {
  const { Member } = props;
  const [open, setOpen] = React.useState(false);

  const url = "https://w66rlzai.directus.app/assets/";

  return (
    <React.Fragment>
      <StyledTableRow key={Member.id} align="center">
        <StyledTableCell>{Member.name}</StyledTableCell>
        <StyledTableCell align="center">{Member.id}</StyledTableCell>
        <TableCell align="center">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </StyledTableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div" className="head-color">
                วิชาที่ลงทะเบียน
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">รหัส</TableCell>
                    <TableCell align="center">ชื่อวิชา</TableCell>
                    <TableCell align="center">วันที่เรียน</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Member.enrollment.map((enrollment) => (
                    <StyledTableRow key={enrollment.Subject_id.id}>
                      <StyledTableCell align="center">
                        {enrollment.Subject_id.id}
                      </StyledTableCell>
                      <StyledTableCell>
                        {enrollment.Subject_id.subject_name}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {enrollment.Subject_id.day}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const IndexPage = ({ data: { directus } }) => {
  return (
    <Layout pageTitle="รายชื่อนักศึกษา">
      <div className={containerS.mainDiv}>
        {/* <h1>รายชื่อสมาชิกทั้งหมด</h1> */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">ชื่อ</StyledTableCell>
                <StyledTableCell align="center">รหัสนักศึกษา</StyledTableCell>
                <StyledTableCell align="center">รายละเอียด</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {directus.Member.map((Member) => (
                <Row key={Member.id} Member={Member} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Layout>
  );
};

export default IndexPage;
