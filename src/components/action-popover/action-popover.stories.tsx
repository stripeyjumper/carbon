import React, { useState } from "react";
import { ArgTypes, Meta, StoryObj } from "@storybook/react";
import {
  ActionPopover,
  ActionPopoverDivider,
  ActionPopoverItem,
  ActionPopoverMenu,
  ActionPopoverMenuButton,
  ActionPopoverProps,
} from ".";
import Link from "../link";
import Box from "../box";
import {
  FlatTable,
  FlatTableHead,
  FlatTableBody,
  FlatTableRow,
  FlatTableHeader,
  FlatTableCell,
} from "../flat-table";
import Confirm from "../confirm";
import { Accordion } from "../accordion";
import Dialog from "../dialog";

import generateStyledSystemProps from "../../../.storybook/utils/styled-system-props";

const styledSystemProps = generateStyledSystemProps({
  margin: true,
}) as Partial<ArgTypes<ActionPopoverProps>>;

const meta: Meta<typeof ActionPopover> = {
  title: "ActionPopover",
  component: ActionPopover,
  argTypes: {
    ...styledSystemProps,
  },
};

export default meta;
type Story = StoryObj<typeof ActionPopover>;

export const Default: Story = () => {
  const submenu = (
    <ActionPopoverMenu>
      <ActionPopoverItem onClick={() => {}}>Sub Menu 1</ActionPopoverItem>
      <ActionPopoverItem onClick={() => {}}>Sub Menu 2</ActionPopoverItem>
      <ActionPopoverItem disabled onClick={() => {}}>
        Sub Menu 3
      </ActionPopoverItem>
    </ActionPopoverMenu>
  );
  const submenuWithIcons = (
    <ActionPopoverMenu>
      <ActionPopoverItem icon="graph" onClick={() => {}}>
        Sub Menu 1
      </ActionPopoverItem>
      <ActionPopoverItem icon="add" onClick={() => {}}>
        Sub Menu 2
      </ActionPopoverItem>
      <ActionPopoverItem icon="print" disabled onClick={() => {}}>
        Sub Menu 3
      </ActionPopoverItem>
    </ActionPopoverMenu>
  );
  return (
    <div style={{ marginTop: "40px", height: "275px" }}>
      <Box>
        <ActionPopover onOpen={() => {}} onClose={() => {}}>
          <ActionPopoverItem
            disabled
            icon="graph"
            submenu={submenu}
            onClick={() => {}}
          >
            Business
          </ActionPopoverItem>
          <ActionPopoverItem icon="email" onClick={() => {}}>
            Email Invoice
          </ActionPopoverItem>
          <ActionPopoverItem icon="print" onClick={() => {}} submenu={submenu}>
            Print Invoice
          </ActionPopoverItem>
          <ActionPopoverItem icon="pdf" submenu={submenu} onClick={() => {}}>
            Download PDF
          </ActionPopoverItem>
          <ActionPopoverItem icon="csv" onClick={() => {}}>
            Download CSV
          </ActionPopoverItem>
          <ActionPopoverDivider />
          <ActionPopoverItem icon="delete" onClick={() => {}}>
            Delete
          </ActionPopoverItem>
        </ActionPopover>
        <ActionPopover>
          <ActionPopoverItem icon="csv" onClick={() => {}}>
            Download CSV
          </ActionPopoverItem>
        </ActionPopover>
        <ActionPopover>
          <ActionPopoverItem
            icon="csv"
            submenu={submenuWithIcons}
            onClick={() => {}}
          >
            Download CSV
          </ActionPopoverItem>
        </ActionPopover>
      </Box>
    </div>
  );
};
Default.storyName = "Default";

export const Icons: Story = () => {
  return (
    <div style={{ height: "250px" }}>
      <Box>
        <ActionPopover>
          <ActionPopoverItem icon="email" onClick={() => {}}>
            Email Invoice
          </ActionPopoverItem>
          <ActionPopoverDivider />
          <ActionPopoverItem onClick={() => {}} icon="delete">
            Delete
          </ActionPopoverItem>
        </ActionPopover>
      </Box>
    </div>
  );
};
Icons.storyName = "Icons";

