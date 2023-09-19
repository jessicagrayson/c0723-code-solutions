select "addresses"."line1",
"addresses"."district",
"cities"."name"
from "cities"
join "addresses"
on "addresses"."cityId" = "cities"."cityId"
