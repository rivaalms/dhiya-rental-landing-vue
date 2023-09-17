const vehicles : Array <Vehicle> = [
   {
      name: 'Tayo',
      slug: 'tayo',
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
   },
   {
      name: 'Thomas',
      slug: 'thomas',
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
   },
   {
      name: 'Lani',
      slug: 'lani',
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
]

/**
 * Retrieve single vehicle's data
 * @param { string } slug
 * @return { Vehicle | null }
 */
export const useVehicle = (slug: string) : Vehicle | null => {
   const data = vehicles.find((item: Vehicle) => item.slug === slug)
   
   if (!data) return null
   return data
}

/**
 * Retrieve all vehicles' data
 * @return { Vehicle[] }
 */
export const useProducts = () : Vehicle[] => {
   return vehicles
}

/**
 * Convert number to currency-formatted string
 * @param { number } price
 * @return { string } The currency is using IDR
 */
export function useCurrency(price: number) : string {
   const formatted = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
   })
   .format(price)

   return formatted
}

interface Vehicle {
   name: string
   slug?: string /* use hyphen as word separator (eg: this-is-a-word) */
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