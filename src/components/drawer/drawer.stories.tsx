import React, { useCallback, useMemo, useState } from "react";
import { ComponentStory } from "@storybook/react";

import styled from "styled-components";

import { Checkbox } from "../checkbox";
import Search from "../search";
import Drawer from ".";
import Button from "../button";
import PopoverContainer from "../popover-container";
import DialogFullScreen from "../dialog-full-screen";
import { StyledDrawerContent, StyledDrawerSidebar } from "./drawer.style";
import Heading from "../heading";
import {
  FlatTable,
  FlatTableHead,
  FlatTableBody,
  FlatTableRow,
  FlatTableHeader,
  FlatTableCell,
  Sort,
} from "../flat-table";
import { Tabs, Tab } from "../tabs";
import Typography from "../typography";
import Box from "../box";
import Pager from "../pager";

export const Default: ComponentStory<typeof Drawer> = () => (
  <div style={{ height: "200px" }}>
    <Drawer
      expandedWidth="40%"
      animationDuration="0.5s"
      sidebar={
        <ul>
          <li>link a</li>
          <li>link b</li>
          <li>link c</li>
        </ul>
      }
    >
      content body content body content body content body content body content
      body content body
    </Drawer>
  </div>
);

export const CustomHeight: ComponentStory<typeof Drawer> = (args) => (
  <Drawer
    height="230px"
    defaultExpanded
    sidebar={
      <ul>
        <li>link a</li>
        <li>link b</li>
        <li>link c</li>
      </ul>
    }
    {...args}
  >
    content body content body content body content body content body content
    body content body
  </Drawer>
);
CustomHeight.args = {
  expandedWidth: "40%",
  animationDuration: "0.5s",
};

export const BackgroundColorRed: ComponentStory<typeof Drawer> = (args) => (
  <div style={{ height: "200px" }}>
    <Drawer
      sidebar={
        <ul>
          <li>link a</li>
          <li>link b</li>
          <li>link c</li>
        </ul>
      }
      {...args}
    >
      content body content body content body content body content body content
      body content body
    </Drawer>
  </div>
);
BackgroundColorRed.args = {
  expandedWidth: "40%",
  animationDuration: "0.5s",
  backgroundColor: "#FF0000",
};

export const BackgroundColorWhite: ComponentStory<typeof Drawer> = (args) => (
  <div style={{ height: "200px", backgroundColor: "#FF0000" }}>
    <Drawer
      {...args}
      sidebar={
        <ul>
          <li>link a</li>
          <li>link b</li>
          <li>link c</li>
        </ul>
      }
    >
      content body content body content body content body content body content
      body content body
    </Drawer>
  </div>
);
BackgroundColorWhite.args = {
  expandedWidth: "40%",
  animationDuration: "0.5s",
  backgroundColor: "#FFFFFF",
};

export const BackgroundColorTransparent: ComponentStory<typeof Drawer> = (
  args
) => (
  <div style={{ height: "200px", backgroundColor: "#FF0000" }}>
    <Drawer
      sidebar={
        <ul>
          <li>link a</li>
          <li>link b</li>
          <li>link c</li>
        </ul>
      }
      {...args}
    >
      content body content body content body content body content body content
      body content body
    </Drawer>
  </div>
);
BackgroundColorTransparent.args = {
  expandedWidth: "40%",
  animationDuration: "0.5s",
  backgroundColor: "transparent",
};

export const Title: ComponentStory<typeof Drawer> = () => (
  <div style={{ height: "200px" }}>
    <Drawer
      expandedWidth="40%"
      animationDuration="0.5s"
      title={<Typography variant="h2">Drawer title</Typography>}
      sidebar={
        <ul>
          <li>link a</li>
          <li>link b</li>
          <li>link c</li>
        </ul>
      }
    >
      content body content body content body content body content body content
      body content body
    </Drawer>
  </div>
);

export const WithControls: ComponentStory<typeof Drawer> = (args) => (
  <div style={{ height: "200px" }}>
    <Drawer
      showControls
      sidebar={
        <ul>
          <li>link a</li>
          <li>link b</li>
          <li>link c</li>
        </ul>
      }
      {...args}
    >
      content body content body content body content body content body content
      body content body
    </Drawer>
  </div>
);
WithControls.args = {
  expandedWidth: "40%",
  animationDuration: "0.5s",
};

