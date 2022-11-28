<!-- Start Footer -->
<footer class="bg-dark" id="tempaltemo_footer">
    <div class="container">
        <div class="row">
            <div class="col-md-4 pt-5">
                <h2 class="h2 text-success border-bottom pb-3 border-light logo">Online Stone Store</h2>
                <ul class="list-unstyled text-light footer-link-list">
                    <li>
                        <i class="fas fa-map-marker-alt fa-fw"></i>
                        <a class="text-decoration-none" href="https://www.google.com/maps/place/Cumbre+Vieja/@28.5763389,-17.8336376,16913m/data=!3m1!1e3!4m5!3m4!1s0xc6b92b8fdc9c681:0xc8895edaecd1d4d1!8m2!3d28.5727778!4d-17.8375" target="_blank">Volcán Cumbre Vieja</a>
                    </li>
                    <li>
                        <i class="fa fa-phone fa-fw"></i>
                        <a class="text-decoration-none" href="tel:666-999-555">666-999-555</a>
                    </li>
                    <li>
                        <i class="fa fa-envelope fa-fw"></i>
                        <a class="text-decoration-none" href="mailto:info@stonestore.com">info@stonestore.com</a>
                    </li>
                </ul>
            </div>

            <div class="col-md-8 pt-5">
                <div class="col-12 mb-3">
                    <div class="w-100 my-3 border-top border-light"></div>
                </div>
                <div class="col-auto me-auto">
                    <ul class="list-inline text-left footer-icons">
                        <li class="list-inline-item border border-light rounded-circle text-center">
                            <a class="text-light text-decoration-none" target="_blank" href="http://facebook.com/"><i class="fab fa-facebook-f fa-lg fa-fw"></i></a>
                        </li>
                        <li class="list-inline-item border border-light rounded-circle text-center">
                            <a class="text-light text-decoration-none" target="_blank" href="https://www.instagram.com/"><i class="fab fa-instagram fa-lg fa-fw"></i></a>
                        </li>
                        <li class="list-inline-item border border-light rounded-circle text-center">
                            <a class="text-light text-decoration-none" target="_blank" href="https://twitter.com/"><i class="fab fa-twitter fa-lg fa-fw"></i></a>
                        </li>
                        <li class="list-inline-item border border-light rounded-circle text-center">
                            <a class="text-light text-decoration-none" target="_blank" href="https://www.linkedin.com/"><i class="fab fa-linkedin fa-lg fa-fw"></i></a>
                        </li>
                    </ul>
                </div>
                <div class="col-auto">
                    <label class="sr-only" for="subscribeEmail">Email address</label>
                    <div class="input-group mb-2">
                        <input type="text" class="form-control bg-dark border-light" id="subscribeEmail" placeholder="Email address">
                        <div class="input-group-text btn-success text-light">Subscribe</div>
                    </div>
                </div>
            </div>


        </div>

        <div class="row text-light mb-4">

        </div>
    </div>

    <div class="w-100 bg-black py-3">
        <div class="container">
            <div class="row pt-2">
                <div class="col-12">
                    <p class="text-left text-light">
                        Copyright & Designed by &copy; by Diego Brito
                    </p>
                </div>
            </div>
        </div>
    </div>
</footer>
<!-- End Footer -->

<!-- Start Script 
$url == "/tienda/" ? $url = "./" : $url = "../";-->
<?php $url= $_SERVER["REQUEST_URI"];
    $url == "/Clase/DSW/Bloque4/myProject/" ? $url = "./" : $url = "../";
?>
<script src="<?php echo $url ?>assets/js/jquery-migrate-1.2.1.min.js"></script>
<script src="<?php echo $url ?>assets/js/bootstrap.bundle.min.js"></script>
<script src="<?php echo $url ?>assets/js/templatemo.js"></script>
<script src="<?php echo $url ?>assets/js/custom.js"></script>
<!-- End Script -->
</body>