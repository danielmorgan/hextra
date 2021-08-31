->home
=== home ===
Where do you call home?

*   [Savile Row]
    VAR destination = ->to_savile_row
    ->hurry_home
*   [Bond Street]
    ~ destination = ->to_bond_street
    ->hurry_home


=== hurry_home ===
Your hurry home <>
->destination

=== to_savile_row ===
to Savile Row
->as_fast_as_we_could

=== to_bond_street ===
to Bond Street
->as_fast_as_we_could

=== as_fast_as_we_could ===
<> as fast as you can.
->at_home

=== at_home ===
*   { to_savile_row }
    [Rest]
    You flop down at your Savile Row home
    ->DONE
*   { to_bond_street }
    [Rest]
    You flop down at your Bond Street home
    ->DONE