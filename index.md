---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---
<div class="container">  
  <div class="container-header">
    <h1>Product Design Team @ QuintoAndar</h1>
    <h3>Uma frase bem maneira sobre o que é o hubzão e pra que serve.</h3>
  </div>
  <div class="container-cards">
    {% for post in site.posts reversed %}
      {% if post.external_url %}
        <a href="{{ post.external_url }}" class="{{ post.paddingtype }}" target="_blank">
          <div class="post-card">
            <img src="{{site.baseurl}}/assets/img/{{ post.image }}">
            <div class="card-content">
              <h2>{{ post.title }}</h2>
              <h3>{{ post.subtitle }}</h3>
            </div>
          </div>
        </a>
      {% else %}
      <a href="{{ post.url }}" class="{{ post.paddingtype }}">
      	<div class="post-card">
      		<img src="{{site.baseurl}}/assets/img/{{ post.image }}">
      		<div class="card-content">
        		<h2>{{ post.title }}</h2>
        		<h3>{{ post.subtitle }}</h3>
        	</div>
        </div>
      </a>
      {% endif %}
    {% endfor %}
  </div>
</div>