export const WithStickyHeader: ComponentStory<typeof Drawer> = () => (
  <div style={{ height: "400px" }}>
    <Drawer
      title={<Typography variant="h2">Drawer title</Typography>}
      stickyHeader
      showControls
      expandedWidth="40%"
      animationDuration="0.5s"
      sidebar={
        <>
          <Checkbox
            label="Example checkbox"
            name="checkbox-default"
            ml="40px"
            mt="30px"
          />
          <Checkbox
            label="Example checkbox"
            name="checkbox-default"
            ml="40px"
            mt="30px"
          />
          <Checkbox
            label="Example checkbox"
            name="checkbox-default"
            ml="40px"
            mt="30px"
          />
          <Checkbox
            label="Example checkbox"
            name="checkbox-default"
            ml="40px"
            mt="30px"
          />
          <Checkbox
            label="Example checkbox"
            name="checkbox-default"
            ml="40px"
            mt="30px"
          />
          <Checkbox
            label="Example checkbox"
            name="checkbox-default"
            ml="40px"
            mt="30px"
          />
          <Checkbox
            label="Example checkbox"
            name="checkbox-default"
            ml="40px"
            mt="30px"
          />
          <Checkbox
            label="Example checkbox"
            name="checkbox-default"
            ml="40px"
            mt="30px"
          />
          <Checkbox
            label="Example checkbox"
            name="checkbox-default"
            ml="40px"
            mt="30px"
            mb={4}
          />
        </>
      }
    >
      content body content body content body content body content body content
      body content body
    </Drawer>
  </div>
);

export const WithFooter: ComponentStory<typeof Drawer> = () => (
  <div style={{ height: "400px" }}>
    <Drawer
      title={<Typography variant="h2">Drawer title</Typography>}
      stickyHeader
      showControls
      expandedWidth="40%"
      animationDuration="0.5s"
      footer={
        <Box display="flex" justifyContent="flex-end">
          <Button mr="16px">Cancel</Button>
          <Button buttonType="primary" type="submit">
            Action
          </Button>
        </Box>
      }
      sidebar={
        <>
          <Checkbox
            label="Example checkbox"
            name="checkbox-default"
            ml="40px"
            mt="30px"
          />
          <Checkbox
            label="Example checkbox"
            name="checkbox-default"
            ml="40px"
            mt="30px"
          />
          <Checkbox
            label="Example checkbox"
            name="checkbox-default"
            ml="40px"
            mt="30px"
          />
          <Checkbox
            label="Example checkbox"
            name="checkbox-default"
            ml="40px"
            mt="30px"
          />
          <Checkbox
            label="Example checkbox"
            name="checkbox-default"
            ml="40px"
            mt="30px"
          />
          <Checkbox
            label="Example checkbox"
            name="checkbox-default"
            ml="40px"
            mt="30px"
          />
          <Checkbox
            label="Example checkbox"
            name="checkbox-default"
            ml="40px"
            mt="30px"
          />
          <Checkbox
            label="Example checkbox"
            name="checkbox-default"
            ml="40px"
            mt="30px"
          />
          <Checkbox
            label="Example checkbox"
            name="checkbox-default"
            ml="40px"
            mt="30px"
            mb={4}
          />
        </>
      }
    >
      content body content body content body content body content body content
      body content body
    </Drawer>
  </div>
);

