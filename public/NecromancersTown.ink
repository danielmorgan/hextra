VAR let_plagued_man_live = false

->intro
=== intro ===
This town has a curious defense policy:
They use the corpses of the recently deceased as soldiers.
A Necromancer takes the interred bodies and brings them back to a semblence of life.
Then they are thrown mercilessly at the invading undead seeking to attack the town.
Corpse vs corpse in a stranglehold over the fate of this town.

*   [Enter the town]
    ->plea

=== plea ===
You are approached by a sobbing woman.
Her husband explains to you that their son recently died {let_plagued_man_live:of the plague|at the hands of the assaulting corpses}.
They're seeking a dispensation for their son's corpse.

VAR boys_corpse_reanimated = true
*   This woman has suffered enough.
    You have a quiet word with the Necromancer. He accepts your authority begrudgingly.
    ~ boys_corpse_reanimated = false
    ->END
*   The wolves are at the wall[.] and the defense can't spare a single corpse.
    ->END