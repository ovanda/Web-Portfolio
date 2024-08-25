import React from "react"
import './skills.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'


const Skills = () => {
    return (
      <section id='experience'>
          <h2>My Expertise</h2>
  
            <div className='experience_container'>
  
              <div className='experience_frontend'>
                  <h3>Frontend Development</h3>
                  <div className='experience_content'>
                      <article className='experience_details'>
                          <BsFillPatchCheckFill  className='icon'/>
                          <div>
                              <h4>HTML</h4>
                              <small className='text-light'>Experienced</small>
                          </div>
                      </article>
  
                      <article className='experience_details'>
                          <BsFillPatchCheckFill  className='icon'/>
                          <div>
                              <h4>CSS</h4>
                              <small className='text-light'>Intermediate</small>
                          </div>
                      </article>
  
  
                      <article className='experience_details'>
                          <BsFillPatchCheckFill className='icon' />
                          <div>
                              <h4>Javascript</h4>
                              <small className='text-light'>Intermediate</small>
                          </div>
                      </article>
  
  
                      <article className='experience_details'>
                          <BsFillPatchCheckFill className='icon'/>
                          <div>
                              <h4>React</h4>
                              <small className='text-light'>Intermediate</small>
                          </div>
                      </article> 
                  </div>
              </div>
  
              <div className='experience_backend'>
                  <h3>Backend Development</h3>
                  <div className='experience_content'>
                      <article className='experience_details'>
                          <BsFillPatchCheckFill className='icon' />
                          <div>
                              <h4>Node.js</h4>
                              <small className='text-light'>Experienced</small>
                          </div>
                      </article>
  
                      <article className='experience_details'>
                          <BsFillPatchCheckFill className='icon'/>
                          <div>
                              <h4>Express.js</h4>
                              <small className='text-light'>Intermediate</small>
                          </div>
                      </article>
  
                      <article className='experience_details'>
                          <BsFillPatchCheckFill className='icon' />
                          <div>
                              <h4>PostgreSql</h4>
                              <small className='text-light'>Experienced</small>
                          </div>
                      </article>
                  </div>
              </div>
  
              <div className='soft_skills'>
                  <h3>Tools</h3>
                  <div className='experience_content'>
                      <article className='experience_details'>
                          <BsFillPatchCheckFill className='icon' />
                          <div>
                              <h4>Git & GitHub</h4>
                              <small className='text-light'>Intermediate</small>
                          </div>
                      </article>
  
                      <article className='experience_details'>
                          <BsFillPatchCheckFill className='icon' />
                          <div>
                              <h4>VsCode</h4>
                              <small className='text-light'>Intermediate</small>
                          </div>
                      </article>
  
                      <article className='experience_details'>
                          <BsFillPatchCheckFill className='icon' />
                          <div>
                              <h4>Responsive Design</h4>
                              <small className='text-light'>Experienced</small>
                          </div>
                      </article>
  
                  </div>
  
              </div>
  
              <div className='tools'>
                  <h3>Soft Skills</h3>
                  <div className='experience_content'>
                      <article className='experience_details'>
                          <BsFillPatchCheckFill className='icon' />
                          <div>
                              <h4>Problem Solving</h4>
                              <small className='text-light'>Experienced</small>
                          </div>
                      </article>
  
                      <article className='experience_details'>
                          <BsFillPatchCheckFill className='icon' />
                          <div>
                              <h4>Collaboration</h4>
                              <small className='text-light'>Experienced</small>
                          </div>
                      </article>
  
                      <article className='experience_details'>
                          <BsFillPatchCheckFill className='icon' />
                          <div>
                              <h4>Attention to Details</h4>
                              <small className='text-light'>Experienced</small>
                          </div>
                      </article>
                  </div>
              </div>
          </div>     
      </section>
    )
}
  
  export default Skills
  