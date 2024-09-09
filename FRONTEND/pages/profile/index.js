import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import styles from './Profile.module.css';

const HeaderPage = () => {
    const stylesHeaderPage = {
        header: {
            position: "fixed",
            top: 0,
            left: 0,
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            overflow: "hidden",
            backgroundColor: "#d9d9d9",
            zIndex: 1000, // Ensure it's above other elements
        },
        textLogo: {
            fontSize: "36px",
            fontWeight: "bold",
            color: "black",
            padding: "10px",
            overflow: "hidden",
            cursor: "pointer",
        },
        username: {
            backgroundColor: "white",
            margin: "10px",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
        },
    };

    return (
        <motion.div
            style={stylesHeaderPage.header}
            initial={{ height: "100vh", opacity: 0 }}
            animate={{ height: "80px", opacity: 1 }}
            transition={{
                type: "spring",
                stiffness: 120,
                damping: 20,
                ease: (t) => t * (1 - t) * (2 * t - 1),
            }}
        >
            <motion.h1
                style={stylesHeaderPage.textLogo}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                PODER
            </motion.h1>
        </motion.div>
    );
};

function Profile() {
    const router = useRouter();
    const { data } = router.query;

    const [userData, setUserData] = useState({});
    const [editedData, setEditedData] = useState({});
    const [editMode, setEditMode] = useState(false);

    // Parse the data string into an object
    useEffect(() => {
        if (data) {
            const parsedData = JSON.parse(data);
            setUserData(parsedData);
            setEditedData(parsedData);
        }
    }, [data]);

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedData({ ...editedData, [name]: value });
    };

    // Handle edit mode toggle
    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setUserData(editedData);
        toggleEditMode();
        console.log("Edited Data:", editedData);
    };

    return (
        <>
            <HeaderPage />
            <div className={styles.profileContainer}>
                <div className={styles.profileCard}>
                    {editMode ? (
                        <>
                            <h1 className={styles.profileCardTitle}>Edit Profile</h1>
                            <form onSubmit={handleSubmit}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="fullname" className={styles.formLabel}>Full Name:</label>
                                    <input type="text" name="fullname" id="fullname" value={editedData.fullname} onChange={handleInputChange} className={styles.formControl} />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="address" className={styles.formLabel}>Address:</label>
                                    <input type="text" name="address" id="address" value={editedData.address} onChange={handleInputChange} className={styles.formControl} />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="province" className={styles.formLabel}>Province:</label>
                                    <input type="text" name="province" id="province" value={editedData.province} onChange={handleInputChange} className={styles.formControl} />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="post_code" className={styles.formLabel}>Post Code:</label>
                                    <input type="text" name="post_code" id="post_code" value={editedData.post_code} onChange={handleInputChange} className={styles.formControl} />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="tel" className={styles.formLabel}>Tel:</label>
                                    <input type="text" name="tel" id="tel" value={editedData.tel} onChange={handleInputChange} className={styles.formControl} />
                                </div>
                                <div className={styles.formGroup}>
                                    <button type="submit" className={styles.formSubmitBtn}>Save Changes</button>
                                    <button type="button" onClick={toggleEditMode} className={styles.formCancelBtn}>Cancel</button>
                                </div>
                            </form>
                        </>
                    ) : (
                        <>
                            <h1 className={styles.profileCardTitle}>User Details</h1>
                            <div className={styles.profileInfo}>
                                <div className={styles.profileInfoItem}>
                                    <span className={styles.profileInfoLabel}>Full Name:</span>
                                    <span className={styles.profileInfoValue}>{userData.fullname}</span>
                                </div>
                                <div className={styles.profileInfoItem}>
                                    <span className={styles.profileInfoLabel}>Address:</span>
                                    <span className={styles.profileInfoValue}>{userData.address}</span>
                                </div>
                                <div className={styles.profileInfoItem}>
                                    <span className={styles.profileInfoLabel}>Province:</span>
                                    <span className={styles.profileInfoValue}>{userData.province}</span>
                                </div>
                                <div className={styles.profileInfoItem}>
                                    <span className={styles.profileInfoLabel}>Post Code:</span>
                                    <span className={styles.profileInfoValue}>{userData.post_code}</span>
                                </div>
                                <div className={styles.profileInfoItem}>
                                    <span className={styles.profileInfoLabel}>Tel:</span>
                                    <span className={styles.profileInfoValue}>{userData.tel}</span>
                                </div>
                            </div>
                            <button onClick={toggleEditMode} className={styles.profileEditBtn}>Edit Profile</button>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default Profile;
