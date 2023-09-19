select
"customers"."firstName",
"customers"."lastName",
"payments"."amount"
from
"customers"
join "payments"
ON
"customers"."customerId" = "payments"."customerId"
order by
"payments"."amount" DESC
limit 10;
