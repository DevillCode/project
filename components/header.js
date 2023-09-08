function header() {
    return `
    <header>    
<div class="main-container flex-header">

    <!-- LOGO -->
    <div class="logo">
        <a href="index.html"><img src="images/sabito.jpg" alt=""></a>
    </div>
    <!-- LOGO -->

    <!-- MAIN HEADER -->
    <div class="main-header">
        <ul>
            <li class="random home"><a href="index.html" class="a-hover">Home</a></li>
            <li class="random bookmarks"><a href="#" class="a-hover">Bookmarks</a></li>
            <li class="random series"><a  href="series.html" class="a-hover">Series</a>
                <ul>
                    <li><a href="#">Novel</a></li>
                    <li><a href="#">Manga</a></li>
                    <li><a href="#">Manhwa</a></li>
                    <li><a href="#">Manhua</a></li>
                </ul>
            </li>
            <li class="random others"><a href="" class="a-hover">Others</a></li>
            <li class="random mylist"><a href="" class="a-hover">My List</a></li>
        </ul>
    </div>
    <!-- MAIN HEADER -->
    
    <!-- SURPRISE ME -->
    
    <ul class="ul-edit">
        <li class="random surpriseme"><a id="random-link" class="a-hover"><i class="fa-sharp fa-solid fa-star"></i> Surprise Me!</a></li>
    </ul>
    
    <!-- SURPRISE ME -->

    <!-- SEARCH -->
    <div class="search">
        <button type="submit" class="btn"><i class="fa-sharp fa-solid fa-magnifying-glass"></i></button><input type="text" class="search-box" placeholder="Search">
    </div>
    <!-- SEARCH -->

    <!-- MENU -->
    <i class="fa-sharp fa-solid fa-bars" onclick="myFunction()"></i>
    <!-- MENU -->

</div>
</header>
    `
}

export default header;