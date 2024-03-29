const usuallySpent = {
    museum: 2,
    shopping: 3,
    sights: 1.5
}
const mainActivitiesPerDay = 2

const city = 'new york'
const days = 3;
const totalPoints = 8
const preferences = {
    museum: 4 / totalPoints,
    shopping: 1 / totalPoints,
    sights: 3 / totalPoints
}
const spentHours = 8
const totalHours = spentHours * days // 24

const hours = {
    museum: totalHours * preferences.museum, // 24 * (4 / 8) = 24 * 0.5 = 12
    shopping: totalHours * preferences.shopping, // 24 * (1 / 8) = 3
    sights: totalHours * preferences.sights // 24 * (3 / 8) = 9
}
const totalMainActivities = mainActivitiesPerDay * days // 6

const numberOfActivities = {
    museum: hours.museum / usuallySpent.museum, // 12 / 2 = 6
    shopping: hours.shopping / usuallySpent.shopping, // 3 / 3 = 1
    sights: hours.sights / usuallySpent.sights, // 9 / 1.5 = 6,
}

function calculateNumOfMainActivities (numOfActivities, preference) {
    const result = numOfActivities * preference

    if (result > 0 && result < 1) {
        return 1
    }

    return Math.round(result)
}

const mainActivities = {
    museum: calculateNumOfMainActivities(numberOfActivities.museum, preferences.museum), // 6 * (4 / 8) = 6 * (1 / 2) = 3
    shopping: calculateNumOfMainActivities(numberOfActivities.shopping, preferences.shopping), // 1 * (1 / 8) = 1 / 8 = 0.125 ~ 1
    sights: calculateNumOfMainActivities(numberOfActivities.sights, preferences.sights) // 6 * (3 / 8) = 2.25 ~ 2

}

