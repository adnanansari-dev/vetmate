# Day 012 – Fixing The Deployment

## Date

10 August 2026

---

## What I Did Today

Today was a pretty short work day compared to the last few days.

I didn't really write any new code today. Most of the time went into fixing some problems and getting the deployed version of VetMate working properly.

My keyboard also decided to stop working, so I had to go and get a new one. I also got a new mouse, but that one has some issues too, so I will probably have to replace it.

---

## Vercel Problems

Today I gave the Vercel version of VetMate to some of my friends so they could actually try it.

That's when I found out that some things were working locally but had problems on the deployed website.

Turns out some of the environment variables weren't configured properly on Vercel.

So I spent today checking what was wrong, fixing the environment variables, redeploying, and testing everything again.

It's finally working properly now.

---

## What I Learned

Today was actually a good reminder that:

    Works on localhost   not equal to   Works in production

Everything can work perfectly on my PC and then break after deployment because the environment is different.

I had to actually deal with the production setup instead of just testing everything locally.

---

## Notes

Not every day is going to be a crazy coding day.

Today I barely wrote any code, but I still fixed problems that would have caused issues for actual users.

Now my friends can open the Vercel version and actually test VetMate without running into the environment variable problems I had earlier.

Tomorrow I'll get back to building instead of fighting with Vercel.