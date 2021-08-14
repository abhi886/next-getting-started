import Link from "next/link";
import ProductLayout from "../../src/components/productlayout";
import styles from "../../styles/productLayout.module.css";

export async function getStaticProps({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/`);
  const data = await res.json();

  return {
    props: { users: data },
  };
}

export default function products({ users }) {
  return (
    <ProductLayout>
      {users.map((user) => (
        <Link href={`/products/${user.id}`} key={user.id}>
          <a className={styles.single}>{user.name}</a>
        </Link>
      ))}
    </ProductLayout>
  );
}
