# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Car.destroy_all

c1 = Car.create(make: "Honda", model: "Accord", year: 2008, miles: 75567, price: 78, category: "Sedan", img_url: "https://cdn.jdpower.com/Models/640x480/2008-Honda-AccordSdn-EX.jpg")
c2 = Car.create(make: "Lexus", model: "IS 300", year: 2020, miles: 3, price: 443, category: "Sedan", img_url: "https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/212x141/quality/85/https://s.aolcdn.com/commerce/autodata/images/CAC80LEC082A021001.jpg")
c3 = Car.create(make: "Ford", model: "F-250", year: 2017, miles: 78242, price: 361, category: "Truck", img_url: "https://d1arsn5g9mfrlq.cloudfront.net/sites/default/files/2017_ford_f-250_lariat_3263_hr_720_0.jpg")
c4 = Car.create(make: "Chevrolet", model: "Suburban", year: 2010, miles: 65789, price: 225, category: "SUV", img_url: "https://cars.usnews.com/static/images/Auto/izmo/318420/2010_chevrolet_suburban_angularfront.jpg")
c5 = Car.create(make: "Nissan", model: "370Z", year: 2012, miles: 51392, price: 240, category: "Coupe", img_url: "https://cars.usnews.com/static/images/Auto/izmo/336493/2012_nissan_370z_angularfront.jpg")
c6 = Car.create(make: "Chevrolet", model: "Express 2500", year: 2015, miles: 120689, price: 560, category: "Van", img_url: "https://images.autotrader.com/scaler/620/420/cms/images/cars/chevrolet/express-2500/2014/215362.jpg")
c7 = Car.create(make: "Lexus", model: "RX 350", year: 2012, miles: 33438, price: 326, category: "Crossover", img_url: "https://www.cstatic-images.com/car-pictures/xl/cac20les121a0101.png")
c8 = Car.create(make: "Volkswagen", model: "CC", year: 2014, miles: 24507, price: 163, category: "Sedan", img_url: "https://file.kelleybluebookimages.com/kbb/base/house/2014/2014-Volkswagen-CC-FrontSide_VWCC141_640x480.jpg")
c9 = Car.create(make: "Hyundai", model: "Genesis", year: 2015, miles: 38383, price: 204, category: "Sedan", img_url: "https://st.motortrend.com/uploads/sites/10/2015/11/2015-hyundai-genesis-3.8-sedan-angular-front.png")
c10 = Car.create(make: "Chrysler", model: "Aspen", year: 2017, miles: 47842, price: 266, category: "SUV", img_url: "https://nicecarsinfo.com/wp-content/uploads/2016/01/2017-Chrysler-Aspen-Concept-NCI-2-1280x720.jpg")





