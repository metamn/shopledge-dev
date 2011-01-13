

desc 'Generate tags pages'
task :tags do
  puts "Generating tags..."
  require 'rubygems'
  require 'jekyll'
  include Jekyll::Filters
  
  options = Jekyll.configuration({})
  site = Jekyll::Site.new(options)
  site.read_posts('')
  
  # Remove tags directory before regenerating
  FileUtils.rm_rf("tags")

  site.tags.each do |tag, posts|
    puts "tag: #{tag}"
    html = <<-HTML
---
layout: default
title: "tagged: #{tag}"
syntax-highlighting: yes
---
  <h1 class="title">#{tag}</h1>
  {% for post in site.posts %}
		{% for tag in post.tags %}
			{%if tag == "#{tag}" %}
				{%include post.html%}
			{%endif%}
		{%endfor%}
  {% endfor %}
HTML

    FileUtils.mkdir_p("tags/#{tag}")
    File.open("tags/#{tag}/index.html", 'w+') do |file|
      file.puts html
    end
  end
  puts 'Done.'
end


