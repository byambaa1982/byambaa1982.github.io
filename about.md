---
layout: article
titles:
  # @start locale config
  en      : &EN       About
  en-GB   : *EN
  en-US   : *EN
  en-CA   : *EN
  en-AU   : *EN
  zh-Hans : &ZH_HANS  关于
  zh      : *ZH_HANS
  zh-CN   : *ZH_HANS
  zh-SG   : *ZH_HANS
  zh-Hant : &ZH_HANT  關於
  zh-TW   : *ZH_HANT
  zh-HK   : *ZH_HANT
  ko      : &KO       소개
  ko-KR   : *KO
  fr      : &FR       À propos
  fr-BE   : *FR
  fr-CA   : *FR
  fr-CH   : *FR
  fr-FR   : *FR
  fr-LU   : *FR
  # @end locale config
key: page-about
---

<div class="about-hero">
  <img src="/images/byamba_photo.jpg" alt="Byamba Enkhbat" class="about-image">
  
  <div class="about-intro">
    <h1 class="text-gradient">Hello, I'm Byamba Enkhbat</h1>
    <p class="lead">Data Engineer | Technology Enthusiast | Lifelong Learner</p>
  </div>
</div>

<div class="about-content" markdown="1">

## Who Am I?

I'm a father of two, a data engineer, and someone who's still trying to figure out this whole "adulting" thing. Most days you'll find me wrangling data pipelines, reading books I probably should have read years ago, or planning the next family adventure.

I grew up dreaming about traveling the world. That fascination never really left me—I still get excited about exploring new places and meeting people with completely different perspectives on life.

## What I Do

I work as a data engineer, which basically means I spend my days building systems that make sense of massive amounts of data. Some days it's incredibly satisfying when everything clicks into place. Other days... well, let's just say debugging Spark jobs at 3 AM builds character.

Right now I'm working with:
- Cloud platforms (Azure and AWS mostly)
- Python, Spark, and SQL
- ETL pipelines and data platforms

I'm always learning something new in this field because, honestly, if you stop learning in tech you're basically standing still while the world moves on.

## When I'm Not Working

Family time comes first. Having two kids changes your perspective on pretty much everything. Suddenly, a successful weekend isn't about hitting some productivity goal—it's about making pancakes without setting off the smoke alarm.

I also love reading, though these days I'm more realistic about how many books I actually finish. I'm into hiking when the weather cooperates, and I've gotten into photography over the past few years. Not professionally or anything, just capturing moments that matter to me.

Travel is still a big part of my life, even if it looks different now than those backpacking-across-continents dreams I had as a kid.

## Why This Blog?

Honestly? I wanted a place to document what I'm learning and share experiences without the polish and pressure of social media. Sometimes I write about data engineering problems I've solved. Sometimes it's about a trip we took or something I've been thinking about.

If you're also trying to navigate the data engineering world, or you just like reading about someone else's journey through work and life, stick around. I'd love to hear from you.

</div>

<style>
.about-hero {
  text-align: center;
  padding: 3rem 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  margin: -2rem -2rem 3rem -2rem;
  border-radius: 0 0 30px 30px;
}

.about-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  border: 6px solid white;
  margin-bottom: 2rem;
  transition: transform 0.3s ease;
}

.about-image:hover {
  transform: scale(1.05);
}

.about-intro h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.lead {
  font-size: 1.3rem;
  color: #718096;
  font-weight: 500;
}

.about-content {
  max-width: 800px;
  margin: 0 auto;
}

.about-content h2 {
  margin-top: 3rem;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid #667eea;
}

.about-content ul {
  list-style: none;
  padding-left: 0;
}

.about-content ul li {
  padding: 0.5rem 0;
  padding-left: 2rem;
  position: relative;
}

.about-content ul li:before {
  content: "→";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}
</style>