/* eslint-disable react/prop-types */
import React from "react";
import {
  ActionPopover,
  ActionPopoverDivider,
  ActionPopoverItem,
  ActionPopoverMenu,
  ActionPopoverProps,
  ActionPopoverMenuButton,
  RenderButtonProps,
} from ".";
import {
  FlatTable,
  FlatTableHead,
  FlatTableBody,
  FlatTableRow,
  FlatTableHeader,
  FlatTableCell,
} from "../flat-table";
// the below import works fine when rendered in the browser by Playwright (the ?url is to so Vite uses a "real" URL rather than a "data:" one),
// but VSCode highlights it as an error as TS doesn't recognise the file as a module - hence the tsignore.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore-next-line
import exampleDownload from "../../../playwright/download-test/example.txt?url";

export const ActionPopoverCustom = ({ ...props }) => {
  const submenu = (
    <ActionPopoverMenu>
      <ActionPopoverItem data-element="submenu1" {...props}>
        Sub Menu 1
      </ActionPopoverItem>
      <ActionPopoverItem {...props}>Sub Menu 2</ActionPopoverItem>
      <ActionPopoverItem disabled>Sub Menu 3</ActionPopoverItem>
    </ActionPopoverMenu>
  );
  const submenuWithIcons = (
    <ActionPopoverMenu>
      <ActionPopoverItem icon="graph">Sub Menu 1</ActionPopoverItem>
      <ActionPopoverItem icon="add">Sub Menu 2</ActionPopoverItem>
      <ActionPopoverItem icon="print" disabled>
        Sub Menu 3
      </ActionPopoverItem>
    </ActionPopoverMenu>
  );
  return (
    <div
      style={{
        marginTop: "40px",
        height: "275px",
      }}
    >
      <FlatTable isZebra>
        <FlatTableHead>
          <FlatTableRow>
            <FlatTableHeader>First Name</FlatTableHeader>
            <FlatTableHeader>Last Name</FlatTableHeader>
            <FlatTableHeader>&nbsp;</FlatTableHeader>
          </FlatTableRow>
        </FlatTableHead>
        <FlatTableBody>
          <FlatTableRow>
            <FlatTableCell>John</FlatTableCell>
            <FlatTableCell>Doe</FlatTableCell>
            <FlatTableCell>
              <ActionPopover>
                <ActionPopoverItem
                  disabled
                  icon="graph"
                  submenu={submenu}
                  {...props}
                >
                  Business
                </ActionPopoverItem>
                <ActionPopoverItem icon="email" {...props}>
                  Email Invoice
                </ActionPopoverItem>
                <ActionPopoverItem icon="print" {...props} submenu={submenu}>
                  Print Invoice
                </ActionPopoverItem>
                <ActionPopoverItem icon="pdf" {...props} submenu={submenu}>
                  Download PDF
                </ActionPopoverItem>
                <ActionPopoverItem icon="csv" {...props}>
                  Download CSV
                </ActionPopoverItem>
                <ActionPopoverDivider />
                <ActionPopoverItem icon="delete" {...props}>
                  Delete
                </ActionPopoverItem>
              </ActionPopover>
            </FlatTableCell>
          </FlatTableRow>
          <FlatTableRow>
            <FlatTableCell>Jane</FlatTableCell>
            <FlatTableCell>Smith</FlatTableCell>
            <FlatTableCell>
              <ActionPopover>
                <ActionPopoverItem
                  download
                  {...props}
                  icon="download"
                  href={exampleDownload}
                >
                  Download
                </ActionPopoverItem>
              </ActionPopover>
            </FlatTableCell>
          </FlatTableRow>
          <FlatTableRow>
            <FlatTableCell>Bob</FlatTableCell>
            <FlatTableCell>Jones</FlatTableCell>
            <FlatTableCell>
              <ActionPopover>
                <ActionPopoverItem
                  icon="csv"
                  {...props}
                  submenu={submenuWithIcons}
                >
                  Download CSV
                </ActionPopoverItem>
              </ActionPopover>
            </FlatTableCell>
          </FlatTableRow>
        </FlatTableBody>
      </FlatTable>
    </div>
  );
};

