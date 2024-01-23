import type { Schema, Attribute } from '@strapi/strapi';

export interface CompanyFeature extends Schema.Component {
  collectionName: 'components_company_features';
  info: {
    displayName: 'Feature';
  };
  attributes: {
    featureTitle: Attribute.String;
    featureCopy: Attribute.RichText;
    featureImages: Attribute.Media;
  };
}

export interface CompanyPlan extends Schema.Component {
  collectionName: 'components_company_plans';
  info: {
    displayName: 'Plan';
    icon: 'money-check-alt';
    description: '';
  };
  attributes: {
    planName: Attribute.String;
    planDescription: Attribute.String;
    planPrice: Attribute.String;
    planFreeTrial: Attribute.Boolean;
    paymentPeriod: Attribute.Enumeration<['Month', 'Year']>;
    planSalesCta: Attribute.String;
    planSalesUrl: Attribute.String;
  };
}

export interface CompanyProductCategory extends Schema.Component {
  collectionName: 'components_company_product_categories';
  info: {
    displayName: 'Product Category';
    description: '';
  };
  attributes: {};
}

export interface SectionBasicTextCk extends Schema.Component {
  collectionName: 'components_section_basic_text_cks';
  info: {
    displayName: 'Basic Text Ck';
    description: '';
  };
  attributes: {
    textCk: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          preset: 'standard';
        }
      >;
    title: Attribute.String;
    collapsable: Attribute.Enumeration<['none', 'partial', 'full']>;
  };
}

export interface SectionBigImage extends Schema.Component {
  collectionName: 'components_section_big_images';
  info: {
    displayName: 'bigImage';
    icon: 'picture';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    Heading: Attribute.String;
    Subheading: Attribute.Text;
    imageOverlayText: Attribute.Text;
    imageOverlayColor: Attribute.Enumeration<
      [
        'neutralWhite',
        'neutralLight',
        'neutralDark',
        'neutralVariantWhite',
        'neutralVariantLight',
        'neutralVariantDark',
        'primaryWhite',
        'primaryLight',
        'primaryDark',
        'secondaryWhite',
        'secondaryLight',
        'secondaryDark',
        'tertiaryWhite',
        'tertiaryLight',
        'tertiaryDark'
      ]
    >;
  };
}

export interface SectionBlogPosts extends Schema.Component {
  collectionName: 'components_section_blog_posts';
  info: {
    displayName: 'Blog Posts';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    Headline: Attribute.String;
    numberOfPosts: Attribute.Integer;
    postFilter: Attribute.Enumeration<['latest', 'featured']>;
    color: Attribute.Enumeration<
      [
        'neutralWhite',
        'neutralLight',
        'neutralDark',
        'neutralVariantWhite',
        'neutralVariantLight',
        'neutralVariantDark',
        'primaryWhite',
        'primaryLight',
        'primaryDark',
        'secondaryWhite',
        'secondaryLight',
        'secondaryDark',
        'TertiaryWhite',
        'TertiaryLight',
        'TertiaryDark'
      ]
    >;
  };
}

export interface SectionContact extends Schema.Component {
  collectionName: 'components_section_contacts';
  info: {
    displayName: 'Contact';
    description: '';
  };
  attributes: {
    Headline: Attribute.String;
    Subheading: Attribute.Text;
    ctaText: Attribute.String;
    ctaUrl: Attribute.String;
    buttonStyle: Attribute.Enumeration<['default', 'button1']>;
    ctaType: Attribute.Enumeration<['link', 'modal']>;
    label: Attribute.String;
    color: Attribute.Enumeration<
      [
        'neutralWhite',
        'neutralLight',
        'neutralDark',
        'neutralVariantWhite',
        'neutralVariantLight',
        'neutralVariantDark',
        'primaryWhite',
        'primaryLight',
        'primaryDark',
        'secondaryWhite',
        'secondaryLight',
        'secondaryDark',
        'tertiaryWhite',
        'tertiaryLight',
        'tertiaryDark'
      ]
    >;
  };
}

export interface SectionData extends Schema.Component {
  collectionName: 'components_section_data';
  info: {
    displayName: 'Data';
  };
  attributes: {
    jsonData: Attribute.JSON;
  };
}

export interface SectionDivider extends Schema.Component {
  collectionName: 'components_section_dividers';
  info: {
    displayName: 'divider';
    description: '';
  };
  attributes: {
    dividerType: Attribute.Enumeration<['default', 'light', 'heavy']>;
    maxScreenWidth: Attribute.Enumeration<['sm', 'md', 'lg', 'xl']>;
  };
}

