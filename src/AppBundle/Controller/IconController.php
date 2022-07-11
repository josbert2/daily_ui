<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use AppBundle\Entity\Icon;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use AppBundle\Form\IconType;
use Symfony\Component\Filesystem\Filesystem;


class IconController extends Controller
{
    /**
     * @Route("/icon", name="icon", methods={"GET|POST"})
     */
    public function index(Request $request): Response
    {
        $em = $this->getDoctrine()->getManager();
        $icons = $em->getRepository(Icon::class)->findAll();

        $icon = new Icon();
        $form = $this->createForm(IconType::class, $icon);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $file = $icon->getImage();
            $fileName = md5(uniqid()).'.'.$file->guessExtension();
            $file->move(
                $this->getParameter('image_directory'),
                $fileName
            );
            $icon->setImage($fileName);
            $iconCategories = $form->get('categoria')->getData();


            $em->persist($icon);
            $em->flush();
            return $this->render('icon/index.html.twig', [
                'icons' => $icons,
                'form' => $form->createView(),
            ]);
         
        }





        return $this->render('icon/index.html.twig', [
            'icons' => $icons,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/icon/add", name="addIcon", methods={"POST", "GET"})
     */
    public function addIcon(Request $request): Response
    {
        
        $icon = new Icon();
        $iconName = $request->request->get('name');
        $iconSvg = $request->request->get('image');



        dump($iconSvg);
        die();
        

        $fileName = md5(uniqid()).'.'.$iconSvg->guessExtension();

        $iconSvg->move(
            $this->getParameter('image_directory'),
            $fileName
        );

        $icon->setImage($fileName);
        $icon->setName($iconName);
        $em = $this->getDoctrine()->getManager();
        $em->persist($icon);
        $em->flush();

        return new JsonResponse(array('status' => 'ok'));
    }

    /**
     * @Route("/icon/delete", name="deleteIcon", methods={"POST"})
     */
    public function deleteIcon(Request $request): Response
    {
        $iconId = $request->request->get('id');
        $em = $this->getDoctrine()->getManager();
        $icon = $em->getRepository(Icon::class)->find($iconId);
        $em->remove($icon);
        $em->flush();
        return new JsonResponse(array('status' => 'ok'));
    }

    /**
     * @Route("/icon/lista", name="listaIcon")
     */
    public function listaIcon(): Response
    {
        $em = $this->getDoctrine()->getManager();
        $icons = $em->getRepository(Icon::class)->findAllIcons();
        $arrayCollection = array();

        foreach($icons as $item) {
            $arrayCollection[] = array(
                'id' => $item->getId(),
                'name' => $item->getName()
            );
        }
        
        return new JsonResponse($arrayCollection);
      
    }



    
}
