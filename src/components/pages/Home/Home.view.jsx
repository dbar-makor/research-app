import React from 'react';

import { Button } from '@mui/material';
import PublicationsIcon from '@mui/icons-material/FeedRounded';
import UsersIcon from '@mui/icons-material/PeopleAltRounded';
import InvocesIcon from '@mui/icons-material/ReceiptRounded';
import PaymentsIcon from '@mui/icons-material/AccountBalanceRounded';
import TableRowsIcon from '@mui/icons-material/TableRows';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import AddIcon from '@mui/icons-material/Add';
import FilterListIcon from '@mui/icons-material/FilterList';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import { ReactSVG } from 'react-svg';
import makorSvg from '../../../assets/makor.svg';

import classes from './Home.module.scss';

const HomeView = (props) => {
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
				<ViewComfyIcon className={classes['upperNav__icon']} />
				<TableRowsIcon className={classes['upperNav__icon']} />
				<Button className={classes['upperNav__new']} variant="outlined" startIcon={<AddIcon />}>
					NEW
				</Button>
				<Button className={classes['upperNav__hideFilters']} variant="outlined" startIcon={<FilterListIcon />}>
					HIDE FILTERS
				</Button>
			</section>
		</main>
	);
};

HomeView.displayName = 'HomeView';
HomeView.defaultProps = {};

export default React.memo(HomeView);