export interface SectionImageSeriesSm extends Schema.Component {
  collectionName: 'components_section_image_series_sms';
  info: {
    displayName: 'Image Series Sm';
    description: '';
  };
  attributes: {
    Label: Attribute.String;
    Subheading: Attribute.Text;
    sectionImageSeriesSmImages: Attribute.Media;
    Body: Attribute.Text;
  };
}

export interface SectionLandingPageBody extends Schema.Component {
  collectionName: 'components_section_landing_page_bodies';
  info: {
    displayName: 'Landing Page Body';
    description: '';
  };
  attributes: {
    textBit: Attribute.Component<'sub-section.text-bit', true>;
    lpTextCardItem: Attribute.Component<'sub-section.text-card-item', true>;
  };
}

export interface SectionLandingPageForm extends Schema.Component {
  collectionName: 'components_section_landing_page_forms';
  info: {
    displayName: 'Landing Page Form';
  };
  attributes: {
    Subheading: Attribute.Text;
    landingPageText: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          preset: 'standard';
        }
      >;
  };
}

export interface SectionProjectImages extends Schema.Component {
  collectionName: 'components_section_project_images';
  info: {
    displayName: 'ProjectImages';
    icon: 'layout';
  };
  attributes: {
    Heading: Attribute.String;
    Subheading: Attribute.Text;
    title: Attribute.String;
    hexPrimary: Attribute.String;
    hexTwo: Attribute.String;
    hexThree: Attribute.String;
    images: Attribute.Media;
  };
}

export interface SectionSectionBigText extends Schema.Component {
  collectionName: 'components_section_section_big_texts';
  info: {
    displayName: 'Section Big Text';
    description: '';
  };
  attributes: {
    Label: Attribute.String;
    Headline: Attribute.Text;
    body: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          preset: 'standard';
        }
      >;
    background: Attribute.Enumeration<
      [
        'dark',
        'light',
        'color',
        'neutralWhite',
        'neutralLight',
        'neutralDark',
        'neutralVariantWhite',
        'neutralVariantLight',
        'neutralVariantDark',
        'primaryWhite',
        'primaryLight',
        'primaryDark',
        'secondaryWhite',
        'secondaryLight',
        'secondaryDark',
        'tertiaryWhite',
        'tertiaryLight',
        'tertiaryDark'
      ]
    > &
      Attribute.DefaultTo<'light'>;
    image: Attribute.Media;
  };
}

export interface SectionSectionDynamic extends Schema.Component {
  collectionName: 'components_section_section_dynamics';
  info: {
    displayName: 'Section Dynamic';
  };
  attributes: {
    headlineGroup: Attribute.Component<'sub-section.headline-group'>;
    linkDisplay: Attribute.Component<'sub-section.link-display'>;
  };
}

export interface SectionSectionTwoColumn extends Schema.Component {
  collectionName: 'components_section_section_two_columns';
  info: {
    displayName: 'Section Two Column';
    description: '';
  };
  attributes: {
    Headline: Attribute.Text;
    Label: Attribute.String;
    sectionTwoColImage: Attribute.Media;
    styleType: Attribute.Enumeration<['Image Right', 'Image Left']>;
    body: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          preset: 'standard';
        }
      >;
    background: Attribute.Enumeration<
      [
        'Light',
        'Dark',
        'Light Gray',
        'Color',
        'neutralWhite',
        'neutralLight',
        'neutralDark',
        'neutralVariantWhite',
        'neutralVariantLight',
        'neutralVariantDark',
        'primaryWhite',
        'primaryLight',
        'primaryDark',
        'secondaryWhite',
        'secondaryLight',
        'secondaryDark',
        'tertiaryWhite',
        'tertiaryLight',
        'tertiaryDark'
      ]
    > &
      Attribute.DefaultTo<'Light'>;
    Links: Attribute.Component<'sub-section.link', true>;
    sectionPaddingTop: Attribute.Enumeration<['sm', 'md', 'lg']>;
    sectionPaddingBottom: Attribute.Enumeration<['sm', 'md', 'lg']>;
    imagePaddingTop: Attribute.Enumeration<['heroAdjust', 'sm', 'md', 'lg']>;
    animation: Attribute.Enumeration<['none', 'fadeUp']>;
  };
}

