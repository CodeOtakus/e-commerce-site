import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getData } from '../../../utils/GetData';
import Input from '../../components/Input';
import Axios from 'axios';
import { toast } from 'sonner';

export default function Edit() {
    const { id } = useParams();
    const [store, setStore] = useState<any>({});
    const [storeData, setStoreData] = useState<any>({});

    useEffect(() => {
        let data = getData("/store/" + id);
        data.then((res): void => {
            res.store ? setStore(res.store) : (window.location.href = "/notfound");
        });
    }, []);

   
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStoreData({ ...storeData, [event.target.name]: event.target.value });
    };


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await Axios.patch(`http://localhost:8000/api/store/${store.store_id}`, storeData);
            toast.success("Store updated successfully");
        } catch (error) {
            console.error("Error occurred:", error);
            toast.error("An error occurred, please try again later");
        }
    };

    return (
        <div className="flex justify-center">
            <div className="w-full max-w-2xl bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Edit Store</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <Input name="store_name" type="text" label="Store Name" placeholder="Enter Store Name" value={store.store_name} onchange={handleChange} required={false} />
                        </div>
                        <div className="mb-4">
                            <Input name="email" type="text" label="Email" placeholder="Enter Store Email" value={store.email} onchange={handleChange} required={false} />
                        </div>
                        <div className="mb-4">
                            <Input name="store_type" type="text" label="Store Type" placeholder="Enter Store Type" value={store.store_type} onchange={handleChange} required={false} />
                        </div>
                        <div className="mb-4">
                            <Input name="address" type="text" label="Address" placeholder="Enter Address" value={store.address} onchange={handleChange} required={false} />
                        </div>
                        <div className="mb-4">
                            <Input name="mobile" type="text" label="Mobile" placeholder="Enter Mobile Number" value={store.mobile} onchange={handleChange} required={false} />
                        </div>
                        <div className="mb-4">
                            <Input name="fax" type="text" label="Fax" placeholder="Enter Fax Number" value={store.fax} onchange={handleChange} required={false} />
                        </div>
                        <div className="mb-4">
                            <Input name="vat" type="number" label="VAT" placeholder="Enter VAT" value={store.vat} onchange={handleChange} required={false} />
                        </div>
                        <div className="mb-4">
                            <Input name="receipt_prefix" type="text" label="Receipt Prefix" placeholder="Enter Receipt Prefix" value={store.receipt_prefix} onchange={handleChange} required={false} />
                        </div>
                        <div className="mb-4">
                            <Input name="discount" type="number" label="Discount" placeholder="Enter Discount" value={store.discount} onchange={handleChange} required={false} />
                        </div>
                        <div className="mb-4">
                            <Input name="noteDisplay" type="text" label="Note Display" placeholder="Enter Note Display" value={store.noteDisplay} onchange={handleChange} required={false} />
                        </div>
                      
                        <div className="mt-6">
                            <button type="submit" className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300" onClick={handleSubmit}>Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
