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
            },
            {   
                "accountID": 5,
                "body": "There are many possible languages you can use and there are languages that are better in some scenarios. Generally, I would say study python as it's a good prototyping language but I would also like to mention Javascript as it's very versatile as well and there are a lot of users so there are a lot of different libraries.",
                "datetime": "20231005T120543-0400"
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
    }
]

function moveToPost(postID){
    window.location.href = `viewpost.html?postID=${postID}`;
}

function getPosts(){
    return posts
}