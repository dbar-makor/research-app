import React from 'react';

import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import PublicationsIcon from '@mui/icons-material/FeedRounded';
import UsersIcon from '@mui/icons-material/PeopleAltRounded';
import InvocesIcon from '@mui/icons-material/ReceiptRounded';
import PaymentsIcon from '@mui/icons-material/AccountBalanceRounded';
import TableRowsIcon from '@mui/icons-material/TableRows';
import GridIcon from '@mui/icons-material/Apps';
import AddIcon from '@mui/icons-material/Add';
import FilterListIcon from '@mui/icons-material/FilterList';
import FormIcon from '@mui/icons-material/Description';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import PDFIcon from '@mui/icons-material/PictureAsPdf';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import { ReactSVG } from 'react-svg';
import makorSvg from '../../../assets/makor.svg';

import classes from './Home.module.scss';

const HomeView = (props) => {
	const CustomWidthTooltip = styled(({ className, ...props }) => <Tooltip {...props} classes={{ popper: className }} />)({
		[`& .${tooltipClasses.tooltip}`]: {
			maxWidth: 500,
		},
	});

	return (
		<main className={classes['outerContainer']}>
			<section className={classes['sideNav']}>
				<div className={classes['header']}>
					<ReactSVG className={classes['header__logo']} src={makorSvg} />
					<div className={classes['header__wrapper']}>
						<div className={classes['header__wrapper--title']}>Makor Group</div>
						<div className={classes['header__wrapper--subtitle']}>- Research -</div>
					</div>
				</div>
				<div className={classes['menuWrapper']}>
					<div className={classes['menuWrapper__menu']}>
						<PublicationsIcon className={classes['menuWrapper__menu--icon']} />
						<div className={classes['menuWrapper__menu--text']}>Publications</div>
					</div>
					<div className={classes['menuWrapper__menu']}>
						<UsersIcon className={classes['menuWrapper__menu--icon']} />
						<div className={classes['menuWrapper__menu--text']}>Users</div>
					</div>
					<div className={classes['menuWrapper__menu']}>
						<InvocesIcon className={classes['menuWrapper__menu--icon']} />
						<div className={classes['menuWrapper__menu--text']}>Invoices</div>
					</div>
					<div className={classes['menuWrapper__menu']}>
						<PaymentsIcon className={classes['menuWrapper__menu--icon']} />
						<div className={classes['menuWrapper__menu--text']}>Payments</div>
					</div>
				</div>
			</section>
			<div>
				<section className={classes['upperNav']}>
					<Button style={{ fontWeight: 700, textTransform: 'initial' }} disabled className={classes['upperNav__button']}>
						Publications
					</Button>
					<Button className={classes['upperNav__button']}>ALL</Button>
					<Button className={classes['upperNav__button']}>DRAFTS</Button>
					<Button className={classes['upperNav__button']}>PUBLISHED</Button>
					<Button disabled className={classes['upperNav__sortBy']}>
						SORT BY
					</Button>
					<Select
						inputProps={{ 'aria-label': 'Without label' }}
						className={classes['upperNav__sortBySelect']}
						onChange={props.sortBySelectChangeHandler}
						value={props.sortBySelect}
						displayEmpty
					>
						<MenuItem value="">
							<em>DATE</em>
						</MenuItem>
						<MenuItem value={10}>DATE</MenuItem>
						<MenuItem value={20}>DATE</MenuItem>
						<MenuItem value={30}>DATE</MenuItem>
					</Select>
					<GridIcon className={classes['upperNav__icon']} />
					<TableRowsIcon className={classes['upperNav__icon']} />
					<CustomWidthTooltip
						title={
							<BottomNavigation sx={{ m: 1 }} style={{ backgroundColor: '#6d6d6d' }} showLabels>
								<BottomNavigationAction className={classes['upperNav__selectInsideNew']} label="Form" icon={<FormIcon />} />
								<BottomNavigationAction className={classes['upperNav__selectInsideNew']} label="PDF" icon={<PDFIcon />} />
								<BottomNavigationAction
									className={classes['upperNav__selectInsideNew']}
									label="WYSIWY"
									icon={<WysiwygIcon />}
								/>
							</BottomNavigation>
						}
						placement="bottom"
						arrow
					>
						<Button className={classes['upperNav__new']} variant="outlined" startIcon={<AddIcon />}>
							NEW
						</Button>
					</CustomWidthTooltip>
					<Button className={classes['upperNav__hideFilters']} variant="outlined" startIcon={<FilterListIcon />}>
						HIDE FILTERS
					</Button>
				</section>
				<section className={classes['contentContainer']}>
					<div className={classes['content']}>
						<div className={classes['content__header']}>THIS MONTH</div>
						<div className={classes['content__rowWrapper']}>
							<div className={classes['content__rowWrapper--row']}>
								<PDFIcon style={{ marginRight: 15 }} />
								<div style={{ marginRight: 100 }}>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry
								</div>
								<div style={{ marginRight: 100 }}>11 FEB 2022</div>
								<div style={{ marginRight: 100 }}>Laura Anreder</div>
								<div>Risk arbitrage</div>
							</div>
							<div className={classes['content__rowWrapper--row']}>
								<FormIcon style={{ marginRight: 15 }} />
								<div style={{ marginRight: 100 }}>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry
								</div>
								<div style={{ marginRight: 100 }}>11 FEB 2022</div>
								<div style={{ marginRight: 100 }}>Laura Anreder</div>
								<div>Risk arbitrage</div>
							</div>
							<div className={classes['content__rowWrapper--row']}>
								<WysiwygIcon style={{ marginRight: 15 }} />
								<div style={{ marginRight: 100 }}>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry
								</div>
								<div style={{ marginRight: 100 }}>11 FEB 2022</div>
								<div style={{ marginRight: 100 }}>Laura Anreder</div>
								<div>Risk arbitrage</div>
							</div>
							<div className={classes['content__rowWrapper--row']}>
								<WysiwygIcon style={{ marginRight: 15 }} />
								<div style={{ marginRight: 100 }}>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry
								</div>
								<div style={{ marginRight: 100 }}>11 FEB 2022</div>
								<div style={{ marginRight: 100 }}>Laura Anreder</div>
								<div>Risk arbitrage</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
};

HomeView.displayName = 'HomeView';
HomeView.defaultProps = {};

export default React.memo(HomeView);
