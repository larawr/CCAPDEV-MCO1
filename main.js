var posts = [
    {
        "postID": 0,
        "accountID": 0,
        "title": "How to learn web development from scratch?",
        "body": "As the title says. Been interested in strarting to learn coding for various use cases. I want to know how exactly i start like what programming language i should learn or what software i should use?",
        "postedon": "20231005T104523-0400",
        "lastupdate": "20231005T120543-0400",
        "votes": 36,
        "replies":[
            {
                "accountID": 1,
                "body": "Try learning python, it has a very simple syntax",
                "datetime": "20231005T104523-0400"
            },
            {   
                "accountID": 2,
                "body": "You should probably start with something more straightforward like C. For the IDE, I generally use Sublime Text but that's just my preference",
                "datetime": "20231005T113523-0400"
            },
            {   
                "accountID": 3,
                "body": "For the IDE you have got to go with VSCode due to how flexible it is. For the language, probably either C or Java.",
                "datetime": "20231005T114043-0400"
            },
            {   
                "accountID": 4,
                "body": "Definitely Java and use NetBeans for your IDE",
                "datetime": "20231005T114143-0400"
            }
        ]
    }
]

var accounts = [
    {
        "accountID": 0,
        "displayname": "TechW",
        "description": "They see me Coding, They Hatin",
        "posts": [0],
        "comments":[
            {
                "postID": 1,
                "comment_num": 0
            }
        ],
        "credentials": {
            "username": "TechW",
            "password": "12345"
        }
    },
    {
        "accountID": 1,
        "displayname": "Weismann",
        "description": "They see me Coding, They Hatin",
        "posts": [1],
        "comments":[
            {
                "postID": 0,
                "comment_num": 0
            }
        ],
        "credentials": {
            "username": "Weismann",
            "password": "12345"
        }
    },
    {
        "accountID": 2,
        "displayname": "Alandal",
        "description": "They see me Coding, They Hatin",
        "posts": [2],
        "comments":[
            {
                "postID": 0,
                "comment_num": 1
            }
        ],
        "credentials": {
            "username": "Alandal",
            "password": "12345"
        }
    },
    {
        "accountID": 3,
        "displayname": "Skipee",
        "description": "They see me Coding, They Hatin",
        "posts": [3],
        "comments":[
            {
                "postID": 0,
                "comment_num": 2
            }
        ],
        "credentials": {
            "username": "Skipee",
            "password": "12345"
        }
    },
    {
        "accountID": 4,
        "displayname": "Findo",
        "description": "They see me Coding, They Hatin",
        "posts": [4],
        "comments":[
            {
                "postID": 1,
                "comment_num": 3
            }
        ],
        "credentials": {
            "username": "Findo",
            "password": "12345"
        }
    }
]

function moveToPost(postID){
    window.location.href = `viewpost.html?postID=${postID}`;
}

function moveToProfile(accountID){
    window.location.href = `viewprofile.html?accountID=${accountID}`;
}