<?php

namespace App\Controller;

use App\Entity\ContactMessage;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class ContactMessageController
{
    public function __construct(
        private readonly EntityManagerInterface $em,
        private readonly MailerInterface $mailer,
        private readonly SerializerInterface $serializer,
        private readonly ValidatorInterface $validator,
    ) {
    }

    public function __invoke(Request $request): JsonResponse
    {
        /** @var ContactMessage $message */
        $message = $this->serializer->deserialize($request->getContent(), ContactMessage::class, 'json');
        $errors = $this->validator->validate($message);
        if (count($errors) > 0) {
            return new JsonResponse(['errors' => (string) $errors], 422);
        }

        $this->em->persist($message);
        $this->em->flush();

        $email = (new Email())
            ->from($message->getEmail())
            ->to('contact@portfolio.local')
            ->subject('Nouveau message portfolio')
            ->text(sprintf("Nom: %s\nEmail: %s\nMessage: %s", $message->getName(), $message->getEmail(), $message->getMessage()));

        $this->mailer->send($email);

        return new JsonResponse(['status' => 'created'], 201);
    }
}