export const ActionPopoverWithProps = ({ ...props }) => {
  return (
    <div
      style={{
        height: "250px",
      }}
    >
      <FlatTable>
        <FlatTableHead>
          <FlatTableRow>
            <FlatTableHeader>First Name</FlatTableHeader>
            <FlatTableHeader>Last Name</FlatTableHeader>
            <FlatTableHeader>Third Column</FlatTableHeader>
          </FlatTableRow>
        </FlatTableHead>
        <FlatTableBody>
          <FlatTableRow>
            <FlatTableCell>John</FlatTableCell>
            <FlatTableCell>Doe</FlatTableCell>
            <FlatTableCell>
              <ActionPopover {...props}>
                <ActionPopoverItem
                  data-element="menu-item1"
                  icon="email"
                  disabled
                  onClick={() => {}}
                >
                  Email Invoice
                </ActionPopoverItem>
                <ActionPopoverDivider />
                <ActionPopoverItem
                  data-element="menu-item2"
                  onClick={() => {}}
                  icon="delete"
                >
                  Delete
                </ActionPopoverItem>
              </ActionPopover>
            </FlatTableCell>
          </FlatTableRow>
        </FlatTableBody>
      </FlatTable>
    </div>
  );
};

export const ActionPopoverWithRenderProp = ({ ...props }) => {
  return (
    <ActionPopoverWithProps
      renderButton={({
        tabIndex,
        "data-element": dataElement,
        ariaAttributes,
      }: RenderButtonProps) => (
        <ActionPopoverMenuButton
          buttonType="tertiary"
          iconType="dropdown"
          iconPosition="after"
          size="small"
          tabIndex={tabIndex}
          data-element={dataElement}
          ariaAttributes={ariaAttributes}
        >
          More
        </ActionPopoverMenuButton>
      )}
      {...props}
    />
  );
};

export const ActionPopoverWithNoIconsOrSubmenus = ({ ...props }) => (
  <ActionPopover {...props}>
    <ActionPopoverItem onClick={() => {}}>Business</ActionPopoverItem>
    <ActionPopoverItem onClick={() => {}}>Email Invoice</ActionPopoverItem>
    <ActionPopoverItem onClick={() => {}}>Print Invoice</ActionPopoverItem>
    <ActionPopoverItem onClick={() => {}}>Download PDF</ActionPopoverItem>
    <ActionPopoverItem onClick={() => {}}>Download CSV</ActionPopoverItem>
    <ActionPopoverDivider />
    <ActionPopoverItem onClick={() => {}}>Delete</ActionPopoverItem>
    <ActionPopoverItem onClick={() => {}}>Return Home</ActionPopoverItem>
  </ActionPopover>
);

export const ActionPopoverWithSomeSubmenusAndNoIcons = ({ ...props }) => {
  const submenu = (
    <ActionPopoverMenu>
      <ActionPopoverItem data-element="submenu1" icon="bin" onClick={() => {}}>
        Sub Menu 1
      </ActionPopoverItem>
      <ActionPopoverItem data-element="submenu2" onClick={() => {}}>
        Sub Menu 2
      </ActionPopoverItem>
      <ActionPopoverItem data-element="submenu3" onClick={() => {}}>
        Sub Menu 3
      </ActionPopoverItem>
      <ActionPopoverItem data-element="submenu4" onClick={() => {}}>
        Sub Menu 4
      </ActionPopoverItem>
    </ActionPopoverMenu>
  );
  return (
    <ActionPopover {...props}>
      <ActionPopoverItem onClick={() => {}}>Business</ActionPopoverItem>
      <ActionPopoverItem onClick={() => {}} submenu={submenu}>
        Email Invoice
      </ActionPopoverItem>
      <ActionPopoverItem onClick={() => {}}>Print Invoice</ActionPopoverItem>
      <ActionPopoverItem onClick={() => {}}>Download PDF</ActionPopoverItem>
      <ActionPopoverItem onClick={() => {}} submenu={submenu}>
        Download CSV
      </ActionPopoverItem>
      <ActionPopoverDivider />
      <ActionPopoverItem onClick={() => {}} submenu={submenu}>
        Delete
      </ActionPopoverItem>
      <ActionPopoverItem onClick={() => {}} submenu={submenu}>
        Return Home
      </ActionPopoverItem>
    </ActionPopover>
  );
};

