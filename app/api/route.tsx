import { NextResponse } from 'next/server'
import data from '../../public/data (1).json'
export async function GET() {
  
 
  return NextResponse.json( data )
}