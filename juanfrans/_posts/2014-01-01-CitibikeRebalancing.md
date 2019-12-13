---
layout: post
title:  Citibike Rebalancing Study
date:   2014-01-01
thumbImagePath: assets/thumbs/citibikeRebalancing.png
shortDescription: A visual exploration of New York City's Citibike usage patterns, specially centered on its rebalancing issues.
mainImagePath: assets/projectImages/citibikeRebalancing/citibikeRebalancing_main.png
---
*This project was developed at the [Spatial Information Design Lab](http://spatialinformationdesignlab.org/).*

As has been documented by the press, one of the major challenges that Citibike is facing is the rebalancing of their stations. As origins and destinations of Citibike trips are not necessarily symmetrical during the day, Citibike has been forced to constantly move bikes around the city, taking them from full stations and delivering them to empty ones. This problem is both financially expensive and frustrating for Citibike users: many people complain about either not finding bikes at their stations of origin or not finding empty spots when they arrive at their final destinations.

To study this problem we have created a series of visualizations which should serve as a starting point for further analysis.

First, we visualized the average activity for weekdays in October 2013. As the two animations below shows, the activity hotspots remain pretty constant throughout the day, specially between 10am and midnight, with most of the activity centered around Union Square. In addition, we also see how both Grand Central and Penn Station become strong hotspots during peak hours. Of interest, though, is the sudden shift that occurs around 5am, with the activity hotspots switching from the East Village/Lower East Side area, to Grand Central and Penn Station. This is probably due to the fact that during most of the night, compared to other areas, the stations in the East Village/Lower East Side continue to have high activity, but during most of the day, and specially during peak hours, they are not as active as the stations around Union Square or Grand Central and Penn Station.

![Citibike hourly activity](../../../assets/projectImages/citibikeRebalancing/Citibike_Hourly_Activity_02.gif)

Next, we visualized overall patterns of origins and destinations. As the image below shows, the big hotspots of imbalance are mostly located around the East Village, Lower East Side, Midtown East and West and Union Square. However, the variation of these hotspots throughout the day is pretty extensive and it's very difficult to detect smooth transitions apart from peak hours. Of note are a couple of big "jumps" between origins and destinations, one of them around 1-2pm on the East Village/Lower East Side and another one around 5am also in the same area.

![Citibike hourly balances](../../../assets/projectImages/citibikeRebalancing/Citibike_Hour_by_Hour_02.gif)

We also created a series of imbalance matrices (by hour of day) for every single station on the system. Again, using the same data as the animations above, this first matrix clearly shows how the big imbalances happen (as expected) mainly between 6am and 10am (morning peak hour) and between 4pm and 8pm (evening peak hour). However, there are some stations whose imbalance starts and ends earlier, like 8th Ave. & 31st Street, W 33rd Street & 7th Ave. and W 41st Street & 8th Ave. (more origins than destinations starting around 2pm). In addition, this matrix also shows that not all of the stations suffer from big imbalances during peak hours. Indeed, stations like E 31st Street & 3rd Ave or E 32nd Street & Park Ave. barely have any imbalances during peak hours.

![Citibike hourly balances - columns](../../../assets/projectImages/citibikeRebalancing/Citibike_Rebalancing_Columns.jpg)

The graph below is another way of looking at the same data: each dial represents one station and shows both the activity and the level of imbalance per hour for an average day in October. The activity is represented by the length of each bar showing the percentage of the total daily activity for every hour; and the direction and level of imbalance are represented by the color of the bar and the intensity of the hue.

![Citibike hourly balances - dials](../../../assets/projectImages/citibikeRebalancing/Citibike_Rebalancing_Dials.png)

Furthermore, as not all of the stations have the same level of activity, we produced two more matrices, both showing station imbalance, but this time comparing it to the overall hourly activity for each station. The first one shows the imbalance as a percentage of the activity for that hour. Hence, the great imbalances appearing late at night, when there are fewer trips and there's a higher chance of having all of them as origins or destinations. However, it is still interesting to see that there are higher imbalances during the morning peak hour than during the evening one, as a percentage of the overall activity.

And the second matrix shows the imbalance as colors and the overall activity as brightness, so we can see how in the hours between the peak times there's still a lot of activity but it is mostly well balanced. In addition, we can see how late at night (imbalanced as it may be) there's still very little activity. Finally, we can also see some outlier stations with a lot of activity and still pretty imbalanced: for example, in the morning 8th avenue and 31st street, 17th street and Broadway, Lafayette and 8th street, and Pershing Square (north); and in the evening 8th avenue and 31st street, 41st street and 8th avenue and again Pershing Square (north).

![Citibike hourly balances - columns 2](../../../assets/projectImages/citibikeRebalancing/Citibike_Rebalancing_Columns_02.png)

![Citibike hourly balances - columns 3](../../../assets/projectImages/citibikeRebalancing/Citibike_Rebalancing_Columns_03.png)

Finally, we have created hotspot maps for both the AM and the PM peak hours. As you can see from the maps below, Citibike activity closely matches what we would expect to see in New York: the AM peak hour map shows people leaving residential neighborhoods (Lower East Side, East Village, Chelsea and Hells Kitchen) and arriving at Midtown East and the Financial District, and the PM peak hour map shows the reverse. To note, however, is the fact that these two maps are not completely symmetrical, meaning that there are certain trips that happen in the morning which do not have their counterpart in the evening, and vice versa. Also, there are some stations that while being inside imbalance hotspots do not show that large of an imbalance. These stations have been outlined on the maps and should be further studied.

![Citibike hotspots AM](../../../assets/projectImages/citibikeRebalancing/Citibike_Hotspot_AM.png)

![Citibike hotspots PM](../../../assets/projectImages/citibikeRebalancing/Citibike_Hotspot_PM.png)

All the visualizations above were created using the "trip" data, available [here](http://www.citibikenyc.com/system-data), which contains every single CitiBike trip. However, CitiBike also releases ["station" data](http://www.citibikenyc.com/stations/json), in json format, which is updated every two minutes and contains information on how many bikes area available at each station and how many empty docks there are. With this dataset we created the next series of graphs, in an effort to visualize how full or empty a station was during the first week of May 2014.

In these series the blue and orange colors indicate that the stations are either more than 80% full or less than 20% full. In this first graph, one can also see the peak hours during the weekdays - represented by a greater density of lines - and the absence of those during Saturday and Sunday. In general though, these graphs show the magnitude of the problem with most stations being either almost empty or full - mostly empty - most of the time.

![Line graph](../../../assets/projectImages/citibikeRebalancing/Citibike_Line_Graph.png)

Finally, this last graph also uses the "station" data. However, here every row represents a station and every column its status for those two minutes. As in the images before, one can see that most of the time, the majority of stations are either less than 20% empty or more than 80% full, with an emphasis on emptiness. It is also possible to see the peak hours and the difference between weekdays and the weekend.

![DNA graph](../../../assets/projectImages/citibikeRebalancing/Citibike_DNA_Graph.png)

*Built with [ArcGIS](https://www.arcgis.com/), [Adobe Illustrator](https://www.adobe.com/products/illustrator.html), and [Processing](https://processing.org).*