export const WithStickyFooter: ComponentStory<typeof Drawer> = () => (
  <div style={{ height: "400px" }}>
    <Drawer
      title={<Typography variant="h2">Drawer title</Typography>}
      stickyHeader
      stickyFooter
      showControls
      expandedWidth="40%"
      animationDuration="0.5s"
      footer={
        <Box display="flex" justifyContent="flex-end">
          <Button mr="16px">Cancel</Button>
          <Button buttonType="primary" type="submit">
            Action
          </Button>
        </Box>
      }
      sidebar={
        <>
          <Checkbox
            label="Example checkbox"
            name="checkbox-default"
            ml="40px"
            mt="30px"
          />
          <Checkbox
            label="Example checkbox"
            name="checkbox-default"
            ml="40px"
            mt="30px"
          />
          <Checkbox
            label="Example checkbox"
            name="checkbox-default"
            ml="40px"
            mt="30px"
          />
          <Checkbox
            label="Example checkbox"
            name="checkbox-default"
            ml="40px"
            mt="30px"
          />
          <Checkbox
            label="Example checkbox"
            name="checkbox-default"
            ml="40px"
            mt="30px"
          />
          <Checkbox
            label="Example checkbox"
            name="checkbox-default"
            ml="40px"
            mt="30px"
          />
          <Checkbox
            label="Example checkbox"
            name="checkbox-default"
            ml="40px"
            mt="30px"
          />
          <Checkbox
            label="Example checkbox"
            name="checkbox-default"
            ml="40px"
            mt="30px"
          />
          <Checkbox
            label="Example checkbox"
            name="checkbox-default"
            ml="40px"
            mt="30px"
            mb={4}
          />
        </>
      }
    >
      content body content body content body content body content body content
      body content body
    </Drawer>
  </div>
);

export const CustomSidebar: ComponentStory<typeof Drawer> = (args) => {
  const rows = [
    <FlatTableRow key="0">
      <FlatTableCell>John Doe</FlatTableCell>
      <FlatTableCell>London</FlatTableCell>
      <FlatTableCell>Single</FlatTableCell>
      <FlatTableCell>0</FlatTableCell>
    </FlatTableRow>,
    <FlatTableRow key="1">
      <FlatTableCell>Jane Doe</FlatTableCell>
      <FlatTableCell>York</FlatTableCell>
      <FlatTableCell>Married</FlatTableCell>
      <FlatTableCell>2</FlatTableCell>
    </FlatTableRow>,
    <FlatTableRow key="2">
      <FlatTableCell>John Smith</FlatTableCell>
      <FlatTableCell>Edinburgh</FlatTableCell>
      <FlatTableCell>Single</FlatTableCell>
      <FlatTableCell>1</FlatTableCell>
    </FlatTableRow>,
    <FlatTableRow key="3">
      <FlatTableCell>Jane Smith</FlatTableCell>
      <FlatTableCell>Newcastle</FlatTableCell>
      <FlatTableCell>Married</FlatTableCell>
      <FlatTableCell>5</FlatTableCell>
    </FlatTableRow>,
    <FlatTableRow key="4">
      <FlatTableCell>Liz Anya</FlatTableCell>
      <FlatTableCell>Stoke</FlatTableCell>
      <FlatTableCell>Single</FlatTableCell>
      <FlatTableCell>2</FlatTableCell>
    </FlatTableRow>,
  ];
  const [recordsRange, setRecordsRange] = useState({ start: 0, end: 5 });
  const [currentPage, setCurrentPage] = useState(1);
  const renderRows = () => {
    const { start, end } = recordsRange;
    if (start < 0) return rows;
    if (end > rows.length) return rows.slice(start, rows.length);
    return rows.slice(start, end);
  };
  const handlePagination = (newPage: number, newPageSize: number) => {
    const start = (newPage - 1) * newPageSize;
    const end = start + newPageSize;
    setRecordsRange({ start, end });
    setCurrentPage(newPage);
  };
  return (
    <div>
      <Drawer
        defaultExpanded
        sidebar={
          <FlatTable
            height="calc(100vh - 70px)"
            hasStickyFooter
            footer={
              <Pager
                totalRecords={rows.length}
                showPageSizeSelection
                pageSize={5}
                currentPage={currentPage}
                onPagination={(next, size) => handlePagination(next, size)}
                pageSizeSelectionOptions={[
                  { id: "1", name: 1 },
                  { id: "3", name: 3 },
                  { id: "5", name: 5 },
                ]}
              />
            }
          >
            <FlatTableHead>
              <FlatTableRow>
                <FlatTableHeader>Name</FlatTableHeader>
                <FlatTableHeader>Location</FlatTableHeader>
                <FlatTableHeader>Relationship Status</FlatTableHeader>
                <FlatTableHeader>Dependents</FlatTableHeader>
              </FlatTableRow>
            </FlatTableHead>
            <FlatTableBody>{renderRows()}</FlatTableBody>
          </FlatTable>
        }
        {...args}
      >
        content body content body content body content body content body content
        body content body
      </Drawer>
    </div>
  );
};
CustomSidebar.args = {
  expandedWidth: "35%",
  animationDuration: "0.5s",
};

