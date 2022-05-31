<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use AppBundle\Entity\Icon;
use Symfony\Component\HttpFoundation\JsonResponse;


class IconController extends Controller
{
    /**
     * @Route("/icon", name="icon")
     */
    public function index(): Response
    {
        $em = $this->getDoctrine()->getManager();
        $icons = $em->getRepository(Icon::class)->findAll();



        return $this->render('icon/index.html.twig', [
            'icons' => $icons,
        ]);
    }

    /**
     * @Route("/icon/add", name="addIcon")
     */
    public function addIcon(Request $request): Response
    {
        $icon = new Icon();
        $icon->setName('icon');
        $em = $this->getDoctrine()->getManager();
        $em->persist($icon);
        $em->flush();
        return new JsonResponse(array('status' => 'ok'));
    }


    
}