export const DisabledItems: Story = () => {
  return (
    <div style={{ height: "250px" }}>
      <Box>
        <ActionPopover>
          <ActionPopoverItem icon="email" onClick={() => {}}>
            Email Invoice
          </ActionPopoverItem>
          <ActionPopoverDivider />
          <ActionPopoverItem onClick={() => {}} icon="delete">
            Delete
          </ActionPopoverItem>
          <ActionPopoverDivider />
          <ActionPopoverItem disabled onClick={() => {}} icon="add">
            Add
          </ActionPopoverItem>
          <ActionPopoverItem disabled onClick={() => {}} icon="delete">
            Delete
          </ActionPopoverItem>
          <ActionPopoverItem onClick={() => {}} icon="tick">
            Tick
          </ActionPopoverItem>
          <ActionPopoverItem disabled onClick={() => {}} icon="delete">
            Delete
          </ActionPopoverItem>
          <ActionPopoverItem onClick={() => {}} icon="none">
            None
          </ActionPopoverItem>
        </ActionPopover>
      </Box>
    </div>
  );
};
DisabledItems.storyName = "Disabled Items";

export const MenuRightAligned: Story = () => {
  return (
    <div style={{ height: "250px" }}>
      <Box>
        <ActionPopover rightAlignMenu>
          <ActionPopoverItem icon="email" disabled onClick={() => {}}>
            Email Invoice
          </ActionPopoverItem>
          <ActionPopoverDivider />
          <ActionPopoverItem onClick={() => {}} icon="delete">
            Delete
          </ActionPopoverItem>
        </ActionPopover>
      </Box>
    </div>
  );
};
MenuRightAligned.storyName = "Menu Right Aligned";

export const ContentAlignedRight: Story = () => {
  return (
    <div style={{ height: "250px" }}>
      <Box>
        <ActionPopover horizontalAlignment="right">
          <ActionPopoverItem icon="email">Email Invoice</ActionPopoverItem>
          <ActionPopoverDivider />
          <ActionPopoverItem icon="delete">Delete</ActionPopoverItem>
        </ActionPopover>
      </Box>
    </div>
  );
};
ContentAlignedRight.storyName = "Content Aligned Right";

export const NoIcons: Story = () => {
  return (
    <div style={{ height: "250px" }}>
      <Box>
        <ActionPopover>
          <ActionPopoverItem onClick={() => {}}>
            Email Invoice
          </ActionPopoverItem>
          <ActionPopoverDivider />
          <ActionPopoverItem onClick={() => {}}>Delete</ActionPopoverItem>
        </ActionPopover>
      </Box>
    </div>
  );
};
NoIcons.storyName = "No Icons";

