export interface Booking {
    success: any;
    booking_id: number;
    booking_code: string;
    name: string;
    last_name: string;
    phone_number: string;
    email: string;
    tittle: string;
    initial_date: string | null;
    final_date: string | null;
    url: string;
}