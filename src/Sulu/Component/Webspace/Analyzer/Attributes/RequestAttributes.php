<?php

/*
 * This file is part of Sulu.
 *
 * (c) Sulu GmbH
 *
 * This source file is subject to the MIT license that is bundled
 * with this source code in the file LICENSE.
 */

namespace Sulu\Component\Webspace\Analyzer\Attributes;

/**
 * Container for request attributes.
 */
class RequestAttributes
{
    /**
     * @var array
     */
    private $attributes;

    public function __construct(array $attributes = [])
    {
        $this->attributes = \array_filter($attributes);
    }

    /**
     * Returns attribute with given name.
     *
     * @param string $name
     * @param mixed|null $default
     */
    public function getAttribute($name, $default = null)
    {
        if (!\array_key_exists($name, $this->attributes)) {
            return $default;
        }

        return $this->attributes[$name];
    }

    /**
     * Merges this and the given attributes and returns a new instance.
     *
     * @return RequestAttributes
     */
    public function merge(self $requestAttributes)
    {
        return new self(\array_merge($requestAttributes->attributes, $this->attributes));
    }
}
