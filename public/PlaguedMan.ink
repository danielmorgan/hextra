You walk along the dirt track, the sun high in the sky, beating down relentlessly.
Ahead you see a figure robed in black. You think he must be very uncomfortable in such thick robes.
At his feet is a man scrabbling in the dirt. He looks injured or at least hurt.

*   [Approach]


- "Greetings trave-" the robed man begins to say before taking a look at your adornments and, correcting himself, greets you as "Honoured Justice" instead.
You take a moment to survey the scene...

*   [A leather satchel]

- You notice the bag of potions by the mans feet, the gloves on his hands, and conclude he must be some kind of doctor.
    
*   "Greetings Doctor"[] you reply.

- You see now the man scrabbling in the dirt is not injured. He is sick. Pustules and open sores cover his face and his hands are red and cracked.
        
* [Help him up]
    "What is your name?" you ask the plagued man as you offer him your hand.
    The man looks up at you before bursting into another coughing fit. You see specks of blood on the ground.
* "Are you treating this man?"[] you inquire of the doctor.
    "I'm afraid I have done all I can in such a case. In my capacity as a healer anyway" says the doctor.
        
- "I'm glad you have arrived. You see I find myself faced with a most terrible decision to be made."
"You must understand Justice" the doctor continues "that this man is sadly no longer for this world, but the illness he carries will spread if he is allowed to go on his way."
"I suggest you let me take him. I will do what needs to be done, then I will dispose of the corpse in flames hot enough to burn the plague away."

* "I don't think he'd agree with you."
    "Please, I have a family" the plagued man manages to croak out between coughs.
* "I see..."
* "Of course, this illness cannot be allowed to spread."

- As a Justice, you know that it falls to you to decide what must be done.

VAR let_plagued_man_live = false
*   A necessary sacrifice.
    <i>This will help stop the spread of the plague.</i>
    "A wise decision" the doctor says. He helps the plagued man up, not unkindly, and leads him away.
    Some time later you see smoke rising in the distance behind you.
    ->END
*   A cowardly act.
    ~let_plagued_man_live = true
    <i>The man may yet recorver.</i>
    "A foolish decision" the doctor warns, as you hand the plagued man supplies. He stumbles off, following the road into town.
    ->END