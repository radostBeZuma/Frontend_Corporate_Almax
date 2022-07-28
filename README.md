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

3. Тег <form> нужен ли, если ajax можно и без него реализовать?
Да, нужен. 
Если отключат js, то form может выполнить необходимые действия. 
Полезен для скринридеров (т.е. увеличивает доступность), если несколько форм без тега, то придется как-то разграничивать. 
Не будет события onSubmit (на form вешают событие submit).
Также использовать label для формы они будут переключать на инпуты.