export const ActionPopoverWithSubmenusAndNoIcons = ({ ...props }) => {
  const submenu = (
    <ActionPopoverMenu>
      <ActionPopoverItem data-element="submenu1" icon="bin" onClick={() => {}}>
        Sub Menu 1
      </ActionPopoverItem>
      <ActionPopoverItem data-element="submenu2" onClick={() => {}}>
        Sub Menu 2
      </ActionPopoverItem>
      <ActionPopoverItem data-element="submenu3" onClick={() => {}}>
        Sub Menu 3
      </ActionPopoverItem>
      <ActionPopoverItem data-element="submenu4" onClick={() => {}}>
        Sub Menu 4
      </ActionPopoverItem>
    </ActionPopoverMenu>
  );
  return (
    <ActionPopover {...props}>
      <ActionPopoverItem onClick={() => {}} submenu={submenu}>
        Business
      </ActionPopoverItem>
      <ActionPopoverItem onClick={() => {}} submenu={submenu}>
        Email Invoice
      </ActionPopoverItem>
      <ActionPopoverItem onClick={() => {}} submenu={submenu}>
        Print Invoice
      </ActionPopoverItem>
      <ActionPopoverItem onClick={() => {}} submenu={submenu}>
        Download PDF
      </ActionPopoverItem>
      <ActionPopoverItem onClick={() => {}} submenu={submenu}>
        Download CSV
      </ActionPopoverItem>
      <ActionPopoverDivider />
      <ActionPopoverItem onClick={() => {}} submenu={submenu}>
        Delete
      </ActionPopoverItem>
      <ActionPopoverItem onClick={() => {}} submenu={submenu}>
        Return Home
      </ActionPopoverItem>
    </ActionPopover>
  );
};

export const ActionPopoverWithIconsAndNoSubmenus = ({ ...props }) => (
  <ActionPopover {...props}>
    <ActionPopoverItem icon="graph" onClick={() => {}}>
      Business
    </ActionPopoverItem>
    <ActionPopoverItem icon="email" onClick={() => {}}>
      Email Invoice
    </ActionPopoverItem>
    <ActionPopoverItem icon="print" onClick={() => {}}>
      Print Invoice
    </ActionPopoverItem>
    <ActionPopoverItem icon="pdf" onClick={() => {}}>
      Download PDF
    </ActionPopoverItem>
    <ActionPopoverItem icon="csv" onClick={() => {}}>
      Download CSV
    </ActionPopoverItem>
    <ActionPopoverDivider />
    <ActionPopoverItem icon="delete" onClick={() => {}}>
      Delete
    </ActionPopoverItem>
    <ActionPopoverItem icon="home" onClick={() => {}}>
      Return Home
    </ActionPopoverItem>
  </ActionPopover>
);

