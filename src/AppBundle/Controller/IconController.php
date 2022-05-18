<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class IconController extends Controller
{
    /**
     * @Route("/icon", name="icon")
     */
    public function index(): Response
    {
        return $this->render('icon/index.html.twig', [
            'controller_name' => 'IconController',
        ]);
    }
}
