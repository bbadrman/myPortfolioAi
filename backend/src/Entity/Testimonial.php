<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\GetCollection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity]
#[ApiResource(operations: [new GetCollection(normalizationContext: ['groups' => ['testimonial:read']])])]
class Testimonial
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(['testimonial:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['testimonial:read'])]
    private string $author = '';

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['testimonial:read'])]
    private ?string $role = null;

    #[ORM\Column(type: 'text')]
    #[Groups(['testimonial:read'])]
    private string $message = '';

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['testimonial:read'])]
    private ?string $avatar = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAuthor(): string
    {
        return $this->author;
    }

    public function setAuthor(string $author): self
    {
        $this->author = $author;
        return $this;
    }

    public function getRole(): ?string
    {
        return $this->role;
    }

    public function setRole(?string $role): self
    {
        $this->role = $role;
        return $this;
    }

    public function getMessage(): string
    {
        return $this->message;
    }

    public function setMessage(string $message): self
    {
        $this->message = $message;
        return $this;
    }

    public function getAvatar(): ?string
    {
        return $this->avatar;
    }

    public function setAvatar(?string $avatar): self
    {
        $this->avatar = $avatar;
        return $this;
    }
}
