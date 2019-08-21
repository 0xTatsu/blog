import React from "react"
import { Link } from "gatsby"
import kebabCase from "lodash/kebabCase"
import styled from "styled-components"

export default function TagList(props) {
  if (!props.tags) {
    return null
  }
  return (
    <List>
      {props.tags.map(tag => (
        <li key={tag.label}>
          <Link to={`/tag/${kebabCase(tag.label)}/`}>
            {tag.label} {tag.count && `(${tag.count})`}
          </Link>
        </li>
      ))}
    </List>
  )
}

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;

  li {
    list-style: none;
  }

  li a {
    display: inline-block;
    padding: 0 1.5rem;
    margin: 0.5rem 0.5rem 0.5rem 0;
    color: #222;
    font-size: 12px;
    height: 35px;
    line-height: 2.1875rem;
    border: 1px solid #e6e6e6;
    border-radius: 1rem;
    text-decoration: none;
    box-shadow: none;

    &:hover {
      color: #007acc;
    }
  }
`
