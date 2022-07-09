1. Padding и margin работаю по отдельности (строчные к строчным, блочные к блочным) нормально, однако блочные и строчные по вертикали margin не работает.
2. img без дива не сжимается..

``` html
	<div class="wrap" style="display: flex;">
		<img class="img-not-div">
		<div class="block"></div>
	</div>
```

or

``` html
	<div class="wrap" style="display: flex;">
		<div>
			<img class="img-in-div">
		</div>
		<div class="block"></div>
	</div>
```