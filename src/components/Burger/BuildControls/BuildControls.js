import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
    {controls.map(item => (
      <BuildControl
        label={item.label}
        key={item.label}
        added={() => props.ingredientAdded(item.type)}
        removed={() => props.ingredientRemoved(item.type)}
        disabled={props.disabled[item.type]}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}
    >{props.isAuth ? 'order now' : 'sign up to order'}</button>
  </div>
);

export default buildControls;
