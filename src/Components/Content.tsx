import React from 'react';
import { makeStyles, Theme, createStyles, Tooltip, Typography } from '@material-ui/core';
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
          minHeight: 'calc(100vh - 50px)'
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
        paddingTop: '8vh',
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
                Before this, I also got a Bachelor's Degree of Science and a Master's Degree in Accounting (with Distinction).
                <br />
                I have been learning programming for about 2 years now, and each day I am becoming a bit better at it and a bit more passionate about it.
                I enjoy programming in  
                <Tooltip title={<Typography>Of course, this includes HTML5 and CSS3.</Typography>}><span className={classes.link}> JavaScript/Typescript</span></Tooltip>, <span className={classes.emphasis}>C#</span> and <span className={classes.emphasis}>Java</span>, 
                and I have also written code in <span className={classes.emphasis}>C</span>, <span className={classes.emphasis}>Ruby</span> and <span className={classes.emphasis}>SML</span>.
                I am familiar with <span className={classes.emphasis}>React</span> and <span className={classes.emphasis}>.Net Core</span>, and I am hoping to become a <span className={classes.emphasis}>full-stack developer</span> in the near future.
                <br /><br />
                I created this web page using React with Typescript. This is a chronological introduction of myself that I hope may help you know more about me. 
              </div>
            </div>
          </Fade>
          <Fade up>
            <div className={classes.transition}>👇 Scroll down to know more about my education background</div>
          </Fade>
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
                Because of my good academic performance, I recieved <a className={classes.link} href="https://www.wgtn.ac.nz/scholarships/annual-prizes/prize-details?result_1736977_result_page=248" target="_blank"> MPA Award - CPA Australia Prize 2019 </a> 
                and <a className={classes.link} href="https://www.wgtn.ac.nz/business/about/news/business-school-celebrates-top-students" target="_blank">2019 Wellington School of Business and Government Top Student Award for the Master of Professional Accounting</a>.
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
                on Coursera on computer architecture and compilers - <a className={classes.link} href="https://coursera.org/share/bf6bd6231e4178c5aaff434b592c063b" target="_blank"> From Nand to Tetris </a>, 
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
                This program consisted of two courses: Programming for Industry which taught Java, and Web Technologies which taught <span className={classes.emphasis}> HTML </span>, <span className={classes.emphasis}> CSS </span>, <span className={classes.emphasis}> JavaScript </span> and <span className={classes.emphasis}> Git </span>.
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
          <Fade up>
            <div className={classes.transition}>👇 Scroll down to know more about my programming projects</div>
          </Fade>
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
                This is the project that I built along the course Nand to Tetris.
                It consists of 12 sub-projects, which, when fitted together, make a complete computer built from scratch.
                These include logic gates, the ALU and CPU, the machine language, the assembly language and the assembler, the virtual machine, 
                the high-level language and its compiler, the OS and finally a game that runs on this computer.
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
                <br />
                This is the final part of this project - an RPG game called Magic Tower. 
                <br />
                Despite it looks primitive, it was built completely from scratch - I mean, from hardware logic, to machine language,
                to assembly language, to virtual machine and the high level language which runs on it, to the pixel-level rendering on the screen, 
                and finally to the game logic - all were built on my own.
              </div>
              <iframe className={classes.media} frameBorder={0} src="https://www.youtube.com/embed/03VlOt-UVdA" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; full-screen" allowFullScreen></iframe>
              <div className={classes.description}>
                You can have a look at the repository, and know more about this project on its official site.
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
                div is the interpreter of a minimal programming language, written in only 500 lines of JavaScript code.
                It is an experimental project which tried to answer the popular question: "is HTML a programming language?"
                My answer to it is, yes, if you write an interpreter for it. 
                <br />
                Any valid div code is also a valid HTML5 file (syntax-wise). You can insert this piece of code 
                using the &lt;script&gt; tag on a HTML5 file. And then it will treat the HTML elements on the page as the syntax tree.
                The end result is a Lisp-like functional programming language, which supports recursion and closure. It is 
                theoretically Turing-complete. You can have a look at the source code, the language specification and some demos here.
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
                KeyPoint is a blogging website. This is the final project of the PGCertIT program.
                It used MariaDB for the database, JSP and Servlet for the backend, HTML, CSS, JavaScript, Bootstrap and jQuery for the frontend, 
                and git and GitLab for version control and cooperation.
              </div>
              <img className={classes.media} src={keyPoint}></img>
              <div className={classes.description}>
                You can find the source code and more detailed description in this repository.
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
                Colorful Life is a zero-player game based on Conway's Game of Life. 
                It is different from the original game in that in this game, everything is configurable, including all game veriables and styles of the cells. 
              </div>
              <img className={classes.media} src={game}></img>
              <div className={classes.description}>
                I used TypeScript, React and Material-UI for building this project. The project can be used as a kind of generative art. 
                You can play with it to achieve various visual effects. 
                You can try it on this deployed version, or have look at the source code and some interesting examples.
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
        </section>
      </section>
    </div>
  )
}