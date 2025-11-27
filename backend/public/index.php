<?php
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Runtime\SymfonyRuntime;

require_once dirname(__DIR__).'/vendor/autoload.php';

return function (array $context) {
    return (new SymfonyRuntime())->getRunner(
        new App\Kernel($context['APP_ENV'], (bool) $context['APP_DEBUG']),
        Request::createFromGlobals()
    );
};
