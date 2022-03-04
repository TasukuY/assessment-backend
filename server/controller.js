let users = [{username: 'test1'},{username: 'test2'},{username: 'test3'},{username: 'test4'}];

module.exports = {
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!",
                           "Cool shirt!",
                           "Your Javascript skills are stellar.",
        ];

        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = [
            'A beautiful, smart, and loving person will be coming into your life.',
            'A dubious friend may be an enemy in camouflage.',
            'A faithful friend is a strong defense.',
            'A fresh start will put you on your way.',
            'A friend asks only for your time not your money.',
            'A friend is a present you give yourself.'
        ];

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
      },
      getAllUsers: (req, res) => {
        console.log(users)
        res.status(200).send(users);
      }, 
      addUser: (req, res) => {
        //console.log(req.body);
        let newUser = req.body;
        users.push(newUser);
        res.status(200).send(users); 
      },
      editUser: (req, res) => {
        let oldAndNewUsername = req.params.username.split('&');
        // console.log(oldAndNewUsername);
        let oldUsername = oldAndNewUsername[0];
        let newUsername = oldAndNewUsername[1];
        for(let i = 0; i < users.length; i++){
            if(users[i].username === oldUsername){
                users[i].username = newUsername;
            }
          }
        res.status(200).send(users);  
      },
      deleteUser: (req, res) => {
          //console.log(req.params.username);
          let usernameToDelete = req.params.username
          for(let i = 0; i < users.length; i++){
            if(users[i].username === usernameToDelete){
                users.splice(i, 1);
            }
          }
          res.status(200).send(users);
      }
}