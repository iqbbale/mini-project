import { useEffect, useState } from "react";
import { getOrders } from "../../../services/order.service";
import styles from "./listOrder.module.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../ui/button";
import type { IOrder } from "../../../types/order";
import { updateOrder } from "../../../services/order.service";
import { removeLocalStorage } from "../../../utils/LocalStorage";

// konsep refect dibuat agar misal nanti kita ambil / kita berganti URL di tengah2
// karena nantinya selain ambl data di awal mungkin kita ambil data di tengah2 jadi kita
// perlu ubah datanya mangkanya ada yang namanya konsep fecth
// dan fungsinya agar datanya berubah
const ListOrder = () => {
  const [orders, setOrders] = useState([]);

  const [refetchOrder, setRefetchOrder] = useState(true);

  useEffect(() => {
    if (refetchOrder) {
      const fetchOrder = async () => {
        const result = await getOrders();
        setOrders(result.data);
      };
      fetchOrder();
      setRefetchOrder(false);
    }
  }, [refetchOrder]);

  const handleCompleteOrder = async (id: string) => {
    await updateOrder(id, { status: "COMPLETED" }).then(() => {
      setRefetchOrder(true);
    });
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    removeLocalStorage("auth");
    return navigate("/login");
  };

  return (
    <main className={styles.order}>
      <section className={styles.header}>
        <h1 className={styles.title}>Order List</h1>
        <div className={styles.button}>
          <Link to="/create">
            <Button>Create Order</Button>
          </Link>
          <Button color="secondary" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </section>
      <section>
        <table
          border={1}
          className={styles.table}
          cellSpacing={0}
          cellPadding={10}
        >
          <thead>
            <tr>
              <th>No</th>
              <th>Costumer Name</th>
              <th>Table</th>
              <th>Total</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((orders: IOrder, index: number) => (
              <tr key={orders.id}>
                <td>{index + 1}</td>
                <td>{orders.customer_name}</td>
                <td>{orders.table_number}</td>
                <td>{orders.total}</td>
                <td>{orders.status}</td>
                <td className={styles.action}>
                  <Link to={`/orders/${orders.id}`}>
                    <Button>Detail</Button>
                  </Link>
                  {orders.status === "PROCESSING" && (
                    <Button onClick={() => handleCompleteOrder(orders.id)}>
                      Completed
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default ListOrder;
