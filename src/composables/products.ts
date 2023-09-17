const BUS_1 : Vehicle = {
   name: 'Tayo',
   capacity: 19,
   price_inside_city: 1400000,
   price_outside_city: 1700000,
   img: '/img/tayo-1.jpg',
   price_by_destination: [
      {
         destination: 'Lembang',
         days: 1,
         price: 1400000
      },
      {
         destination: 'Ciwidey',
         days: 1,
         price: 1450000
      }
   ],
   href: '/products/tayo'
}

const BUS_2 : Vehicle = {
   name: 'Thomas',
   capacity: 25,
   price_inside_city: 1600000,
   price_outside_city: 2000000,
   price_by_destination: [
      {
         destination: 'Lembang',
         days: 1,
         price: 1400000
      },
      {
         destination: 'Ciwidey',
         days: 1,
         price: 1450000
      }
   ],
   img: '/img/tayo-2.jpg',
   href: '/products/thomas'
}

const BUS_3 : Vehicle = {
   name: 'Lani',
   capacity: 30,
   price_inside_city: 1900000,
   price_outside_city: 2300000,
   price_by_destination: [
      {
         destination: 'Lembang',
         days: 1,
         price: 1400000
      },
      {
         destination: 'Ciwidey',
         days: 1,
         price: 1450000
      }
   ],
   img: '/img/tayo-3.jpg',
   href: '/products/lani'
}

export const useVehicle = (slug: string) => {
   let data = null
   
   switch (slug) {
      case 'tayo':
         data = BUS_1
         break
      case 'thomas':
         data = BUS_2
         break
      case 'lani':
         data = BUS_3
         break
      default:
         break
   }

   return data
}

export const useProducts = () => {
   const data = [
      BUS_1,
      BUS_2,
      BUS_3
   ]
   
   return data
}

interface Vehicle {
   name: string
   capacity: number
   price_inside_city: number
   price_outside_city: number
   price_by_destination?: PriceByDestination[]
   href: string
   img?: string
}

interface PriceByDestination {
   destination: string
   days: number
   price: number
}