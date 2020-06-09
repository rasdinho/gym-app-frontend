import React from 'react'


class HomeContainer extends React.Component{
    

    render(){
        return(
<>
{/* ======================================= image slider ======================= */}
        <div id="slides" className="carousel slide" data-ride="carousel">

                <ul className="carousel-indicators">
                    <li data-target="#slides" data-slide-to="0" className="active"></li>
                    <li data-target="#slides" data-slide-to="1"></li>
                    <li data-target="#slides" data-slide-to="2"></li>
                    <li data-target="#slides" data-slide-to="3"></li>
                </ul>  
                
            <div className="carousel-inner">

                <div className="carousel-item active">
                    <img className="home-img" src="https://askmuscle.com/wp-content/uploads/2019/01/man-woman-isolated-on-dark-background-weight-training-ss-Feature.jpg" alt="."/>
                    <div className="carousel-caption">
                        <h1 className="display-2">WELCOME TO YA Gym</h1>
                        <p>Since our opening day back in 2020, our Gym classes have provided an inspiring welcoming for everybody! That makes every attendee feel like they are a part of one big and passionate community! With that in mind, you can always reach our fitness instructors for any kind of assistance.</p>
                        

                    </div>
                </div>

                <div className="carousel-item">
                    <img className="home-img" src="https://i1.wp.com/wallur.com/wp-content/uploads/2016/12/fitnessf-background-12.jpg?fit=1920%2C1080" alt="."/>
                    
                </div>

                <div className="carousel-item">
                    <img className="home-img" src="https://fitnrace.com/wp-content/uploads/2020/04/COrona-workout.jpg" alt="."/>
                </div>

                <div className="carousel-item">
                    <img className="home-img" src="https://gymjunkies.com/wp-content/uploads/2015/10/shutterstock_238296169.jpg" alt="."/>
                </div>

            </div>

        </div> 

{/* ============================================= Jumbo tron ============================================================*/}
        <section id="features">
            <h1>We Are Here For You</h1>
            <div className="flex container">
            <div className="box">
                <img src="https://www.papercitymag.com/wp-content/uploads/2020/05/DSC_1901-scaled.jpg" alt="Exercise Class" />
                <div className="feature-info-container">
                <div className="icon">
                    <img src="https://onclickwebdesign.com/wp-content/uploads/icon-1.png" alt="Star Trophy Icon" />
                </div>
                <h4>Amazing Setting</h4>
                <p>Our professional coaches can provide you with high - quality training services.</p>
                </div>
            </div>

            <div className="box">
                <img src="https://onclickwebdesign.com/wp-content/uploads/feature-2.jpg" alt="Man doing dumbbell rows" />
                <div className="feature-info-container">
                <div className="icon">
                    <img src="https://onclickwebdesign.com/wp-content/uploads/icon-2.png" alt="Dumbbell Icon" />
                </div>
                <h4>Best Trainers</h4>
                <p>We use latest techniques suggested by the world’s leading coaches and physicians.</p>
                </div>
            </div>

            <div className="box">
                <img src="https://onclickwebdesign.com/wp-content/uploads/feature-3.jpg" alt="Woman doing leg press" />
                <div className="feature-info-container">
                <div className="icon">
                    <img src="https://onclickwebdesign.com/wp-content/uploads/icon-3.png" alt="Smoothie Icon" />
                </div>
                <h4>Diet Plans</h4>
                <p>Intense has a variety of services for everyone offered at affordable prices.</p>
                </div>
            </div>
            </div>
        </section>
{/* ============================================= Services ============================================================*/}
        <section id="services">
            <h3>Services</h3>
            <div className="flex container" id="other-c">
            <div className="box">
                <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/swimming-pool-2268391-1888953.png" alt="swim Icon" />
                <h4>Pilates</h4>
                <p>Ever wonder why Pilates is so popular among models and celebrities? In most cases, it’s because they love the results.</p>
            </div>

            <div className="box">
                <img src="https://onclickwebdesign.com/wp-content/uploads/services-icon-2.png" alt="Bench Press Icon" />
                <h4>Free Lifting</h4>
                <p>Certain type of exercise could benefit your heart, improve your balance, strengthen your bones, and help you lose weight.</p>
            </div>

            <div className="box">
                <img src="https://onclickwebdesign.com/wp-content/uploads/services-icon-3.png" alt="Stopwatch Icon" />
                <h4>Yoga</h4>
                <p>Immerse yourself in a joyous, soulful and transformational yoga and meditation training program.</p>
            </div>

            <div className="box">
                <img src="https://onclickwebdesign.com/wp-content/uploads/services-icon-4.png" alt="Mp3 Player Icon" />
                <h4>Spinning</h4>
                <p>Spinning class can burn at least 500 calories, which can help you shed the pounds.</p>
            </div>
            </div>
        </section>

{/* ============================================= gallery ============================================================*/}
<section className="whole-gallery">
  <h1 className="gallery">Gallery</h1>
<ul className="slidesss">
    <input type="radio" name="radio-btn" id="img-1" defaultChecked/>
    <li className="slidy-container">
		<div className="slider">
			<img src="https://images.squarespace-cdn.com/content/v1/59ed418990bade839e5fec10/1536670726092-4NBCC108SSO8WWP0XK57/ke17ZwdGBToddI8pDm48kPlTyO0paHkecOfnz1WSYzkUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKc6lG8kzMJ-wBZeLJqovPANAcAcJEkKAmmCF3LztdwTnhSzJ8mTs5FKgXwyRMZlXDJ/20180807_163908.jpg" alt="."/>
        </div>
		<div className="nav">
			<label htmlFor="img-6" className="prev">&#x2039;</label>
			<label htmlFor="img-2" className="next">&#x203a;</label>
		</div>
    </li>

    <input type="radio" name="radio-btn" id="img-2" />
    <li className="slidy-container">
        <div className="slider">
          <img src="https://www.genesishealthclubs.com/media/images/Cass%20Gym.jpg" alt="."/>
        </div>
		<div className="nav">
			<label htmlFor="img-1" className="prev">&#x2039;</label>
			<label htmlFor="img-3" className="next">&#x203a;</label>
		</div>
    </li>

    <input type="radio" name="radio-btn" id="img-3" />
    <li className="slidy-container">
        <div className="slider">
          <img src="https://i.pinimg.com/originals/9d/f8/14/9df8143f13a4b2386ed4fc669f2de940.png" alt="."/>
        </div>
		<div className="nav">
			<label htmlFor="img-2" className="prev">&#x2039;</label>
			<label htmlFor="img-4" className="next">&#x203a;</label>
		</div>
    </li>

    <input type="radio" name="radio-btn" id="img-4" />
    <li className="slidy-container">
        <div className="slider">
          <img src="https://i.pinimg.com/originals/a2/9a/46/a29a46af577a22f954614b2e9162a212.jpg" alt="."/>
        </div>
		<div className="nav">
			<label htmlFor="img-3" className="prev">&#x2039;</label>
			<label htmlFor="img-5" className="next">&#x203a;</label>
		</div>
    </li>

    <input type="radio" name="radio-btn" id="img-5" />
    <li className="slidy-container">
        <div className="slider">
          <img src="https://3dkonut.com/Resimler/Listeler/antalyada-kapali-havuz-olan-konut-projeleri.jpg" alt="."/>
        </div>
		<div className="nav">
			<label htmlFor="img-4" className="prev">&#x2039;</label>
			<label htmlFor="img-6" className="next">&#x203a;</label>
		</div>
    </li>

    <input type="radio" name="radio-btn" id="img-6" />
    <li className="slidy-container">
        <div className="slider">
          <img src="https://leonardwood.armymwr.com/application/files/7214/9426/6793/LWOOD_ZUMBA_STEP.jpg" alt="."/>
        </div>
		<div className="nav">
			<label htmlFor="img-5" className="prev">&#x2039;</label>
			<label htmlFor="img-7" className="next">&#x203a;</label>
		</div>
    </li>
    {/* ========================== */}
    <input type="radio" name="radio-btn" id="img-7" />
    <li className="slidy-container">
        <div className="slider">
          <img src="https://allamericanfitness.com/wp-content/uploads/2016/11/Modern-Gym.jpg" alt="."/>
        </div>
		<div className="nav">
			<label htmlFor="img-6" className="prev">&#x2039;</label>
			<label htmlFor="img-1" className="next">&#x203a;</label>
		</div>
    </li>
    {/* ========================= */}

    <li className="nav-dots">
      <label htmlFor="img-1" className="nav-dot" id="img-dot-1"></label>
      <label htmlFor="img-2" className="nav-dot" id="img-dot-2"></label>
      <label htmlFor="img-3" className="nav-dot" id="img-dot-3"></label>
      <label htmlFor="img-4" className="nav-dot" id="img-dot-4"></label>
      <label htmlFor="img-5" className="nav-dot" id="img-dot-5"></label>
      <label htmlFor="img-6" className="nav-dot" id="img-dot-6"></label>
      <label htmlFor="img-7" className="nav-dot" id="img-dot-7"></label>
    </li>
</ul>

</section>
{/* ============================================= fixed img ============================================================*/}
        {/* <hr className="my-4"/>
            <figure>
                <div className="fixed-wrap">
                    <div id="fixed">

                    </div>

                </div>
            </figure> */}

{/* ============================================= footer ============================================================*/}
<footer>
    <div className="footer-container">
      <div id="footer-logo" class="top-gym-logo">
        <a href="/home"><img src="https://i.pinimg.com/originals/3e/c6/f3/3ec6f3910ccd0d507bb8bb7d6b2c2da3.png" className="logo" alt="."/></a>
      </div>

      <ul className="social-icons">
        <li><a href="https://www.facebook.com/pages/Facebook-Fitness-Center/156643044707351"><span className="fab fa-facebook"></span></a></li>
        <li><a href="."><span className="fab fa-twitter"></span></a></li>
        <li><a href="https://www.youtube.com"><span className="fab fa-youtube"></span></a></li>
        <li><a href="."><span className="fab fa-instagram"></span></a></li>
      </ul>

      <img src="https://onclickwebdesign.com/wp-content/uploads/footer-icon.png" className="bicep" alt="Bicep flex icon" />

      <small>
        Copyright &copy;2020 All rights reserved |<span className="fa fa-heart"></span> by Junior
      </small>
    </div>
  </footer>
{/* ========================================= */}

</>
        )
    }
}
export default HomeContainer