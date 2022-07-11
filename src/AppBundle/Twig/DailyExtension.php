<?php

namespace AppBundle\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

class DailyExtension extends AbstractExtension
{
    public function getFilters(): array
    {
        return [
            // If your filter generates SAFE HTML, you should add a third
            // parameter: ['is_safe' => ['html']]
            // Reference: https://twig.symfony.com/doc/2.x/advanced.html#automatic-escaping
            new TwigFilter('Multi', [$this, 'Multi']),
            new TwigFilter('CheckSVG', [$this, 'CheckSVG']),
        ];
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('Multi', [$this, 'Multi']),
            new TwigFunction('CheckSVG', [$this, 'CheckSVG']),
        ];
    }

    public function Multi($i)
    {
        return $i;
    }
    public function CheckSVG($i)
    {
        if (strpos($i, '.svg') !== false) {
            return $i;
        } else {
            return $i . '.svg';
        }
    }
}
