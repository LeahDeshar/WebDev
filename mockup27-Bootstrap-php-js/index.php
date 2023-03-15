<?
declare(strict_types=1);
interface one
{
     function call1();
}
interface two extends one
{
    function call2();
}
class clOne 
{
    private $password = "passwordIsSecret";
}
class index extends clOne implements two
{
    function call1()
   {
    echo parent::$password;
   }
   function call2()
   {
    echo parent::$password;
   }
}
$two = new index();
$two->call1();


?>