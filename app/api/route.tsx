import { NextResponse } from 'next/server'
import data from '../../public/data (1).json'
export async function GET() {
  
 
  return NextResponse.json( data  , {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}