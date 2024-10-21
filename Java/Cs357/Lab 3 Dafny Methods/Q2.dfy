method Min(a: int, b: int) returns (m: int)

    // todo
    ensures m == a || m == b
    ensures m <= a && m <= b
    {
        if a > b
        {
            m := b;
        }
        else if b > a
        {
            m := a;
        }
        else
        {
            m := a;
        }
    }


method {:test} TestMin()
{
    var x := Min(2, 3);
    assert x == 2;

    var y := Min(-4, 1);
    assert y == -4;

    var z := Min(0, 0);
    assert z == 0;
}