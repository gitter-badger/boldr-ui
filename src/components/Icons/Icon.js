/* eslint-disable max-len, react/no-unescaped-entities */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import BaseIcon from './BaseIcon';

const iconList = [
  'menu',
  'grid-view',
  'list-view',
  'visible',
  'hidden',
  'edit',
  'delete',
  'calendar',
  'new-post',
  'facebook',
  'twitter',
  'google',
  'linkedin',
  'github',
  'chevron-right',
  'account-card',
  'tags',
  'folder-upload',
  'routes',
  'shovel',
  'posts',
  'settings',
  'close',
  'search',
  'more',
  'more_vert',
  'archive',
  'account',
  'logout',
  'dashboard',
];

export default class Icon extends PureComponent {
  static propTypes = {
    color: PropTypes.string,
    className: PropTypes.string,
    height: PropTypes.number,
    kind: PropTypes.oneOf(iconList).isRequired,
    preview: PropTypes.bool,
    onClick: PropTypes.func,
    size: PropTypes.number,
    width: PropTypes.number,
  };

  static defaultProps = {
    size: 24,
    color: '#fff',
  };
  renderIcon(kind) {
    const { color, size, height, width, onClick } = this.props;

    switch (kind) {
      default:
        return null;
      case 'menu':
        return (
          <BaseIcon viewBox="0 0 48 48" {...this.props}>
            <path d="M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z" />
          </BaseIcon>
        );
      case 'grid-view':
        return (
          <BaseIcon viewBox="0 0 24 24" {...this.props}>
            {/* eslint-disable */}
            <path d="M3,11H11V3H3M3,21H11V13H3M13,21H21V13H13M13,3V11H21V3" />
          </BaseIcon>
        );
      case 'list-view':
        return (
          <BaseIcon viewBox="0 0 24 24" {...this.props}>

            {/* eslint-disable */}
            <path d="M9,5V9H21V5M9,19H21V15H9M9,14H21V10H9M4,9H8V5H4M4,19H8V15H4M4,14H8V10H4V14Z" />

          </BaseIcon>
        );
      case 'visible':
        return (
          <BaseIcon viewBox="0 0 24 24" {...this.props}>

            {/* eslint-disable */}
            <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" />

          </BaseIcon>
        );
      case 'hidden':
        return (
          <BaseIcon viewBox="0 0 24 24" {...this.props}>
            {/* eslint-disable */}
            <path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z" />
          </BaseIcon>
        );
      case 'edit':
        return (
          <BaseIcon viewBox="0 0 24 24" {...this.props}>
            {/* eslint-disable */}
            <path d="M19,19V5H5V19H19M19,3A2,2 0 0,1 21,5V19C21,20.11 20.1,21 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M16.7,9.35L15.7,10.35L13.65,8.3L14.65,7.3C14.86,7.08 15.21,7.08 15.42,7.3L16.7,8.58C16.92,8.79 16.92,9.14 16.7,9.35M7,14.94L13.06,8.88L15.12,10.94L9.06,17H7V14.94Z" />
          </BaseIcon>
        );
      case 'delete':
        return (
          <BaseIcon viewBox="0 0 24 24" {...this.props}>
            {/* eslint-disable */}
            <path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8.46,11.88L9.87,10.47L12,12.59L14.12,10.47L15.53,11.88L13.41,14L15.53,16.12L14.12,17.53L12,15.41L9.88,17.53L8.47,16.12L10.59,14L8.46,11.88M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" />
          </BaseIcon>
        );
      case 'calendar':
        return (
          <BaseIcon viewBox="0 0 24 24" {...this.props}>
            {/* eslint-disable */}
            <path d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1" />
          </BaseIcon>
        );
      case 'new-post':
        return (
          <BaseIcon viewBox="0 0 24 24" {...this.props}>
            {/* eslint-disable */}
            <path d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z" />
          </BaseIcon>
        );
      case 'facebook':
        return (
          <BaseIcon viewBox="0 0 24 24" {...this.props}>
            {/* eslint-disable */}
            <path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z" />
          </BaseIcon>
        );
      case 'twitter':
        return (
          <BaseIcon viewBox="0 0 24 24" {...this.props}>
            {/* eslint-disable */}
            <path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M17.71,9.33C18.19,8.93 18.75,8.45 19,7.92C18.59,8.13 18.1,8.26 17.56,8.33C18.06,7.97 18.47,7.5 18.68,6.86C18.16,7.14 17.63,7.38 16.97,7.5C15.42,5.63 11.71,7.15 12.37,9.95C9.76,9.79 8.17,8.61 6.85,7.16C6.1,8.38 6.75,10.23 7.64,10.74C7.18,10.71 6.83,10.57 6.5,10.41C6.54,11.95 7.39,12.69 8.58,13.09C8.22,13.16 7.82,13.18 7.44,13.12C7.81,14.19 8.58,14.86 9.9,15C9,15.76 7.34,16.29 6,16.08C7.15,16.81 8.46,17.39 10.28,17.31C14.69,17.11 17.64,13.95 17.71,9.33Z" />
          </BaseIcon>
        );
      case 'google':
        return (
          <BaseIcon viewBox="0 0 24 24" {...this.props}>
            {/* eslint-disable */}
            <path d="M20,2A2,2 0 0,1 22,4V20A2,2 0 0,1 20,22H4A2,2 0 0,1 2,20V4C2,2.89 2.9,2 4,2H20M20,12H18V10H17V12H15V13H17V15H18V13H20V12M9,11.29V13H11.86C11.71,13.71 11,15.14 9,15.14C7.29,15.14 5.93,13.71 5.93,12C5.93,10.29 7.29,8.86 9,8.86C10,8.86 10.64,9.29 11,9.64L12.36,8.36C11.5,7.5 10.36,7 9,7C6.21,7 4,9.21 4,12C4,14.79 6.21,17 9,17C11.86,17 13.79,15 13.79,12.14C13.79,11.79 13.79,11.57 13.71,11.29H9Z" />
          </BaseIcon>
        );
      case 'linkedin':
        return (
          <BaseIcon viewBox="0 0 24 24" {...this.props}>

            {/* eslint-disable */}
            <path d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z" />

          </BaseIcon>
        );
      case 'github':
        return (
          <BaseIcon viewBox="0 0 24 24" {...this.props}>

            {/* eslint-disable */}
            <path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H14.56C14.24,20.93 14.23,20.32 14.23,20.11L14.24,17.64C14.24,16.8 13.95,16.25 13.63,15.97C15.64,15.75 17.74,15 17.74,11.53C17.74,10.55 17.39,9.74 16.82,9.11C16.91,8.89 17.22,7.97 16.73,6.73C16.73,6.73 15.97,6.5 14.25,7.66C13.53,7.46 12.77,7.36 12,7.35C11.24,7.36 10.46,7.46 9.75,7.66C8.03,6.5 7.27,6.73 7.27,6.73C6.78,7.97 7.09,8.89 7.18,9.11C6.61,9.74 6.26,10.55 6.26,11.53C6.26,15 8.36,15.75 10.36,16C10.1,16.2 9.87,16.6 9.79,17.18C9.27,17.41 7.97,17.81 7.17,16.43C7.17,16.43 6.69,15.57 5.79,15.5C5.79,15.5 4.91,15.5 5.73,16.05C5.73,16.05 6.32,16.33 6.73,17.37C6.73,17.37 7.25,19.12 9.76,18.58L9.77,20.11C9.77,20.32 9.75,20.93 9.43,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z" />

          </BaseIcon>
        );
      case 'folder-upload':
        return (
          <BaseIcon viewBox="0 0 24 24" {...this.props}>

            {/* eslint-disable */}
            <path d="M20,6A2,2 0 0,1 22,8V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4H10L12,6H20M10.75,13H14V17H16V13H19.25L15,8.75" />

          </BaseIcon>
        );
      case 'account-card':
        return (
          <BaseIcon viewBox="0 0 24 24" {...this.props}>

            {/* eslint-disable */}
            <path
              fill={color}
              d="M2,3H22C23.05,3 24,3.95 24,5V19C24,20.05 23.05,21 22,21H2C0.95,21 0,20.05 0,19V5C0,3.95 0.95,3 2,3M14,6V7H22V6H14M14,8V9H21.5L22,9V8H14M14,10V11H21V10H14M8,13.91C6,13.91 2,15 2,17V18H14V17C14,15 10,13.91 8,13.91M8,6A3,3 0 0,0 5,9A3,3 0 0,0 8,12A3,3 0 0,0 11,9A3,3 0 0,0 8,6Z"
            />

          </BaseIcon>
        );
      case 'tags':
        return (
          <BaseIcon viewBox="0 0 48 48" {...this.props}>

            {/* eslint-disable */}
            <path d="M5.5,9A1.5,1.5 0 0,0 7,7.5A1.5,1.5 0 0,0 5.5,6A1.5,1.5 0 0,0 4,7.5A1.5,1.5 0 0,0 5.5,9M17.41,11.58C17.77,11.94 18,12.44 18,13C18,13.55 17.78,14.05 17.41,14.41L12.41,19.41C12.05,19.77 11.55,20 11,20C10.45,20 9.95,19.78 9.58,19.41L2.59,12.42C2.22,12.05 2,11.55 2,11V6C2,4.89 2.89,4 4,4H9C9.55,4 10.05,4.22 10.41,4.58L17.41,11.58M13.54,5.71L14.54,4.71L21.41,11.58C21.78,11.94 22,12.45 22,13C22,13.55 21.78,14.05 21.42,14.41L16.04,19.79L15.04,18.79L20.75,13L13.54,5.71Z" />

          </BaseIcon>
        );
      case 'shovel':
        return (
          <BaseIcon viewBox="0 0 48 48" {...this.props}>

            {/* eslint-disable */}
            <path d="M15.1,1.81L12.27,4.64C11.5,5.42 11.5,6.69 12.27,7.47L13.68,8.88L9.13,13.43L6.31,10.6L4.89,12C-0.06,17 3.5,20.5 3.5,20.5C3.5,20.5 7,24 12,19.09L13.41,17.68L10.61,14.88L15.15,10.34L16.54,11.73C17.32,12.5 18.59,12.5 19.37,11.73L22.2,8.9L15.1,1.81M17.93,10.28L16.55,8.9L15.11,7.46L13.71,6.06L15.12,4.65L19.35,8.88L17.93,10.28Z" />

          </BaseIcon>
        );
      case 'routes':
        return (
          <BaseIcon viewBox="0 0 48 48" {...this.props}>

            {/* eslint-disable */}
            <path d="M11,10H5L3,8L5,6H11V3L12,2L13,3V4H19L21,6L19,8H13V10H19L21,12L19,14H13V20A2,2 0 0,1 15,22H9A2,2 0 0,1 11,20V10Z" />

          </BaseIcon>
        );
      case 'posts':
        return (
          <BaseIcon viewBox="0 0 48 48" {...this.props}>

            {/* eslint-disable */}
            <path d="M16,9H21.5L16,3.5V9M7,2H17L23,8V18A2,2 0 0,1 21,20H7C5.89,20 5,19.1 5,18V4A2,2 0 0,1 7,2M3,6V22H21V24H3A2,2 0 0,1 1,22V6H3Z" />

          </BaseIcon>
        );
      case 'settings':
        return (
          <BaseIcon viewBox="0 0 48 48" {...this.props}>

            {/* eslint-disable */}
            <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />

          </BaseIcon>
        );
      case 'chevron-right':
        return (
          <BaseIcon viewBox="0 0 48 48" {...this.props}>

            {/* eslint-disable */}
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />

          </BaseIcon>
        );
      case 'search':
        return (
          <BaseIcon viewBox="-137 138 25 25" {...this.props}>

            {/* eslint-disable */}
            <path d="M-114.6,162.6l-7.5-7.5c-0.6-0.6-0.6-1.6,0-2.1l0,0c0.6-0.6,1.6-0.6,2.1,0l7.5,7.5c0.6,0.6,0.6,1.6,0,2.1l0,0
                                                    C-113,163.1-114,163.1-114.6,162.6z" />
            <path d="M-134.1,140.9c-3.9,3.9-3.9,10.2,0,14.1s10.2,3.9,14.1,0s3.9-10.2,0-14.1S-130.2,137-134.1,140.9z M-122.1,153
                                                    c-2.7,2.7-7.1,2.7-9.8,0s-2.7-7.1,0-9.8s7.1-2.7,9.8,0C-119.4,145.9-119.4,150.2-122.1,153z" />

          </BaseIcon>
        );
      case 'close':
        return (
          <BaseIcon viewBox="-137 138 25 25" {...this.props}>
            <g transform="translate(0,-952.36218)">
              {/* eslint-disable */}
              <path d="M-131.3,1094.4c-0.4,0-0.9,0.1-1.2,0.5c-0.7,0.7-0.7,1.7,0,2.4l5.6,5.6l-5.6,5.6c-0.7,0.7-0.7,1.7,0,2.4
                              c0.7,0.7,1.7,0.7,2.4,0l5.6-5.6l5.6,5.6c0.7,0.7,1.7,0.7,2.4,0c0.7-0.7,0.7-1.7,0-2.4l-5.6-5.6l5.6-5.6c0.7-0.7,0.7-1.7,0-2.4
                              c-0.7-0.7-1.7-0.7-2.4,0l-5.6,5.6l-5.6-5.6C-130.5,1094.5-130.9,1094.4-131.3,1094.4L-131.3,1094.4z" />
            </g>
          </BaseIcon>
        );
      case 'more':
        return (
          <BaseIcon viewBox="0 0 24 24" {...this.props}>

            {/* eslint-disable */}
            <path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.97.89 1.66.89H22c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />

          </BaseIcon>
        );
      case 'more_vert':
        return (
          <BaseIcon viewBox="0 0 24 24" {...this.props}>

            {/* eslint-disable */}
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />

          </BaseIcon>
        );
      case 'archive':
        return (
          <BaseIcon viewBox="0 0 24 24" {...this.props}>

            {/* eslint-disable */}
            <path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z" />

          </BaseIcon>
        );
      case 'account':
        return (
          <BaseIcon viewBox="0 0 24 24" {...this.props}>

            {/* eslint-disable */}
            <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />

          </BaseIcon>
        );
      case 'logout':
        return (
          <BaseIcon viewBox="0 0 24 24" {...this.props}>

            {/* eslint-disable */}
            <path d="M14.08,15.59L16.67,13H7V11H16.67L14.08,8.41L15.5,7L20.5,12L15.5,17L14.08,15.59M19,3A2,2 0 0,1 21,5V9.67L19,7.67V5H5V19H19V16.33L21,14.33V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H19Z" />

          </BaseIcon>
        );
      case 'dashboard':
        return (
          <BaseIcon viewBox="0 0 24 24" {...this.props}>

            {/* eslint-disable */}
            <path d="M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z" />

          </BaseIcon>
        );
    }
  }
  render() {
    const { className, kind, onClick } = this.props;
    return this.renderIcon(kind);
  }
}
