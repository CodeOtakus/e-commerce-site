import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../../utils/GetData";

export default function CategoryDisplay() {
  const { id } = useParams<{ id: string }>();
  const [category, setCategory] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData("/category/" + id)
      .then((res) => {
        if (Array.isArray(res.category)) {
          setCategory(res.category);
        } else {
          setCategory([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching category:", error);
        setLoading(false);
      });
  }, [id]);



  return (
    <div>hi</div>
  )
}
