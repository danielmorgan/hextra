VAR item = "nothing"

You enter the blacksmith with a pittance in your pocket. You'll have to make a tough choice.

* [Take the sword] You reach for the sword.
    ~ item = "sword"
    * * [A good offense is the best defense.] -> leave
    * * [Haha sword go stabbbb.] -> leave
* [Take the shield] You reach for the shield.
    ~ item = "shield"
    * * [Hopefully you'll live long enough to find a sword later.] -> leave
    * * [You could always bash someone's face in with the blunt edge.] -> leave
    
= leave

You leave the blacksmith, equipped with a {~rusty|worn|battered} {item}.
-> DONE