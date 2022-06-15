<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ComponentsController extends Controller
{
    /**
     * @Route("/components", name="components")
     */
    public function index(): Response
    {
        return $this->render('components/index.html.twig', [
            'controller_name' => 'ComponentsController',
        ]);
    }

    /**
     * @Route("/components/{name}", name="components_name")
     */
    public function name($name): Response
    {
        return $this->render('components/' . $name  . '.html.twig', [
            'controller_name' => 'ComponentsController',
            'name' => $name,
        ]);
    }
}
