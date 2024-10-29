import React from 'react'
import Container from '../global/container'
import { LampContainer } from './lamp'
import { Button } from './button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

function LampText() {
  return (
                 <Container className='md:mt-12'>
                    <LampContainer>
                        <div className="flex flex-col items-center justify-center relative w-full text-center">
                            <h2 className="text-4xl lg:text-4xl xl:text-6xl lg:!leading-snug font-semibold mt-8"
                              style={{ fontFamily: 'ethocentric' }}
                            >
                              Besök oss  <br />  Idag
                            </h2>
                            <p className="text-muted-foreground mt-6 max-w-md mx-auto">
                            Välkommen in för en upplevelse fylld av spel, spänning och gemenskap. Hos oss finns något för alla – vi ser fram emot ditt besök!                            </p>
                            <Button variant="white" className="mt-6" asChild>
                                <Link href="https://www.google.com/maps/search/?api=1&query=Xtream+E-sport+Arena+Spelhall+Göteborg,+Kyrkvägen+19,+433+33+Partille"
                                  target="_blank"
                                >
                                Hitta hit                                    
                                <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </Button>
                        </div>
                    </LampContainer>
                    
                </Container>
  )
}

export default LampText