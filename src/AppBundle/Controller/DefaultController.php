<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {
        $componentes = file_get_contents($this->getParameter('kernel.project_dir') . '/web/data/Components.json');
        $componentes = json_decode($componentes, true);
   
      
        // replace this example code with whatever you need
        return $this->render('pages/index.html.twig', [
            'base_dir' => realpath($this->getParameter('kernel.project_dir')).DIRECTORY_SEPARATOR,
            'componentes' => $componentes
        ]);
    }

    /**
     * @Route("/blank", name="blank")
     */
    public function blankAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('pages/blank.html.twig', [
            'base_dir' => realpath($this->getParameter('kernel.project_dir')).DIRECTORY_SEPARATOR,
        ]);
    }
}
