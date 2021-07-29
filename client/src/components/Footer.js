import React from 'react'

export default function Footer() {
    return (
        <div class='bg-gray-400 flex flex-row mx-auto text-center content-center'>
            <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></link>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous"/>


            
                <div class='button-container flex flex-row mx-auto text-center content-center m-2'>
                    <ul class='flex flex-row'>
                        <li class= 'f-btn'><a href='https://www.facebook.com/nanosar/'><i class="fab fa-facebook-square fa-4x"></i></a></li>
                        
                        <li class= 'f-btn'><a href='https://www.instagram.com/nathannosar/'><i class="fab fa-instagram-square fa-4x"></i></a></li>
                        <li class= 'f-btn'><a href='https://www.linkedin.com/in/nathan-nosar-b105a26a/'><i class="fab fa-linkedin fa-4x"></i></a></li>
                        <li class= 'f-btn'><a href='https://github.com/nanosar90'><i class="fab fa-github-square fa-4x"></i></a></li>
                        <li class= 'f-btn'><a href='https://nathan.nosar@gmail.com'><i class="fas fa-envelope-square fa-4x"></i></a></li>
                        




                    </ul>
                    
                </div>  
        </div>
    )
}