export const CustomContent: ComponentStory<typeof Drawer> = (args) => (
  <div style={{ height: "200px" }}>
    <Drawer
      sidebar={
        <ul>
          <li>link a</li>
          <li>link b</li>
          <li>link c</li>
        </ul>
      }
      {...args}
    >
      <FlatTable>
        <FlatTableHead>
          <FlatTableRow>
            <FlatTableHeader>Client</FlatTableHeader>
            <FlatTableHeader>Client Type</FlatTableHeader>
            <FlatTableHeader>Categories</FlatTableHeader>
            <FlatTableHeader>Services</FlatTableHeader>
            <FlatTableHeader>Client</FlatTableHeader>
            <FlatTableHeader>Client Type</FlatTableHeader>
            <FlatTableHeader>Categories</FlatTableHeader>
            <FlatTableHeader>Services</FlatTableHeader>
          </FlatTableRow>
        </FlatTableHead>
        <FlatTableBody>
          <FlatTableRow>
            <FlatTableCell>John Doe</FlatTableCell>
            <FlatTableCell>Business</FlatTableCell>
            <FlatTableCell>Group1, Group2</FlatTableCell>
            <FlatTableCell>Accounting</FlatTableCell>
            <FlatTableCell>John Doe</FlatTableCell>
            <FlatTableCell>Business</FlatTableCell>
            <FlatTableCell>Group1, Group2</FlatTableCell>
            <FlatTableCell>Accounting</FlatTableCell>
          </FlatTableRow>
          <FlatTableRow>
            <FlatTableCell>Jane Doe</FlatTableCell>
            <FlatTableCell>Business</FlatTableCell>
            <FlatTableCell>Group1, Group3</FlatTableCell>
            <FlatTableCell>Accounting</FlatTableCell>
            <FlatTableCell>Jane Doe</FlatTableCell>
            <FlatTableCell>Business</FlatTableCell>
            <FlatTableCell>Group1, Group3</FlatTableCell>
            <FlatTableCell>Accounting</FlatTableCell>
          </FlatTableRow>
          <FlatTableRow>
            <FlatTableCell>John Smith</FlatTableCell>
            <FlatTableCell>Charity</FlatTableCell>
            <FlatTableCell>Group3</FlatTableCell>
            <FlatTableCell>Payroll</FlatTableCell>
            <FlatTableCell>John Smith</FlatTableCell>
            <FlatTableCell>Charity</FlatTableCell>
            <FlatTableCell>Group3</FlatTableCell>
            <FlatTableCell>Payroll</FlatTableCell>
          </FlatTableRow>
          <FlatTableRow>
            <FlatTableCell>Jane Smith</FlatTableCell>
            <FlatTableCell>Partnership</FlatTableCell>
            <FlatTableCell>Group3</FlatTableCell>
            <FlatTableCell>Final Tax</FlatTableCell>
            <FlatTableCell>Jane Smith</FlatTableCell>
            <FlatTableCell>Partnership</FlatTableCell>
            <FlatTableCell>Group3</FlatTableCell>
            <FlatTableCell>Final Tax</FlatTableCell>
          </FlatTableRow>
          <FlatTableRow>
            <FlatTableCell>Jane Smith</FlatTableCell>
            <FlatTableCell>Partnership</FlatTableCell>
            <FlatTableCell>Group3</FlatTableCell>
            <FlatTableCell>Final Tax</FlatTableCell>
            <FlatTableCell>Jane Smith</FlatTableCell>
            <FlatTableCell>Partnership</FlatTableCell>
            <FlatTableCell>Group3</FlatTableCell>
            <FlatTableCell>Final Tax</FlatTableCell>
          </FlatTableRow>
          <FlatTableRow>
            <FlatTableCell>Jane Smith</FlatTableCell>
            <FlatTableCell>Partnership</FlatTableCell>
            <FlatTableCell>Group3</FlatTableCell>
            <FlatTableCell>Final Tax</FlatTableCell>
            <FlatTableCell>Jane Smith</FlatTableCell>
            <FlatTableCell>Partnership</FlatTableCell>
            <FlatTableCell>Group3</FlatTableCell>
            <FlatTableCell>Final Tax</FlatTableCell>
          </FlatTableRow>
          <FlatTableRow>
            <FlatTableCell>Jane Smith</FlatTableCell>
            <FlatTableCell>Partnership</FlatTableCell>
            <FlatTableCell>Group3</FlatTableCell>
            <FlatTableCell>Final Tax</FlatTableCell>
            <FlatTableCell>Jane Smith</FlatTableCell>
            <FlatTableCell>Partnership</FlatTableCell>
            <FlatTableCell>Group3</FlatTableCell>
            <FlatTableCell>Final Tax</FlatTableCell>
          </FlatTableRow>
        </FlatTableBody>
      </FlatTable>
    </Drawer>
  </div>
);
CustomContent.args = {
  expandedWidth: "20%",
  animationDuration: "0.5s",
};