// https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyDYaVhAvMrNzI5UxA0vinTsJ2kZxb_tTkk&input=museums+in+new+york
const museums = [
    {
        "formatted_address": "Central Park West & 79th St, New York, NY 10024, United States",
        "geometry": {
            "location": {
                "lat": 40.7813241,
                "lng": -73.97398819999999
            },
            "viewport": {
                "northeast": {
                    "lat": 40.78267454999999,
                    "lng": -73.97198744999999
                },
                "southwest": {
                    "lat": 40.77975195,
                    "lng": -73.97557844999999
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png",
        "id": "d9dd2c58ebb5c5cb4d00b28db933b7e220a34b5a",
        "name": "American Museum of Natural History",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 1960,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/109201380518358075845/photos\">David Peres</a>"
                ],
                "photo_reference": "CmRaAAAAqe0nqIXtYuaKRHwaj4m1tNEIWHrGv_aAhUgps8RIiuVcABFfFOV0Vwtv69iJYfwRZbYqmTiCSYkBscjBYPKAht7Zogukr_rFSsUWXuYog-CQe4pB7UCaPSP933OSmkl5EhDXL21BnwTVmSr8Gw7BGCjfGhRkO-OXff3gjPLmyLP6YXXU44yi2w",
                "width": 4032
            }
        ],
        "place_id": "ChIJCXoPsPRYwokRsV1MYnKBfaI",
        "plus_code": {
            "compound_code": "Q2JG+GC New York, United States",
            "global_code": "87G8Q2JG+GC"
        },
        "rating": 4.5,
        "reference": "ChIJCXoPsPRYwokRsV1MYnKBfaI",
        "types": [
            "tourist_attraction",
            "museum",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 10376
    },
    {
        "formatted_address": "180 Greenwich St, New York, NY 10007, United States",
        "geometry": {
            "location": {
                "lat": 40.7114743,
                "lng": -74.0134432
            },
            "viewport": {
                "northeast": {
                    "lat": 40.71225617989272,
                    "lng": -74.00964974999999
                },
                "southwest": {
                    "lat": 40.70955652010728,
                    "lng": -74.01589875000001
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
        "id": "375f41aa9a1bff7c3766d2f5d80f21bd56487236",
        "name": "9/11 Memorial",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114413453011382126040/photos\">Steve Smith</a>"
                ],
                "photo_reference": "CmRaAAAAwqtW2lsMk3uA25eQRnaORPKasYXTe1nExBvdZshH9y8NbtfJhjwNsVo8FaxbSGWVP1yhzdGOKT3IqYbCnRdpTX2bfGsbiw-AI2TJfFQ6CDJxLd7EZD4CXnzyZ17CrUHJEhCFkJX7NDCAMKkuiNuOcqnmGhQ5JJJOuZPNJ_pMQuZCRTSOAjUodQ",
                "width": 3024
            }
        ],
        "place_id": "ChIJRcvoOxpawokR7R4dQMXMMPQ",
        "plus_code": {
            "compound_code": "PX6P+HJ New York, United States",
            "global_code": "87G7PX6P+HJ"
        },
        "rating": 4.8,
        "reference": "ChIJRcvoOxpawokR7R4dQMXMMPQ",
        "types": [
            "park",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 49509
    },
    {
        "formatted_address": "1000 5th Ave, New York, NY 10028, United States",
        "geometry": {
            "location": {
                "lat": 40.7794366,
                "lng": -73.963244
            },
            "viewport": {
                "northeast": {
                    "lat": 40.78025357989272,
                    "lng": -73.96137637010729
                },
                "southwest": {
                    "lat": 40.77755392010728,
                    "lng": -73.96407602989272
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png",
        "id": "f732f202150af1f14ae8a057a1014ceea6b33fc4",
        "name": "The Metropolitan Museum of Art",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 1836,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/109380573799411980997/photos\">Daniela Daniel</a>"
                ],
                "photo_reference": "CmRaAAAAK1Xpw2tSo4qAtLCfBamkMp1t__UUbmYZFyHzJMFfdiVBmpdEWLn1PKA6dcDgQZMSCOIVSuJ33GIYobMMQ1BVO7PWTYTg3lf2G_jEJDK9Izjt7I7pwqT_L7qpUDYhMjbZEhBRjoGoBH4nPZJVXL0Qr8AUGhSofi2q8aVXiQEtGGO-AWEa4B-OWw",
                "width": 3264
            }
        ],
        "place_id": "ChIJb8Jg9pZYwokR-qHGtvSkLzs",
        "plus_code": {
            "compound_code": "Q2HP+QP New York, United States",
            "global_code": "87G8Q2HP+QP"
        },
        "price_level": 3,
        "rating": 4.8,
        "reference": "ChIJb8Jg9pZYwokR-qHGtvSkLzs",
        "types": [
            "art_gallery",
            "tourist_attraction",
            "museum",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 51725
    },
    {
        "formatted_address": "11 W 53rd St, New York, NY 10019, United States",
        "geometry": {
            "location": {
                "lat": 40.7614327,
                "lng": -73.97762159999999
            },
            "viewport": {
                "northeast": {
                    "lat": 40.76300062989272,
                    "lng": -73.97613242010728
                },
                "southwest": {
                    "lat": 40.76030097010727,
                    "lng": -73.97883207989273
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png",
        "id": "05fd8501e2532c0ea3033bd3f3a282ffff502863",
        "name": "The Museum of Modern Art",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114120865189591629769/photos\">Rizki Ekananda</a>"
                ],
                "photo_reference": "CmRaAAAAOaS6FpykXmAfjNaC5ceAcqMS4gQ6UBqemnN_IN5QFZGKX219R868BJpowjHoQP-0ZPTSMUqctPiKTHtBQVEl3bSwQ2BmvhIKoEbYjl-_NMm0a6QtvmvvopoIZFfw42kUEhCMCZ_jW5xU-H3nZd46hK8wGhSF-lATqJPmVtAedl06ebL1f8ZiJw",
                "width": 4032
            }
        ],
        "place_id": "ChIJKxDbe_lYwokRVf__s8CPn-o",
        "plus_code": {
            "compound_code": "Q26C+HX New York, United States",
            "global_code": "87G8Q26C+HX"
        },
        "rating": 4.6,
        "reference": "ChIJKxDbe_lYwokRVf__s8CPn-o",
        "types": [
            "tourist_attraction",
            "museum",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 28155
    },
    {
        "formatted_address": "99 Gansevoort St, New York, NY 10014, United States",
        "geometry": {
            "location": {
                "lat": 40.7395877,
                "lng": -74.0088629
            },
            "viewport": {
                "northeast": {
                    "lat": 40.74081427989272,
                    "lng": -74.00790137010728
                },
                "southwest": {
                    "lat": 40.73811462010728,
                    "lng": -74.01060102989273
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png",
        "id": "6a6e35a1c9265a5f2b68cb954ba2c06c8dc19093",
        "name": "Whitney Museum of American Art",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113072149895039919432/photos\">Abbas Ramadan</a>"
                ],
                "photo_reference": "CmRaAAAATZi1pNIW8kkiAaDbilz9r33shCxYwyBCAxNEipCGVbdwu4y9EixTb8crE4ziI6cpaKUeGCY_ddkBarFA0VgGpCLx0waS3naRgo4r1Phfxz32Mxt0UB7tOIuLxG1gY6HAEhCRJN7G0fXIhQMmJMXCy92fGhT_J_fhlXFAa5ApCxOyDfc3AcgxVQ",
                "width": 4032
            }
        ],
        "place_id": "ChIJN3MJ6pRYwokRiXg91flSP8Y",
        "plus_code": {
            "compound_code": "PXQR+RF New York, United States",
            "global_code": "87G7PXQR+RF"
        },
        "rating": 4.5,
        "reference": "ChIJN3MJ6pRYwokRiXg91flSP8Y",
        "types": [
            "tourist_attraction",
            "museum",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 8013
    },
    {
        "formatted_address": "1071 5th Ave, New York, NY 10128, United States",
        "geometry": {
            "location": {
                "lat": 40.7829796,
                "lng": -73.9589706
            },
            "viewport": {
                "northeast": {
                    "lat": 40.78443592989273,
                    "lng": -73.95776212010728
                },
                "southwest": {
                    "lat": 40.78173627010729,
                    "lng": -73.96046177989271
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png",
        "id": "aa09742d854b00192daed833e2a56750587e8185",
        "name": "Solomon R. Guggenheim Museum",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 2993,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108034158598021551223/photos\">stephane blondeau</a>"
                ],
                "photo_reference": "CmRaAAAAEWr1qrSS2y-MtCtKvZFBVfrPZ0DeUBAQ01QLL4LUV815311YydUK19BhnI94s4n2PVq77k5XC_dt9ZH0Eti5NAyenRWKXaaoHmryOj26VkaY1fvfFnPn22QLKEg0je9EEhDqTrbXfrqLyKhgX-uFGF-RGhTv-5l-7awbt1B9NSRhm6rgToPWWQ",
                "width": 5345
            }
        ],
        "place_id": "ChIJmZ5emqJYwokRuDz79o0coAQ",
        "plus_code": {
            "compound_code": "Q2MR+5C Manhattan, New York, NY, United States",
            "global_code": "87G8Q2MR+5C"
        },
        "rating": 4.3,
        "reference": "ChIJmZ5emqJYwokRuDz79o0coAQ",
        "types": [
            "tourist_attraction",
            "museum",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 13697
    },
    {
        "formatted_address": "1220 5th Ave, New York, NY 10029, United States",
        "geometry": {
            "location": {
                "lat": 40.7924939,
                "lng": -73.95190889999999
            },
            "viewport": {
                "northeast": {
                    "lat": 40.79392767989272,
                    "lng": -73.95075292010728
                },
                "southwest": {
                    "lat": 40.79122802010727,
                    "lng": -73.95345257989271
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png",
        "id": "d94854c5dd4ca2bcb7ce25e3084ce1dba11d56d1",
        "name": "Museum of the City of New York",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107606227159646590286/photos\">Carolyn B.</a>"
                ],
                "photo_reference": "CmRaAAAAG2SVHBYZGd89LtZMXRUnWNYM_KD83DhSB9yB0GASvkJNbXWj6Of3Vledi9S53O7pyr8n1JCLxOqy7atC0oGMIEDOvMh1FlJ3PQzsqmLDRwxSHk9ffNgb3uQLaBxJIN2kEhBK5bBprDuyACDYF8obPlrDGhRwsk1HwBShuIpBvM0mGT0HCFkXEA",
                "width": 1960
            }
        ],
        "place_id": "ChIJi4hYtB32wokR1Npx_Tv7phk",
        "plus_code": {
            "compound_code": "Q2RX+X6 New York, United States",
            "global_code": "87G8Q2RX+X6"
        },
        "price_level": 1,
        "rating": 4.4,
        "reference": "ChIJi4hYtB32wokR1Npx_Tv7phk",
        "types": [
            "tourist_attraction",
            "museum",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 3374
    },
    {
        "formatted_address": "99 Margaret Corbin Dr, New York, NY 10040, United States",
        "geometry": {
            "location": {
                "lat": 40.8648628,
                "lng": -73.9317274
            },
            "viewport": {
                "northeast": {
                    "lat": 40.86665500000001,
                    "lng": -73.9246285
                },
                "southwest": {
                    "lat": 40.86222299999999,
                    "lng": -73.93519849999998
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png",
        "id": "8edf774a665aeb294a6d6cf8df4405f4824f7e4f",
        "name": "The Met Cloisters",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 3456,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/118235277430475715703/photos\">Laszlo Varga</a>"
                ],
                "photo_reference": "CmRaAAAAt9JirNlnMlFnKGRjQni_KcRyo1qE9MXWFcALZIznYVUKm5MBXV-azQhJhhk6VOo10tuTHtCowMdzhMLTkfxXjt3unfvRsOAOEYhgszZhG-a4TBFjpihf5lVNoF4tbv9BEhDZIwkcjmIPg2Ym3uOJwqZlGhQEx8bBmNuJ-9nJVZyfdq2yB4gCMw",
                "width": 4608
            }
        ],
        "place_id": "ChIJK6bycAH0wokRrSnflfrnkZE",
        "plus_code": {
            "compound_code": "V379+W8 New York, United States",
            "global_code": "87G8V379+W8"
        },
        "rating": 4.7,
        "reference": "ChIJK6bycAH0wokRrSnflfrnkZE",
        "types": [
            "tourist_attraction",
            "museum",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 4075
    },
    {
        "formatted_address": "1 E 70th St, New York, NY 10021, United States",
        "geometry": {
            "location": {
                "lat": 40.771209,
                "lng": -73.96739909999999
            },
            "viewport": {
                "northeast": {
                    "lat": 40.77240572989272,
                    "lng": -73.96604297010727
                },
                "southwest": {
                    "lat": 40.76970607010727,
                    "lng": -73.96874262989272
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png",
        "id": "87e936eb75a829e0363d510c2060a6621f83f9c7",
        "name": "The Frick Collection",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 2896,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/102857992969265935402/photos\">Cary Mason</a>"
                ],
                "photo_reference": "CmRaAAAAqayRlyaIzmMvJzpBq9JT_8zgtFB8hODBqhJ5vUUC-PywfHQDfDtIrh1ls9NMtEgchldo_vnCT8Rnfksc4kqa-WTjFsFXjVyEP225IjEYTu2BToSOF-4su9xKY5If_KuiEhAQD_GKgbCxR-ucccq5sKu6GhQYx8U4vwJAV1z0UNwk-K2A9BOZLA",
                "width": 5152
            }
        ],
        "place_id": "ChIJHRH97uxYwokR6CBeDyn1jtg",
        "plus_code": {
            "compound_code": "Q2CM+F2 New York, United States",
            "global_code": "87G8Q2CM+F2"
        },
        "price_level": 2,
        "rating": 4.6,
        "reference": "ChIJHRH97uxYwokR6CBeDyn1jtg",
        "types": [
            "tourist_attraction",
            "museum",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 2818
    },
    {
        "formatted_address": "170 Central Park West, New York, NY 10024, United States",
        "geometry": {
            "location": {
                "lat": 40.7792476,
                "lng": -73.9742792
            },
            "viewport": {
                "northeast": {
                    "lat": 40.78073622989272,
                    "lng": -73.97271212010727
                },
                "southwest": {
                    "lat": 40.77803657010728,
                    "lng": -73.97541177989272
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png",
        "id": "58fec942ca75a6d83d1b6c6ff242c405c77741bf",
        "name": "New-York Historical Society",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 3120,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104658623054351200412/photos\">ANDREAS STVR</a>"
                ],
                "photo_reference": "CmRaAAAA229WBqVTY9xyWOYFHercm1OUnEHAmXglcdE4AG7-lsZU91zBlE3RAjWHEyb6bmJK928FPcj4G4BtG5jcbEi7s8OS0YjlAIt5od1v4m1E4JZF3mqmVBSNVJjXZiYL3h4gEhCW1x1h6zlM9GLmNEwMn9IaGhRsVdaaimL7RCla4Dvhqu6oBZdPow",
                "width": 4160
            }
        ],
        "place_id": "ChIJIVEyfY5YwokRXqcWLrl5XVA",
        "plus_code": {
            "compound_code": "Q2HG+M7 New York, United States",
            "global_code": "87G8Q2HG+M7"
        },
        "rating": 4.4,
        "reference": "ChIJIVEyfY5YwokRXqcWLrl5XVA",
        "types": [
            "museum",
            "library",
            "tourist_attraction",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 302
    },
    {
        "formatted_address": "Pier 86, W 46th St, New York, NY 10036, United States",
        "geometry": {
            "location": {
                "lat": 40.7645266,
                "lng": -73.99960759999999
            },
            "viewport": {
                "northeast": {
                    "lat": 40.76578527989272,
                    "lng": -73.99790007010728
                },
                "southwest": {
                    "lat": 40.76308562010728,
                    "lng": -74.00059972989273
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png",
        "id": "6bb43beb2047e4db91e332d24782460ccf8194c2",
        "name": "Intrepid Sea, Air & Space Museum",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114077917842256400830/photos\">isi sanchez</a>"
                ],
                "photo_reference": "CmRaAAAAINFS77YKe9eCnm5YT5GLP64Dk0bjipZlC7JWr6z72HLbUrCI_LX6cEd0yTYH_IByJIu31s2czb3k8pgDurJhVp9iCx3AR8oOr9tuINixM0C33uHzvALzShW-rFMDXQShEhDi5PjooYgYA3lCpOF_LBlpGhR3luhLQmOuTf1svSc2txdxJ5fHOQ",
                "width": 5312
            }
        ],
        "place_id": "ChIJnxlg1U5YwokR8T90UrZiIwI",
        "plus_code": {
            "compound_code": "Q272+R5 New York, United States",
            "global_code": "87G8Q272+R5"
        },
        "rating": 4.6,
        "reference": "ChIJnxlg1U5YwokR8T90UrZiIwI",
        "types": [
            "museum",
            "tourist_attraction",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 24729
    },
    {
        "formatted_address": "200 Eastern Pkwy, Brooklyn, NY 11238, United States",
        "geometry": {
            "location": {
                "lat": 40.6712062,
                "lng": -73.9636306
            },
            "viewport": {
                "northeast": {
                    "lat": 40.6729825,
                    "lng": -73.9613173
                },
                "southwest": {
                    "lat": 40.66878529999999,
                    "lng": -73.9655441
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png",
        "id": "50536f2341830cb033e6342fb2e123d88fb5262b",
        "name": "Brooklyn Museum",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116890497769207595290/photos\">Jeffrey Rozman</a>"
                ],
                "photo_reference": "CmRaAAAAnxWt42NmPEdtdTBsNU_s-AQnlwbrRGGuNNEKhwRfbi1taFnB42yjDpWlqPle7_5yVY8XJbk3saTFg70zlbGgxW6D8louBroPwMI58540ImDP-JjBhruqt7KGFeA8Y0p2EhABkv4k7dbq07Qn5kqWvF9VGhRr5PFSyAWO0nwymEt_SgDBcev4WA",
                "width": 4032
            }
        ],
        "place_id": "ChIJyTmcRApbwokR-oXJRqpVI8Y",
        "plus_code": {
            "compound_code": "M2CP+FG New York, United States",
            "global_code": "87G8M2CP+FG"
        },
        "rating": 4.6,
        "reference": "ChIJyTmcRApbwokR-oXJRqpVI8Y",
        "types": [
            "tourist_attraction",
            "museum",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 7384
    },
    {
        "formatted_address": "235 Bowery, New York, NY 10002, United States",
        "geometry": {
            "location": {
                "lat": 40.7223376,
                "lng": -73.9928905
            },
            "viewport": {
                "northeast": {
                    "lat": 40.72373397989272,
                    "lng": -73.99167337010728
                },
                "southwest": {
                    "lat": 40.72103432010728,
                    "lng": -73.99437302989273
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png",
        "id": "0c931c5c3800bc979d8a5c41a5ecc1f0e619ebf6",
        "name": "New Museum",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 5312,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/112714959103005771392/photos\">A Google User</a>"
                ],
                "photo_reference": "CmRaAAAAgpml3nqtxx-QWdzZDufKFPUeHrxxYGm6E36oECaX2DCc2fugftowN7yARdre-d6v2Hr_eUrcVCUf5fo0ErSACLmyx5EcrfI74OpkgJ-TFFFG1A8D-JYT69bwfXrzI_LeEhD1eMy3Zyq2l8fTyrag1D5xGhRjx08kTgpWUsYgDwCjLguKdNvTjQ",
                "width": 2988
            }
        ],
        "place_id": "ChIJlaRS3IVZwokR2llMD6dCt-U",
        "plus_code": {
            "compound_code": "P2C4+WR New York, United States",
            "global_code": "87G8P2C4+WR"
        },
        "price_level": 3,
        "rating": 4.1,
        "reference": "ChIJlaRS3IVZwokR2llMD6dCt-U",
        "types": [
            "tourist_attraction",
            "museum",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 1755
    },
    {
        "formatted_address": "1109 5th Ave, New York, NY 10128, United States",
        "geometry": {
            "location": {
                "lat": 40.78542059999999,
                "lng": -73.95729340000001
            },
            "viewport": {
                "northeast": {
                    "lat": 40.78681892989272,
                    "lng": -73.95605572010727
                },
                "southwest": {
                    "lat": 40.78411927010728,
                    "lng": -73.95875537989272
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png",
        "id": "7e70161e79b35f22bbed634aa39ac58ee498ff31",
        "name": "The Jewish Museum",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 3036,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/118232725281532773411/photos\">Janet Ng</a>"
                ],
                "photo_reference": "CmRaAAAAkWZMB8XjQIcNpOY15lJjJaCEpbT15GAK1pBbW1xzOjJhZ7BJRuDI7eomWsJvQ_3BO1sSTnk8oZOOeT8bWzKEN5H2wFlGph0IGQUOHdmZVhtyRYzFkFKw6UNefOtsJT5bEhA8-Ryox0jyrewu1sqQzXZ5GhQze7wQRI7zmbbt2XF95le4BXHAEw",
                "width": 4048
            }
        ],
        "place_id": "ChIJYWLHOqJYwokRmkVum_hd7Ss",
        "plus_code": {
            "compound_code": "Q2PV+53 New York, United States",
            "global_code": "87G8Q2PV+53"
        },
        "price_level": 2,
        "rating": 4.4,
        "reference": "ChIJYWLHOqJYwokRmkVum_hd7Ss",
        "types": [
            "museum",
            "point_of_interest",
            "store",
            "establishment"
        ],
        "user_ratings_total": 1086
    },
    {
        "formatted_address": "1048 5th Ave, New York, NY 10028, United States",
        "geometry": {
            "location": {
                "lat": 40.781264,
                "lng": -73.9603267
            },
            "viewport": {
                "northeast": {
                    "lat": 40.78269692989272,
                    "lng": -73.95889522010727
                },
                "southwest": {
                    "lat": 40.77999727010728,
                    "lng": -73.96159487989271
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png",
        "id": "8b233f81d7007bf5f3ffe3d3c2b8397ebf24a4f3",
        "name": "Neue Galerie",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 2592,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/112817120802210365276/photos\">KChan P</a>"
                ],
                "photo_reference": "CmRaAAAA8PlspAleKGOTpLJEOEk9z3RfSABEFJrs8qoshI6tUntzbnPI0-2PIPolJ0oKSaveUaN4c78k7l6FSOaYfehgOXsJwBtCJd-Hvze_1vwcS2pCx6OZ644SP5fSeL7jES2LEhA56L_Rsh2dQQrDK6dnS3JyGhS8fDIDexsroLcbjI_tlsqawcSo7g",
                "width": 1936
            }
        ],
        "place_id": "ChIJ01_9-ZdYwokRL2JrA28GJp8",
        "plus_code": {
            "compound_code": "Q2JQ+GV New York, United States",
            "global_code": "87G8Q2JQ+GV"
        },
        "price_level": 3,
        "rating": 4.5,
        "reference": "ChIJ01_9-ZdYwokRL2JrA28GJp8",
        "types": [
            "art_gallery",
            "tourist_attraction",
            "museum",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 1622
    },
    {
        "formatted_address": "103 Orchard St, New York, NY 10002, United States",
        "geometry": {
            "location": {
                "lat": 40.7187958,
                "lng": -73.99006969999999
            },
            "viewport": {
                "northeast": {
                    "lat": 40.72023837989272,
                    "lng": -73.98863987010728
                },
                "southwest": {
                    "lat": 40.71753872010728,
                    "lng": -73.99133952989271
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png",
        "id": "bf04c672d6730db2dc6a68816bbc53eb870c993a",
        "name": "Tenement Museum",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106048252159271746773/photos\">Philipp Klöckner</a>"
                ],
                "photo_reference": "CmRaAAAAgb4goLaA8OY3AbptSmldw6AiXX-qf4z2PgIhlUcsQeM8Z-BBNAujRlK-Gpid50l8CW0DSe-ZHB1r7Jx24zuCjD7htIwAay65qTFTz29DuUKiuPPk7iHJRUXP7DBgeucPEhBoYi-f6sgaiOGldCxU-nL0GhSkLuV09uoj2QZGmHV40FTUpv-uRA",
                "width": 4032
            }
        ],
        "place_id": "ChIJ20bVJYdZwokRhI7esP3mYM0",
        "plus_code": {
            "compound_code": "P295+GX New York, United States",
            "global_code": "87G8P295+GX"
        },
        "rating": 4.6,
        "reference": "ChIJ20bVJYdZwokRhI7esP3mYM0",
        "types": [
            "tourist_attraction",
            "museum",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 2829
    },
    {
        "formatted_address": "2 E 91st St, New York, NY 10128, United States",
        "geometry": {
            "location": {
                "lat": 40.7843958,
                "lng": -73.95787319999999
            },
            "viewport": {
                "northeast": {
                    "lat": 40.78559567989272,
                    "lng": -73.95645302010729
                },
                "southwest": {
                    "lat": 40.78289602010728,
                    "lng": -73.95915267989274
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png",
        "id": "892116964e6b56ed90b0021e93e89b8a5a0bd294",
        "name": "Cooper Hewitt Smithsonian Design Museum",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 3264,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114679084468604983057/photos\">Maureen Shaiman</a>"
                ],
                "photo_reference": "CmRaAAAABNfrDlv0UCC3_CQ3aBlxK_K1Hzvozz-Q4vJxs5PkSEBhYf45Iywc4ImSRas5fBitnRcG8XRrD7FL3kSC63_IUEq-p_M_Ui5rbv-IQXKZVwACMyfHWf_x5av3sJVIa0vpEhDd5TEEsB-DodgpauVsSlAwGhSkXdFDiOQM0ljAGRPt-nYCIP9uEg",
                "width": 2448
            }
        ],
        "place_id": "ChIJsT8qSaJYwokR-m20OGJUKCA",
        "plus_code": {
            "compound_code": "Q2MR+QV New York, United States",
            "global_code": "87G8Q2MR+QV"
        },
        "rating": 4.5,
        "reference": "ChIJsT8qSaJYwokR-m20OGJUKCA",
        "types": [
            "museum",
            "tourist_attraction",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 1997
    },
    {
        "formatted_address": "225 Madison Ave, New York, NY 10016, United States",
        "geometry": {
            "location": {
                "lat": 40.7492258,
                "lng": -73.9813971
            },
            "viewport": {
                "northeast": {
                    "lat": 40.75043277989272,
                    "lng": -73.98018382010729
                },
                "southwest": {
                    "lat": 40.74773312010728,
                    "lng": -73.98288347989273
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png",
        "id": "1b5b32c5d96bd02e586f1d2dfcef7ca9aa848373",
        "name": "The Morgan Library & Museum",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/106374821987284223368/photos\">Trevor Cook</a>"
                ],
                "photo_reference": "CmRaAAAAtpbhabd1HoYUxfjyYScBQrjkH6wwnew_qVeU9E4HTWrglGv4dpxE9ymWnlHNLl271cv_X7trwHnwLHASFls3kJCubvQ4JRTSJ6PjAev5xXqgZxhgOb-VKLQN5zoaYH56EhBA0qfAHdz0G1sglUedYsNrGhRYcy6ajvnyfQNtJk_h4hp0Jeo7lw",
                "width": 3024
            }
        ],
        "place_id": "ChIJ3453OAdZwokRja92OOKCugM",
        "plus_code": {
            "compound_code": "P2X9+MC New York, United States",
            "global_code": "87G8P2X9+MC"
        },
        "price_level": 2,
        "rating": 4.7,
        "reference": "ChIJ3453OAdZwokRja92OOKCugM",
        "types": [
            "tourist_attraction",
            "museum",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 2571
    },
    {
        "formatted_address": "150 W 17th St, New York, NY 10011, United States",
        "geometry": {
            "location": {
                "lat": 40.7400671,
                "lng": -73.9977244
            },
            "viewport": {
                "northeast": {
                    "lat": 40.74150957989272,
                    "lng": -73.99628432010728
                },
                "southwest": {
                    "lat": 40.73880992010728,
                    "lng": -73.99898397989271
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png",
        "id": "3c44481e57f7b64872922bc9d9f0599188234aff",
        "name": "Rubin Museum of Art",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 1152,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/112714959103005771392/photos\">A Google User</a>"
                ],
                "photo_reference": "CmRaAAAAH1FQ5vbou6fmx3e4KcmbD8w2U1cyNrPVjAH9kJo4mqsgcqT_ZhnpXyA-hkmxujTUjd27RlFhg-Mjr3oNyl6XAUosQ5yt0pVlDP7t5xXp54a7NYvYzJpMXV9ah5T-1iB2EhDdkCkO7c9jjt7bbnU-Wf_xGhRDH6LCUwveomWqsXwzJVpgx_CMRw",
                "width": 2048
            }
        ],
        "place_id": "ChIJD4QSVbxZwokRaFPDajZtIaI",
        "plus_code": {
            "compound_code": "P2R2+2W New York, United States",
            "global_code": "87G8P2R2+2W"
        },
        "price_level": 2,
        "rating": 4.6,
        "reference": "ChIJD4QSVbxZwokRaFPDajZtIaI",
        "types": [
            "cafe",
            "museum",
            "food",
            "point_of_interest",
            "store",
            "establishment"
        ],
        "user_ratings_total": 1373
    },
    {
        "formatted_address": "36 Battery Pl, New York, NY 10280, United States",
        "geometry": {
            "location": {
                "lat": 40.7059752,
                "lng": -74.01857889999999
            },
            "viewport": {
                "northeast": {
                    "lat": 40.70736827989273,
                    "lng": -74.01717252010727
                },
                "southwest": {
                    "lat": 40.70466862010728,
                    "lng": -74.01987217989272
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png",
        "id": "54efe427bcab3624edf646abf40dfd7b8e2692e5",
        "name": "Museum of Jewish Heritage – A Living Memorial to the Holocaust",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103551061368575820324/photos\">michael allen</a>"
                ],
                "photo_reference": "CmRaAAAA8nvzzx1Cu9d55sZCDpZxJU4CC1Oad8jH3g3GEDHZDvKL9A9tpAi9kakGDH5v1YWSQzhOzr1104GDSrZdES5MBsJ5PWyFyMUrUDfw9u261-pr7IWgF5bMuk-A7KB8pfvUEhDZGbtucxwPgevWiFVBTuHYGhTwtckNyfPj-CA7FTvBX2pFUXnBnA",
                "width": 3024
            }
        ],
        "place_id": "ChIJYTeZ_BFawokRe_SRVX_pKIs",
        "plus_code": {
            "compound_code": "PX4J+9H New York, United States",
            "global_code": "87G7PX4J+9H"
        },
        "rating": 4.6,
        "reference": "ChIJYTeZ_BFawokRe_SRVX_pKIs",
        "types": [
            "tourist_attraction",
            "museum",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 1255
    }
];

// https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyDYaVhAvMrNzI5UxA0vinTsJ2kZxb_tTkk&input=shopping+in+new+york
const shoppings = [
    {
        "formatted_address": "185 Greenwich St, New York, NY 10007, United States",
        "geometry": {
            "location": {
                "lat": 40.7115663,
                "lng": -74.01142609999999
            },
            "viewport": {
                "northeast": {
                    "lat": 40.7157842,
                    "lng": -74.00838699999998
                },
                "southwest": {
                    "lat": 40.7075974,
                    "lng": -74.01639859999999
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
        "id": "5fd9855f3162a0eddc350ba4d81e12b1ba725725",
        "name": "Westfield World Trade Center",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 2160,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107561147580170705808/photos\">Greg Mickelson</a>"
                ],
                "photo_reference": "CmRaAAAA7lqBx1IhCh45jF-XVUMEGMzrgS4B0D0yi884d4uysGjzuw6v9BPe7IFcJ3Y6vVohBAJm5SdBwl-TPSiHnIGMG-Sftk0hwV6-coB9cwAJ_FTJlcBbyJJHXNf63R-tWQCEEhBfrRaTl7NyZ0hM7AhGA3HiGhR2YXp307xW5-V4fgHIYDCi5xRMpA",
                "width": 2880
            }
        ],
        "place_id": "ChIJ4fd_MRpawokRHr3yLkECrOE",
        "plus_code": {
            "compound_code": "PX6Q+JC New York, United States",
            "global_code": "87G7PX6Q+JC"
        },
        "rating": 4.6,
        "reference": "ChIJ4fd_MRpawokRHr3yLkECrOE",
        "types": [
            "shopping_mall",
            "department_store",
            "shoe_store",
            "restaurant",
            "food",
            "point_of_interest",
            "clothing_store",
            "store",
            "establishment"
        ],
        "user_ratings_total": 40326
    },
    {
        "formatted_address": "10 Columbus Cir, New York, NY 10019, United States",
        "geometry": {
            "location": {
                "lat": 40.7685966,
                "lng": -73.9832141
            },
            "viewport": {
                "northeast": {
                    "lat": 40.76962147989272,
                    "lng": -73.98135497010728
                },
                "southwest": {
                    "lat": 40.76692182010727,
                    "lng": -73.98405462989273
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
        "id": "63543c9ef29f2a3e695988e01f33632131fcab88",
        "name": "The Shops at Columbus Circle",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116507382416807671621/photos\">mamrak s</a>"
                ],
                "photo_reference": "CmRaAAAA8T42QqHtic_fyBAxyX9rCNm7IDetLIheEfmPbshDFn1KAxDlIYqi7dFpTQgaoBDWafydrjce4MFnPkxZ_eb9-r2vhBUkI3m8KZwL6z-ZxXvEsq_Z9ZRIZJZGeu10qRoHEhD98e82h3XpXCFlifygp5AWGhS_rJNMvsjiDtAS-7I1z6idrzC0iw",
                "width": 4032
            }
        ],
        "place_id": "ChIJp3PsL_ZYwokRdBcE-3KTjrg",
        "plus_code": {
            "compound_code": "Q298+CP New York, United States",
            "global_code": "87G8Q298+CP"
        },
        "rating": 4.4,
        "reference": "ChIJp3PsL_ZYwokRdBcE-3KTjrg",
        "types": [
            "shopping_mall",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 6366
    },
    {
        "formatted_address": "230 Vesey St, New York, NY 10281, United States",
        "geometry": {
            "location": {
                "lat": 40.7127168,
                "lng": -74.01528239999999
            },
            "viewport": {
                "northeast": {
                    "lat": 40.71704714999998,
                    "lng": -74.01279765000001
                },
                "southwest": {
                    "lat": 40.70759135000001,
                    "lng": -74.01744905
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
        "id": "30005ece85c57803e290712f5f70ffc105849cb9",
        "name": "Brookfield Place",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 4096,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100163719018103483989/photos\">Tobias Gebhardt</a>"
                ],
                "photo_reference": "CmRaAAAATpF5kA7zq-AwKLqhj0nr9uGsuWbYqupu4iX48pnkHvYmNEhv8CcCMWgBa7N8pFtlTJ9nrgqsVOjEubVhIsISGvkEtGBSP92HgxwSOiIIKY_l2jrutKpUXKbJKdkF51f-EhAeMZP2de9IQBegqS2fQh3DGhT-4wZ56PpCyAcd0e4WMWuwaPSH9g",
                "width": 3072
            }
        ],
        "place_id": "ChIJy8jTDBtawokRB9wNyxemSw8",
        "plus_code": {
            "compound_code": "PX7M+3V New York, United States",
            "global_code": "87G7PX7M+3V"
        },
        "rating": 4.5,
        "reference": "ChIJy8jTDBtawokRB9wNyxemSw8",
        "types": [
            "shopping_mall",
            "tourist_attraction",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 10982
    },
    {
        "formatted_address": "315 W 39th St, New York, NY 10018, United States",
        "geometry": {
            "location": {
                "lat": 40.7559712,
                "lng": -73.99204519999999
            },
            "viewport": {
                "northeast": {
                    "lat": 40.75721577989272,
                    "lng": -73.99077262010728
                },
                "southwest": {
                    "lat": 40.75451612010727,
                    "lng": -73.99347227989273
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
        "id": "f5f347f8a0a8ef4102ade971db12aa7761e76ec8",
        "name": "Shopping Girlfriend NYC",
        "place_id": "ChIJUdrSNb5ZwokRsoOdOHCNBQk",
        "plus_code": {
            "compound_code": "Q245+95 New York, United States",
            "global_code": "87G8Q245+95"
        },
        "rating": 5,
        "reference": "ChIJUdrSNb5ZwokRsoOdOHCNBQk",
        "types": [
            "clothing_store",
            "point_of_interest",
            "store",
            "establishment"
        ],
        "user_ratings_total": 5
    },
    {
        "formatted_address": "151 W 34th St, New York, NY 10001, United States",
        "geometry": {
            "location": {
                "lat": 40.7508025,
                "lng": -73.98948349999999
            },
            "viewport": {
                "northeast": {
                    "lat": 40.75207577989272,
                    "lng": -73.98642935000001
                },
                "southwest": {
                    "lat": 40.74937612010728,
                    "lng": -73.99188154999999
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
        "id": "e04114820206890ff0155d2f7a6f7efc0903fb9b",
        "name": "Macy's",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 3456,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107940185863834141395/photos\">Reino Hornson</a>"
                ],
                "photo_reference": "CmRaAAAAPHkpa4v1rn1ly5pr-Pv8OyJLxx-6z0HmtpBaVvPjmpN5gDmOi15ah20-1-e276Sy7yT48eTGORUME72wPR3wxhTMSjS_xjJS-oAWUaHEdoIAT82pGvltZED5Y6WWBa_JEhA79hcKvH43B6Tx6FGrUiGBGhSJaKZaXATSE8FC4rNrPUpeD5PYaw",
                "width": 4608
            }
        ],
        "place_id": "ChIJ3xjWra5ZwokRrwJ0KZ4yKNs",
        "plus_code": {
            "compound_code": "Q226+86 New York, United States",
            "global_code": "87G8Q226+86"
        },
        "price_level": 2,
        "rating": 4.4,
        "reference": "ChIJ3xjWra5ZwokRrwJ0KZ4yKNs",
        "types": [
            "department_store",
            "shoe_store",
            "jewelry_store",
            "furniture_store",
            "home_goods_store",
            "point_of_interest",
            "clothing_store",
            "store",
            "establishment"
        ],
        "user_ratings_total": 44745
    },
    {
        "formatted_address": "651 Kapkowski Rd, Elizabeth, NJ 07201, United States",
        "geometry": {
            "location": {
                "lat": 40.659951,
                "lng": -74.17107059999999
            },
            "viewport": {
                "northeast": {
                    "lat": 40.66184267989272,
                    "lng": -74.16997637010728
                },
                "southwest": {
                    "lat": 40.65914302010728,
                    "lng": -74.17267602989273
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
        "id": "c7e42a7b648220b40a72556cf8c79d83cecb0835",
        "name": "The Mills at Jersey Gardens",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 3366,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/115685821098189347393/photos\">Juan Matus</a>"
                ],
                "photo_reference": "CmRaAAAAztCFojQVIm2_ccuIWDEsNzzcXUNux7XqMMvCAbAS1w3hPMvlQv2YyvRsMSHeoKZzJKhP01tfZNeXAuXOUOL5-fJf8D55Cv6_q11B2oWdkn-XkF5I0weYY00MTGAjEqfIEhC_MRbmc6yy_wdRZOwdxNVmGhQavD6H1ZwDQhH-5M8EHUw57H2AIQ",
                "width": 5984
            }
        ],
        "place_id": "ChIJixQeNIBNwokRItXUV8ujLjQ",
        "plus_code": {
            "compound_code": "MR5H+XH Elizabeth, New Jersey, United States",
            "global_code": "87G7MR5H+XH"
        },
        "rating": 4.5,
        "reference": "ChIJixQeNIBNwokRItXUV8ujLjQ",
        "types": [
            "shopping_mall",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 23971
    },
    {
        "formatted_address": "265 Canal St, New York, NY 10013, United States",
        "geometry": {
            "location": {
                "lat": 40.719019,
                "lng": -74.00081899999999
            },
            "viewport": {
                "northeast": {
                    "lat": 40.72026372989272,
                    "lng": -73.99959577010728
                },
                "southwest": {
                    "lat": 40.71756407010728,
                    "lng": -74.00229542989273
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
        "id": "3dc47a058422d2e9a43b2809a73d6c3eb6553866",
        "name": "Canal Street Market",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 3120,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/109985045391397612947/photos\">A Google User</a>"
                ],
                "photo_reference": "CmRaAAAALDXqBazG5vzo61-a5RcLvUUhe9jfrNUL-h30AdDt7Z3C0jaGbhjc501ZNZjCw7ZuDAIVkppgWfTkx8C4uCaUX1udR37ybpm68Y7wlgQ4I70tPBGHzEt-1uwur5ldQNbSEhCk1ndD5axl8GvleXTsfOISGhS2v9vdFOOSmKC1TCJQqtEX7gRoXw",
                "width": 4160
            }
        ],
        "place_id": "ChIJ3bYqHIpZwokRWKXxj76uK4g",
        "plus_code": {
            "compound_code": "PX9X+JM New York, United States",
            "global_code": "87G7PX9X+JM"
        },
        "price_level": 1,
        "rating": 4.3,
        "reference": "ChIJ3bYqHIpZwokRWKXxj76uK4g",
        "types": [
            "shopping_mall",
            "tourist_attraction",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 1790
    },
    {
        "formatted_address": "866 2nd Ave 2nd floor, New York, NY 10017, United States",
        "geometry": {
            "location": {
                "lat": 40.752506,
                "lng": -73.969917
            },
            "viewport": {
                "northeast": {
                    "lat": 40.75390702989272,
                    "lng": -73.96868882010727
                },
                "southwest": {
                    "lat": 40.75120737010727,
                    "lng": -73.97138847989272
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
        "id": "b3c7b4915357628dbb439e19b4244d45a4418485",
        "name": "Diplomatic Duty Free Shops of New York",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 3264,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/112951117553580124228/photos\">Diplomatic Duty Free Shops of New York</a>"
                ],
                "photo_reference": "CmRaAAAA9JY9NvZl2SDmOknDWWuJvcPoO8lCKU01ahGOgu4ZGjzG_NQPIRK9HW0SW45B1cgzBXNjjFDapSH3DYQnnjOua8OJZgE8C6ZfaFuFdVF-WyQ2VXriusrZGxNMqbTky_JyEhArXM2Gckq3UcU2plZES1ZzGhRdEP__wrJcUOChAUvfnHuWETZxFg",
                "width": 2448
            }
        ],
        "place_id": "ChIJIfKmQx1ZwokRAiuTngo5f_A",
        "plus_code": {
            "compound_code": "Q23J+22 New York, United States",
            "global_code": "87G8Q23J+22"
        },
        "rating": 4.6,
        "reference": "ChIJIfKmQx1ZwokRAiuTngo5f_A",
        "types": [
            "jewelry_store",
            "food",
            "point_of_interest",
            "clothing_store",
            "store",
            "establishment"
        ],
        "user_ratings_total": 60
    },
    {
        "formatted_address": "200 Broadway, New York, NY 10038, United States",
        "geometry": {
            "location": {
                "lat": 40.7104876,
                "lng": -74.0090043
            },
            "viewport": {
                "northeast": {
                    "lat": 40.71200432989272,
                    "lng": -74.00761427010728
                },
                "southwest": {
                    "lat": 40.70930467010728,
                    "lng": -74.01031392989272
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
        "id": "826f68f33573c08e39ba0c1a4d1eb68fbfb9cd4f",
        "name": "The Fulton Center",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 2358,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105601223861302663909/photos\">Jin Yoshikawa</a>"
                ],
                "photo_reference": "CmRaAAAA0JAdb9PGUSZBSLrDE1uYx1vkq-CdpxRmhK1keINjkIky-qb8uts4EwQZHFenTTpdA4vDJzwsL8hpXqqzi-06XX9PkzuUgcedIKDJ6MeBDoB74pek9rCjZm_b0TcOnjNUEhAwX5ON5unlLVfBuWambWmqGhQiZxuYtcTJFzrZ2g24XKgu83oVOg",
                "width": 3143
            }
        ],
        "place_id": "ChIJnetYyxlawokRY_-b4ZXbI7Q",
        "plus_code": {
            "compound_code": "PX6R+59 New York, United States",
            "global_code": "87G7PX6R+59"
        },
        "rating": 4.4,
        "reference": "ChIJnetYyxlawokRY_-b4ZXbI7Q",
        "types": [
            "shopping_mall",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 4033
    },
    {
        "formatted_address": "827 Broadway, New York, NY 10003, United States",
        "geometry": {
            "location": {
                "lat": 40.73369659999999,
                "lng": -73.9913313
            },
            "viewport": {
                "northeast": {
                    "lat": 40.73502532989272,
                    "lng": -73.98982232010728
                },
                "southwest": {
                    "lat": 40.73232567010727,
                    "lng": -73.99252197989273
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
        "id": "4c0370cfeb7840e64c360e5207aad91b97d2fce2",
        "name": "The Shops NYC",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 4000,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116439060354903944411/photos\">A Google User</a>"
                ],
                "photo_reference": "CmRaAAAAK6pSwtO3jUrzdF-jaeLxDEYhyy-v4mxA--jlSLojH1LWxehzB1ZSdai3icJVjjLNut6UyQanmtDY0TeCg6QOiD7tpw8L5lPxDbTuZ46DBi7uCSntbfJhpYf9-1nq0uVsEhDvIOEgMRMXpV4inX-eOKeGGhTTocuCCmrRULqPeoWtR2ZuAsxHDQ",
                "width": 6000
            }
        ],
        "place_id": "ChIJqXH5lrNZwokRbEzb80shRmw",
        "plus_code": {
            "compound_code": "P2M5+FF New York, United States",
            "global_code": "87G8P2M5+FF"
        },
        "rating": 5,
        "reference": "ChIJqXH5lrNZwokRbEzb80shRmw",
        "types": [
            "shopping_mall",
            "point_of_interest",
            "store",
            "establishment"
        ],
        "user_ratings_total": 2
    },
    {
        "formatted_address": "176 Mulberry St, New York, NY 10013, United States",
        "geometry": {
            "location": {
                "lat": 40.7201939,
                "lng": -73.99683379999999
            },
            "viewport": {
                "northeast": {
                    "lat": 40.72155702989271,
                    "lng": -73.99553952010727
                },
                "southwest": {
                    "lat": 40.71885737010727,
                    "lng": -73.99823917989272
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
        "id": "ef915f60bb057cca4031021eaf7393a3b5aec5b6",
        "name": "Soho mall",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 1840,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107574013959340578435/photos\">Luigi Rotondaro</a>"
                ],
                "photo_reference": "CmRaAAAAQYe0QgMKh70mIQRGuqr1a8oWbXs-IwsKpCqu2OA-62vV2hJla4G3W4_DtAPjC43YsIVaeuhx66nEd_Ln7cgl_VgzPoYedPZrjGgo4QqocCRrtF1byyXYvLhR73gsjEuQEhCHNolPDZhFaZmjhbJ_gDvXGhRZBkrVn4Mb7bZUwD1_-w-b73jj_w",
                "width": 3264
            }
        ],
        "place_id": "ChIJE4EvH4lZwokRi8iUv0FSbGk",
        "plus_code": {
            "compound_code": "P2C3+37 New York, United States",
            "global_code": "87G8P2C3+37"
        },
        "rating": 4.3,
        "reference": "ChIJE4EvH4lZwokRi8iUv0FSbGk",
        "types": [
            "shopping_mall",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 411
    },
    {
        "formatted_address": "47 W 20th St, New York, NY 10011, United States",
        "geometry": {
            "location": {
                "lat": 40.7410753,
                "lng": -73.9937405
            },
            "viewport": {
                "northeast": {
                    "lat": 40.74233992989272,
                    "lng": -73.99245307010727
                },
                "southwest": {
                    "lat": 40.73964027010727,
                    "lng": -73.99515272989271
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
        "id": "0810f49018fb50e720e1eab4ba852ccb858f7d34",
        "name": "Limelight Shops",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 4160,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116279612783720660471/photos\">Nico Kwan</a>"
                ],
                "photo_reference": "CmRaAAAAuLtuRqP0WNY06rTdu4Su1pwG37w5ElS_ItV7e_qSbw6CHMXN1qvDZxRIum4VNjHlAaYNWGc68ZYYViRyl2UORYY9uw6bF-b_U8FX99_YPwFgyPipuhPe_XH7ARgDcw-pEhA8MBr9Qsw3M7Br8u2h5FZ6GhRf-en1mbGda2VfBJx-3sH8ei6OqA",
                "width": 3120
            }
        ],
        "place_id": "ChIJhbETRaNZwokRYxrLpnVTijg",
        "plus_code": {
            "compound_code": "P2R4+CG New York, United States",
            "global_code": "87G8P2R4+CG"
        },
        "rating": 3.7,
        "reference": "ChIJhbETRaNZwokRYxrLpnVTijg",
        "types": [
            "shopping_mall",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 74
    },
    {
        "formatted_address": "1080 6th Ave, New York, NY 10018, United States",
        "geometry": {
            "location": {
                "lat": 40.7541983,
                "lng": -73.9843549
            },
            "viewport": {
                "northeast": {
                    "lat": 40.75558172989272,
                    "lng": -73.98308802010727
                },
                "southwest": {
                    "lat": 40.75288207010728,
                    "lng": -73.98578767989272
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
        "id": "2327fe71bccfb4acd603d34ccbba73cc65bd5edf",
        "name": "Holiday Shops",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 1360,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/107208996529469056888/photos\">Nick Miller</a>"
                ],
                "photo_reference": "CmRaAAAAIru8HlKIFD7oaX_0qqw7_mxGHZbNPO9deAOjXpWHnMo7ee9n4uOlQfyTxRbKcf8HILvIoXUG1mdiL3mDoQIF6xGRsPfvdLxpluhftS-nUv-hcKADINgyEbv1FMWnpbtUEhBG8DE3126VITCbEKUtaa55GhRkBh_URTB-vJFE-VZvv9EgWmZzVg",
                "width": 11765
            }
        ],
        "place_id": "ChIJiw2FwKpZwokRc4os3hUbAYg",
        "plus_code": {
            "compound_code": "Q238+M7 New York, United States",
            "global_code": "87G8Q238+M7"
        },
        "rating": 4.4,
        "reference": "ChIJiw2FwKpZwokRc4os3hUbAYg",
        "types": [
            "shopping_mall",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 10
    },
    {
        "formatted_address": "Church St, New York, NY 10006, United States",
        "geometry": {
            "location": {
                "lat": 40.711399,
                "lng": -74.0111462
            },
            "viewport": {
                "northeast": {
                    "lat": 40.71272837989273,
                    "lng": -74.00981802010728
                },
                "southwest": {
                    "lat": 40.71002872010729,
                    "lng": -74.01251767989271
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
        "id": "b45aa5eac23f1e9d3bedcb29dbde59625556d366",
        "name": "The Oculus",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/102801923201177821628/photos\">Akhila Maheedhara</a>"
                ],
                "photo_reference": "CmRZAAAAjnzLMFKnRFek5xUgT5aKfCRzazPxTO2QYQ7RBK0Pz6ta0KzUVXap5aRDkHVPXo7XTiOMlP1G3j7EWJFnCGNK_wEdj_QA3LrCDaABZACQkBIWQiHys9KiXlJoIuo3AJwnEhDTFjYa7wUx1HcrfivzIDn7GhRYpoo5n1GeS8WhXKH_FGP_QwcOtg",
                "width": 4032
            }
        ],
        "place_id": "ChIJIzH1VxdawokR_r1xf38gNeU",
        "plus_code": {
            "compound_code": "PX6Q+HG New York, United States",
            "global_code": "87G7PX6Q+HG"
        },
        "rating": 4.6,
        "reference": "ChIJIzH1VxdawokR_r1xf38gNeU",
        "types": [
            "shopping_mall",
            "tourist_attraction",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 6674
    },
    {
        "formatted_address": "1125 Madison Ave, New York, NY 10028, United States",
        "geometry": {
            "location": {
                "lat": 40.779633,
                "lng": -73.95926399999999
            },
            "viewport": {
                "northeast": {
                    "lat": 40.78105582989272,
                    "lng": -73.95809227010727
                },
                "southwest": {
                    "lat": 40.77835617010728,
                    "lng": -73.96079192989272
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
        "id": "c383297ccdd1501f6c69685378165e16d1a0379c",
        "name": "Michael's, The Consignment Shop for Women",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 4048,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114108716307454763438/photos\">Eric Lee</a>"
                ],
                "photo_reference": "CmRaAAAAEFFEq56cUArzmF39d2Bytd02qNN4zz2va_VBFa8cn2zoex0qE-euAoDQfL1Jmxollx-IklcvwqbBf3A4cEJlXP1-3H4fz_LIg1VTsOqK6VFLxtYiBo6_fxlrVfhAf7FYEhAWfCDHR97b6893xPC3muYEGhTSgnwWei0G2k4kbcQnjiLciSEy3A",
                "width": 3036
            }
        ],
        "place_id": "ChIJCz0I15VYwokRWwJb-C1gnhA",
        "plus_code": {
            "compound_code": "Q2HR+V7 New York, United States",
            "global_code": "87G8Q2HR+V7"
        },
        "price_level": 3,
        "rating": 4.7,
        "reference": "ChIJCz0I15VYwokRWwJb-C1gnhA",
        "types": [
            "point_of_interest",
            "clothing_store",
            "store",
            "establishment"
        ],
        "user_ratings_total": 164
    },
    {
        "formatted_address": "53-83 Water St, Brooklyn, NY 11201, United States",
        "geometry": {
            "location": {
                "lat": 40.7033814,
                "lng": -73.9916008
            },
            "viewport": {
                "northeast": {
                    "lat": 40.70468722989272,
                    "lng": -73.99025362010728
                },
                "southwest": {
                    "lat": 40.70198757010728,
                    "lng": -73.99295327989273
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
        "id": "22227bd300dba2735071b0ac79b7d76ec7d803fc",
        "name": "Empire Stores",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103863014953345470027/photos\">Justina Dong</a>"
                ],
                "photo_reference": "CmRaAAAAdojyAiwfAE6R9l6HK9ozcCNklX3ExDaSpjxulUS3S4ooXPB2cnJT0vCB7wvo4obTNiCPUmn3VuNfJI5dwS0O_8OIwP2jsY0IDga1c-aV5eJcN6xvd8Gob_KsHCUoguWREhCS1ykCdwoLZoWeyIpgw4-WGhSDB49pnnigVAEp6ECNezN0lmI0Pw",
                "width": 3024
            }
        ],
        "place_id": "ChIJR58zHDFawokRN15P2jS9i8Q",
        "plus_code": {
            "compound_code": "P235+99 New York, United States",
            "global_code": "87G8P235+99"
        },
        "rating": 4.4,
        "reference": "ChIJR58zHDFawokRN15P2jS9i8Q",
        "types": [
            "shopping_mall",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 837
    },
    {
        "formatted_address": "1600 Broadway, New York, NY 10019, United States",
        "geometry": {
            "location": {
                "lat": 40.7601999,
                "lng": -73.9843601
            },
            "viewport": {
                "northeast": {
                    "lat": 40.76153587989272,
                    "lng": -73.98304872010726
                },
                "southwest": {
                    "lat": 40.75883622010728,
                    "lng": -73.98574837989271
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
        "id": "bd8be5cf66986f2f833e52c9b33e819008e4021e",
        "name": "M&M's World",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/109440356524536721444/photos\">Nancy Medrano</a>"
                ],
                "photo_reference": "CmRZAAAAmP7v3ERBoa9V9CbDDIrnT5_0ZrBhzaqd7peNO-WoJFn2PbmQOAd-8LPH_ZdDF_MLrgko4Cz5BACaxJJzWFBSW7LwRPFcaUnsb7fnTGHnBIwGAELfVRY_y_MaA3wVwegsEhCj7jZzh17CMiZYFVOHBelKGhRM0Z4h8FNiBuGKP1PLvfj4xFG1Hw",
                "width": 3817
            }
        ],
        "place_id": "ChIJHfPuClZYwokRP2wzLQjhuEI",
        "plus_code": {
            "compound_code": "Q268+37 New York, United States",
            "global_code": "87G8Q268+37"
        },
        "price_level": 2,
        "rating": 4.3,
        "reference": "ChIJHfPuClZYwokRP2wzLQjhuEI",
        "types": [
            "tourist_attraction",
            "food",
            "point_of_interest",
            "clothing_store",
            "store",
            "establishment"
        ],
        "user_ratings_total": 18602
    },
    {
        "formatted_address": "90-15 Queens Blvd, Elmhurst, NY 11373, United States",
        "geometry": {
            "location": {
                "lat": 40.7347226,
                "lng": -73.870041
            },
            "viewport": {
                "northeast": {
                    "lat": 40.73594182989272,
                    "lng": -73.86832055000002
                },
                "southwest": {
                    "lat": 40.73324217010728,
                    "lng": -73.87191514999999
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
        "id": "fa4ed3537b03de812d6993a06d7802bcba1659ea",
        "name": "Queens Center",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 561,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101942558435621293018/photos\">Queens Center</a>"
                ],
                "photo_reference": "CmRaAAAAUEaaRFlOeNTZszZHGnYCOw0HRjjnEHH32IHoxqhCHe2Qk4iv5KbJu_FNWXEdYiOgC2liAYCNdrvZ_DSjIRxi_o6hwkbig5eWoXdFQSzC0ckb1N6IhK-6EXTRnToYDq-rEhBOYaDiJ8j3JFFqNHIYH-hXGhRG1G53tbf6iL04VdakqnyVeqawmw",
                "width": 1200
            }
        ],
        "place_id": "ChIJA7Ciw0tewokRWJrqRqhFJBs",
        "plus_code": {
            "compound_code": "P4MH+VX Elmhurst, Queens, NY, United States",
            "global_code": "87G8P4MH+VX"
        },
        "rating": 4.4,
        "reference": "ChIJA7Ciw0tewokRWJrqRqhFJBs",
        "types": [
            "shopping_mall",
            "restaurant",
            "food",
            "point_of_interest",
            "clothing_store",
            "store",
            "establishment"
        ],
        "user_ratings_total": 18228
    },
    {
        "formatted_address": "30 Rockefeller Plaza, New York, NY 10112, United States",
        "geometry": {
            "location": {
                "lat": 40.75932,
                "lng": -73.980058
            },
            "viewport": {
                "northeast": {
                    "lat": 40.76043257989272,
                    "lng": -73.97859177010727
                },
                "southwest": {
                    "lat": 40.75773292010728,
                    "lng": -73.98129142989272
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
        "id": "9c151ae558f436e7effae0407f1d9380fa4da5c5",
        "name": "The Shop at NBC Studios",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/115371989112527875325/photos\">Miss K S</a>"
                ],
                "photo_reference": "CmRaAAAAytnQONh5Zp2I4GbXNOx9yYiLSr588zsRaRQZfjC27H2sk7WwPADukpUoPFKTnvZy1NdTTQcTXRWPEHAPOmAHc3Cxjt2hAFDxs-uGG0xetFJXdfaVrIe5beGUb3t3EmwPEhCH_Bzp2dpns3n4sX878XYwGhRuL_rUZAHUCtMkwaHVD0JbLL3wkA",
                "width": 4032
            }
        ],
        "place_id": "ChIJNZvR1v5YwokRadepdoJ17Vg",
        "plus_code": {
            "compound_code": "Q259+PX New York, United States",
            "global_code": "87G8Q259+PX"
        },
        "rating": 4.3,
        "reference": "ChIJNZvR1v5YwokRadepdoJ17Vg",
        "types": [
            "point_of_interest",
            "store",
            "establishment"
        ],
        "user_ratings_total": 488
    },
    {
        "formatted_address": "100 Stanton St, New York, NY 10002, United States",
        "geometry": {
            "location": {
                "lat": 40.721378,
                "lng": -73.98793499999999
            },
            "viewport": {
                "northeast": {
                    "lat": 40.72269012989273,
                    "lng": -73.98660477010728
                },
                "southwest": {
                    "lat": 40.71999047010728,
                    "lng": -73.98930442989273
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/shopping-71.png",
        "id": "7ce4e98eb6f448a97a6c0b89c2a2b72764f5c651",
        "name": "Frankie Shop",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 1000,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103874940217484605070/photos\">Frankie Shop</a>"
                ],
                "photo_reference": "CmRaAAAA69ksAe5J4M1bz1dUvH_I3KsOzprw9Il1IfBxrfp8TLCKQefruNzPMaez_b5T990ZZhlxf58Vcn2dUQu5PLgZRff4mHIlL3-Mnf8Gr_cPUYkzbNFfW6COwVUQ_8RcmIBrEhAru3aExp_lNLcQI34zrZlKGhRf7M2v3h81ogojo1FrIGFvM9MlYg",
                "width": 1500
            }
        ],
        "place_id": "ChIJORGs44NZwokRhDErUHPgmMk",
        "plus_code": {
            "compound_code": "P2C6+HR New York, United States",
            "global_code": "87G8P2C6+HR"
        },
        "rating": 3.9,
        "reference": "ChIJORGs44NZwokRhDErUHPgmMk",
        "types": [
            "point_of_interest",
            "clothing_store",
            "store",
            "establishment"
        ],
        "user_ratings_total": 24
    }
];

// https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyDYaVhAvMrNzI5UxA0vinTsJ2kZxb_tTkk&input=sights+in+new+york
const sights = [
    {
        "formatted_address": "285 Fulton St, New York, NY 10006, United States",
        "geometry": {
            "location": {
                "lat": 40.7133444,
                "lng": -74.0133677
            },
            "viewport": {
                "northeast": {
                    "lat": 40.71436417989273,
                    "lng": -74.01215482010727
                },
                "southwest": {
                    "lat": 40.71166452010728,
                    "lng": -74.0148544798927
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
        "id": "48cd459142d91a750ab1ac00141e799d2a7c1bfb",
        "name": "One World Observatory",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/108283279102222266133/photos\">Edu Bernabeu</a>"
                ],
                "photo_reference": "CmRaAAAAGQR9DTkcLYj67hPUI0gLXaWTFMThjuf5qf9Z-5FyRZYBh1Azn14__KVUrceaXrTOLCfff1tvnZOG4GzTF9EvCbLyjwF9XwZtoAgPoQFmu7_9FfqZbeLmIG3oTonhnH_gEhBSoMdnefH609LZsQpQ-8WEGhSVlhZLZbvcKX3YqD3RsYyb_MdplA",
                "width": 4032
            }
        ],
        "place_id": "ChIJTWE_0BtawokRVJNGH5RS448",
        "plus_code": {
            "compound_code": "PX7P+8M New York, United States",
            "global_code": "87G7PX7P+8M"
        },
        "price_level": 3,
        "rating": 4.7,
        "reference": "ChIJTWE_0BtawokRVJNGH5RS448",
        "types": [
            "tourist_attraction",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 12820
    },
    {
        "formatted_address": "Pier 83, W 42nd St, New York, NY 10036, United States",
        "geometry": {
            "location": {
                "lat": 40.762831,
                "lng": -74.00165799999999
            },
            "viewport": {
                "northeast": {
                    "lat": 40.76408687989272,
                    "lng": -74.00013512010726
                },
                "southwest": {
                    "lat": 40.76138722010727,
                    "lng": -74.00283477989271
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
        "id": "ba3406273eb1f31bd0f035811077c8c567e935d8",
        "name": "Circle Line Sightseeing Cruises",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 1908,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/101762770749257473928/photos\">Jason</a>"
                ],
                "photo_reference": "CmRaAAAAT_w5o5awBh2r2-pwXs2ugi21jlBxfZI8syWrlW3BUcp3LVKr6zrYztr2z8Ep-cPv8sZYmuYDw2QqLG2IGbsONPz28FtgEASCjnIHoHGK1l2DG78V5QvfpQgeJk2q42mREhDIOS3Z6K4OrWg2P0xnqh7DGhThHBAgapE_OiSbCYkLCkXjD1Gehw",
                "width": 4032
            }
        ],
        "place_id": "ChIJNfIGsapZwokR6wmdPMZEBbU",
        "plus_code": {
            "compound_code": "QX7X+48 New York, United States",
            "global_code": "87G7QX7X+48"
        },
        "rating": 4.4,
        "reference": "ChIJNfIGsapZwokR6wmdPMZEBbU",
        "types": [
            "tourist_attraction",
            "travel_agency",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 6932
    },
    {
        "formatted_address": "26 Wall St, New York, NY 10005, United States",
        "geometry": {
            "location": {
                "lat": 40.7073993,
                "lng": -74.0102088
            },
            "viewport": {
                "northeast": {
                    "lat": 40.70866077989272,
                    "lng": -74.00893902010728
                },
                "southwest": {
                    "lat": 40.70596112010728,
                    "lng": -74.01163867989273
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png",
        "id": "b3fe6301d045106e1267fae5357e6f2aaab812f8",
        "name": "Federal Hall",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 2268,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/100160108500772954150/photos\">Colin Davidson</a>"
                ],
                "photo_reference": "CmRaAAAAjP5tG491ZWkM49v4FTqf8rtFqBsFDhPRii49AunwZpUobu1WmoEjd0hgh55a62UhvrDZejglXTGsti9HareOxOkx6Pj7IUb0MjH3YV8xHQxQmC1-2sbbaE1_NuKykDjKEhCXybtx9GgQe-8-hwW71AGtGhRLqDLwdHuN2-u0u_50Dltg76J-_w",
                "width": 4032
            }
        ],
        "place_id": "ChIJAaIFAxdawokR8txc3YPbD3A",
        "plus_code": {
            "compound_code": "PX4Q+XW New York, United States",
            "global_code": "87G7PX4Q+XW"
        },
        "rating": 4.5,
        "reference": "ChIJAaIFAxdawokR8txc3YPbD3A",
        "types": [
            "museum",
            "tourist_attraction",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 1976
    },
    {
        "formatted_address": "216 W 44th St, New York, NY 10036, United States",
        "geometry": {
            "location": {
                "lat": 40.757584,
                "lng": -73.98699499999999
            },
            "viewport": {
                "northeast": {
                    "lat": 40.75899787989272,
                    "lng": -73.98559902010727
                },
                "southwest": {
                    "lat": 40.75629822010728,
                    "lng": -73.98829867989271
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
        "id": "22c5ab41a505113233d98ef454e1a9a91100f713",
        "name": "Gulliver's Gate",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/115350660446414495867/photos\">Lautaro Aristeo</a>"
                ],
                "photo_reference": "CmRaAAAAI6AA_XfeTntOCUQVA0JRe2laCm_X9XnQhJ-HiIdI6Hf9HbevzGJnyr-KRH5QeyH3bL_gQqZ2sIcz5AwOu019t8-dmTruzwmGL-VM9jcQfZEUPjk0qpm3MzM_sYkWUxxkEhDfL6usH7akqMKA24Fwzhf6GhTOcw156MzNZHhQWaDPDk46a-cqTQ",
                "width": 1960
            }
        ],
        "place_id": "ChIJB3jt8VRYwokR3usmhiCep0o",
        "plus_code": {
            "compound_code": "Q257+26 New York, United States",
            "global_code": "87G8Q257+26"
        },
        "rating": 4.6,
        "reference": "ChIJB3jt8VRYwokR3usmhiCep0o",
        "types": [
            "tourist_attraction",
            "museum",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 2309
    },
    {
        "formatted_address": "In Front of Patrick's Restaurant, 259 W 42nd St, New York, NY 10036, New York, NY 10018, United States",
        "geometry": {
            "location": {
                "lat": 40.75720949999999,
                "lng": -73.98933099999999
            },
            "viewport": {
                "northeast": {
                    "lat": 40.75858872989273,
                    "lng": -73.98813967010727
                },
                "southwest": {
                    "lat": 40.75588907010728,
                    "lng": -73.99083932989272
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
        "id": "eb9543dc7417e65fdd548dfed3526eee62ecf684",
        "name": "THE RIDE NYC",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 994,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104347066770012315269/photos\">The Ride, Inc.</a>"
                ],
                "photo_reference": "CmRaAAAA08qtIHQKGMoD-QKXg6QmdvLi0gC6mO08QlChN3EA39BPQ5CX8pRfiPTgoNidewg2twLOAO8YyDgU88bllVxzpW_Oxdm2L6Lmcun7zz-rs430jSNxrjaLRCFII8HnovphEhDfy5NOxZBQg2G24zEXK94_GhRDlpCiHLAgtp1ttynG27o45NV64A",
                "width": 1500
            }
        ],
        "place_id": "ChIJ8VOfr1RYwokRf7vY-6TOTD4",
        "plus_code": {
            "compound_code": "Q246+V7 New York, United States",
            "global_code": "87G8Q246+V7"
        },
        "rating": 4.2,
        "reference": "ChIJ8VOfr1RYwokRf7vY-6TOTD4",
        "types": [
            "tourist_attraction",
            "travel_agency",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 1839
    },
    {
        "formatted_address": "455 12th Ave, New York, NY 10018, United States",
        "geometry": {
            "location": {
                "lat": 40.759683,
                "lng": -74.00393799999999
            },
            "viewport": {
                "northeast": {
                    "lat": 40.76103282989271,
                    "lng": -74.00258817010727
                },
                "southwest": {
                    "lat": 40.75833317010727,
                    "lng": -74.00528782989271
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
        "id": "c39213d2329c93a0aa891d3ecc1a9980f5dc3eaa",
        "name": "City Sightseeing New York",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 2268,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/102560212606821739544/photos\">Andy Schocher</a>"
                ],
                "photo_reference": "CmRaAAAAeAG99X9wM_yPUztcm_-yLoZ_ladhi8kHOWOWxGCPpqrBCK5rO0H-zgwv0qe0hKxvizbKV-sVrBrZRpQeT634ngl8pokzWfDjE-TQ8M3PinTA-tRFwQgEL_AyjfublHfPEhBxIJK-5GWXAn3JnrBkDFqLGhQ8nYNSr6xa0en7RTiVQbJkkcHE5Q",
                "width": 4032
            }
        ],
        "place_id": "ChIJfU1wXrFZwokR_MtjKYjWfOU",
        "plus_code": {
            "compound_code": "QX5W+VC New York, United States",
            "global_code": "87G7QX5W+VC"
        },
        "rating": 3.8,
        "reference": "ChIJfU1wXrFZwokR_MtjKYjWfOU",
        "types": [
            "travel_agency",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 1347
    },
    {
        "formatted_address": "20 W 34th St, New York, NY 10001, United States",
        "geometry": {
            "location": {
                "lat": 40.7484405,
                "lng": -73.98566439999999
            },
            "viewport": {
                "northeast": {
                    "lat": 40.74971142989272,
                    "lng": -73.98392452010728
                },
                "southwest": {
                    "lat": 40.74701177010728,
                    "lng": -73.98662417989271
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
        "id": "bc232d2422e7068b2a2ffb314f02e3733dd47796",
        "name": "Empire State Building",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 2268,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111965016703714111960/photos\">Muhammet Ali Can</a>"
                ],
                "photo_reference": "CmRaAAAAXkEIXkThTK_B_9iXR04GNoI33MKG5qCLZ-nUAaLI1WWU7atrueWG1FLLbU5NFDPF0OJEPD2jesb3e-LlI9pvoH7nRbSseB55yPQR53kBpMfr0AoSaa3bGacSUYVVrfcjEhAYNVdqzvGhT_geBysefSm3GhSYoWiIQjSxoFNDVkkTailD2Cyunw",
                "width": 4032
            }
        ],
        "place_id": "ChIJaXQRs6lZwokRY6EFpJnhNNE",
        "plus_code": {
            "compound_code": "P2X7+9P New York, United States",
            "global_code": "87G8P2X7+9P"
        },
        "rating": 4.7,
        "reference": "ChIJaXQRs6lZwokRY6EFpJnhNNE",
        "types": [
            "tourist_attraction",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 66715
    },
    {
        "formatted_address": "New York, NY 10004, United States",
        "geometry": {
            "location": {
                "lat": 40.6892494,
                "lng": -74.04450039999999
            },
            "viewport": {
                "northeast": {
                    "lat": 40.71814749999999,
                    "lng": -73.99872490000001
                },
                "southwest": {
                    "lat": 40.6796167,
                    "lng": -74.05975889999998
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
        "id": "5a0d7e67078e35af0c456a277df9ffba7c1e4da6",
        "name": "Statue of Liberty National Monument",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 712,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/102313103442381376457/photos\">A Google User</a>"
                ],
                "photo_reference": "CmRaAAAAvbfmGNuEc99hPn-AUvD3CYCGTFhDNDQlk39TCmXduNqrtjwdwOVmx6R1KX5lDox-c8qPqtOFb-k7QGvPwiJwQa9sprnFomNepks_k6pqJIOnrhrYVEPV4vhL-FlpniGbEhDk9mJJTVGWQLjbiNVuaT9jGhTQQSXH3iiMUEePKqBFQZ_zuCqU7g",
                "width": 720
            }
        ],
        "place_id": "ChIJPTacEpBQwokRKwIlDXelxkA",
        "plus_code": {
            "compound_code": "MXQ4+M5 New York, United States",
            "global_code": "87G7MXQ4+M5"
        },
        "rating": 4.7,
        "reference": "ChIJPTacEpBQwokRKwIlDXelxkA",
        "types": [
            "tourist_attraction",
            "park",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 63348
    },
    {
        "formatted_address": "New York, NY, United States",
        "geometry": {
            "location": {
                "lat": 40.7828647,
                "lng": -73.9653551
            },
            "viewport": {
                "northeast": {
                    "lat": 40.81804399999999,
                    "lng": -73.9339825
                },
                "southwest": {
                    "lat": 40.7473416,
                    "lng": -73.99703049999999
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
        "id": "c9bcef33f0cc85eda31f1c7444e9b1a3b82c9a9f",
        "name": "Central Park",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 2667,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/105303505373661530610/photos\">Hauser Quaid Zzyzx</a>"
                ],
                "photo_reference": "CmRaAAAAOv18dBX8SK9iaMp-vly1hJBPHQ7eSfCR3_2uUE1uLifFHaDC7NcNVXaxiLG9uvgC6SG9ls_a-yyl6BbPdIQ4uQgtTMKFh3zZ6o4mA8DF6yRFw5lM1jmez8l4fwGEcD34EhD9bbKcJgEKFaB0saT8PRyxGhR199xU3yKDkX8MABXnix3KXp67xA",
                "width": 4000
            }
        ],
        "place_id": "ChIJ4zGFAZpYwokRGUGph3Mf37k",
        "plus_code": {
            "compound_code": "Q2MM+4V New York, United States",
            "global_code": "87G8Q2MM+4V"
        },
        "rating": 4.8,
        "reference": "ChIJ4zGFAZpYwokRGUGph3Mf37k",
        "types": [
            "park",
            "tourist_attraction",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 185453
    },
    {
        "formatted_address": "New York, NY 10011, United States",
        "geometry": {
            "location": {
                "lat": 40.7479925,
                "lng": -74.0047649
            },
            "viewport": {
                "northeast": {
                    "lat": 40.75890824999998,
                    "lng": -73.99853175
                },
                "southwest": {
                    "lat": 40.73287364999999,
                    "lng": -74.01141114999999
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
        "id": "72dc79d023feec77725d7336e7c46fee27805319",
        "name": "The High Line",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104709047466213453312/photos\">Sharad Patel</a>"
                ],
                "photo_reference": "CmRaAAAAs8scATISa7Y89l3iAhD01bahskTlU_ySgXF9KPne0sm_1SDP6whONkE0FKk--6x3Cb8UtjTERMZ4ibVyDAcllQtClJFYKOu1BuiaRjVOnZi9qSghXcFRKLj9BIF6GdX1EhAQAui0ZZcQIGpgiE9nNVCiGhQ3TiixqvKc4os8ApXsKWfbofwU0A",
                "width": 4032
            }
        ],
        "place_id": "ChIJ5bQPhMdZwokRkTwKhVxhP1g",
        "plus_code": {
            "compound_code": "PXXW+53 New York, United States",
            "global_code": "87G7PXXW+53"
        },
        "rating": 4.7,
        "reference": "ChIJ5bQPhMdZwokRkTwKhVxhP1g",
        "types": [
            "park",
            "tourist_attraction",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 37205
    },
    {
        "formatted_address": "Brooklyn Bridge, New York, NY 10038, United States",
        "geometry": {
            "location": {
                "lat": 40.7060855,
                "lng": -73.9968643
            },
            "viewport": {
                "northeast": {
                    "lat": 40.7192285,
                    "lng": -73.98123630000001
                },
                "southwest": {
                    "lat": 40.6886497,
                    "lng": -74.01128110000001
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
        "id": "c1ac50eff9bb8e9505c59c69c4523ae94c4126fc",
        "name": "Brooklyn Bridge",
        "photos": [
            {
                "height": 4048,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/111761530785391278514/photos\">Juraj Maksi</a>"
                ],
                "photo_reference": "CmRaAAAAbupVK0l-SgKF2xTyJ9NE5iXq_dCChT8_BUWiIEA9hp-Y-EN-AyzKd6Rkul0z8NjvX93P2FxhADBeATz8j9QQ-x7tHx9U7wl5v0-pV1zrh-fpgW0vX3Oc-N6CV7fC5CgPEhDoryjr5rhropdWuLu5VN4FGhQcHueSytGx7LO5R6-6y0Pf2-oJeQ",
                "width": 3036
            }
        ],
        "place_id": "ChIJK3vOQyNawokRXEa9errdJiU",
        "plus_code": {
            "compound_code": "P243+C7 New York, United States",
            "global_code": "87G8P243+C7"
        },
        "rating": 4.8,
        "reference": "ChIJK3vOQyNawokRXEa9errdJiU",
        "types": [
            "tourist_attraction",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 41073
    },
    {
        "formatted_address": "30 Rockefeller Plaza, New York, NY 10112, United States",
        "geometry": {
            "location": {
                "lat": 40.7591205,
                "lng": -73.97952669999999
            },
            "viewport": {
                "northeast": {
                    "lat": 40.76060317989272,
                    "lng": -73.97801842010728
                },
                "southwest": {
                    "lat": 40.75790352010728,
                    "lng": -73.98071807989271
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
        "id": "e05462d15e6f301386934e30734e0c6d39636b95",
        "name": "Top of the Rock",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116200039882605158693/photos\">Ankur P</a>"
                ],
                "photo_reference": "CmRaAAAAmry7nrT_ApE1CJOwQj5Th8KAXTsm55ucfcM_Z8I-0dVhX9W48A1zbEtLVDuIdSrpw95lmgchzWJOKsizqkguZvyFwef-J5XKxH3gGuiLQKeur9b0jAsx2TPSn74KzxN2EhBmbc97S2joqv2lix6dlyS_GhRHUOvUJMEPNiGvpfnmbTaEyv53qw",
                "width": 4032
            }
        ],
        "place_id": "ChIJe7vKMf9YwokRIMYfDz7iF9o",
        "plus_code": {
            "compound_code": "Q25C+J5 New York, United States",
            "global_code": "87G8Q25C+J5"
        },
        "rating": 4.7,
        "reference": "ChIJe7vKMf9YwokRIMYfDz7iF9o",
        "types": [
            "tourist_attraction",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 32060
    },
    {
        "formatted_address": "625 8th Ave, New York, NY 10109, United States",
        "geometry": {
            "location": {
                "lat": 40.7568489,
                "lng": -73.9911705
            },
            "viewport": {
                "northeast": {
                    "lat": 40.75802162989272,
                    "lng": -73.98939822010728
                },
                "southwest": {
                    "lat": 40.75532197010727,
                    "lng": -73.99209787989271
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
        "id": "6ee6fae59c43720d4e00715b4e6c1d3062fc6a55",
        "name": "The SightSeeing Pass NYC",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 628,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/115223953962712309949/photos\">The SightSeeing Pass NYC</a>"
                ],
                "photo_reference": "CmRaAAAAY9XCSHztXAZcA367SANlIKmn448wLslcT6CtZfren8Zy8GS73UovEdV1YeEKUDZ-TgPjvy0IS8s41RMPHK852WYvLisaCxhPHOE0YB1oH_nmjU3cxe1ll618Cq1rGtyoEhCDTQLRVSFYdF-pppM1bDqKGhTw94Uu2E7H6jzcoONavM8A6zIPuQ",
                "width": 1200
            }
        ],
        "place_id": "ChIJcxb2oFZYwokRS3qBxS-wlYs",
        "plus_code": {
            "compound_code": "Q245+PG New York, United States",
            "global_code": "87G8Q245+PG"
        },
        "rating": 3.8,
        "reference": "ChIJcxb2oFZYwokRS3qBxS-wlYs",
        "types": [
            "travel_agency",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 584
    },
    {
        "formatted_address": "Pier 86, W 46th St, New York, NY 10036, United States",
        "geometry": {
            "location": {
                "lat": 40.7645266,
                "lng": -73.99960759999999
            },
            "viewport": {
                "northeast": {
                    "lat": 40.76578527989272,
                    "lng": -73.99790007010728
                },
                "southwest": {
                    "lat": 40.76308562010728,
                    "lng": -74.00059972989273
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png",
        "id": "6bb43beb2047e4db91e332d24782460ccf8194c2",
        "name": "Intrepid Sea, Air & Space Museum",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 2988,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/114077917842256400830/photos\">isi sanchez</a>"
                ],
                "photo_reference": "CmRaAAAAGqPvksq-E4msK6o_flxp3xf_jw-12RE_HldHWyoKQ130DA8HFUJPw8jTx6U7UTu0K0z5sPXDiBmrTdIibWuWfy5A2PXGMvG_EUR6oVckIO6ibTn6ug5C4UKneKyrwdlQEhBwd-ySKEI7PJIwobT2uOAiGhRXrFXLyAk2d5DWkbFajXJtuPxfPQ",
                "width": 5312
            }
        ],
        "place_id": "ChIJnxlg1U5YwokR8T90UrZiIwI",
        "plus_code": {
            "compound_code": "Q272+R5 New York, United States",
            "global_code": "87G8Q272+R5"
        },
        "rating": 4.6,
        "reference": "ChIJnxlg1U5YwokR8T90UrZiIwI",
        "types": [
            "museum",
            "tourist_attraction",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 24729
    },
    {
        "formatted_address": "234 W 42nd St, New York, NY 10036, United States",
        "geometry": {
            "location": {
                "lat": 40.7565399,
                "lng": -73.98867709999999
            },
            "viewport": {
                "northeast": {
                    "lat": 40.75798017989273,
                    "lng": -73.98726012010727
                },
                "southwest": {
                    "lat": 40.75528052010728,
                    "lng": -73.98995977989271
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
        "id": "75150891e9dc8d3548537e47c61c2e6ae79c7f1d",
        "name": "Ripley's Believe It or Not! Times Square",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 978,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/103638152949217366736/photos\">Ripley&#39;s Believe It or Not! Times Square</a>"
                ],
                "photo_reference": "CmRaAAAAO79pnAepS344Cz0im78clQxlsG3aLB3Axx6C0h17KyKStEhDkM8MJ-JCSRnduNaGqm-0piqmd4tTnooAlgoidrpweFNZt9_U2ks2cowQifqZXKb_BBklP6j16VmdpVsWEhCMkvV2KAhFDgr2dBlTFHbaGhRzaCAScJkn1KKdpvYEgnP95SDZ3g",
                "width": 1743
            }
        ],
        "place_id": "ChIJ8VOfr1RYwokRE441DHuxQNc",
        "plus_code": {
            "compound_code": "Q246+JG New York, United States",
            "global_code": "87G8Q246+JG"
        },
        "rating": 4.1,
        "reference": "ChIJ8VOfr1RYwokRE441DHuxQNc",
        "types": [
            "tourist_attraction",
            "museum",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 3992
    },
    {
        "formatted_address": "New York, NY 10024, United States",
        "geometry": {
            "location": {
                "lat": 40.7794302,
                "lng": -73.9690677
            },
            "viewport": {
                "northeast": {
                    "lat": 40.7841823,
                    "lng": -73.96023030000002
                },
                "southwest": {
                    "lat": 40.77484949999999,
                    "lng": -73.97524750000001
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
        "id": "90e5f1aef936eed01fda0b82781030ce7a29e6b2",
        "name": "Belvedere Castle",
        "photos": [
            {
                "height": 3120,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/116920231001955882603/photos\">Michelle Obergfoll</a>"
                ],
                "photo_reference": "CmRaAAAA5gSZs7WQYTHm0guT11K9VOP45HDtZYiQu9lfBIkUPr011vugYhSV6R_tcKmD7eUMfofMo8qhM3zECiw_YTnCWSfa-B0n3vGEsd54qHJBWsbqX8kdZtpZx-aSMs-noa8pEhB2ZEXBUiEUDmD-mNjY7p3yGhRy2LdEEJKHQHJKdvxdYFFuKUppKw",
                "width": 4160
            }
        ],
        "place_id": "ChIJFXzf4e9YwokRtXgpty_i74g",
        "plus_code": {
            "compound_code": "Q2HJ+Q9 New York, United States",
            "global_code": "87G8Q2HJ+Q9"
        },
        "rating": 4.4,
        "reference": "ChIJFXzf4e9YwokRtXgpty_i74g",
        "types": [
            "tourist_attraction",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 2959
    },
    {
        "formatted_address": "5th Ave, New York, NY 10022, United States",
        "geometry": {
            "location": {
                "lat": 40.7584653,
                "lng": -73.97599269999999
            },
            "viewport": {
                "northeast": {
                    "lat": 40.75987907989272,
                    "lng": -73.97453474999999
                },
                "southwest": {
                    "lat": 40.75717942010727,
                    "lng": -73.97777375
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/worship_general-71.png",
        "id": "acf24f96362bdabb64807f6c17cba8bb1d5b738a",
        "name": "St. Patrick's Cathedral",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 3024,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/104446634621376194300/photos\">Eric Munoz</a>"
                ],
                "photo_reference": "CmRaAAAA_QDbIRVIxkkBX56yjztpk7NCjlsukJLiiH2qJhbjxyD4hvWIPfmNArw6hlF27k5qFXG0q-pzesN9ukPZvSOUhQOzPEadwlq6xM58Tm_GhhnGtfdec5jd3MU1nQOc0UhxEhCxJ7TA0AcALhvsFRo7VSboGhSyhTAeg_bwyyp2qBXTfOVwVZBc6g",
                "width": 4032
            }
        ],
        "place_id": "ChIJUW4vEPxYwokRW6o24DU0YIg",
        "plus_code": {
            "compound_code": "Q25F+9J New York, United States",
            "global_code": "87G8Q25F+9J"
        },
        "rating": 4.8,
        "reference": "ChIJUW4vEPxYwokRW6o24DU0YIg",
        "types": [
            "tourist_attraction",
            "church",
            "place_of_worship",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 21324
    },
    {
        "formatted_address": "Central Park West & 79th St, New York, NY 10024, United States",
        "geometry": {
            "location": {
                "lat": 40.7813241,
                "lng": -73.97398819999999
            },
            "viewport": {
                "northeast": {
                    "lat": 40.78267454999999,
                    "lng": -73.97198744999999
                },
                "southwest": {
                    "lat": 40.77975195,
                    "lng": -73.97557844999999
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png",
        "id": "d9dd2c58ebb5c5cb4d00b28db933b7e220a34b5a",
        "name": "American Museum of Natural History",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 4032,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/110989728410759070561/photos\">鼻川水男</a>"
                ],
                "photo_reference": "CmRaAAAACHleGADrkjWKwobW8NWnrkPeuqZF_Q6Cbyu6pjcgRKriFFelcd98S6x13cfncUygviKv5W0LPWt4p8m1_Mh-H9xnXhz7057_Oj5UyTgTsFgCE_Kv_y-6r5QxKGGdkGLVEhCRETYFhHyv1Rr_D7eA0uJsGhQcHwy5o2PrzJyiJUN96zzj578SFg",
                "width": 3024
            }
        ],
        "place_id": "ChIJCXoPsPRYwokRsV1MYnKBfaI",
        "plus_code": {
            "compound_code": "Q2JG+GC New York, United States",
            "global_code": "87G8Q2JG+GC"
        },
        "rating": 4.5,
        "reference": "ChIJCXoPsPRYwokRsV1MYnKBfaI",
        "types": [
            "tourist_attraction",
            "museum",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 10376
    },
    {
        "formatted_address": "New York, NY 10018, United States",
        "geometry": {
            "location": {
                "lat": 40.7535965,
                "lng": -73.98323259999999
            },
            "viewport": {
                "northeast": {
                    "lat": 40.755549,
                    "lng": -73.98133884999999
                },
                "southwest": {
                    "lat": 40.75198299999999,
                    "lng": -73.98575824999999
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png",
        "id": "f450a4290a3af961748f0eb93931479d2898e990",
        "name": "Bryant Park",
        "opening_hours": {
            "open_now": true
        },
        "photos": [
            {
                "height": 4048,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/113546832192452738361/photos\">Anthony Lau</a>"
                ],
                "photo_reference": "CmRaAAAAhSE82nAnxQWDpuWl2JheRNmjyFpwjf-H0vZ_2Wovgre1rBbL3Lkkc_jMYrUJqVPMPFapge2Xx3wT9DMPVeCXlrwGWuKj2IxnCIVTBroMeNOMPYERJiREHaagIxsz4-asEhBL-WX4S1U02qxBrXSiCllZGhRAziBF2FZ8GI429QP8AyR9KalEzA",
                "width": 3036
            }
        ],
        "place_id": "ChIJvbGg56pZwokRp_E3JbivnLQ",
        "plus_code": {
            "compound_code": "Q238+CP New York, United States",
            "global_code": "87G8Q238+CP"
        },
        "rating": 4.7,
        "reference": "ChIJvbGg56pZwokRp_E3JbivnLQ",
        "types": [
            "park",
            "tourist_attraction",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 48253
    },
    {
        "formatted_address": "99 Margaret Corbin Dr, New York, NY 10040, United States",
        "geometry": {
            "location": {
                "lat": 40.8648628,
                "lng": -73.9317274
            },
            "viewport": {
                "northeast": {
                    "lat": 40.86665500000001,
                    "lng": -73.9246285
                },
                "southwest": {
                    "lat": 40.86222299999999,
                    "lng": -73.93519849999998
                }
            }
        },
        "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/museum-71.png",
        "id": "8edf774a665aeb294a6d6cf8df4405f4824f7e4f",
        "name": "The Met Cloisters",
        "opening_hours": {
            "open_now": false
        },
        "photos": [
            {
                "height": 2160,
                "html_attributions": [
                    "<a href=\"https://maps.google.com/maps/contrib/112474855701850372993/photos\">A Google User</a>"
                ],
                "photo_reference": "CmRaAAAAFgTBlndmO2EP3NxscfPWeXoSoXE8TUTTi_uQSLp96qngjXYqd5kexHhZ3xzOaJ8ROkfwVpQzIl2uA866V4qL8dQ4MytD4tmMMX0F9Z3s9tJY7wfE4MHcpFZRKk8C7sAXEhAMFA7BcQGUskmanLs8mBfTGhS6Udz_i2Jw_aJhzJ0gkSUoHjvS-g",
                "width": 3840
            }
        ],
        "place_id": "ChIJK6bycAH0wokRrSnflfrnkZE",
        "plus_code": {
            "compound_code": "V379+W8 New York, United States",
            "global_code": "87G8V379+W8"
        },
        "rating": 4.7,
        "reference": "ChIJK6bycAH0wokRrSnflfrnkZE",
        "types": [
            "tourist_attraction",
            "museum",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total": 4075
    }
];

const topMuseums = museums.slice(0, mainActivities.museum)
const otherMuseums = museums.slice(mainActivities.museum, numberOfActivities.museum)

const topShoppings = shoppings.slice(0, mainActivities.shopping)
const otherShoppings = shoppings.slice(mainActivities.shopping, numberOfActivities.shopping)

const topSights = sights.slice(0, mainActivities.sights)
const otherSights = sights.slice(mainActivities.sights, numberOfActivities.sights)
const results = {
    museums: {
        top: topMuseums,
        other: otherMuseums
    },
    shopping: {
        top: topShoppings,
        other: otherShoppings
    },
    sights: {
        top: topSights,
        other: otherSights
    }
}
console.log(JSON.stringify(results))
