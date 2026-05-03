export interface Resource {
  id: string
  title: string
  description: string
  content: string
  tag?: string
}

export interface ResourceTab {
  id: string
  label: string
  items: Resource[]
}

export const RESOURCE_TABS: ResourceTab[] = [
  {
    id: 'scripts',
    label: 'Sales Scripts',
    items: [
      {
        id: 'cold-pm',
        title: 'Cold Call Opener — Property Managers',
        description: 'Targeting leasing managers at multi-family residential portfolios',
        tag: 'Cold Outreach',
        content: `GOAL: Book a 20-minute discovery call to qualify and demo the Property Management CRM.

---

OPENER (first 10 seconds — no pause for breath):
"Hi [Name], this is Segun calling from Mav Consulting Group. I'll keep this super brief — we built a CRM on top of Zoho specifically for property managers who are juggling leads from Zillow, Apartments.com, and phone inquiries all at once. I know that's probably a pain point for your team. Do you have 90 seconds?"

---

IF YES — QUALIFYING BRIDGE:
"Great. Quick question — right now, when a new rental lead comes in from one of those sources, what does your team do with it? Is it tracked anywhere centrally, or is it more scattered across emails and spreadsheets?"

[LET THEM ANSWER]

"Got it. So the problem we solve is consolidating all of that into one place, adding automated follow-up so leads don't fall through, and giving you a conversion dashboard. We had a client with a 250-unit portfolio who saw 23% higher lease conversions in 90 days.

I'm not trying to sell you anything today — I just want to show you what that looks like in a 20-minute screen share. What does your calendar look like Thursday or Friday?"

---

OBJECTION: "We're already using something"
"Totally fair — most people are using something. The question is whether it was built specifically for property management workflows or adapted from a generic CRM. What are you using now? [Pause] Okay — even if this isn't the right fit, it's worth a 20-minute look to know what you're comparing against. Thursday at 2?"

---

OBJECTION: "Send me some info first"
"Of course. What's the best email? [Get it] I'll send a one-pager. And just to make sure it's relevant — is your main pain point lead tracking, follow-up automation, or reporting? [Answer] Perfect, I'll tailor it. And while I have you — is Thursday or Friday better for a quick follow-up call to go over it together?"

---

VOICEMAIL (if no answer):
"Hey [Name], Segun with Mav Consulting Group. We built a Zoho-based CRM for property managers — specifically around consolidating leads and automating follow-up. One of our clients with a 250-unit book went from scattered inboxes to 23% better conversions. Worth a 20-minute look. I'll follow up by email — [your number]. Talk soon."`,
      },
      {
        id: 'cold-cre',
        title: 'Cold Call Opener — CRE Capital Raisers',
        description: 'Targeting GPs and syndicators raising equity for commercial deals',
        tag: 'Cold Outreach',
        content: `GOAL: Book a demo of CapRaise CRM — the investor relationship management platform for CRE capital raisers.

---

OPENER:
"Hi [Name], this is Segun from Mav Consulting Group. Quick call — we built a CRM called CapRaise specifically for real estate syndicators who are managing investor relationships across multiple deals. Do you have 60 seconds?"

---

IF YES — QUALIFY:
"Great. How are you currently tracking your investor pipeline — who's been approached, who's committed, who's waiting on the next deal?"

[LET THEM ANSWER]

"Yeah, that's exactly what we see with most GPs — it lives in a spreadsheet or their head, which works until you're running multiple raises at once. CapRaise gives you a full CRM pipeline, SEC 506(c) compliance tracking, and accreditation verification — all built on Zoho so it's customizable to how you actually raise.

We had a client who raised $2.5M in 3 months after switching from spreadsheets. I'm not trying to pitch you today — I just want to give you a 20-minute demo to see if it's relevant. Are you in the middle of a raise right now?"

[IF YES]: "Perfect timing. Let's get 20 minutes on the calendar this week."
[IF NO]: "Even better — great time to get the system set up before your next one. Thursday or Friday work?"

---

OBJECTION: "I already use HubSpot / Salesforce"
"I hear that a lot. Those are great general CRMs — CapRaise is vertical-specific. It has SEC compliance tracking, accreditation verification, a LinkedIn extension to qualify investors from LinkedIn directly, and deal-level pipeline views that HubSpot doesn't have out of the box. The question is whether what you're doing now scales to your next 3 raises. That's what the 20-minute demo answers."

---

OBJECTION: "Not the right time"
"Totally get it. When is your next raise anticipated? [Answer] Okay — so let's talk 30 days before that. Can I put a 20-minute call on the calendar for [date]? I'll send a calendar invite now and we can always reschedule if things shift."`,
      },
      {
        id: 'follow-up',
        title: 'Demo Request Follow-Up Email',
        description: 'Send within 2 hours of a form fill or inbound inquiry',
        tag: 'Email',
        content: `SUBJECT: Your Mav Consulting demo — [day] at [time] ✓

Hi [First Name],

Thanks for reaching out — your demo is confirmed for [Day, Date] at [Time] [Timezone].

Here's what we'll cover in 20–25 minutes:
→ Your current lead/investor workflow (quick discovery)
→ Live walkthrough of [Property Management CRM / CapRaise CRM]
→ ROI estimate based on your portfolio size
→ Q&A + next steps

To make it worthwhile, I have one quick question before we meet:

What's the #1 thing you'd want a CRM to fix in your current process — is it lead follow-up, visibility into your pipeline, reporting, or something else?

Reply with a word or two and I'll make sure we focus the demo on exactly that.

See you [day],
Segun Oluwadele
Mav Consulting Group
[Phone] | [Calendar Link]

P.S. — Here's a 2-minute overview of CapRaise CRM if you want a preview before we meet: [link]`,
      },
      {
        id: 'obj-salesforce',
        title: "Objection: 'We already use Salesforce / HubSpot'",
        description: 'Reframe without bashing the competition',
        tag: 'Objection Handling',
        content: `CONTEXT: Prospect says they already have a CRM in place.

---

RESPONSE:
"That makes sense — most people in your space are on one of those. Those are great tools for general sales teams. The question I always ask is: was it configured for [property management / capital raising] specifically, or is it a generic pipeline that your team adapted?

Because what we see is that teams on Salesforce or HubSpot spend a lot of time on workarounds — building custom fields, manually logging lead sources, trying to piece together compliance tracking. We built on Zoho specifically so we could go deep on the vertical without the workaround tax.

Here's what I'd suggest: give me 20 minutes to show you the difference. If you walk away thinking what you have is better, totally valid — and you'll have a sharper benchmark for evaluating it. But most people see at least one workflow in our system that makes them say 'we don't have that.' Worth 20 minutes?"

---

KEY POINTS TO HIT:
- Never directly criticize Salesforce or HubSpot
- Acknowledge their choice is reasonable
- Shift the question from "what do you use?" to "does it do this specific thing?"
- Use the word "vertical-specific" — it reframes the category
- Close with a low-commitment ask: "just 20 minutes"`,
      },
      {
        id: 'obj-price',
        title: "Objection: 'Too expensive right now'",
        description: 'Handle budget objections without discounting',
        tag: 'Objection Handling',
        content: `CONTEXT: Prospect says budget is a constraint.

---

RESPONSE (Option A — ROI Reframe):
"I hear you. Can I ask — what are you currently spending on leads that don't convert, or on manual follow-up that falls through the cracks? Because the ROI case for our clients usually isn't 'this costs X' — it's 'this converts Y more leads per month, and each lease is worth Z.' Once we run those numbers for your portfolio, the investment usually looks very different. Let me show you what that math looks like in the demo."

---

RESPONSE (Option B — Timing Bridge):
"Totally fair. When does budget refresh? [Answer] Okay — so let's do this: let me show you the product now so you know exactly what you're budgeting for, and we can time the contract to your next cycle. Does that work? The demo is free, and it takes 20 minutes."

---

RESPONSE (Option C — Scoping Down):
"Understood. We do have a few different entry points depending on portfolio size and the modules you actually need. The demo will help me scope the right package for you — it's possible the full platform isn't what you need right now, and there's a lighter-touch option. Let's figure that out in 20 minutes rather than guess on price."

---

NEVER:
- Immediately offer a discount (you devalue the product and set a negotiation anchor)
- Accept "no budget" as a final answer without understanding the timeline
- Pitch features after a price objection — pivot to ROI and timing instead`,
      },
    ],
  },
  {
    id: 'playbooks',
    label: 'Playbooks',
    items: [
      {
        id: 'bdr-cadence',
        title: 'BDR Daily Cadence',
        description: 'A structured daily outreach rhythm to maximize pipeline generation',
        tag: 'Process',
        content: `DAILY CADENCE: BDR at Mav Consulting Group
Target: 8–12 new conversations/week → 4–6 demo bookings/week

---

MORNING BLOCK (8:00 AM – 10:30 AM) — CALLING WINDOW
[8:00] Pull today's call list from Zoho CRM (leads sorted by lead score: Hot → Warm → Cold)
[8:15] Power hour: 15–20 outbound dials. No voicemail for first attempt on hot leads.
[9:00] Second attempt on yesterday's no-answers (leave voicemail + send email immediately after)
[9:30] New cold dials — use the cold call script, aim for 10 conversations
[10:00] Log all call outcomes in Zoho CRM (Connected / Left VM / No Answer / Not Interested / Booked)
[10:15] Send follow-up emails to everyone you reached voicemail on this morning

---

MID-MORNING (10:30 AM – 12:00 PM) — EMAIL + LINKEDIN
[10:30] Send Day 1 cold emails to new leads added to sequence yesterday
[11:00] LinkedIn outreach: connect + personalized message to 5–8 new prospects (use LinkedIn Sales Navigator + CapRaise's LinkCap extension for CRE investor leads)
[11:30] Respond to any email replies from prior outreach
[11:45] Check Zoho sequence status — who's on Day 3, Day 5, Day 7 of their cadence?

---

AFTERNOON (1:00 PM – 3:30 PM) — FOLLOW-UP + ADMIN
[1:00] Demo prep: review LinkedIn/company for any demos booked today or tomorrow
[1:30] Follow-up calls: everyone who received a voicemail + email yesterday (24-hour follow-up)
[2:30] Update Zoho CRM: stage all new prospects (New → Contacted → Engaged → Demo Booked)
[3:00] Add 10–15 new prospects to pipeline from LinkedIn, RentManager partner lists, or CRE directories

---

END OF DAY (3:30 PM – 4:00 PM)
[3:30] Log demos booked and conversations had for the day in Zoho
[3:45] Set tomorrow's call list (sort by next follow-up date)
[3:55] Quick Slack update to AE/Sameet: demos booked, notable conversations

---

WEEKLY TARGETS (BDR Year 1):
- Dials: 80–100/week
- Conversations: 25–30/week
- Demo bookings: 8–12/week
- Show rate target: 70% (follow up 24 hours before every scheduled demo)`,
      },
      {
        id: 'ae-demo',
        title: 'AE Demo Structure',
        description: 'Discovery → Demo → ROI close framework for Zoho CRM demos',
        tag: 'Process',
        content: `DEMO STRUCTURE: 25-Minute Zoho CRM Demo
Applicable to both Property Management CRM and CapRaise CRM verticals.

---

PHASE 1 — DISCOVERY (5 minutes)
Goal: Understand their exact pain before showing anything.

Questions (pick 2–3 based on BDR notes):
- "Walk me through what happens today when a new lead comes in. Where does it go?"
- "How many leads/investors are you managing at once right now?"
- "What's your biggest bottleneck — lead capture, follow-up, or visibility into where deals stand?"
- "Have you lost a lease or a committed investor because follow-up slipped through the cracks?"
- "What does your current reporting look like — do you have a dashboard or is it more manual?"

Listen for: pain words — "scattered," "manual," "I don't know," "falls through," "missed"
Log answers in Zoho CRM before screen share.

---

PHASE 2 — TAILORED DEMO (15 minutes)
Rule: Show their pain first. Don't give a product tour.

FOR PROPERTY MANAGERS:
1. Show the lead intake view — how Zillow, Apartments.com, and web form leads appear in one place automatically
2. Show the automated follow-up sequence triggered on lead creation
3. Show the leasing pipeline: New Lead → Toured → Applied → Leased → Moved In
4. Show the conversion report — "You'd know exactly where leases are lost"

FOR CAPITAL RAISERS:
1. Show the investor pipeline: Prospect → Approached → Soft Commit → Hard Commit → Funded
2. Show LinkCap — live demo of pulling a LinkedIn profile into CapRaise as a qualified lead
3. Show deal-level tracking: which investors are in Deal A vs. Deal B vs. prospect pool
4. Show SEC compliance flags and accreditation verification workflow

KEY DEMO RULES:
- Keep mouse movements slow and deliberate
- Narrate what you're clicking before you click it
- Every feature: "Does this solve what you described earlier?"
- Never show a feature they didn't express a need for

---

PHASE 3 — ROI + CLOSE (5 minutes)
"Based on what you told me — [restate their pain] — here's how I'd model the ROI:

[For PM]: If you have [X] units and convert even 2 more leads per month to leases at [average rent], that's [$Y] in additional monthly revenue. Our platform pays for itself in [timeframe].

[For CRE]: If you're running [$X] raises and bring in one additional committed investor per deal cycle because your follow-up didn't slip — what does that mean for your carry?

The question isn't whether the math works — it's whether this is the right time to fix the process. What would need to be true for you to move forward in the next 30 days?"

[Shut up and listen to the answer.]`,
      },
      {
        id: 'bant',
        title: 'Lead Qualification Framework (BANT for CRE CRM)',
        description: 'Adapted BANT qualification model for Zoho CRM buyers in commercial real estate',
        tag: 'Framework',
        content: `BANT ADAPTED FOR MAV CONSULTING GROUP

Standard BANT: Budget / Authority / Need / Timeline
CRE CRM adapted: Business Pain / Authority / Need Intensity / Timeline + Trigger

---

B — BUSINESS PAIN (not just budget)
Ask: "What's your current process for [lead tracking / investor management]? What breaks down?"
Qualified signal: They describe a specific recurring problem (not "it could be better")
Disqualified signal: "Things are fine, just exploring"
Follow-up: "How much time does your team spend each week on that manually?"

---

A — AUTHORITY
Ask: "If you decided to move forward with something like this, who else would be involved in that decision?"
Qualified signal: "It's my call" or "Me and [direct partner / owner]"
Yellow flag: "I'd need to run it by [large committee / IT]"
Action: Always get the DM on the call. Never advance a deal without the decision-maker present at demo.

---

N — NEED INTENSITY
Score 1–3 based on discovery:
3 (Hot): Active pain, tried to solve it before, current state is costing them measurably
2 (Warm): Acknowledged pain, no urgency, comparing options
1 (Cold): Theoretical interest, no active initiative

Only advance to demo on 2+. For 1s: nurture sequence in Zoho, follow up in 60 days.

---

T — TIMELINE + TRIGGER
Ask: "When are you looking to have something like this in place?"
Qualified: "In the next 30–90 days" or "Before our next raise / leasing season"
Trigger questions:
- Property Managers: "When does your peak leasing season start?" (creates natural deadline)
- Capital Raisers: "When is your next offering anticipated?" (creates urgency)

Disqualified (for now): "No timeline, just looking" — put in 90-day nurture sequence.

---

ZOHO CRM USAGE:
- Log BANT score in the Lead record as a custom field
- Tag leads: Hot / Warm / Cold based on N score
- Use lead score to prioritize daily call list (Hot leads get called first, every day until connected)`,
      },
    ],
  },
  {
    id: 'zoho',
    label: 'Zoho CRM Guides',
    items: [
      {
        id: 'lead-scoring',
        title: 'Setting Up Lead Scoring in Zoho CRM',
        description: 'Configure automatic lead scores based on source, activity, and fit',
        tag: 'Zoho Guide',
        content: `ZOHO CRM LEAD SCORING — SETUP GUIDE
Purpose: Automatically prioritize which leads the BDR calls first.

---

STEP 1 — DEFINE SCORING CRITERIA
Go to: Setup → Automation → Scoring Rules → Lead Scoring

Recommended scoring model for Mav Consulting Group:

POSITIVE SIGNALS:
+20 — Lead source: Inbound (web form, demo request)
+15 — Lead source: Referral
+10 — Lead source: LinkedIn outreach (responded)
+10 — Email opened (any email in sequence)
+15 — Email link clicked
+20 — Replied to email
+25 — Attended a webinar or event
+15 — Company has 50+ units / $5M+ in AUM (ideal profile)
+10 — Title: Owner, GP, Principal, Property Manager, Director of Leasing

NEGATIVE SIGNALS:
-10 — Email bounced
-15 — Marked email as spam
-20 — Explicitly said not interested (log via call disposition)
-10 — No activity in 30 days

---

STEP 2 — CREATE SCORE TIERS
Hot: 60+ points → BDR calls daily, AE notified
Warm: 30–59 points → BDR calls every 2 days, in active sequence
Cold: <30 points → Weekly automated email sequence, BDR calls weekly

---

STEP 3 — CREATE WORKFLOW TO AUTO-TAG
Setup → Automation → Workflow Rules → Lead
Trigger: Score field changes
Condition: Score ≥ 60 → Tag as "Hot" → Notify BDR owner → Create follow-up task for today
Condition: Score 30–59 → Tag as "Warm"
Condition: Score < 30 → Tag as "Cold" → Enroll in 7-touch nurture sequence

---

STEP 4 — BDR DASHBOARD VIEW
Setup → Reports → Create Report
Fields: Lead Name | Score | Lead Source | Last Activity | Next Task Due
Filter: Sort by Score descending
Save as "My Hot Leads" pinned to BDR's home screen`,
      },
      {
        id: 'bdr-pipeline',
        title: 'Building a BDR Pipeline View in Zoho CRM',
        description: 'Create a Kanban pipeline view the BDR lives in daily',
        tag: 'Zoho Guide',
        content: `ZOHO CRM BDR PIPELINE VIEW — SETUP GUIDE
Purpose: Give the BDR a single view that shows exactly what needs to happen today.

---

PIPELINE STAGES (for Leads module):
1. New — Just added, not yet contacted
2. Contacted — Left voicemail or sent first email, no response
3. Engaged — Had a live conversation, gauging interest
4. Demo Scheduled — Calendar invite sent and confirmed
5. Demo Completed → Move to Deals module
6. Not Interested — Mark with reason: Price / Timing / Wrong fit / No need
7. Nurture — Not ready now, follow up in 30/60/90 days

---

CREATE THE KANBAN VIEW:
Go to: Leads → View (top right) → Kanban View
Set pipeline stages as columns above
Color code by Lead Score: Red (Cold) / Yellow (Warm) / Green (Hot)

---

REQUIRED CUSTOM FIELDS (add to Lead record):
- Lead Temperature (Hot / Warm / Cold) — picklist
- BANT Score (1 / 2 / 3) — picklist
- Vertical (Property Management / Capital Raising / Construction) — picklist
- Portfolio Size or AUM — text
- Next Follow-Up Date — date field
- Call Disposition (Connected / VM / NA / Not Interested) — picklist

---

BDR DAILY WORKFLOW IN ZOHO:
1. Open Kanban view
2. Sort "Engaged" column by Next Follow-Up Date = Today
3. Work through Hot leads first (green), then Warm
4. After each call: update Stage, log Call Disposition, set Next Follow-Up Date
5. End of day: no lead in "Engaged" should have Next Follow-Up Date in the past`,
      },
      {
        id: 'automation',
        title: 'Automating Follow-Up Sequences in Zoho CRM',
        description: 'Build a 7-touch automated email + task sequence for cold leads',
        tag: 'Zoho Guide',
        content: `ZOHO CRM AUTOMATED SEQUENCE — 7-TOUCH COLD LEAD CADENCE

Go to: Setup → Automation → Cadences (or Workflow Rules for basic version)

---

SEQUENCE OVERVIEW (triggered when Lead Stage = "Contacted"):

Day 1 (Immediate):
  Action: Send Email — "Quick intro from Mav Consulting Group"
  Subject: "[First Name], quick question about your [leasing / investor] workflow"
  Body: 3-line intro, one specific pain point, CTA to book 20-min call

Day 2:
  Action: Create Task for BDR — "Call [Name] — Day 2 follow-up"
  Note: Reference the email sent yesterday

Day 4:
  Action: Send Email — "One thing our clients wish they'd done sooner"
  Body: Case study email — 23% conversion lift or $2.5M raise story, CTA to reply

Day 6:
  Action: Create Task for BDR — "LinkedIn connect + message to [Name]"
  Template message: "Hey [Name], sent you a couple emails about [CRM product] — wanted to connect here too. Would love to show you what we built for [property managers / capital raisers] in your market."

Day 8:
  Action: Send Email — "Last thing I'll send for now"
  Body: Permission-based breakup email. "I don't want to keep cluttering your inbox. Is this just bad timing, or not the right fit? Either answer helps me." CTA: reply "not now" or "let's talk"

Day 10:
  Action: Create Task for BDR — "Final call attempt before moving to nurture"

Day 30 (if no response):
  Action: Move to Stage "Nurture"
  Action: Enroll in monthly newsletter sequence
  Action: Create task — "Re-engage in 60 days"

---

RESULTS TO TRACK:
- Open rate per email (target: >40% for warm leads)
- Reply rate (target: >8% overall sequence)
- Conversion to Demo Scheduled from sequence (target: >5%)`,
      },
      {
        id: 'capraise-overview',
        title: 'CapRaise CRM — Key Features Overview',
        description: "Sameet's flagship product for commercial real estate capital raisers",
        tag: 'Product',
        content: `CAPRAISE CRM — PRODUCT OVERVIEW
Built on Zoho CRM | Designed for real estate syndicators, GPs, and capital raisers

---

CORE MODULES:

1. INVESTOR PIPELINE
   - Stage-based CRM: Prospect → Approached → Soft Commit → Hard Commit → Funded → Repeat Investor
   - Deal-level tracking: assign investors to specific offerings, track commitment amounts per deal
   - Pipeline analytics: total capital committed, gap to close, investor velocity

2. LINKCAP EXTENSION (LinkedIn Integration)
   - Chrome extension that pulls LinkedIn profiles directly into CapRaise as qualified leads
   - One-click import: name, title, company, email, connection degree
   - Auto-scores imported leads based on profile signals (real estate background, net worth signals, accreditation likelihood)

3. AI LEAD SCORING AGENT
   - Scores every prospect 0–100 based on: engagement history, profile fit, accreditation likelihood
   - Surfaces "investor-ready" prospects to the top of the pipeline automatically
   - Reduces time spent on leads who will never commit

4. SEC 506(c) COMPLIANCE AUTOMATION
   - Tracks accreditation verification status per investor
   - Automated reminders to collect updated accreditation docs before deal close
   - Compliance dashboard: % of investors verified, expiration dates, outstanding items

5. MULTI-CHANNEL CAMPAIGN MANAGEMENT
   - Email sequences, follow-up tasks, and call reminders per investor
   - Track email opens and clicks per investor per deal
   - Segment by: deal preference (multifamily vs. commercial), investment size, geography

6. INTEGRATIONS
   - Zoom (schedule investor calls directly)
   - DocuSign (send PPM and subscription docs for e-signature)
   - Gmail / Outlook (two-way email sync)
   - HubSpot migration support

---

IDEAL CUSTOMER PROFILE:
- Syndicators raising $1M–$50M per deal
- 20–500 investors in their network
- Running 1–5 concurrent offerings
- Currently managing investors in a spreadsheet or generic CRM`,
      },
      {
        id: 'rent-manager',
        title: 'Zoho CRM + Rent Manager Integration Guide',
        description: "How Mav Consulting's PM CRM connects Zoho to Rent Manager for property managers",
        tag: 'Integration',
        content: `ZOHO CRM + RENT MANAGER INTEGRATION
Mav Consulting Group's Property Management CRM connects the prospect-to-tenant journey between Zoho CRM and Rent Manager.

---

THE PROBLEM IT SOLVES:
Rent Manager is great at managing existing tenants (leases, maintenance, payments). It's not designed for prospect management — tracking new leads, running follow-up sequences, or measuring conversion rates. Zoho CRM fills that gap.

Without the integration: A leasing manager manually moves a prospect from "interested" in their email/spreadsheet to "tenant" in Rent Manager.

With the integration: The entire prospect-to-tenant journey is automated.

---

HOW THE INTEGRATION WORKS:

STEP 1 — LEAD CAPTURE (Zoho CRM)
All inbound leads (Zillow, Apartments.com, Facebook, Craigslist, web forms, phone) feed into Zoho CRM automatically via API integrations and web forms.

STEP 2 — NURTURE + QUALIFY (Zoho CRM)
Automated follow-up sequences run in Zoho: email, text, task reminders. Leasing pipeline stages: New Lead → Toured → Applied → Approved.

STEP 3 — MOVE-IN SYNC (Zoho → Rent Manager)
When a prospect reaches "Approved" stage in Zoho, the integration triggers a record creation in Rent Manager: new tenant record auto-populated with name, unit preference, contact info.

STEP 4 — REPORTING (Zoho CRM)
Conversion funnel report in Zoho: how many leads from each source become tenants, average days to lease, cost per lead by source.

---

KEY SELLING POINT FOR DEMOS:
"Right now you're probably managing your prospects somewhere separate from Rent Manager — email, spreadsheet, maybe a generic CRM. Every time someone moves from interested to applied to tenant, someone on your team is copying data by hand. That's where leads fall through. Our integration eliminates that completely."`,
      },
    ],
  },
  {
    id: 'learning',
    label: 'Learning Resources',
    items: [
      {
        id: 'zoho-training',
        title: 'Zoho Partner Training & Certification',
        description: 'Official Zoho learning resources for partner reps',
        tag: 'Training',
        content: `ZOHO PARTNER TRAINING RESOURCES

---

ZOHO LEARN (Official Training Platform)
URL: learn.zoho.com
Recommended courses for BDR/AE at Mav Consulting Group:
- Zoho CRM Fundamentals (free, 4 hrs)
- Zoho CRM Advanced Features (free, 6 hrs)
- Zoho CRM for Sales Teams (free, 3 hrs)
- Zoho Analytics Essentials (free, 2 hrs)

---

ZOHO SPARK (Partner Certification Program)
Purpose: Earn points toward advancing Mav Consulting's partner tier (Authorized → Advanced)
Certifications to pursue:
- Zoho CRM Certified Consultant
- Zoho CRM Plus Certified Administrator
Each certification = up to 100 points toward partner tier upgrade

Why this matters for BDR:
- Being certified lets you answer deep product questions on sales calls
- Increases deal velocity (fewer "let me check with our tech team" delays)
- Supports Mav Consulting advancing from Authorized to Advanced Partner tier

---

ZOHO MARKETPLACE
URL: marketplace.zoho.com
Study the top CRM extensions in the Real Estate category to understand the competitive landscape and what integrations prospects may already have.

---

ZOHO WEBINARS
Zoho runs free weekly webinars on CRM, automation, and integrations. Attend at least 2/month during ramp. Great for staying current on new features to mention on sales calls.`,
      },
      {
        id: 'challenger-sale',
        title: 'The Challenger Sale — Key Concepts',
        description: 'Matthew Dixon & Brent Adamson — essential reading for complex B2B sales',
        tag: 'Book',
        content: `THE CHALLENGER SALE — APPLIED TO MAV CONSULTING GROUP
Matthew Dixon & Brent Adamson

---

CORE THESIS:
The best B2B salespeople don't just build relationships — they teach, tailor, and take control of the sale. They "challenge" the prospect's thinking rather than simply validating their existing views.

---

HOW TO APPLY AT MAV CONSULTING GROUP:

TEACH (Reframe the problem):
Most prospects think their CRM problem is "we need a better tool."
The Challenger reframe: "Your problem isn't the tool — it's that your current process leaks revenue at 3 specific points: lead capture, follow-up timing, and conversion visibility. Let me show you where."

TAILOR (Customize the message by vertical):
- Property Manager message: "Every day a lead isn't followed up within 4 hours, conversion probability drops by 30%."
- Capital Raiser message: "Your best investors are talking to 5 other GPs right now. The one who stays top of mind with systematic follow-up wins the commitment."

TAKE CONTROL (Drive the sales process):
- Set a clear next step at the end of every call — never leave a call without a scheduled follow-up
- Send a written summary after every demo: "Based on our conversation, here's what we discussed and the next step we agreed on."
- When a deal stalls: "What would need to be true for you to make a decision in the next 30 days?"

---

KEY QUOTE TO INTERNALIZE:
"It's not about what you sell — it's about the insight you bring to the conversation."`,
      },
      {
        id: 'never-split',
        title: 'Never Split the Difference — Negotiation Tactics',
        description: 'Chris Voss — FBI negotiation techniques applied to B2B sales',
        tag: 'Book',
        content: `NEVER SPLIT THE DIFFERENCE — APPLIED TO CRM SALES
Chris Voss (Former FBI Lead Negotiator)

---

MOST USEFUL TECHNIQUES FOR MAV CONSULTING SALES:

1. TACTICAL EMPATHY — "It seems like…"
When a prospect says "we're not ready": "It seems like the timing isn't ideal right now. What would need to change for this to be a priority?"
Why it works: Validates their position without accepting it as final.

2. MIRRORING — Repeat the last 2–3 words
Prospect: "We're already looking at a few different options."
You: "A few different options?"
[They elaborate, giving you more information]

3. CALIBRATED QUESTIONS — "How" and "What" questions instead of "Yes/No"
Instead of: "Is this something you'd want to move forward with?"
Use: "What would need to happen on your end to move forward?"
Instead of: "Can we get this done by end of month?"
Use: "How do we make sure this fits your timeline?"

4. THE ACCUSATION AUDIT — Disarm objections before they're raised
"You're probably thinking this is going to be expensive to implement and a pain to get the team to use. Here's how we handle both of those concerns..."

5. "THAT'S RIGHT" vs. "YOU'RE RIGHT"
"You're right" = they're placating you, deal is stalling
"That's right" = genuine alignment, move forward
Watch for the difference in every sales conversation.

---

APPLIED TO PRICING CONVERSATIONS:
Never give the first number. "What's your budget for something like this?" gets you anchoring information. If they press: "Our solutions range depending on portfolio size and modules — the demo helps me scope the right option."`,
      },
      {
        id: 'cre-podcasts',
        title: 'CRE SaaS Sales — Podcast Recommendations',
        description: 'Top podcasts for staying sharp on CRE industry trends and SaaS sales',
        tag: 'Resources',
        content: `RECOMMENDED PODCASTS FOR BDR/AE AT MAV CONSULTING GROUP

---

FOR CRE INDUSTRY KNOWLEDGE (understand your buyer):

1. "The Real Estate Syndication Show" — Whitney Sewell
   Why: Deep dives into how syndicators raise capital, manage investor relations, and structure deals. Gives you language and credibility when talking to CapRaise CRM prospects.

2. "BiggerPockets Real Estate Podcast"
   Why: Breadth of CRE investing topics. Great for understanding the property management world and what operators care about.

3. "Commercial Real Estate Pro Network" — Darren Krauses
   Why: Focused on commercial real estate operators — your property management CRM buyers.

---

FOR SALES CRAFT:

4. "30 Minutes to President's Club" — Nick Cegelski & Armand Farrokh
   Why: Tactical, specific cold call scripts and objection handling. One of the best sales podcasts for BDRs. Direct and immediately actionable.

5. "The Sales Hacker Podcast" — Sam Jacobs
   Why: B2B SaaS sales strategy, RevOps, and go-to-market. Relevant for understanding how to scale Mav Consulting's sales org.

6. "Sell Better Daily Show" — James Buckley
   Why: Daily 15-minute episodes on specific sales skills. Great for the commute.

---

LISTENING GOAL: 30 mins/day during ramp period. Pick 1 CRE podcast + 1 sales podcast and alternate. Keep a notes doc in Zoho of talking points, objection ideas, and industry language to use on calls.`,
      },
      {
        id: 'bdr-benchmarks',
        title: 'B2B SaaS BDR KPI Benchmarks 2024',
        description: 'Industry benchmarks to calibrate your performance targets',
        tag: 'Benchmarks',
        content: `B2B SAAS BDR KPI BENCHMARKS — 2024
Source: Salesforce State of Sales, HubSpot Sales Report, Bridge Group BDR Report

---

ACTIVITY BENCHMARKS (per BDR, per month):
- Dials: 400–600 (average: 20–30/day)
- Conversations (live connections): 80–120 (15–20% connect rate on dials)
- Demos/meetings booked: 15–25 (20–25% of conversations)
- Demos attended (show rate): 70–80% of booked
- Opportunities created from BDR: 12–18/month

---

CONVERSION BENCHMARKS:
- Cold outreach → demo booking: 2–5%
- Warm inbound lead → demo booking: 20–40%
- Demo → qualified opportunity: 50–70%
- Opportunity → close (AE): 20–30% for SMB SaaS
- Average sales cycle: 30–60 days for SMB CRM deals

---

WHAT THIS MEANS FOR MAV CONSULTING (Year 1 BDR):

Realistic Month 1–2 targets (ramp period):
- 50–60 dials/day (ramping up)
- 8–10 demos booked/week by Month 2

Steady state (Month 3+):
- 80–100 dials/day
- 15–20 demos booked/week
- 1–2 new closed deals per week attributable to BDR pipeline

AE CAPACITY CHECK:
One AE running 25–30 demos/month at a 25% close rate = ~7 new clients/month.
At average ACV of $12K–$25K: $84K–$175K new MRR per AE per month.

This is the revenue math that justifies hiring the first AE and then the second BDR.

---

RAMP TIMELINE BENCHMARKS:
- Average BDR ramp to full productivity: 3.2 months (Bridge Group)
- Average time from BDR → AE promotion: 12–18 months (faster at early-stage startups)
- At Mav Consulting target: 4–5 months BDR → AE (founder is directly invested in your growth)`,
      },
    ],
  },
]
