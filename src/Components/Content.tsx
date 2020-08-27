import React from 'react';
import { makeStyles, Theme, createStyles, Tooltip, Typography, Hidden } from '@material-ui/core';
import { SignalWifi1BarLockSharp, DriveEta } from '@material-ui/icons';
import game from '../images/game.png';
import keyPoint from '../images/KeyPoint.png';

const Fade = require('react-reveal/Fade');

export default function Content() {
  const classes = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        [theme.breakpoints.up('md')]: {
          marginLeft: 350
        }
      },
      page: {
        minHeight: '100vh',
        scrollSnapAlign: 'start',
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
          paddingTop: 50,
          minHeight: 0,
          scrollSnapAlign: 'none'
        }
      },
      sectionName: {
        fontSize: '1.2vw',
        margin: 0,
        fontWeight: 'bold',
        display: 'inline',
        textAlign: 'left',
        padding: 0,
        paddingLeft: '0.5em',
        paddingRight: '0.5em',
        backgroundColor: theme.palette.primary.light,
        color: 'white',
        [theme.breakpoints.down('xs')]: {
          fontSize: '2vw'
        }
      },
      title: {
        margin: 0,
        fontSize: '4vw',
        fontWeight: 'bolder',
        textShadow: '#bbb 0 0 5px',
        color: theme.palette.primary.light,
        [theme.breakpoints.down('xs')]: {
          fontSize: '5vw'
        }
      },
      titleDiscription: {
        fontSize: '1.2vw',
        paddingLeft: '1vw',
        fontWeight: 'lighter',
        textShadow: 'none',
        color: theme.palette.primary.light,
        [theme.breakpoints.down('xs')]: {
          fontSize: '2vw'
        }
      },
      subTitle: {
        fontSize: '2vw',
        paddingLeft: '2vw',
        fontWeight: 'normal',
        textShadow: 'none',
        color: theme.palette.primary.light,
        [theme.breakpoints.down('xs')]: {
          fontSize: '3vw'
        }
      },
      titleWrapper: {
        marginLeft: '10%',
        paddingTop: '5%',
        display: 'flex',
        flexDirection: 'column'
      },
      largeTitle: {
        display: 'block',
        fontSize: '5.5vw',
        textAlign: 'center',
        paddingTop: '5.5vw',
        fontWeight: 'lighter',
        color: theme.palette.primary.light,
        textShadow: '#bbb 0 0 10px',
        [theme.breakpoints.down('xs')]: {
          fontSize: '8vw'
        }
      },
      contentWrapper: {
        paddingTop: '5vh',
        width: '80%',
        margin: 'auto'
      },
      description: {
        fontSize: '1.3vw',
        color: 'black',
        textAlign: 'center',
        margin: 'auto',
        lineHeight: '160%',
        fontWeight: 'lighter',
        [theme.breakpoints.down('sm')]: {
          fontSize: '2vw'
        },
        [theme.breakpoints.down('xs')]: {
          fontSize: '3.2vw'
        }
      },
      emphasis: {
        color: theme.palette.primary.light,
        fontWeight: 'normal',
        textShadow: '#bbb 0 0 2px'
      },
      link: {
        color: theme.palette.success.light,
        textDecoration: `underline dashed 1px ${theme.palette.success.light}`,
        fontWeight: 'normal',
        '&:hover': {
          color: theme.palette.success.light,
          textDecoration: `underline solid 1px ${theme.palette.success.light}`,
          textShadow: '#bbb 0 0 2px'
        },
        '&:visited': {
          color: theme.palette.success.light,
        },
        '&:active': {
          color: theme.palette.success.light,
        }
      },
      transition: {
        position: 'absolute',
        bottom: '2vw',
        fontSize: '1.2vw',
        margin: 'auto',
        width: '100%',
        color: theme.palette.success.light,
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
          fontSize: '2vw'
        },
        [theme.breakpoints.down('xs')]: {
          fontSize: '3vw'
        }
      },
      media: {
        marginTop: '5vh',
        marginBottom: '5vh',
        width: 300,
        margin: 'auto',
        display: 'block',
        boxShadow: '#ccc 0 0 10px',
        [theme.breakpoints.down('xs')]: {
          width: '80%'
        }
      }
    })
  )();

  return (
    <div className={classes.root}>
      <section id="aboutMe">
        <section className={classes.page}>
          <Fade up>
            <span className={classes.largeTitle}>About Me</span>
          </Fade>
          <Fade up>
            <div className={classes.contentWrapper}>
              <div className={classes.description}>
                👋 Hello! Thank you for visiting this web page. 🎉 
                <br />
                My name is <span className={classes.emphasis}>Yihao Wang</span>. I am a recent graduate  
                from the University of Auckland with a <span className={classes.emphasis}>Post-Graduate Certificate in IT</span>. 
                Prior to this, I also got a Bachelor's Degree in Science and a Master's Degree in Accounting (with Distinction).
                <br />
                I have been learning programming for about 2 years now, and each day I am becoming a bit better at it and a bit more passionate about it.
                I enjoy programming in  
                <Tooltip title={<Typography>Of course, this includes HTML5 and CSS3.</Typography>}><span className={classes.link}> JavaScript/Typescript </span></Tooltip>, <span className={classes.emphasis}> C# </span>, 
                and I have also written code in <span className={classes.emphasis}> Java </span> and <span className={classes.emphasis}> C </span>.
                I am familiar with <span className={classes.emphasis}> Node.js </span>, <span className={classes.emphasis}>React</span> and <span className={classes.emphasis}>.Net Core</span>, and I am hoping to become a <span className={classes.emphasis}>full-stack developer</span> in the near future.
                <br /><br />
                I created this web page using React with Typescript and Material-UI. This is a chronological introduction of myself that I hope will help you know more about me. 
              </div>
            </div>
          </Fade>
          <Hidden xsDown>
            <Fade up>
              <div className={classes.transition}>👇 Scroll down to know more about my education background</div>
            </Fade>
          </Hidden>
        </section>
      </section>
      <section id="pekingUniversity">
        <section className={classes.page}>
          <Fade up>
            <div className={classes.titleWrapper}>
              <span>
                <p className={classes.sectionName}>EDUCATION</p>
              </span>
              <span className={classes.title}>
                Peking University
            <span className={classes.titleDiscription}>2012.9 - 2017.7</span>
              </span>
            </div>
          </Fade>
          <Fade up>
            <div className={classes.contentWrapper}>
              <div className={classes.description}>
                <br />
                In July of 2017, I graduated with a 
                <span className={classes.emphasis}> Bachelor's Degree of Science in Psychology </span> 
                from <span className={classes.emphasis}> Peking University </span>, which is one of the 
                <span className={classes.emphasis}> top two </span> universities in China.
                <br /><br />
                Though my major was not in CS, I had some exposure to programming, as my courses includes
                <span className={classes.emphasis}> Introduction to Computing Theories </span> and
                <span className={classes.emphasis}> Data Structure and Algorithms </span>. 
                I learned a bit about the <span className={classes.emphasis}> C Programming Language </span>
                and <span className={classes.emphasis}> Matlab </span>.
              </div>
            </div>
          </Fade>
        </section>
        <section className={classes.page}>
          <Fade>
            <div className={classes.contentWrapper}>
              <div className={classes.description}>
                <br /><br /><br />
                I also had my first <span className={classes.emphasis}>internship </span> during this period.
                <br />
                I worked as an HR, and my daily job was to screen CVs and interview candidates. 
                <br /><br />
                Each month, I needed to help my mentor make a monthly report, which was kind of laborious, because I needed to calculate all kinds of 
                ratios from piles of data exported from the company's system, and turn them into charts to put on slides. So I managed to write an 
                <span className={classes.emphasis}> Excel Macro </span> using <span className={classes.emphasis}> VBA </span>
                to automatically get this reporting job done. That program was used for a long time even after I finished that intern. This was 
                my first experience of using programming to solve problems. I did not think of being a professional developer then. But I loved the feeling
                of achievement. It was good.
              </div>
            </div>
          </Fade>
        </section>
      </section>
      <section id="victoriaUniversity">
        <section className={classes.page}>
          <Fade up>
            <div className={classes.titleWrapper}>
              <span>
                <p className={classes.sectionName}>EDUCATION</p>
              </span>
              <span className={classes.title}>
                Victoria University
            <span className={classes.titleDiscription}>2017.11 - 2019.9</span>
              </span>
            </div>
          </Fade>
          <Fade up>
            <div className={classes.contentWrapper}>
              <div className={classes.description}>
                After I graduated from Peking University, I came to New Zealand, and I love this country.
                <br /><br /> 
                I began studying towards a <span className={classes.emphasis}> Master's Degree in Professional Accounting </span> in <span className={classes.emphasis}> Victoria University of Wellington </span>.
                Accounting was a completely new area for me, but I managed to graduate with <span className={classes.emphasis}> distinction </span>. 
                Because of my good academic performance, I recieved <a className={classes.link} href="https://www.wgtn.ac.nz/business/about/news/business-school-celebrates-top-students" target="_blank"> 2019 Wellington School of Business and Government Top Student Award for the Master of Professional Accounting </a> 
                and <a className={classes.link} href="https://www.wgtn.ac.nz/scholarships/annual-prizes/prize-details?result_1736977_result_page=248" target="_blank"> MPA Award - CPA Australia Prize 2019 </a> .
                <br /><br />
                Despite that I am no longer looking for a job in accounting now, I still regard these as great encouragement to me.
                They show that I am able to <span className={classes.emphasis}> learn new things well and quickly </span>, and most importantly, that I enjoy doing so.
              </div>
            </div>
          </Fade>
        </section>
        <section className={classes.page}>
          <Fade up>
            <div className={classes.contentWrapper}>
              <div className={classes.description}>
                <br /><br /><br />
                It was during this period of time that I made up my mind to <span className={classes.emphasis}> become a professional developer </span>.
                I found myself more interested in understanding how a piece of accounting software worked than in learning how to use it, 
                in automating things with programs than in memorising the rules, and in solving problems with passion and creativity than in repeated works.
                <br /><br />
                So, in the last two trimesters of program, I started seriously learning programming on my own. I got myself familiar with 
                <span className={classes.emphasis}> HTML </span>, <span className={classes.emphasis}> CSS </span> and <span className={classes.emphasis}> JavaScript </span>. 
                I studied through K&R's awesome book <span className={classes.emphasis}> The C Programming Language </span>. I also took a wonderful course 
                on Coursera on computer architecture and compilers - <a className={classes.link} href="https://coursera.org/share/bf6bd6231e4178c5aaff434b592c063b" target="_blank"> Nand to Tetris </a>, 
                which is one of the top courses on that platform.
              </div>
            </div>
          </Fade>
        </section>
      </section>
      <section id="universityOfAuckland">
        <section className={classes.page}>
          <Fade up>
            <div className={classes.titleWrapper}>
              <span>
                <p className={classes.sectionName}>EDUCATION</p>
              </span>
              <span className={classes.title}>
                University of Auckland
            <span className={classes.titleDiscription}>2020.3 - 2020.7</span>
              </span>
            </div>
          </Fade>
          <Fade up>
            <div className={classes.contentWrapper}>
              <div className={classes.description}>
                <br />
                Wanting to learn more of programming, I enrolled in the <span className={classes.emphasis}> Post-Graduate Certificate in Information Technology </span> program in <span className={classes.emphasis}> University of Auckland </span>.
                This program consisted of two courses: <span className={classes.emphasis}> Programming for Industry </span> which taught <span className={classes.emphasis}> Java </span>, and <span className={classes.emphasis}> Programming with Web Technologies </span> which taught <span className={classes.emphasis}> HTML </span>, <span className={classes.emphasis}> CSS </span>, <span className={classes.emphasis}> JavaScript </span> and <span className={classes.emphasis}> Git </span>.
                <br /><br />
                As I was already familiar with some of these topics, I used my spare time to learn more. I finished Princeton University's <a className={classes.link} href="https://github.com/CoderYihaoWang/PrincetonAlgorithms" target="_blank"> Algorithms </a> and Washington University's 
                <a className={classes.link} href="https://coursera.org/share/0ab6c95f691aba7e194065c02a5637e4" target="_blank"> Programming Languages </a> (which taught functional programming) on Coursera. And I also learned some <span className={classes.emphasis}>C#</span>.
              </div>
            </div>
          </Fade>
        </section>
        <section className={classes.page}>
          <Fade up>
            <div className={classes.contentWrapper}>
              <div className={classes.description}>
                <br /><br /><br /><br />
                I graduated with <span className={classes.emphasis}> A+ </span> on both courses. After graduation, 
                I took some time to get myself familiar with <span className={classes.emphasis}> Typescript </span>, <span className={classes.emphasis}> React </span>, <span className={classes.emphasis}> .Net Core </span> and <span className={classes.emphasis}> Azure </span>, 
                in order to make myself feel ready to start out as a developer in the industry.
                <br /><br />
                During my learning of programming, I have made some projects which I am proud of, and I would like to share some of these with you. 😃
              </div>
            </div>
          </Fade>
          <Hidden xsDown>
            <Fade up>
              <div className={classes.transition}>👇 Scroll down to know more about my programming projects</div>
            </Fade>
          </Hidden>
        </section>
      </section>
      <section id="nandToTetris">
      <section className={classes.page}>
          <Fade up>
            <div className={classes.titleWrapper}>
              <span>
                <p className={classes.sectionName}>PROJECT</p>
              </span>
              <span className={classes.title}>
                Nand to Tetris
            <span className={classes.subTitle}>- A computer built from scratch</span>
              </span>
            </div>
          </Fade>
          <Fade>
            <div className={classes.contentWrapper}>
              <div className={classes.description}>
                <br />
                This is the project that I built along the course <a className={classes.link} href="https://coursera.org/share/bf6bd6231e4178c5aaff434b592c063b" target="_blank">Nand to Tetris</a>.
                It consists of 12 sub-projects, which, when fitted together, make a complete computer built from scratch.
                These include <span className={classes.emphasis}> logic gates </span>, the <span className={classes.emphasis}> ALU </span> and <span className={classes.emphasis}> CPU </span>, the <span className={classes.emphasis}> machine language </span>, 
                the <span className={classes.emphasis}> assembly language </span> and the <span className={classes.emphasis}> assembler </span>, the <span className={classes.emphasis}> virtual machine </span>, 
                the <span className={classes.emphasis}> high-level language </span> and its <span className={classes.emphasis}> compiler </span>, the <span className={classes.emphasis}> OS </span> and finally a <span className={classes.emphasis}> game </span> that runs on this computer.
                <br /><br />
                I built this during my master's degree. It gave me good understanding of many fundamental concepts in computer science, as well as 
                encouraged me to explore more.
              </div>
            </div>
          </Fade>
        </section>
        <section className={classes.page}>
          <Fade>
            <div className={classes.contentWrapper}>
              <div className={classes.description}>
                <br /><br />
                This is the final part of this project - an RPG game I designed called <span className={classes.emphasis}> Magic Tower </span>. 
                <br />
                Despite it looks primitive, it was built completely from scratch - I mean, from hardware logic, to machine language,
                to assembly language, to virtual machine and the high level language, to the pixel-level rendering on the screen, 
                and finally to the game logic - I needed to build all of them.
              </div>
              <iframe className={classes.media} frameBorder={0} src="https://www.youtube.com/embed/03VlOt-UVdA" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; full-screen" allowFullScreen></iframe>
              <div className={classes.description}>
                You can have a look at the <a className={classes.link} href="https://github.com/CoderYihaoWang/Nand2Tetris" target="_blank"> source code </a>, or know more about this project on its <a className={classes.link} target="_blank" href="https://www.nand2tetris.org/"> official site </a>.
              </div>
            </div>
          </Fade>
        </section>
      </section>
      <section id="div">
        <section className={classes.page}>
          <Fade up>
            <div className={classes.titleWrapper}>
              <span>
                <p className={classes.sectionName}>PROJECT</p>
              </span>
              <span className={classes.title}>
                div
            <span className={classes.subTitle}>- A Turing-complete programming language</span>
              </span>
            </div>
          </Fade>
          <Fade up>
            <div className={classes.contentWrapper}>
              <div className={classes.description}>
                <a className={classes.link} target="_blank" href="https://coderyihaowang.github.io/Div/"> div </a> is the <span className={classes.emphasis}> interpreter </span> of a minimal programming language, written in only 500 lines of <span className={classes.emphasis}> JavaScript </span> code.
                It is an experimental project which tried to answer the popular question: "is HTML a programming language?"
                My answer to it is: yes, if you write an interpreter for it. 
                <br /><br />
                Any valid div code is also a valid HTML5 file (syntax-wise). You can insert this interpreter
                using the &lt;script&gt; tag on a HTML5 file. And then it will treat the HTML elements on the page as the syntax tree.
                The end result is a Lisp-like <span className={classes.emphasis}> functional programming language </span>, which supports <span className={classes.emphasis}> recursion </span>, <span className={classes.emphasis}> first-class function </span> and <span className={classes.emphasis}> closure </span>. It is 
                theoretically <span className={classes.emphasis}> Turing-complete </span>. You can have a look at the <a className={classes.link} target="_blank" href="https://github.com/CoderYihaoWang/Div"> source code and the language specification </a>,
                 and <a className={classes.link} target="_blank" href="https://coderyihaowang.github.io/Div/"> here </a> are some demos.
              </div>
            </div>
          </Fade>
        </section>
      </section>
      <section id="keyPoint">
        <section className={classes.page}>
          <Fade up>
            <div className={classes.titleWrapper}>
              <span>
                <p className={classes.sectionName}>PROJECT</p>
              </span>
              <span className={classes.title}>
                KeyPoint
            <span className={classes.subTitle}>- A blogging website</span>
              </span>
            </div>
          </Fade>
          <Fade up>
            <div className={classes.contentWrapper}>
              <div className={classes.description}>
                <a className={classes.link} target="_blank" href="https://trex-sandwich.com/taz_KeyPoint/ "> KeyPoint</a> is a blogging website. This is the final project of the PGCertIT program.
                It used <span className={classes.emphasis}> MariaDB </span> for the database, <span className={classes.emphasis}> JSP </span> and <span className={classes.emphasis}> Servlet </span> for the backend, 
                <span className={classes.emphasis}> HTML </span>, <span className={classes.emphasis}> CSS </span>, <span className={classes.emphasis}> JavaScript </span>, <span className={classes.emphasis}> Bootstrap </span> and <span className={classes.emphasis}> jQuery </span> for the frontend, 
                and <span className={classes.emphasis}> Git </span> and <span className={classes.emphasis}> GitLab </span> for version control and teamwork.
              </div>
              <img className={classes.media} src={keyPoint}></img>
              <div className={classes.description}>
                You can find the source code and more detailed description in <a className={classes.link} target="_blank" href="https://github.com/CoderYihaoWang/KeyPoint"> this repository </a>.
              </div>
            </div>
          </Fade>
        </section>
      </section>
      <section id="colorfulLife">
        <section className={classes.page}>
          <Fade up>
            <div className={classes.titleWrapper}>
              <span>
                <p className={classes.sectionName}>PROJECT</p>
              </span>
              <span className={classes.title}>
                Colorful Life
            <span className={classes.subTitle}>- Generative art base on Game of Life</span>
              </span>
            </div>
          </Fade>
          <Fade up>
            <div className={classes.contentWrapper}>
              <div className={classes.description}>
                <a className={classes.link} target="_blank" href="https://coderyihaowang.github.io/ColorfulLife/">Colorful Life </a> is a zero-player game based on <a className={classes.link} target="_blank" href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"> Conway's Game of Life </a>. 
                It is different from the original game in that in this game, everything is configurable, including all game veriables and styles of the cells. 
              </div>
              <img className={classes.media} src={game}></img>
              <div className={classes.description}>
                I used <span className={classes.emphasis}> TypeScript </span>, <span className={classes.emphasis}> React </span> and <span className={classes.emphasis}> Material-UI </span> for building this project. The project can be used as a kind of generative art. 
                You can play with it to generate various visual patterns. 
                You can try it on this <a className={classes.link} target="_blank" href="https://coderyihaowang.github.io/ColorfulLife/"> deployed version </a>, or have look at the <a className={classes.link} target="_blank" href="https://github.com/CoderYihaoWang/ColorfulLife"> source code and some interesting examples </a>.
              </div>
            </div>
          </Fade>
        </section>
      </section>
      <section id="aboutFuture">
        <section className={classes.page}>
          <Fade up>
            <span className={classes.largeTitle}>About Future</span>
          </Fade>
          <Fade up>
            <div className={classes.contentWrapper}>
              <div className={classes.description}>
                I am always learning something. At the moment, I am exploring <span className={classes.emphasis}> EF Core </span> and trying to build a project with <span className={classes.emphasis}> EF Core </span>,
                 <span className={classes.emphasis}> .Net Core </span> and <span className={classes.emphasis}> React </span>.
                <br /><br />
                At the same time, <span className={classes.emphasis}> I am actively looking for a job </span>. My aim is to become an excellent <span className={classes.emphasis}> full-stack developer </span> in the near future. 
                Currently, I am looking for a job as a <span className={classes.emphasis}>junior</span>|<span className={classes.emphasis}>graduate </span> <span className={classes.emphasis}>frontend</span>|<span className={classes.emphasis}>backend</span>|<span className={classes.emphasis}>full-stack </span> developer. Depending on the opportunity, I am also 
                open to <span className={classes.emphasis}> internships </span> or <span className={classes.emphasis}> volunteering </span> positions.
                <br /><br />
                Thank you for reading thus far. If you are interested, please contact me. I am looking forward to hearing from you. 
                And I hope you have a good rest of the day. 😃 
              </div>  
            </div>
          </Fade>
        </section>
      </section>
    </div>
  )
}