export const DifferentExpandedWidth: ComponentStory<typeof Drawer> = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const onChangeHandler = useCallback(() => {
    setIsExpanded(!isExpanded);
  }, [isExpanded]);
  return (
    <div>
      <p>
        Note: if you experience glitchy animation on `Drawer` component, please
        open canvas in new window (2nd icon in top right corner)
      </p>
      <div style={{ height: "200px" }}>
        <Drawer
          title={<h2>Controllage Usage Drawer</h2>}
          showControls
          expandedWidth="62%"
          expanded
          onChange={onChangeHandler}
          sidebar={
            <ul>
              <li>link a</li>
              <li>link b</li>
              <li>link c</li>
            </ul>
          }
        >
          content body content body content body content body content body
          content body content body
        </Drawer>
      </div>
    </div>
  );
};

export const DifferentAnimationSpeed: ComponentStory<typeof Drawer> = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const onChangeHandler = useCallback(() => {
    setIsExpanded(!isExpanded);
  }, [isExpanded]);
  return (
    <div>
      <p>
        Note: if you experience glitchy animation on `Drawer` component, please
        open canvas in new window (2nd icon in top right corner)
      </p>
      <div style={{ height: "200px" }}>
        <Drawer
          title={<h2>Controllage Usage Drawer</h2>}
          showControls
          expandedWidth="40%"
          animationDuration="3s"
          expanded={isExpanded}
          onChange={onChangeHandler}
          sidebar={
            <ul>
              <li>link a</li>
              <li>link b</li>
              <li>link c</li>
            </ul>
          }
        >
          content body content body content body content body content body
          content body content body
        </Drawer>
      </div>
    </div>
  );
};

export const Controlled: ComponentStory<typeof Drawer> = (args) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const onChangeHandler = useCallback(() => {
    setIsExpanded(!isExpanded);
  }, [isExpanded]);
  return (
    <div>
      <p>
        Note: if you experience glitchy animation on `Drawer` component, please
        open canvas in new window (2nd icon in top right corner)
      </p>
      <div style={{ height: "200px" }}>
        <Drawer
          backgroundColor="#FFF000"
          title={<h2>Controlled Usage Drawer</h2>}
          showControls
          expanded={isExpanded}
          onChange={onChangeHandler}
          sidebar={
            <ul>
              <li>link a</li>
              <li>link b</li>
              <li>link c</li>
            </ul>
          }
          {...args}
        >
          content body content body content body content body content body
          content body content body
        </Drawer>
      </div>
    </div>
  );
};
Controlled.args = {
  expandedWidth: "40%",
  animationDuration: "0.5s",
};

