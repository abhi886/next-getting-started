import ProductLayout from "../../src/components/productlayout";
import BackButton from "../../src/shared/BackButton";

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { data },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const paths = data.map((user) => {
    return {
      params: {
        id: user.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

const Details = ({ data }) => {
  return (
    <ProductLayout>
      <div>
        <h1>Details Page</h1>
        <h1>{data.name}</h1>
        <h2>{data.email}</h2>
        <h3>{data.email}</h3>
      </div>
      <BackButton></BackButton>
    </ProductLayout>
  );
};

export default Details;
