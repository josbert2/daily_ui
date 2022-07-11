<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class InspectFlowController extends Controller
{
    /**
     * @Route("/inspect", name="inspect_flow")
     */
    public function index(): Response
    {
        return $this->render('inspect_flow/index.html.twig', [
            'controller_name' => 'InspectFlowController',
        ]);
    }
}