export const ActionPopoverWithSubmenusAndIcons = ({ ...props }) => {
  const submenu = (
    <ActionPopoverMenu>
      <ActionPopoverItem icon="bin" onClick={() => {}}>
        Sub Menu 1
      </ActionPopoverItem>
      <ActionPopoverItem onClick={() => {}}>Sub Menu 2</ActionPopoverItem>
      <ActionPopoverItem onClick={() => {}}>Sub Menu 3</ActionPopoverItem>
      <ActionPopoverItem onClick={() => {}}>Sub Menu 4</ActionPopoverItem>
    </ActionPopoverMenu>
  );
  return (
    <ActionPopover {...props}>
      <ActionPopoverItem
        data-element="menu-item1"
        icon="graph"
        onClick={() => {}}
        submenu={submenu}
      >
        Business
      </ActionPopoverItem>
      <ActionPopoverItem icon="email" onClick={() => {}} submenu={submenu}>
        Email Invoice
      </ActionPopoverItem>
      <ActionPopoverItem icon="print" onClick={() => {}} submenu={submenu}>
        Print Invoice
      </ActionPopoverItem>
      <ActionPopoverItem icon="pdf" onClick={() => {}} submenu={submenu}>
        Download PDF
      </ActionPopoverItem>
      <ActionPopoverItem icon="csv" onClick={() => {}} submenu={submenu}>
        Download CSV
      </ActionPopoverItem>
      <ActionPopoverDivider />
      <ActionPopoverItem icon="delete" onClick={() => {}} submenu={submenu}>
        Delete
      </ActionPopoverItem>
      <ActionPopoverItem icon="home" onClick={() => {}} submenu={submenu}>
        Return Home
      </ActionPopoverItem>
    </ActionPopover>
  );
};

export const ActionPopoverWithIconsAndSomeSubmenus = ({ ...props }) => {
  const submenu = (
    <ActionPopoverMenu>
      <ActionPopoverItem icon="bin" onClick={() => {}}>
        Sub Menu 1
      </ActionPopoverItem>
      <ActionPopoverItem onClick={() => {}}>Sub Menu 2</ActionPopoverItem>
      <ActionPopoverItem onClick={() => {}}>Sub Menu 3</ActionPopoverItem>
      <ActionPopoverItem onClick={() => {}}>Sub Menu 4</ActionPopoverItem>
    </ActionPopoverMenu>
  );
  return (
    <ActionPopover {...props}>
      <ActionPopoverItem icon="graph" onClick={() => {}}>
        Business
      </ActionPopoverItem>
      <ActionPopoverItem icon="email" onClick={() => {}}>
        Email Invoice
      </ActionPopoverItem>
      <ActionPopoverItem icon="print" onClick={() => {}}>
        Print Invoice
      </ActionPopoverItem>
      <ActionPopoverItem icon="pdf" onClick={() => {}}>
        Download PDF
      </ActionPopoverItem>
      <ActionPopoverItem icon="csv" onClick={() => {}} submenu={submenu}>
        Download CSV
      </ActionPopoverItem>
      <ActionPopoverDivider />
      <ActionPopoverItem icon="delete" onClick={() => {}} submenu={submenu}>
        Delete
      </ActionPopoverItem>
      <ActionPopoverItem icon="home" onClick={() => {}} submenu={submenu}>
        Return Home
      </ActionPopoverItem>
    </ActionPopover>
  );
};

export const ActionPopoverWithSubmenusAndSomeIcons = ({ ...props }) => {
  const submenu = (
    <ActionPopoverMenu>
      <ActionPopoverItem icon="bin" onClick={() => {}}>
        Sub Menu 1
      </ActionPopoverItem>
      <ActionPopoverItem onClick={() => {}}>Sub Menu 2</ActionPopoverItem>
      <ActionPopoverItem onClick={() => {}}>Sub Menu 3</ActionPopoverItem>
      <ActionPopoverItem onClick={() => {}}>Sub Menu 4</ActionPopoverItem>
    </ActionPopoverMenu>
  );
  return (
    <ActionPopover {...props}>
      <ActionPopoverItem onClick={() => {}} submenu={submenu}>
        Business
      </ActionPopoverItem>
      <ActionPopoverItem onClick={() => {}} submenu={submenu}>
        Email Invoice
      </ActionPopoverItem>
      <ActionPopoverItem onClick={() => {}} submenu={submenu}>
        Print Invoice
      </ActionPopoverItem>
      <ActionPopoverItem onClick={() => {}} submenu={submenu}>
        Download PDF
      </ActionPopoverItem>
      <ActionPopoverItem icon="csv" onClick={() => {}} submenu={submenu}>
        Download CSV
      </ActionPopoverItem>
      <ActionPopoverDivider />
      <ActionPopoverItem icon="delete" onClick={() => {}} submenu={submenu}>
        Delete
      </ActionPopoverItem>
      <ActionPopoverItem icon="home" onClick={() => {}} submenu={submenu}>
        Return Home
      </ActionPopoverItem>
    </ActionPopover>
  );
};

