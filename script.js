* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background: #0a0a0a;
  color: #ffffff;
  line-height: 1.6;
}

a {
  color: inherit;
  text-decoration: none;
}

/* HEADER */

header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(10, 10, 10, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid #222;
}

nav {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 22px;
  font-weight: 900;
  letter-spacing: 2px;
}

.nav-links {
  display: flex;
  gap: 25px;
  font-size: 14px;
}

.nav-links a {
  color: #bbb;
  transition: 0.3s;
}

.nav-links a:hover {
  color: #fff;
}

/* HERO */

.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 120px 8% 80px;
  background:
    linear-gradient(90deg, #050505 20%, rgba(5,5,5,0.75), rgba(5,5,5,0.3)),
    url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=80")
    center/cover;
}

.hero-content {
  max-width: 750px;
}

.tagline {
  font-size: 13px;
  letter-spacing: 4px;
  color: #ff3d00;
  font-weight: bold;
  margin-bottom: 20px;
}

h1 {
  font-size: clamp(50px, 8vw, 100px);
  line-height: 0.95;
  font-weight: 900;
}

h1 span {
  color: #ff3d00;
}

.hero-text {
  max-width: 600px;
  margin: 30px 0;
  color: #bbb;
  font-size: 17px;
}

.buttons {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 14px 24px;
  font-weight: bold;
  font-size: 13px;
  letter-spacing: 1px;
  transition: 0.3s;
}

.primary {
  background: #ff3d00;
  color: #fff;
}

.primary:hover {
  background: #ff5722;
  transform: translateY(-2px);
}

.secondary {
  border: 1px solid #555;
  color: #fff;
}

.secondary:hover {
  border-color: #fff;
  transform: translateY(-2px);
}

/* SECTIONS */

.section {
  max-width: 1200px;
  margin: auto;
  padding: 120px 25px;
}

.section-title p {
  color: #ff3d00;
  font-size: 12px;
  letter-spacing: 4px;
  font-weight: bold;
  margin-bottom: 15px;
}

.section-title h2 {
  font-size: clamp(40px, 6vw, 70px);
  line-height: 1;
  font-weight: 900;
}

.center {
  text-align: center;
  margin-bottom: 60px;
}

/* ABOUT */

#about {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 70px;
  align-items: center;
}

.about-text {
  color: #aaa;
  font-size: 17px;
}

.about-text p {
  margin-bottom: 20px;
}

.stats {
  display: flex;
  gap: 35px;
  margin-top: 35px;
  flex-wrap: wrap;
}

.stats div {
  display: flex;
  flex-direction: column;
}

.stats strong {
  font-size: 35px;
  color: #fff;
}

.stats span {
  font-size: 10px;
  color: #777;
  letter-spacing: 1px;
}

/* PROGRAMS */

.programs-section {
  max-width: 1300px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
}

.card {
  background: #111;
  border: 1px solid #222;
  padding: 30px;
  min-height: 250px;
  transition: 0.3s;
}

.card:hover {
  transform: translateY(-8px);
  border-color: #ff3d00;
}

.card-number {
  color: #ff3d00;
  font-size: 13px;
  margin-bottom: 50px;
}

.card h3 {
  font-size: 20px;
  margin-bottom: 15px;
}

.card p {
  color: #888;
  font-size: 14px;
}

/* TRAINERS */

.trainers {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 60px;
}

.trainer-photo {
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    linear-gradient(135deg, #222, #111);
  color: #555;
  letter-spacing: 2px;
  font-size: 12px;
}

.trainer h3 {
  margin-top: 18px;
  font-size: 20px;
}

.trainer p {
  color: #ff3d00;
  font-size: 11px;
  letter-spacing: 2px;
}

/* MEMBERSHIP */

.membership-section {
  max-width: 1300px;
}

.pricing {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.price-card {
  padding: 40px;
  background: #111;
  border: 1px solid #222;
}

.price-card.featured {
  border: 1px solid #ff3d00;
  transform: translateY(-10px);
}

.plan {
  color: #ff3d00;
  letter-spacing: 3px;
  font-weight: bold;
  font-size: 12px;
}

.price-card h3 {
  font-size: 40px;
  margin: 20px 0;
}

.price-card h3 span {
  font-size: 13px;
  color: #777;
}

.price-card > p:not(.plan) {
  color: #999;
  padding: 8px 0;
  border-bottom: 1px solid #222;
}

.price-card .btn {
  margin-top: 25px;
}

.demo-note {
  text-align: center;
  margin-top: 30px;
  color: #666;
  font-size: 12px;
}

/* CONTACT */

.contact-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  border-top: 1px solid #222;
}

.contact-info {
  color: #999;
}

.contact-info p {
  margin-bottom: 15px;
}

.contact-info strong {
  color: #fff;
  font-size: 20px;
}

.contact-info .btn {
  margin-top: 25px;
}

/* FOOTER */

footer {
  border-top: 1px solid #222;
  padding: 40px 25px;
  text-align: center;
}

footer p {
  color: #555;
  font-size: 11px;
  margin-top: 10px;
}

/* MOBILE */

@media (max-width: 800px) {

  .nav-links {
    display: none;
  }

  .hero {
    padding: 120px 25px 80px;
  }

  #about {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .cards {
    grid-template-columns: 1fr 1fr;
  }

  .trainers {
    grid-template-columns: 1fr;
  }

  .trainer-photo {
    height: 300px;
  }

  .pricing {
    grid-template-columns: 1fr;
  }

  .price-card.featured {
    transform: none;
  }

  .contact-section {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 500px) {

  .cards {
    grid-template-columns: 1fr;
  }

  h1 {
    font-size: 55px;
  }

  .section {
    padding: 80px 20px;
  }

  .stats {
    gap: 20px;
  }
}
