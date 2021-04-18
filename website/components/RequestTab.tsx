import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Grid,
  makeStyles,
} from '@material-ui/core';
import clone from 'clone-deep';
import Icon from '@material-ui/core/Icon';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SelectedButton from '../Common/SelectedButton';
import { useGlobalContext } from '../GlobalProvider';
import LoginProgressStepper from '../Common/LoginProgressStepper';

const useStyles = makeStyles({
  box: {
    backgroundColor: '#EFEFEF',
    minHeight: '100vh',
    padding: '60px',
  },
  contentBox: {
    backgroundColor: 'white',
    border: '1px dashed #A19F9D',
    maxWidth: '800px',
    height: '1200px',
    textAlign: 'center',
    padding: '40px',
  },
  block: {
    display: 'block',
  },
});

export function RequestSelected() {
  const { state, setState, hierarchyData: data } = useGlobalContext();

  const classes = useStyles();
  return (
    <div>
      <LoginProgressStepper />
      <div className={classes.box}>
        <p
          style={{
            marginTop: '0',
            fontSize: '20px',
            lineHeight: '26px',
            width: '100%',
          }}
        >
          Selected Categories
        </p>
        {state.map((lvl1, lvl1Index) => {
          const { id, label, value, categories } = lvl1;
          return (
            <div>
              <Accordion key={id} style={{ marginBottom: '10px' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Box>
                    <p style={{ fontSize: '20px' }}>{label}</p>
                    <Divider style={{ minWidth: '200px' }} />
                  </Box>
                </AccordionSummary>
                <AccordionDetails className={classes.block}>
                  {categories?.map((lvl2, lvl2index) => {
                    const { label, value, subcategories } = lvl2;
                    return (
                      <Accordion
                        key={lvl2index}
                        style={{ marginLeft: '30px', marginBottom: '20px' }}
                      >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                          <Box>
                            <p>{label}</p>
                          </Box>
                        </AccordionSummary>
                        <AccordionDetails className={classes.block}>
                          <Grid container spacing={1}>
                            {subcategories?.map((lvl3, lvl3index) => {
                              const { label, value } = lvl3;
                              return (
                                <div>
                                  <Grid item spacing={2} key={lvl3index}>
                                    <SelectedButton
                                      onClick={() => {
                                        let newState = clone(state);

                                        const idx1 = state.findIndex(
                                          (i) => i.value === lvl1.value
                                        );

                                        const idx2 = state[
                                          idx1
                                        ]?.categories.findIndex(
                                          (i) => i.value === lvl2.value
                                        );

                                        const newSubcategories = newState[
                                          idx1
                                        ].categories[idx2].subcategories.filter(
                                          (i) => i.value !== value
                                        );

                                        newState[idx1].categories[
                                          idx2
                                        ].subcategories = newSubcategories;

                                        if (newSubcategories.length === 0) {
                                          const newCategories = newState[
                                            idx1
                                          ].categories.filter(
                                            (i) => i.value !== lvl2.value
                                          );

                                          newState[
                                            idx1
                                          ].categories = newCategories;

                                          if (newCategories.length === 0) {
                                            newState = newState.filter(
                                              (i) => i.value !== lvl1.value
                                            );
                                          }
                                        }

                                        setState(newState);
                                      }}
                                      className={classes.paper}
                                      endIcon={<Icon>cancel</Icon>}
                                      product={value}
                                      style={{
                                        // maxWidth: '400px',
                                        borderRadius: '1000px',
                                        height: '40px',
                                        textTransform: 'capitalize',
                                        margin: '10px',
                                      }}
                                    />
                                  </Grid>
                                </div>
                              );
                            })}
                          </Grid>
                        </AccordionDetails>
                      </Accordion>
                    );
                    // });
                  })}
                </AccordionDetails>
              </Accordion>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function DefaultRequestTab({ ...rest }) {
  const classes = useStyles();
  return (
    <Box {...rest}>
      <LoginProgressStepper />
      <Box className={classes.box}>
        {/* <div>
          <p
            style={{
              marginTop: '0',
              fontSize: '20px',
              lineHeight: '26px',
              width: '100%',
            }}
          >
            Insight Request
          </p>
        </div> */}
        <Box className={classes.contentBox}>
          <p style={{ lineHeight: '30px', fontSize: '24px' }}>
            Take a look at the column on the right. Your new world lives there.
          </p>
          <p style={{ lineHeight: '30px', marginTop: '60px' }}>
            You’ll find a full list of our category, subcategory, and product
            insights.{' '}
            <b>
              Search through the list, and select the ones you’d like access to.
            </b>{' '}
          </p>
          <p style={{ lineHeight: '30px' }}>
            We’ll send your Insight request over to your admin for approval,
            then get you up and running on Centricity.
          </p>
        </Box>
      </Box>
    </Box>
  );
}

function RequestTab() {
  const { state } = useGlobalContext();

  return (
    <Box>
      <Box>
        {state.length > 0 ? (
          <RequestSelected style={{ backgroundColor: 'white' }} />
        ) : (
          <DefaultRequestTab />
        )}
      </Box>
    </Box>
  );
}
export default RequestTab;