export const ActionPopoverWithVariableChildren = ({ ...props }) => {
  const submenu = (
    <ActionPopoverMenu>
      <ActionPopoverItem icon="bin" onClick={() => {}}>
        Sub Menu 1
      </ActionPopoverItem>
      <ActionPopoverItem onClick={() => {}}>Sub Menu 2</ActionPopoverItem>
      <ActionPopoverItem onClick={() => {}}>Sub Menu 3</ActionPopoverItem>
      <ActionPopoverItem onClick={() => {}}>Sub Menu 4</ActionPopoverItem>
    </ActionPopoverMenu>
  );
  return (
    <ActionPopover {...props}>
      <ActionPopoverItem onClick={() => {}}>Business</ActionPopoverItem>
      <ActionPopoverItem onClick={() => {}}>Email Invoice</ActionPopoverItem>
      <ActionPopoverItem onClick={() => {}}>Print Invoice</ActionPopoverItem>
      <ActionPopoverItem onClick={() => {}}>Download PDF</ActionPopoverItem>
      <ActionPopoverItem icon="csv" onClick={() => {}} submenu={submenu}>
        Download CSV
      </ActionPopoverItem>
      <ActionPopoverDivider />
      <ActionPopoverItem icon="delete" onClick={() => {}} submenu={submenu}>
        Delete
      </ActionPopoverItem>
      <ActionPopoverItem icon="home" onClick={() => {}} submenu={submenu}>
        Return Home
      </ActionPopoverItem>
    </ActionPopover>
  );
};

export const ActionPopoverMenuWithProps = ({ ...props }) => {
  return (
    <ActionPopover>
      <ActionPopoverItem
        submenu={
          <ActionPopoverMenu {...props}>
            <ActionPopoverItem icon="graph">Sub Menu 1</ActionPopoverItem>
            <ActionPopoverItem icon="add">Sub Menu 2</ActionPopoverItem>
            <ActionPopoverItem icon="print" disabled>
              Sub Menu 3
            </ActionPopoverItem>
            <ActionPopoverItem icon="bin">Sub Menu 4</ActionPopoverItem>
          </ActionPopoverMenu>
        }
      >
        Sub Menu 1
      </ActionPopoverItem>
      <ActionPopoverItem>Sub Menu 2</ActionPopoverItem>
    </ActionPopover>
  );
};

export const ActionPopoverPropsComponent = (
  props: Partial<ActionPopoverProps>
) => {
  return (
    <ActionPopover {...props}>
      <ActionPopoverItem>Sub Menu 1</ActionPopoverItem>
      <ActionPopoverItem>Sub Menu 2</ActionPopoverItem>
    </ActionPopover>
  );
};

export const ActionPopoverPropsComponentWithFirstAndLastDisabled = (
  props: Partial<ActionPopoverProps>
) => {
  return (
    <ActionPopover {...props}>
      <ActionPopoverItem disabled>Item 1</ActionPopoverItem>
      <ActionPopoverItem>Item 2</ActionPopoverItem>
      <ActionPopoverItem>Item 3</ActionPopoverItem>
      <ActionPopoverItem>Item 4</ActionPopoverItem>
      <ActionPopoverItem>Item 5</ActionPopoverItem>
      <ActionPopoverItem>Item 6</ActionPopoverItem>
      <ActionPopoverItem disabled>Item 7</ActionPopoverItem>
    </ActionPopover>
  );
};

