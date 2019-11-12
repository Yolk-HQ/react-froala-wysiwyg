import Link from "next/link";

export default () => (
  <ul>
    <li>
      <Link href="/basic">
        <a>Basic Example</a>
      </Link>
    </li>
    <li>
      <Link href="/full_editor">
        <a>Full Featured Example</a>
      </Link>
    </li>
    <li>
      <Link href="/edit_inline">
        <a>Inline Example</a>
      </Link>
    </li>
    <li>
      <Link href="/init_on_button">
        <a>Init on Button</a>
      </Link>
    </li>
    <li>
      <Link href="/init_on_link">
        <a>Init on Link</a>
      </Link>
    </li>
    <li>
      <Link href="/init_on_input">
        <a>Init on Input</a>
      </Link>
    </li>
    <li>
      <Link href="/init_on_image">
        <a>Init on Image</a>
      </Link>
    </li>
    <li>
      <Link href="/two_way_binding">
        <a>Two way binding</a>
      </Link>
    </li>
    <li>
      <Link href="/manual_initialization">
        <a>Manual Initialization</a>
      </Link>
    </li>
    <li>
      <Link href="/custombutton">
        <a>Custom Button</a>
      </Link>
    </li>
  </ul>
);
