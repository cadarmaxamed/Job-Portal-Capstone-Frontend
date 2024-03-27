import React from "react";
//import { JobImg } from "../assets";

const AboutPage = () => {
  return (
    <div className='container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 '>
      <div className='w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5'>
        <div className='w-full md:2/3 2xl:w-2/4'>
          <h1 className='text-3xl text-blue-600 font-bold mb-5'>About Us</h1>
          <p className='text-justify leading-7'>
            Microsoft Corporation and its contributors are available at
            http://www.microsoft.com and at http://www.microsoft.com for more
            information about the contributors and contributors to the Microsoft
            Corporation and its contributors to the Microsoft Corporation and
            its contributors to the Microsoft Corporation
          </p>
        </div>
        <img src={JobImg} alt='About' className='w-auto h-[300px]' />
      </div>

      <div className='leading-8 px-5 text-justify'>
        <p>
            About Us

            Welcome to TechJobs For All, your one-stop destination for connecting tech professionals with exciting career opportunities worldwide. At TechJobs For All, we're committed to revolutionizing the way individuals and companies discover talent and find their dream jobs.

            Our Mission

            Our mission is to empower both job seekers and employers by providing a seamless platform where talent meets opportunity. We strive to bridge the gap between tech talent and innovative companies, facilitating meaningful connections that drive success and growth.

            What Sets Us Apart

            TechJobs For All stands out from the crowd with its user-friendly interface, robust search capabilities, and personalized job matching algorithms. Our platform is designed to cater to the unique needs of both job seekers and employers, offering unparalleled convenience and efficiency in the recruitment process.

            For Job Seekers

            For job seekers, TechJobs For All offers a vast array of career opportunities in the tech industry, ranging from software development and data science to cybersecurity and artificial intelligence. With intuitive search filters and personalized recommendations, finding the perfect job has never been easier.

            For Employers

            For employers, TechJobs For All provides access to a diverse pool of talented professionals eager to contribute to their organizations' success. Our advanced recruitment tools and employer branding options help companies attract top talent and build high-performing teams.

            Our Commitment to Diversity and Inclusion

            At TechJobs For All, we believe in the power of diversity and inclusion to drive innovation and foster a vibrant tech community. We are committed to creating an inclusive platform where individuals from all backgrounds feel valued, respected, and empowered to pursue their career aspirations.

            Get Started Today

            Whether you're a job seeker ready to take the next step in your career journey or an employer seeking top talent to drive your company's growth, TechJobs For All is here to support you every step of the way. Join our community today and discover endless possibilities in the world of tech.
    </p>
</div>
</div>
  );
};

export default AboutPage;