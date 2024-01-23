import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<{
        min: 1;
        max: 50;
      }>;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    companies: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToMany',
      'api::company.company'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiArticleArticle extends Schema.CollectionType {
  collectionName: 'articles';
  info: {
    singularName: 'article';
    pluralName: 'articles';
    displayName: 'Article';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  pluginOptions: {
    'import-export-entries': {
      idField: 'slug';
    };
  };
  attributes: {
    Headline: Attribute.String;
    Subheading: Attribute.RichText;
    slug: Attribute.String & Attribute.Required & Attribute.Unique;
    featureImage: Attribute.Media;
    body: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          preset: 'rich';
          maxLengthCharacters: 100000;
        }
      >;
    pageTitle: Attribute.String;
    metaDescription: Attribute.Text;
    summaryImage: Attribute.Media;
    titleLabel: Attribute.String;
    isLive: Attribute.Boolean;
    sections: Attribute.DynamicZone<
      [
        'section.basic-text-ck',
        'section.divider',
        'section.image-series-sm',
        'section.section-big-text',
        'section.section-two-column',
        'section.text-cards',
        'section.text-two-col',
        'section.contact'
      ]
    >;
    headlineWidth: Attribute.Enumeration<['medium', 'large', 'default']>;
    tableOfContents: Attribute.Enumeration<['no', 'yes']>;
    BodyJson: Attribute.Blocks;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::article.article',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::article.article',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCompanyCompany extends Schema.CollectionType {
  collectionName: 'companies';
  info: {
    singularName: 'company';
    pluralName: 'companies';
    displayName: 'Company';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    companyName: Attribute.String;
    companyDescription: Attribute.RichText;
    companyUrl: Attribute.String;
    product_categories: Attribute.Relation<
      'api::company.company',
      'manyToMany',
      'api::product-category.product-category'
    >;
    slug: Attribute.String & Attribute.Required & Attribute.Unique;
    twitterHandle: Attribute.String;
    linkedinHandle: Attribute.String;
    parentCompany: Attribute.Relation<
      'api::company.company',
      'manyToOne',
      'api::company.company'
    >;
    subsidiaries: Attribute.Relation<
      'api::company.company',
      'oneToMany',
      'api::company.company'
    >;
    features: Attribute.Relation<
      'api::company.company',
      'manyToMany',
      'api::feature.feature'
    >;
    entryPriceMonthly: Attribute.Decimal;
    yearFounded: Attribute.Integer;
    Headquarters: Attribute.String;
    webScreenshot: Attribute.Media & Attribute.Required;
    freeTrial: Attribute.Boolean;
    freePricingTier: Attribute.Boolean;
    integrationsPage: Attribute.String;
    weight: Attribute.Integer;
    featured: Attribute.Boolean & Attribute.DefaultTo<false>;
    authorityRank: Attribute.Decimal;
    pricingPage: Attribute.String;
    companyDescriptionCk: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          preset: 'standard';
        }
      >;
    companyPlan: Attribute.Component<'company.plan', true>;
    rankAdj: Attribute.Decimal;
    pageTitle: Attribute.String;
    metaDescription: Attribute.Text;
    openSourceType: Attribute.Enumeration<
      ['GNU General Public', 'Apache Software Foundation', 'MIT', 'AGPL']
    >;
    companyIcon: Attribute.Media;
    Employees: Attribute.Integer;
    featureItem: Attribute.Component<'company.feature', true>;
    technologies_used: Attribute.Relation<
      'api::company.company',
      'oneToMany',
      'api::technology.technology'
    >;
    technology_used_by: Attribute.Relation<
      'api::company.company',
      'oneToMany',
      'api::technology.technology'
    >;
    primary_category: Attribute.Relation<
      'api::company.company',
      'manyToOne',
      'api::product-category.product-category'
    >;
    trendRank: Attribute.Decimal;
    owner: Attribute.Relation<
      'api::company.company',
      'manyToOne',
      'plugin::users-permissions.user'
    >;
    pricingTier: Attribute.String;
    twitter_wma: Attribute.Float;
    positioningBlurb: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::company.company',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::company.company',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFeatureFeature extends Schema.CollectionType {
  collectionName: 'features';
  info: {
    singularName: 'feature';
    pluralName: 'features';
    displayName: 'Feature';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    featureName: Attribute.String;
    companies: Attribute.Relation<
      'api::feature.feature',
      'manyToMany',
      'api::company.company'
    >;
    product_categories: Attribute.Relation<
      'api::feature.feature',
      'manyToMany',
      'api::product-category.product-category'
    >;
    featureDescription: Attribute.RichText;
    slug: Attribute.String & Attribute.Required & Attribute.Unique;
    Weight: Attribute.Integer &
      Attribute.SetMinMax<{
        max: 50;
      }>;
    feature_category_rel: Attribute.Relation<
      'api::feature.feature',
      'manyToOne',
      'api::feature-category.feature-category'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::feature.feature',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::feature.feature',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFeatureCategoryFeatureCategory
  extends Schema.CollectionType {
  collectionName: 'feature_categories';
  info: {
    singularName: 'feature-category';
    pluralName: 'feature-categories';
    displayName: 'Feature Category';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    featureCategoryName: Attribute.String;
    slug: Attribute.String;
    features: Attribute.Relation<
      'api::feature-category.feature-category',
      'oneToMany',
      'api::feature.feature'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::feature-category.feature-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::feature-category.feature-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHomepageHomepage extends Schema.CollectionType {
  collectionName: 'homepages';
  info: {
    singularName: 'homepage';
    pluralName: 'homepages';
    displayName: 'homepage';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Headline: Attribute.RichText;
    Subheading: Attribute.RichText;
    pageTitle: Attribute.String;
    metaDescription: Attribute.Text;
    sectionDz: Attribute.DynamicZone<
      [
        'section.section-two-column',
        'section.section-big-text',
        'section.text-cards',
        'section.text-two-col',
        'section.basic-text-ck',
        'section.contact',
        'section.image-series-sm',
        'section.blog-posts',
        'section.divider'
      ]
    >;
    fullBackgroundImage: Attribute.Media;
    heroBigImage: Attribute.Component<'section.big-image'>;
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
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::homepage.homepage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::homepage.homepage',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiIndustryIndustry extends Schema.CollectionType {
  collectionName: 'industries';
  info: {
    singularName: 'industry';
    pluralName: 'industries';
    displayName: 'Industry';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Name: Attribute.String;
    Description: Attribute.Text;
    slug: Attribute.String;
    pageTitle: Attribute.String;
    metaDescription: Attribute.Text;
    projects: Attribute.Relation<
      'api::industry.industry',
      'manyToMany',
      'api::project.project'
    >;
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
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::industry.industry',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::industry.industry',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLandingPageLandingPage extends Schema.CollectionType {
  collectionName: 'landing_pages';
  info: {
    singularName: 'landing-page';
    pluralName: 'landing-pages';
    displayName: 'Landing Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Headline: Attribute.String;
    Subheading: Attribute.Text;
    Sections: Attribute.DynamicZone<
      [
        'section.section-big-text',
        'section.landing-page-form',
        'section.section-two-column',
        'section.text-cards',
        'section.text-two-col',
        'section.image-series-sm',
        'section.divider',
        'section.data',
        'section.basic-text-ck',
        'section.landing-page-body',
        'section.software-group',
        'section.contact'
      ]
    >;
    heroBackgroundImg: Attribute.Media;
    slug: Attribute.String & Attribute.Required;
    titleLabel: Attribute.String;
    heroCta: Attribute.Enumeration<['default', 'bigButton']>;
    pageStyle: Attribute.Enumeration<['basic', 'dark', 'dynamic']>;
    sidebarForm: Attribute.Boolean;
    heroCtaText: Attribute.String;
    isolatedImage: Attribute.Media;
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
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::landing-page.landing-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::landing-page.landing-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPagePage extends Schema.CollectionType {
  collectionName: 'pages';
  info: {
    singularName: 'page';
    pluralName: 'pages';
    displayName: 'Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Headline: Attribute.RichText;
    Subheading: Attribute.RichText;
    Body: Attribute.RichText;
    slug: Attribute.String & Attribute.Required & Attribute.Unique;
    bodyCk: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          preset: 'standard';
        }
      >;
    pageTitle: Attribute.String;
    metaDescription: Attribute.Text;
    pageStyle: Attribute.Enumeration<['Defualt', 'Display']>;
    mainImage: Attribute.Media;
    titleLabel: Attribute.String;
    sectionDz: Attribute.DynamicZone<
      [
        'section.section-two-column',
        'section.section-big-text',
        'section.text-cards',
        'section.divider',
        'section.text-two-col'
      ]
    >;
    headlineStyle: Attribute.Enumeration<['Extra Large', 'Double XL']>;
    fullBackgroundImage: Attribute.Media;
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
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::page.page', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::page.page', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiProductProduct extends Schema.CollectionType {
  collectionName: 'products';
  info: {
    singularName: 'product';
    pluralName: 'products';
    displayName: 'Product';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    productName: Attribute.String;
    productDescription: Attribute.RichText;
    productUrl: Attribute.String;
    slug: Attribute.String;
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
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::product.product',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProductCategoryProductCategory
  extends Schema.CollectionType {
  collectionName: 'product_categories';
  info: {
    singularName: 'product-category';
    pluralName: 'product-categories';
    displayName: 'Product Category';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    categoryName: Attribute.String;
    categoryDescription: Attribute.RichText;
    companies: Attribute.Relation<
      'api::product-category.product-category',
      'manyToMany',
      'api::company.company'
    >;
    slug: Attribute.String & Attribute.Required & Attribute.Unique;
    features: Attribute.Relation<
      'api::product-category.product-category',
      'manyToMany',
      'api::feature.feature'
    >;
    child_categories: Attribute.Relation<
      'api::product-category.product-category',
      'oneToMany',
      'api::product-category.product-category'
    >;
    parent_category: Attribute.Relation<
      'api::product-category.product-category',
      'manyToOne',
      'api::product-category.product-category'
    >;
    Weight: Attribute.Integer &
      Attribute.SetMinMax<{
        max: 50;
      }>;
    Subheading: Attribute.RichText &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    pageTitle: Attribute.String;
    metaDescription: Attribute.Text;
    shortName: Attribute.String;
    primary_category_companies: Attribute.Relation<
      'api::product-category.product-category',
      'oneToMany',
      'api::company.company'
    >;
    category_wma: Attribute.Float;
    fullBackgroundImage: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::product-category.product-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::product-category.product-category',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProjectProject extends Schema.CollectionType {
  collectionName: 'projects';
  info: {
    singularName: 'project';
    pluralName: 'projects';
    displayName: 'Project';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Headline: Attribute.String;
    Subheading: Attribute.Text;
    slug: Attribute.String;
    sections: Attribute.DynamicZone<
      [
        'section.divider',
        'section.image-series-sm',
        'section.section-big-text',
        'section.text-cards',
        'section.text-two-col',
        'section.section-two-column',
        'section.big-image',
        'section.project-images',
        'section.basic-text-ck'
      ]
    >;
    industries: Attribute.Relation<
      'api::project.project',
      'manyToMany',
      'api::industry.industry'
    >;
    hexOne: Attribute.String;
    hexTwo: Attribute.String;
    hexThree: Attribute.String;
    heroImageSeries: Attribute.Media;
    pageTitle: Attribute.String;
    metaDescription: Attribute.Text;
    projectCategories: Attribute.Enumeration<
      ['Design', 'Branding', 'Web Development', 'SEO']
    >;
    projectUrl: Attribute.String;
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
    mainImage: Attribute.Media;
    mainMobile: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::project.project',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::project.project',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiServiceService extends Schema.CollectionType {
  collectionName: 'services';
  info: {
    singularName: 'service';
    pluralName: 'services';
    displayName: 'Service';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Subheading: Attribute.Text;
    slug: Attribute.String;
    mainImage: Attribute.Media;
    pageTitle: Attribute.String;
    metaDescription: Attribute.Text;
    titleLabel: Attribute.String;
    Headline: Attribute.Text;
    sectionDz: Attribute.DynamicZone<
      [
        'section.section-two-column',
        'section.section-big-text',
        'section.text-two-col',
        'section.landing-page-form',
        'section.image-series-sm',
        'section.data',
        'section.text-cards',
        'section.divider',
        'section.software-group'
      ]
    >;
    Weight: Attribute.Integer;
    pageType: Attribute.Enumeration<
      ['Service', 'Landing Page', 'Aggregator', 'Industry']
    > &
      Attribute.DefaultTo<'Service'>;
    heroCta: Attribute.Enumeration<['Contact']>;
    headlineStyle: Attribute.Enumeration<['Extra Large', 'Double XX']>;
    fullBackgroundImage: Attribute.Media;
    headlineWidth: Attribute.Enumeration<['medium', 'large', 'default']>;
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
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::service.service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::service.service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiStackStack extends Schema.CollectionType {
  collectionName: 'stacks';
  info: {
    singularName: 'stack';
    pluralName: 'stacks';
    displayName: 'stack';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    stackName: Attribute.String;
    stackItem: Attribute.Component<'software.stack-item', true>;
    slug: Attribute.String;
    featureImage: Attribute.Media;
    stackAnalysis: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          preset: 'rich';
        }
      >;
    stackDescription: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          preset: 'rich';
          maxLengthCharacters: 200;
        }
      >;
    authorName: Attribute.String;
    authorTitle: Attribute.String;
    authorCompany: Attribute.String;
    authorWebsite: Attribute.String;
    stackSummary: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor.CKEditor',
        {
          preset: 'rich';
          maxLengthCharacters: 180;
        }
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::stack.stack',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::stack.stack',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiTechnologyTechnology extends Schema.CollectionType {
  collectionName: 'technologies';
  info: {
    singularName: 'technology';
    pluralName: 'technologies';
    displayName: 'Technology';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name_data: Attribute.String;
    category_data: Attribute.String;
    company_using: Attribute.Relation<
      'api::technology.technology',
      'manyToOne',
      'api::company.company'
    >;
    company_has: Attribute.Relation<
      'api::technology.technology',
      'manyToOne',
      'api::company.company'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::technology.technology',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::technology.technology',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::article.article': ApiArticleArticle;
      'api::company.company': ApiCompanyCompany;
      'api::feature.feature': ApiFeatureFeature;
      'api::feature-category.feature-category': ApiFeatureCategoryFeatureCategory;
      'api::homepage.homepage': ApiHomepageHomepage;
      'api::industry.industry': ApiIndustryIndustry;
      'api::landing-page.landing-page': ApiLandingPageLandingPage;
      'api::page.page': ApiPagePage;
      'api::product.product': ApiProductProduct;
      'api::product-category.product-category': ApiProductCategoryProductCategory;
      'api::project.project': ApiProjectProject;
      'api::service.service': ApiServiceService;
      'api::stack.stack': ApiStackStack;
      'api::technology.technology': ApiTechnologyTechnology;
    }
  }
}