export interface SectionSection extends Schema.Component {
  collectionName: 'components_section_sections';
  info: {
    displayName: 'Section';
    description: '';
  };
  attributes: {
    Heading: Attribute.String;
    Label: Attribute.String;
    Subheading: Attribute.Text;
    Image: Attribute.Media;
    sectionType: Attribute.Enumeration<
      [
        'Two Column Image Left',
        'Two Column Image Right',
        'Highlight Center Dark',
        'Highlight Center Light',
        'Text 1'
      ]
    >;
    Body: Attribute.RichText;
  };
}

export interface SectionSoftwareGroup extends Schema.Component {
  collectionName: 'components_section_software_groups';
  info: {
    displayName: 'Software Group';
    description: '';
  };
  attributes: {
    softwareItem: Attribute.Component<'sub-section.software-item', true>;
    headlineGroup: Attribute.Component<'sub-section.headline-group'>;
    style: Attribute.Enumeration<['light', 'color', 'dark']>;
  };
}

export interface SectionTextCards extends Schema.Component {
  collectionName: 'components_section_text_cards';
  info: {
    displayName: 'textCards';
    description: '';
  };
  attributes: {
    Headline: Attribute.Text;
    titleLabel: Attribute.String;
    Subheading: Attribute.Text;
    textCardItem: Attribute.Component<'sub-section.text-card-item', true>;
    columns: Attribute.Enumeration<['two', 'three']>;
    type: Attribute.Enumeration<['numbers', 'headings', 'icons']>;
    color: Attribute.Enumeration<
      [
        'neutralWhite',
        'neutralLight',
        'neutralDark',
        'neutralVariantWhite',
        'neutralVariantLight',
        'neutralVariantDark',
        'primaryWhite',
        'primaryLight',
        'primaryDark',
        'secondaryWhite',
        'secondaryLight',
        'secondaryDark',
        'tertiaryWhite',
        'tertiaryLight',
        'tertiaryDark'
      ]
    >;
  };
}

export interface SectionTextTwoCol extends Schema.Component {
  collectionName: 'components_section_text_two_cols';
  info: {
    displayName: 'TextTwoCol';
    description: '';
  };
  attributes: {
    Label: Attribute.String;
    Headline: Attribute.Text;
    body: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          preset: 'standard';
        }
      >;
    alignItems: Attribute.Enumeration<['center', 'flex-start']> &
      Attribute.DefaultTo<'center'>;
    headlineWidth: Attribute.Enumeration<['default', 'small']>;
    color: Attribute.Enumeration<
      [
        'default',
        'light',
        'neutralWhite',
        'neutralLight',
        'neutralDark',
        'neutralVariantWhite',
        'neutralVariantLight',
        'neutralVariantDark',
        'primaryWhite',
        'primaryLight',
        'primaryDark',
        'secondaryWhite',
        'secondaryLight',
        'secondaryDark',
        'tertiaryWhite',
        'tertiaryLight',
        'tertiaryDark'
      ]
    >;
    animation: Attribute.Enumeration<['none', 'fadeUp']>;
    sectionPaddingTop: Attribute.Enumeration<['sm', 'md', 'lg']>;
    sectionPaddingBottom: Attribute.Enumeration<['sm', 'md', 'lg']>;
  };
}

export interface SoftwareStackItem extends Schema.Component {
  collectionName: 'components_software_stack_items';
  info: {
    displayName: 'Stack Item';
    description: '';
  };
  attributes: {
    companyRef: Attribute.Relation<
      'software.stack-item',
      'oneToOne',
      'api::company.company'
    >;
    Category: Attribute.Enumeration<
      ['Promotion', 'Content', 'Segmentation', 'Data and Analytics']
    >;
    product_category: Attribute.Relation<
      'software.stack-item',
      'oneToOne',
      'api::product-category.product-category'
    >;
    stackCompanyExplanation: Attribute.Text;
  };
}

export interface SubSectionFlexRow extends Schema.Component {
  collectionName: 'components_sub_section_flex_rows';
  info: {
    displayName: 'Flex Row';
  };
  attributes: {
    justifyContent: Attribute.Enumeration<
      ['flex-start', 'flex-end', 'center', 'space-around', 'space-between']
    >;
  };
}

export interface SubSectionHeadlineGroup extends Schema.Component {
  collectionName: 'components_sub_section_headline_groups';
  info: {
    displayName: 'Headline Group';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    Headline: Attribute.String;
    Subheading: Attribute.Text;
  };
}