export const SideViewNavigation: ComponentStory<typeof Drawer> = () => {
  type dataPropTypes = {
    ColumnA: {
      name: string;
    };
    ColumnB: string[];
  };

  const bodyDataItems = [
    {
      ColumnA: {
        name: "First Line",
      },
      ColumnB: ["Value 1", "Value 2", "Value 3"],
    },
    {
      ColumnA: {
        name: "Second Line",
      },
      ColumnB: ["Value 1", "Value 2"],
    },
    {
      ColumnA: {
        name: "Third Line",
      },
      ColumnB: ["Value 1", "Value 2", "Value 3", "Value 4"],
    },
    {
      ColumnA: {
        name: "Fourth Line",
      },
      ColumnB: ["Value 1"],
    },
    {
      ColumnA: {
        name: "Fifth Line",
      },
      ColumnB: ["Value 1"],
    },
    {
      ColumnA: {
        name: "Sixth Line",
      },
      ColumnB: ["Value 1"],
    },
  ];
  const [isExpanded, setIsExpanded] = useState(true);
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [sortType, setSortType] = useState<"ascending" | "descending" | false>(
    "descending"
  );
  const [pickedUpData, setPickedUpData] = useState<dataPropTypes>();
  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };
  const handleOpenFilterClick = () => {
    setFilterOpen(!isFilterOpen);
  };
  const onChangeHandler = useCallback(() => {
    setIsExpanded(!isExpanded);
  }, [isExpanded]);
  const NavigationContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 24px 24px 0;
    margin-bottom: 50px;
    align-items: center;
  `;
  const StyledDrawer = useMemo(() => {
    return styled(Drawer)`
      ${StyledDrawerContent} {
        overflow: visible;
      }
      ${StyledDrawerSidebar} {
        overflow: visible;
      }
    `;
  }, []);
  const showPickedUpData = (data?: dataPropTypes) => {
    if (!data) {
      return <div>click on any row to show some data</div>;
    }
    return (
      <div style={{ paddingLeft: "24px", paddingTop: "24px" }}>
        <Heading title={data.ColumnA.name} divider={false} />
      </div>
    );
  };
  const createBodyData = (type: "ascending" | "descending" | false) => {
    const data = bodyDataItems;
    const sortedData = data.sort((a, b) => {
      if (type === "ascending") {
        if (a.ColumnA.name < b.ColumnA.name) {
          return -1;
        }
        if (a.ColumnA.name > b.ColumnA.name) {
          return 1;
        }
        return 0;
      }
      if (type === "descending") {
        if (a.ColumnA.name > b.ColumnA.name) {
          return -1;
        }
        if (a.ColumnA.name < b.ColumnA.name) {
          return 1;
        }
        return 0;
      }
      return 0;
    });
    return sortedData.map((dataItem: dataPropTypes) => (
      <FlatTableRow
        key={dataItem.ColumnA.name}
        onClick={() => setPickedUpData(dataItem)}
      >
        <FlatTableCell>
          <div>{dataItem.ColumnA.name}</div>
        </FlatTableCell>
        <FlatTableCell>
          {dataItem.ColumnB.map((role) => (
            <div key={role}>{`${role}, `}</div>
          ))}
        </FlatTableCell>
      </FlatTableRow>
    ));
  };
  const handleSortChange = () => {
    if (sortType === "ascending") {
      return setSortType("descending");
    }
    return setSortType("ascending");
  };
  return (
    <>
      <StyledDrawer
        expandedWidth="50%"
        animationDuration="0.5s"
        expanded={isExpanded}
        onChange={onChangeHandler}
        sidebar={
          <div>
            <NavigationContainer>
              <Search value="" placeholder="Search" searchWidth="40%" />
              <PopoverContainer
                title="Filter"
                renderOpenComponent={({ id }) => {
                  return (
                    <Button
                      buttonType={isFilterOpen ? "primary" : "tertiary"}
                      onClick={handleOpenFilterClick}
                      iconType={isFilterOpen ? "close" : "filter_new"}
                      iconPosition="after"
                      id={id}
                    >
                      Filter
                    </Button>
                  );
                }}
                renderCloseComponent={() => {
                  return <></>;
                }}
                open={isFilterOpen}
              >
                This is example component of Popover Container
              </PopoverContainer>
              <Button onClick={handleDialogOpen} ml="auto" buttonType="primary">
                Add User
              </Button>
            </NavigationContainer>
            <FlatTable colorTheme="transparent-white">
              <FlatTableHead>
                <FlatTableRow>
                  <FlatTableHeader key="user">
                    <Sort sortType={sortType} onClick={handleSortChange}>
                      Column A
                    </Sort>
                  </FlatTableHeader>
                  <FlatTableHeader key="roles">Column B</FlatTableHeader>
                </FlatTableRow>
              </FlatTableHead>
              <FlatTableBody>{createBodyData(sortType)}</FlatTableBody>
            </FlatTable>
          </div>
        }
      >
        {showPickedUpData(pickedUpData)}
      </StyledDrawer>
      <DialogFullScreen
        onCancel={() => setIsDialogOpen(false)}
        open={isDialogOpen}
      >
        Content of DialogFullScreen
      </DialogFullScreen>
    </>
  );
};

export const WithTabControls: ComponentStory<typeof Drawer> = () => {
  const [active, setAcitve] = useState("tab-1");
  const [errors, setErrors] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
  });
  const [warnings, setWarnings] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
  });
  const [infos, setInfos] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
  });
  const vaidationStatus = {
    "tab-1": { error: errors.one, warning: warnings.one, info: infos.one },
    "tab-2": { error: errors.two, warning: warnings.two, info: infos.two },
    "tab-3": {
      error: errors.three,
      warning: warnings.three,
      info: infos.three,
    },
    "tab-4": {
      error: errors.four,
      warning: warnings.four,
      info: infos.four,
    },
  };
  return (
    <div style={{ height: "200px" }}>
      <Drawer
        expandedWidth="30%"
        sidebar={
          <Tabs
            onTabChange={(id) => setAcitve(id)}
            borders="no sides"
            validationStatusOverride={vaidationStatus}
          >
            <Tab
              errorMessage="error"
              warningMessage="warning"
              infoMessage="info"
              title="Tab 1"
              tabId="tab-1"
            />
            <Tab
              errorMessage="error"
              warningMessage="warning"
              infoMessage="info"
              title="Tab 2"
              tabId="tab-2"
            />
            <Tab
              errorMessage="error"
              warningMessage="warning"
              infoMessage="info"
              title="Tab 3"
              tabId="tab-3"
            />
            <Tab
              errorMessage="error"
              warningMessage="warning"
              infoMessage="info"
              title="Tab 4"
              tabId="tab-4"
            />
            <Tab
              errorMessage="error"
              warningMessage="warning"
              infoMessage="info"
              title="Tab 5"
              tabId="tab-5"
            />
            <Tab
              errorMessage="error"
              warningMessage="warning"
              infoMessage="info"
              title="Tab 6"
              tabId="tab-6"
            />
          </Tabs>
        }
      >
        <div>
          <div style={{ display: active === "tab-1" ? "block" : "none" }}>
            <Tabs extendedLine={false}>
              <Tab
                errorMessage="error"
                warningMessage="warning"
                infoMessage="info"
                title="Tab 1"
                tabId="tab-1-child-1"
              >
                Content 1
              </Tab>
              <Tab
                errorMessage="error"
                warningMessage="warning"
                infoMessage="info"
                title="Tab 2"
                tabId="tab-1-child-2"
              >
                Content 2
              </Tab>
              <Tab
                errorMessage="error"
                warningMessage="warning"
                infoMessage="info"
                title="Tab 3"
                tabId="tab-1-child-3"
              >
                Content 3
              </Tab>
              <Tab
                errorMessage="error"
                warningMessage="warning"
                infoMessage="info"
                title="Tab 4"
                tabId="tab-1-child-4"
              >
                Content 4
              </Tab>
            </Tabs>
          </div>
          <div style={{ display: active === "tab-2" ? "block" : "none" }}>
            <Tabs extendedLine={false}>
              <Tab
                errorMessage="error"
                warningMessage="warning"
                infoMessage="info"
                title="Tab 1"
                tabId="tab-2-child-1"
              >
                Content 5
              </Tab>
              <Tab
                errorMessage="error"
                warningMessage="warning"
                infoMessage="info"
                title="Tab 2"
                tabId="tab-2-child-2"
              >
                Content 6
              </Tab>
              <Tab
                errorMessage="error"
                warningMessage="warning"
                infoMessage="info"
                title="Tab 3"
                tabId="tab-2-child-3"
              >
                Content 7
              </Tab>
              <Tab
                errorMessage="error"
                warningMessage="warning"
                infoMessage="info"
                title="Tab 4"
                tabId="tab-2-child-4"
              >
                Content 8
              </Tab>
            </Tabs>
          </div>
          <div style={{ display: active === "tab-3" ? "block" : "none" }}>
            <Tabs extendedLine={false}>
              <Tab
                errorMessage="error"
                warningMessage="warning"
                infoMessage="info"
                title="Tab 1"
                tabId="tab-3-child-1"
              >
                Content 9
              </Tab>
              <Tab
                errorMessage="error"
                warningMessage="warning"
                infoMessage="info"
                title="Tab 2"
                tabId="tab-3-child-2"
              >
                Content 10
              </Tab>
              <Tab
                errorMessage="error"
                warningMessage="warning"
                infoMessage="info"
                title="Tab 3"
                tabId="tab-3-child-3"
              >
                Content 11
              </Tab>
              <Tab
                errorMessage="error"
                warningMessage="warning"
                infoMessage="info"
                title="Tab 4"
                tabId="tab-3-child-4"
              >
                Content 12
              </Tab>
            </Tabs>
          </div>
          <div
            style={{
              display: active === "tab-4" ? "block" : "none",
              padding: "4px",
            }}
          >
            <Checkbox
              label="Add error"
              error={errors.four}
              onChange={() => setErrors({ ...errors, four: !errors.four })}
            />
            <Checkbox
              label="Add warning"
              warning={warnings.four}
              onChange={() =>
                setWarnings({ ...warnings, four: !warnings.four })
              }
            />
            <Checkbox
              label="Add info"
              info={infos.four}
              onChange={() => setInfos({ ...infos, four: !infos.four })}
            />
          </div>
          <div style={{ display: active === "tab-5" ? "block" : "none" }}>
            <Tabs extendedLine={false}>
              <Tab
                errorMessage="error"
                warningMessage="warning"
                infoMessage="info"
                title="Tab 1"
                tabId="tab-5-child-1"
              >
                Content 13
              </Tab>
              <Tab
                errorMessage="error"
                warningMessage="warning"
                infoMessage="info"
                title="Tab 2"
                tabId="tab-5-child-2"
              >
                Content 14
              </Tab>
              <Tab
                errorMessage="error"
                warningMessage="warning"
                infoMessage="info"
                title="Tab 3"
                tabId="tab-5-child-3"
              >
                Content 15
              </Tab>
              <Tab
                errorMessage="error"
                warningMessage="warning"
                infoMessage="info"
                title="Tab 4"
                tabId="tab-5-child-4"
              >
                Content 16
              </Tab>
            </Tabs>
          </div>
          <div style={{ display: active === "tab-6" ? "block" : "none" }}>
            <Tabs extendedLine={false}>
              <Tab
                errorMessage="error"
                warningMessage="warning"
                infoMessage="info"
                title="Tab 1"
                tabId="tab-6-child-1"
              >
                Content 17
              </Tab>
              <Tab
                errorMessage="error"
                warningMessage="warning"
                infoMessage="info"
                title="Tab 2"
                tabId="tab-6-child-2"
              >
                Content 18
              </Tab>
              <Tab
                errorMessage="error"
                warningMessage="warning"
                infoMessage="info"
                title="Tab 3"
                tabId="tab-6-child-3"
              >
                Content 19
              </Tab>
              <Tab
                errorMessage="error"
                warningMessage="warning"
                infoMessage="info"
                title="Tab 4"
                tabId="tab-6-child-4"
              >
                Content 20
              </Tab>
            </Tabs>
          </div>
        </div>
      </Drawer>
    </div>
  );
};
