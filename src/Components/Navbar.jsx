import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import logo from '../Static/logo/techpro.svg'
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./navbar.css";
import { auth, db } from "../Firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import loggeduser from "./Dashboard"

import {
    getAuth,
    signInWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth";


const Container = styled.div`
/* @media only screen and (min-width: 600px){
        
        width: 100%;

    } */
`

const Wrapper = styled.div`
    height: 60px;
    background-color: white;
    display: flex;
    padding: 10px 20px;
    align-items:center;
    justify-content: space-between;

    @media only screen and (max-width: 500px){
        /* width: 63%; */
        /* position: fixed; */
        /* flex-direction: row-reverse; */
        justify-content: space-between;
        width: 100vw;
        padding: 0 0;
        top: 40px;
        
    }

    
`
const Logoimg = styled.img`
    width: 50px;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    
    `
const Language = styled.span`
    cursor: pointer;
`
const Searchcontainer = styled.div`
    width: 20vw;
    border: 4px solid var(--dark);
    display: flex;
    align-items: center;
    margin-left:25px;
    @media only screen and (max-width: 500px){
        position:relative;
        width: 10px;
        margin-left: 160px;
    }
`
const Input = styled.input`
    border:none;
    width:15vw;
    font-size: 1rem;
    font-weight: 500;
    height: 30px;
    color: black;
    outline: none;
    @media only screen and (max-width: 500px){
        display: none;
    }
    
    
    `
const Center = styled.div`
    flex:1;
    display: flex;
    text-align:center;
    align-items: center;
    @media only screen and (max-width: 500px){
        align-items: flex-start;
    }
    
    `
const Logo = styled.div`
    font-size:25px;
    /* font-family: 'Source Code Pro', monospace; */
    font-weight:700;
    transition: 2s linear;
    
    @media only screen and (max-width: 500px){
        font-size: 20px;
        font-family: 'Roboto', sans-serif;
        margin-right: 70px;
        display: block !important;
    }
`

const Right = styled.div`
    flex:1;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    @media only screen and (max-width: 500px){
        
    }
    `
const User = styled.img`
width:1rem;
min-width: 40px;
height: 1rem;
min-height: 60px;
box-shadow: 2px ;

    
`
const Menuitem = styled.div`
    text-transform:uppercase;
    cursor:pointer;
    margin-left:25px;
`



const Navbar = () => {
    const [uid, setuid] = useState("");
    const [adminid, setadminid] = useState("");

    const auth = getAuth();
    const docRef = doc(db, "users", "THQQujxGvtPv3lbMJaEi");
    const docSnap = async () => {
        var data = await getDoc(docRef);
        setadminid(data.data().uid);
    }
    // };
    docSnap();
    function GetCurrentUser() {

        const [user, setUser] = useState("");
        const usersCollectionRef = collection(db, "users");
        useEffect(() => {

            auth.onAuthStateChanged((userlogged) => {
                if (userlogged) {
                    setuid(userlogged.uid)
                    const getUsers = async () => {
                        const q = query(
                            collection(db, "users"),
                            where("uid", "==", userlogged.uid)
                        );
                        const data = await getDocs(q);
                        setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
                    };
                    getUsers();
                } else {
                    setUser(null);
                }
            });
        }, []);
        return user;
    }
    const loggeduser = GetCurrentUser();
    // if (loggeduser) { console.log(loggeduser[0]) }

    const navigate = useNavigate();
    const handleLogout = () => {
        auth.signOut().then(() => {
            navigate("/login");
        });
    };

    // const [cartdata, setcartdata] = useState([]);
    // if (loggeduser) {
    //     const getcartdata = async () => {
    //         const cartArray = [];
    //         const path = `cart-${loggeduser[0].uid}`;
    //         // console.log(path)
    //         getDocs(collection(db, path))
    //             .then((querySnapshot) => {
    //                 querySnapshot.forEach((doc) => {
    //                     // console.log(doc.id, " => ", doc.data());
    //                     cartArray.push({ ...doc.data(), id: doc.id });
    //                 });
    //                 setcartdata(cartArray);
    //                 // console.log('done')
    //             })
    //             .catch("Error error error");
    //     };
    //     getcartdata();
    // }


    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;

        setVisible(currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);

    }, [prevScrollPos, visible, handleScroll]);

    const navbarStyles = {
        position: 'fixed',
        height: '60px',
        width: '100%',
        backgroundColor: 'var(--light)',
        textAlign: 'center',
        transition: 'top 0.4s',
        zIndex: '12',

    }
    const render = () => {
        if (uid === adminid) {
            return <div><Link to="/AdminPanel">Admin Panel</Link></div>
        } else {
            return null;
        }
    }
    const register = () => {
        if (uid) {
            return null;
        } else {
            return <div><Link to='/signup'><button>Register</button></Link></div>;
        }
    }

    return (

        <Container style={{ ...navbarStyles, top: visible ? '2.5em' : '0px', boxShadow: visible ? 'none' : 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}>
            <Wrapper >

                <Left>
                    <Logoimg src={logo} />
                    <Logo style={{ display: visible ? 'none' : 'block' }}>TecProduct</Logo>
                </Left>
                <Center>
                </Center>
                <Right>
                    <div className="navbar">
                        <div className="LeftContainer">
                            <img src="" />
                        </div>
                        <div className="RightsContainer">
                            {!loggeduser && (
                                <nav>
                                    <Link to="/">
                                        <button>Home</button>
                                    </Link>
                                    <Link to="/signup">
                                        <button>Register</button>
                                    </Link>
                                    <Link to="/login">
                                        <button>Login</button>
                                    </Link>
                                    <div className="cart-btn">
                                        {/* <img src="" alt="no img" /> */}
                                        {/* <span className="cart-icon-css">0</span> */}
                                    </div>
                                    <Link to="/userprofile">
                                        <img src="" className="profile-icon" />
                                    </Link>
                                </nav>
                            )}

                            {loggeduser && (
                                <nav>
                                    <Link to="/">
                                        <button>Home</button>
                                    </Link>
                                    <div >{render()}
                                    </div>
                                    <div >{register()}
                                    </div>

                                    {/* <Link to='/login'><button>Login</button></ Link > */}

                                    {/* <div className="cart-btn">
                                        <Link to="/cartdata">
                                            <img src="" alt="no img" />
                                        </Link>
                                        <button className="cart-icon-css">{cartdata.length}</button>
                                    </div> */}

                                    {/* <Link to="/userprofile">
                                        <img src="" className="profile-icon" />
                                    </Link> */}
                                    <button className="logout-btn" onClick={handleLogout}>
                                        Logout
                                    </button>
                                </nav>
                            )}
                        </div>
                    </div>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
