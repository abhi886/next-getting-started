import Link from "next/link";
import ProductLayout from "../../src/components/productlayout";
import styles from "../../styles/productLayout.module.css";
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

// export async function getStaticPaths() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await res.json();
//   // const paths = users.map((user) => ({
//   //   params: { id: user.id },
//   // }));

//   const paths = [
//     {
//       params: { id: "1" },
//     },
//   ];

//   // const paths = [
//   //   { params: { id: "1" } },
//   //   { params: { id: "2" } },
//   //   { params: { id: "this" } },
//   // ];
//   return {
//     paths,
//     fallback: false,
//   };
// }

export async function getStaticProps({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/`);
  const data = await res.json();

  return {
    props: { users: data },
  };
}
