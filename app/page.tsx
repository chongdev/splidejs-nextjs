import SplideComponent from "@/components/SplideComponent";

const HomePage = () => {
    const isClient = typeof window !== "undefined";

    return (
        <div>
            <SplideComponent />
        </div>
    );
};

export default HomePage;
