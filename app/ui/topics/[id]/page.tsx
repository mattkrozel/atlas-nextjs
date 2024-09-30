export default async function Page({ params }: {params: { id: string } }) {
    //simulates page loading
    await new Promise((r) => setTimeout(r, 3000));

    return <div>Topic Page: {params.id}</div>;
}
