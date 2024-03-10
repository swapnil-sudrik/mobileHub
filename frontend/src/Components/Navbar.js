import React, { useEffect, useState } from "react";
import { AlignJustify, Bell, ChevronDown, CircleUserRound, Download, Gift, Headphones, Heart, LogOut, MoreVertical, Package, Search, ShieldPlus, ShoppingBag, ShoppingCart, Sparkle, Tag, TrendingUp, Zap } from 'lucide-react';
import { Sidebar } from "primereact/sidebar";
import { Link } from "react-router-dom";
import data, { GetAllphones } from '../services/getAllPhones'

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        GetAllphones.getAllPhones().then((data) => setProducts(data));
    }, []);


    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);


    console.log(searchResults);
    console.log(searchTerm);
    console.log(showDropdown);


    const handleSearch = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
      
        // Filter data based on the search term
        const results = products.filter((item) => {
          if (typeof item.name === 'string') {
            return item.name.toLowerCase().includes(term.toLowerCase());
          }
          return false; // Skip non-string name property
        });
      
        setSearchResults(results);
        setShowDropdown(!!term); // Show dropdown if the search term is not empty
      };

    const handleSelect = (result) => {
        setSearchTerm(result);
        setShowDropdown(false);
    };



    return (
        <div className="w-100 fixed-top" style={{ backgroundColor: '#fff' }}>
            <div className="d-flex d-navbar" >

                <div className="hamburger-btn d-sm-block d-md-none d-lg-none ms-2" onClick={() => setVisible(true)}>
                    <AlignJustify size="30" />
                </div>
                <div className="app-name ms-5 mt-1 me-5">
                    <h5 className="name">MobileHub</h5>
                    <p className="lh-1 sub-name ms-2"><b style={{ color: 'gray' }}>Explore</b> <b className="plus-name">Plus <ShieldPlus size={12} /></b> </p>
                </div>
                <div className="search-box d-none d-sm-none d-md-block d-lg-block">
                    <div className="form-group has-search">
                        <Search className="form-control-feedback mt-1 ms-1" />
                        <input type="text"


                            value={searchTerm}
                            onChange={handleSearch}

                            className="form-control search-bar" placeholder="Search for products , Brands and More" />
                       
                    </div>
                </div>
               

                <div className=" menu-contain d-flex position-absolute end-0  align-items-center">
                    <ul>
                        <li className="nav-icon me-sm-3 me-md-3 me-lg-4">
                            <span className="menu-icons login">
                                <CircleUserRound size={22} /> Swapnil &nbsp;<ChevronDown className="chevron-down" size={20} />
                            </span>
                            {/* <!-- Popup menu for Menu Item 1 --> */}
                            <div className="popup-menu mt-1">
                                <div className="d-flex ">
                                    <Link to="/my-orders" className="popup-menu-item" style={{ width: '100%', textDecoration: 'none', color: 'black', display: 'flex' }}>
                                        <div className="me-2"><ShoppingBag size={20} /></div>
                                        <div>
                                            My Orders
                                        </div>
                                    </Link>
                                </div>

                                <div className="d-flex popup-menu-item">
                                    <div className="me-2"><CircleUserRound size={20} /></div>
                                    <div>My Profile</div>
                                </div>
                                <div className="d-flex popup-menu-item">
                                    <div className="me-2"><Zap size={20} color="yellow" /></div>
                                    <div>SuperCoin Zone</div>
                                </div>
                                <div className="d-flex popup-menu-item">
                                    <div className="me-2"><Sparkle size={20} /></div>
                                    <div>MobileHub Plus Zone </div>
                                </div>

                                {/* <div className="d-flex popup-menu-item">
                                    <div className="me-2"><Package size={20} /></div>
                                    <div>Orders</div>
                                </div> */}

                                <div className="d-flex popup-menu-item">
                                    <div className="me-2"><Heart size={20} /></div>
                                    <div>Wishlist (1) </div>
                                </div>
                                <div className="d-flex popup-menu-item">
                                    <div className="me-2"><Tag size={20} /></div>
                                    <div>Coupons</div>
                                </div>
                                <div className="d-flex popup-menu-item">
                                    <div className="me-2"><Gift size={20} /></div>
                                    <div>Gift Cards</div>
                                </div>
                                <div className="d-flex popup-menu-item">
                                    <div className="me-2"><Bell size={20} /></div>
                                    <div>Notification</div>
                                </div>
                                <div className="d-flex popup-menu-item">
                                    <div className="me-2"><LogOut size={20} /></div>
                                    <div>Logout</div>
                                </div>

                            </div>
                        </li>
                        <li className="nav-icon me-sm-3 me-md-3 me-lg-4">
                            <span className="menu-icons">
                                <Link to="/cart" style={{ textDecoration: 'none', color: 'black' }}>
                                    <ShoppingCart size={22} /> Cart
                                </Link>
                            </span>
                        </li>
                        <li className="nav-icon me-sm-3 me-md-3 me-lg-4">
                            <MoreVertical className="more-vertical" size={20} />
                            {/* <!-- Popup menu for Menu Item 1 --> */}
                            <div className="popup-menu1 justify-content-center position-absolute end-0 mt-1 me-1">
                                <div className="d-flex popup-menu-item">
                                    <div className="me-2"><Bell size={20} /></div>
                                    <div>Notification Preferences</div>
                                </div>
                                <div className="d-flex popup-menu-item">
                                    <div className="me-2"><Headphones size={20} /></div>
                                    <div>24x7 Customer Care</div>
                                </div>
                                <div className="d-flex popup-menu-item">
                                    <div className="me-2"><TrendingUp size={20} /></div>
                                    <div>Advertise</div>
                                </div>
                                <div className="d-flex popup-menu-item">
                                    <div className="me-2"><Download size={20} /></div>
                                    <div>Download App</div>
                                </div>
                            </div>
                        </li>
                        {/* <!-- Add more menu items as needed --> */}
                    </ul>
                    {/* <div className="nav-icon login me-sm-3 me-md-3 me-lg-4">
                        <span className="menu-icons login">
                            <CircleUserRound size={22} /> Login &nbsp;<ChevronDown className="chevron-down" size={20} />
                        </span>
                    </div>

                    <div className="nav-icon cart me-sm-3 me-md-3 me-lg-4" >
                        <span className="menu-icons">
                            <ShoppingCart size={22} /> Cart
                        </span>
                    </div>

                    <div className=" nav-icon avtar me-sm-3 me-md-3 me-lg-4">
                        <MoreVertical className="more-vertical" size={20} />
                       
                        <div className="menu-card justify-content-center position-absolute end-0  me-4">
                            <Card title="Title" subTitle="Subtitle" >
                                <p className="m-0">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                                    numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                                </p>
                            </Card>
                        </div>
                    </div> */}


                </div>
            </div>

            <div className="search-box-dup d-sm-block d-md-none d-lg-none p-3">
                <div className="form-group has-search">
                    <Search className="form-control-feedback mt-1 ms-1" />
                    <input type="text" className="form-control search-bar" placeholder="Search for products , Brands and More" />
                </div>
            </div>





            <Sidebar visible={visible} onHide={() => setVisible(false)}>
                <h2>Sidebar</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </Sidebar>


        </div>
    )
}

export default Navbar;