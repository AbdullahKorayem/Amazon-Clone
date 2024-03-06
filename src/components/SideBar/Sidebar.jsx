import React from 'react';
import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
  Input,
  Drawer,
  Card,
} from '@material-tailwind/react';
import {
  ChevronRightIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

export default function SidebarWithBurgerMenu() {
  const [open, setOpen] = React.useState(0);
  const [openM, setOpenM] = React.useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [ismDrawerOpen, setIsmDrawerOpen] = React.useState(false);

  const handleOpen = value => {
    setOpen(open === value ? 0 : value);
  };
  const handleOpenM = value => {
    setOpenM(openM === value ? 0 : value);
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  const closemDrawer = () => setIsmDrawerOpen(false);
  const openmDrawer = () => setIsmDrawerOpen(true);

  return (
    <>
      <IconButton variant="text" size="lg" onClick={openDrawer}>
        {isDrawerOpen ? (
          <XMarkIcon className="h-8 w-8  stroke-2" />
        ) : (
          <Bars3Icon className="h-8 w-8 stroke-2" />
        )}
      </IconButton>
      <div class="hover:scrollbar-thumb-sky-500 active:scrollbar-thumb-sky-400 h-32 scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300 overflow-y-scroll">
        <div class="h-64 bg-slate-400">
          <Drawer open={isDrawerOpen} onClose={closeDrawer}>
            <div className="mb-6 flex items-center gap-4 p-2 bg-amazonclone-light_blue">
              {/* <UserCircleIcon className="h-5 w-5" /> */}
              <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-amazonclone-light_blue">
                <svg
                  class="absolute w-12 h-12 text-gray-800 -left-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <Typography variant="h5" color="white">
                Hello, sign in
              </Typography>
            </div>
            <Card
              color="transparent"
              shadow={false}
              className="h-[calc(100vh-2rem)] w-full"
            >
              <div className="mb-2 mx-3">
                <List>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    Digital Content & Devices
                  </Typography>
                  <ListItem>
                    <ListItemPrefix>
                      <Typography variant="subtitle2" color="blue-gray">
                        Amazon Music
                      </Typography>
                    </ListItemPrefix>
                    <ListItemSuffix className="grid justify-items-end">
                      <ChevronRightIcon
                        strokeWidth={3}
                        className="h-3 w-5 justify-self-end "
                      />
                    </ListItemSuffix>
                  </ListItem>
                  <ListItem onClick={openmDrawer}>
                    <ListItemPrefix>
                      <Typography variant="subtitle2" color="blue-gray">
                        Amazon Kindle E-Reader & Books
                      </Typography>
                    </ListItemPrefix>
                    <ListItemSuffix>
                      <ChevronRightIcon
                        strokeWidth={3}
                        className="h-3 w-5 justify-self-end "
                      />
                    </ListItemSuffix>
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <Typography variant="subtitle2" color="blue-gray">
                        Amazon Appstore
                      </Typography>{' '}
                    </ListItemPrefix>
                    <ListItemSuffix>
                      <ChevronRightIcon
                        strokeWidth={3}
                        className="h-3 w-5 justify-self-end "
                      />
                    </ListItemSuffix>
                  </ListItem>
                </List>
              </div>
              <hr className="my-2 border-blue-gray-50" />
              <div className="mb-2 mx-3">
                <List>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    Shop by Department
                  </Typography>
                  <ListItem>
                    <ListItemPrefix>
                      <Typography variant="subtitle2" color="blue-gray">
                        Amazon Music
                      </Typography>
                    </ListItemPrefix>
                    <ListItemSuffix className="grid justify-items-end">
                      <ChevronRightIcon
                        strokeWidth={3}
                        className="h-3 w-5 justify-self-end "
                      />
                    </ListItemSuffix>
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <Typography variant="subtitle2" color="blue-gray">
                        Amazon Music
                      </Typography>
                    </ListItemPrefix>
                    <ListItemSuffix className="grid justify-items-end">
                      <ChevronRightIcon
                        strokeWidth={3}
                        className="h-3 w-5 justify-self-end "
                      />
                    </ListItemSuffix>
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <Typography variant="subtitle2" color="blue-gray">
                        Amazon Music
                      </Typography>
                    </ListItemPrefix>
                    <ListItemSuffix className="grid justify-items-end">
                      <ChevronRightIcon
                        strokeWidth={3}
                        className="h-3 w-5 justify-self-end "
                      />
                    </ListItemSuffix>
                  </ListItem>
                  <Accordion
                    open={open === 1}
                    icon={
                      <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`mx-auto h-4 w-4 transition-transform ${
                          open === 1 ? 'rotate-180' : ''
                        }`}
                      />
                    }
                  >
                    <ListItem className="p-0" selected={open === 1}>
                      <AccordionHeader
                        onClick={() => handleOpen(1)}
                        className="border-b-0 p-3"
                      >
                        <Typography
                          color="blue-gray"
                          className="mr-auto font-normal"
                        >
                          See all
                        </Typography>
                      </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                      <List className="p-0">
                        <ListItem>
                          <ListItemPrefix>
                            <ChevronRightIcon
                              strokeWidth={3}
                              className="h-3 w-5"
                            />
                          </ListItemPrefix>
                          Reporting
                        </ListItem>
                        <ListItem>
                          <ListItemPrefix>
                            <ChevronRightIcon
                              strokeWidth={3}
                              className="h-3 w-5"
                            />
                          </ListItemPrefix>
                          Projects
                        </ListItem>
                      </List>
                    </AccordionBody>
                  </Accordion>
                </List>
              </div>
              <hr className="my-2 border-blue-gray-50" />
              <div className="mb-2 mx-3">
                <List>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    Programs & Features
                  </Typography>
                  <ListItem>
                    <ListItemPrefix>
                      <Typography variant="subtitle2" color="blue-gray">
                        Amazon Music
                      </Typography>{' '}
                    </ListItemPrefix>
                    <ListItemSuffix>
                      <ChevronRightIcon
                        strokeWidth={3}
                        className="h-3 w-5 justify-self-end "
                      />
                    </ListItemSuffix>
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <Typography variant="subtitle2" color="blue-gray">
                        Amazon Music
                      </Typography>{' '}
                    </ListItemPrefix>
                    <ListItemSuffix>
                      <ChevronRightIcon
                        strokeWidth={3}
                        className="h-3 w-5 justify-self-end "
                      />
                    </ListItemSuffix>
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <Typography variant="subtitle2" color="blue-gray">
                        Amazon Music
                      </Typography>{' '}
                    </ListItemPrefix>
                    <ListItemSuffix>
                      <ChevronRightIcon
                        strokeWidth={3}
                        className="h-3 w-5 justify-self-end "
                      />
                    </ListItemSuffix>
                  </ListItem>

                  <Accordion
                    open={open === 2}
                    icon={
                      <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`mx-auto h-4 w-4 transition-transform ${
                          open === 2 ? 'rotate-180' : ''
                        }`}
                      />
                    }
                  >
                    <ListItem className="p-0" selected={open === 2}>
                      <AccordionHeader
                        onClick={() => handleOpen(2)}
                        className="border-b-0 p-3"
                      >
                        <Typography
                          color="blue-gray"
                          className="mr-auto font-normal"
                        >
                          See all
                        </Typography>
                      </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                      <List className="p-0">
                        <ListItem>
                          <ListItemPrefix>
                            <ChevronRightIcon
                              strokeWidth={3}
                              className="h-3 w-5"
                            />
                          </ListItemPrefix>
                          Orders
                        </ListItem>
                        <ListItem>
                          <ListItemPrefix>
                            <ChevronRightIcon
                              strokeWidth={3}
                              className="h-3 w-5"
                            />
                          </ListItemPrefix>
                          Products
                        </ListItem>
                      </List>
                    </AccordionBody>
                  </Accordion>
                </List>
              </div>
              <hr className="my-2 border-blue-gray-50" />
              <div className="mb-2 mx-3">
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  Help & Settings
                </Typography>
                <ListItem>Your Account</ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                      />
                    </svg>
                  </ListItemPrefix>
                  English
                </ListItem>
                <ListItem>
                  <ListItemPrefix>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M3.5 2.75a.75.75 0 0 0-1.5 0v14.5a.75.75 0 0 0 1.5 0v-4.392l1.657-.348a6.449 6.449 0 0 1 4.271.572 7.948 7.948 0 0 0 5.965.524l2.078-.64A.75.75 0 0 0 18 12.25v-8.5a.75.75 0 0 0-.904-.734l-2.38.501a7.25 7.25 0 0 1-4.186-.363l-.502-.2a8.75 8.75 0 0 0-5.053-.439l-1.475.31V2.75Z" />
                    </svg>
                  </ListItemPrefix>
                  United States
                </ListItem>
                <ListItem>Customer Service</ListItem>
                <ListItem>Sign in</ListItem>
              </div>
            </Card>
          </Drawer>
        </div>
      </div>
    </>
  );
}
