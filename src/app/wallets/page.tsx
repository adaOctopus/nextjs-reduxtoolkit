"use client"

// useSelector to fetch data
// useDispatch to execute actions
import { useSelector, useDispatch } from "react-redux"
import { addWallet, deleteWallet } from "@/redux/slices/walletSlice"
import { Form, Input, InputNumber, Button } from "antd";
import styles from "./page.module.css"
import { useState } from "react"
import { set } from "mongoose"

export default function Wallets() {
    const [token, setToken] = useState("");
    const [name, setName] = useState("");
    const [balance, setBalance] = useState(0);
    const dispatch = useDispatch();

    // fetch posts from state, it matches the name in the slicer state "wallet"
    const wallets = useSelector((state: any) => state.wallet);

    const handleRemove = (id: any) => {
        dispatch(deleteWallet(id));
        console.log(id)
        console.log(wallets)
    }

    const handleAddWallet = (e: any) => {
        e.preventDefault();
        // these are from the useState();
        if (!name || !token || !balance) return;

        const newWallet = {
            id: Date.now(),
            name: name,
            balance: balance,
            token: token
        }

        if (newWallet) {
            dispatch(addWallet(newWallet));
            setName("");
            setBalance(0);
            setToken("");
        } else {
            throw new Error("Wallet not added, try again");
        }
    }

    return (
        <div className={styles.container}>
            <Form className={styles.form}>
                <Form.Item>
                    <Input
                        type="text"
                        className={styles.input}
                        placeholder="Name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Item>
                <Form.Item>
                    <Input
                        placeholder="Token"
                        name="token"
                        value={token}
                        className={styles.input}
                        onChange={(e) => setToken(e.target.value)}
                    ></Input>
                </Form.Item>
                <Form.Item>
                    <InputNumber
                        placeholder="Balance"
                        name="balance"
                        value={balance}
                        className={styles.input}
                        onChange={(e) => setBalance((parseInt(e?.valueOf())))}
                    ></InputNumber>
                </Form.Item>
                <Button className={styles.button} onClick={() => console.log('button')}>Add New Wallet</Button>
            </Form>
            <h1 className={styles.heading}>Wallets</h1>
            {wallets ? (
                wallets.map((wallet: any) => (
                    <div key={wallet.id} className={styles.post}>
                        <h3 className={styles.name}>{wallet.name}</h3>
                        <p className={styles.balance}>{wallet.balance}</p>
                        <p className={styles.token}> </p>
                        <button
                            className={styles.deleteButton}
                            onClick={() => handleRemove(wallet.id)}
                        >
                            Delete
                        </button>
                    </div>
                ))
            ) : (
                <p>No posts found.</p>
            )}
        </div>
    );
}