export interface SubSectionImageCol extends Schema.Component {
  collectionName: 'components_sub_section_image_cols';
  info: {
    displayName: 'ImageCol';
  };
  attributes: {
    Image: Attribute.Media;
    altText: Attribute.String;
    sourceUrl: Attribute.String;
    sourceLabel: Attribute.String;
  };
}

export interface SubSectionLinkDisplay extends Schema.Component {
  collectionName: 'components_sub_section_link_displays';
  info: {
    displayName: 'LinkArrow';
    description: '';
  };
  attributes: {
    url: Attribute.String;
    type: Attribute.Enumeration<['LinkArrowLight', 'LinkArrowDark']>;
    label: Attribute.String;
  };
}

export interface SubSectionLinkList extends Schema.Component {
  collectionName: 'components_sub_section_link_lists';
  info: {
    displayName: 'Link List';
    description: '';
  };
  attributes: {
    linkType: Attribute.Enumeration<
      ['LinkArrowLight', 'LinkArrowDark', 'LinkLight', 'LinkDark']
    >;
    linkDirection: Attribute.Enumeration<['column', 'row']>;
    link: Attribute.Component<'sub-section.link', true>;
    label: Attribute.String;
  };
}

export interface SubSectionLink extends Schema.Component {
  collectionName: 'components_sub_section_links';
  info: {
    displayName: 'Link';
    description: '';
  };
  attributes: {
    linkType: Attribute.Enumeration<['light', 'color', 'dark']>;
    url: Attribute.String;
    label: Attribute.String;
    linkSize: Attribute.Enumeration<['sm', 'md', 'lg', 'xl']>;
  };
}

export interface SubSectionSoftwareItem extends Schema.Component {
  collectionName: 'components_sub_section_software_items';
  info: {
    displayName: 'Software Item';
    description: '';
  };
  attributes: {
    Name: Attribute.String;
    icon: Attribute.Media;
    stackRank: Attribute.Decimal;
    priceTier: Attribute.Enumeration<['one', 'two', 'three']>;
    path: Attribute.String;
    Description: Attribute.Text;
  };
}

export interface SubSectionTextBit extends Schema.Component {
  collectionName: 'components_sub_section_text_bits';
  info: {
    displayName: 'textBit';
    description: '';
  };
  attributes: {
    Body: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          preset: 'light';
        }
      >;
    Title: Attribute.String;
    Style: Attribute.Enumeration<['Highlight']>;
  };
}

export interface SubSectionTextCardItem extends Schema.Component {
  collectionName: 'components_sub_section_text_card_items';
  info: {
    displayName: 'textCardItem';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text;
    icon: Attribute.Media;
    url: Attribute.String;
    urlText: Attribute.String;
    Image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'company.feature': CompanyFeature;
      'company.plan': CompanyPlan;
      'company.product-category': CompanyProductCategory;
      'section.basic-text-ck': SectionBasicTextCk;
      'section.big-image': SectionBigImage;
      'section.blog-posts': SectionBlogPosts;
      'section.contact': SectionContact;
      'section.data': SectionData;
      'section.divider': SectionDivider;
      'section.image-series-sm': SectionImageSeriesSm;
      'section.landing-page-body': SectionLandingPageBody;
      'section.landing-page-form': SectionLandingPageForm;
      'section.project-images': SectionProjectImages;
      'section.section-big-text': SectionSectionBigText;
      'section.section-dynamic': SectionSectionDynamic;
      'section.section-two-column': SectionSectionTwoColumn;
      'section.section': SectionSection;
      'section.software-group': SectionSoftwareGroup;
      'section.text-cards': SectionTextCards;
      'section.text-two-col': SectionTextTwoCol;
      'software.stack-item': SoftwareStackItem;
      'sub-section.flex-row': SubSectionFlexRow;
      'sub-section.headline-group': SubSectionHeadlineGroup;
      'sub-section.image-col': SubSectionImageCol;
      'sub-section.link-display': SubSectionLinkDisplay;
      'sub-section.link-list': SubSectionLinkList;
      'sub-section.link': SubSectionLink;
      'sub-section.software-item': SubSectionSoftwareItem;
      'sub-section.text-bit': SubSectionTextBit;
      'sub-section.text-card-item': SubSectionTextCardItem;
    }
  }
}