export const ActionPopoverPropsComponentWithOnlyFirstAndLastNotDisabled = (
  props: Partial<ActionPopoverProps>
) => {
  return (
    <ActionPopover {...props}>
      <ActionPopoverItem>Item 1</ActionPopoverItem>
      <ActionPopoverItem disabled>Item 2</ActionPopoverItem>
      <ActionPopoverItem disabled>Item 3</ActionPopoverItem>
      <ActionPopoverItem disabled>Item 4</ActionPopoverItem>
      <ActionPopoverItem disabled>Item 5</ActionPopoverItem>
      <ActionPopoverItem disabled>Item 6</ActionPopoverItem>
      <ActionPopoverItem>Item 7</ActionPopoverItem>
    </ActionPopover>
  );
};

export const ActionPopoverPropsComponentWithOnlyFirstDisabled = (
  props: Partial<ActionPopoverProps>
) => {
  return (
    <ActionPopover {...props}>
      <ActionPopoverItem disabled>Item 1</ActionPopoverItem>
      <ActionPopoverItem>Item 2</ActionPopoverItem>
      <ActionPopoverItem>Item 3</ActionPopoverItem>
      <ActionPopoverItem>Item 4</ActionPopoverItem>
      <ActionPopoverItem>Item 5</ActionPopoverItem>
      <ActionPopoverItem>Item 6</ActionPopoverItem>
      <ActionPopoverItem>Item 7</ActionPopoverItem>
    </ActionPopover>
  );
};

export const ActionPopoverPropsComponentWithOnlyLastDisabled = (
  props: Partial<ActionPopoverProps>
) => {
  return (
    <ActionPopover {...props}>
      <ActionPopoverItem>Item 1</ActionPopoverItem>
      <ActionPopoverItem>Item 2</ActionPopoverItem>
      <ActionPopoverItem>Item 3</ActionPopoverItem>
      <ActionPopoverItem>Item 4</ActionPopoverItem>
      <ActionPopoverItem>Item 5</ActionPopoverItem>
      <ActionPopoverItem>Item 6</ActionPopoverItem>
      <ActionPopoverItem disabled>Item 7</ActionPopoverItem>
    </ActionPopover>
  );
};

export const ActionPopoverPropsComponentWithSomeDisabled = (
  props: Partial<ActionPopoverProps>
) => {
  return (
    <ActionPopover {...props}>
      <ActionPopoverItem>Item 1</ActionPopoverItem>
      <ActionPopoverItem disabled>Item 2</ActionPopoverItem>
      <ActionPopoverItem disabled>Item 3</ActionPopoverItem>
      <ActionPopoverItem>Item 4</ActionPopoverItem>
      <ActionPopoverItem disabled>Item 5</ActionPopoverItem>
      <ActionPopoverItem>Item 6</ActionPopoverItem>
      <ActionPopoverItem disabled>Item 7</ActionPopoverItem>
    </ActionPopover>
  );
};

export const ActionPopoverPropsComponentAllDisabled = (
  props: Partial<ActionPopoverProps>
) => {
  return (
    <ActionPopover {...props}>
      <ActionPopoverItem disabled>Item 1</ActionPopoverItem>
      <ActionPopoverItem disabled>Item 2</ActionPopoverItem>
      <ActionPopoverItem disabled>Item 3</ActionPopoverItem>
      <ActionPopoverItem disabled>Item 4</ActionPopoverItem>
      <ActionPopoverItem disabled>Item 5</ActionPopoverItem>
      <ActionPopoverItem disabled>Item 6</ActionPopoverItem>
      <ActionPopoverItem disabled>Item 7</ActionPopoverItem>
    </ActionPopover>
  );
};
