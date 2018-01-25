App Overview:

feedback platform for product marketers -sends bulk feedback forms to customers
-business facing

Features MVP:

-send many emails -billings -user accounts -authentication

Applications Flow:

-user signs in with o-auth -users pays for emails credits with stripe -user
creates new campaign (aka survey) -user enters email list -survey sent to users
-tabulate feedback -data vis of feedback

Useful commands:

-heroku open -heroku logs

Billing Paradigm:

-never accept raw credit card numbers
-never store credit card numbers
-always use an outside payment processor
**fraud and chargebacks are a pain
**possible to avoid monthly payments/multiple plans
