import { useEffect, useState } from "react";
import { subscribeReceitas } from "./receitasService";

export function useReceitas() {
    const [receitas, setReceitas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const unsubscribe = subscribeReceitas(
            (data) => {
                setReceitas(data);
                setLoading(false);
            },
            (err) => {
                setError(err);
                setLoading(false);
            }
        );
        return unsubscribe;
    }, []);

    return { receitas, loading, error };
}