export const CustomMenuButton: Story = () => {
  return (
    <div style={{ height: "250px" }}>
      <Box>
        <ActionPopover
          renderButton={({
            tabIndex,
            "data-element": dataElement,
            ariaAttributes,
          }) => (
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
        >
          <ActionPopoverItem icon="email" onClick={() => {}}>
            Email Invoice
          </ActionPopoverItem>
          <ActionPopoverDivider />
          <ActionPopoverItem onClick={() => {}} icon="delete">
            Delete
          </ActionPopoverItem>
        </ActionPopover>
        <ActionPopover
          renderButton={({ "data-element": dataElement }) => (
            <Link onClick={() => {}} data-element={dataElement}>
              More
            </Link>
          )}
        >
          <ActionPopoverItem icon="email" onClick={() => {}}>
            Email Invoice
          </ActionPopoverItem>
          <ActionPopoverDivider />
          <ActionPopoverItem onClick={() => {}} icon="delete">
            Delete
          </ActionPopoverItem>
        </ActionPopover>
      </Box>
    </div>
  );
};
CustomMenuButton.storyName = "Custom Menu Button";

export const Submenu: Story = () => {
  return (
    <div style={{ height: "250px" }}>
      <Box>
        <ActionPopover>
          <ActionPopoverItem
            icon="print"
            onClick={() => {}}
            submenu={
              <ActionPopoverMenu>
                <ActionPopoverItem disabled onClick={() => {}}>
                  CSV
                </ActionPopoverItem>
                <ActionPopoverItem onClick={() => {}}>PDF</ActionPopoverItem>
                <ActionPopoverItem onClick={() => {}}>PDF</ActionPopoverItem>
              </ActionPopoverMenu>
            }
          >
            Print
          </ActionPopoverItem>
          <ActionPopoverDivider />
          <ActionPopoverItem disabled onClick={() => {}} icon="add">
            Add
          </ActionPopoverItem>
          <ActionPopoverItem onClick={() => {}} icon="delete">
            Delete
          </ActionPopoverItem>
        </ActionPopover>
      </Box>
    </div>
  );
};
Submenu.storyName = "Submenu";

export const DisabledSubmenu: Story = () => {
  return (
    <div style={{ height: "250px" }}>
      <Box>
        <ActionPopover>
          <ActionPopoverItem
            disabled
            icon="print"
            onClick={() => {}}
            submenu={
              <ActionPopoverMenu>
                <ActionPopoverItem onClick={() => {}}>CSV</ActionPopoverItem>
                <ActionPopoverItem onClick={() => {}}>PDF</ActionPopoverItem>
              </ActionPopoverMenu>
            }
          >
            Print
          </ActionPopoverItem>
          <ActionPopoverDivider />
          <ActionPopoverItem onClick={() => {}} icon="delete">
            Delete
          </ActionPopoverItem>
        </ActionPopover>
      </Box>
    </div>
  );
};
DisabledSubmenu.storyName = "Disabled Submenu";

export const SubmenuPositionedRight: Story = () => {
  const submenu = (
    <ActionPopoverMenu>
      <ActionPopoverItem onClick={() => {}}>Sub Menu 1</ActionPopoverItem>
      <ActionPopoverItem onClick={() => {}}>Sub Menu 2</ActionPopoverItem>
      <ActionPopoverItem disabled onClick={() => {}}>
        Sub Menu 3
      </ActionPopoverItem>
    </ActionPopoverMenu>
  );
  return (
    <div style={{ height: "250px" }}>
      <Box>
        <ActionPopover submenuPosition="right">
          <ActionPopoverItem icon="email" submenu={submenu}>
            Email Invoice
          </ActionPopoverItem>
          <ActionPopoverDivider />
          <ActionPopoverItem icon="delete" submenu={submenu}>
            Delete
          </ActionPopoverItem>
        </ActionPopover>
      </Box>
    </div>
  );
};
SubmenuPositionedRight.storyName = "Submenu Positioned Right";
SubmenuPositionedRight.parameters = {
  docs: { disable: true },
};

export const MenuOpeningAbove: Story = () => {
  return (
    <div style={{ paddingTop: "120px", height: "250px" }}>
      <Box>
        <ActionPopover placement="top">
          <ActionPopoverItem
            icon="print"
            onClick={() => {}}
            submenu={
              <ActionPopoverMenu>
                <ActionPopoverItem onClick={() => {}}>CSV</ActionPopoverItem>
                <ActionPopoverItem onClick={() => {}}>PDF</ActionPopoverItem>
              </ActionPopoverMenu>
            }
          >
            Print
          </ActionPopoverItem>
          <ActionPopoverDivider />
          <ActionPopoverItem onClick={() => {}} icon="delete">
            Delete
          </ActionPopoverItem>
        </ActionPopover>
      </Box>
    </div>
  );
};
MenuOpeningAbove.storyName = "Menu Opening Above";

export const KeyboardNavigation: Story = () => {
  return (
    <div style={{ height: "250px" }}>
      <Box>
        <ActionPopover>
          <ActionPopoverItem icon="email" onClick={() => {}}>
            Email Invoice
          </ActionPopoverItem>
          <ActionPopoverItem disabled icon="csv" onClick={() => {}}>
            Download CSV
          </ActionPopoverItem>
          <ActionPopoverItem icon="pdf" onClick={() => {}}>
            Download PDF
          </ActionPopoverItem>
          <ActionPopoverDivider />
          <ActionPopoverItem onClick={() => {}} icon="delete">
            Delete
          </ActionPopoverItem>
        </ActionPopover>
      </Box>
    </div>
  );
};
KeyboardNavigation.storyName = "Keyboard Navigation";

export const KeyboardNavigationLeftAlignedSubmenu: Story = () => {
  return (
    <div style={{ height: "250px" }}>
      <Box>
        <ActionPopover>
          <ActionPopoverItem
            icon="csv"
            onClick={() => {}}
            submenu={
              <ActionPopoverMenu>
                <ActionPopoverItem icon="csv" onClick={() => {}}>
                  CSV
                </ActionPopoverItem>
                <ActionPopoverItem icon="pdf" onClick={() => {}}>
                  PDF
                </ActionPopoverItem>
              </ActionPopoverMenu>
            }
          >
            Download
          </ActionPopoverItem>
          <ActionPopoverItem
            icon="pdf"
            onClick={() => {}}
            submenu={
              <ActionPopoverMenu>
                <ActionPopoverItem icon="csv" onClick={() => {}}>
                  CSV
                </ActionPopoverItem>
                <ActionPopoverItem icon="pdf" onClick={() => {}}>
                  PDF
                </ActionPopoverItem>
              </ActionPopoverMenu>
            }
          >
            Print
          </ActionPopoverItem>
          <ActionPopoverDivider />
          <ActionPopoverItem onClick={() => {}} icon="delete">
            Delete
          </ActionPopoverItem>
        </ActionPopover>
      </Box>
    </div>
  );
};
KeyboardNavigationLeftAlignedSubmenu.storyName =
  "Keyboard Navigation Left Aligned Submenu";

export const KeyboardNavigationRightAlignedSubmenu: Story = () => {
  return (
    <div style={{ height: "250px" }}>
      <Box>
        <ActionPopover>
          <ActionPopoverItem
            icon="csv"
            onClick={() => {}}
            submenu={
              <ActionPopoverMenu>
                <ActionPopoverItem icon="csv" onClick={() => {}}>
                  CSV
                </ActionPopoverItem>
                <ActionPopoverItem icon="pdf" onClick={() => {}}>
                  PDF
                </ActionPopoverItem>
              </ActionPopoverMenu>
            }
          >
            Download
          </ActionPopoverItem>
          <ActionPopoverItem
            icon="pdf"
            onClick={() => {}}
            submenu={
              <ActionPopoverMenu>
                <ActionPopoverItem icon="csv" onClick={() => {}}>
                  CSV
                </ActionPopoverItem>
                <ActionPopoverItem icon="pdf" onClick={() => {}}>
                  PDF
                </ActionPopoverItem>
              </ActionPopoverMenu>
            }
          >
            Print
          </ActionPopoverItem>
          <ActionPopoverDivider />
          <ActionPopoverItem onClick={() => {}} icon="delete">
            Delete
          </ActionPopoverItem>
        </ActionPopover>
      </Box>
    </div>
  );
};
KeyboardNavigationRightAlignedSubmenu.storyName =
  "Keyboard Navigation Right Aligned Submenu";
KeyboardNavigationRightAlignedSubmenu.parameters = {
  docs: { disable: true },
};

export const AdditionalOptions: Story = () => {
  return (
    <div style={{ marginTop: "40px", height: "275px", maxWidth: "800px" }}>
      <Box>
        <ActionPopover rightAlignMenu>
          <ActionPopoverItem onClick={() => {}}>
            Enroll Device
          </ActionPopoverItem>
          <ActionPopoverItem onClick={() => {}}>Assign Owner</ActionPopoverItem>
          <ActionPopoverDivider />
          <ActionPopoverItem onClick={() => {}}>
            Manage Devices
          </ActionPopoverItem>
        </ActionPopover>
      </Box>
    </div>
  );
};
AdditionalOptions.storyName = "Additional Options";

export const DownloadButton: Story = () => {
  return (
    <div style={{ marginTop: "40px", height: "275px", maxWidth: "800px" }}>
      <Box>
        <ActionPopover rightAlignMenu>
          <ActionPopoverItem download icon="download" href="example-img.jpg">
            Download
          </ActionPopoverItem>
          <ActionPopoverItem icon="settings" onClick={() => {}}>
            Assign Owner
          </ActionPopoverItem>
          <ActionPopoverItem disabled icon="download" href="example-img.jpg">
            Download
          </ActionPopoverItem>
        </ActionPopover>
      </Box>
    </div>
  );
};
DownloadButton.storyName = "Download Button";

export const InOverflowHiddenContainer: Story = () => {
  return (
    <div style={{ marginTop: "40px", height: "275px", maxWidth: "800px" }}>
      <Accordion title="Heading">
        <Box>
          <ActionPopover>
            <ActionPopoverItem onClick={() => {}}>
              Enroll Device
            </ActionPopoverItem>
            <ActionPopoverItem onClick={() => {}}>
              Assign Owner
            </ActionPopoverItem>
            <ActionPopoverDivider />
            <ActionPopoverItem onClick={() => {}}>
              Manage Devices
            </ActionPopoverItem>
          </ActionPopover>
          <ActionPopover>
            <ActionPopoverItem onClick={() => {}}>
              Enroll Device
            </ActionPopoverItem>
            <ActionPopoverItem onClick={() => {}}>
              Assign Owner
            </ActionPopoverItem>
            <ActionPopoverDivider />
            <ActionPopoverItem onClick={() => {}}>
              Manage Devices
            </ActionPopoverItem>
          </ActionPopover>
          <ActionPopover>
            <ActionPopoverItem onClick={() => {}}>
              Enroll Device
            </ActionPopoverItem>
            <ActionPopoverItem onClick={() => {}}>
              Assign Owner
            </ActionPopoverItem>
            <ActionPopoverDivider />
            <ActionPopoverItem onClick={() => {}}>
              Manage Devices
            </ActionPopoverItem>
          </ActionPopover>
        </Box>
      </Accordion>
    </div>
  );
};
InOverflowHiddenContainer.storyName = "In Overflow Hidden Container";

export const InFlatTable: Story = () => {
  const [highlightedRow, setHighlightedRow] = useState("");
  const handleHighlightRow = (id: string) => {
    setHighlightedRow(id);
  };
  return (
    <div style={{ paddingTop: "120px", height: "250px" }}>
      <FlatTable>
        <FlatTableHead>
          <FlatTableRow>
            <FlatTableHeader>Name</FlatTableHeader>
            <FlatTableHeader>Location</FlatTableHeader>
            <FlatTableHeader>Relationship Status</FlatTableHeader>
            <FlatTableHeader>Dependents</FlatTableHeader>
          </FlatTableRow>
        </FlatTableHead>
        <FlatTableBody>
          <FlatTableRow
            onClick={() => handleHighlightRow("one")}
            highlighted={highlightedRow === "one"}
          >
            <FlatTableCell>John Doe</FlatTableCell>
            <FlatTableCell>London</FlatTableCell>
            <FlatTableCell>Single</FlatTableCell>
            <FlatTableCell>
              <ActionPopover
                placement="top"
                onOpen={() => handleHighlightRow("one")}
              >
                <ActionPopoverItem
                  icon="print"
                  onClick={() => {}}
                  submenu={
                    <ActionPopoverMenu>
                      <ActionPopoverItem onClick={() => {}}>
                        CSV
                      </ActionPopoverItem>
                      <ActionPopoverItem onClick={() => {}}>
                        PDF
                      </ActionPopoverItem>
                    </ActionPopoverMenu>
                  }
                >
                  Print
                </ActionPopoverItem>
                <ActionPopoverDivider />
                <ActionPopoverItem onClick={() => {}} icon="delete">
                  Delete
                </ActionPopoverItem>
              </ActionPopover>
            </FlatTableCell>
          </FlatTableRow>
          <FlatTableRow
            onClick={() => handleHighlightRow("two")}
            highlighted={highlightedRow === "two"}
          >
            <FlatTableCell>Jane Doe</FlatTableCell>
            <FlatTableCell>York</FlatTableCell>
            <FlatTableCell>Married</FlatTableCell>
            <FlatTableCell>
              <ActionPopover
                placement="top"
                onOpen={() => handleHighlightRow("two")}
              >
                <ActionPopoverItem
                  icon="print"
                  onClick={() => {}}
                  submenu={
                    <ActionPopoverMenu>
                      <ActionPopoverItem onClick={() => {}}>
                        CSV
                      </ActionPopoverItem>
                      <ActionPopoverItem onClick={() => {}}>
                        PDF
                      </ActionPopoverItem>
                    </ActionPopoverMenu>
                  }
                >
                  Print
                </ActionPopoverItem>
                <ActionPopoverDivider />
                <ActionPopoverItem onClick={() => {}} icon="delete">
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
InFlatTable.storyName = "In Flat Table";

export const OpeningAModal: Story = () => {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Box>
        <ActionPopover
          renderButton={({ ...props }) => (
            <ActionPopoverMenuButton {...props}>
              Open Actions
            </ActionPopoverMenuButton>
          )}
        >
          <ActionPopoverItem
            onClick={() => {
              setIsOpen(!isOpen);
              setIsConfirmOpen(isConfirmOpen);
            }}
          >
            Open Confirm Dialog
          </ActionPopoverItem>
          <ActionPopoverItem icon="settings" onClick={() => {}}>
            Do Nothing
          </ActionPopoverItem>
        </ActionPopover>
      </Box>
      <Confirm
        title="Are you sure?"
        subtitle="Subtitle"
        confirmButtonDestructive
        cancelButtonDestructive
        disableConfirm
        open={isConfirmOpen}
        onConfirm={() => setIsConfirmOpen(!isConfirmOpen)}
        onCancel={() => setIsConfirmOpen(!isConfirmOpen)}
      >
        Content
      </Confirm>
    </>
  );
};
OpeningAModal.storyName = "Opening a Modal";

export const ActionPopoverNestedInDialog: Story = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Dialog open={isOpen} onCancel={() => setIsOpen(false)} title="Dialog">
      <ActionPopover>
        <ActionPopoverItem icon="email" onClick={() => {}}>
          Email Invoice
        </ActionPopoverItem>
        <ActionPopoverDivider />
        <ActionPopoverItem onClick={() => {}} icon="delete">
          Delete
        </ActionPopoverItem>
      </ActionPopover>{" "}
    </Dialog>
  );
};
ActionPopoverNestedInDialog.storyName = "Action Popover Nested in Dialog";
