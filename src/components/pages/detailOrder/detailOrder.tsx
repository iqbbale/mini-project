import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { ICard, IOrder } from "../../../types/order";
import { getOrderById } from "../../../services/order.service";
import styles from "./detailOrder.module.css";
import { Link } from "react-router-dom";
import Button from "../../ui/button";

// disini kita akan belajar juga melalui data yang di pangil dari URL
const DetailOrder = () => {
  const { id } = useParams(); //jika di saat routenya id maka id jika slug maka slug, intinya di router apa disini di pangil juga apa :id maka pangiil id-nya
  const [order, setOrder] = useState<IOrder | null>(null);

  useEffect(() => {
    const fetchOrder = async () => {
      // const result = await getOrderById(`${id}`)
      const result = await getOrderById(id as string);
      setOrder(result);
    };
    fetchOrder();
  }, []); //depedencies kosong karena dijalankan pada saat di load saja

  return (
    <main className={styles.detail}>
      <section className={styles.header}>
        <h1>Detail Order</h1>
        <Link to="/orders">
          <Button>Back</Button>
        </Link>
      </section>
      <section>
        <div className={styles.order}>
          <div className={styles.info}>
            <div className={styles.item}>
              <p>Order ID : </p>
              <h4>{order?.id}</h4>
            </div>
            <div className={styles.item}>
              <p>Customer:</p>
              <h4>{order?.customer_name}</h4>
            </div>
            <div className={styles.item}>
              <p>Table:</p>
              <h4>{order?.table_number}</h4>
            </div>
            <div className={styles.item}>
              <p>Status:</p>
              <h4>{order?.status}</h4>
            </div>
            <div className={styles.item}>
              <p>Total:</p>
              <h4>{order?.total}</h4>
            </div>
          </div>
        </div>
        <div className={styles.cart}>
          <h3>Orders Items</h3>
          <div className={styles.list}>
            {order?.cart?.map((item: ICard) => (
              <div className={styles.item} key={item.menuItem?.id}>
                <img
                  className={styles.image}
                  src={item?.menuItem?.image_url}
                  alt={item?.menuItem?.name}
                />
                <div>
                  <p className={styles.name}>
                    {item.quantity} x {item.menuItem?.name}
                  </p>
                  <p className={styles.price}>
                    ${parseInt(`${item.menuItem?.price}`) * item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default DetailOrder;
