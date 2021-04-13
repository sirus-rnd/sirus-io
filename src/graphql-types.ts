export type Maybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  PrismicImageThumbnailsType: any;
};

export type File = Node & {
  __typename?: 'File';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Internal = {
  __typename?: 'Internal';
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type Directory = Node & {
  __typename?: 'Directory';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type Site = Node & {
  __typename?: 'Site';
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  titleTemplate?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  __typename?: 'SitePage';
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageContext = {
  __typename?: 'SitePageContext';
  slug?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  numberOfPages?: Maybe<Scalars['Int']>;
  humanPageNumber?: Maybe<Scalars['Int']>;
  previousPagePath?: Maybe<Scalars['String']>;
  nextPagePath?: Maybe<Scalars['String']>;
  pageNumber?: Maybe<Scalars['Int']>;
  uid?: Maybe<Scalars['String']>;
};

export enum ImageFormat {
  NoChange = 'NO_CHANGE',
  Auto = 'AUTO',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP',
  Avif = 'AVIF',
}

export enum ImageFit {
  Cover = 'COVER',
  Contain = 'CONTAIN',
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE',
}

export enum ImageLayout {
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH',
  Constrained = 'CONSTRAINED',
}

export enum ImageCropFocus {
  Center = 'CENTER',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  East = 'EAST',
  Southeast = 'SOUTHEAST',
  South = 'SOUTH',
  Southwest = 'SOUTHWEST',
  West = 'WEST',
  Northwest = 'NORTHWEST',
  Entropy = 'ENTROPY',
  Attention = 'ATTENTION',
}

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyWhite = 'TURNPOLICY_WHITE',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY',
}

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export type ImageSharp = Node & {
  __typename?: 'ImageSharp';
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions?: Maybe<BlurredOptions>;
  tracedSVGOptions?: Maybe<Potrace>;
  formats?: Maybe<Array<Maybe<ImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sizes?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  jpgOptions?: Maybe<JpgOptions>;
  pngOptions?: Maybe<PngOptions>;
  webpOptions?: Maybe<WebPOptions>;
  avifOptions?: Maybe<AvifOptions>;
  transformOptions?: Maybe<TransformOptions>;
  backgroundColor?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export enum ImagePlaceholder {
  DominantColor = 'DOMINANT_COLOR',
  TracedSvg = 'TRACED_SVG',
  Blurred = 'BLURRED',
  None = 'NONE',
}

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: Maybe<ImageFormat>;
};

export type JpgOptions = {
  quality?: Maybe<Scalars['Int']>;
  progressive?: Maybe<Scalars['Boolean']>;
};

export type PngOptions = {
  quality?: Maybe<Scalars['Int']>;
  compressionSpeed?: Maybe<Scalars['Int']>;
};

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>;
};

export type AvifOptions = {
  quality?: Maybe<Scalars['Int']>;
  lossless?: Maybe<Scalars['Boolean']>;
  speed?: Maybe<Scalars['Int']>;
};

export type TransformOptions = {
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
};

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize';
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type GhostPost = Node & {
  __typename?: 'GhostPost';
  slug: Scalars['String'];
  id: Scalars['ID'];
  uuid: Scalars['String'];
  title: Scalars['String'];
  html?: Maybe<Scalars['String']>;
  comment_id?: Maybe<Scalars['String']>;
  feature_image?: Maybe<Scalars['String']>;
  featured: Scalars['Boolean'];
  visibility: Scalars['String'];
  created_at: Scalars['Date'];
  updated_at?: Maybe<Scalars['Date']>;
  published_at?: Maybe<Scalars['Date']>;
  custom_excerpt?: Maybe<Scalars['String']>;
  codeinjection_head?: Maybe<Scalars['String']>;
  codeinjection_foot?: Maybe<Scalars['String']>;
  codeinjection_styles?: Maybe<Scalars['String']>;
  custom_template?: Maybe<Scalars['String']>;
  canonical_url?: Maybe<Scalars['String']>;
  send_email_when_published?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<Array<Maybe<GhostTag>>>;
  authors: Array<Maybe<GhostAuthor>>;
  primary_author: GhostAuthor;
  primary_tag?: Maybe<GhostTag>;
  url: Scalars['String'];
  excerpt?: Maybe<Scalars['String']>;
  reading_time?: Maybe<Scalars['Int']>;
  email_subject?: Maybe<Scalars['String']>;
  plaintext?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Boolean']>;
  og_image?: Maybe<Scalars['String']>;
  og_title?: Maybe<Scalars['String']>;
  og_description?: Maybe<Scalars['String']>;
  twitter_image?: Maybe<Scalars['String']>;
  twitter_title?: Maybe<Scalars['String']>;
  twitter_description?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  meta_description?: Maybe<Scalars['String']>;
  access?: Maybe<Scalars['Boolean']>;
  ghostId?: Maybe<Scalars['String']>;
  featureImageSharp?: Maybe<File>;
  /** Returns all children nodes filtered by type HtmlRehype */
  childrenHtmlRehype?: Maybe<Array<Maybe<HtmlRehype>>>;
  /** Returns the first child node of type HtmlRehype or null if there are no children of given type on this node */
  childHtmlRehype?: Maybe<HtmlRehype>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type GhostPostCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type GhostPostUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type GhostPostPublished_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type GhostPage = Node & {
  __typename?: 'GhostPage';
  slug: Scalars['String'];
  id: Scalars['ID'];
  uuid: Scalars['String'];
  title: Scalars['String'];
  html?: Maybe<Scalars['String']>;
  comment_id?: Maybe<Scalars['String']>;
  feature_image?: Maybe<Scalars['String']>;
  featured: Scalars['Boolean'];
  visibility: Scalars['String'];
  created_at: Scalars['Date'];
  updated_at?: Maybe<Scalars['Date']>;
  published_at?: Maybe<Scalars['Date']>;
  custom_excerpt?: Maybe<Scalars['String']>;
  codeinjection_head?: Maybe<Scalars['String']>;
  codeinjection_foot?: Maybe<Scalars['String']>;
  codeinjection_styles?: Maybe<Scalars['String']>;
  custom_template?: Maybe<Scalars['String']>;
  canonical_url?: Maybe<Scalars['String']>;
  send_email_when_published?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<Array<Maybe<GhostTag>>>;
  authors: Array<Maybe<GhostAuthor>>;
  primary_author: GhostAuthor;
  primary_tag?: Maybe<GhostTag>;
  url: Scalars['String'];
  excerpt?: Maybe<Scalars['String']>;
  reading_time?: Maybe<Scalars['Int']>;
  email_subject?: Maybe<Scalars['String']>;
  plaintext?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Boolean']>;
  og_image?: Maybe<Scalars['String']>;
  og_title?: Maybe<Scalars['String']>;
  og_description?: Maybe<Scalars['String']>;
  twitter_image?: Maybe<Scalars['String']>;
  twitter_title?: Maybe<Scalars['String']>;
  twitter_description?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  meta_description?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type GhostPageCreated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type GhostPageUpdated_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type GhostPagePublished_AtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type GhostTag = Node & {
  __typename?: 'GhostTag';
  slug: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  feature_image?: Maybe<Scalars['String']>;
  visibility: Scalars['String'];
  meta_title?: Maybe<Scalars['String']>;
  meta_description?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  count?: Maybe<GhostPostCount>;
  postCount?: Maybe<Scalars['Int']>;
  og_image?: Maybe<Scalars['String']>;
  og_title?: Maybe<Scalars['String']>;
  og_description?: Maybe<Scalars['String']>;
  twitter_image?: Maybe<Scalars['String']>;
  twitter_title?: Maybe<Scalars['String']>;
  twitter_description?: Maybe<Scalars['String']>;
  codeinjection_head?: Maybe<Scalars['String']>;
  codeinjection_foot?: Maybe<Scalars['String']>;
  canonical_url?: Maybe<Scalars['String']>;
  accent_color?: Maybe<Scalars['String']>;
  ghostId?: Maybe<Scalars['String']>;
  featureImageSharp?: Maybe<File>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type GhostAuthor = Node & {
  __typename?: 'GhostAuthor';
  slug: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  profile_image?: Maybe<Scalars['String']>;
  cover_image?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  meta_title?: Maybe<Scalars['String']>;
  meta_description?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  count: GhostPostCount;
  postCount: Scalars['Int'];
  ghostId?: Maybe<Scalars['String']>;
  profileImageSharp?: Maybe<File>;
  coverImageSharp?: Maybe<File>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type GhostSettings = Node & {
  __typename?: 'GhostSettings';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  cover_image?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  lang: Scalars['String'];
  timezone: Scalars['String'];
  navigation?: Maybe<Array<Maybe<GhostNavigation>>>;
  secondary_navigation?: Maybe<Array<Maybe<GhostNavigation>>>;
  meta_title?: Maybe<Scalars['String']>;
  meta_description?: Maybe<Scalars['String']>;
  og_image?: Maybe<Scalars['String']>;
  og_title?: Maybe<Scalars['String']>;
  og_description?: Maybe<Scalars['String']>;
  twitter_image?: Maybe<Scalars['String']>;
  twitter_title?: Maybe<Scalars['String']>;
  twitter_description?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  codeinjection_head?: Maybe<Scalars['String']>;
  codeinjection_foot?: Maybe<Scalars['String']>;
  codeinjection_styles: Scalars['String'];
  active_timezone?: Maybe<Scalars['String']>;
  default_locale?: Maybe<Scalars['String']>;
  members_support_address?: Maybe<Scalars['String']>;
  ghostId?: Maybe<Scalars['Int']>;
  coverImageSharp?: Maybe<File>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type GhostNavigation = {
  __typename?: 'GhostNavigation';
  label: Scalars['String'];
  url: Scalars['String'];
};

export type GhostPostCount = {
  __typename?: 'GhostPostCount';
  posts?: Maybe<Scalars['Int']>;
};

export type HtmlRehype = Node & {
  __typename?: 'HtmlRehype';
  html?: Maybe<Scalars['String']>;
  htmlAst?: Maybe<Scalars['JSON']>;
  tableOfContents?: Maybe<Scalars['JSON']>;
  context?: Maybe<HtmlRehypeContext>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type HtmlRehypeContext = {
  __typename?: 'HtmlRehypeContext';
  url?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  feature_image?: Maybe<Scalars['String']>;
};

export type PrismicHomepageJumbotronSliderGroupType = {
  __typename?: 'PrismicHomepageJumbotronSliderGroupType';
  image?: Maybe<PrismicImageType>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  link?: Maybe<PrismicLinkType>;
};

export type PrismicHomepageBodyFeaturedContentsPrimaryType = {
  __typename?: 'PrismicHomepageBodyFeaturedContentsPrimaryType';
  title?: Maybe<Scalars['String']>;
  navigation_position?: Maybe<Scalars['Boolean']>;
};

export type PrismicHomepageBodyFeaturedContentsItemType = {
  __typename?: 'PrismicHomepageBodyFeaturedContentsItemType';
  image?: Maybe<PrismicImageType>;
  name?: Maybe<Scalars['String']>;
  information?: Maybe<PrismicStructuredTextType>;
};

export type PrismicHomepageBodyFeaturedContents = PrismicSliceType &
  Node & {
    __typename?: 'PrismicHomepageBodyFeaturedContents';
    slice_type: Scalars['String'];
    slice_label?: Maybe<Scalars['String']>;
    primary?: Maybe<PrismicHomepageBodyFeaturedContentsPrimaryType>;
    items?: Maybe<Array<Maybe<PrismicHomepageBodyFeaturedContentsItemType>>>;
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
  };

export type PrismicSliceType = {
  /** The slice type API ID. */
  slice_type: Scalars['String'];
  /** The slice label. */
  slice_label?: Maybe<Scalars['String']>;
};

export type PrismicHomepageBodySlicesType = PrismicHomepageBodyFeaturedContents;

export type PrismicHomepageDataType = {
  __typename?: 'PrismicHomepageDataType';
  jumbotron_slider?: Maybe<Array<Maybe<PrismicHomepageJumbotronSliderGroupType>>>;
  body?: Maybe<Array<Maybe<PrismicHomepageBodySlicesType>>>;
};

export type PrismicHomepage = PrismicDocument &
  Node & {
    __typename?: 'PrismicHomepage';
    data?: Maybe<PrismicHomepageDataType>;
    dataRaw: Scalars['JSON'];
    dataString: Scalars['String'];
    first_publication_date: Scalars['Date'];
    href: Scalars['String'];
    url?: Maybe<Scalars['String']>;
    lang: Scalars['String'];
    last_publication_date: Scalars['Date'];
    tags: Array<Scalars['String']>;
    alternate_languages: Array<PrismicLinkType>;
    type: Scalars['String'];
    prismicId: Scalars['ID'];
    _previewable: Scalars['ID'];
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
  };

export type PrismicHomepageFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicHomepageLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicDocument = {
  /** The document's data object without transformations exactly as it comes from the Prismic API. */
  dataRaw: Scalars['JSON'];
  /**
   * The document's data object without transformations. The object is stringified via `JSON.stringify` to eliminate the need to declare subfields.
   * @deprecated Use `dataRaw` instead which returns JSON.
   */
  dataString?: Maybe<Scalars['String']>;
  /** The document's initial publication date. */
  first_publication_date?: Maybe<Scalars['Date']>;
  /** The document's Prismic API URL. */
  href?: Maybe<Scalars['String']>;
  /** The document's URL derived via the link resolver. */
  url?: Maybe<Scalars['String']>;
  /** Globally unique identifier. Note that this differs from the `prismicID` field. */
  id: Scalars['ID'];
  /** The document's language. */
  lang: Scalars['String'];
  /** The document's most recent publication date */
  last_publication_date?: Maybe<Scalars['Date']>;
  /** The document's list of tags. */
  tags: Array<Scalars['String']>;
  /** Alternate languages for the document. */
  alternate_languages: Array<PrismicLinkType>;
  /** The document's Prismic API ID type. */
  type: Scalars['String'];
  /** The document's Prismic ID. */
  prismicId: Scalars['ID'];
  /** Marks the document as previewable using Prismic's preview system. Include this field if updates to the document should be previewable by content editors before publishing. **Note: the value of this field is not stable and should not be used directly**. */
  _previewable: Scalars['ID'];
};

export type PrismicDocumentFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicDocumentLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicContactDataType = {
  __typename?: 'PrismicContactDataType';
  title?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
  contact_email?: Maybe<Scalars['String']>;
  address?: Maybe<PrismicStructuredTextType>;
  address_geolocation?: Maybe<PrismicGeoPointType>;
};

export type PrismicContact = PrismicDocument &
  Node & {
    __typename?: 'PrismicContact';
    data?: Maybe<PrismicContactDataType>;
    dataRaw: Scalars['JSON'];
    dataString: Scalars['String'];
    first_publication_date: Scalars['Date'];
    href: Scalars['String'];
    url?: Maybe<Scalars['String']>;
    lang: Scalars['String'];
    last_publication_date: Scalars['Date'];
    tags: Array<Scalars['String']>;
    alternate_languages: Array<PrismicLinkType>;
    type: Scalars['String'];
    prismicId: Scalars['ID'];
    _previewable: Scalars['ID'];
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
  };

export type PrismicContactFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicContactLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicPageDataType = {
  __typename?: 'PrismicPageDataType';
  title?: Maybe<PrismicStructuredTextType>;
  subtitle?: Maybe<PrismicStructuredTextType>;
  banner?: Maybe<PrismicImageType>;
  content?: Maybe<PrismicStructuredTextType>;
};

export type PrismicPage = PrismicDocument &
  Node & {
    __typename?: 'PrismicPage';
    data?: Maybe<PrismicPageDataType>;
    dataRaw: Scalars['JSON'];
    dataString: Scalars['String'];
    first_publication_date: Scalars['Date'];
    href: Scalars['String'];
    url?: Maybe<Scalars['String']>;
    lang: Scalars['String'];
    last_publication_date: Scalars['Date'];
    tags: Array<Scalars['String']>;
    alternate_languages: Array<PrismicLinkType>;
    type: Scalars['String'];
    prismicId: Scalars['ID'];
    _previewable: Scalars['ID'];
    uid?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
  };

export type PrismicPageFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicPageLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicProductFeaturesGroupType = {
  __typename?: 'PrismicProductFeaturesGroupType';
  image?: Maybe<PrismicImageType>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  information?: Maybe<PrismicStructuredTextType>;
  link?: Maybe<PrismicLinkType>;
};

export type PrismicProductDataType = {
  __typename?: 'PrismicProductDataType';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<PrismicStructuredTextType>;
  features?: Maybe<Array<Maybe<PrismicProductFeaturesGroupType>>>;
};

export type PrismicProduct = PrismicDocument &
  Node & {
    __typename?: 'PrismicProduct';
    data?: Maybe<PrismicProductDataType>;
    dataRaw: Scalars['JSON'];
    dataString: Scalars['String'];
    first_publication_date: Scalars['Date'];
    href: Scalars['String'];
    url?: Maybe<Scalars['String']>;
    lang: Scalars['String'];
    last_publication_date: Scalars['Date'];
    tags: Array<Scalars['String']>;
    alternate_languages: Array<PrismicLinkType>;
    type: Scalars['String'];
    prismicId: Scalars['ID'];
    _previewable: Scalars['ID'];
    uid?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
  };

export type PrismicProductFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicProductLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicMenuMenusGroupType = {
  __typename?: 'PrismicMenuMenusGroupType';
  label?: Maybe<Scalars['String']>;
  link?: Maybe<PrismicLinkType>;
};

export type PrismicMenuDataType = {
  __typename?: 'PrismicMenuDataType';
  menus?: Maybe<Array<Maybe<PrismicMenuMenusGroupType>>>;
};

export type PrismicMenu = PrismicDocument &
  Node & {
    __typename?: 'PrismicMenu';
    data?: Maybe<PrismicMenuDataType>;
    dataRaw: Scalars['JSON'];
    dataString: Scalars['String'];
    first_publication_date: Scalars['Date'];
    href: Scalars['String'];
    url?: Maybe<Scalars['String']>;
    lang: Scalars['String'];
    last_publication_date: Scalars['Date'];
    tags: Array<Scalars['String']>;
    alternate_languages: Array<PrismicLinkType>;
    type: Scalars['String'];
    prismicId: Scalars['ID'];
    _previewable: Scalars['ID'];
    uid?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
  };

export type PrismicMenuFirst_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicMenuLast_Publication_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type PrismicAllDocumentTypes =
  | PrismicHomepage
  | PrismicContact
  | PrismicPage
  | PrismicProduct
  | PrismicMenu;

export type PrismicImageFixedType = {
  __typename?: 'PrismicImageFixedType';
  base64: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp: Scalars['String'];
  srcSetWebp: Scalars['String'];
  sizes: Scalars['String'];
  width: Scalars['Int'];
  height: Scalars['Int'];
};

export type PrismicImageFluidType = {
  __typename?: 'PrismicImageFluidType';
  base64: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp: Scalars['String'];
  srcSetWebp: Scalars['String'];
  sizes: Scalars['String'];
  aspectRatio: Scalars['Float'];
};

/** An image field with optional constrained thumbnails. */
export type PrismicImageType = PrismicImageInterface & {
  __typename?: 'PrismicImageType';
  alt?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  dimensions?: Maybe<PrismicImageDimensionsType>;
  url?: Maybe<Scalars['String']>;
  fixed?: Maybe<PrismicImageFixedType>;
  fluid?: Maybe<PrismicImageFluidType>;
  localFile?: Maybe<File>;
  thumbnails?: Maybe<Scalars['PrismicImageThumbnailsType']>;
};

/** An image field with optional constrained thumbnails. */
export type PrismicImageTypeUrlArgs = {
  imgixParams?: Maybe<ImgixUrlParamsInput>;
};

/** An image field with optional constrained thumbnails. */
export type PrismicImageTypeFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixUrlParamsInput>;
  placeholderImgixParams?: Maybe<ImgixUrlParamsInput>;
};

/** An image field with optional constrained thumbnails. */
export type PrismicImageTypeFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  imgixParams?: Maybe<ImgixUrlParamsInput>;
  placeholderImgixParams?: Maybe<ImgixUrlParamsInput>;
};

export type PrismicImageInterface = {
  /** The image's alternative text. */
  alt?: Maybe<Scalars['String']>;
  /** The image's copyright text. */
  copyright?: Maybe<Scalars['String']>;
  /** The image's dimensions. */
  dimensions?: Maybe<PrismicImageDimensionsType>;
  /** The image's URL on Prismic's CDN. */
  url?: Maybe<Scalars['String']>;
  /** The locally downloaded image if `shouldNormalizeImage` returns true. */
  localFile?: Maybe<File>;
  fixed?: Maybe<PrismicImageFixedType>;
  fluid?: Maybe<PrismicImageFluidType>;
};

export type ImgixUrlParamsInput = {
  /** Specifies an aspect ratio to maintain when resizing and cropping the image. [See docs](https://docs.imgix.com/apis/url/size/ar). */
  ar?: Maybe<Scalars['String']>;
  /** Applies automatic enhancements to images. [See docs](https://docs.imgix.com/apis/url/auto). */
  auto?: Maybe<Scalars['String']>;
  /** Colors the background of padded and partially-transparent images. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/bg). */
  bg?: Maybe<Scalars['String']>;
  /** Changes the blend alignment relative to the parent image. [See docs](https://docs.imgix.com/apis/url/blending/blend-align). */
  blendAlign?: Maybe<Scalars['String']>;
  /** Alias for `blendAlign`. */
  blendalign?: Maybe<Scalars['String']>;
  /** Alias for `blendAlign`. */
  ba?: Maybe<Scalars['String']>;
  /** Changes the alpha of the blend image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/blending/blend-alpha). */
  blendAlpha?: Maybe<Scalars['Int']>;
  /** Alias for `blendAlpha`. */
  blendalpha?: Maybe<Scalars['Int']>;
  /** Alias for `blendAlpha`. */
  balph?: Maybe<Scalars['Int']>;
  /** Specifies a color to use when applying the blend. [See docs](https://docs.imgix.com/apis/url/blending/blend-color). */
  blendColor?: Maybe<Scalars['String']>;
  /** Alias for `blendColor`. */
  blendcolor?: Maybe<Scalars['String']>;
  /** Alias for `blendColor`. */
  blendClr?: Maybe<Scalars['String']>;
  /** Alias for `blendColor`. */
  blendclr?: Maybe<Scalars['String']>;
  /** Specifies the type of crop for blend images. [See docs](https://docs.imgix.com/apis/url/blending/blend-crop). */
  blendCrop?: Maybe<Scalars['String']>;
  /** Alias for `blendCrop`. */
  blendcrop?: Maybe<Scalars['String']>;
  /** Alias for `blendCrop`. */
  bc?: Maybe<Scalars['String']>;
  /** Specifies the fit mode for blend images. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/blending/blend-fit). */
  blendFit?: Maybe<Scalars['String']>;
  /** Alias for `blendFit`. */
  blendfit?: Maybe<Scalars['String']>;
  /** Alias for `blendFit`. */
  bf?: Maybe<Scalars['String']>;
  /** Adjusts the height of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-h). */
  blendH?: Maybe<Scalars['Int']>;
  /** Alias for `blendH`. */
  blendh?: Maybe<Scalars['Int']>;
  /** Alias for `blendH`. */
  bh?: Maybe<Scalars['Int']>;
  /** Sets the blend mode for a blend image. Default: `overlay`. [See docs](https://docs.imgix.com/apis/url/blending/blend-mode). */
  blendMode?: Maybe<Scalars['String']>;
  /** Alias for `blendMode`. */
  blendmode?: Maybe<Scalars['String']>;
  /** Alias for `blendMode`. */
  bm?: Maybe<Scalars['String']>;
  /** Applies padding to the blend image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-pad). */
  blendPad?: Maybe<Scalars['Int']>;
  /** Alias for `blendPad`. */
  blendpad?: Maybe<Scalars['Int']>;
  /** Alias for `blendPad`. */
  bp?: Maybe<Scalars['Int']>;
  /** Adjusts the size of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-size). */
  blendSize?: Maybe<Scalars['String']>;
  /** Alias for `blendSize`. */
  blendsize?: Maybe<Scalars['String']>;
  /** Alias for `blendSize`. */
  bs?: Maybe<Scalars['String']>;
  /** Adjusts the width of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-w). */
  blendW?: Maybe<Scalars['Int']>;
  /** Alias for `blendW`. */
  blendw?: Maybe<Scalars['Int']>;
  /** Alias for `blendW`. */
  bw?: Maybe<Scalars['Int']>;
  /** Adjusts the x-offset of the blend image relative to its parent. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-x). */
  blendX?: Maybe<Scalars['Int']>;
  /** Alias for `blendX`. */
  blendx?: Maybe<Scalars['Int']>;
  /** Alias for `blendX`. */
  bx?: Maybe<Scalars['Int']>;
  /** Adjusts the y-offset of the blend image relative to its parent. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-y). */
  blendY?: Maybe<Scalars['Int']>;
  /** Alias for `blendY`. */
  blendy?: Maybe<Scalars['Int']>;
  /** Alias for `blendY`. */
  by?: Maybe<Scalars['Int']>;
  /** Specifies the location of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend). */
  blend?: Maybe<Scalars['String']>;
  /** Alias for `blend`. */
  b?: Maybe<Scalars['String']>;
  /** Applies a gaussian blur to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/blur). */
  blur?: Maybe<Scalars['Int']>;
  /** Sets bottom border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-bottom). */
  borderBottom?: Maybe<Scalars['Int']>;
  /** Sets left border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-left). */
  borderLeft?: Maybe<Scalars['Int']>;
  /** Sets the inner radius of the image's border in pixels. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner). */
  borderRadiusInner?: Maybe<Scalars['String']>;
  /** Sets the outer radius of the image's border in pixels. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-radius). */
  borderRadius?: Maybe<Scalars['String']>;
  /** Sets right border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-right). */
  borderRight?: Maybe<Scalars['Int']>;
  /** Sets top border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-top). */
  borderTop?: Maybe<Scalars['Int']>;
  /** Applies a border to an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border). */
  border?: Maybe<Scalars['String']>;
  /** Adjusts the brightness of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/bri). */
  bri?: Maybe<Scalars['Int']>;
  /** Sets one or more Client-Hints headers. [See docs](https://docs.imgix.com/apis/url/format/ch). */
  ch?: Maybe<Scalars['String']>;
  /** Specifies the output chroma subsampling rate. Default: `420`. [See docs](https://docs.imgix.com/apis/url/format/chromasub). */
  chromasub?: Maybe<Scalars['Int']>;
  /** Limits the number of unique colors in an image. [See docs](https://docs.imgix.com/apis/url/format/colorquant). */
  colorquant?: Maybe<Scalars['Int']>;
  /** Specifies how many colors to include in a palette-extraction response. Default: `6`. [See docs](https://docs.imgix.com/apis/url/color-palette/colors). */
  colors?: Maybe<Scalars['Int']>;
  /** Adjusts the contrast of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/con). */
  con?: Maybe<Scalars['Int']>;
  /** Specifies the radius value for a rounded corner mask. [See docs](https://docs.imgix.com/apis/url/mask/corner-radius). */
  cornerRadius?: Maybe<Scalars['String']>;
  /** Specifies how to crop an image. [See docs](https://docs.imgix.com/apis/url/size/crop). */
  crop?: Maybe<Scalars['String']>;
  /** Specifies the color space of the output image. [See docs](https://docs.imgix.com/apis/url/format/cs). */
  cs?: Maybe<Scalars['String']>;
  /** Forces a URL to use send-file in its response. [See docs](https://docs.imgix.com/apis/url/format/dl). */
  dl?: Maybe<Scalars['String']>;
  /** Sets the DPI value in the EXIF header. [See docs](https://docs.imgix.com/apis/url/format/dpi). */
  dpi?: Maybe<Scalars['Int']>;
  /** Adjusts the device-pixel ratio of the output image. Default: `1`. [See docs](https://docs.imgix.com/apis/url/dpr). */
  dpr?: Maybe<Scalars['Float']>;
  /** Changes the alpha of the duotone effect atop the source image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/stylize/duotone-alpha). */
  duotoneAlpha?: Maybe<Scalars['Int']>;
  /** Applies a duotone effect to the source image. [See docs](https://docs.imgix.com/apis/url/stylize/duotone). */
  duotone?: Maybe<Scalars['String']>;
  /** Adjusts the exposure of the output image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/exp). */
  exp?: Maybe<Scalars['Int']>;
  /** A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code. [See docs](https://docs.imgix.com/apis/url/expires). */
  expires?: Maybe<Scalars['String']>;
  /** Selects a face to crop to. [See docs](https://docs.imgix.com/apis/url/face-detection/faceindex). */
  faceindex?: Maybe<Scalars['Int']>;
  /** Adjusts padding around a selected face. Default: `1`. [See docs](https://docs.imgix.com/apis/url/face-detection/facepad). */
  facepad?: Maybe<Scalars['Float']>;
  /** Specifies that face data should be included in output when combined with `fm=json`. [See docs](https://docs.imgix.com/apis/url/face-detection/faces). */
  faces?: Maybe<Scalars['Int']>;
  /** Sets the fill color for images with additional space created by the fit setting. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/fill/fill-color). */
  fillColor?: Maybe<Scalars['String']>;
  /** Alias for `fillColor`. */
  fillcolor?: Maybe<Scalars['String']>;
  /** Determines how to fill in additional space created by the fit setting. [See docs](https://docs.imgix.com/apis/url/fill/fill). */
  fill?: Maybe<Scalars['String']>;
  /** Specifies how to map the source image to the output image dimensions. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/size/fit). */
  fit?: Maybe<Scalars['String']>;
  /** Alias for `fit`. */
  f?: Maybe<Scalars['String']>;
  /** Flips an image on a specified axis. [See docs](https://docs.imgix.com/apis/url/rotation/flip). */
  flip?: Maybe<Scalars['String']>;
  /** Changes the format of the output image. [See docs](https://docs.imgix.com/apis/url/format/fm). */
  fm?: Maybe<Scalars['String']>;
  /** Displays crosshairs identifying the location of the set focal point. Default: `false`. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug). */
  fpDebug?: Maybe<Scalars['Boolean']>;
  /** Sets the relative horizontal value for the focal point of an image. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x). */
  fpX?: Maybe<Scalars['Int']>;
  /** Sets the relative vertical value for the focal point of an image. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y). */
  fpY?: Maybe<Scalars['Int']>;
  /** Sets the relative zoom value for the focal point of an image. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z). */
  fpZ?: Maybe<Scalars['Float']>;
  /** Adjusts the gamma of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/gam). */
  gam?: Maybe<Scalars['Int']>;
  /** Sets grid colors for the transparency checkerboard grid. */
  gridColors?: Maybe<Scalars['String']>;
  /** Sets grid size for the transparency checkerboard grid. */
  gridSize?: Maybe<Scalars['Int']>;
  /** Adjusts the height of the output image. [See docs](https://docs.imgix.com/apis/url/size/h). */
  h?: Maybe<Scalars['Int']>;
  /** Alias for `h`. */
  height?: Maybe<Scalars['Int']>;
  /** Adjusts the highlights of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/high). */
  high?: Maybe<Scalars['Int']>;
  /** Applies a half-tone effect to the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/htn). */
  htn?: Maybe<Scalars['Int']>;
  /** Adjusts the hue of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/hue). */
  hue?: Maybe<Scalars['Int']>;
  /** Inverts the colors on the source image. Default: `false`. [See docs](https://docs.imgix.com/apis/url/adjustment/invert). */
  invert?: Maybe<Scalars['Boolean']>;
  /** Alias for `invert`. */
  inv?: Maybe<Scalars['Boolean']>;
  /** Specifies that the output image should be a lossless variant. Default: `false`. [See docs](https://docs.imgix.com/apis/url/format/lossless). */
  lossless?: Maybe<Scalars['Boolean']>;
  /** Changes the watermark alignment relative to the parent image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-align). */
  markAlign?: Maybe<Scalars['String']>;
  /** Alias for `markAlign`. */
  ma?: Maybe<Scalars['String']>;
  /** Alias for `markAlign`. */
  markalign?: Maybe<Scalars['String']>;
  /** Changes the alpha of the watermark image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-alpha). */
  markAlpha?: Maybe<Scalars['Int']>;
  /** Alias for `markAlpha`. */
  markalpha?: Maybe<Scalars['Int']>;
  /** Alias for `markAlpha`. */
  malph?: Maybe<Scalars['Int']>;
  /** Changes base URL of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-base). */
  markBase?: Maybe<Scalars['String']>;
  /** Alias for `markBase`. */
  mb?: Maybe<Scalars['String']>;
  /** Alias for `markBase`. */
  markbase?: Maybe<Scalars['String']>;
  /** Specifies the fit mode for watermark images. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-fit). */
  markFit?: Maybe<Scalars['String']>;
  /** Alias for `markFit`. */
  mf?: Maybe<Scalars['String']>;
  /** Alias for `markFit`. */
  markfit?: Maybe<Scalars['String']>;
  /** Adjusts the height of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-h). */
  markH?: Maybe<Scalars['Int']>;
  /** Alias for `markH`. */
  mh?: Maybe<Scalars['Int']>;
  /** Alias for `markH`. */
  markh?: Maybe<Scalars['Int']>;
  /** Applies padding to the watermark image. Default: `5`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-pad). */
  markPad?: Maybe<Scalars['Int']>;
  /** Alias for `markPad`. */
  mp?: Maybe<Scalars['Int']>;
  /** Alias for `markPad`. */
  markpad?: Maybe<Scalars['Int']>;
  /** Rotates a watermark or tiled watermarks by a specified number of degrees. Default: `0`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-rot). */
  markRot?: Maybe<Scalars['Float']>;
  /** Adjusts the scale of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-scale). */
  markScale?: Maybe<Scalars['Int']>;
  /** Alias for `markScale`. */
  ms?: Maybe<Scalars['Int']>;
  /** Alias for `markScale`. */
  markscale?: Maybe<Scalars['Int']>;
  /** Adds tiled watermark. [See docs](https://docs.imgix.com/apis/url/watermark/mark-tile). */
  markTile?: Maybe<Scalars['String']>;
  /** Alias for `markTile`. */
  mtile?: Maybe<Scalars['String']>;
  /** Alias for `markTile`. */
  marktile?: Maybe<Scalars['String']>;
  /** Adjusts the width of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-w). */
  markW?: Maybe<Scalars['Int']>;
  /** Alias for `markW`. */
  mw?: Maybe<Scalars['Int']>;
  /** Alias for `markW`. */
  markw?: Maybe<Scalars['Int']>;
  /** Adjusts the x-offset of the watermark image relative to its parent. [See docs](https://docs.imgix.com/apis/url/watermark/mark-x). */
  markX?: Maybe<Scalars['Int']>;
  /** Alias for `markX`. */
  mx?: Maybe<Scalars['Int']>;
  /** Alias for `markX`. */
  markx?: Maybe<Scalars['Int']>;
  /** Adjusts the y-offset of the watermark image relative to its parent. [See docs](https://docs.imgix.com/apis/url/watermark/mark-y). */
  markY?: Maybe<Scalars['Int']>;
  /** Alias for `markY`. */
  my?: Maybe<Scalars['Int']>;
  /** Alias for `markY`. */
  marky?: Maybe<Scalars['Int']>;
  /** Specifies the location of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark). */
  mark?: Maybe<Scalars['String']>;
  /** Alias for `mark`. */
  m?: Maybe<Scalars['String']>;
  /** Colors the background of the transparent mask area of images. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/mask/mask-bg). */
  maskBg?: Maybe<Scalars['String']>;
  /** Alias for `maskBg`. */
  maskbg?: Maybe<Scalars['String']>;
  /** Defines the type of mask and specifies the URL if that type is selected. [See docs](https://docs.imgix.com/apis/url/mask). */
  mask?: Maybe<Scalars['String']>;
  /** Specifies the maximum height of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/max-height). */
  maxH?: Maybe<Scalars['Int']>;
  /** Alias for `maxH`. */
  maxHeight?: Maybe<Scalars['Int']>;
  /** Specifies the maximum width of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/max-width). */
  maxW?: Maybe<Scalars['Int']>;
  /** Alias for `maxW`. */
  maxWidth?: Maybe<Scalars['Int']>;
  /** Specifies the minimum height of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/min-height). */
  minH?: Maybe<Scalars['Int']>;
  /** Alias for `minH`. */
  minHeight?: Maybe<Scalars['Int']>;
  /** Specifies the minimum width of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/min-width). */
  minW?: Maybe<Scalars['Int']>;
  /** Alias for `minW`. */
  minWidth?: Maybe<Scalars['Int']>;
  /** Applies a monochrome effect to the source image. [See docs](https://docs.imgix.com/apis/url/stylize/monochrome). */
  monochrome?: Maybe<Scalars['String']>;
  /** Alias for `monochrome`. */
  mono?: Maybe<Scalars['String']>;
  /** Reduces the noise in an image. Default: `20`. [See docs](https://docs.imgix.com/apis/url/noise-reduction/nr). */
  nr?: Maybe<Scalars['Int']>;
  /** Provides a threshold by which to sharpen an image. Default: `20`. [See docs](https://docs.imgix.com/apis/url/noise-reduction/nrs). */
  nrs?: Maybe<Scalars['Int']>;
  /** Changes the image orientation. [See docs](https://docs.imgix.com/apis/url/rotation/orient). */
  orient?: Maybe<Scalars['Int']>;
  /** Alias for `orient`. */
  or?: Maybe<Scalars['Int']>;
  /** Sets bottom padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-bottom). */
  padBottom?: Maybe<Scalars['Int']>;
  /** Sets left padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-left). */
  padLeft?: Maybe<Scalars['Int']>;
  /** Sets right padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-right). */
  padRight?: Maybe<Scalars['Int']>;
  /** Sets top padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-top). */
  padTop?: Maybe<Scalars['Int']>;
  /** Pads an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad). */
  pad?: Maybe<Scalars['Int']>;
  /** Selects a page from a PDF for display. Default: `1`. [See docs](https://docs.imgix.com/apis/url/pdf/page). */
  page?: Maybe<Scalars['Int']>;
  /** Specifies an output format for palette-extraction. [See docs](https://docs.imgix.com/apis/url/color-palette/palette). */
  palette?: Maybe<Scalars['String']>;
  /** Enables or disables PDF annotation. Default: `true`. [See docs](https://docs.imgix.com/apis/url/pdf/pdf-annotation). */
  pdfAnnotation?: Maybe<Scalars['Boolean']>;
  /** Alias for `pdfAnnotation`. */
  annotation?: Maybe<Scalars['Boolean']>;
  /** Specifies a CSS prefix for all classes in palette-extraction. Default: `image`. [See docs](https://docs.imgix.com/apis/url/color-palette/prefix). */
  prefix?: Maybe<Scalars['String']>;
  /** Applies a pixelation effect to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/px). */
  px?: Maybe<Scalars['Int']>;
  /** Adjusts the quality of an output image. Default: `75`. [See docs](https://docs.imgix.com/apis/url/format/q). */
  q?: Maybe<Scalars['Int']>;
  /** Crops an image to a specified rectangle. [See docs](https://docs.imgix.com/apis/url/size/rect). */
  rect?: Maybe<Scalars['String']>;
  /** Rotates an image by a specified number of degrees. Default: `0`. [See docs](https://docs.imgix.com/apis/url/rotation/rot). */
  rot?: Maybe<Scalars['Float']>;
  /** Adjusts the saturation of an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/sat). */
  sat?: Maybe<Scalars['Int']>;
  /** Applies a sepia effect to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/sepia). */
  sepia?: Maybe<Scalars['Int']>;
  /** Adjusts the highlights of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/shad). */
  shad?: Maybe<Scalars['Float']>;
  /** Adjusts the sharpness of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/sharp). */
  sharp?: Maybe<Scalars['Float']>;
  /** Adds checkerboard behind images which support transparency. [See docs](https://docs.imgix.com/apis/url/fill/transparency). */
  transparency?: Maybe<Scalars['String']>;
  /** Specifies a trim color on a trim operation. [See docs](https://docs.imgix.com/apis/url/trim/trim-color). */
  trimColor?: Maybe<Scalars['String']>;
  /** Alias for `trimColor`. */
  trimcolor?: Maybe<Scalars['String']>;
  /** Specifies the mean difference on a trim operation. Default: `11`. [See docs](https://docs.imgix.com/apis/url/trim/trim-md). */
  trimMd?: Maybe<Scalars['Float']>;
  /** Alias for `trimMd`. */
  trimmd?: Maybe<Scalars['Float']>;
  /** Pads the area of the source image before trimming. Default: `0`. [See docs](https://docs.imgix.com/apis/url/trim/trim-pad). */
  trimPad?: Maybe<Scalars['Int']>;
  /** Alias for `trimPad`. */
  trimpad?: Maybe<Scalars['Int']>;
  /** Specifies the standard deviation on a trim operation. Default: `10`. [See docs](https://docs.imgix.com/apis/url/trim/trim-sd). */
  trimSd?: Maybe<Scalars['Float']>;
  /** Alias for `trimSd`. */
  trimsd?: Maybe<Scalars['Float']>;
  /** Specifies the tolerance on a trim operation. Default: `0`. [See docs](https://docs.imgix.com/apis/url/trim/trim-tol). */
  trimTol?: Maybe<Scalars['Float']>;
  /** Alias for `trimTol`. */
  trimtol?: Maybe<Scalars['Float']>;
  /** Trims the source image. [See docs](https://docs.imgix.com/apis/url/trim/trim). */
  trim?: Maybe<Scalars['String']>;
  /** Sets the vertical and horizontal alignment of rendered text relative to the base image. [See docs](https://docs.imgix.com/apis/url/text/txt-align). */
  txtAlign?: Maybe<Scalars['String']>;
  /** Alias for `txtAlign`. */
  txtalign?: Maybe<Scalars['String']>;
  /** Alias for `txtAlign`. */
  ta?: Maybe<Scalars['String']>;
  /** Sets the clipping properties of rendered text. Default: `end`. [See docs](https://docs.imgix.com/apis/url/text/txt-clip). */
  txtClip?: Maybe<Scalars['String']>;
  /** Alias for `txtClip`. */
  txtclip?: Maybe<Scalars['String']>;
  /** Alias for `txtClip`. */
  tcl?: Maybe<Scalars['String']>;
  /** Specifies the color of rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-color). */
  txtColor?: Maybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  txtcolor?: Maybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  txtClr?: Maybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  txtclr?: Maybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  tc?: Maybe<Scalars['String']>;
  /** Specifies the fit approach for rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-fit). */
  txtFit?: Maybe<Scalars['String']>;
  /** Alias for `txtFit`. */
  txtfit?: Maybe<Scalars['String']>;
  /** Selects a font for rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-font). */
  txtFont?: Maybe<Scalars['String']>;
  /** Alias for `txtFont`. */
  tf?: Maybe<Scalars['String']>;
  /** Alias for `txtFont`. */
  txtfont?: Maybe<Scalars['String']>;
  /** Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint. Default: `0`. [See docs](https://docs.imgix.com/apis/url/typesetting/txt-lead). */
  txtLead?: Maybe<Scalars['Int']>;
  /** Alias for `txtLead`. */
  txtlead?: Maybe<Scalars['Int']>;
  /** Controls the level of ligature substitution. [See docs](https://docs.imgix.com/apis/url/text/txt-lig). */
  txtLig?: Maybe<Scalars['Int']>;
  /** Alias for `txtLig`. */
  txtlig?: Maybe<Scalars['Int']>;
  /** Specifies a text outline color. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/text/txt-line-color). */
  txtLineColor?: Maybe<Scalars['String']>;
  /** Alias for `txtLineColor`. */
  txtlinecolor?: Maybe<Scalars['String']>;
  /** Alias for `txtLineColor`. */
  txtLineClr?: Maybe<Scalars['String']>;
  /** Alias for `txtLineColor`. */
  txtlineclr?: Maybe<Scalars['String']>;
  /** Outlines the rendered text with a specified color. Default: `0`. [See docs](https://docs.imgix.com/apis/url/text/txt-line). */
  txtLine?: Maybe<Scalars['Int']>;
  /** Alias for `txtLine`. */
  txtline?: Maybe<Scalars['Int']>;
  /** Alias for `txtLine`. */
  tl?: Maybe<Scalars['Int']>;
  /** Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image. [See docs](https://docs.imgix.com/apis/url/text/txt-pad). */
  txtPad?: Maybe<Scalars['Int']>;
  /** Alias for `txtPad`. */
  txtpad?: Maybe<Scalars['Int']>;
  /** Alias for `txtPad`. */
  tp?: Maybe<Scalars['Int']>;
  /** Applies a shadow to rendered text. Default: `0`. [See docs](https://docs.imgix.com/apis/url/text/txt-shad). */
  txtShad?: Maybe<Scalars['Float']>;
  /** Alias for `txtShad`. */
  txtshad?: Maybe<Scalars['Float']>;
  /** Alias for `txtShad`. */
  tsh?: Maybe<Scalars['Float']>;
  /** Sets the font size of rendered text. Default: `12`. [See docs](https://docs.imgix.com/apis/url/text/txt-size). */
  txtSize?: Maybe<Scalars['Int']>;
  /** Alias for `txtSize`. */
  tsz?: Maybe<Scalars['Int']>;
  /** Alias for `txtSize`. */
  txtsize?: Maybe<Scalars['Int']>;
  /** Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint. Default: `0`. [See docs](https://docs.imgix.com/apis/url/typesetting/txt-track). */
  txtTrack?: Maybe<Scalars['Int']>;
  /** Alias for `txtTrack`. */
  txttrack?: Maybe<Scalars['Int']>;
  /** Alias for `txtTrack`. */
  tt?: Maybe<Scalars['Int']>;
  /** Sets the width of rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-width). */
  txtWidth?: Maybe<Scalars['Int']>;
  /** Alias for `txtWidth`. */
  txtwidth?: Maybe<Scalars['Int']>;
  /** Sets the text string to render. [See docs](https://docs.imgix.com/apis/url/text/txt). */
  txt?: Maybe<Scalars['String']>;
  /** Alias for `txt`. */
  t?: Maybe<Scalars['String']>;
  /** Sharpens the source image using an unsharp mask. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/usm). */
  usm?: Maybe<Scalars['Int']>;
  /** Specifies the radius for an unsharp mask operation. Default: `2.5`. [See docs](https://docs.imgix.com/apis/url/adjustment/usmrad). */
  usmrad?: Maybe<Scalars['Float']>;
  /** Adjusts the vibrance of an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/vib). */
  vib?: Maybe<Scalars['Int']>;
  /** Adjusts the width of the output image. [See docs](https://docs.imgix.com/apis/url/size/w). */
  w?: Maybe<Scalars['Int']>;
  /** Alias for `w`. */
  width?: Maybe<Scalars['Int']>;
};

/** An image thumbnail with constraints. */
export type PrismicImageThumbnailType = PrismicImageInterface & {
  __typename?: 'PrismicImageThumbnailType';
  alt?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  dimensions?: Maybe<PrismicImageDimensionsType>;
  url?: Maybe<Scalars['String']>;
  fixed?: Maybe<PrismicImageFixedType>;
  fluid?: Maybe<PrismicImageFluidType>;
  localFile?: Maybe<File>;
};

/** An image thumbnail with constraints. */
export type PrismicImageThumbnailTypeUrlArgs = {
  imgixParams?: Maybe<ImgixUrlParamsInput>;
};

/** An image thumbnail with constraints. */
export type PrismicImageThumbnailTypeFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixUrlParamsInput>;
  placeholderImgixParams?: Maybe<ImgixUrlParamsInput>;
};

/** An image thumbnail with constraints. */
export type PrismicImageThumbnailTypeFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  imgixParams?: Maybe<ImgixUrlParamsInput>;
  placeholderImgixParams?: Maybe<ImgixUrlParamsInput>;
};

/** A text field with formatting options. */
export type PrismicStructuredTextType = {
  __typename?: 'PrismicStructuredTextType';
  /** The HTML value of the text using `prismic-dom` and the HTML serializer. */
  html?: Maybe<Scalars['String']>;
  /** The plain text value of the text using `prismic-dom`. */
  text?: Maybe<Scalars['String']>;
  /** The field's value without transformations exactly as it comes from the Prismic API. */
  raw?: Maybe<Scalars['JSON']>;
};

/** A field for storing geo-coordinates. */
export type PrismicGeoPointType = {
  __typename?: 'PrismicGeoPointType';
  /** The latitude value of the geo-coordinate. */
  latitude?: Maybe<Scalars['Float']>;
  /** The longitude value of the geo-coordinate. */
  longitude?: Maybe<Scalars['Float']>;
};

/** Embed videos, songs, tweets, slices, etc. */
export type PrismicEmbedType = {
  __typename?: 'PrismicEmbedType';
  /** The ID of the resource author. Fetched via oEmbed data. */
  author_id?: Maybe<Scalars['ID']>;
  /** The name of the author/owner of the resource. Fetched via oEmbed data. */
  author_name?: Maybe<Scalars['String']>;
  /** A URL for the author/owner of the resource. Fetched via oEmbed data. */
  author_url?: Maybe<Scalars['String']>;
  /** The suggested cache lifetime for this resource, in seconds. Consumers may choose to use this value or not. Fetched via oEmbed data. */
  cache_age?: Maybe<Scalars['String']>;
  /** The URL of the resource. */
  embed_url?: Maybe<Scalars['String']>;
  /** The HTML required to display the resource. The HTML should have no padding or margins. Consumers may wish to load the HTML in an off-domain iframe to avoid XSS vulnerabilities. Fetched via oEmbed data. */
  html?: Maybe<Scalars['String']>;
  /** The name of the resource. */
  name?: Maybe<Scalars['String']>;
  /** The name of the resource provider. Fetched via oEmbed data. */
  provider_name?: Maybe<Scalars['String']>;
  /** The URL of the resource provider. Fetched via oEmbed data. */
  provider_url?: Maybe<Scalars['String']>;
  /** The width of the resource's thumbnail. Fetched via oEmbed data. */
  thumbnail_height?: Maybe<Scalars['Int']>;
  /** A URL to a thumbnail image representing the resource. Fetched via oEmbed data. */
  thumbnail_url?: Maybe<Scalars['String']>;
  /** The width of the resource's thumbnail. Fetched via oEmbed data. */
  thumbnail_width?: Maybe<Scalars['Int']>;
  /** A text title, describing the resource. Fetched via oEmbed data. */
  title?: Maybe<Scalars['String']>;
  /** The resource type. Fetched via oEmbed data. */
  type?: Maybe<Scalars['String']>;
  /** The oEmbed version number. */
  version?: Maybe<Scalars['String']>;
  /** The source URL of the resource. Fetched via oEmbed data. */
  url?: Maybe<Scalars['String']>;
  /** The width in pixel of the resource. Fetched via oEmbed data. */
  width?: Maybe<Scalars['Int']>;
  /** The height in pixel of the resource. Fetched via oEmbed data. */
  height?: Maybe<Scalars['Int']>;
  /** The ID of the resource media. Fetched via oEmbed data. */
  media_id?: Maybe<Scalars['ID']>;
  /** A description for the resource. */
  description?: Maybe<Scalars['String']>;
  /** The ID of a video. */
  video_id?: Maybe<Scalars['ID']>;
};

/** Dimensions for images. */
export type PrismicImageDimensionsType = {
  __typename?: 'PrismicImageDimensionsType';
  /** Width of the image in pixels. */
  width: Scalars['Int'];
  /** Height of the image in pixels. */
  height: Scalars['Int'];
};

/** Types of links. */
export enum PrismicLinkTypes {
  /** Any of the other types */
  Any = 'Any',
  /** Internal content */
  Document = 'Document',
  /** Internal media content */
  Media = 'Media',
  /** URL */
  Web = 'Web',
}

/** Link to web, media, and internal content. */
export type PrismicLinkType = {
  __typename?: 'PrismicLinkType';
  /** The type of link. */
  link_type: PrismicLinkTypes;
  /** If a Document link, `true` if linked document does not exist, `false` otherwise. */
  isBroken?: Maybe<Scalars['Boolean']>;
  /** The document's URL derived via the link resolver. */
  url?: Maybe<Scalars['String']>;
  /** The link's target. */
  target?: Maybe<Scalars['String']>;
  /** If a Media link, the size of the file. */
  size?: Maybe<Scalars['Int']>;
  /** If a Document link, the linked document's Prismic ID. */
  id?: Maybe<Scalars['ID']>;
  /** If a Document link, the linked document's Prismic custom type API ID */
  type?: Maybe<Scalars['String']>;
  /** If a Document link, the linked document's list of tags. */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** If a Document link, the linked document's language. */
  lang?: Maybe<Scalars['String']>;
  /** If a Document link, the linked document's slug. */
  slug?: Maybe<Scalars['String']>;
  /** If a Document link, the linked document's UID. */
  uid?: Maybe<Scalars['String']>;
  /** If a Document link, the linked document. */
  document?: Maybe<PrismicAllDocumentTypes>;
  /** The field's value without transformations exactly as it comes from the Prismic API. */
  raw?: Maybe<Scalars['JSON']>;
};

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};

export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginPluginOptions = {
  __typename?: 'SitePluginPluginOptions';
  plugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>;
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  pathToConfigModule?: Maybe<Scalars['String']>;
  sourceMap?: Maybe<Scalars['Boolean']>;
  autoLabel?: Maybe<Scalars['String']>;
  labelFormat?: Maybe<Scalars['String']>;
  cssPropOptimization?: Maybe<Scalars['Boolean']>;
  base64Width?: Maybe<Scalars['Int']>;
  stripMetadata?: Maybe<Scalars['Boolean']>;
  defaultQuality?: Maybe<Scalars['Int']>;
  failOnError?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  showSpinner?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  apiUrl?: Maybe<Scalars['String']>;
  contentApiKey?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  lookup?: Maybe<Array<Maybe<SitePluginPluginOptionsLookup>>>;
  verbose?: Maybe<Scalars['Boolean']>;
  repositoryName?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  schemas?: Maybe<SitePluginPluginOptionsSchemas>;
  output?: Maybe<Scalars['String']>;
  createLinkInHead?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  includeInDevelopment?: Maybe<Scalars['Boolean']>;
  routeChangeEventName?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsPlugins = {
  __typename?: 'SitePluginPluginOptionsPlugins';
  resolve?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginFilepath?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsLookup = {
  __typename?: 'SitePluginPluginOptionsLookup';
  type?: Maybe<Scalars['String']>;
  imgTags?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsSchemas = {
  __typename?: 'SitePluginPluginOptionsSchemas';
  homepage?: Maybe<SitePluginPluginOptionsSchemasHomepage>;
  contact?: Maybe<SitePluginPluginOptionsSchemasContact>;
  page?: Maybe<SitePluginPluginOptionsSchemasPage>;
  product?: Maybe<SitePluginPluginOptionsSchemasProduct>;
  menu?: Maybe<SitePluginPluginOptionsSchemasMenu>;
};

export type SitePluginPluginOptionsSchemasHomepage = {
  __typename?: 'SitePluginPluginOptionsSchemasHomepage';
  Main?: Maybe<SitePluginPluginOptionsSchemasHomepageMain>;
};

export type SitePluginPluginOptionsSchemasHomepageMain = {
  __typename?: 'SitePluginPluginOptionsSchemasHomepageMain';
  jumbotron_slider?: Maybe<SitePluginPluginOptionsSchemasHomepageMainJumbotron_Slider>;
  body?: Maybe<SitePluginPluginOptionsSchemasHomepageMainBody>;
};

export type SitePluginPluginOptionsSchemasHomepageMainJumbotron_Slider = {
  __typename?: 'SitePluginPluginOptionsSchemasHomepageMainJumbotron_slider';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomepageMainJumbotron_SliderConfig>;
};

export type SitePluginPluginOptionsSchemasHomepageMainJumbotron_SliderConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomepageMainJumbotron_sliderConfig';
  fields?: Maybe<SitePluginPluginOptionsSchemasHomepageMainJumbotron_SliderConfigFields>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomepageMainJumbotron_SliderConfigFields = {
  __typename?: 'SitePluginPluginOptionsSchemasHomepageMainJumbotron_sliderConfigFields';
  image?: Maybe<SitePluginPluginOptionsSchemasHomepageMainJumbotron_SliderConfigFieldsImage>;
  title?: Maybe<SitePluginPluginOptionsSchemasHomepageMainJumbotron_SliderConfigFieldsTitle>;
  content?: Maybe<SitePluginPluginOptionsSchemasHomepageMainJumbotron_SliderConfigFieldsContent>;
  link?: Maybe<SitePluginPluginOptionsSchemasHomepageMainJumbotron_SliderConfigFieldsLink>;
};

export type SitePluginPluginOptionsSchemasHomepageMainJumbotron_SliderConfigFieldsImage = {
  __typename?: 'SitePluginPluginOptionsSchemasHomepageMainJumbotron_sliderConfigFieldsImage';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomepageMainJumbotron_SliderConfigFieldsImageConfig>;
};

export type SitePluginPluginOptionsSchemasHomepageMainJumbotron_SliderConfigFieldsImageConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomepageMainJumbotron_sliderConfigFieldsImageConfig';
  constraint?: Maybe<SitePluginPluginOptionsSchemasHomepageMainJumbotron_SliderConfigFieldsImageConfigConstraint>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomepageMainJumbotron_SliderConfigFieldsImageConfigConstraint = {
  __typename?: 'SitePluginPluginOptionsSchemasHomepageMainJumbotron_sliderConfigFieldsImageConfigConstraint';
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsSchemasHomepageMainJumbotron_SliderConfigFieldsTitle = {
  __typename?: 'SitePluginPluginOptionsSchemasHomepageMainJumbotron_sliderConfigFieldsTitle';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomepageMainJumbotron_SliderConfigFieldsTitleConfig>;
};

export type SitePluginPluginOptionsSchemasHomepageMainJumbotron_SliderConfigFieldsTitleConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomepageMainJumbotron_sliderConfigFieldsTitleConfig';
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomepageMainJumbotron_SliderConfigFieldsContent = {
  __typename?: 'SitePluginPluginOptionsSchemasHomepageMainJumbotron_sliderConfigFieldsContent';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomepageMainJumbotron_SliderConfigFieldsContentConfig>;
};

export type SitePluginPluginOptionsSchemasHomepageMainJumbotron_SliderConfigFieldsContentConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomepageMainJumbotron_sliderConfigFieldsContentConfig';
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomepageMainJumbotron_SliderConfigFieldsLink = {
  __typename?: 'SitePluginPluginOptionsSchemasHomepageMainJumbotron_sliderConfigFieldsLink';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomepageMainJumbotron_SliderConfigFieldsLinkConfig>;
};

export type SitePluginPluginOptionsSchemasHomepageMainJumbotron_SliderConfigFieldsLinkConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomepageMainJumbotron_sliderConfigFieldsLinkConfig';
  allowTargetBlank?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomepageMainBody = {
  __typename?: 'SitePluginPluginOptionsSchemasHomepageMainBody';
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomepageMainBodyConfig>;
};

export type SitePluginPluginOptionsSchemasHomepageMainBodyConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomepageMainBodyConfig';
  choices?: Maybe<SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoices>;
};

export type SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoices = {
  __typename?: 'SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoices';
  featured_contents?: Maybe<SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_Contents>;
};

export type SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_Contents = {
  __typename?: 'SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_contents';
  type?: Maybe<Scalars['String']>;
  fieldset?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsNon_Repeat>;
  repeat?: Maybe<SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsRepeat>;
};

export type SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsNon_Repeat = {
  __typename?: 'SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_contentsNon_repeat';
  title?: Maybe<SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsNon_RepeatTitle>;
  navigation_position?: Maybe<SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsNon_RepeatNavigation_Position>;
};

export type SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsNon_RepeatTitle = {
  __typename?: 'SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_contentsNon_repeatTitle';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsNon_RepeatTitleConfig>;
};

export type SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsNon_RepeatTitleConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_contentsNon_repeatTitleConfig';
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsNon_RepeatNavigation_Position = {
  __typename?: 'SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_contentsNon_repeatNavigation_position';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsNon_RepeatNavigation_PositionConfig>;
};

export type SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsNon_RepeatNavigation_PositionConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_contentsNon_repeatNavigation_positionConfig';
  placeholder_false?: Maybe<Scalars['String']>;
  placeholder_true?: Maybe<Scalars['String']>;
  default_value?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsRepeat = {
  __typename?: 'SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_contentsRepeat';
  image?: Maybe<SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsRepeatImage>;
  name?: Maybe<SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsRepeatName>;
  information?: Maybe<SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsRepeatInformation>;
};

export type SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsRepeatImage = {
  __typename?: 'SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_contentsRepeatImage';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsRepeatImageConfig>;
};

export type SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsRepeatImageConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_contentsRepeatImageConfig';
  constraint?: Maybe<SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsRepeatImageConfigConstraint>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsRepeatImageConfigConstraint = {
  __typename?: 'SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_contentsRepeatImageConfigConstraint';
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsRepeatName = {
  __typename?: 'SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_contentsRepeatName';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsRepeatNameConfig>;
};

export type SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsRepeatNameConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_contentsRepeatNameConfig';
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsRepeatInformation = {
  __typename?: 'SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_contentsRepeatInformation';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsRepeatInformationConfig>;
};

export type SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsRepeatInformationConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_contentsRepeatInformationConfig';
  multi?: Maybe<Scalars['String']>;
  allowTargetBlank?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasContact = {
  __typename?: 'SitePluginPluginOptionsSchemasContact';
  Main?: Maybe<SitePluginPluginOptionsSchemasContactMain>;
};

export type SitePluginPluginOptionsSchemasContactMain = {
  __typename?: 'SitePluginPluginOptionsSchemasContactMain';
  title?: Maybe<SitePluginPluginOptionsSchemasContactMainTitle>;
  phone_number?: Maybe<SitePluginPluginOptionsSchemasContactMainPhone_Number>;
  contact_email?: Maybe<SitePluginPluginOptionsSchemasContactMainContact_Email>;
  address?: Maybe<SitePluginPluginOptionsSchemasContactMainAddress>;
  address_geolocation?: Maybe<SitePluginPluginOptionsSchemasContactMainAddress_Geolocation>;
};

export type SitePluginPluginOptionsSchemasContactMainTitle = {
  __typename?: 'SitePluginPluginOptionsSchemasContactMainTitle';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasContactMainTitleConfig>;
};

export type SitePluginPluginOptionsSchemasContactMainTitleConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasContactMainTitleConfig';
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasContactMainPhone_Number = {
  __typename?: 'SitePluginPluginOptionsSchemasContactMainPhone_number';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasContactMainPhone_NumberConfig>;
};

export type SitePluginPluginOptionsSchemasContactMainPhone_NumberConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasContactMainPhone_numberConfig';
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasContactMainContact_Email = {
  __typename?: 'SitePluginPluginOptionsSchemasContactMainContact_email';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasContactMainContact_EmailConfig>;
};

export type SitePluginPluginOptionsSchemasContactMainContact_EmailConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasContactMainContact_emailConfig';
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasContactMainAddress = {
  __typename?: 'SitePluginPluginOptionsSchemasContactMainAddress';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasContactMainAddressConfig>;
};

export type SitePluginPluginOptionsSchemasContactMainAddressConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasContactMainAddressConfig';
  multi?: Maybe<Scalars['String']>;
  allowTargetBlank?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasContactMainAddress_Geolocation = {
  __typename?: 'SitePluginPluginOptionsSchemasContactMainAddress_geolocation';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasContactMainAddress_GeolocationConfig>;
};

export type SitePluginPluginOptionsSchemasContactMainAddress_GeolocationConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasContactMainAddress_geolocationConfig';
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPage = {
  __typename?: 'SitePluginPluginOptionsSchemasPage';
  Main?: Maybe<SitePluginPluginOptionsSchemasPageMain>;
};

export type SitePluginPluginOptionsSchemasPageMain = {
  __typename?: 'SitePluginPluginOptionsSchemasPageMain';
  uid?: Maybe<SitePluginPluginOptionsSchemasPageMainUid>;
  title?: Maybe<SitePluginPluginOptionsSchemasPageMainTitle>;
  subtitle?: Maybe<SitePluginPluginOptionsSchemasPageMainSubtitle>;
  banner?: Maybe<SitePluginPluginOptionsSchemasPageMainBanner>;
  content?: Maybe<SitePluginPluginOptionsSchemasPageMainContent>;
};

export type SitePluginPluginOptionsSchemasPageMainUid = {
  __typename?: 'SitePluginPluginOptionsSchemasPageMainUid';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainUidConfig>;
};

export type SitePluginPluginOptionsSchemasPageMainUidConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasPageMainUidConfig';
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageMainTitle = {
  __typename?: 'SitePluginPluginOptionsSchemasPageMainTitle';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainTitleConfig>;
};

export type SitePluginPluginOptionsSchemasPageMainTitleConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasPageMainTitleConfig';
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageMainSubtitle = {
  __typename?: 'SitePluginPluginOptionsSchemasPageMainSubtitle';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainSubtitleConfig>;
};

export type SitePluginPluginOptionsSchemasPageMainSubtitleConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasPageMainSubtitleConfig';
  single?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageMainBanner = {
  __typename?: 'SitePluginPluginOptionsSchemasPageMainBanner';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainBannerConfig>;
};

export type SitePluginPluginOptionsSchemasPageMainBannerConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasPageMainBannerConfig';
  constraint?: Maybe<SitePluginPluginOptionsSchemasPageMainBannerConfigConstraint>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasPageMainBannerConfigConstraint = {
  __typename?: 'SitePluginPluginOptionsSchemasPageMainBannerConfigConstraint';
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsSchemasPageMainContent = {
  __typename?: 'SitePluginPluginOptionsSchemasPageMainContent';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainContentConfig>;
};

export type SitePluginPluginOptionsSchemasPageMainContentConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasPageMainContentConfig';
  multi?: Maybe<Scalars['String']>;
  allowTargetBlank?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasProduct = {
  __typename?: 'SitePluginPluginOptionsSchemasProduct';
  Main?: Maybe<SitePluginPluginOptionsSchemasProductMain>;
};

export type SitePluginPluginOptionsSchemasProductMain = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMain';
  uid?: Maybe<SitePluginPluginOptionsSchemasProductMainUid>;
  title?: Maybe<SitePluginPluginOptionsSchemasProductMainTitle>;
  description?: Maybe<SitePluginPluginOptionsSchemasProductMainDescription>;
  features?: Maybe<SitePluginPluginOptionsSchemasProductMainFeatures>;
};

export type SitePluginPluginOptionsSchemasProductMainUid = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainUid';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasProductMainUidConfig>;
};

export type SitePluginPluginOptionsSchemasProductMainUidConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainUidConfig';
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasProductMainTitle = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainTitle';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasProductMainTitleConfig>;
};

export type SitePluginPluginOptionsSchemasProductMainTitleConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainTitleConfig';
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasProductMainDescription = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainDescription';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasProductMainDescriptionConfig>;
};

export type SitePluginPluginOptionsSchemasProductMainDescriptionConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainDescriptionConfig';
  multi?: Maybe<Scalars['String']>;
  allowTargetBlank?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasProductMainFeatures = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainFeatures';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasProductMainFeaturesConfig>;
};

export type SitePluginPluginOptionsSchemasProductMainFeaturesConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainFeaturesConfig';
  fields?: Maybe<SitePluginPluginOptionsSchemasProductMainFeaturesConfigFields>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasProductMainFeaturesConfigFields = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainFeaturesConfigFields';
  image?: Maybe<SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsImage>;
  name?: Maybe<SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsName>;
  type?: Maybe<SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsType>;
  information?: Maybe<SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsInformation>;
  link?: Maybe<SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsLink>;
};

export type SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsImage = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsImage';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsImageConfig>;
};

export type SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsImageConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsImageConfig';
  constraint?: Maybe<SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsImageConfigConstraint>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsImageConfigConstraint = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsImageConfigConstraint';
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsName = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsName';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsNameConfig>;
};

export type SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsNameConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsNameConfig';
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsType = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsType';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsTypeConfig>;
};

export type SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsTypeConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsTypeConfig';
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsInformation = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsInformation';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsInformationConfig>;
};

export type SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsInformationConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsInformationConfig';
  multi?: Maybe<Scalars['String']>;
  allowTargetBlank?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsLink = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsLink';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsLinkConfig>;
};

export type SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsLinkConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsLinkConfig';
  allowTargetBlank?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasMenu = {
  __typename?: 'SitePluginPluginOptionsSchemasMenu';
  Main?: Maybe<SitePluginPluginOptionsSchemasMenuMain>;
};

export type SitePluginPluginOptionsSchemasMenuMain = {
  __typename?: 'SitePluginPluginOptionsSchemasMenuMain';
  uid?: Maybe<SitePluginPluginOptionsSchemasMenuMainUid>;
  menus?: Maybe<SitePluginPluginOptionsSchemasMenuMainMenus>;
};

export type SitePluginPluginOptionsSchemasMenuMainUid = {
  __typename?: 'SitePluginPluginOptionsSchemasMenuMainUid';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasMenuMainUidConfig>;
};

export type SitePluginPluginOptionsSchemasMenuMainUidConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasMenuMainUidConfig';
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasMenuMainMenus = {
  __typename?: 'SitePluginPluginOptionsSchemasMenuMainMenus';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasMenuMainMenusConfig>;
};

export type SitePluginPluginOptionsSchemasMenuMainMenusConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasMenuMainMenusConfig';
  fields?: Maybe<SitePluginPluginOptionsSchemasMenuMainMenusConfigFields>;
  label?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasMenuMainMenusConfigFields = {
  __typename?: 'SitePluginPluginOptionsSchemasMenuMainMenusConfigFields';
  label?: Maybe<SitePluginPluginOptionsSchemasMenuMainMenusConfigFieldsLabel>;
  link?: Maybe<SitePluginPluginOptionsSchemasMenuMainMenusConfigFieldsLink>;
};

export type SitePluginPluginOptionsSchemasMenuMainMenusConfigFieldsLabel = {
  __typename?: 'SitePluginPluginOptionsSchemasMenuMainMenusConfigFieldsLabel';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasMenuMainMenusConfigFieldsLabelConfig>;
};

export type SitePluginPluginOptionsSchemasMenuMainMenusConfigFieldsLabelConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasMenuMainMenusConfigFieldsLabelConfig';
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsSchemasMenuMainMenusConfigFieldsLink = {
  __typename?: 'SitePluginPluginOptionsSchemasMenuMainMenusConfigFieldsLink';
  type?: Maybe<Scalars['String']>;
  config?: Maybe<SitePluginPluginOptionsSchemasMenuMainMenusConfigFieldsLinkConfig>;
};

export type SitePluginPluginOptionsSchemasMenuMainMenusConfigFieldsLinkConfig = {
  __typename?: 'SitePluginPluginOptionsSchemasMenuMainMenusConfigFieldsLinkConfig';
  allowTargetBlank?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  __typename?: 'SitePluginPackageJson';
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  __typename?: 'SitePluginPackageJsonDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependencies = {
  __typename?: 'SitePluginPackageJsonDevDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: 'SitePluginPackageJsonPeerDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  ghostPost?: Maybe<GhostPost>;
  allGhostPost: GhostPostConnection;
  ghostPage?: Maybe<GhostPage>;
  allGhostPage: GhostPageConnection;
  ghostTag?: Maybe<GhostTag>;
  allGhostTag: GhostTagConnection;
  ghostAuthor?: Maybe<GhostAuthor>;
  allGhostAuthor: GhostAuthorConnection;
  ghostSettings?: Maybe<GhostSettings>;
  allGhostSettings: GhostSettingsConnection;
  htmlRehype?: Maybe<HtmlRehype>;
  allHtmlRehype: HtmlRehypeConnection;
  prismicHomepageBodyFeaturedContents?: Maybe<PrismicHomepageBodyFeaturedContents>;
  allPrismicHomepageBodyFeaturedContents: PrismicHomepageBodyFeaturedContentsConnection;
  prismicHomepage?: Maybe<PrismicHomepage>;
  allPrismicHomepage: PrismicHomepageConnection;
  prismicContact?: Maybe<PrismicContact>;
  allPrismicContact: PrismicContactConnection;
  prismicPage?: Maybe<PrismicPage>;
  allPrismicPage: PrismicPageConnection;
  prismicProduct?: Maybe<PrismicProduct>;
  allPrismicProduct: PrismicProductConnection;
  prismicMenu?: Maybe<PrismicMenu>;
  allPrismicMenu: PrismicMenuConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};

export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryGhostPostArgs = {
  slug?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  uuid?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  comment_id?: Maybe<StringQueryOperatorInput>;
  feature_image?: Maybe<StringQueryOperatorInput>;
  featured?: Maybe<BooleanQueryOperatorInput>;
  visibility?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  published_at?: Maybe<DateQueryOperatorInput>;
  custom_excerpt?: Maybe<StringQueryOperatorInput>;
  codeinjection_head?: Maybe<StringQueryOperatorInput>;
  codeinjection_foot?: Maybe<StringQueryOperatorInput>;
  codeinjection_styles?: Maybe<StringQueryOperatorInput>;
  custom_template?: Maybe<StringQueryOperatorInput>;
  canonical_url?: Maybe<StringQueryOperatorInput>;
  send_email_when_published?: Maybe<BooleanQueryOperatorInput>;
  tags?: Maybe<GhostTagFilterListInput>;
  authors?: Maybe<GhostAuthorFilterListInput>;
  primary_author?: Maybe<GhostAuthorFilterInput>;
  primary_tag?: Maybe<GhostTagFilterInput>;
  url?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  reading_time?: Maybe<IntQueryOperatorInput>;
  email_subject?: Maybe<StringQueryOperatorInput>;
  plaintext?: Maybe<StringQueryOperatorInput>;
  page?: Maybe<BooleanQueryOperatorInput>;
  og_image?: Maybe<StringQueryOperatorInput>;
  og_title?: Maybe<StringQueryOperatorInput>;
  og_description?: Maybe<StringQueryOperatorInput>;
  twitter_image?: Maybe<StringQueryOperatorInput>;
  twitter_title?: Maybe<StringQueryOperatorInput>;
  twitter_description?: Maybe<StringQueryOperatorInput>;
  meta_title?: Maybe<StringQueryOperatorInput>;
  meta_description?: Maybe<StringQueryOperatorInput>;
  access?: Maybe<BooleanQueryOperatorInput>;
  ghostId?: Maybe<StringQueryOperatorInput>;
  featureImageSharp?: Maybe<FileFilterInput>;
  childrenHtmlRehype?: Maybe<HtmlRehypeFilterListInput>;
  childHtmlRehype?: Maybe<HtmlRehypeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllGhostPostArgs = {
  filter?: Maybe<GhostPostFilterInput>;
  sort?: Maybe<GhostPostSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryGhostPageArgs = {
  slug?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  uuid?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  comment_id?: Maybe<StringQueryOperatorInput>;
  feature_image?: Maybe<StringQueryOperatorInput>;
  featured?: Maybe<BooleanQueryOperatorInput>;
  visibility?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  published_at?: Maybe<DateQueryOperatorInput>;
  custom_excerpt?: Maybe<StringQueryOperatorInput>;
  codeinjection_head?: Maybe<StringQueryOperatorInput>;
  codeinjection_foot?: Maybe<StringQueryOperatorInput>;
  codeinjection_styles?: Maybe<StringQueryOperatorInput>;
  custom_template?: Maybe<StringQueryOperatorInput>;
  canonical_url?: Maybe<StringQueryOperatorInput>;
  send_email_when_published?: Maybe<BooleanQueryOperatorInput>;
  tags?: Maybe<GhostTagFilterListInput>;
  authors?: Maybe<GhostAuthorFilterListInput>;
  primary_author?: Maybe<GhostAuthorFilterInput>;
  primary_tag?: Maybe<GhostTagFilterInput>;
  url?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  reading_time?: Maybe<IntQueryOperatorInput>;
  email_subject?: Maybe<StringQueryOperatorInput>;
  plaintext?: Maybe<StringQueryOperatorInput>;
  page?: Maybe<BooleanQueryOperatorInput>;
  og_image?: Maybe<StringQueryOperatorInput>;
  og_title?: Maybe<StringQueryOperatorInput>;
  og_description?: Maybe<StringQueryOperatorInput>;
  twitter_image?: Maybe<StringQueryOperatorInput>;
  twitter_title?: Maybe<StringQueryOperatorInput>;
  twitter_description?: Maybe<StringQueryOperatorInput>;
  meta_title?: Maybe<StringQueryOperatorInput>;
  meta_description?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllGhostPageArgs = {
  filter?: Maybe<GhostPageFilterInput>;
  sort?: Maybe<GhostPageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryGhostTagArgs = {
  slug?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  feature_image?: Maybe<StringQueryOperatorInput>;
  visibility?: Maybe<StringQueryOperatorInput>;
  meta_title?: Maybe<StringQueryOperatorInput>;
  meta_description?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  count?: Maybe<GhostPostCountFilterInput>;
  postCount?: Maybe<IntQueryOperatorInput>;
  og_image?: Maybe<StringQueryOperatorInput>;
  og_title?: Maybe<StringQueryOperatorInput>;
  og_description?: Maybe<StringQueryOperatorInput>;
  twitter_image?: Maybe<StringQueryOperatorInput>;
  twitter_title?: Maybe<StringQueryOperatorInput>;
  twitter_description?: Maybe<StringQueryOperatorInput>;
  codeinjection_head?: Maybe<StringQueryOperatorInput>;
  codeinjection_foot?: Maybe<StringQueryOperatorInput>;
  canonical_url?: Maybe<StringQueryOperatorInput>;
  accent_color?: Maybe<StringQueryOperatorInput>;
  ghostId?: Maybe<StringQueryOperatorInput>;
  featureImageSharp?: Maybe<FileFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllGhostTagArgs = {
  filter?: Maybe<GhostTagFilterInput>;
  sort?: Maybe<GhostTagSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryGhostAuthorArgs = {
  slug?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  profile_image?: Maybe<StringQueryOperatorInput>;
  cover_image?: Maybe<StringQueryOperatorInput>;
  bio?: Maybe<StringQueryOperatorInput>;
  website?: Maybe<StringQueryOperatorInput>;
  location?: Maybe<StringQueryOperatorInput>;
  facebook?: Maybe<StringQueryOperatorInput>;
  twitter?: Maybe<StringQueryOperatorInput>;
  meta_title?: Maybe<StringQueryOperatorInput>;
  meta_description?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  count?: Maybe<GhostPostCountFilterInput>;
  postCount?: Maybe<IntQueryOperatorInput>;
  ghostId?: Maybe<StringQueryOperatorInput>;
  profileImageSharp?: Maybe<FileFilterInput>;
  coverImageSharp?: Maybe<FileFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllGhostAuthorArgs = {
  filter?: Maybe<GhostAuthorFilterInput>;
  sort?: Maybe<GhostAuthorSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryGhostSettingsArgs = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  logo?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  cover_image?: Maybe<StringQueryOperatorInput>;
  facebook?: Maybe<StringQueryOperatorInput>;
  twitter?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  timezone?: Maybe<StringQueryOperatorInput>;
  navigation?: Maybe<GhostNavigationFilterListInput>;
  secondary_navigation?: Maybe<GhostNavigationFilterListInput>;
  meta_title?: Maybe<StringQueryOperatorInput>;
  meta_description?: Maybe<StringQueryOperatorInput>;
  og_image?: Maybe<StringQueryOperatorInput>;
  og_title?: Maybe<StringQueryOperatorInput>;
  og_description?: Maybe<StringQueryOperatorInput>;
  twitter_image?: Maybe<StringQueryOperatorInput>;
  twitter_title?: Maybe<StringQueryOperatorInput>;
  twitter_description?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  codeinjection_head?: Maybe<StringQueryOperatorInput>;
  codeinjection_foot?: Maybe<StringQueryOperatorInput>;
  codeinjection_styles?: Maybe<StringQueryOperatorInput>;
  active_timezone?: Maybe<StringQueryOperatorInput>;
  default_locale?: Maybe<StringQueryOperatorInput>;
  members_support_address?: Maybe<StringQueryOperatorInput>;
  ghostId?: Maybe<IntQueryOperatorInput>;
  coverImageSharp?: Maybe<FileFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllGhostSettingsArgs = {
  filter?: Maybe<GhostSettingsFilterInput>;
  sort?: Maybe<GhostSettingsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryHtmlRehypeArgs = {
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  tableOfContents?: Maybe<JsonQueryOperatorInput>;
  context?: Maybe<HtmlRehypeContextFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllHtmlRehypeArgs = {
  filter?: Maybe<HtmlRehypeFilterInput>;
  sort?: Maybe<HtmlRehypeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryPrismicHomepageBodyFeaturedContentsArgs = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicHomepageBodyFeaturedContentsPrimaryTypeFilterInput>;
  items?: Maybe<PrismicHomepageBodyFeaturedContentsItemTypeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllPrismicHomepageBodyFeaturedContentsArgs = {
  filter?: Maybe<PrismicHomepageBodyFeaturedContentsFilterInput>;
  sort?: Maybe<PrismicHomepageBodyFeaturedContentsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryPrismicHomepageArgs = {
  data?: Maybe<PrismicHomepageDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllPrismicHomepageArgs = {
  filter?: Maybe<PrismicHomepageFilterInput>;
  sort?: Maybe<PrismicHomepageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryPrismicContactArgs = {
  data?: Maybe<PrismicContactDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllPrismicContactArgs = {
  filter?: Maybe<PrismicContactFilterInput>;
  sort?: Maybe<PrismicContactSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryPrismicPageArgs = {
  data?: Maybe<PrismicPageDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllPrismicPageArgs = {
  filter?: Maybe<PrismicPageFilterInput>;
  sort?: Maybe<PrismicPageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryPrismicProductArgs = {
  data?: Maybe<PrismicProductDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllPrismicProductArgs = {
  filter?: Maybe<PrismicProductFilterInput>;
  sort?: Maybe<PrismicProductSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryPrismicMenuArgs = {
  data?: Maybe<PrismicMenuDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllPrismicMenuArgs = {
  filter?: Maybe<PrismicMenuFilterInput>;
  sort?: Maybe<PrismicMenuSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: Maybe<ImageSharpFilterInput>;
};

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: 'FileEdge';
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export enum FileFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  Url = 'url',
  PublicUrl = 'publicURL',
  ChildrenImageSharp = 'childrenImageSharp',
  ChildrenImageSharpFixedBase64 = 'childrenImageSharp___fixed___base64',
  ChildrenImageSharpFixedTracedSvg = 'childrenImageSharp___fixed___tracedSVG',
  ChildrenImageSharpFixedAspectRatio = 'childrenImageSharp___fixed___aspectRatio',
  ChildrenImageSharpFixedWidth = 'childrenImageSharp___fixed___width',
  ChildrenImageSharpFixedHeight = 'childrenImageSharp___fixed___height',
  ChildrenImageSharpFixedSrc = 'childrenImageSharp___fixed___src',
  ChildrenImageSharpFixedSrcSet = 'childrenImageSharp___fixed___srcSet',
  ChildrenImageSharpFixedSrcWebp = 'childrenImageSharp___fixed___srcWebp',
  ChildrenImageSharpFixedSrcSetWebp = 'childrenImageSharp___fixed___srcSetWebp',
  ChildrenImageSharpFixedOriginalName = 'childrenImageSharp___fixed___originalName',
  ChildrenImageSharpFluidBase64 = 'childrenImageSharp___fluid___base64',
  ChildrenImageSharpFluidTracedSvg = 'childrenImageSharp___fluid___tracedSVG',
  ChildrenImageSharpFluidAspectRatio = 'childrenImageSharp___fluid___aspectRatio',
  ChildrenImageSharpFluidSrc = 'childrenImageSharp___fluid___src',
  ChildrenImageSharpFluidSrcSet = 'childrenImageSharp___fluid___srcSet',
  ChildrenImageSharpFluidSrcWebp = 'childrenImageSharp___fluid___srcWebp',
  ChildrenImageSharpFluidSrcSetWebp = 'childrenImageSharp___fluid___srcSetWebp',
  ChildrenImageSharpFluidSizes = 'childrenImageSharp___fluid___sizes',
  ChildrenImageSharpFluidOriginalImg = 'childrenImageSharp___fluid___originalImg',
  ChildrenImageSharpFluidOriginalName = 'childrenImageSharp___fluid___originalName',
  ChildrenImageSharpFluidPresentationWidth = 'childrenImageSharp___fluid___presentationWidth',
  ChildrenImageSharpFluidPresentationHeight = 'childrenImageSharp___fluid___presentationHeight',
  ChildrenImageSharpGatsbyImageData = 'childrenImageSharp___gatsbyImageData',
  ChildrenImageSharpOriginalWidth = 'childrenImageSharp___original___width',
  ChildrenImageSharpOriginalHeight = 'childrenImageSharp___original___height',
  ChildrenImageSharpOriginalSrc = 'childrenImageSharp___original___src',
  ChildrenImageSharpResizeSrc = 'childrenImageSharp___resize___src',
  ChildrenImageSharpResizeTracedSvg = 'childrenImageSharp___resize___tracedSVG',
  ChildrenImageSharpResizeWidth = 'childrenImageSharp___resize___width',
  ChildrenImageSharpResizeHeight = 'childrenImageSharp___resize___height',
  ChildrenImageSharpResizeAspectRatio = 'childrenImageSharp___resize___aspectRatio',
  ChildrenImageSharpResizeOriginalName = 'childrenImageSharp___resize___originalName',
  ChildrenImageSharpId = 'childrenImageSharp___id',
  ChildrenImageSharpParentId = 'childrenImageSharp___parent___id',
  ChildrenImageSharpParentParentId = 'childrenImageSharp___parent___parent___id',
  ChildrenImageSharpParentParentChildren = 'childrenImageSharp___parent___parent___children',
  ChildrenImageSharpParentChildren = 'childrenImageSharp___parent___children',
  ChildrenImageSharpParentChildrenId = 'childrenImageSharp___parent___children___id',
  ChildrenImageSharpParentChildrenChildren = 'childrenImageSharp___parent___children___children',
  ChildrenImageSharpParentInternalContent = 'childrenImageSharp___parent___internal___content',
  ChildrenImageSharpParentInternalContentDigest = 'childrenImageSharp___parent___internal___contentDigest',
  ChildrenImageSharpParentInternalDescription = 'childrenImageSharp___parent___internal___description',
  ChildrenImageSharpParentInternalFieldOwners = 'childrenImageSharp___parent___internal___fieldOwners',
  ChildrenImageSharpParentInternalIgnoreType = 'childrenImageSharp___parent___internal___ignoreType',
  ChildrenImageSharpParentInternalMediaType = 'childrenImageSharp___parent___internal___mediaType',
  ChildrenImageSharpParentInternalOwner = 'childrenImageSharp___parent___internal___owner',
  ChildrenImageSharpParentInternalType = 'childrenImageSharp___parent___internal___type',
  ChildrenImageSharpChildren = 'childrenImageSharp___children',
  ChildrenImageSharpChildrenId = 'childrenImageSharp___children___id',
  ChildrenImageSharpChildrenParentId = 'childrenImageSharp___children___parent___id',
  ChildrenImageSharpChildrenParentChildren = 'childrenImageSharp___children___parent___children',
  ChildrenImageSharpChildrenChildren = 'childrenImageSharp___children___children',
  ChildrenImageSharpChildrenChildrenId = 'childrenImageSharp___children___children___id',
  ChildrenImageSharpChildrenChildrenChildren = 'childrenImageSharp___children___children___children',
  ChildrenImageSharpChildrenInternalContent = 'childrenImageSharp___children___internal___content',
  ChildrenImageSharpChildrenInternalContentDigest = 'childrenImageSharp___children___internal___contentDigest',
  ChildrenImageSharpChildrenInternalDescription = 'childrenImageSharp___children___internal___description',
  ChildrenImageSharpChildrenInternalFieldOwners = 'childrenImageSharp___children___internal___fieldOwners',
  ChildrenImageSharpChildrenInternalIgnoreType = 'childrenImageSharp___children___internal___ignoreType',
  ChildrenImageSharpChildrenInternalMediaType = 'childrenImageSharp___children___internal___mediaType',
  ChildrenImageSharpChildrenInternalOwner = 'childrenImageSharp___children___internal___owner',
  ChildrenImageSharpChildrenInternalType = 'childrenImageSharp___children___internal___type',
  ChildrenImageSharpInternalContent = 'childrenImageSharp___internal___content',
  ChildrenImageSharpInternalContentDigest = 'childrenImageSharp___internal___contentDigest',
  ChildrenImageSharpInternalDescription = 'childrenImageSharp___internal___description',
  ChildrenImageSharpInternalFieldOwners = 'childrenImageSharp___internal___fieldOwners',
  ChildrenImageSharpInternalIgnoreType = 'childrenImageSharp___internal___ignoreType',
  ChildrenImageSharpInternalMediaType = 'childrenImageSharp___internal___mediaType',
  ChildrenImageSharpInternalOwner = 'childrenImageSharp___internal___owner',
  ChildrenImageSharpInternalType = 'childrenImageSharp___internal___type',
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  ChildImageSharpGatsbyImageData = 'childImageSharp___gatsbyImageData',
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  ChildImageSharpId = 'childImageSharp___id',
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  ChildImageSharpChildren = 'childImageSharp___children',
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge';
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  titleTemplate?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<StringQueryOperatorInput>;
  logo?: Maybe<StringQueryOperatorInput>;
};

export type SiteConnection = {
  __typename?: 'SiteConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: 'SiteEdge';
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  BuildTime = 'buildTime',
  SiteMetadataTitle = 'siteMetadata___title',
  SiteMetadataDescription = 'siteMetadata___description',
  SiteMetadataTitleTemplate = 'siteMetadata___titleTemplate',
  SiteMetadataUrl = 'siteMetadata___url',
  SiteMetadataSiteUrl = 'siteMetadata___siteUrl',
  SiteMetadataImage = 'siteMetadata___image',
  SiteMetadataLogo = 'siteMetadata___logo',
  Port = 'port',
  Host = 'host',
  Polyfill = 'polyfill',
  PathPrefix = 'pathPrefix',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Path = 'path',
  Component = 'component',
  InternalComponentName = 'internalComponentName',
  ComponentChunkName = 'componentChunkName',
  MatchPath = 'matchPath',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge';
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  FixedBase64 = 'fixed___base64',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedOriginalName = 'fixed___originalName',
  FluidBase64 = 'fluid___base64',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSizes = 'fluid___sizes',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidPresentationHeight = 'fluid___presentationHeight',
  GatsbyImageData = 'gatsbyImageData',
  OriginalWidth = 'original___width',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width',
  ResizeHeight = 'resize___height',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeOriginalName = 'resize___originalName',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type GhostTagFilterListInput = {
  elemMatch?: Maybe<GhostTagFilterInput>;
};

export type GhostTagFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  feature_image?: Maybe<StringQueryOperatorInput>;
  visibility?: Maybe<StringQueryOperatorInput>;
  meta_title?: Maybe<StringQueryOperatorInput>;
  meta_description?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  count?: Maybe<GhostPostCountFilterInput>;
  postCount?: Maybe<IntQueryOperatorInput>;
  og_image?: Maybe<StringQueryOperatorInput>;
  og_title?: Maybe<StringQueryOperatorInput>;
  og_description?: Maybe<StringQueryOperatorInput>;
  twitter_image?: Maybe<StringQueryOperatorInput>;
  twitter_title?: Maybe<StringQueryOperatorInput>;
  twitter_description?: Maybe<StringQueryOperatorInput>;
  codeinjection_head?: Maybe<StringQueryOperatorInput>;
  codeinjection_foot?: Maybe<StringQueryOperatorInput>;
  canonical_url?: Maybe<StringQueryOperatorInput>;
  accent_color?: Maybe<StringQueryOperatorInput>;
  ghostId?: Maybe<StringQueryOperatorInput>;
  featureImageSharp?: Maybe<FileFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type GhostPostCountFilterInput = {
  posts?: Maybe<IntQueryOperatorInput>;
};

export type GhostAuthorFilterListInput = {
  elemMatch?: Maybe<GhostAuthorFilterInput>;
};

export type GhostAuthorFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  profile_image?: Maybe<StringQueryOperatorInput>;
  cover_image?: Maybe<StringQueryOperatorInput>;
  bio?: Maybe<StringQueryOperatorInput>;
  website?: Maybe<StringQueryOperatorInput>;
  location?: Maybe<StringQueryOperatorInput>;
  facebook?: Maybe<StringQueryOperatorInput>;
  twitter?: Maybe<StringQueryOperatorInput>;
  meta_title?: Maybe<StringQueryOperatorInput>;
  meta_description?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  count?: Maybe<GhostPostCountFilterInput>;
  postCount?: Maybe<IntQueryOperatorInput>;
  ghostId?: Maybe<StringQueryOperatorInput>;
  profileImageSharp?: Maybe<FileFilterInput>;
  coverImageSharp?: Maybe<FileFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type HtmlRehypeFilterListInput = {
  elemMatch?: Maybe<HtmlRehypeFilterInput>;
};

export type HtmlRehypeFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  tableOfContents?: Maybe<JsonQueryOperatorInput>;
  context?: Maybe<HtmlRehypeContextFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type HtmlRehypeContextFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  feature_image?: Maybe<StringQueryOperatorInput>;
};

export type GhostPostConnection = {
  __typename?: 'GhostPostConnection';
  totalCount: Scalars['Int'];
  edges: Array<GhostPostEdge>;
  nodes: Array<GhostPost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<GhostPostGroupConnection>;
};

export type GhostPostConnectionDistinctArgs = {
  field: GhostPostFieldsEnum;
};

export type GhostPostConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: GhostPostFieldsEnum;
};

export type GhostPostEdge = {
  __typename?: 'GhostPostEdge';
  next?: Maybe<GhostPost>;
  node: GhostPost;
  previous?: Maybe<GhostPost>;
};

export enum GhostPostFieldsEnum {
  Slug = 'slug',
  Id = 'id',
  Uuid = 'uuid',
  Title = 'title',
  Html = 'html',
  CommentId = 'comment_id',
  FeatureImage = 'feature_image',
  Featured = 'featured',
  Visibility = 'visibility',
  CreatedAt = 'created_at',
  UpdatedAt = 'updated_at',
  PublishedAt = 'published_at',
  CustomExcerpt = 'custom_excerpt',
  CodeinjectionHead = 'codeinjection_head',
  CodeinjectionFoot = 'codeinjection_foot',
  CodeinjectionStyles = 'codeinjection_styles',
  CustomTemplate = 'custom_template',
  CanonicalUrl = 'canonical_url',
  SendEmailWhenPublished = 'send_email_when_published',
  Tags = 'tags',
  TagsSlug = 'tags___slug',
  TagsId = 'tags___id',
  TagsName = 'tags___name',
  TagsDescription = 'tags___description',
  TagsFeatureImage = 'tags___feature_image',
  TagsVisibility = 'tags___visibility',
  TagsMetaTitle = 'tags___meta_title',
  TagsMetaDescription = 'tags___meta_description',
  TagsUrl = 'tags___url',
  TagsCountPosts = 'tags___count___posts',
  TagsPostCount = 'tags___postCount',
  TagsOgImage = 'tags___og_image',
  TagsOgTitle = 'tags___og_title',
  TagsOgDescription = 'tags___og_description',
  TagsTwitterImage = 'tags___twitter_image',
  TagsTwitterTitle = 'tags___twitter_title',
  TagsTwitterDescription = 'tags___twitter_description',
  TagsCodeinjectionHead = 'tags___codeinjection_head',
  TagsCodeinjectionFoot = 'tags___codeinjection_foot',
  TagsCanonicalUrl = 'tags___canonical_url',
  TagsAccentColor = 'tags___accent_color',
  TagsGhostId = 'tags___ghostId',
  TagsFeatureImageSharpSourceInstanceName = 'tags___featureImageSharp___sourceInstanceName',
  TagsFeatureImageSharpAbsolutePath = 'tags___featureImageSharp___absolutePath',
  TagsFeatureImageSharpRelativePath = 'tags___featureImageSharp___relativePath',
  TagsFeatureImageSharpExtension = 'tags___featureImageSharp___extension',
  TagsFeatureImageSharpSize = 'tags___featureImageSharp___size',
  TagsFeatureImageSharpPrettySize = 'tags___featureImageSharp___prettySize',
  TagsFeatureImageSharpModifiedTime = 'tags___featureImageSharp___modifiedTime',
  TagsFeatureImageSharpAccessTime = 'tags___featureImageSharp___accessTime',
  TagsFeatureImageSharpChangeTime = 'tags___featureImageSharp___changeTime',
  TagsFeatureImageSharpBirthTime = 'tags___featureImageSharp___birthTime',
  TagsFeatureImageSharpRoot = 'tags___featureImageSharp___root',
  TagsFeatureImageSharpDir = 'tags___featureImageSharp___dir',
  TagsFeatureImageSharpBase = 'tags___featureImageSharp___base',
  TagsFeatureImageSharpExt = 'tags___featureImageSharp___ext',
  TagsFeatureImageSharpName = 'tags___featureImageSharp___name',
  TagsFeatureImageSharpRelativeDirectory = 'tags___featureImageSharp___relativeDirectory',
  TagsFeatureImageSharpDev = 'tags___featureImageSharp___dev',
  TagsFeatureImageSharpMode = 'tags___featureImageSharp___mode',
  TagsFeatureImageSharpNlink = 'tags___featureImageSharp___nlink',
  TagsFeatureImageSharpUid = 'tags___featureImageSharp___uid',
  TagsFeatureImageSharpGid = 'tags___featureImageSharp___gid',
  TagsFeatureImageSharpRdev = 'tags___featureImageSharp___rdev',
  TagsFeatureImageSharpIno = 'tags___featureImageSharp___ino',
  TagsFeatureImageSharpAtimeMs = 'tags___featureImageSharp___atimeMs',
  TagsFeatureImageSharpMtimeMs = 'tags___featureImageSharp___mtimeMs',
  TagsFeatureImageSharpCtimeMs = 'tags___featureImageSharp___ctimeMs',
  TagsFeatureImageSharpAtime = 'tags___featureImageSharp___atime',
  TagsFeatureImageSharpMtime = 'tags___featureImageSharp___mtime',
  TagsFeatureImageSharpCtime = 'tags___featureImageSharp___ctime',
  TagsFeatureImageSharpBirthtime = 'tags___featureImageSharp___birthtime',
  TagsFeatureImageSharpBirthtimeMs = 'tags___featureImageSharp___birthtimeMs',
  TagsFeatureImageSharpBlksize = 'tags___featureImageSharp___blksize',
  TagsFeatureImageSharpBlocks = 'tags___featureImageSharp___blocks',
  TagsFeatureImageSharpUrl = 'tags___featureImageSharp___url',
  TagsFeatureImageSharpPublicUrl = 'tags___featureImageSharp___publicURL',
  TagsFeatureImageSharpChildrenImageSharp = 'tags___featureImageSharp___childrenImageSharp',
  TagsFeatureImageSharpChildrenImageSharpGatsbyImageData = 'tags___featureImageSharp___childrenImageSharp___gatsbyImageData',
  TagsFeatureImageSharpChildrenImageSharpId = 'tags___featureImageSharp___childrenImageSharp___id',
  TagsFeatureImageSharpChildrenImageSharpChildren = 'tags___featureImageSharp___childrenImageSharp___children',
  TagsFeatureImageSharpChildImageSharpGatsbyImageData = 'tags___featureImageSharp___childImageSharp___gatsbyImageData',
  TagsFeatureImageSharpChildImageSharpId = 'tags___featureImageSharp___childImageSharp___id',
  TagsFeatureImageSharpChildImageSharpChildren = 'tags___featureImageSharp___childImageSharp___children',
  TagsFeatureImageSharpId = 'tags___featureImageSharp___id',
  TagsFeatureImageSharpParentId = 'tags___featureImageSharp___parent___id',
  TagsFeatureImageSharpParentChildren = 'tags___featureImageSharp___parent___children',
  TagsFeatureImageSharpChildren = 'tags___featureImageSharp___children',
  TagsFeatureImageSharpChildrenId = 'tags___featureImageSharp___children___id',
  TagsFeatureImageSharpChildrenChildren = 'tags___featureImageSharp___children___children',
  TagsFeatureImageSharpInternalContent = 'tags___featureImageSharp___internal___content',
  TagsFeatureImageSharpInternalContentDigest = 'tags___featureImageSharp___internal___contentDigest',
  TagsFeatureImageSharpInternalDescription = 'tags___featureImageSharp___internal___description',
  TagsFeatureImageSharpInternalFieldOwners = 'tags___featureImageSharp___internal___fieldOwners',
  TagsFeatureImageSharpInternalIgnoreType = 'tags___featureImageSharp___internal___ignoreType',
  TagsFeatureImageSharpInternalMediaType = 'tags___featureImageSharp___internal___mediaType',
  TagsFeatureImageSharpInternalOwner = 'tags___featureImageSharp___internal___owner',
  TagsFeatureImageSharpInternalType = 'tags___featureImageSharp___internal___type',
  TagsParentId = 'tags___parent___id',
  TagsParentParentId = 'tags___parent___parent___id',
  TagsParentParentChildren = 'tags___parent___parent___children',
  TagsParentChildren = 'tags___parent___children',
  TagsParentChildrenId = 'tags___parent___children___id',
  TagsParentChildrenChildren = 'tags___parent___children___children',
  TagsParentInternalContent = 'tags___parent___internal___content',
  TagsParentInternalContentDigest = 'tags___parent___internal___contentDigest',
  TagsParentInternalDescription = 'tags___parent___internal___description',
  TagsParentInternalFieldOwners = 'tags___parent___internal___fieldOwners',
  TagsParentInternalIgnoreType = 'tags___parent___internal___ignoreType',
  TagsParentInternalMediaType = 'tags___parent___internal___mediaType',
  TagsParentInternalOwner = 'tags___parent___internal___owner',
  TagsParentInternalType = 'tags___parent___internal___type',
  TagsChildren = 'tags___children',
  TagsChildrenId = 'tags___children___id',
  TagsChildrenParentId = 'tags___children___parent___id',
  TagsChildrenParentChildren = 'tags___children___parent___children',
  TagsChildrenChildren = 'tags___children___children',
  TagsChildrenChildrenId = 'tags___children___children___id',
  TagsChildrenChildrenChildren = 'tags___children___children___children',
  TagsChildrenInternalContent = 'tags___children___internal___content',
  TagsChildrenInternalContentDigest = 'tags___children___internal___contentDigest',
  TagsChildrenInternalDescription = 'tags___children___internal___description',
  TagsChildrenInternalFieldOwners = 'tags___children___internal___fieldOwners',
  TagsChildrenInternalIgnoreType = 'tags___children___internal___ignoreType',
  TagsChildrenInternalMediaType = 'tags___children___internal___mediaType',
  TagsChildrenInternalOwner = 'tags___children___internal___owner',
  TagsChildrenInternalType = 'tags___children___internal___type',
  TagsInternalContent = 'tags___internal___content',
  TagsInternalContentDigest = 'tags___internal___contentDigest',
  TagsInternalDescription = 'tags___internal___description',
  TagsInternalFieldOwners = 'tags___internal___fieldOwners',
  TagsInternalIgnoreType = 'tags___internal___ignoreType',
  TagsInternalMediaType = 'tags___internal___mediaType',
  TagsInternalOwner = 'tags___internal___owner',
  TagsInternalType = 'tags___internal___type',
  Authors = 'authors',
  AuthorsSlug = 'authors___slug',
  AuthorsId = 'authors___id',
  AuthorsName = 'authors___name',
  AuthorsProfileImage = 'authors___profile_image',
  AuthorsCoverImage = 'authors___cover_image',
  AuthorsBio = 'authors___bio',
  AuthorsWebsite = 'authors___website',
  AuthorsLocation = 'authors___location',
  AuthorsFacebook = 'authors___facebook',
  AuthorsTwitter = 'authors___twitter',
  AuthorsMetaTitle = 'authors___meta_title',
  AuthorsMetaDescription = 'authors___meta_description',
  AuthorsUrl = 'authors___url',
  AuthorsCountPosts = 'authors___count___posts',
  AuthorsPostCount = 'authors___postCount',
  AuthorsGhostId = 'authors___ghostId',
  AuthorsProfileImageSharpSourceInstanceName = 'authors___profileImageSharp___sourceInstanceName',
  AuthorsProfileImageSharpAbsolutePath = 'authors___profileImageSharp___absolutePath',
  AuthorsProfileImageSharpRelativePath = 'authors___profileImageSharp___relativePath',
  AuthorsProfileImageSharpExtension = 'authors___profileImageSharp___extension',
  AuthorsProfileImageSharpSize = 'authors___profileImageSharp___size',
  AuthorsProfileImageSharpPrettySize = 'authors___profileImageSharp___prettySize',
  AuthorsProfileImageSharpModifiedTime = 'authors___profileImageSharp___modifiedTime',
  AuthorsProfileImageSharpAccessTime = 'authors___profileImageSharp___accessTime',
  AuthorsProfileImageSharpChangeTime = 'authors___profileImageSharp___changeTime',
  AuthorsProfileImageSharpBirthTime = 'authors___profileImageSharp___birthTime',
  AuthorsProfileImageSharpRoot = 'authors___profileImageSharp___root',
  AuthorsProfileImageSharpDir = 'authors___profileImageSharp___dir',
  AuthorsProfileImageSharpBase = 'authors___profileImageSharp___base',
  AuthorsProfileImageSharpExt = 'authors___profileImageSharp___ext',
  AuthorsProfileImageSharpName = 'authors___profileImageSharp___name',
  AuthorsProfileImageSharpRelativeDirectory = 'authors___profileImageSharp___relativeDirectory',
  AuthorsProfileImageSharpDev = 'authors___profileImageSharp___dev',
  AuthorsProfileImageSharpMode = 'authors___profileImageSharp___mode',
  AuthorsProfileImageSharpNlink = 'authors___profileImageSharp___nlink',
  AuthorsProfileImageSharpUid = 'authors___profileImageSharp___uid',
  AuthorsProfileImageSharpGid = 'authors___profileImageSharp___gid',
  AuthorsProfileImageSharpRdev = 'authors___profileImageSharp___rdev',
  AuthorsProfileImageSharpIno = 'authors___profileImageSharp___ino',
  AuthorsProfileImageSharpAtimeMs = 'authors___profileImageSharp___atimeMs',
  AuthorsProfileImageSharpMtimeMs = 'authors___profileImageSharp___mtimeMs',
  AuthorsProfileImageSharpCtimeMs = 'authors___profileImageSharp___ctimeMs',
  AuthorsProfileImageSharpAtime = 'authors___profileImageSharp___atime',
  AuthorsProfileImageSharpMtime = 'authors___profileImageSharp___mtime',
  AuthorsProfileImageSharpCtime = 'authors___profileImageSharp___ctime',
  AuthorsProfileImageSharpBirthtime = 'authors___profileImageSharp___birthtime',
  AuthorsProfileImageSharpBirthtimeMs = 'authors___profileImageSharp___birthtimeMs',
  AuthorsProfileImageSharpBlksize = 'authors___profileImageSharp___blksize',
  AuthorsProfileImageSharpBlocks = 'authors___profileImageSharp___blocks',
  AuthorsProfileImageSharpUrl = 'authors___profileImageSharp___url',
  AuthorsProfileImageSharpPublicUrl = 'authors___profileImageSharp___publicURL',
  AuthorsProfileImageSharpChildrenImageSharp = 'authors___profileImageSharp___childrenImageSharp',
  AuthorsProfileImageSharpChildrenImageSharpGatsbyImageData = 'authors___profileImageSharp___childrenImageSharp___gatsbyImageData',
  AuthorsProfileImageSharpChildrenImageSharpId = 'authors___profileImageSharp___childrenImageSharp___id',
  AuthorsProfileImageSharpChildrenImageSharpChildren = 'authors___profileImageSharp___childrenImageSharp___children',
  AuthorsProfileImageSharpChildImageSharpGatsbyImageData = 'authors___profileImageSharp___childImageSharp___gatsbyImageData',
  AuthorsProfileImageSharpChildImageSharpId = 'authors___profileImageSharp___childImageSharp___id',
  AuthorsProfileImageSharpChildImageSharpChildren = 'authors___profileImageSharp___childImageSharp___children',
  AuthorsProfileImageSharpId = 'authors___profileImageSharp___id',
  AuthorsProfileImageSharpParentId = 'authors___profileImageSharp___parent___id',
  AuthorsProfileImageSharpParentChildren = 'authors___profileImageSharp___parent___children',
  AuthorsProfileImageSharpChildren = 'authors___profileImageSharp___children',
  AuthorsProfileImageSharpChildrenId = 'authors___profileImageSharp___children___id',
  AuthorsProfileImageSharpChildrenChildren = 'authors___profileImageSharp___children___children',
  AuthorsProfileImageSharpInternalContent = 'authors___profileImageSharp___internal___content',
  AuthorsProfileImageSharpInternalContentDigest = 'authors___profileImageSharp___internal___contentDigest',
  AuthorsProfileImageSharpInternalDescription = 'authors___profileImageSharp___internal___description',
  AuthorsProfileImageSharpInternalFieldOwners = 'authors___profileImageSharp___internal___fieldOwners',
  AuthorsProfileImageSharpInternalIgnoreType = 'authors___profileImageSharp___internal___ignoreType',
  AuthorsProfileImageSharpInternalMediaType = 'authors___profileImageSharp___internal___mediaType',
  AuthorsProfileImageSharpInternalOwner = 'authors___profileImageSharp___internal___owner',
  AuthorsProfileImageSharpInternalType = 'authors___profileImageSharp___internal___type',
  AuthorsCoverImageSharpSourceInstanceName = 'authors___coverImageSharp___sourceInstanceName',
  AuthorsCoverImageSharpAbsolutePath = 'authors___coverImageSharp___absolutePath',
  AuthorsCoverImageSharpRelativePath = 'authors___coverImageSharp___relativePath',
  AuthorsCoverImageSharpExtension = 'authors___coverImageSharp___extension',
  AuthorsCoverImageSharpSize = 'authors___coverImageSharp___size',
  AuthorsCoverImageSharpPrettySize = 'authors___coverImageSharp___prettySize',
  AuthorsCoverImageSharpModifiedTime = 'authors___coverImageSharp___modifiedTime',
  AuthorsCoverImageSharpAccessTime = 'authors___coverImageSharp___accessTime',
  AuthorsCoverImageSharpChangeTime = 'authors___coverImageSharp___changeTime',
  AuthorsCoverImageSharpBirthTime = 'authors___coverImageSharp___birthTime',
  AuthorsCoverImageSharpRoot = 'authors___coverImageSharp___root',
  AuthorsCoverImageSharpDir = 'authors___coverImageSharp___dir',
  AuthorsCoverImageSharpBase = 'authors___coverImageSharp___base',
  AuthorsCoverImageSharpExt = 'authors___coverImageSharp___ext',
  AuthorsCoverImageSharpName = 'authors___coverImageSharp___name',
  AuthorsCoverImageSharpRelativeDirectory = 'authors___coverImageSharp___relativeDirectory',
  AuthorsCoverImageSharpDev = 'authors___coverImageSharp___dev',
  AuthorsCoverImageSharpMode = 'authors___coverImageSharp___mode',
  AuthorsCoverImageSharpNlink = 'authors___coverImageSharp___nlink',
  AuthorsCoverImageSharpUid = 'authors___coverImageSharp___uid',
  AuthorsCoverImageSharpGid = 'authors___coverImageSharp___gid',
  AuthorsCoverImageSharpRdev = 'authors___coverImageSharp___rdev',
  AuthorsCoverImageSharpIno = 'authors___coverImageSharp___ino',
  AuthorsCoverImageSharpAtimeMs = 'authors___coverImageSharp___atimeMs',
  AuthorsCoverImageSharpMtimeMs = 'authors___coverImageSharp___mtimeMs',
  AuthorsCoverImageSharpCtimeMs = 'authors___coverImageSharp___ctimeMs',
  AuthorsCoverImageSharpAtime = 'authors___coverImageSharp___atime',
  AuthorsCoverImageSharpMtime = 'authors___coverImageSharp___mtime',
  AuthorsCoverImageSharpCtime = 'authors___coverImageSharp___ctime',
  AuthorsCoverImageSharpBirthtime = 'authors___coverImageSharp___birthtime',
  AuthorsCoverImageSharpBirthtimeMs = 'authors___coverImageSharp___birthtimeMs',
  AuthorsCoverImageSharpBlksize = 'authors___coverImageSharp___blksize',
  AuthorsCoverImageSharpBlocks = 'authors___coverImageSharp___blocks',
  AuthorsCoverImageSharpUrl = 'authors___coverImageSharp___url',
  AuthorsCoverImageSharpPublicUrl = 'authors___coverImageSharp___publicURL',
  AuthorsCoverImageSharpChildrenImageSharp = 'authors___coverImageSharp___childrenImageSharp',
  AuthorsCoverImageSharpChildrenImageSharpGatsbyImageData = 'authors___coverImageSharp___childrenImageSharp___gatsbyImageData',
  AuthorsCoverImageSharpChildrenImageSharpId = 'authors___coverImageSharp___childrenImageSharp___id',
  AuthorsCoverImageSharpChildrenImageSharpChildren = 'authors___coverImageSharp___childrenImageSharp___children',
  AuthorsCoverImageSharpChildImageSharpGatsbyImageData = 'authors___coverImageSharp___childImageSharp___gatsbyImageData',
  AuthorsCoverImageSharpChildImageSharpId = 'authors___coverImageSharp___childImageSharp___id',
  AuthorsCoverImageSharpChildImageSharpChildren = 'authors___coverImageSharp___childImageSharp___children',
  AuthorsCoverImageSharpId = 'authors___coverImageSharp___id',
  AuthorsCoverImageSharpParentId = 'authors___coverImageSharp___parent___id',
  AuthorsCoverImageSharpParentChildren = 'authors___coverImageSharp___parent___children',
  AuthorsCoverImageSharpChildren = 'authors___coverImageSharp___children',
  AuthorsCoverImageSharpChildrenId = 'authors___coverImageSharp___children___id',
  AuthorsCoverImageSharpChildrenChildren = 'authors___coverImageSharp___children___children',
  AuthorsCoverImageSharpInternalContent = 'authors___coverImageSharp___internal___content',
  AuthorsCoverImageSharpInternalContentDigest = 'authors___coverImageSharp___internal___contentDigest',
  AuthorsCoverImageSharpInternalDescription = 'authors___coverImageSharp___internal___description',
  AuthorsCoverImageSharpInternalFieldOwners = 'authors___coverImageSharp___internal___fieldOwners',
  AuthorsCoverImageSharpInternalIgnoreType = 'authors___coverImageSharp___internal___ignoreType',
  AuthorsCoverImageSharpInternalMediaType = 'authors___coverImageSharp___internal___mediaType',
  AuthorsCoverImageSharpInternalOwner = 'authors___coverImageSharp___internal___owner',
  AuthorsCoverImageSharpInternalType = 'authors___coverImageSharp___internal___type',
  AuthorsParentId = 'authors___parent___id',
  AuthorsParentParentId = 'authors___parent___parent___id',
  AuthorsParentParentChildren = 'authors___parent___parent___children',
  AuthorsParentChildren = 'authors___parent___children',
  AuthorsParentChildrenId = 'authors___parent___children___id',
  AuthorsParentChildrenChildren = 'authors___parent___children___children',
  AuthorsParentInternalContent = 'authors___parent___internal___content',
  AuthorsParentInternalContentDigest = 'authors___parent___internal___contentDigest',
  AuthorsParentInternalDescription = 'authors___parent___internal___description',
  AuthorsParentInternalFieldOwners = 'authors___parent___internal___fieldOwners',
  AuthorsParentInternalIgnoreType = 'authors___parent___internal___ignoreType',
  AuthorsParentInternalMediaType = 'authors___parent___internal___mediaType',
  AuthorsParentInternalOwner = 'authors___parent___internal___owner',
  AuthorsParentInternalType = 'authors___parent___internal___type',
  AuthorsChildren = 'authors___children',
  AuthorsChildrenId = 'authors___children___id',
  AuthorsChildrenParentId = 'authors___children___parent___id',
  AuthorsChildrenParentChildren = 'authors___children___parent___children',
  AuthorsChildrenChildren = 'authors___children___children',
  AuthorsChildrenChildrenId = 'authors___children___children___id',
  AuthorsChildrenChildrenChildren = 'authors___children___children___children',
  AuthorsChildrenInternalContent = 'authors___children___internal___content',
  AuthorsChildrenInternalContentDigest = 'authors___children___internal___contentDigest',
  AuthorsChildrenInternalDescription = 'authors___children___internal___description',
  AuthorsChildrenInternalFieldOwners = 'authors___children___internal___fieldOwners',
  AuthorsChildrenInternalIgnoreType = 'authors___children___internal___ignoreType',
  AuthorsChildrenInternalMediaType = 'authors___children___internal___mediaType',
  AuthorsChildrenInternalOwner = 'authors___children___internal___owner',
  AuthorsChildrenInternalType = 'authors___children___internal___type',
  AuthorsInternalContent = 'authors___internal___content',
  AuthorsInternalContentDigest = 'authors___internal___contentDigest',
  AuthorsInternalDescription = 'authors___internal___description',
  AuthorsInternalFieldOwners = 'authors___internal___fieldOwners',
  AuthorsInternalIgnoreType = 'authors___internal___ignoreType',
  AuthorsInternalMediaType = 'authors___internal___mediaType',
  AuthorsInternalOwner = 'authors___internal___owner',
  AuthorsInternalType = 'authors___internal___type',
  PrimaryAuthorSlug = 'primary_author___slug',
  PrimaryAuthorId = 'primary_author___id',
  PrimaryAuthorName = 'primary_author___name',
  PrimaryAuthorProfileImage = 'primary_author___profile_image',
  PrimaryAuthorCoverImage = 'primary_author___cover_image',
  PrimaryAuthorBio = 'primary_author___bio',
  PrimaryAuthorWebsite = 'primary_author___website',
  PrimaryAuthorLocation = 'primary_author___location',
  PrimaryAuthorFacebook = 'primary_author___facebook',
  PrimaryAuthorTwitter = 'primary_author___twitter',
  PrimaryAuthorMetaTitle = 'primary_author___meta_title',
  PrimaryAuthorMetaDescription = 'primary_author___meta_description',
  PrimaryAuthorUrl = 'primary_author___url',
  PrimaryAuthorCountPosts = 'primary_author___count___posts',
  PrimaryAuthorPostCount = 'primary_author___postCount',
  PrimaryAuthorGhostId = 'primary_author___ghostId',
  PrimaryAuthorProfileImageSharpSourceInstanceName = 'primary_author___profileImageSharp___sourceInstanceName',
  PrimaryAuthorProfileImageSharpAbsolutePath = 'primary_author___profileImageSharp___absolutePath',
  PrimaryAuthorProfileImageSharpRelativePath = 'primary_author___profileImageSharp___relativePath',
  PrimaryAuthorProfileImageSharpExtension = 'primary_author___profileImageSharp___extension',
  PrimaryAuthorProfileImageSharpSize = 'primary_author___profileImageSharp___size',
  PrimaryAuthorProfileImageSharpPrettySize = 'primary_author___profileImageSharp___prettySize',
  PrimaryAuthorProfileImageSharpModifiedTime = 'primary_author___profileImageSharp___modifiedTime',
  PrimaryAuthorProfileImageSharpAccessTime = 'primary_author___profileImageSharp___accessTime',
  PrimaryAuthorProfileImageSharpChangeTime = 'primary_author___profileImageSharp___changeTime',
  PrimaryAuthorProfileImageSharpBirthTime = 'primary_author___profileImageSharp___birthTime',
  PrimaryAuthorProfileImageSharpRoot = 'primary_author___profileImageSharp___root',
  PrimaryAuthorProfileImageSharpDir = 'primary_author___profileImageSharp___dir',
  PrimaryAuthorProfileImageSharpBase = 'primary_author___profileImageSharp___base',
  PrimaryAuthorProfileImageSharpExt = 'primary_author___profileImageSharp___ext',
  PrimaryAuthorProfileImageSharpName = 'primary_author___profileImageSharp___name',
  PrimaryAuthorProfileImageSharpRelativeDirectory = 'primary_author___profileImageSharp___relativeDirectory',
  PrimaryAuthorProfileImageSharpDev = 'primary_author___profileImageSharp___dev',
  PrimaryAuthorProfileImageSharpMode = 'primary_author___profileImageSharp___mode',
  PrimaryAuthorProfileImageSharpNlink = 'primary_author___profileImageSharp___nlink',
  PrimaryAuthorProfileImageSharpUid = 'primary_author___profileImageSharp___uid',
  PrimaryAuthorProfileImageSharpGid = 'primary_author___profileImageSharp___gid',
  PrimaryAuthorProfileImageSharpRdev = 'primary_author___profileImageSharp___rdev',
  PrimaryAuthorProfileImageSharpIno = 'primary_author___profileImageSharp___ino',
  PrimaryAuthorProfileImageSharpAtimeMs = 'primary_author___profileImageSharp___atimeMs',
  PrimaryAuthorProfileImageSharpMtimeMs = 'primary_author___profileImageSharp___mtimeMs',
  PrimaryAuthorProfileImageSharpCtimeMs = 'primary_author___profileImageSharp___ctimeMs',
  PrimaryAuthorProfileImageSharpAtime = 'primary_author___profileImageSharp___atime',
  PrimaryAuthorProfileImageSharpMtime = 'primary_author___profileImageSharp___mtime',
  PrimaryAuthorProfileImageSharpCtime = 'primary_author___profileImageSharp___ctime',
  PrimaryAuthorProfileImageSharpBirthtime = 'primary_author___profileImageSharp___birthtime',
  PrimaryAuthorProfileImageSharpBirthtimeMs = 'primary_author___profileImageSharp___birthtimeMs',
  PrimaryAuthorProfileImageSharpBlksize = 'primary_author___profileImageSharp___blksize',
  PrimaryAuthorProfileImageSharpBlocks = 'primary_author___profileImageSharp___blocks',
  PrimaryAuthorProfileImageSharpUrl = 'primary_author___profileImageSharp___url',
  PrimaryAuthorProfileImageSharpPublicUrl = 'primary_author___profileImageSharp___publicURL',
  PrimaryAuthorProfileImageSharpChildrenImageSharp = 'primary_author___profileImageSharp___childrenImageSharp',
  PrimaryAuthorProfileImageSharpChildrenImageSharpGatsbyImageData = 'primary_author___profileImageSharp___childrenImageSharp___gatsbyImageData',
  PrimaryAuthorProfileImageSharpChildrenImageSharpId = 'primary_author___profileImageSharp___childrenImageSharp___id',
  PrimaryAuthorProfileImageSharpChildrenImageSharpChildren = 'primary_author___profileImageSharp___childrenImageSharp___children',
  PrimaryAuthorProfileImageSharpChildImageSharpGatsbyImageData = 'primary_author___profileImageSharp___childImageSharp___gatsbyImageData',
  PrimaryAuthorProfileImageSharpChildImageSharpId = 'primary_author___profileImageSharp___childImageSharp___id',
  PrimaryAuthorProfileImageSharpChildImageSharpChildren = 'primary_author___profileImageSharp___childImageSharp___children',
  PrimaryAuthorProfileImageSharpId = 'primary_author___profileImageSharp___id',
  PrimaryAuthorProfileImageSharpParentId = 'primary_author___profileImageSharp___parent___id',
  PrimaryAuthorProfileImageSharpParentChildren = 'primary_author___profileImageSharp___parent___children',
  PrimaryAuthorProfileImageSharpChildren = 'primary_author___profileImageSharp___children',
  PrimaryAuthorProfileImageSharpChildrenId = 'primary_author___profileImageSharp___children___id',
  PrimaryAuthorProfileImageSharpChildrenChildren = 'primary_author___profileImageSharp___children___children',
  PrimaryAuthorProfileImageSharpInternalContent = 'primary_author___profileImageSharp___internal___content',
  PrimaryAuthorProfileImageSharpInternalContentDigest = 'primary_author___profileImageSharp___internal___contentDigest',
  PrimaryAuthorProfileImageSharpInternalDescription = 'primary_author___profileImageSharp___internal___description',
  PrimaryAuthorProfileImageSharpInternalFieldOwners = 'primary_author___profileImageSharp___internal___fieldOwners',
  PrimaryAuthorProfileImageSharpInternalIgnoreType = 'primary_author___profileImageSharp___internal___ignoreType',
  PrimaryAuthorProfileImageSharpInternalMediaType = 'primary_author___profileImageSharp___internal___mediaType',
  PrimaryAuthorProfileImageSharpInternalOwner = 'primary_author___profileImageSharp___internal___owner',
  PrimaryAuthorProfileImageSharpInternalType = 'primary_author___profileImageSharp___internal___type',
  PrimaryAuthorCoverImageSharpSourceInstanceName = 'primary_author___coverImageSharp___sourceInstanceName',
  PrimaryAuthorCoverImageSharpAbsolutePath = 'primary_author___coverImageSharp___absolutePath',
  PrimaryAuthorCoverImageSharpRelativePath = 'primary_author___coverImageSharp___relativePath',
  PrimaryAuthorCoverImageSharpExtension = 'primary_author___coverImageSharp___extension',
  PrimaryAuthorCoverImageSharpSize = 'primary_author___coverImageSharp___size',
  PrimaryAuthorCoverImageSharpPrettySize = 'primary_author___coverImageSharp___prettySize',
  PrimaryAuthorCoverImageSharpModifiedTime = 'primary_author___coverImageSharp___modifiedTime',
  PrimaryAuthorCoverImageSharpAccessTime = 'primary_author___coverImageSharp___accessTime',
  PrimaryAuthorCoverImageSharpChangeTime = 'primary_author___coverImageSharp___changeTime',
  PrimaryAuthorCoverImageSharpBirthTime = 'primary_author___coverImageSharp___birthTime',
  PrimaryAuthorCoverImageSharpRoot = 'primary_author___coverImageSharp___root',
  PrimaryAuthorCoverImageSharpDir = 'primary_author___coverImageSharp___dir',
  PrimaryAuthorCoverImageSharpBase = 'primary_author___coverImageSharp___base',
  PrimaryAuthorCoverImageSharpExt = 'primary_author___coverImageSharp___ext',
  PrimaryAuthorCoverImageSharpName = 'primary_author___coverImageSharp___name',
  PrimaryAuthorCoverImageSharpRelativeDirectory = 'primary_author___coverImageSharp___relativeDirectory',
  PrimaryAuthorCoverImageSharpDev = 'primary_author___coverImageSharp___dev',
  PrimaryAuthorCoverImageSharpMode = 'primary_author___coverImageSharp___mode',
  PrimaryAuthorCoverImageSharpNlink = 'primary_author___coverImageSharp___nlink',
  PrimaryAuthorCoverImageSharpUid = 'primary_author___coverImageSharp___uid',
  PrimaryAuthorCoverImageSharpGid = 'primary_author___coverImageSharp___gid',
  PrimaryAuthorCoverImageSharpRdev = 'primary_author___coverImageSharp___rdev',
  PrimaryAuthorCoverImageSharpIno = 'primary_author___coverImageSharp___ino',
  PrimaryAuthorCoverImageSharpAtimeMs = 'primary_author___coverImageSharp___atimeMs',
  PrimaryAuthorCoverImageSharpMtimeMs = 'primary_author___coverImageSharp___mtimeMs',
  PrimaryAuthorCoverImageSharpCtimeMs = 'primary_author___coverImageSharp___ctimeMs',
  PrimaryAuthorCoverImageSharpAtime = 'primary_author___coverImageSharp___atime',
  PrimaryAuthorCoverImageSharpMtime = 'primary_author___coverImageSharp___mtime',
  PrimaryAuthorCoverImageSharpCtime = 'primary_author___coverImageSharp___ctime',
  PrimaryAuthorCoverImageSharpBirthtime = 'primary_author___coverImageSharp___birthtime',
  PrimaryAuthorCoverImageSharpBirthtimeMs = 'primary_author___coverImageSharp___birthtimeMs',
  PrimaryAuthorCoverImageSharpBlksize = 'primary_author___coverImageSharp___blksize',
  PrimaryAuthorCoverImageSharpBlocks = 'primary_author___coverImageSharp___blocks',
  PrimaryAuthorCoverImageSharpUrl = 'primary_author___coverImageSharp___url',
  PrimaryAuthorCoverImageSharpPublicUrl = 'primary_author___coverImageSharp___publicURL',
  PrimaryAuthorCoverImageSharpChildrenImageSharp = 'primary_author___coverImageSharp___childrenImageSharp',
  PrimaryAuthorCoverImageSharpChildrenImageSharpGatsbyImageData = 'primary_author___coverImageSharp___childrenImageSharp___gatsbyImageData',
  PrimaryAuthorCoverImageSharpChildrenImageSharpId = 'primary_author___coverImageSharp___childrenImageSharp___id',
  PrimaryAuthorCoverImageSharpChildrenImageSharpChildren = 'primary_author___coverImageSharp___childrenImageSharp___children',
  PrimaryAuthorCoverImageSharpChildImageSharpGatsbyImageData = 'primary_author___coverImageSharp___childImageSharp___gatsbyImageData',
  PrimaryAuthorCoverImageSharpChildImageSharpId = 'primary_author___coverImageSharp___childImageSharp___id',
  PrimaryAuthorCoverImageSharpChildImageSharpChildren = 'primary_author___coverImageSharp___childImageSharp___children',
  PrimaryAuthorCoverImageSharpId = 'primary_author___coverImageSharp___id',
  PrimaryAuthorCoverImageSharpParentId = 'primary_author___coverImageSharp___parent___id',
  PrimaryAuthorCoverImageSharpParentChildren = 'primary_author___coverImageSharp___parent___children',
  PrimaryAuthorCoverImageSharpChildren = 'primary_author___coverImageSharp___children',
  PrimaryAuthorCoverImageSharpChildrenId = 'primary_author___coverImageSharp___children___id',
  PrimaryAuthorCoverImageSharpChildrenChildren = 'primary_author___coverImageSharp___children___children',
  PrimaryAuthorCoverImageSharpInternalContent = 'primary_author___coverImageSharp___internal___content',
  PrimaryAuthorCoverImageSharpInternalContentDigest = 'primary_author___coverImageSharp___internal___contentDigest',
  PrimaryAuthorCoverImageSharpInternalDescription = 'primary_author___coverImageSharp___internal___description',
  PrimaryAuthorCoverImageSharpInternalFieldOwners = 'primary_author___coverImageSharp___internal___fieldOwners',
  PrimaryAuthorCoverImageSharpInternalIgnoreType = 'primary_author___coverImageSharp___internal___ignoreType',
  PrimaryAuthorCoverImageSharpInternalMediaType = 'primary_author___coverImageSharp___internal___mediaType',
  PrimaryAuthorCoverImageSharpInternalOwner = 'primary_author___coverImageSharp___internal___owner',
  PrimaryAuthorCoverImageSharpInternalType = 'primary_author___coverImageSharp___internal___type',
  PrimaryAuthorParentId = 'primary_author___parent___id',
  PrimaryAuthorParentParentId = 'primary_author___parent___parent___id',
  PrimaryAuthorParentParentChildren = 'primary_author___parent___parent___children',
  PrimaryAuthorParentChildren = 'primary_author___parent___children',
  PrimaryAuthorParentChildrenId = 'primary_author___parent___children___id',
  PrimaryAuthorParentChildrenChildren = 'primary_author___parent___children___children',
  PrimaryAuthorParentInternalContent = 'primary_author___parent___internal___content',
  PrimaryAuthorParentInternalContentDigest = 'primary_author___parent___internal___contentDigest',
  PrimaryAuthorParentInternalDescription = 'primary_author___parent___internal___description',
  PrimaryAuthorParentInternalFieldOwners = 'primary_author___parent___internal___fieldOwners',
  PrimaryAuthorParentInternalIgnoreType = 'primary_author___parent___internal___ignoreType',
  PrimaryAuthorParentInternalMediaType = 'primary_author___parent___internal___mediaType',
  PrimaryAuthorParentInternalOwner = 'primary_author___parent___internal___owner',
  PrimaryAuthorParentInternalType = 'primary_author___parent___internal___type',
  PrimaryAuthorChildren = 'primary_author___children',
  PrimaryAuthorChildrenId = 'primary_author___children___id',
  PrimaryAuthorChildrenParentId = 'primary_author___children___parent___id',
  PrimaryAuthorChildrenParentChildren = 'primary_author___children___parent___children',
  PrimaryAuthorChildrenChildren = 'primary_author___children___children',
  PrimaryAuthorChildrenChildrenId = 'primary_author___children___children___id',
  PrimaryAuthorChildrenChildrenChildren = 'primary_author___children___children___children',
  PrimaryAuthorChildrenInternalContent = 'primary_author___children___internal___content',
  PrimaryAuthorChildrenInternalContentDigest = 'primary_author___children___internal___contentDigest',
  PrimaryAuthorChildrenInternalDescription = 'primary_author___children___internal___description',
  PrimaryAuthorChildrenInternalFieldOwners = 'primary_author___children___internal___fieldOwners',
  PrimaryAuthorChildrenInternalIgnoreType = 'primary_author___children___internal___ignoreType',
  PrimaryAuthorChildrenInternalMediaType = 'primary_author___children___internal___mediaType',
  PrimaryAuthorChildrenInternalOwner = 'primary_author___children___internal___owner',
  PrimaryAuthorChildrenInternalType = 'primary_author___children___internal___type',
  PrimaryAuthorInternalContent = 'primary_author___internal___content',
  PrimaryAuthorInternalContentDigest = 'primary_author___internal___contentDigest',
  PrimaryAuthorInternalDescription = 'primary_author___internal___description',
  PrimaryAuthorInternalFieldOwners = 'primary_author___internal___fieldOwners',
  PrimaryAuthorInternalIgnoreType = 'primary_author___internal___ignoreType',
  PrimaryAuthorInternalMediaType = 'primary_author___internal___mediaType',
  PrimaryAuthorInternalOwner = 'primary_author___internal___owner',
  PrimaryAuthorInternalType = 'primary_author___internal___type',
  PrimaryTagSlug = 'primary_tag___slug',
  PrimaryTagId = 'primary_tag___id',
  PrimaryTagName = 'primary_tag___name',
  PrimaryTagDescription = 'primary_tag___description',
  PrimaryTagFeatureImage = 'primary_tag___feature_image',
  PrimaryTagVisibility = 'primary_tag___visibility',
  PrimaryTagMetaTitle = 'primary_tag___meta_title',
  PrimaryTagMetaDescription = 'primary_tag___meta_description',
  PrimaryTagUrl = 'primary_tag___url',
  PrimaryTagCountPosts = 'primary_tag___count___posts',
  PrimaryTagPostCount = 'primary_tag___postCount',
  PrimaryTagOgImage = 'primary_tag___og_image',
  PrimaryTagOgTitle = 'primary_tag___og_title',
  PrimaryTagOgDescription = 'primary_tag___og_description',
  PrimaryTagTwitterImage = 'primary_tag___twitter_image',
  PrimaryTagTwitterTitle = 'primary_tag___twitter_title',
  PrimaryTagTwitterDescription = 'primary_tag___twitter_description',
  PrimaryTagCodeinjectionHead = 'primary_tag___codeinjection_head',
  PrimaryTagCodeinjectionFoot = 'primary_tag___codeinjection_foot',
  PrimaryTagCanonicalUrl = 'primary_tag___canonical_url',
  PrimaryTagAccentColor = 'primary_tag___accent_color',
  PrimaryTagGhostId = 'primary_tag___ghostId',
  PrimaryTagFeatureImageSharpSourceInstanceName = 'primary_tag___featureImageSharp___sourceInstanceName',
  PrimaryTagFeatureImageSharpAbsolutePath = 'primary_tag___featureImageSharp___absolutePath',
  PrimaryTagFeatureImageSharpRelativePath = 'primary_tag___featureImageSharp___relativePath',
  PrimaryTagFeatureImageSharpExtension = 'primary_tag___featureImageSharp___extension',
  PrimaryTagFeatureImageSharpSize = 'primary_tag___featureImageSharp___size',
  PrimaryTagFeatureImageSharpPrettySize = 'primary_tag___featureImageSharp___prettySize',
  PrimaryTagFeatureImageSharpModifiedTime = 'primary_tag___featureImageSharp___modifiedTime',
  PrimaryTagFeatureImageSharpAccessTime = 'primary_tag___featureImageSharp___accessTime',
  PrimaryTagFeatureImageSharpChangeTime = 'primary_tag___featureImageSharp___changeTime',
  PrimaryTagFeatureImageSharpBirthTime = 'primary_tag___featureImageSharp___birthTime',
  PrimaryTagFeatureImageSharpRoot = 'primary_tag___featureImageSharp___root',
  PrimaryTagFeatureImageSharpDir = 'primary_tag___featureImageSharp___dir',
  PrimaryTagFeatureImageSharpBase = 'primary_tag___featureImageSharp___base',
  PrimaryTagFeatureImageSharpExt = 'primary_tag___featureImageSharp___ext',
  PrimaryTagFeatureImageSharpName = 'primary_tag___featureImageSharp___name',
  PrimaryTagFeatureImageSharpRelativeDirectory = 'primary_tag___featureImageSharp___relativeDirectory',
  PrimaryTagFeatureImageSharpDev = 'primary_tag___featureImageSharp___dev',
  PrimaryTagFeatureImageSharpMode = 'primary_tag___featureImageSharp___mode',
  PrimaryTagFeatureImageSharpNlink = 'primary_tag___featureImageSharp___nlink',
  PrimaryTagFeatureImageSharpUid = 'primary_tag___featureImageSharp___uid',
  PrimaryTagFeatureImageSharpGid = 'primary_tag___featureImageSharp___gid',
  PrimaryTagFeatureImageSharpRdev = 'primary_tag___featureImageSharp___rdev',
  PrimaryTagFeatureImageSharpIno = 'primary_tag___featureImageSharp___ino',
  PrimaryTagFeatureImageSharpAtimeMs = 'primary_tag___featureImageSharp___atimeMs',
  PrimaryTagFeatureImageSharpMtimeMs = 'primary_tag___featureImageSharp___mtimeMs',
  PrimaryTagFeatureImageSharpCtimeMs = 'primary_tag___featureImageSharp___ctimeMs',
  PrimaryTagFeatureImageSharpAtime = 'primary_tag___featureImageSharp___atime',
  PrimaryTagFeatureImageSharpMtime = 'primary_tag___featureImageSharp___mtime',
  PrimaryTagFeatureImageSharpCtime = 'primary_tag___featureImageSharp___ctime',
  PrimaryTagFeatureImageSharpBirthtime = 'primary_tag___featureImageSharp___birthtime',
  PrimaryTagFeatureImageSharpBirthtimeMs = 'primary_tag___featureImageSharp___birthtimeMs',
  PrimaryTagFeatureImageSharpBlksize = 'primary_tag___featureImageSharp___blksize',
  PrimaryTagFeatureImageSharpBlocks = 'primary_tag___featureImageSharp___blocks',
  PrimaryTagFeatureImageSharpUrl = 'primary_tag___featureImageSharp___url',
  PrimaryTagFeatureImageSharpPublicUrl = 'primary_tag___featureImageSharp___publicURL',
  PrimaryTagFeatureImageSharpChildrenImageSharp = 'primary_tag___featureImageSharp___childrenImageSharp',
  PrimaryTagFeatureImageSharpChildrenImageSharpGatsbyImageData = 'primary_tag___featureImageSharp___childrenImageSharp___gatsbyImageData',
  PrimaryTagFeatureImageSharpChildrenImageSharpId = 'primary_tag___featureImageSharp___childrenImageSharp___id',
  PrimaryTagFeatureImageSharpChildrenImageSharpChildren = 'primary_tag___featureImageSharp___childrenImageSharp___children',
  PrimaryTagFeatureImageSharpChildImageSharpGatsbyImageData = 'primary_tag___featureImageSharp___childImageSharp___gatsbyImageData',
  PrimaryTagFeatureImageSharpChildImageSharpId = 'primary_tag___featureImageSharp___childImageSharp___id',
  PrimaryTagFeatureImageSharpChildImageSharpChildren = 'primary_tag___featureImageSharp___childImageSharp___children',
  PrimaryTagFeatureImageSharpId = 'primary_tag___featureImageSharp___id',
  PrimaryTagFeatureImageSharpParentId = 'primary_tag___featureImageSharp___parent___id',
  PrimaryTagFeatureImageSharpParentChildren = 'primary_tag___featureImageSharp___parent___children',
  PrimaryTagFeatureImageSharpChildren = 'primary_tag___featureImageSharp___children',
  PrimaryTagFeatureImageSharpChildrenId = 'primary_tag___featureImageSharp___children___id',
  PrimaryTagFeatureImageSharpChildrenChildren = 'primary_tag___featureImageSharp___children___children',
  PrimaryTagFeatureImageSharpInternalContent = 'primary_tag___featureImageSharp___internal___content',
  PrimaryTagFeatureImageSharpInternalContentDigest = 'primary_tag___featureImageSharp___internal___contentDigest',
  PrimaryTagFeatureImageSharpInternalDescription = 'primary_tag___featureImageSharp___internal___description',
  PrimaryTagFeatureImageSharpInternalFieldOwners = 'primary_tag___featureImageSharp___internal___fieldOwners',
  PrimaryTagFeatureImageSharpInternalIgnoreType = 'primary_tag___featureImageSharp___internal___ignoreType',
  PrimaryTagFeatureImageSharpInternalMediaType = 'primary_tag___featureImageSharp___internal___mediaType',
  PrimaryTagFeatureImageSharpInternalOwner = 'primary_tag___featureImageSharp___internal___owner',
  PrimaryTagFeatureImageSharpInternalType = 'primary_tag___featureImageSharp___internal___type',
  PrimaryTagParentId = 'primary_tag___parent___id',
  PrimaryTagParentParentId = 'primary_tag___parent___parent___id',
  PrimaryTagParentParentChildren = 'primary_tag___parent___parent___children',
  PrimaryTagParentChildren = 'primary_tag___parent___children',
  PrimaryTagParentChildrenId = 'primary_tag___parent___children___id',
  PrimaryTagParentChildrenChildren = 'primary_tag___parent___children___children',
  PrimaryTagParentInternalContent = 'primary_tag___parent___internal___content',
  PrimaryTagParentInternalContentDigest = 'primary_tag___parent___internal___contentDigest',
  PrimaryTagParentInternalDescription = 'primary_tag___parent___internal___description',
  PrimaryTagParentInternalFieldOwners = 'primary_tag___parent___internal___fieldOwners',
  PrimaryTagParentInternalIgnoreType = 'primary_tag___parent___internal___ignoreType',
  PrimaryTagParentInternalMediaType = 'primary_tag___parent___internal___mediaType',
  PrimaryTagParentInternalOwner = 'primary_tag___parent___internal___owner',
  PrimaryTagParentInternalType = 'primary_tag___parent___internal___type',
  PrimaryTagChildren = 'primary_tag___children',
  PrimaryTagChildrenId = 'primary_tag___children___id',
  PrimaryTagChildrenParentId = 'primary_tag___children___parent___id',
  PrimaryTagChildrenParentChildren = 'primary_tag___children___parent___children',
  PrimaryTagChildrenChildren = 'primary_tag___children___children',
  PrimaryTagChildrenChildrenId = 'primary_tag___children___children___id',
  PrimaryTagChildrenChildrenChildren = 'primary_tag___children___children___children',
  PrimaryTagChildrenInternalContent = 'primary_tag___children___internal___content',
  PrimaryTagChildrenInternalContentDigest = 'primary_tag___children___internal___contentDigest',
  PrimaryTagChildrenInternalDescription = 'primary_tag___children___internal___description',
  PrimaryTagChildrenInternalFieldOwners = 'primary_tag___children___internal___fieldOwners',
  PrimaryTagChildrenInternalIgnoreType = 'primary_tag___children___internal___ignoreType',
  PrimaryTagChildrenInternalMediaType = 'primary_tag___children___internal___mediaType',
  PrimaryTagChildrenInternalOwner = 'primary_tag___children___internal___owner',
  PrimaryTagChildrenInternalType = 'primary_tag___children___internal___type',
  PrimaryTagInternalContent = 'primary_tag___internal___content',
  PrimaryTagInternalContentDigest = 'primary_tag___internal___contentDigest',
  PrimaryTagInternalDescription = 'primary_tag___internal___description',
  PrimaryTagInternalFieldOwners = 'primary_tag___internal___fieldOwners',
  PrimaryTagInternalIgnoreType = 'primary_tag___internal___ignoreType',
  PrimaryTagInternalMediaType = 'primary_tag___internal___mediaType',
  PrimaryTagInternalOwner = 'primary_tag___internal___owner',
  PrimaryTagInternalType = 'primary_tag___internal___type',
  Url = 'url',
  Excerpt = 'excerpt',
  ReadingTime = 'reading_time',
  EmailSubject = 'email_subject',
  Plaintext = 'plaintext',
  Page = 'page',
  OgImage = 'og_image',
  OgTitle = 'og_title',
  OgDescription = 'og_description',
  TwitterImage = 'twitter_image',
  TwitterTitle = 'twitter_title',
  TwitterDescription = 'twitter_description',
  MetaTitle = 'meta_title',
  MetaDescription = 'meta_description',
  Access = 'access',
  GhostId = 'ghostId',
  FeatureImageSharpSourceInstanceName = 'featureImageSharp___sourceInstanceName',
  FeatureImageSharpAbsolutePath = 'featureImageSharp___absolutePath',
  FeatureImageSharpRelativePath = 'featureImageSharp___relativePath',
  FeatureImageSharpExtension = 'featureImageSharp___extension',
  FeatureImageSharpSize = 'featureImageSharp___size',
  FeatureImageSharpPrettySize = 'featureImageSharp___prettySize',
  FeatureImageSharpModifiedTime = 'featureImageSharp___modifiedTime',
  FeatureImageSharpAccessTime = 'featureImageSharp___accessTime',
  FeatureImageSharpChangeTime = 'featureImageSharp___changeTime',
  FeatureImageSharpBirthTime = 'featureImageSharp___birthTime',
  FeatureImageSharpRoot = 'featureImageSharp___root',
  FeatureImageSharpDir = 'featureImageSharp___dir',
  FeatureImageSharpBase = 'featureImageSharp___base',
  FeatureImageSharpExt = 'featureImageSharp___ext',
  FeatureImageSharpName = 'featureImageSharp___name',
  FeatureImageSharpRelativeDirectory = 'featureImageSharp___relativeDirectory',
  FeatureImageSharpDev = 'featureImageSharp___dev',
  FeatureImageSharpMode = 'featureImageSharp___mode',
  FeatureImageSharpNlink = 'featureImageSharp___nlink',
  FeatureImageSharpUid = 'featureImageSharp___uid',
  FeatureImageSharpGid = 'featureImageSharp___gid',
  FeatureImageSharpRdev = 'featureImageSharp___rdev',
  FeatureImageSharpIno = 'featureImageSharp___ino',
  FeatureImageSharpAtimeMs = 'featureImageSharp___atimeMs',
  FeatureImageSharpMtimeMs = 'featureImageSharp___mtimeMs',
  FeatureImageSharpCtimeMs = 'featureImageSharp___ctimeMs',
  FeatureImageSharpAtime = 'featureImageSharp___atime',
  FeatureImageSharpMtime = 'featureImageSharp___mtime',
  FeatureImageSharpCtime = 'featureImageSharp___ctime',
  FeatureImageSharpBirthtime = 'featureImageSharp___birthtime',
  FeatureImageSharpBirthtimeMs = 'featureImageSharp___birthtimeMs',
  FeatureImageSharpBlksize = 'featureImageSharp___blksize',
  FeatureImageSharpBlocks = 'featureImageSharp___blocks',
  FeatureImageSharpUrl = 'featureImageSharp___url',
  FeatureImageSharpPublicUrl = 'featureImageSharp___publicURL',
  FeatureImageSharpChildrenImageSharp = 'featureImageSharp___childrenImageSharp',
  FeatureImageSharpChildrenImageSharpFixedBase64 = 'featureImageSharp___childrenImageSharp___fixed___base64',
  FeatureImageSharpChildrenImageSharpFixedTracedSvg = 'featureImageSharp___childrenImageSharp___fixed___tracedSVG',
  FeatureImageSharpChildrenImageSharpFixedAspectRatio = 'featureImageSharp___childrenImageSharp___fixed___aspectRatio',
  FeatureImageSharpChildrenImageSharpFixedWidth = 'featureImageSharp___childrenImageSharp___fixed___width',
  FeatureImageSharpChildrenImageSharpFixedHeight = 'featureImageSharp___childrenImageSharp___fixed___height',
  FeatureImageSharpChildrenImageSharpFixedSrc = 'featureImageSharp___childrenImageSharp___fixed___src',
  FeatureImageSharpChildrenImageSharpFixedSrcSet = 'featureImageSharp___childrenImageSharp___fixed___srcSet',
  FeatureImageSharpChildrenImageSharpFixedSrcWebp = 'featureImageSharp___childrenImageSharp___fixed___srcWebp',
  FeatureImageSharpChildrenImageSharpFixedSrcSetWebp = 'featureImageSharp___childrenImageSharp___fixed___srcSetWebp',
  FeatureImageSharpChildrenImageSharpFixedOriginalName = 'featureImageSharp___childrenImageSharp___fixed___originalName',
  FeatureImageSharpChildrenImageSharpFluidBase64 = 'featureImageSharp___childrenImageSharp___fluid___base64',
  FeatureImageSharpChildrenImageSharpFluidTracedSvg = 'featureImageSharp___childrenImageSharp___fluid___tracedSVG',
  FeatureImageSharpChildrenImageSharpFluidAspectRatio = 'featureImageSharp___childrenImageSharp___fluid___aspectRatio',
  FeatureImageSharpChildrenImageSharpFluidSrc = 'featureImageSharp___childrenImageSharp___fluid___src',
  FeatureImageSharpChildrenImageSharpFluidSrcSet = 'featureImageSharp___childrenImageSharp___fluid___srcSet',
  FeatureImageSharpChildrenImageSharpFluidSrcWebp = 'featureImageSharp___childrenImageSharp___fluid___srcWebp',
  FeatureImageSharpChildrenImageSharpFluidSrcSetWebp = 'featureImageSharp___childrenImageSharp___fluid___srcSetWebp',
  FeatureImageSharpChildrenImageSharpFluidSizes = 'featureImageSharp___childrenImageSharp___fluid___sizes',
  FeatureImageSharpChildrenImageSharpFluidOriginalImg = 'featureImageSharp___childrenImageSharp___fluid___originalImg',
  FeatureImageSharpChildrenImageSharpFluidOriginalName = 'featureImageSharp___childrenImageSharp___fluid___originalName',
  FeatureImageSharpChildrenImageSharpFluidPresentationWidth = 'featureImageSharp___childrenImageSharp___fluid___presentationWidth',
  FeatureImageSharpChildrenImageSharpFluidPresentationHeight = 'featureImageSharp___childrenImageSharp___fluid___presentationHeight',
  FeatureImageSharpChildrenImageSharpGatsbyImageData = 'featureImageSharp___childrenImageSharp___gatsbyImageData',
  FeatureImageSharpChildrenImageSharpOriginalWidth = 'featureImageSharp___childrenImageSharp___original___width',
  FeatureImageSharpChildrenImageSharpOriginalHeight = 'featureImageSharp___childrenImageSharp___original___height',
  FeatureImageSharpChildrenImageSharpOriginalSrc = 'featureImageSharp___childrenImageSharp___original___src',
  FeatureImageSharpChildrenImageSharpResizeSrc = 'featureImageSharp___childrenImageSharp___resize___src',
  FeatureImageSharpChildrenImageSharpResizeTracedSvg = 'featureImageSharp___childrenImageSharp___resize___tracedSVG',
  FeatureImageSharpChildrenImageSharpResizeWidth = 'featureImageSharp___childrenImageSharp___resize___width',
  FeatureImageSharpChildrenImageSharpResizeHeight = 'featureImageSharp___childrenImageSharp___resize___height',
  FeatureImageSharpChildrenImageSharpResizeAspectRatio = 'featureImageSharp___childrenImageSharp___resize___aspectRatio',
  FeatureImageSharpChildrenImageSharpResizeOriginalName = 'featureImageSharp___childrenImageSharp___resize___originalName',
  FeatureImageSharpChildrenImageSharpId = 'featureImageSharp___childrenImageSharp___id',
  FeatureImageSharpChildrenImageSharpParentId = 'featureImageSharp___childrenImageSharp___parent___id',
  FeatureImageSharpChildrenImageSharpParentChildren = 'featureImageSharp___childrenImageSharp___parent___children',
  FeatureImageSharpChildrenImageSharpChildren = 'featureImageSharp___childrenImageSharp___children',
  FeatureImageSharpChildrenImageSharpChildrenId = 'featureImageSharp___childrenImageSharp___children___id',
  FeatureImageSharpChildrenImageSharpChildrenChildren = 'featureImageSharp___childrenImageSharp___children___children',
  FeatureImageSharpChildrenImageSharpInternalContent = 'featureImageSharp___childrenImageSharp___internal___content',
  FeatureImageSharpChildrenImageSharpInternalContentDigest = 'featureImageSharp___childrenImageSharp___internal___contentDigest',
  FeatureImageSharpChildrenImageSharpInternalDescription = 'featureImageSharp___childrenImageSharp___internal___description',
  FeatureImageSharpChildrenImageSharpInternalFieldOwners = 'featureImageSharp___childrenImageSharp___internal___fieldOwners',
  FeatureImageSharpChildrenImageSharpInternalIgnoreType = 'featureImageSharp___childrenImageSharp___internal___ignoreType',
  FeatureImageSharpChildrenImageSharpInternalMediaType = 'featureImageSharp___childrenImageSharp___internal___mediaType',
  FeatureImageSharpChildrenImageSharpInternalOwner = 'featureImageSharp___childrenImageSharp___internal___owner',
  FeatureImageSharpChildrenImageSharpInternalType = 'featureImageSharp___childrenImageSharp___internal___type',
  FeatureImageSharpChildImageSharpFixedBase64 = 'featureImageSharp___childImageSharp___fixed___base64',
  FeatureImageSharpChildImageSharpFixedTracedSvg = 'featureImageSharp___childImageSharp___fixed___tracedSVG',
  FeatureImageSharpChildImageSharpFixedAspectRatio = 'featureImageSharp___childImageSharp___fixed___aspectRatio',
  FeatureImageSharpChildImageSharpFixedWidth = 'featureImageSharp___childImageSharp___fixed___width',
  FeatureImageSharpChildImageSharpFixedHeight = 'featureImageSharp___childImageSharp___fixed___height',
  FeatureImageSharpChildImageSharpFixedSrc = 'featureImageSharp___childImageSharp___fixed___src',
  FeatureImageSharpChildImageSharpFixedSrcSet = 'featureImageSharp___childImageSharp___fixed___srcSet',
  FeatureImageSharpChildImageSharpFixedSrcWebp = 'featureImageSharp___childImageSharp___fixed___srcWebp',
  FeatureImageSharpChildImageSharpFixedSrcSetWebp = 'featureImageSharp___childImageSharp___fixed___srcSetWebp',
  FeatureImageSharpChildImageSharpFixedOriginalName = 'featureImageSharp___childImageSharp___fixed___originalName',
  FeatureImageSharpChildImageSharpFluidBase64 = 'featureImageSharp___childImageSharp___fluid___base64',
  FeatureImageSharpChildImageSharpFluidTracedSvg = 'featureImageSharp___childImageSharp___fluid___tracedSVG',
  FeatureImageSharpChildImageSharpFluidAspectRatio = 'featureImageSharp___childImageSharp___fluid___aspectRatio',
  FeatureImageSharpChildImageSharpFluidSrc = 'featureImageSharp___childImageSharp___fluid___src',
  FeatureImageSharpChildImageSharpFluidSrcSet = 'featureImageSharp___childImageSharp___fluid___srcSet',
  FeatureImageSharpChildImageSharpFluidSrcWebp = 'featureImageSharp___childImageSharp___fluid___srcWebp',
  FeatureImageSharpChildImageSharpFluidSrcSetWebp = 'featureImageSharp___childImageSharp___fluid___srcSetWebp',
  FeatureImageSharpChildImageSharpFluidSizes = 'featureImageSharp___childImageSharp___fluid___sizes',
  FeatureImageSharpChildImageSharpFluidOriginalImg = 'featureImageSharp___childImageSharp___fluid___originalImg',
  FeatureImageSharpChildImageSharpFluidOriginalName = 'featureImageSharp___childImageSharp___fluid___originalName',
  FeatureImageSharpChildImageSharpFluidPresentationWidth = 'featureImageSharp___childImageSharp___fluid___presentationWidth',
  FeatureImageSharpChildImageSharpFluidPresentationHeight = 'featureImageSharp___childImageSharp___fluid___presentationHeight',
  FeatureImageSharpChildImageSharpGatsbyImageData = 'featureImageSharp___childImageSharp___gatsbyImageData',
  FeatureImageSharpChildImageSharpOriginalWidth = 'featureImageSharp___childImageSharp___original___width',
  FeatureImageSharpChildImageSharpOriginalHeight = 'featureImageSharp___childImageSharp___original___height',
  FeatureImageSharpChildImageSharpOriginalSrc = 'featureImageSharp___childImageSharp___original___src',
  FeatureImageSharpChildImageSharpResizeSrc = 'featureImageSharp___childImageSharp___resize___src',
  FeatureImageSharpChildImageSharpResizeTracedSvg = 'featureImageSharp___childImageSharp___resize___tracedSVG',
  FeatureImageSharpChildImageSharpResizeWidth = 'featureImageSharp___childImageSharp___resize___width',
  FeatureImageSharpChildImageSharpResizeHeight = 'featureImageSharp___childImageSharp___resize___height',
  FeatureImageSharpChildImageSharpResizeAspectRatio = 'featureImageSharp___childImageSharp___resize___aspectRatio',
  FeatureImageSharpChildImageSharpResizeOriginalName = 'featureImageSharp___childImageSharp___resize___originalName',
  FeatureImageSharpChildImageSharpId = 'featureImageSharp___childImageSharp___id',
  FeatureImageSharpChildImageSharpParentId = 'featureImageSharp___childImageSharp___parent___id',
  FeatureImageSharpChildImageSharpParentChildren = 'featureImageSharp___childImageSharp___parent___children',
  FeatureImageSharpChildImageSharpChildren = 'featureImageSharp___childImageSharp___children',
  FeatureImageSharpChildImageSharpChildrenId = 'featureImageSharp___childImageSharp___children___id',
  FeatureImageSharpChildImageSharpChildrenChildren = 'featureImageSharp___childImageSharp___children___children',
  FeatureImageSharpChildImageSharpInternalContent = 'featureImageSharp___childImageSharp___internal___content',
  FeatureImageSharpChildImageSharpInternalContentDigest = 'featureImageSharp___childImageSharp___internal___contentDigest',
  FeatureImageSharpChildImageSharpInternalDescription = 'featureImageSharp___childImageSharp___internal___description',
  FeatureImageSharpChildImageSharpInternalFieldOwners = 'featureImageSharp___childImageSharp___internal___fieldOwners',
  FeatureImageSharpChildImageSharpInternalIgnoreType = 'featureImageSharp___childImageSharp___internal___ignoreType',
  FeatureImageSharpChildImageSharpInternalMediaType = 'featureImageSharp___childImageSharp___internal___mediaType',
  FeatureImageSharpChildImageSharpInternalOwner = 'featureImageSharp___childImageSharp___internal___owner',
  FeatureImageSharpChildImageSharpInternalType = 'featureImageSharp___childImageSharp___internal___type',
  FeatureImageSharpId = 'featureImageSharp___id',
  FeatureImageSharpParentId = 'featureImageSharp___parent___id',
  FeatureImageSharpParentParentId = 'featureImageSharp___parent___parent___id',
  FeatureImageSharpParentParentChildren = 'featureImageSharp___parent___parent___children',
  FeatureImageSharpParentChildren = 'featureImageSharp___parent___children',
  FeatureImageSharpParentChildrenId = 'featureImageSharp___parent___children___id',
  FeatureImageSharpParentChildrenChildren = 'featureImageSharp___parent___children___children',
  FeatureImageSharpParentInternalContent = 'featureImageSharp___parent___internal___content',
  FeatureImageSharpParentInternalContentDigest = 'featureImageSharp___parent___internal___contentDigest',
  FeatureImageSharpParentInternalDescription = 'featureImageSharp___parent___internal___description',
  FeatureImageSharpParentInternalFieldOwners = 'featureImageSharp___parent___internal___fieldOwners',
  FeatureImageSharpParentInternalIgnoreType = 'featureImageSharp___parent___internal___ignoreType',
  FeatureImageSharpParentInternalMediaType = 'featureImageSharp___parent___internal___mediaType',
  FeatureImageSharpParentInternalOwner = 'featureImageSharp___parent___internal___owner',
  FeatureImageSharpParentInternalType = 'featureImageSharp___parent___internal___type',
  FeatureImageSharpChildren = 'featureImageSharp___children',
  FeatureImageSharpChildrenId = 'featureImageSharp___children___id',
  FeatureImageSharpChildrenParentId = 'featureImageSharp___children___parent___id',
  FeatureImageSharpChildrenParentChildren = 'featureImageSharp___children___parent___children',
  FeatureImageSharpChildrenChildren = 'featureImageSharp___children___children',
  FeatureImageSharpChildrenChildrenId = 'featureImageSharp___children___children___id',
  FeatureImageSharpChildrenChildrenChildren = 'featureImageSharp___children___children___children',
  FeatureImageSharpChildrenInternalContent = 'featureImageSharp___children___internal___content',
  FeatureImageSharpChildrenInternalContentDigest = 'featureImageSharp___children___internal___contentDigest',
  FeatureImageSharpChildrenInternalDescription = 'featureImageSharp___children___internal___description',
  FeatureImageSharpChildrenInternalFieldOwners = 'featureImageSharp___children___internal___fieldOwners',
  FeatureImageSharpChildrenInternalIgnoreType = 'featureImageSharp___children___internal___ignoreType',
  FeatureImageSharpChildrenInternalMediaType = 'featureImageSharp___children___internal___mediaType',
  FeatureImageSharpChildrenInternalOwner = 'featureImageSharp___children___internal___owner',
  FeatureImageSharpChildrenInternalType = 'featureImageSharp___children___internal___type',
  FeatureImageSharpInternalContent = 'featureImageSharp___internal___content',
  FeatureImageSharpInternalContentDigest = 'featureImageSharp___internal___contentDigest',
  FeatureImageSharpInternalDescription = 'featureImageSharp___internal___description',
  FeatureImageSharpInternalFieldOwners = 'featureImageSharp___internal___fieldOwners',
  FeatureImageSharpInternalIgnoreType = 'featureImageSharp___internal___ignoreType',
  FeatureImageSharpInternalMediaType = 'featureImageSharp___internal___mediaType',
  FeatureImageSharpInternalOwner = 'featureImageSharp___internal___owner',
  FeatureImageSharpInternalType = 'featureImageSharp___internal___type',
  ChildrenHtmlRehype = 'childrenHtmlRehype',
  ChildrenHtmlRehypeHtml = 'childrenHtmlRehype___html',
  ChildrenHtmlRehypeHtmlAst = 'childrenHtmlRehype___htmlAst',
  ChildrenHtmlRehypeTableOfContents = 'childrenHtmlRehype___tableOfContents',
  ChildrenHtmlRehypeContextUrl = 'childrenHtmlRehype___context___url',
  ChildrenHtmlRehypeContextSlug = 'childrenHtmlRehype___context___slug',
  ChildrenHtmlRehypeContextFeatureImage = 'childrenHtmlRehype___context___feature_image',
  ChildrenHtmlRehypeId = 'childrenHtmlRehype___id',
  ChildrenHtmlRehypeParentId = 'childrenHtmlRehype___parent___id',
  ChildrenHtmlRehypeParentParentId = 'childrenHtmlRehype___parent___parent___id',
  ChildrenHtmlRehypeParentParentChildren = 'childrenHtmlRehype___parent___parent___children',
  ChildrenHtmlRehypeParentChildren = 'childrenHtmlRehype___parent___children',
  ChildrenHtmlRehypeParentChildrenId = 'childrenHtmlRehype___parent___children___id',
  ChildrenHtmlRehypeParentChildrenChildren = 'childrenHtmlRehype___parent___children___children',
  ChildrenHtmlRehypeParentInternalContent = 'childrenHtmlRehype___parent___internal___content',
  ChildrenHtmlRehypeParentInternalContentDigest = 'childrenHtmlRehype___parent___internal___contentDigest',
  ChildrenHtmlRehypeParentInternalDescription = 'childrenHtmlRehype___parent___internal___description',
  ChildrenHtmlRehypeParentInternalFieldOwners = 'childrenHtmlRehype___parent___internal___fieldOwners',
  ChildrenHtmlRehypeParentInternalIgnoreType = 'childrenHtmlRehype___parent___internal___ignoreType',
  ChildrenHtmlRehypeParentInternalMediaType = 'childrenHtmlRehype___parent___internal___mediaType',
  ChildrenHtmlRehypeParentInternalOwner = 'childrenHtmlRehype___parent___internal___owner',
  ChildrenHtmlRehypeParentInternalType = 'childrenHtmlRehype___parent___internal___type',
  ChildrenHtmlRehypeChildren = 'childrenHtmlRehype___children',
  ChildrenHtmlRehypeChildrenId = 'childrenHtmlRehype___children___id',
  ChildrenHtmlRehypeChildrenParentId = 'childrenHtmlRehype___children___parent___id',
  ChildrenHtmlRehypeChildrenParentChildren = 'childrenHtmlRehype___children___parent___children',
  ChildrenHtmlRehypeChildrenChildren = 'childrenHtmlRehype___children___children',
  ChildrenHtmlRehypeChildrenChildrenId = 'childrenHtmlRehype___children___children___id',
  ChildrenHtmlRehypeChildrenChildrenChildren = 'childrenHtmlRehype___children___children___children',
  ChildrenHtmlRehypeChildrenInternalContent = 'childrenHtmlRehype___children___internal___content',
  ChildrenHtmlRehypeChildrenInternalContentDigest = 'childrenHtmlRehype___children___internal___contentDigest',
  ChildrenHtmlRehypeChildrenInternalDescription = 'childrenHtmlRehype___children___internal___description',
  ChildrenHtmlRehypeChildrenInternalFieldOwners = 'childrenHtmlRehype___children___internal___fieldOwners',
  ChildrenHtmlRehypeChildrenInternalIgnoreType = 'childrenHtmlRehype___children___internal___ignoreType',
  ChildrenHtmlRehypeChildrenInternalMediaType = 'childrenHtmlRehype___children___internal___mediaType',
  ChildrenHtmlRehypeChildrenInternalOwner = 'childrenHtmlRehype___children___internal___owner',
  ChildrenHtmlRehypeChildrenInternalType = 'childrenHtmlRehype___children___internal___type',
  ChildrenHtmlRehypeInternalContent = 'childrenHtmlRehype___internal___content',
  ChildrenHtmlRehypeInternalContentDigest = 'childrenHtmlRehype___internal___contentDigest',
  ChildrenHtmlRehypeInternalDescription = 'childrenHtmlRehype___internal___description',
  ChildrenHtmlRehypeInternalFieldOwners = 'childrenHtmlRehype___internal___fieldOwners',
  ChildrenHtmlRehypeInternalIgnoreType = 'childrenHtmlRehype___internal___ignoreType',
  ChildrenHtmlRehypeInternalMediaType = 'childrenHtmlRehype___internal___mediaType',
  ChildrenHtmlRehypeInternalOwner = 'childrenHtmlRehype___internal___owner',
  ChildrenHtmlRehypeInternalType = 'childrenHtmlRehype___internal___type',
  ChildHtmlRehypeHtml = 'childHtmlRehype___html',
  ChildHtmlRehypeHtmlAst = 'childHtmlRehype___htmlAst',
  ChildHtmlRehypeTableOfContents = 'childHtmlRehype___tableOfContents',
  ChildHtmlRehypeContextUrl = 'childHtmlRehype___context___url',
  ChildHtmlRehypeContextSlug = 'childHtmlRehype___context___slug',
  ChildHtmlRehypeContextFeatureImage = 'childHtmlRehype___context___feature_image',
  ChildHtmlRehypeId = 'childHtmlRehype___id',
  ChildHtmlRehypeParentId = 'childHtmlRehype___parent___id',
  ChildHtmlRehypeParentParentId = 'childHtmlRehype___parent___parent___id',
  ChildHtmlRehypeParentParentChildren = 'childHtmlRehype___parent___parent___children',
  ChildHtmlRehypeParentChildren = 'childHtmlRehype___parent___children',
  ChildHtmlRehypeParentChildrenId = 'childHtmlRehype___parent___children___id',
  ChildHtmlRehypeParentChildrenChildren = 'childHtmlRehype___parent___children___children',
  ChildHtmlRehypeParentInternalContent = 'childHtmlRehype___parent___internal___content',
  ChildHtmlRehypeParentInternalContentDigest = 'childHtmlRehype___parent___internal___contentDigest',
  ChildHtmlRehypeParentInternalDescription = 'childHtmlRehype___parent___internal___description',
  ChildHtmlRehypeParentInternalFieldOwners = 'childHtmlRehype___parent___internal___fieldOwners',
  ChildHtmlRehypeParentInternalIgnoreType = 'childHtmlRehype___parent___internal___ignoreType',
  ChildHtmlRehypeParentInternalMediaType = 'childHtmlRehype___parent___internal___mediaType',
  ChildHtmlRehypeParentInternalOwner = 'childHtmlRehype___parent___internal___owner',
  ChildHtmlRehypeParentInternalType = 'childHtmlRehype___parent___internal___type',
  ChildHtmlRehypeChildren = 'childHtmlRehype___children',
  ChildHtmlRehypeChildrenId = 'childHtmlRehype___children___id',
  ChildHtmlRehypeChildrenParentId = 'childHtmlRehype___children___parent___id',
  ChildHtmlRehypeChildrenParentChildren = 'childHtmlRehype___children___parent___children',
  ChildHtmlRehypeChildrenChildren = 'childHtmlRehype___children___children',
  ChildHtmlRehypeChildrenChildrenId = 'childHtmlRehype___children___children___id',
  ChildHtmlRehypeChildrenChildrenChildren = 'childHtmlRehype___children___children___children',
  ChildHtmlRehypeChildrenInternalContent = 'childHtmlRehype___children___internal___content',
  ChildHtmlRehypeChildrenInternalContentDigest = 'childHtmlRehype___children___internal___contentDigest',
  ChildHtmlRehypeChildrenInternalDescription = 'childHtmlRehype___children___internal___description',
  ChildHtmlRehypeChildrenInternalFieldOwners = 'childHtmlRehype___children___internal___fieldOwners',
  ChildHtmlRehypeChildrenInternalIgnoreType = 'childHtmlRehype___children___internal___ignoreType',
  ChildHtmlRehypeChildrenInternalMediaType = 'childHtmlRehype___children___internal___mediaType',
  ChildHtmlRehypeChildrenInternalOwner = 'childHtmlRehype___children___internal___owner',
  ChildHtmlRehypeChildrenInternalType = 'childHtmlRehype___children___internal___type',
  ChildHtmlRehypeInternalContent = 'childHtmlRehype___internal___content',
  ChildHtmlRehypeInternalContentDigest = 'childHtmlRehype___internal___contentDigest',
  ChildHtmlRehypeInternalDescription = 'childHtmlRehype___internal___description',
  ChildHtmlRehypeInternalFieldOwners = 'childHtmlRehype___internal___fieldOwners',
  ChildHtmlRehypeInternalIgnoreType = 'childHtmlRehype___internal___ignoreType',
  ChildHtmlRehypeInternalMediaType = 'childHtmlRehype___internal___mediaType',
  ChildHtmlRehypeInternalOwner = 'childHtmlRehype___internal___owner',
  ChildHtmlRehypeInternalType = 'childHtmlRehype___internal___type',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type GhostPostGroupConnection = {
  __typename?: 'GhostPostGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<GhostPostEdge>;
  nodes: Array<GhostPost>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type GhostPostFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  uuid?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  comment_id?: Maybe<StringQueryOperatorInput>;
  feature_image?: Maybe<StringQueryOperatorInput>;
  featured?: Maybe<BooleanQueryOperatorInput>;
  visibility?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  published_at?: Maybe<DateQueryOperatorInput>;
  custom_excerpt?: Maybe<StringQueryOperatorInput>;
  codeinjection_head?: Maybe<StringQueryOperatorInput>;
  codeinjection_foot?: Maybe<StringQueryOperatorInput>;
  codeinjection_styles?: Maybe<StringQueryOperatorInput>;
  custom_template?: Maybe<StringQueryOperatorInput>;
  canonical_url?: Maybe<StringQueryOperatorInput>;
  send_email_when_published?: Maybe<BooleanQueryOperatorInput>;
  tags?: Maybe<GhostTagFilterListInput>;
  authors?: Maybe<GhostAuthorFilterListInput>;
  primary_author?: Maybe<GhostAuthorFilterInput>;
  primary_tag?: Maybe<GhostTagFilterInput>;
  url?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  reading_time?: Maybe<IntQueryOperatorInput>;
  email_subject?: Maybe<StringQueryOperatorInput>;
  plaintext?: Maybe<StringQueryOperatorInput>;
  page?: Maybe<BooleanQueryOperatorInput>;
  og_image?: Maybe<StringQueryOperatorInput>;
  og_title?: Maybe<StringQueryOperatorInput>;
  og_description?: Maybe<StringQueryOperatorInput>;
  twitter_image?: Maybe<StringQueryOperatorInput>;
  twitter_title?: Maybe<StringQueryOperatorInput>;
  twitter_description?: Maybe<StringQueryOperatorInput>;
  meta_title?: Maybe<StringQueryOperatorInput>;
  meta_description?: Maybe<StringQueryOperatorInput>;
  access?: Maybe<BooleanQueryOperatorInput>;
  ghostId?: Maybe<StringQueryOperatorInput>;
  featureImageSharp?: Maybe<FileFilterInput>;
  childrenHtmlRehype?: Maybe<HtmlRehypeFilterListInput>;
  childHtmlRehype?: Maybe<HtmlRehypeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type GhostPostSortInput = {
  fields?: Maybe<Array<Maybe<GhostPostFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type GhostPageConnection = {
  __typename?: 'GhostPageConnection';
  totalCount: Scalars['Int'];
  edges: Array<GhostPageEdge>;
  nodes: Array<GhostPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<GhostPageGroupConnection>;
};

export type GhostPageConnectionDistinctArgs = {
  field: GhostPageFieldsEnum;
};

export type GhostPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: GhostPageFieldsEnum;
};

export type GhostPageEdge = {
  __typename?: 'GhostPageEdge';
  next?: Maybe<GhostPage>;
  node: GhostPage;
  previous?: Maybe<GhostPage>;
};

export enum GhostPageFieldsEnum {
  Slug = 'slug',
  Id = 'id',
  Uuid = 'uuid',
  Title = 'title',
  Html = 'html',
  CommentId = 'comment_id',
  FeatureImage = 'feature_image',
  Featured = 'featured',
  Visibility = 'visibility',
  CreatedAt = 'created_at',
  UpdatedAt = 'updated_at',
  PublishedAt = 'published_at',
  CustomExcerpt = 'custom_excerpt',
  CodeinjectionHead = 'codeinjection_head',
  CodeinjectionFoot = 'codeinjection_foot',
  CodeinjectionStyles = 'codeinjection_styles',
  CustomTemplate = 'custom_template',
  CanonicalUrl = 'canonical_url',
  SendEmailWhenPublished = 'send_email_when_published',
  Tags = 'tags',
  TagsSlug = 'tags___slug',
  TagsId = 'tags___id',
  TagsName = 'tags___name',
  TagsDescription = 'tags___description',
  TagsFeatureImage = 'tags___feature_image',
  TagsVisibility = 'tags___visibility',
  TagsMetaTitle = 'tags___meta_title',
  TagsMetaDescription = 'tags___meta_description',
  TagsUrl = 'tags___url',
  TagsCountPosts = 'tags___count___posts',
  TagsPostCount = 'tags___postCount',
  TagsOgImage = 'tags___og_image',
  TagsOgTitle = 'tags___og_title',
  TagsOgDescription = 'tags___og_description',
  TagsTwitterImage = 'tags___twitter_image',
  TagsTwitterTitle = 'tags___twitter_title',
  TagsTwitterDescription = 'tags___twitter_description',
  TagsCodeinjectionHead = 'tags___codeinjection_head',
  TagsCodeinjectionFoot = 'tags___codeinjection_foot',
  TagsCanonicalUrl = 'tags___canonical_url',
  TagsAccentColor = 'tags___accent_color',
  TagsGhostId = 'tags___ghostId',
  TagsFeatureImageSharpSourceInstanceName = 'tags___featureImageSharp___sourceInstanceName',
  TagsFeatureImageSharpAbsolutePath = 'tags___featureImageSharp___absolutePath',
  TagsFeatureImageSharpRelativePath = 'tags___featureImageSharp___relativePath',
  TagsFeatureImageSharpExtension = 'tags___featureImageSharp___extension',
  TagsFeatureImageSharpSize = 'tags___featureImageSharp___size',
  TagsFeatureImageSharpPrettySize = 'tags___featureImageSharp___prettySize',
  TagsFeatureImageSharpModifiedTime = 'tags___featureImageSharp___modifiedTime',
  TagsFeatureImageSharpAccessTime = 'tags___featureImageSharp___accessTime',
  TagsFeatureImageSharpChangeTime = 'tags___featureImageSharp___changeTime',
  TagsFeatureImageSharpBirthTime = 'tags___featureImageSharp___birthTime',
  TagsFeatureImageSharpRoot = 'tags___featureImageSharp___root',
  TagsFeatureImageSharpDir = 'tags___featureImageSharp___dir',
  TagsFeatureImageSharpBase = 'tags___featureImageSharp___base',
  TagsFeatureImageSharpExt = 'tags___featureImageSharp___ext',
  TagsFeatureImageSharpName = 'tags___featureImageSharp___name',
  TagsFeatureImageSharpRelativeDirectory = 'tags___featureImageSharp___relativeDirectory',
  TagsFeatureImageSharpDev = 'tags___featureImageSharp___dev',
  TagsFeatureImageSharpMode = 'tags___featureImageSharp___mode',
  TagsFeatureImageSharpNlink = 'tags___featureImageSharp___nlink',
  TagsFeatureImageSharpUid = 'tags___featureImageSharp___uid',
  TagsFeatureImageSharpGid = 'tags___featureImageSharp___gid',
  TagsFeatureImageSharpRdev = 'tags___featureImageSharp___rdev',
  TagsFeatureImageSharpIno = 'tags___featureImageSharp___ino',
  TagsFeatureImageSharpAtimeMs = 'tags___featureImageSharp___atimeMs',
  TagsFeatureImageSharpMtimeMs = 'tags___featureImageSharp___mtimeMs',
  TagsFeatureImageSharpCtimeMs = 'tags___featureImageSharp___ctimeMs',
  TagsFeatureImageSharpAtime = 'tags___featureImageSharp___atime',
  TagsFeatureImageSharpMtime = 'tags___featureImageSharp___mtime',
  TagsFeatureImageSharpCtime = 'tags___featureImageSharp___ctime',
  TagsFeatureImageSharpBirthtime = 'tags___featureImageSharp___birthtime',
  TagsFeatureImageSharpBirthtimeMs = 'tags___featureImageSharp___birthtimeMs',
  TagsFeatureImageSharpBlksize = 'tags___featureImageSharp___blksize',
  TagsFeatureImageSharpBlocks = 'tags___featureImageSharp___blocks',
  TagsFeatureImageSharpUrl = 'tags___featureImageSharp___url',
  TagsFeatureImageSharpPublicUrl = 'tags___featureImageSharp___publicURL',
  TagsFeatureImageSharpChildrenImageSharp = 'tags___featureImageSharp___childrenImageSharp',
  TagsFeatureImageSharpChildrenImageSharpGatsbyImageData = 'tags___featureImageSharp___childrenImageSharp___gatsbyImageData',
  TagsFeatureImageSharpChildrenImageSharpId = 'tags___featureImageSharp___childrenImageSharp___id',
  TagsFeatureImageSharpChildrenImageSharpChildren = 'tags___featureImageSharp___childrenImageSharp___children',
  TagsFeatureImageSharpChildImageSharpGatsbyImageData = 'tags___featureImageSharp___childImageSharp___gatsbyImageData',
  TagsFeatureImageSharpChildImageSharpId = 'tags___featureImageSharp___childImageSharp___id',
  TagsFeatureImageSharpChildImageSharpChildren = 'tags___featureImageSharp___childImageSharp___children',
  TagsFeatureImageSharpId = 'tags___featureImageSharp___id',
  TagsFeatureImageSharpParentId = 'tags___featureImageSharp___parent___id',
  TagsFeatureImageSharpParentChildren = 'tags___featureImageSharp___parent___children',
  TagsFeatureImageSharpChildren = 'tags___featureImageSharp___children',
  TagsFeatureImageSharpChildrenId = 'tags___featureImageSharp___children___id',
  TagsFeatureImageSharpChildrenChildren = 'tags___featureImageSharp___children___children',
  TagsFeatureImageSharpInternalContent = 'tags___featureImageSharp___internal___content',
  TagsFeatureImageSharpInternalContentDigest = 'tags___featureImageSharp___internal___contentDigest',
  TagsFeatureImageSharpInternalDescription = 'tags___featureImageSharp___internal___description',
  TagsFeatureImageSharpInternalFieldOwners = 'tags___featureImageSharp___internal___fieldOwners',
  TagsFeatureImageSharpInternalIgnoreType = 'tags___featureImageSharp___internal___ignoreType',
  TagsFeatureImageSharpInternalMediaType = 'tags___featureImageSharp___internal___mediaType',
  TagsFeatureImageSharpInternalOwner = 'tags___featureImageSharp___internal___owner',
  TagsFeatureImageSharpInternalType = 'tags___featureImageSharp___internal___type',
  TagsParentId = 'tags___parent___id',
  TagsParentParentId = 'tags___parent___parent___id',
  TagsParentParentChildren = 'tags___parent___parent___children',
  TagsParentChildren = 'tags___parent___children',
  TagsParentChildrenId = 'tags___parent___children___id',
  TagsParentChildrenChildren = 'tags___parent___children___children',
  TagsParentInternalContent = 'tags___parent___internal___content',
  TagsParentInternalContentDigest = 'tags___parent___internal___contentDigest',
  TagsParentInternalDescription = 'tags___parent___internal___description',
  TagsParentInternalFieldOwners = 'tags___parent___internal___fieldOwners',
  TagsParentInternalIgnoreType = 'tags___parent___internal___ignoreType',
  TagsParentInternalMediaType = 'tags___parent___internal___mediaType',
  TagsParentInternalOwner = 'tags___parent___internal___owner',
  TagsParentInternalType = 'tags___parent___internal___type',
  TagsChildren = 'tags___children',
  TagsChildrenId = 'tags___children___id',
  TagsChildrenParentId = 'tags___children___parent___id',
  TagsChildrenParentChildren = 'tags___children___parent___children',
  TagsChildrenChildren = 'tags___children___children',
  TagsChildrenChildrenId = 'tags___children___children___id',
  TagsChildrenChildrenChildren = 'tags___children___children___children',
  TagsChildrenInternalContent = 'tags___children___internal___content',
  TagsChildrenInternalContentDigest = 'tags___children___internal___contentDigest',
  TagsChildrenInternalDescription = 'tags___children___internal___description',
  TagsChildrenInternalFieldOwners = 'tags___children___internal___fieldOwners',
  TagsChildrenInternalIgnoreType = 'tags___children___internal___ignoreType',
  TagsChildrenInternalMediaType = 'tags___children___internal___mediaType',
  TagsChildrenInternalOwner = 'tags___children___internal___owner',
  TagsChildrenInternalType = 'tags___children___internal___type',
  TagsInternalContent = 'tags___internal___content',
  TagsInternalContentDigest = 'tags___internal___contentDigest',
  TagsInternalDescription = 'tags___internal___description',
  TagsInternalFieldOwners = 'tags___internal___fieldOwners',
  TagsInternalIgnoreType = 'tags___internal___ignoreType',
  TagsInternalMediaType = 'tags___internal___mediaType',
  TagsInternalOwner = 'tags___internal___owner',
  TagsInternalType = 'tags___internal___type',
  Authors = 'authors',
  AuthorsSlug = 'authors___slug',
  AuthorsId = 'authors___id',
  AuthorsName = 'authors___name',
  AuthorsProfileImage = 'authors___profile_image',
  AuthorsCoverImage = 'authors___cover_image',
  AuthorsBio = 'authors___bio',
  AuthorsWebsite = 'authors___website',
  AuthorsLocation = 'authors___location',
  AuthorsFacebook = 'authors___facebook',
  AuthorsTwitter = 'authors___twitter',
  AuthorsMetaTitle = 'authors___meta_title',
  AuthorsMetaDescription = 'authors___meta_description',
  AuthorsUrl = 'authors___url',
  AuthorsCountPosts = 'authors___count___posts',
  AuthorsPostCount = 'authors___postCount',
  AuthorsGhostId = 'authors___ghostId',
  AuthorsProfileImageSharpSourceInstanceName = 'authors___profileImageSharp___sourceInstanceName',
  AuthorsProfileImageSharpAbsolutePath = 'authors___profileImageSharp___absolutePath',
  AuthorsProfileImageSharpRelativePath = 'authors___profileImageSharp___relativePath',
  AuthorsProfileImageSharpExtension = 'authors___profileImageSharp___extension',
  AuthorsProfileImageSharpSize = 'authors___profileImageSharp___size',
  AuthorsProfileImageSharpPrettySize = 'authors___profileImageSharp___prettySize',
  AuthorsProfileImageSharpModifiedTime = 'authors___profileImageSharp___modifiedTime',
  AuthorsProfileImageSharpAccessTime = 'authors___profileImageSharp___accessTime',
  AuthorsProfileImageSharpChangeTime = 'authors___profileImageSharp___changeTime',
  AuthorsProfileImageSharpBirthTime = 'authors___profileImageSharp___birthTime',
  AuthorsProfileImageSharpRoot = 'authors___profileImageSharp___root',
  AuthorsProfileImageSharpDir = 'authors___profileImageSharp___dir',
  AuthorsProfileImageSharpBase = 'authors___profileImageSharp___base',
  AuthorsProfileImageSharpExt = 'authors___profileImageSharp___ext',
  AuthorsProfileImageSharpName = 'authors___profileImageSharp___name',
  AuthorsProfileImageSharpRelativeDirectory = 'authors___profileImageSharp___relativeDirectory',
  AuthorsProfileImageSharpDev = 'authors___profileImageSharp___dev',
  AuthorsProfileImageSharpMode = 'authors___profileImageSharp___mode',
  AuthorsProfileImageSharpNlink = 'authors___profileImageSharp___nlink',
  AuthorsProfileImageSharpUid = 'authors___profileImageSharp___uid',
  AuthorsProfileImageSharpGid = 'authors___profileImageSharp___gid',
  AuthorsProfileImageSharpRdev = 'authors___profileImageSharp___rdev',
  AuthorsProfileImageSharpIno = 'authors___profileImageSharp___ino',
  AuthorsProfileImageSharpAtimeMs = 'authors___profileImageSharp___atimeMs',
  AuthorsProfileImageSharpMtimeMs = 'authors___profileImageSharp___mtimeMs',
  AuthorsProfileImageSharpCtimeMs = 'authors___profileImageSharp___ctimeMs',
  AuthorsProfileImageSharpAtime = 'authors___profileImageSharp___atime',
  AuthorsProfileImageSharpMtime = 'authors___profileImageSharp___mtime',
  AuthorsProfileImageSharpCtime = 'authors___profileImageSharp___ctime',
  AuthorsProfileImageSharpBirthtime = 'authors___profileImageSharp___birthtime',
  AuthorsProfileImageSharpBirthtimeMs = 'authors___profileImageSharp___birthtimeMs',
  AuthorsProfileImageSharpBlksize = 'authors___profileImageSharp___blksize',
  AuthorsProfileImageSharpBlocks = 'authors___profileImageSharp___blocks',
  AuthorsProfileImageSharpUrl = 'authors___profileImageSharp___url',
  AuthorsProfileImageSharpPublicUrl = 'authors___profileImageSharp___publicURL',
  AuthorsProfileImageSharpChildrenImageSharp = 'authors___profileImageSharp___childrenImageSharp',
  AuthorsProfileImageSharpChildrenImageSharpGatsbyImageData = 'authors___profileImageSharp___childrenImageSharp___gatsbyImageData',
  AuthorsProfileImageSharpChildrenImageSharpId = 'authors___profileImageSharp___childrenImageSharp___id',
  AuthorsProfileImageSharpChildrenImageSharpChildren = 'authors___profileImageSharp___childrenImageSharp___children',
  AuthorsProfileImageSharpChildImageSharpGatsbyImageData = 'authors___profileImageSharp___childImageSharp___gatsbyImageData',
  AuthorsProfileImageSharpChildImageSharpId = 'authors___profileImageSharp___childImageSharp___id',
  AuthorsProfileImageSharpChildImageSharpChildren = 'authors___profileImageSharp___childImageSharp___children',
  AuthorsProfileImageSharpId = 'authors___profileImageSharp___id',
  AuthorsProfileImageSharpParentId = 'authors___profileImageSharp___parent___id',
  AuthorsProfileImageSharpParentChildren = 'authors___profileImageSharp___parent___children',
  AuthorsProfileImageSharpChildren = 'authors___profileImageSharp___children',
  AuthorsProfileImageSharpChildrenId = 'authors___profileImageSharp___children___id',
  AuthorsProfileImageSharpChildrenChildren = 'authors___profileImageSharp___children___children',
  AuthorsProfileImageSharpInternalContent = 'authors___profileImageSharp___internal___content',
  AuthorsProfileImageSharpInternalContentDigest = 'authors___profileImageSharp___internal___contentDigest',
  AuthorsProfileImageSharpInternalDescription = 'authors___profileImageSharp___internal___description',
  AuthorsProfileImageSharpInternalFieldOwners = 'authors___profileImageSharp___internal___fieldOwners',
  AuthorsProfileImageSharpInternalIgnoreType = 'authors___profileImageSharp___internal___ignoreType',
  AuthorsProfileImageSharpInternalMediaType = 'authors___profileImageSharp___internal___mediaType',
  AuthorsProfileImageSharpInternalOwner = 'authors___profileImageSharp___internal___owner',
  AuthorsProfileImageSharpInternalType = 'authors___profileImageSharp___internal___type',
  AuthorsCoverImageSharpSourceInstanceName = 'authors___coverImageSharp___sourceInstanceName',
  AuthorsCoverImageSharpAbsolutePath = 'authors___coverImageSharp___absolutePath',
  AuthorsCoverImageSharpRelativePath = 'authors___coverImageSharp___relativePath',
  AuthorsCoverImageSharpExtension = 'authors___coverImageSharp___extension',
  AuthorsCoverImageSharpSize = 'authors___coverImageSharp___size',
  AuthorsCoverImageSharpPrettySize = 'authors___coverImageSharp___prettySize',
  AuthorsCoverImageSharpModifiedTime = 'authors___coverImageSharp___modifiedTime',
  AuthorsCoverImageSharpAccessTime = 'authors___coverImageSharp___accessTime',
  AuthorsCoverImageSharpChangeTime = 'authors___coverImageSharp___changeTime',
  AuthorsCoverImageSharpBirthTime = 'authors___coverImageSharp___birthTime',
  AuthorsCoverImageSharpRoot = 'authors___coverImageSharp___root',
  AuthorsCoverImageSharpDir = 'authors___coverImageSharp___dir',
  AuthorsCoverImageSharpBase = 'authors___coverImageSharp___base',
  AuthorsCoverImageSharpExt = 'authors___coverImageSharp___ext',
  AuthorsCoverImageSharpName = 'authors___coverImageSharp___name',
  AuthorsCoverImageSharpRelativeDirectory = 'authors___coverImageSharp___relativeDirectory',
  AuthorsCoverImageSharpDev = 'authors___coverImageSharp___dev',
  AuthorsCoverImageSharpMode = 'authors___coverImageSharp___mode',
  AuthorsCoverImageSharpNlink = 'authors___coverImageSharp___nlink',
  AuthorsCoverImageSharpUid = 'authors___coverImageSharp___uid',
  AuthorsCoverImageSharpGid = 'authors___coverImageSharp___gid',
  AuthorsCoverImageSharpRdev = 'authors___coverImageSharp___rdev',
  AuthorsCoverImageSharpIno = 'authors___coverImageSharp___ino',
  AuthorsCoverImageSharpAtimeMs = 'authors___coverImageSharp___atimeMs',
  AuthorsCoverImageSharpMtimeMs = 'authors___coverImageSharp___mtimeMs',
  AuthorsCoverImageSharpCtimeMs = 'authors___coverImageSharp___ctimeMs',
  AuthorsCoverImageSharpAtime = 'authors___coverImageSharp___atime',
  AuthorsCoverImageSharpMtime = 'authors___coverImageSharp___mtime',
  AuthorsCoverImageSharpCtime = 'authors___coverImageSharp___ctime',
  AuthorsCoverImageSharpBirthtime = 'authors___coverImageSharp___birthtime',
  AuthorsCoverImageSharpBirthtimeMs = 'authors___coverImageSharp___birthtimeMs',
  AuthorsCoverImageSharpBlksize = 'authors___coverImageSharp___blksize',
  AuthorsCoverImageSharpBlocks = 'authors___coverImageSharp___blocks',
  AuthorsCoverImageSharpUrl = 'authors___coverImageSharp___url',
  AuthorsCoverImageSharpPublicUrl = 'authors___coverImageSharp___publicURL',
  AuthorsCoverImageSharpChildrenImageSharp = 'authors___coverImageSharp___childrenImageSharp',
  AuthorsCoverImageSharpChildrenImageSharpGatsbyImageData = 'authors___coverImageSharp___childrenImageSharp___gatsbyImageData',
  AuthorsCoverImageSharpChildrenImageSharpId = 'authors___coverImageSharp___childrenImageSharp___id',
  AuthorsCoverImageSharpChildrenImageSharpChildren = 'authors___coverImageSharp___childrenImageSharp___children',
  AuthorsCoverImageSharpChildImageSharpGatsbyImageData = 'authors___coverImageSharp___childImageSharp___gatsbyImageData',
  AuthorsCoverImageSharpChildImageSharpId = 'authors___coverImageSharp___childImageSharp___id',
  AuthorsCoverImageSharpChildImageSharpChildren = 'authors___coverImageSharp___childImageSharp___children',
  AuthorsCoverImageSharpId = 'authors___coverImageSharp___id',
  AuthorsCoverImageSharpParentId = 'authors___coverImageSharp___parent___id',
  AuthorsCoverImageSharpParentChildren = 'authors___coverImageSharp___parent___children',
  AuthorsCoverImageSharpChildren = 'authors___coverImageSharp___children',
  AuthorsCoverImageSharpChildrenId = 'authors___coverImageSharp___children___id',
  AuthorsCoverImageSharpChildrenChildren = 'authors___coverImageSharp___children___children',
  AuthorsCoverImageSharpInternalContent = 'authors___coverImageSharp___internal___content',
  AuthorsCoverImageSharpInternalContentDigest = 'authors___coverImageSharp___internal___contentDigest',
  AuthorsCoverImageSharpInternalDescription = 'authors___coverImageSharp___internal___description',
  AuthorsCoverImageSharpInternalFieldOwners = 'authors___coverImageSharp___internal___fieldOwners',
  AuthorsCoverImageSharpInternalIgnoreType = 'authors___coverImageSharp___internal___ignoreType',
  AuthorsCoverImageSharpInternalMediaType = 'authors___coverImageSharp___internal___mediaType',
  AuthorsCoverImageSharpInternalOwner = 'authors___coverImageSharp___internal___owner',
  AuthorsCoverImageSharpInternalType = 'authors___coverImageSharp___internal___type',
  AuthorsParentId = 'authors___parent___id',
  AuthorsParentParentId = 'authors___parent___parent___id',
  AuthorsParentParentChildren = 'authors___parent___parent___children',
  AuthorsParentChildren = 'authors___parent___children',
  AuthorsParentChildrenId = 'authors___parent___children___id',
  AuthorsParentChildrenChildren = 'authors___parent___children___children',
  AuthorsParentInternalContent = 'authors___parent___internal___content',
  AuthorsParentInternalContentDigest = 'authors___parent___internal___contentDigest',
  AuthorsParentInternalDescription = 'authors___parent___internal___description',
  AuthorsParentInternalFieldOwners = 'authors___parent___internal___fieldOwners',
  AuthorsParentInternalIgnoreType = 'authors___parent___internal___ignoreType',
  AuthorsParentInternalMediaType = 'authors___parent___internal___mediaType',
  AuthorsParentInternalOwner = 'authors___parent___internal___owner',
  AuthorsParentInternalType = 'authors___parent___internal___type',
  AuthorsChildren = 'authors___children',
  AuthorsChildrenId = 'authors___children___id',
  AuthorsChildrenParentId = 'authors___children___parent___id',
  AuthorsChildrenParentChildren = 'authors___children___parent___children',
  AuthorsChildrenChildren = 'authors___children___children',
  AuthorsChildrenChildrenId = 'authors___children___children___id',
  AuthorsChildrenChildrenChildren = 'authors___children___children___children',
  AuthorsChildrenInternalContent = 'authors___children___internal___content',
  AuthorsChildrenInternalContentDigest = 'authors___children___internal___contentDigest',
  AuthorsChildrenInternalDescription = 'authors___children___internal___description',
  AuthorsChildrenInternalFieldOwners = 'authors___children___internal___fieldOwners',
  AuthorsChildrenInternalIgnoreType = 'authors___children___internal___ignoreType',
  AuthorsChildrenInternalMediaType = 'authors___children___internal___mediaType',
  AuthorsChildrenInternalOwner = 'authors___children___internal___owner',
  AuthorsChildrenInternalType = 'authors___children___internal___type',
  AuthorsInternalContent = 'authors___internal___content',
  AuthorsInternalContentDigest = 'authors___internal___contentDigest',
  AuthorsInternalDescription = 'authors___internal___description',
  AuthorsInternalFieldOwners = 'authors___internal___fieldOwners',
  AuthorsInternalIgnoreType = 'authors___internal___ignoreType',
  AuthorsInternalMediaType = 'authors___internal___mediaType',
  AuthorsInternalOwner = 'authors___internal___owner',
  AuthorsInternalType = 'authors___internal___type',
  PrimaryAuthorSlug = 'primary_author___slug',
  PrimaryAuthorId = 'primary_author___id',
  PrimaryAuthorName = 'primary_author___name',
  PrimaryAuthorProfileImage = 'primary_author___profile_image',
  PrimaryAuthorCoverImage = 'primary_author___cover_image',
  PrimaryAuthorBio = 'primary_author___bio',
  PrimaryAuthorWebsite = 'primary_author___website',
  PrimaryAuthorLocation = 'primary_author___location',
  PrimaryAuthorFacebook = 'primary_author___facebook',
  PrimaryAuthorTwitter = 'primary_author___twitter',
  PrimaryAuthorMetaTitle = 'primary_author___meta_title',
  PrimaryAuthorMetaDescription = 'primary_author___meta_description',
  PrimaryAuthorUrl = 'primary_author___url',
  PrimaryAuthorCountPosts = 'primary_author___count___posts',
  PrimaryAuthorPostCount = 'primary_author___postCount',
  PrimaryAuthorGhostId = 'primary_author___ghostId',
  PrimaryAuthorProfileImageSharpSourceInstanceName = 'primary_author___profileImageSharp___sourceInstanceName',
  PrimaryAuthorProfileImageSharpAbsolutePath = 'primary_author___profileImageSharp___absolutePath',
  PrimaryAuthorProfileImageSharpRelativePath = 'primary_author___profileImageSharp___relativePath',
  PrimaryAuthorProfileImageSharpExtension = 'primary_author___profileImageSharp___extension',
  PrimaryAuthorProfileImageSharpSize = 'primary_author___profileImageSharp___size',
  PrimaryAuthorProfileImageSharpPrettySize = 'primary_author___profileImageSharp___prettySize',
  PrimaryAuthorProfileImageSharpModifiedTime = 'primary_author___profileImageSharp___modifiedTime',
  PrimaryAuthorProfileImageSharpAccessTime = 'primary_author___profileImageSharp___accessTime',
  PrimaryAuthorProfileImageSharpChangeTime = 'primary_author___profileImageSharp___changeTime',
  PrimaryAuthorProfileImageSharpBirthTime = 'primary_author___profileImageSharp___birthTime',
  PrimaryAuthorProfileImageSharpRoot = 'primary_author___profileImageSharp___root',
  PrimaryAuthorProfileImageSharpDir = 'primary_author___profileImageSharp___dir',
  PrimaryAuthorProfileImageSharpBase = 'primary_author___profileImageSharp___base',
  PrimaryAuthorProfileImageSharpExt = 'primary_author___profileImageSharp___ext',
  PrimaryAuthorProfileImageSharpName = 'primary_author___profileImageSharp___name',
  PrimaryAuthorProfileImageSharpRelativeDirectory = 'primary_author___profileImageSharp___relativeDirectory',
  PrimaryAuthorProfileImageSharpDev = 'primary_author___profileImageSharp___dev',
  PrimaryAuthorProfileImageSharpMode = 'primary_author___profileImageSharp___mode',
  PrimaryAuthorProfileImageSharpNlink = 'primary_author___profileImageSharp___nlink',
  PrimaryAuthorProfileImageSharpUid = 'primary_author___profileImageSharp___uid',
  PrimaryAuthorProfileImageSharpGid = 'primary_author___profileImageSharp___gid',
  PrimaryAuthorProfileImageSharpRdev = 'primary_author___profileImageSharp___rdev',
  PrimaryAuthorProfileImageSharpIno = 'primary_author___profileImageSharp___ino',
  PrimaryAuthorProfileImageSharpAtimeMs = 'primary_author___profileImageSharp___atimeMs',
  PrimaryAuthorProfileImageSharpMtimeMs = 'primary_author___profileImageSharp___mtimeMs',
  PrimaryAuthorProfileImageSharpCtimeMs = 'primary_author___profileImageSharp___ctimeMs',
  PrimaryAuthorProfileImageSharpAtime = 'primary_author___profileImageSharp___atime',
  PrimaryAuthorProfileImageSharpMtime = 'primary_author___profileImageSharp___mtime',
  PrimaryAuthorProfileImageSharpCtime = 'primary_author___profileImageSharp___ctime',
  PrimaryAuthorProfileImageSharpBirthtime = 'primary_author___profileImageSharp___birthtime',
  PrimaryAuthorProfileImageSharpBirthtimeMs = 'primary_author___profileImageSharp___birthtimeMs',
  PrimaryAuthorProfileImageSharpBlksize = 'primary_author___profileImageSharp___blksize',
  PrimaryAuthorProfileImageSharpBlocks = 'primary_author___profileImageSharp___blocks',
  PrimaryAuthorProfileImageSharpUrl = 'primary_author___profileImageSharp___url',
  PrimaryAuthorProfileImageSharpPublicUrl = 'primary_author___profileImageSharp___publicURL',
  PrimaryAuthorProfileImageSharpChildrenImageSharp = 'primary_author___profileImageSharp___childrenImageSharp',
  PrimaryAuthorProfileImageSharpChildrenImageSharpGatsbyImageData = 'primary_author___profileImageSharp___childrenImageSharp___gatsbyImageData',
  PrimaryAuthorProfileImageSharpChildrenImageSharpId = 'primary_author___profileImageSharp___childrenImageSharp___id',
  PrimaryAuthorProfileImageSharpChildrenImageSharpChildren = 'primary_author___profileImageSharp___childrenImageSharp___children',
  PrimaryAuthorProfileImageSharpChildImageSharpGatsbyImageData = 'primary_author___profileImageSharp___childImageSharp___gatsbyImageData',
  PrimaryAuthorProfileImageSharpChildImageSharpId = 'primary_author___profileImageSharp___childImageSharp___id',
  PrimaryAuthorProfileImageSharpChildImageSharpChildren = 'primary_author___profileImageSharp___childImageSharp___children',
  PrimaryAuthorProfileImageSharpId = 'primary_author___profileImageSharp___id',
  PrimaryAuthorProfileImageSharpParentId = 'primary_author___profileImageSharp___parent___id',
  PrimaryAuthorProfileImageSharpParentChildren = 'primary_author___profileImageSharp___parent___children',
  PrimaryAuthorProfileImageSharpChildren = 'primary_author___profileImageSharp___children',
  PrimaryAuthorProfileImageSharpChildrenId = 'primary_author___profileImageSharp___children___id',
  PrimaryAuthorProfileImageSharpChildrenChildren = 'primary_author___profileImageSharp___children___children',
  PrimaryAuthorProfileImageSharpInternalContent = 'primary_author___profileImageSharp___internal___content',
  PrimaryAuthorProfileImageSharpInternalContentDigest = 'primary_author___profileImageSharp___internal___contentDigest',
  PrimaryAuthorProfileImageSharpInternalDescription = 'primary_author___profileImageSharp___internal___description',
  PrimaryAuthorProfileImageSharpInternalFieldOwners = 'primary_author___profileImageSharp___internal___fieldOwners',
  PrimaryAuthorProfileImageSharpInternalIgnoreType = 'primary_author___profileImageSharp___internal___ignoreType',
  PrimaryAuthorProfileImageSharpInternalMediaType = 'primary_author___profileImageSharp___internal___mediaType',
  PrimaryAuthorProfileImageSharpInternalOwner = 'primary_author___profileImageSharp___internal___owner',
  PrimaryAuthorProfileImageSharpInternalType = 'primary_author___profileImageSharp___internal___type',
  PrimaryAuthorCoverImageSharpSourceInstanceName = 'primary_author___coverImageSharp___sourceInstanceName',
  PrimaryAuthorCoverImageSharpAbsolutePath = 'primary_author___coverImageSharp___absolutePath',
  PrimaryAuthorCoverImageSharpRelativePath = 'primary_author___coverImageSharp___relativePath',
  PrimaryAuthorCoverImageSharpExtension = 'primary_author___coverImageSharp___extension',
  PrimaryAuthorCoverImageSharpSize = 'primary_author___coverImageSharp___size',
  PrimaryAuthorCoverImageSharpPrettySize = 'primary_author___coverImageSharp___prettySize',
  PrimaryAuthorCoverImageSharpModifiedTime = 'primary_author___coverImageSharp___modifiedTime',
  PrimaryAuthorCoverImageSharpAccessTime = 'primary_author___coverImageSharp___accessTime',
  PrimaryAuthorCoverImageSharpChangeTime = 'primary_author___coverImageSharp___changeTime',
  PrimaryAuthorCoverImageSharpBirthTime = 'primary_author___coverImageSharp___birthTime',
  PrimaryAuthorCoverImageSharpRoot = 'primary_author___coverImageSharp___root',
  PrimaryAuthorCoverImageSharpDir = 'primary_author___coverImageSharp___dir',
  PrimaryAuthorCoverImageSharpBase = 'primary_author___coverImageSharp___base',
  PrimaryAuthorCoverImageSharpExt = 'primary_author___coverImageSharp___ext',
  PrimaryAuthorCoverImageSharpName = 'primary_author___coverImageSharp___name',
  PrimaryAuthorCoverImageSharpRelativeDirectory = 'primary_author___coverImageSharp___relativeDirectory',
  PrimaryAuthorCoverImageSharpDev = 'primary_author___coverImageSharp___dev',
  PrimaryAuthorCoverImageSharpMode = 'primary_author___coverImageSharp___mode',
  PrimaryAuthorCoverImageSharpNlink = 'primary_author___coverImageSharp___nlink',
  PrimaryAuthorCoverImageSharpUid = 'primary_author___coverImageSharp___uid',
  PrimaryAuthorCoverImageSharpGid = 'primary_author___coverImageSharp___gid',
  PrimaryAuthorCoverImageSharpRdev = 'primary_author___coverImageSharp___rdev',
  PrimaryAuthorCoverImageSharpIno = 'primary_author___coverImageSharp___ino',
  PrimaryAuthorCoverImageSharpAtimeMs = 'primary_author___coverImageSharp___atimeMs',
  PrimaryAuthorCoverImageSharpMtimeMs = 'primary_author___coverImageSharp___mtimeMs',
  PrimaryAuthorCoverImageSharpCtimeMs = 'primary_author___coverImageSharp___ctimeMs',
  PrimaryAuthorCoverImageSharpAtime = 'primary_author___coverImageSharp___atime',
  PrimaryAuthorCoverImageSharpMtime = 'primary_author___coverImageSharp___mtime',
  PrimaryAuthorCoverImageSharpCtime = 'primary_author___coverImageSharp___ctime',
  PrimaryAuthorCoverImageSharpBirthtime = 'primary_author___coverImageSharp___birthtime',
  PrimaryAuthorCoverImageSharpBirthtimeMs = 'primary_author___coverImageSharp___birthtimeMs',
  PrimaryAuthorCoverImageSharpBlksize = 'primary_author___coverImageSharp___blksize',
  PrimaryAuthorCoverImageSharpBlocks = 'primary_author___coverImageSharp___blocks',
  PrimaryAuthorCoverImageSharpUrl = 'primary_author___coverImageSharp___url',
  PrimaryAuthorCoverImageSharpPublicUrl = 'primary_author___coverImageSharp___publicURL',
  PrimaryAuthorCoverImageSharpChildrenImageSharp = 'primary_author___coverImageSharp___childrenImageSharp',
  PrimaryAuthorCoverImageSharpChildrenImageSharpGatsbyImageData = 'primary_author___coverImageSharp___childrenImageSharp___gatsbyImageData',
  PrimaryAuthorCoverImageSharpChildrenImageSharpId = 'primary_author___coverImageSharp___childrenImageSharp___id',
  PrimaryAuthorCoverImageSharpChildrenImageSharpChildren = 'primary_author___coverImageSharp___childrenImageSharp___children',
  PrimaryAuthorCoverImageSharpChildImageSharpGatsbyImageData = 'primary_author___coverImageSharp___childImageSharp___gatsbyImageData',
  PrimaryAuthorCoverImageSharpChildImageSharpId = 'primary_author___coverImageSharp___childImageSharp___id',
  PrimaryAuthorCoverImageSharpChildImageSharpChildren = 'primary_author___coverImageSharp___childImageSharp___children',
  PrimaryAuthorCoverImageSharpId = 'primary_author___coverImageSharp___id',
  PrimaryAuthorCoverImageSharpParentId = 'primary_author___coverImageSharp___parent___id',
  PrimaryAuthorCoverImageSharpParentChildren = 'primary_author___coverImageSharp___parent___children',
  PrimaryAuthorCoverImageSharpChildren = 'primary_author___coverImageSharp___children',
  PrimaryAuthorCoverImageSharpChildrenId = 'primary_author___coverImageSharp___children___id',
  PrimaryAuthorCoverImageSharpChildrenChildren = 'primary_author___coverImageSharp___children___children',
  PrimaryAuthorCoverImageSharpInternalContent = 'primary_author___coverImageSharp___internal___content',
  PrimaryAuthorCoverImageSharpInternalContentDigest = 'primary_author___coverImageSharp___internal___contentDigest',
  PrimaryAuthorCoverImageSharpInternalDescription = 'primary_author___coverImageSharp___internal___description',
  PrimaryAuthorCoverImageSharpInternalFieldOwners = 'primary_author___coverImageSharp___internal___fieldOwners',
  PrimaryAuthorCoverImageSharpInternalIgnoreType = 'primary_author___coverImageSharp___internal___ignoreType',
  PrimaryAuthorCoverImageSharpInternalMediaType = 'primary_author___coverImageSharp___internal___mediaType',
  PrimaryAuthorCoverImageSharpInternalOwner = 'primary_author___coverImageSharp___internal___owner',
  PrimaryAuthorCoverImageSharpInternalType = 'primary_author___coverImageSharp___internal___type',
  PrimaryAuthorParentId = 'primary_author___parent___id',
  PrimaryAuthorParentParentId = 'primary_author___parent___parent___id',
  PrimaryAuthorParentParentChildren = 'primary_author___parent___parent___children',
  PrimaryAuthorParentChildren = 'primary_author___parent___children',
  PrimaryAuthorParentChildrenId = 'primary_author___parent___children___id',
  PrimaryAuthorParentChildrenChildren = 'primary_author___parent___children___children',
  PrimaryAuthorParentInternalContent = 'primary_author___parent___internal___content',
  PrimaryAuthorParentInternalContentDigest = 'primary_author___parent___internal___contentDigest',
  PrimaryAuthorParentInternalDescription = 'primary_author___parent___internal___description',
  PrimaryAuthorParentInternalFieldOwners = 'primary_author___parent___internal___fieldOwners',
  PrimaryAuthorParentInternalIgnoreType = 'primary_author___parent___internal___ignoreType',
  PrimaryAuthorParentInternalMediaType = 'primary_author___parent___internal___mediaType',
  PrimaryAuthorParentInternalOwner = 'primary_author___parent___internal___owner',
  PrimaryAuthorParentInternalType = 'primary_author___parent___internal___type',
  PrimaryAuthorChildren = 'primary_author___children',
  PrimaryAuthorChildrenId = 'primary_author___children___id',
  PrimaryAuthorChildrenParentId = 'primary_author___children___parent___id',
  PrimaryAuthorChildrenParentChildren = 'primary_author___children___parent___children',
  PrimaryAuthorChildrenChildren = 'primary_author___children___children',
  PrimaryAuthorChildrenChildrenId = 'primary_author___children___children___id',
  PrimaryAuthorChildrenChildrenChildren = 'primary_author___children___children___children',
  PrimaryAuthorChildrenInternalContent = 'primary_author___children___internal___content',
  PrimaryAuthorChildrenInternalContentDigest = 'primary_author___children___internal___contentDigest',
  PrimaryAuthorChildrenInternalDescription = 'primary_author___children___internal___description',
  PrimaryAuthorChildrenInternalFieldOwners = 'primary_author___children___internal___fieldOwners',
  PrimaryAuthorChildrenInternalIgnoreType = 'primary_author___children___internal___ignoreType',
  PrimaryAuthorChildrenInternalMediaType = 'primary_author___children___internal___mediaType',
  PrimaryAuthorChildrenInternalOwner = 'primary_author___children___internal___owner',
  PrimaryAuthorChildrenInternalType = 'primary_author___children___internal___type',
  PrimaryAuthorInternalContent = 'primary_author___internal___content',
  PrimaryAuthorInternalContentDigest = 'primary_author___internal___contentDigest',
  PrimaryAuthorInternalDescription = 'primary_author___internal___description',
  PrimaryAuthorInternalFieldOwners = 'primary_author___internal___fieldOwners',
  PrimaryAuthorInternalIgnoreType = 'primary_author___internal___ignoreType',
  PrimaryAuthorInternalMediaType = 'primary_author___internal___mediaType',
  PrimaryAuthorInternalOwner = 'primary_author___internal___owner',
  PrimaryAuthorInternalType = 'primary_author___internal___type',
  PrimaryTagSlug = 'primary_tag___slug',
  PrimaryTagId = 'primary_tag___id',
  PrimaryTagName = 'primary_tag___name',
  PrimaryTagDescription = 'primary_tag___description',
  PrimaryTagFeatureImage = 'primary_tag___feature_image',
  PrimaryTagVisibility = 'primary_tag___visibility',
  PrimaryTagMetaTitle = 'primary_tag___meta_title',
  PrimaryTagMetaDescription = 'primary_tag___meta_description',
  PrimaryTagUrl = 'primary_tag___url',
  PrimaryTagCountPosts = 'primary_tag___count___posts',
  PrimaryTagPostCount = 'primary_tag___postCount',
  PrimaryTagOgImage = 'primary_tag___og_image',
  PrimaryTagOgTitle = 'primary_tag___og_title',
  PrimaryTagOgDescription = 'primary_tag___og_description',
  PrimaryTagTwitterImage = 'primary_tag___twitter_image',
  PrimaryTagTwitterTitle = 'primary_tag___twitter_title',
  PrimaryTagTwitterDescription = 'primary_tag___twitter_description',
  PrimaryTagCodeinjectionHead = 'primary_tag___codeinjection_head',
  PrimaryTagCodeinjectionFoot = 'primary_tag___codeinjection_foot',
  PrimaryTagCanonicalUrl = 'primary_tag___canonical_url',
  PrimaryTagAccentColor = 'primary_tag___accent_color',
  PrimaryTagGhostId = 'primary_tag___ghostId',
  PrimaryTagFeatureImageSharpSourceInstanceName = 'primary_tag___featureImageSharp___sourceInstanceName',
  PrimaryTagFeatureImageSharpAbsolutePath = 'primary_tag___featureImageSharp___absolutePath',
  PrimaryTagFeatureImageSharpRelativePath = 'primary_tag___featureImageSharp___relativePath',
  PrimaryTagFeatureImageSharpExtension = 'primary_tag___featureImageSharp___extension',
  PrimaryTagFeatureImageSharpSize = 'primary_tag___featureImageSharp___size',
  PrimaryTagFeatureImageSharpPrettySize = 'primary_tag___featureImageSharp___prettySize',
  PrimaryTagFeatureImageSharpModifiedTime = 'primary_tag___featureImageSharp___modifiedTime',
  PrimaryTagFeatureImageSharpAccessTime = 'primary_tag___featureImageSharp___accessTime',
  PrimaryTagFeatureImageSharpChangeTime = 'primary_tag___featureImageSharp___changeTime',
  PrimaryTagFeatureImageSharpBirthTime = 'primary_tag___featureImageSharp___birthTime',
  PrimaryTagFeatureImageSharpRoot = 'primary_tag___featureImageSharp___root',
  PrimaryTagFeatureImageSharpDir = 'primary_tag___featureImageSharp___dir',
  PrimaryTagFeatureImageSharpBase = 'primary_tag___featureImageSharp___base',
  PrimaryTagFeatureImageSharpExt = 'primary_tag___featureImageSharp___ext',
  PrimaryTagFeatureImageSharpName = 'primary_tag___featureImageSharp___name',
  PrimaryTagFeatureImageSharpRelativeDirectory = 'primary_tag___featureImageSharp___relativeDirectory',
  PrimaryTagFeatureImageSharpDev = 'primary_tag___featureImageSharp___dev',
  PrimaryTagFeatureImageSharpMode = 'primary_tag___featureImageSharp___mode',
  PrimaryTagFeatureImageSharpNlink = 'primary_tag___featureImageSharp___nlink',
  PrimaryTagFeatureImageSharpUid = 'primary_tag___featureImageSharp___uid',
  PrimaryTagFeatureImageSharpGid = 'primary_tag___featureImageSharp___gid',
  PrimaryTagFeatureImageSharpRdev = 'primary_tag___featureImageSharp___rdev',
  PrimaryTagFeatureImageSharpIno = 'primary_tag___featureImageSharp___ino',
  PrimaryTagFeatureImageSharpAtimeMs = 'primary_tag___featureImageSharp___atimeMs',
  PrimaryTagFeatureImageSharpMtimeMs = 'primary_tag___featureImageSharp___mtimeMs',
  PrimaryTagFeatureImageSharpCtimeMs = 'primary_tag___featureImageSharp___ctimeMs',
  PrimaryTagFeatureImageSharpAtime = 'primary_tag___featureImageSharp___atime',
  PrimaryTagFeatureImageSharpMtime = 'primary_tag___featureImageSharp___mtime',
  PrimaryTagFeatureImageSharpCtime = 'primary_tag___featureImageSharp___ctime',
  PrimaryTagFeatureImageSharpBirthtime = 'primary_tag___featureImageSharp___birthtime',
  PrimaryTagFeatureImageSharpBirthtimeMs = 'primary_tag___featureImageSharp___birthtimeMs',
  PrimaryTagFeatureImageSharpBlksize = 'primary_tag___featureImageSharp___blksize',
  PrimaryTagFeatureImageSharpBlocks = 'primary_tag___featureImageSharp___blocks',
  PrimaryTagFeatureImageSharpUrl = 'primary_tag___featureImageSharp___url',
  PrimaryTagFeatureImageSharpPublicUrl = 'primary_tag___featureImageSharp___publicURL',
  PrimaryTagFeatureImageSharpChildrenImageSharp = 'primary_tag___featureImageSharp___childrenImageSharp',
  PrimaryTagFeatureImageSharpChildrenImageSharpGatsbyImageData = 'primary_tag___featureImageSharp___childrenImageSharp___gatsbyImageData',
  PrimaryTagFeatureImageSharpChildrenImageSharpId = 'primary_tag___featureImageSharp___childrenImageSharp___id',
  PrimaryTagFeatureImageSharpChildrenImageSharpChildren = 'primary_tag___featureImageSharp___childrenImageSharp___children',
  PrimaryTagFeatureImageSharpChildImageSharpGatsbyImageData = 'primary_tag___featureImageSharp___childImageSharp___gatsbyImageData',
  PrimaryTagFeatureImageSharpChildImageSharpId = 'primary_tag___featureImageSharp___childImageSharp___id',
  PrimaryTagFeatureImageSharpChildImageSharpChildren = 'primary_tag___featureImageSharp___childImageSharp___children',
  PrimaryTagFeatureImageSharpId = 'primary_tag___featureImageSharp___id',
  PrimaryTagFeatureImageSharpParentId = 'primary_tag___featureImageSharp___parent___id',
  PrimaryTagFeatureImageSharpParentChildren = 'primary_tag___featureImageSharp___parent___children',
  PrimaryTagFeatureImageSharpChildren = 'primary_tag___featureImageSharp___children',
  PrimaryTagFeatureImageSharpChildrenId = 'primary_tag___featureImageSharp___children___id',
  PrimaryTagFeatureImageSharpChildrenChildren = 'primary_tag___featureImageSharp___children___children',
  PrimaryTagFeatureImageSharpInternalContent = 'primary_tag___featureImageSharp___internal___content',
  PrimaryTagFeatureImageSharpInternalContentDigest = 'primary_tag___featureImageSharp___internal___contentDigest',
  PrimaryTagFeatureImageSharpInternalDescription = 'primary_tag___featureImageSharp___internal___description',
  PrimaryTagFeatureImageSharpInternalFieldOwners = 'primary_tag___featureImageSharp___internal___fieldOwners',
  PrimaryTagFeatureImageSharpInternalIgnoreType = 'primary_tag___featureImageSharp___internal___ignoreType',
  PrimaryTagFeatureImageSharpInternalMediaType = 'primary_tag___featureImageSharp___internal___mediaType',
  PrimaryTagFeatureImageSharpInternalOwner = 'primary_tag___featureImageSharp___internal___owner',
  PrimaryTagFeatureImageSharpInternalType = 'primary_tag___featureImageSharp___internal___type',
  PrimaryTagParentId = 'primary_tag___parent___id',
  PrimaryTagParentParentId = 'primary_tag___parent___parent___id',
  PrimaryTagParentParentChildren = 'primary_tag___parent___parent___children',
  PrimaryTagParentChildren = 'primary_tag___parent___children',
  PrimaryTagParentChildrenId = 'primary_tag___parent___children___id',
  PrimaryTagParentChildrenChildren = 'primary_tag___parent___children___children',
  PrimaryTagParentInternalContent = 'primary_tag___parent___internal___content',
  PrimaryTagParentInternalContentDigest = 'primary_tag___parent___internal___contentDigest',
  PrimaryTagParentInternalDescription = 'primary_tag___parent___internal___description',
  PrimaryTagParentInternalFieldOwners = 'primary_tag___parent___internal___fieldOwners',
  PrimaryTagParentInternalIgnoreType = 'primary_tag___parent___internal___ignoreType',
  PrimaryTagParentInternalMediaType = 'primary_tag___parent___internal___mediaType',
  PrimaryTagParentInternalOwner = 'primary_tag___parent___internal___owner',
  PrimaryTagParentInternalType = 'primary_tag___parent___internal___type',
  PrimaryTagChildren = 'primary_tag___children',
  PrimaryTagChildrenId = 'primary_tag___children___id',
  PrimaryTagChildrenParentId = 'primary_tag___children___parent___id',
  PrimaryTagChildrenParentChildren = 'primary_tag___children___parent___children',
  PrimaryTagChildrenChildren = 'primary_tag___children___children',
  PrimaryTagChildrenChildrenId = 'primary_tag___children___children___id',
  PrimaryTagChildrenChildrenChildren = 'primary_tag___children___children___children',
  PrimaryTagChildrenInternalContent = 'primary_tag___children___internal___content',
  PrimaryTagChildrenInternalContentDigest = 'primary_tag___children___internal___contentDigest',
  PrimaryTagChildrenInternalDescription = 'primary_tag___children___internal___description',
  PrimaryTagChildrenInternalFieldOwners = 'primary_tag___children___internal___fieldOwners',
  PrimaryTagChildrenInternalIgnoreType = 'primary_tag___children___internal___ignoreType',
  PrimaryTagChildrenInternalMediaType = 'primary_tag___children___internal___mediaType',
  PrimaryTagChildrenInternalOwner = 'primary_tag___children___internal___owner',
  PrimaryTagChildrenInternalType = 'primary_tag___children___internal___type',
  PrimaryTagInternalContent = 'primary_tag___internal___content',
  PrimaryTagInternalContentDigest = 'primary_tag___internal___contentDigest',
  PrimaryTagInternalDescription = 'primary_tag___internal___description',
  PrimaryTagInternalFieldOwners = 'primary_tag___internal___fieldOwners',
  PrimaryTagInternalIgnoreType = 'primary_tag___internal___ignoreType',
  PrimaryTagInternalMediaType = 'primary_tag___internal___mediaType',
  PrimaryTagInternalOwner = 'primary_tag___internal___owner',
  PrimaryTagInternalType = 'primary_tag___internal___type',
  Url = 'url',
  Excerpt = 'excerpt',
  ReadingTime = 'reading_time',
  EmailSubject = 'email_subject',
  Plaintext = 'plaintext',
  Page = 'page',
  OgImage = 'og_image',
  OgTitle = 'og_title',
  OgDescription = 'og_description',
  TwitterImage = 'twitter_image',
  TwitterTitle = 'twitter_title',
  TwitterDescription = 'twitter_description',
  MetaTitle = 'meta_title',
  MetaDescription = 'meta_description',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type GhostPageGroupConnection = {
  __typename?: 'GhostPageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<GhostPageEdge>;
  nodes: Array<GhostPage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type GhostPageFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  uuid?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  comment_id?: Maybe<StringQueryOperatorInput>;
  feature_image?: Maybe<StringQueryOperatorInput>;
  featured?: Maybe<BooleanQueryOperatorInput>;
  visibility?: Maybe<StringQueryOperatorInput>;
  created_at?: Maybe<DateQueryOperatorInput>;
  updated_at?: Maybe<DateQueryOperatorInput>;
  published_at?: Maybe<DateQueryOperatorInput>;
  custom_excerpt?: Maybe<StringQueryOperatorInput>;
  codeinjection_head?: Maybe<StringQueryOperatorInput>;
  codeinjection_foot?: Maybe<StringQueryOperatorInput>;
  codeinjection_styles?: Maybe<StringQueryOperatorInput>;
  custom_template?: Maybe<StringQueryOperatorInput>;
  canonical_url?: Maybe<StringQueryOperatorInput>;
  send_email_when_published?: Maybe<BooleanQueryOperatorInput>;
  tags?: Maybe<GhostTagFilterListInput>;
  authors?: Maybe<GhostAuthorFilterListInput>;
  primary_author?: Maybe<GhostAuthorFilterInput>;
  primary_tag?: Maybe<GhostTagFilterInput>;
  url?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  reading_time?: Maybe<IntQueryOperatorInput>;
  email_subject?: Maybe<StringQueryOperatorInput>;
  plaintext?: Maybe<StringQueryOperatorInput>;
  page?: Maybe<BooleanQueryOperatorInput>;
  og_image?: Maybe<StringQueryOperatorInput>;
  og_title?: Maybe<StringQueryOperatorInput>;
  og_description?: Maybe<StringQueryOperatorInput>;
  twitter_image?: Maybe<StringQueryOperatorInput>;
  twitter_title?: Maybe<StringQueryOperatorInput>;
  twitter_description?: Maybe<StringQueryOperatorInput>;
  meta_title?: Maybe<StringQueryOperatorInput>;
  meta_description?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type GhostPageSortInput = {
  fields?: Maybe<Array<Maybe<GhostPageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type GhostTagConnection = {
  __typename?: 'GhostTagConnection';
  totalCount: Scalars['Int'];
  edges: Array<GhostTagEdge>;
  nodes: Array<GhostTag>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<GhostTagGroupConnection>;
};

export type GhostTagConnectionDistinctArgs = {
  field: GhostTagFieldsEnum;
};

export type GhostTagConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: GhostTagFieldsEnum;
};

export type GhostTagEdge = {
  __typename?: 'GhostTagEdge';
  next?: Maybe<GhostTag>;
  node: GhostTag;
  previous?: Maybe<GhostTag>;
};

export enum GhostTagFieldsEnum {
  Slug = 'slug',
  Id = 'id',
  Name = 'name',
  Description = 'description',
  FeatureImage = 'feature_image',
  Visibility = 'visibility',
  MetaTitle = 'meta_title',
  MetaDescription = 'meta_description',
  Url = 'url',
  CountPosts = 'count___posts',
  PostCount = 'postCount',
  OgImage = 'og_image',
  OgTitle = 'og_title',
  OgDescription = 'og_description',
  TwitterImage = 'twitter_image',
  TwitterTitle = 'twitter_title',
  TwitterDescription = 'twitter_description',
  CodeinjectionHead = 'codeinjection_head',
  CodeinjectionFoot = 'codeinjection_foot',
  CanonicalUrl = 'canonical_url',
  AccentColor = 'accent_color',
  GhostId = 'ghostId',
  FeatureImageSharpSourceInstanceName = 'featureImageSharp___sourceInstanceName',
  FeatureImageSharpAbsolutePath = 'featureImageSharp___absolutePath',
  FeatureImageSharpRelativePath = 'featureImageSharp___relativePath',
  FeatureImageSharpExtension = 'featureImageSharp___extension',
  FeatureImageSharpSize = 'featureImageSharp___size',
  FeatureImageSharpPrettySize = 'featureImageSharp___prettySize',
  FeatureImageSharpModifiedTime = 'featureImageSharp___modifiedTime',
  FeatureImageSharpAccessTime = 'featureImageSharp___accessTime',
  FeatureImageSharpChangeTime = 'featureImageSharp___changeTime',
  FeatureImageSharpBirthTime = 'featureImageSharp___birthTime',
  FeatureImageSharpRoot = 'featureImageSharp___root',
  FeatureImageSharpDir = 'featureImageSharp___dir',
  FeatureImageSharpBase = 'featureImageSharp___base',
  FeatureImageSharpExt = 'featureImageSharp___ext',
  FeatureImageSharpName = 'featureImageSharp___name',
  FeatureImageSharpRelativeDirectory = 'featureImageSharp___relativeDirectory',
  FeatureImageSharpDev = 'featureImageSharp___dev',
  FeatureImageSharpMode = 'featureImageSharp___mode',
  FeatureImageSharpNlink = 'featureImageSharp___nlink',
  FeatureImageSharpUid = 'featureImageSharp___uid',
  FeatureImageSharpGid = 'featureImageSharp___gid',
  FeatureImageSharpRdev = 'featureImageSharp___rdev',
  FeatureImageSharpIno = 'featureImageSharp___ino',
  FeatureImageSharpAtimeMs = 'featureImageSharp___atimeMs',
  FeatureImageSharpMtimeMs = 'featureImageSharp___mtimeMs',
  FeatureImageSharpCtimeMs = 'featureImageSharp___ctimeMs',
  FeatureImageSharpAtime = 'featureImageSharp___atime',
  FeatureImageSharpMtime = 'featureImageSharp___mtime',
  FeatureImageSharpCtime = 'featureImageSharp___ctime',
  FeatureImageSharpBirthtime = 'featureImageSharp___birthtime',
  FeatureImageSharpBirthtimeMs = 'featureImageSharp___birthtimeMs',
  FeatureImageSharpBlksize = 'featureImageSharp___blksize',
  FeatureImageSharpBlocks = 'featureImageSharp___blocks',
  FeatureImageSharpUrl = 'featureImageSharp___url',
  FeatureImageSharpPublicUrl = 'featureImageSharp___publicURL',
  FeatureImageSharpChildrenImageSharp = 'featureImageSharp___childrenImageSharp',
  FeatureImageSharpChildrenImageSharpFixedBase64 = 'featureImageSharp___childrenImageSharp___fixed___base64',
  FeatureImageSharpChildrenImageSharpFixedTracedSvg = 'featureImageSharp___childrenImageSharp___fixed___tracedSVG',
  FeatureImageSharpChildrenImageSharpFixedAspectRatio = 'featureImageSharp___childrenImageSharp___fixed___aspectRatio',
  FeatureImageSharpChildrenImageSharpFixedWidth = 'featureImageSharp___childrenImageSharp___fixed___width',
  FeatureImageSharpChildrenImageSharpFixedHeight = 'featureImageSharp___childrenImageSharp___fixed___height',
  FeatureImageSharpChildrenImageSharpFixedSrc = 'featureImageSharp___childrenImageSharp___fixed___src',
  FeatureImageSharpChildrenImageSharpFixedSrcSet = 'featureImageSharp___childrenImageSharp___fixed___srcSet',
  FeatureImageSharpChildrenImageSharpFixedSrcWebp = 'featureImageSharp___childrenImageSharp___fixed___srcWebp',
  FeatureImageSharpChildrenImageSharpFixedSrcSetWebp = 'featureImageSharp___childrenImageSharp___fixed___srcSetWebp',
  FeatureImageSharpChildrenImageSharpFixedOriginalName = 'featureImageSharp___childrenImageSharp___fixed___originalName',
  FeatureImageSharpChildrenImageSharpFluidBase64 = 'featureImageSharp___childrenImageSharp___fluid___base64',
  FeatureImageSharpChildrenImageSharpFluidTracedSvg = 'featureImageSharp___childrenImageSharp___fluid___tracedSVG',
  FeatureImageSharpChildrenImageSharpFluidAspectRatio = 'featureImageSharp___childrenImageSharp___fluid___aspectRatio',
  FeatureImageSharpChildrenImageSharpFluidSrc = 'featureImageSharp___childrenImageSharp___fluid___src',
  FeatureImageSharpChildrenImageSharpFluidSrcSet = 'featureImageSharp___childrenImageSharp___fluid___srcSet',
  FeatureImageSharpChildrenImageSharpFluidSrcWebp = 'featureImageSharp___childrenImageSharp___fluid___srcWebp',
  FeatureImageSharpChildrenImageSharpFluidSrcSetWebp = 'featureImageSharp___childrenImageSharp___fluid___srcSetWebp',
  FeatureImageSharpChildrenImageSharpFluidSizes = 'featureImageSharp___childrenImageSharp___fluid___sizes',
  FeatureImageSharpChildrenImageSharpFluidOriginalImg = 'featureImageSharp___childrenImageSharp___fluid___originalImg',
  FeatureImageSharpChildrenImageSharpFluidOriginalName = 'featureImageSharp___childrenImageSharp___fluid___originalName',
  FeatureImageSharpChildrenImageSharpFluidPresentationWidth = 'featureImageSharp___childrenImageSharp___fluid___presentationWidth',
  FeatureImageSharpChildrenImageSharpFluidPresentationHeight = 'featureImageSharp___childrenImageSharp___fluid___presentationHeight',
  FeatureImageSharpChildrenImageSharpGatsbyImageData = 'featureImageSharp___childrenImageSharp___gatsbyImageData',
  FeatureImageSharpChildrenImageSharpOriginalWidth = 'featureImageSharp___childrenImageSharp___original___width',
  FeatureImageSharpChildrenImageSharpOriginalHeight = 'featureImageSharp___childrenImageSharp___original___height',
  FeatureImageSharpChildrenImageSharpOriginalSrc = 'featureImageSharp___childrenImageSharp___original___src',
  FeatureImageSharpChildrenImageSharpResizeSrc = 'featureImageSharp___childrenImageSharp___resize___src',
  FeatureImageSharpChildrenImageSharpResizeTracedSvg = 'featureImageSharp___childrenImageSharp___resize___tracedSVG',
  FeatureImageSharpChildrenImageSharpResizeWidth = 'featureImageSharp___childrenImageSharp___resize___width',
  FeatureImageSharpChildrenImageSharpResizeHeight = 'featureImageSharp___childrenImageSharp___resize___height',
  FeatureImageSharpChildrenImageSharpResizeAspectRatio = 'featureImageSharp___childrenImageSharp___resize___aspectRatio',
  FeatureImageSharpChildrenImageSharpResizeOriginalName = 'featureImageSharp___childrenImageSharp___resize___originalName',
  FeatureImageSharpChildrenImageSharpId = 'featureImageSharp___childrenImageSharp___id',
  FeatureImageSharpChildrenImageSharpParentId = 'featureImageSharp___childrenImageSharp___parent___id',
  FeatureImageSharpChildrenImageSharpParentChildren = 'featureImageSharp___childrenImageSharp___parent___children',
  FeatureImageSharpChildrenImageSharpChildren = 'featureImageSharp___childrenImageSharp___children',
  FeatureImageSharpChildrenImageSharpChildrenId = 'featureImageSharp___childrenImageSharp___children___id',
  FeatureImageSharpChildrenImageSharpChildrenChildren = 'featureImageSharp___childrenImageSharp___children___children',
  FeatureImageSharpChildrenImageSharpInternalContent = 'featureImageSharp___childrenImageSharp___internal___content',
  FeatureImageSharpChildrenImageSharpInternalContentDigest = 'featureImageSharp___childrenImageSharp___internal___contentDigest',
  FeatureImageSharpChildrenImageSharpInternalDescription = 'featureImageSharp___childrenImageSharp___internal___description',
  FeatureImageSharpChildrenImageSharpInternalFieldOwners = 'featureImageSharp___childrenImageSharp___internal___fieldOwners',
  FeatureImageSharpChildrenImageSharpInternalIgnoreType = 'featureImageSharp___childrenImageSharp___internal___ignoreType',
  FeatureImageSharpChildrenImageSharpInternalMediaType = 'featureImageSharp___childrenImageSharp___internal___mediaType',
  FeatureImageSharpChildrenImageSharpInternalOwner = 'featureImageSharp___childrenImageSharp___internal___owner',
  FeatureImageSharpChildrenImageSharpInternalType = 'featureImageSharp___childrenImageSharp___internal___type',
  FeatureImageSharpChildImageSharpFixedBase64 = 'featureImageSharp___childImageSharp___fixed___base64',
  FeatureImageSharpChildImageSharpFixedTracedSvg = 'featureImageSharp___childImageSharp___fixed___tracedSVG',
  FeatureImageSharpChildImageSharpFixedAspectRatio = 'featureImageSharp___childImageSharp___fixed___aspectRatio',
  FeatureImageSharpChildImageSharpFixedWidth = 'featureImageSharp___childImageSharp___fixed___width',
  FeatureImageSharpChildImageSharpFixedHeight = 'featureImageSharp___childImageSharp___fixed___height',
  FeatureImageSharpChildImageSharpFixedSrc = 'featureImageSharp___childImageSharp___fixed___src',
  FeatureImageSharpChildImageSharpFixedSrcSet = 'featureImageSharp___childImageSharp___fixed___srcSet',
  FeatureImageSharpChildImageSharpFixedSrcWebp = 'featureImageSharp___childImageSharp___fixed___srcWebp',
  FeatureImageSharpChildImageSharpFixedSrcSetWebp = 'featureImageSharp___childImageSharp___fixed___srcSetWebp',
  FeatureImageSharpChildImageSharpFixedOriginalName = 'featureImageSharp___childImageSharp___fixed___originalName',
  FeatureImageSharpChildImageSharpFluidBase64 = 'featureImageSharp___childImageSharp___fluid___base64',
  FeatureImageSharpChildImageSharpFluidTracedSvg = 'featureImageSharp___childImageSharp___fluid___tracedSVG',
  FeatureImageSharpChildImageSharpFluidAspectRatio = 'featureImageSharp___childImageSharp___fluid___aspectRatio',
  FeatureImageSharpChildImageSharpFluidSrc = 'featureImageSharp___childImageSharp___fluid___src',
  FeatureImageSharpChildImageSharpFluidSrcSet = 'featureImageSharp___childImageSharp___fluid___srcSet',
  FeatureImageSharpChildImageSharpFluidSrcWebp = 'featureImageSharp___childImageSharp___fluid___srcWebp',
  FeatureImageSharpChildImageSharpFluidSrcSetWebp = 'featureImageSharp___childImageSharp___fluid___srcSetWebp',
  FeatureImageSharpChildImageSharpFluidSizes = 'featureImageSharp___childImageSharp___fluid___sizes',
  FeatureImageSharpChildImageSharpFluidOriginalImg = 'featureImageSharp___childImageSharp___fluid___originalImg',
  FeatureImageSharpChildImageSharpFluidOriginalName = 'featureImageSharp___childImageSharp___fluid___originalName',
  FeatureImageSharpChildImageSharpFluidPresentationWidth = 'featureImageSharp___childImageSharp___fluid___presentationWidth',
  FeatureImageSharpChildImageSharpFluidPresentationHeight = 'featureImageSharp___childImageSharp___fluid___presentationHeight',
  FeatureImageSharpChildImageSharpGatsbyImageData = 'featureImageSharp___childImageSharp___gatsbyImageData',
  FeatureImageSharpChildImageSharpOriginalWidth = 'featureImageSharp___childImageSharp___original___width',
  FeatureImageSharpChildImageSharpOriginalHeight = 'featureImageSharp___childImageSharp___original___height',
  FeatureImageSharpChildImageSharpOriginalSrc = 'featureImageSharp___childImageSharp___original___src',
  FeatureImageSharpChildImageSharpResizeSrc = 'featureImageSharp___childImageSharp___resize___src',
  FeatureImageSharpChildImageSharpResizeTracedSvg = 'featureImageSharp___childImageSharp___resize___tracedSVG',
  FeatureImageSharpChildImageSharpResizeWidth = 'featureImageSharp___childImageSharp___resize___width',
  FeatureImageSharpChildImageSharpResizeHeight = 'featureImageSharp___childImageSharp___resize___height',
  FeatureImageSharpChildImageSharpResizeAspectRatio = 'featureImageSharp___childImageSharp___resize___aspectRatio',
  FeatureImageSharpChildImageSharpResizeOriginalName = 'featureImageSharp___childImageSharp___resize___originalName',
  FeatureImageSharpChildImageSharpId = 'featureImageSharp___childImageSharp___id',
  FeatureImageSharpChildImageSharpParentId = 'featureImageSharp___childImageSharp___parent___id',
  FeatureImageSharpChildImageSharpParentChildren = 'featureImageSharp___childImageSharp___parent___children',
  FeatureImageSharpChildImageSharpChildren = 'featureImageSharp___childImageSharp___children',
  FeatureImageSharpChildImageSharpChildrenId = 'featureImageSharp___childImageSharp___children___id',
  FeatureImageSharpChildImageSharpChildrenChildren = 'featureImageSharp___childImageSharp___children___children',
  FeatureImageSharpChildImageSharpInternalContent = 'featureImageSharp___childImageSharp___internal___content',
  FeatureImageSharpChildImageSharpInternalContentDigest = 'featureImageSharp___childImageSharp___internal___contentDigest',
  FeatureImageSharpChildImageSharpInternalDescription = 'featureImageSharp___childImageSharp___internal___description',
  FeatureImageSharpChildImageSharpInternalFieldOwners = 'featureImageSharp___childImageSharp___internal___fieldOwners',
  FeatureImageSharpChildImageSharpInternalIgnoreType = 'featureImageSharp___childImageSharp___internal___ignoreType',
  FeatureImageSharpChildImageSharpInternalMediaType = 'featureImageSharp___childImageSharp___internal___mediaType',
  FeatureImageSharpChildImageSharpInternalOwner = 'featureImageSharp___childImageSharp___internal___owner',
  FeatureImageSharpChildImageSharpInternalType = 'featureImageSharp___childImageSharp___internal___type',
  FeatureImageSharpId = 'featureImageSharp___id',
  FeatureImageSharpParentId = 'featureImageSharp___parent___id',
  FeatureImageSharpParentParentId = 'featureImageSharp___parent___parent___id',
  FeatureImageSharpParentParentChildren = 'featureImageSharp___parent___parent___children',
  FeatureImageSharpParentChildren = 'featureImageSharp___parent___children',
  FeatureImageSharpParentChildrenId = 'featureImageSharp___parent___children___id',
  FeatureImageSharpParentChildrenChildren = 'featureImageSharp___parent___children___children',
  FeatureImageSharpParentInternalContent = 'featureImageSharp___parent___internal___content',
  FeatureImageSharpParentInternalContentDigest = 'featureImageSharp___parent___internal___contentDigest',
  FeatureImageSharpParentInternalDescription = 'featureImageSharp___parent___internal___description',
  FeatureImageSharpParentInternalFieldOwners = 'featureImageSharp___parent___internal___fieldOwners',
  FeatureImageSharpParentInternalIgnoreType = 'featureImageSharp___parent___internal___ignoreType',
  FeatureImageSharpParentInternalMediaType = 'featureImageSharp___parent___internal___mediaType',
  FeatureImageSharpParentInternalOwner = 'featureImageSharp___parent___internal___owner',
  FeatureImageSharpParentInternalType = 'featureImageSharp___parent___internal___type',
  FeatureImageSharpChildren = 'featureImageSharp___children',
  FeatureImageSharpChildrenId = 'featureImageSharp___children___id',
  FeatureImageSharpChildrenParentId = 'featureImageSharp___children___parent___id',
  FeatureImageSharpChildrenParentChildren = 'featureImageSharp___children___parent___children',
  FeatureImageSharpChildrenChildren = 'featureImageSharp___children___children',
  FeatureImageSharpChildrenChildrenId = 'featureImageSharp___children___children___id',
  FeatureImageSharpChildrenChildrenChildren = 'featureImageSharp___children___children___children',
  FeatureImageSharpChildrenInternalContent = 'featureImageSharp___children___internal___content',
  FeatureImageSharpChildrenInternalContentDigest = 'featureImageSharp___children___internal___contentDigest',
  FeatureImageSharpChildrenInternalDescription = 'featureImageSharp___children___internal___description',
  FeatureImageSharpChildrenInternalFieldOwners = 'featureImageSharp___children___internal___fieldOwners',
  FeatureImageSharpChildrenInternalIgnoreType = 'featureImageSharp___children___internal___ignoreType',
  FeatureImageSharpChildrenInternalMediaType = 'featureImageSharp___children___internal___mediaType',
  FeatureImageSharpChildrenInternalOwner = 'featureImageSharp___children___internal___owner',
  FeatureImageSharpChildrenInternalType = 'featureImageSharp___children___internal___type',
  FeatureImageSharpInternalContent = 'featureImageSharp___internal___content',
  FeatureImageSharpInternalContentDigest = 'featureImageSharp___internal___contentDigest',
  FeatureImageSharpInternalDescription = 'featureImageSharp___internal___description',
  FeatureImageSharpInternalFieldOwners = 'featureImageSharp___internal___fieldOwners',
  FeatureImageSharpInternalIgnoreType = 'featureImageSharp___internal___ignoreType',
  FeatureImageSharpInternalMediaType = 'featureImageSharp___internal___mediaType',
  FeatureImageSharpInternalOwner = 'featureImageSharp___internal___owner',
  FeatureImageSharpInternalType = 'featureImageSharp___internal___type',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type GhostTagGroupConnection = {
  __typename?: 'GhostTagGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<GhostTagEdge>;
  nodes: Array<GhostTag>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type GhostTagSortInput = {
  fields?: Maybe<Array<Maybe<GhostTagFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type GhostAuthorConnection = {
  __typename?: 'GhostAuthorConnection';
  totalCount: Scalars['Int'];
  edges: Array<GhostAuthorEdge>;
  nodes: Array<GhostAuthor>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<GhostAuthorGroupConnection>;
};

export type GhostAuthorConnectionDistinctArgs = {
  field: GhostAuthorFieldsEnum;
};

export type GhostAuthorConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: GhostAuthorFieldsEnum;
};

export type GhostAuthorEdge = {
  __typename?: 'GhostAuthorEdge';
  next?: Maybe<GhostAuthor>;
  node: GhostAuthor;
  previous?: Maybe<GhostAuthor>;
};

export enum GhostAuthorFieldsEnum {
  Slug = 'slug',
  Id = 'id',
  Name = 'name',
  ProfileImage = 'profile_image',
  CoverImage = 'cover_image',
  Bio = 'bio',
  Website = 'website',
  Location = 'location',
  Facebook = 'facebook',
  Twitter = 'twitter',
  MetaTitle = 'meta_title',
  MetaDescription = 'meta_description',
  Url = 'url',
  CountPosts = 'count___posts',
  PostCount = 'postCount',
  GhostId = 'ghostId',
  ProfileImageSharpSourceInstanceName = 'profileImageSharp___sourceInstanceName',
  ProfileImageSharpAbsolutePath = 'profileImageSharp___absolutePath',
  ProfileImageSharpRelativePath = 'profileImageSharp___relativePath',
  ProfileImageSharpExtension = 'profileImageSharp___extension',
  ProfileImageSharpSize = 'profileImageSharp___size',
  ProfileImageSharpPrettySize = 'profileImageSharp___prettySize',
  ProfileImageSharpModifiedTime = 'profileImageSharp___modifiedTime',
  ProfileImageSharpAccessTime = 'profileImageSharp___accessTime',
  ProfileImageSharpChangeTime = 'profileImageSharp___changeTime',
  ProfileImageSharpBirthTime = 'profileImageSharp___birthTime',
  ProfileImageSharpRoot = 'profileImageSharp___root',
  ProfileImageSharpDir = 'profileImageSharp___dir',
  ProfileImageSharpBase = 'profileImageSharp___base',
  ProfileImageSharpExt = 'profileImageSharp___ext',
  ProfileImageSharpName = 'profileImageSharp___name',
  ProfileImageSharpRelativeDirectory = 'profileImageSharp___relativeDirectory',
  ProfileImageSharpDev = 'profileImageSharp___dev',
  ProfileImageSharpMode = 'profileImageSharp___mode',
  ProfileImageSharpNlink = 'profileImageSharp___nlink',
  ProfileImageSharpUid = 'profileImageSharp___uid',
  ProfileImageSharpGid = 'profileImageSharp___gid',
  ProfileImageSharpRdev = 'profileImageSharp___rdev',
  ProfileImageSharpIno = 'profileImageSharp___ino',
  ProfileImageSharpAtimeMs = 'profileImageSharp___atimeMs',
  ProfileImageSharpMtimeMs = 'profileImageSharp___mtimeMs',
  ProfileImageSharpCtimeMs = 'profileImageSharp___ctimeMs',
  ProfileImageSharpAtime = 'profileImageSharp___atime',
  ProfileImageSharpMtime = 'profileImageSharp___mtime',
  ProfileImageSharpCtime = 'profileImageSharp___ctime',
  ProfileImageSharpBirthtime = 'profileImageSharp___birthtime',
  ProfileImageSharpBirthtimeMs = 'profileImageSharp___birthtimeMs',
  ProfileImageSharpBlksize = 'profileImageSharp___blksize',
  ProfileImageSharpBlocks = 'profileImageSharp___blocks',
  ProfileImageSharpUrl = 'profileImageSharp___url',
  ProfileImageSharpPublicUrl = 'profileImageSharp___publicURL',
  ProfileImageSharpChildrenImageSharp = 'profileImageSharp___childrenImageSharp',
  ProfileImageSharpChildrenImageSharpFixedBase64 = 'profileImageSharp___childrenImageSharp___fixed___base64',
  ProfileImageSharpChildrenImageSharpFixedTracedSvg = 'profileImageSharp___childrenImageSharp___fixed___tracedSVG',
  ProfileImageSharpChildrenImageSharpFixedAspectRatio = 'profileImageSharp___childrenImageSharp___fixed___aspectRatio',
  ProfileImageSharpChildrenImageSharpFixedWidth = 'profileImageSharp___childrenImageSharp___fixed___width',
  ProfileImageSharpChildrenImageSharpFixedHeight = 'profileImageSharp___childrenImageSharp___fixed___height',
  ProfileImageSharpChildrenImageSharpFixedSrc = 'profileImageSharp___childrenImageSharp___fixed___src',
  ProfileImageSharpChildrenImageSharpFixedSrcSet = 'profileImageSharp___childrenImageSharp___fixed___srcSet',
  ProfileImageSharpChildrenImageSharpFixedSrcWebp = 'profileImageSharp___childrenImageSharp___fixed___srcWebp',
  ProfileImageSharpChildrenImageSharpFixedSrcSetWebp = 'profileImageSharp___childrenImageSharp___fixed___srcSetWebp',
  ProfileImageSharpChildrenImageSharpFixedOriginalName = 'profileImageSharp___childrenImageSharp___fixed___originalName',
  ProfileImageSharpChildrenImageSharpFluidBase64 = 'profileImageSharp___childrenImageSharp___fluid___base64',
  ProfileImageSharpChildrenImageSharpFluidTracedSvg = 'profileImageSharp___childrenImageSharp___fluid___tracedSVG',
  ProfileImageSharpChildrenImageSharpFluidAspectRatio = 'profileImageSharp___childrenImageSharp___fluid___aspectRatio',
  ProfileImageSharpChildrenImageSharpFluidSrc = 'profileImageSharp___childrenImageSharp___fluid___src',
  ProfileImageSharpChildrenImageSharpFluidSrcSet = 'profileImageSharp___childrenImageSharp___fluid___srcSet',
  ProfileImageSharpChildrenImageSharpFluidSrcWebp = 'profileImageSharp___childrenImageSharp___fluid___srcWebp',
  ProfileImageSharpChildrenImageSharpFluidSrcSetWebp = 'profileImageSharp___childrenImageSharp___fluid___srcSetWebp',
  ProfileImageSharpChildrenImageSharpFluidSizes = 'profileImageSharp___childrenImageSharp___fluid___sizes',
  ProfileImageSharpChildrenImageSharpFluidOriginalImg = 'profileImageSharp___childrenImageSharp___fluid___originalImg',
  ProfileImageSharpChildrenImageSharpFluidOriginalName = 'profileImageSharp___childrenImageSharp___fluid___originalName',
  ProfileImageSharpChildrenImageSharpFluidPresentationWidth = 'profileImageSharp___childrenImageSharp___fluid___presentationWidth',
  ProfileImageSharpChildrenImageSharpFluidPresentationHeight = 'profileImageSharp___childrenImageSharp___fluid___presentationHeight',
  ProfileImageSharpChildrenImageSharpGatsbyImageData = 'profileImageSharp___childrenImageSharp___gatsbyImageData',
  ProfileImageSharpChildrenImageSharpOriginalWidth = 'profileImageSharp___childrenImageSharp___original___width',
  ProfileImageSharpChildrenImageSharpOriginalHeight = 'profileImageSharp___childrenImageSharp___original___height',
  ProfileImageSharpChildrenImageSharpOriginalSrc = 'profileImageSharp___childrenImageSharp___original___src',
  ProfileImageSharpChildrenImageSharpResizeSrc = 'profileImageSharp___childrenImageSharp___resize___src',
  ProfileImageSharpChildrenImageSharpResizeTracedSvg = 'profileImageSharp___childrenImageSharp___resize___tracedSVG',
  ProfileImageSharpChildrenImageSharpResizeWidth = 'profileImageSharp___childrenImageSharp___resize___width',
  ProfileImageSharpChildrenImageSharpResizeHeight = 'profileImageSharp___childrenImageSharp___resize___height',
  ProfileImageSharpChildrenImageSharpResizeAspectRatio = 'profileImageSharp___childrenImageSharp___resize___aspectRatio',
  ProfileImageSharpChildrenImageSharpResizeOriginalName = 'profileImageSharp___childrenImageSharp___resize___originalName',
  ProfileImageSharpChildrenImageSharpId = 'profileImageSharp___childrenImageSharp___id',
  ProfileImageSharpChildrenImageSharpParentId = 'profileImageSharp___childrenImageSharp___parent___id',
  ProfileImageSharpChildrenImageSharpParentChildren = 'profileImageSharp___childrenImageSharp___parent___children',
  ProfileImageSharpChildrenImageSharpChildren = 'profileImageSharp___childrenImageSharp___children',
  ProfileImageSharpChildrenImageSharpChildrenId = 'profileImageSharp___childrenImageSharp___children___id',
  ProfileImageSharpChildrenImageSharpChildrenChildren = 'profileImageSharp___childrenImageSharp___children___children',
  ProfileImageSharpChildrenImageSharpInternalContent = 'profileImageSharp___childrenImageSharp___internal___content',
  ProfileImageSharpChildrenImageSharpInternalContentDigest = 'profileImageSharp___childrenImageSharp___internal___contentDigest',
  ProfileImageSharpChildrenImageSharpInternalDescription = 'profileImageSharp___childrenImageSharp___internal___description',
  ProfileImageSharpChildrenImageSharpInternalFieldOwners = 'profileImageSharp___childrenImageSharp___internal___fieldOwners',
  ProfileImageSharpChildrenImageSharpInternalIgnoreType = 'profileImageSharp___childrenImageSharp___internal___ignoreType',
  ProfileImageSharpChildrenImageSharpInternalMediaType = 'profileImageSharp___childrenImageSharp___internal___mediaType',
  ProfileImageSharpChildrenImageSharpInternalOwner = 'profileImageSharp___childrenImageSharp___internal___owner',
  ProfileImageSharpChildrenImageSharpInternalType = 'profileImageSharp___childrenImageSharp___internal___type',
  ProfileImageSharpChildImageSharpFixedBase64 = 'profileImageSharp___childImageSharp___fixed___base64',
  ProfileImageSharpChildImageSharpFixedTracedSvg = 'profileImageSharp___childImageSharp___fixed___tracedSVG',
  ProfileImageSharpChildImageSharpFixedAspectRatio = 'profileImageSharp___childImageSharp___fixed___aspectRatio',
  ProfileImageSharpChildImageSharpFixedWidth = 'profileImageSharp___childImageSharp___fixed___width',
  ProfileImageSharpChildImageSharpFixedHeight = 'profileImageSharp___childImageSharp___fixed___height',
  ProfileImageSharpChildImageSharpFixedSrc = 'profileImageSharp___childImageSharp___fixed___src',
  ProfileImageSharpChildImageSharpFixedSrcSet = 'profileImageSharp___childImageSharp___fixed___srcSet',
  ProfileImageSharpChildImageSharpFixedSrcWebp = 'profileImageSharp___childImageSharp___fixed___srcWebp',
  ProfileImageSharpChildImageSharpFixedSrcSetWebp = 'profileImageSharp___childImageSharp___fixed___srcSetWebp',
  ProfileImageSharpChildImageSharpFixedOriginalName = 'profileImageSharp___childImageSharp___fixed___originalName',
  ProfileImageSharpChildImageSharpFluidBase64 = 'profileImageSharp___childImageSharp___fluid___base64',
  ProfileImageSharpChildImageSharpFluidTracedSvg = 'profileImageSharp___childImageSharp___fluid___tracedSVG',
  ProfileImageSharpChildImageSharpFluidAspectRatio = 'profileImageSharp___childImageSharp___fluid___aspectRatio',
  ProfileImageSharpChildImageSharpFluidSrc = 'profileImageSharp___childImageSharp___fluid___src',
  ProfileImageSharpChildImageSharpFluidSrcSet = 'profileImageSharp___childImageSharp___fluid___srcSet',
  ProfileImageSharpChildImageSharpFluidSrcWebp = 'profileImageSharp___childImageSharp___fluid___srcWebp',
  ProfileImageSharpChildImageSharpFluidSrcSetWebp = 'profileImageSharp___childImageSharp___fluid___srcSetWebp',
  ProfileImageSharpChildImageSharpFluidSizes = 'profileImageSharp___childImageSharp___fluid___sizes',
  ProfileImageSharpChildImageSharpFluidOriginalImg = 'profileImageSharp___childImageSharp___fluid___originalImg',
  ProfileImageSharpChildImageSharpFluidOriginalName = 'profileImageSharp___childImageSharp___fluid___originalName',
  ProfileImageSharpChildImageSharpFluidPresentationWidth = 'profileImageSharp___childImageSharp___fluid___presentationWidth',
  ProfileImageSharpChildImageSharpFluidPresentationHeight = 'profileImageSharp___childImageSharp___fluid___presentationHeight',
  ProfileImageSharpChildImageSharpGatsbyImageData = 'profileImageSharp___childImageSharp___gatsbyImageData',
  ProfileImageSharpChildImageSharpOriginalWidth = 'profileImageSharp___childImageSharp___original___width',
  ProfileImageSharpChildImageSharpOriginalHeight = 'profileImageSharp___childImageSharp___original___height',
  ProfileImageSharpChildImageSharpOriginalSrc = 'profileImageSharp___childImageSharp___original___src',
  ProfileImageSharpChildImageSharpResizeSrc = 'profileImageSharp___childImageSharp___resize___src',
  ProfileImageSharpChildImageSharpResizeTracedSvg = 'profileImageSharp___childImageSharp___resize___tracedSVG',
  ProfileImageSharpChildImageSharpResizeWidth = 'profileImageSharp___childImageSharp___resize___width',
  ProfileImageSharpChildImageSharpResizeHeight = 'profileImageSharp___childImageSharp___resize___height',
  ProfileImageSharpChildImageSharpResizeAspectRatio = 'profileImageSharp___childImageSharp___resize___aspectRatio',
  ProfileImageSharpChildImageSharpResizeOriginalName = 'profileImageSharp___childImageSharp___resize___originalName',
  ProfileImageSharpChildImageSharpId = 'profileImageSharp___childImageSharp___id',
  ProfileImageSharpChildImageSharpParentId = 'profileImageSharp___childImageSharp___parent___id',
  ProfileImageSharpChildImageSharpParentChildren = 'profileImageSharp___childImageSharp___parent___children',
  ProfileImageSharpChildImageSharpChildren = 'profileImageSharp___childImageSharp___children',
  ProfileImageSharpChildImageSharpChildrenId = 'profileImageSharp___childImageSharp___children___id',
  ProfileImageSharpChildImageSharpChildrenChildren = 'profileImageSharp___childImageSharp___children___children',
  ProfileImageSharpChildImageSharpInternalContent = 'profileImageSharp___childImageSharp___internal___content',
  ProfileImageSharpChildImageSharpInternalContentDigest = 'profileImageSharp___childImageSharp___internal___contentDigest',
  ProfileImageSharpChildImageSharpInternalDescription = 'profileImageSharp___childImageSharp___internal___description',
  ProfileImageSharpChildImageSharpInternalFieldOwners = 'profileImageSharp___childImageSharp___internal___fieldOwners',
  ProfileImageSharpChildImageSharpInternalIgnoreType = 'profileImageSharp___childImageSharp___internal___ignoreType',
  ProfileImageSharpChildImageSharpInternalMediaType = 'profileImageSharp___childImageSharp___internal___mediaType',
  ProfileImageSharpChildImageSharpInternalOwner = 'profileImageSharp___childImageSharp___internal___owner',
  ProfileImageSharpChildImageSharpInternalType = 'profileImageSharp___childImageSharp___internal___type',
  ProfileImageSharpId = 'profileImageSharp___id',
  ProfileImageSharpParentId = 'profileImageSharp___parent___id',
  ProfileImageSharpParentParentId = 'profileImageSharp___parent___parent___id',
  ProfileImageSharpParentParentChildren = 'profileImageSharp___parent___parent___children',
  ProfileImageSharpParentChildren = 'profileImageSharp___parent___children',
  ProfileImageSharpParentChildrenId = 'profileImageSharp___parent___children___id',
  ProfileImageSharpParentChildrenChildren = 'profileImageSharp___parent___children___children',
  ProfileImageSharpParentInternalContent = 'profileImageSharp___parent___internal___content',
  ProfileImageSharpParentInternalContentDigest = 'profileImageSharp___parent___internal___contentDigest',
  ProfileImageSharpParentInternalDescription = 'profileImageSharp___parent___internal___description',
  ProfileImageSharpParentInternalFieldOwners = 'profileImageSharp___parent___internal___fieldOwners',
  ProfileImageSharpParentInternalIgnoreType = 'profileImageSharp___parent___internal___ignoreType',
  ProfileImageSharpParentInternalMediaType = 'profileImageSharp___parent___internal___mediaType',
  ProfileImageSharpParentInternalOwner = 'profileImageSharp___parent___internal___owner',
  ProfileImageSharpParentInternalType = 'profileImageSharp___parent___internal___type',
  ProfileImageSharpChildren = 'profileImageSharp___children',
  ProfileImageSharpChildrenId = 'profileImageSharp___children___id',
  ProfileImageSharpChildrenParentId = 'profileImageSharp___children___parent___id',
  ProfileImageSharpChildrenParentChildren = 'profileImageSharp___children___parent___children',
  ProfileImageSharpChildrenChildren = 'profileImageSharp___children___children',
  ProfileImageSharpChildrenChildrenId = 'profileImageSharp___children___children___id',
  ProfileImageSharpChildrenChildrenChildren = 'profileImageSharp___children___children___children',
  ProfileImageSharpChildrenInternalContent = 'profileImageSharp___children___internal___content',
  ProfileImageSharpChildrenInternalContentDigest = 'profileImageSharp___children___internal___contentDigest',
  ProfileImageSharpChildrenInternalDescription = 'profileImageSharp___children___internal___description',
  ProfileImageSharpChildrenInternalFieldOwners = 'profileImageSharp___children___internal___fieldOwners',
  ProfileImageSharpChildrenInternalIgnoreType = 'profileImageSharp___children___internal___ignoreType',
  ProfileImageSharpChildrenInternalMediaType = 'profileImageSharp___children___internal___mediaType',
  ProfileImageSharpChildrenInternalOwner = 'profileImageSharp___children___internal___owner',
  ProfileImageSharpChildrenInternalType = 'profileImageSharp___children___internal___type',
  ProfileImageSharpInternalContent = 'profileImageSharp___internal___content',
  ProfileImageSharpInternalContentDigest = 'profileImageSharp___internal___contentDigest',
  ProfileImageSharpInternalDescription = 'profileImageSharp___internal___description',
  ProfileImageSharpInternalFieldOwners = 'profileImageSharp___internal___fieldOwners',
  ProfileImageSharpInternalIgnoreType = 'profileImageSharp___internal___ignoreType',
  ProfileImageSharpInternalMediaType = 'profileImageSharp___internal___mediaType',
  ProfileImageSharpInternalOwner = 'profileImageSharp___internal___owner',
  ProfileImageSharpInternalType = 'profileImageSharp___internal___type',
  CoverImageSharpSourceInstanceName = 'coverImageSharp___sourceInstanceName',
  CoverImageSharpAbsolutePath = 'coverImageSharp___absolutePath',
  CoverImageSharpRelativePath = 'coverImageSharp___relativePath',
  CoverImageSharpExtension = 'coverImageSharp___extension',
  CoverImageSharpSize = 'coverImageSharp___size',
  CoverImageSharpPrettySize = 'coverImageSharp___prettySize',
  CoverImageSharpModifiedTime = 'coverImageSharp___modifiedTime',
  CoverImageSharpAccessTime = 'coverImageSharp___accessTime',
  CoverImageSharpChangeTime = 'coverImageSharp___changeTime',
  CoverImageSharpBirthTime = 'coverImageSharp___birthTime',
  CoverImageSharpRoot = 'coverImageSharp___root',
  CoverImageSharpDir = 'coverImageSharp___dir',
  CoverImageSharpBase = 'coverImageSharp___base',
  CoverImageSharpExt = 'coverImageSharp___ext',
  CoverImageSharpName = 'coverImageSharp___name',
  CoverImageSharpRelativeDirectory = 'coverImageSharp___relativeDirectory',
  CoverImageSharpDev = 'coverImageSharp___dev',
  CoverImageSharpMode = 'coverImageSharp___mode',
  CoverImageSharpNlink = 'coverImageSharp___nlink',
  CoverImageSharpUid = 'coverImageSharp___uid',
  CoverImageSharpGid = 'coverImageSharp___gid',
  CoverImageSharpRdev = 'coverImageSharp___rdev',
  CoverImageSharpIno = 'coverImageSharp___ino',
  CoverImageSharpAtimeMs = 'coverImageSharp___atimeMs',
  CoverImageSharpMtimeMs = 'coverImageSharp___mtimeMs',
  CoverImageSharpCtimeMs = 'coverImageSharp___ctimeMs',
  CoverImageSharpAtime = 'coverImageSharp___atime',
  CoverImageSharpMtime = 'coverImageSharp___mtime',
  CoverImageSharpCtime = 'coverImageSharp___ctime',
  CoverImageSharpBirthtime = 'coverImageSharp___birthtime',
  CoverImageSharpBirthtimeMs = 'coverImageSharp___birthtimeMs',
  CoverImageSharpBlksize = 'coverImageSharp___blksize',
  CoverImageSharpBlocks = 'coverImageSharp___blocks',
  CoverImageSharpUrl = 'coverImageSharp___url',
  CoverImageSharpPublicUrl = 'coverImageSharp___publicURL',
  CoverImageSharpChildrenImageSharp = 'coverImageSharp___childrenImageSharp',
  CoverImageSharpChildrenImageSharpFixedBase64 = 'coverImageSharp___childrenImageSharp___fixed___base64',
  CoverImageSharpChildrenImageSharpFixedTracedSvg = 'coverImageSharp___childrenImageSharp___fixed___tracedSVG',
  CoverImageSharpChildrenImageSharpFixedAspectRatio = 'coverImageSharp___childrenImageSharp___fixed___aspectRatio',
  CoverImageSharpChildrenImageSharpFixedWidth = 'coverImageSharp___childrenImageSharp___fixed___width',
  CoverImageSharpChildrenImageSharpFixedHeight = 'coverImageSharp___childrenImageSharp___fixed___height',
  CoverImageSharpChildrenImageSharpFixedSrc = 'coverImageSharp___childrenImageSharp___fixed___src',
  CoverImageSharpChildrenImageSharpFixedSrcSet = 'coverImageSharp___childrenImageSharp___fixed___srcSet',
  CoverImageSharpChildrenImageSharpFixedSrcWebp = 'coverImageSharp___childrenImageSharp___fixed___srcWebp',
  CoverImageSharpChildrenImageSharpFixedSrcSetWebp = 'coverImageSharp___childrenImageSharp___fixed___srcSetWebp',
  CoverImageSharpChildrenImageSharpFixedOriginalName = 'coverImageSharp___childrenImageSharp___fixed___originalName',
  CoverImageSharpChildrenImageSharpFluidBase64 = 'coverImageSharp___childrenImageSharp___fluid___base64',
  CoverImageSharpChildrenImageSharpFluidTracedSvg = 'coverImageSharp___childrenImageSharp___fluid___tracedSVG',
  CoverImageSharpChildrenImageSharpFluidAspectRatio = 'coverImageSharp___childrenImageSharp___fluid___aspectRatio',
  CoverImageSharpChildrenImageSharpFluidSrc = 'coverImageSharp___childrenImageSharp___fluid___src',
  CoverImageSharpChildrenImageSharpFluidSrcSet = 'coverImageSharp___childrenImageSharp___fluid___srcSet',
  CoverImageSharpChildrenImageSharpFluidSrcWebp = 'coverImageSharp___childrenImageSharp___fluid___srcWebp',
  CoverImageSharpChildrenImageSharpFluidSrcSetWebp = 'coverImageSharp___childrenImageSharp___fluid___srcSetWebp',
  CoverImageSharpChildrenImageSharpFluidSizes = 'coverImageSharp___childrenImageSharp___fluid___sizes',
  CoverImageSharpChildrenImageSharpFluidOriginalImg = 'coverImageSharp___childrenImageSharp___fluid___originalImg',
  CoverImageSharpChildrenImageSharpFluidOriginalName = 'coverImageSharp___childrenImageSharp___fluid___originalName',
  CoverImageSharpChildrenImageSharpFluidPresentationWidth = 'coverImageSharp___childrenImageSharp___fluid___presentationWidth',
  CoverImageSharpChildrenImageSharpFluidPresentationHeight = 'coverImageSharp___childrenImageSharp___fluid___presentationHeight',
  CoverImageSharpChildrenImageSharpGatsbyImageData = 'coverImageSharp___childrenImageSharp___gatsbyImageData',
  CoverImageSharpChildrenImageSharpOriginalWidth = 'coverImageSharp___childrenImageSharp___original___width',
  CoverImageSharpChildrenImageSharpOriginalHeight = 'coverImageSharp___childrenImageSharp___original___height',
  CoverImageSharpChildrenImageSharpOriginalSrc = 'coverImageSharp___childrenImageSharp___original___src',
  CoverImageSharpChildrenImageSharpResizeSrc = 'coverImageSharp___childrenImageSharp___resize___src',
  CoverImageSharpChildrenImageSharpResizeTracedSvg = 'coverImageSharp___childrenImageSharp___resize___tracedSVG',
  CoverImageSharpChildrenImageSharpResizeWidth = 'coverImageSharp___childrenImageSharp___resize___width',
  CoverImageSharpChildrenImageSharpResizeHeight = 'coverImageSharp___childrenImageSharp___resize___height',
  CoverImageSharpChildrenImageSharpResizeAspectRatio = 'coverImageSharp___childrenImageSharp___resize___aspectRatio',
  CoverImageSharpChildrenImageSharpResizeOriginalName = 'coverImageSharp___childrenImageSharp___resize___originalName',
  CoverImageSharpChildrenImageSharpId = 'coverImageSharp___childrenImageSharp___id',
  CoverImageSharpChildrenImageSharpParentId = 'coverImageSharp___childrenImageSharp___parent___id',
  CoverImageSharpChildrenImageSharpParentChildren = 'coverImageSharp___childrenImageSharp___parent___children',
  CoverImageSharpChildrenImageSharpChildren = 'coverImageSharp___childrenImageSharp___children',
  CoverImageSharpChildrenImageSharpChildrenId = 'coverImageSharp___childrenImageSharp___children___id',
  CoverImageSharpChildrenImageSharpChildrenChildren = 'coverImageSharp___childrenImageSharp___children___children',
  CoverImageSharpChildrenImageSharpInternalContent = 'coverImageSharp___childrenImageSharp___internal___content',
  CoverImageSharpChildrenImageSharpInternalContentDigest = 'coverImageSharp___childrenImageSharp___internal___contentDigest',
  CoverImageSharpChildrenImageSharpInternalDescription = 'coverImageSharp___childrenImageSharp___internal___description',
  CoverImageSharpChildrenImageSharpInternalFieldOwners = 'coverImageSharp___childrenImageSharp___internal___fieldOwners',
  CoverImageSharpChildrenImageSharpInternalIgnoreType = 'coverImageSharp___childrenImageSharp___internal___ignoreType',
  CoverImageSharpChildrenImageSharpInternalMediaType = 'coverImageSharp___childrenImageSharp___internal___mediaType',
  CoverImageSharpChildrenImageSharpInternalOwner = 'coverImageSharp___childrenImageSharp___internal___owner',
  CoverImageSharpChildrenImageSharpInternalType = 'coverImageSharp___childrenImageSharp___internal___type',
  CoverImageSharpChildImageSharpFixedBase64 = 'coverImageSharp___childImageSharp___fixed___base64',
  CoverImageSharpChildImageSharpFixedTracedSvg = 'coverImageSharp___childImageSharp___fixed___tracedSVG',
  CoverImageSharpChildImageSharpFixedAspectRatio = 'coverImageSharp___childImageSharp___fixed___aspectRatio',
  CoverImageSharpChildImageSharpFixedWidth = 'coverImageSharp___childImageSharp___fixed___width',
  CoverImageSharpChildImageSharpFixedHeight = 'coverImageSharp___childImageSharp___fixed___height',
  CoverImageSharpChildImageSharpFixedSrc = 'coverImageSharp___childImageSharp___fixed___src',
  CoverImageSharpChildImageSharpFixedSrcSet = 'coverImageSharp___childImageSharp___fixed___srcSet',
  CoverImageSharpChildImageSharpFixedSrcWebp = 'coverImageSharp___childImageSharp___fixed___srcWebp',
  CoverImageSharpChildImageSharpFixedSrcSetWebp = 'coverImageSharp___childImageSharp___fixed___srcSetWebp',
  CoverImageSharpChildImageSharpFixedOriginalName = 'coverImageSharp___childImageSharp___fixed___originalName',
  CoverImageSharpChildImageSharpFluidBase64 = 'coverImageSharp___childImageSharp___fluid___base64',
  CoverImageSharpChildImageSharpFluidTracedSvg = 'coverImageSharp___childImageSharp___fluid___tracedSVG',
  CoverImageSharpChildImageSharpFluidAspectRatio = 'coverImageSharp___childImageSharp___fluid___aspectRatio',
  CoverImageSharpChildImageSharpFluidSrc = 'coverImageSharp___childImageSharp___fluid___src',
  CoverImageSharpChildImageSharpFluidSrcSet = 'coverImageSharp___childImageSharp___fluid___srcSet',
  CoverImageSharpChildImageSharpFluidSrcWebp = 'coverImageSharp___childImageSharp___fluid___srcWebp',
  CoverImageSharpChildImageSharpFluidSrcSetWebp = 'coverImageSharp___childImageSharp___fluid___srcSetWebp',
  CoverImageSharpChildImageSharpFluidSizes = 'coverImageSharp___childImageSharp___fluid___sizes',
  CoverImageSharpChildImageSharpFluidOriginalImg = 'coverImageSharp___childImageSharp___fluid___originalImg',
  CoverImageSharpChildImageSharpFluidOriginalName = 'coverImageSharp___childImageSharp___fluid___originalName',
  CoverImageSharpChildImageSharpFluidPresentationWidth = 'coverImageSharp___childImageSharp___fluid___presentationWidth',
  CoverImageSharpChildImageSharpFluidPresentationHeight = 'coverImageSharp___childImageSharp___fluid___presentationHeight',
  CoverImageSharpChildImageSharpGatsbyImageData = 'coverImageSharp___childImageSharp___gatsbyImageData',
  CoverImageSharpChildImageSharpOriginalWidth = 'coverImageSharp___childImageSharp___original___width',
  CoverImageSharpChildImageSharpOriginalHeight = 'coverImageSharp___childImageSharp___original___height',
  CoverImageSharpChildImageSharpOriginalSrc = 'coverImageSharp___childImageSharp___original___src',
  CoverImageSharpChildImageSharpResizeSrc = 'coverImageSharp___childImageSharp___resize___src',
  CoverImageSharpChildImageSharpResizeTracedSvg = 'coverImageSharp___childImageSharp___resize___tracedSVG',
  CoverImageSharpChildImageSharpResizeWidth = 'coverImageSharp___childImageSharp___resize___width',
  CoverImageSharpChildImageSharpResizeHeight = 'coverImageSharp___childImageSharp___resize___height',
  CoverImageSharpChildImageSharpResizeAspectRatio = 'coverImageSharp___childImageSharp___resize___aspectRatio',
  CoverImageSharpChildImageSharpResizeOriginalName = 'coverImageSharp___childImageSharp___resize___originalName',
  CoverImageSharpChildImageSharpId = 'coverImageSharp___childImageSharp___id',
  CoverImageSharpChildImageSharpParentId = 'coverImageSharp___childImageSharp___parent___id',
  CoverImageSharpChildImageSharpParentChildren = 'coverImageSharp___childImageSharp___parent___children',
  CoverImageSharpChildImageSharpChildren = 'coverImageSharp___childImageSharp___children',
  CoverImageSharpChildImageSharpChildrenId = 'coverImageSharp___childImageSharp___children___id',
  CoverImageSharpChildImageSharpChildrenChildren = 'coverImageSharp___childImageSharp___children___children',
  CoverImageSharpChildImageSharpInternalContent = 'coverImageSharp___childImageSharp___internal___content',
  CoverImageSharpChildImageSharpInternalContentDigest = 'coverImageSharp___childImageSharp___internal___contentDigest',
  CoverImageSharpChildImageSharpInternalDescription = 'coverImageSharp___childImageSharp___internal___description',
  CoverImageSharpChildImageSharpInternalFieldOwners = 'coverImageSharp___childImageSharp___internal___fieldOwners',
  CoverImageSharpChildImageSharpInternalIgnoreType = 'coverImageSharp___childImageSharp___internal___ignoreType',
  CoverImageSharpChildImageSharpInternalMediaType = 'coverImageSharp___childImageSharp___internal___mediaType',
  CoverImageSharpChildImageSharpInternalOwner = 'coverImageSharp___childImageSharp___internal___owner',
  CoverImageSharpChildImageSharpInternalType = 'coverImageSharp___childImageSharp___internal___type',
  CoverImageSharpId = 'coverImageSharp___id',
  CoverImageSharpParentId = 'coverImageSharp___parent___id',
  CoverImageSharpParentParentId = 'coverImageSharp___parent___parent___id',
  CoverImageSharpParentParentChildren = 'coverImageSharp___parent___parent___children',
  CoverImageSharpParentChildren = 'coverImageSharp___parent___children',
  CoverImageSharpParentChildrenId = 'coverImageSharp___parent___children___id',
  CoverImageSharpParentChildrenChildren = 'coverImageSharp___parent___children___children',
  CoverImageSharpParentInternalContent = 'coverImageSharp___parent___internal___content',
  CoverImageSharpParentInternalContentDigest = 'coverImageSharp___parent___internal___contentDigest',
  CoverImageSharpParentInternalDescription = 'coverImageSharp___parent___internal___description',
  CoverImageSharpParentInternalFieldOwners = 'coverImageSharp___parent___internal___fieldOwners',
  CoverImageSharpParentInternalIgnoreType = 'coverImageSharp___parent___internal___ignoreType',
  CoverImageSharpParentInternalMediaType = 'coverImageSharp___parent___internal___mediaType',
  CoverImageSharpParentInternalOwner = 'coverImageSharp___parent___internal___owner',
  CoverImageSharpParentInternalType = 'coverImageSharp___parent___internal___type',
  CoverImageSharpChildren = 'coverImageSharp___children',
  CoverImageSharpChildrenId = 'coverImageSharp___children___id',
  CoverImageSharpChildrenParentId = 'coverImageSharp___children___parent___id',
  CoverImageSharpChildrenParentChildren = 'coverImageSharp___children___parent___children',
  CoverImageSharpChildrenChildren = 'coverImageSharp___children___children',
  CoverImageSharpChildrenChildrenId = 'coverImageSharp___children___children___id',
  CoverImageSharpChildrenChildrenChildren = 'coverImageSharp___children___children___children',
  CoverImageSharpChildrenInternalContent = 'coverImageSharp___children___internal___content',
  CoverImageSharpChildrenInternalContentDigest = 'coverImageSharp___children___internal___contentDigest',
  CoverImageSharpChildrenInternalDescription = 'coverImageSharp___children___internal___description',
  CoverImageSharpChildrenInternalFieldOwners = 'coverImageSharp___children___internal___fieldOwners',
  CoverImageSharpChildrenInternalIgnoreType = 'coverImageSharp___children___internal___ignoreType',
  CoverImageSharpChildrenInternalMediaType = 'coverImageSharp___children___internal___mediaType',
  CoverImageSharpChildrenInternalOwner = 'coverImageSharp___children___internal___owner',
  CoverImageSharpChildrenInternalType = 'coverImageSharp___children___internal___type',
  CoverImageSharpInternalContent = 'coverImageSharp___internal___content',
  CoverImageSharpInternalContentDigest = 'coverImageSharp___internal___contentDigest',
  CoverImageSharpInternalDescription = 'coverImageSharp___internal___description',
  CoverImageSharpInternalFieldOwners = 'coverImageSharp___internal___fieldOwners',
  CoverImageSharpInternalIgnoreType = 'coverImageSharp___internal___ignoreType',
  CoverImageSharpInternalMediaType = 'coverImageSharp___internal___mediaType',
  CoverImageSharpInternalOwner = 'coverImageSharp___internal___owner',
  CoverImageSharpInternalType = 'coverImageSharp___internal___type',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type GhostAuthorGroupConnection = {
  __typename?: 'GhostAuthorGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<GhostAuthorEdge>;
  nodes: Array<GhostAuthor>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type GhostAuthorSortInput = {
  fields?: Maybe<Array<Maybe<GhostAuthorFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type GhostNavigationFilterListInput = {
  elemMatch?: Maybe<GhostNavigationFilterInput>;
};

export type GhostNavigationFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type GhostSettingsConnection = {
  __typename?: 'GhostSettingsConnection';
  totalCount: Scalars['Int'];
  edges: Array<GhostSettingsEdge>;
  nodes: Array<GhostSettings>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<GhostSettingsGroupConnection>;
};

export type GhostSettingsConnectionDistinctArgs = {
  field: GhostSettingsFieldsEnum;
};

export type GhostSettingsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: GhostSettingsFieldsEnum;
};

export type GhostSettingsEdge = {
  __typename?: 'GhostSettingsEdge';
  next?: Maybe<GhostSettings>;
  node: GhostSettings;
  previous?: Maybe<GhostSettings>;
};

export enum GhostSettingsFieldsEnum {
  Title = 'title',
  Description = 'description',
  Logo = 'logo',
  Icon = 'icon',
  CoverImage = 'cover_image',
  Facebook = 'facebook',
  Twitter = 'twitter',
  Lang = 'lang',
  Timezone = 'timezone',
  Navigation = 'navigation',
  NavigationLabel = 'navigation___label',
  NavigationUrl = 'navigation___url',
  SecondaryNavigation = 'secondary_navigation',
  SecondaryNavigationLabel = 'secondary_navigation___label',
  SecondaryNavigationUrl = 'secondary_navigation___url',
  MetaTitle = 'meta_title',
  MetaDescription = 'meta_description',
  OgImage = 'og_image',
  OgTitle = 'og_title',
  OgDescription = 'og_description',
  TwitterImage = 'twitter_image',
  TwitterTitle = 'twitter_title',
  TwitterDescription = 'twitter_description',
  Url = 'url',
  CodeinjectionHead = 'codeinjection_head',
  CodeinjectionFoot = 'codeinjection_foot',
  CodeinjectionStyles = 'codeinjection_styles',
  ActiveTimezone = 'active_timezone',
  DefaultLocale = 'default_locale',
  MembersSupportAddress = 'members_support_address',
  GhostId = 'ghostId',
  CoverImageSharpSourceInstanceName = 'coverImageSharp___sourceInstanceName',
  CoverImageSharpAbsolutePath = 'coverImageSharp___absolutePath',
  CoverImageSharpRelativePath = 'coverImageSharp___relativePath',
  CoverImageSharpExtension = 'coverImageSharp___extension',
  CoverImageSharpSize = 'coverImageSharp___size',
  CoverImageSharpPrettySize = 'coverImageSharp___prettySize',
  CoverImageSharpModifiedTime = 'coverImageSharp___modifiedTime',
  CoverImageSharpAccessTime = 'coverImageSharp___accessTime',
  CoverImageSharpChangeTime = 'coverImageSharp___changeTime',
  CoverImageSharpBirthTime = 'coverImageSharp___birthTime',
  CoverImageSharpRoot = 'coverImageSharp___root',
  CoverImageSharpDir = 'coverImageSharp___dir',
  CoverImageSharpBase = 'coverImageSharp___base',
  CoverImageSharpExt = 'coverImageSharp___ext',
  CoverImageSharpName = 'coverImageSharp___name',
  CoverImageSharpRelativeDirectory = 'coverImageSharp___relativeDirectory',
  CoverImageSharpDev = 'coverImageSharp___dev',
  CoverImageSharpMode = 'coverImageSharp___mode',
  CoverImageSharpNlink = 'coverImageSharp___nlink',
  CoverImageSharpUid = 'coverImageSharp___uid',
  CoverImageSharpGid = 'coverImageSharp___gid',
  CoverImageSharpRdev = 'coverImageSharp___rdev',
  CoverImageSharpIno = 'coverImageSharp___ino',
  CoverImageSharpAtimeMs = 'coverImageSharp___atimeMs',
  CoverImageSharpMtimeMs = 'coverImageSharp___mtimeMs',
  CoverImageSharpCtimeMs = 'coverImageSharp___ctimeMs',
  CoverImageSharpAtime = 'coverImageSharp___atime',
  CoverImageSharpMtime = 'coverImageSharp___mtime',
  CoverImageSharpCtime = 'coverImageSharp___ctime',
  CoverImageSharpBirthtime = 'coverImageSharp___birthtime',
  CoverImageSharpBirthtimeMs = 'coverImageSharp___birthtimeMs',
  CoverImageSharpBlksize = 'coverImageSharp___blksize',
  CoverImageSharpBlocks = 'coverImageSharp___blocks',
  CoverImageSharpUrl = 'coverImageSharp___url',
  CoverImageSharpPublicUrl = 'coverImageSharp___publicURL',
  CoverImageSharpChildrenImageSharp = 'coverImageSharp___childrenImageSharp',
  CoverImageSharpChildrenImageSharpFixedBase64 = 'coverImageSharp___childrenImageSharp___fixed___base64',
  CoverImageSharpChildrenImageSharpFixedTracedSvg = 'coverImageSharp___childrenImageSharp___fixed___tracedSVG',
  CoverImageSharpChildrenImageSharpFixedAspectRatio = 'coverImageSharp___childrenImageSharp___fixed___aspectRatio',
  CoverImageSharpChildrenImageSharpFixedWidth = 'coverImageSharp___childrenImageSharp___fixed___width',
  CoverImageSharpChildrenImageSharpFixedHeight = 'coverImageSharp___childrenImageSharp___fixed___height',
  CoverImageSharpChildrenImageSharpFixedSrc = 'coverImageSharp___childrenImageSharp___fixed___src',
  CoverImageSharpChildrenImageSharpFixedSrcSet = 'coverImageSharp___childrenImageSharp___fixed___srcSet',
  CoverImageSharpChildrenImageSharpFixedSrcWebp = 'coverImageSharp___childrenImageSharp___fixed___srcWebp',
  CoverImageSharpChildrenImageSharpFixedSrcSetWebp = 'coverImageSharp___childrenImageSharp___fixed___srcSetWebp',
  CoverImageSharpChildrenImageSharpFixedOriginalName = 'coverImageSharp___childrenImageSharp___fixed___originalName',
  CoverImageSharpChildrenImageSharpFluidBase64 = 'coverImageSharp___childrenImageSharp___fluid___base64',
  CoverImageSharpChildrenImageSharpFluidTracedSvg = 'coverImageSharp___childrenImageSharp___fluid___tracedSVG',
  CoverImageSharpChildrenImageSharpFluidAspectRatio = 'coverImageSharp___childrenImageSharp___fluid___aspectRatio',
  CoverImageSharpChildrenImageSharpFluidSrc = 'coverImageSharp___childrenImageSharp___fluid___src',
  CoverImageSharpChildrenImageSharpFluidSrcSet = 'coverImageSharp___childrenImageSharp___fluid___srcSet',
  CoverImageSharpChildrenImageSharpFluidSrcWebp = 'coverImageSharp___childrenImageSharp___fluid___srcWebp',
  CoverImageSharpChildrenImageSharpFluidSrcSetWebp = 'coverImageSharp___childrenImageSharp___fluid___srcSetWebp',
  CoverImageSharpChildrenImageSharpFluidSizes = 'coverImageSharp___childrenImageSharp___fluid___sizes',
  CoverImageSharpChildrenImageSharpFluidOriginalImg = 'coverImageSharp___childrenImageSharp___fluid___originalImg',
  CoverImageSharpChildrenImageSharpFluidOriginalName = 'coverImageSharp___childrenImageSharp___fluid___originalName',
  CoverImageSharpChildrenImageSharpFluidPresentationWidth = 'coverImageSharp___childrenImageSharp___fluid___presentationWidth',
  CoverImageSharpChildrenImageSharpFluidPresentationHeight = 'coverImageSharp___childrenImageSharp___fluid___presentationHeight',
  CoverImageSharpChildrenImageSharpGatsbyImageData = 'coverImageSharp___childrenImageSharp___gatsbyImageData',
  CoverImageSharpChildrenImageSharpOriginalWidth = 'coverImageSharp___childrenImageSharp___original___width',
  CoverImageSharpChildrenImageSharpOriginalHeight = 'coverImageSharp___childrenImageSharp___original___height',
  CoverImageSharpChildrenImageSharpOriginalSrc = 'coverImageSharp___childrenImageSharp___original___src',
  CoverImageSharpChildrenImageSharpResizeSrc = 'coverImageSharp___childrenImageSharp___resize___src',
  CoverImageSharpChildrenImageSharpResizeTracedSvg = 'coverImageSharp___childrenImageSharp___resize___tracedSVG',
  CoverImageSharpChildrenImageSharpResizeWidth = 'coverImageSharp___childrenImageSharp___resize___width',
  CoverImageSharpChildrenImageSharpResizeHeight = 'coverImageSharp___childrenImageSharp___resize___height',
  CoverImageSharpChildrenImageSharpResizeAspectRatio = 'coverImageSharp___childrenImageSharp___resize___aspectRatio',
  CoverImageSharpChildrenImageSharpResizeOriginalName = 'coverImageSharp___childrenImageSharp___resize___originalName',
  CoverImageSharpChildrenImageSharpId = 'coverImageSharp___childrenImageSharp___id',
  CoverImageSharpChildrenImageSharpParentId = 'coverImageSharp___childrenImageSharp___parent___id',
  CoverImageSharpChildrenImageSharpParentChildren = 'coverImageSharp___childrenImageSharp___parent___children',
  CoverImageSharpChildrenImageSharpChildren = 'coverImageSharp___childrenImageSharp___children',
  CoverImageSharpChildrenImageSharpChildrenId = 'coverImageSharp___childrenImageSharp___children___id',
  CoverImageSharpChildrenImageSharpChildrenChildren = 'coverImageSharp___childrenImageSharp___children___children',
  CoverImageSharpChildrenImageSharpInternalContent = 'coverImageSharp___childrenImageSharp___internal___content',
  CoverImageSharpChildrenImageSharpInternalContentDigest = 'coverImageSharp___childrenImageSharp___internal___contentDigest',
  CoverImageSharpChildrenImageSharpInternalDescription = 'coverImageSharp___childrenImageSharp___internal___description',
  CoverImageSharpChildrenImageSharpInternalFieldOwners = 'coverImageSharp___childrenImageSharp___internal___fieldOwners',
  CoverImageSharpChildrenImageSharpInternalIgnoreType = 'coverImageSharp___childrenImageSharp___internal___ignoreType',
  CoverImageSharpChildrenImageSharpInternalMediaType = 'coverImageSharp___childrenImageSharp___internal___mediaType',
  CoverImageSharpChildrenImageSharpInternalOwner = 'coverImageSharp___childrenImageSharp___internal___owner',
  CoverImageSharpChildrenImageSharpInternalType = 'coverImageSharp___childrenImageSharp___internal___type',
  CoverImageSharpChildImageSharpFixedBase64 = 'coverImageSharp___childImageSharp___fixed___base64',
  CoverImageSharpChildImageSharpFixedTracedSvg = 'coverImageSharp___childImageSharp___fixed___tracedSVG',
  CoverImageSharpChildImageSharpFixedAspectRatio = 'coverImageSharp___childImageSharp___fixed___aspectRatio',
  CoverImageSharpChildImageSharpFixedWidth = 'coverImageSharp___childImageSharp___fixed___width',
  CoverImageSharpChildImageSharpFixedHeight = 'coverImageSharp___childImageSharp___fixed___height',
  CoverImageSharpChildImageSharpFixedSrc = 'coverImageSharp___childImageSharp___fixed___src',
  CoverImageSharpChildImageSharpFixedSrcSet = 'coverImageSharp___childImageSharp___fixed___srcSet',
  CoverImageSharpChildImageSharpFixedSrcWebp = 'coverImageSharp___childImageSharp___fixed___srcWebp',
  CoverImageSharpChildImageSharpFixedSrcSetWebp = 'coverImageSharp___childImageSharp___fixed___srcSetWebp',
  CoverImageSharpChildImageSharpFixedOriginalName = 'coverImageSharp___childImageSharp___fixed___originalName',
  CoverImageSharpChildImageSharpFluidBase64 = 'coverImageSharp___childImageSharp___fluid___base64',
  CoverImageSharpChildImageSharpFluidTracedSvg = 'coverImageSharp___childImageSharp___fluid___tracedSVG',
  CoverImageSharpChildImageSharpFluidAspectRatio = 'coverImageSharp___childImageSharp___fluid___aspectRatio',
  CoverImageSharpChildImageSharpFluidSrc = 'coverImageSharp___childImageSharp___fluid___src',
  CoverImageSharpChildImageSharpFluidSrcSet = 'coverImageSharp___childImageSharp___fluid___srcSet',
  CoverImageSharpChildImageSharpFluidSrcWebp = 'coverImageSharp___childImageSharp___fluid___srcWebp',
  CoverImageSharpChildImageSharpFluidSrcSetWebp = 'coverImageSharp___childImageSharp___fluid___srcSetWebp',
  CoverImageSharpChildImageSharpFluidSizes = 'coverImageSharp___childImageSharp___fluid___sizes',
  CoverImageSharpChildImageSharpFluidOriginalImg = 'coverImageSharp___childImageSharp___fluid___originalImg',
  CoverImageSharpChildImageSharpFluidOriginalName = 'coverImageSharp___childImageSharp___fluid___originalName',
  CoverImageSharpChildImageSharpFluidPresentationWidth = 'coverImageSharp___childImageSharp___fluid___presentationWidth',
  CoverImageSharpChildImageSharpFluidPresentationHeight = 'coverImageSharp___childImageSharp___fluid___presentationHeight',
  CoverImageSharpChildImageSharpGatsbyImageData = 'coverImageSharp___childImageSharp___gatsbyImageData',
  CoverImageSharpChildImageSharpOriginalWidth = 'coverImageSharp___childImageSharp___original___width',
  CoverImageSharpChildImageSharpOriginalHeight = 'coverImageSharp___childImageSharp___original___height',
  CoverImageSharpChildImageSharpOriginalSrc = 'coverImageSharp___childImageSharp___original___src',
  CoverImageSharpChildImageSharpResizeSrc = 'coverImageSharp___childImageSharp___resize___src',
  CoverImageSharpChildImageSharpResizeTracedSvg = 'coverImageSharp___childImageSharp___resize___tracedSVG',
  CoverImageSharpChildImageSharpResizeWidth = 'coverImageSharp___childImageSharp___resize___width',
  CoverImageSharpChildImageSharpResizeHeight = 'coverImageSharp___childImageSharp___resize___height',
  CoverImageSharpChildImageSharpResizeAspectRatio = 'coverImageSharp___childImageSharp___resize___aspectRatio',
  CoverImageSharpChildImageSharpResizeOriginalName = 'coverImageSharp___childImageSharp___resize___originalName',
  CoverImageSharpChildImageSharpId = 'coverImageSharp___childImageSharp___id',
  CoverImageSharpChildImageSharpParentId = 'coverImageSharp___childImageSharp___parent___id',
  CoverImageSharpChildImageSharpParentChildren = 'coverImageSharp___childImageSharp___parent___children',
  CoverImageSharpChildImageSharpChildren = 'coverImageSharp___childImageSharp___children',
  CoverImageSharpChildImageSharpChildrenId = 'coverImageSharp___childImageSharp___children___id',
  CoverImageSharpChildImageSharpChildrenChildren = 'coverImageSharp___childImageSharp___children___children',
  CoverImageSharpChildImageSharpInternalContent = 'coverImageSharp___childImageSharp___internal___content',
  CoverImageSharpChildImageSharpInternalContentDigest = 'coverImageSharp___childImageSharp___internal___contentDigest',
  CoverImageSharpChildImageSharpInternalDescription = 'coverImageSharp___childImageSharp___internal___description',
  CoverImageSharpChildImageSharpInternalFieldOwners = 'coverImageSharp___childImageSharp___internal___fieldOwners',
  CoverImageSharpChildImageSharpInternalIgnoreType = 'coverImageSharp___childImageSharp___internal___ignoreType',
  CoverImageSharpChildImageSharpInternalMediaType = 'coverImageSharp___childImageSharp___internal___mediaType',
  CoverImageSharpChildImageSharpInternalOwner = 'coverImageSharp___childImageSharp___internal___owner',
  CoverImageSharpChildImageSharpInternalType = 'coverImageSharp___childImageSharp___internal___type',
  CoverImageSharpId = 'coverImageSharp___id',
  CoverImageSharpParentId = 'coverImageSharp___parent___id',
  CoverImageSharpParentParentId = 'coverImageSharp___parent___parent___id',
  CoverImageSharpParentParentChildren = 'coverImageSharp___parent___parent___children',
  CoverImageSharpParentChildren = 'coverImageSharp___parent___children',
  CoverImageSharpParentChildrenId = 'coverImageSharp___parent___children___id',
  CoverImageSharpParentChildrenChildren = 'coverImageSharp___parent___children___children',
  CoverImageSharpParentInternalContent = 'coverImageSharp___parent___internal___content',
  CoverImageSharpParentInternalContentDigest = 'coverImageSharp___parent___internal___contentDigest',
  CoverImageSharpParentInternalDescription = 'coverImageSharp___parent___internal___description',
  CoverImageSharpParentInternalFieldOwners = 'coverImageSharp___parent___internal___fieldOwners',
  CoverImageSharpParentInternalIgnoreType = 'coverImageSharp___parent___internal___ignoreType',
  CoverImageSharpParentInternalMediaType = 'coverImageSharp___parent___internal___mediaType',
  CoverImageSharpParentInternalOwner = 'coverImageSharp___parent___internal___owner',
  CoverImageSharpParentInternalType = 'coverImageSharp___parent___internal___type',
  CoverImageSharpChildren = 'coverImageSharp___children',
  CoverImageSharpChildrenId = 'coverImageSharp___children___id',
  CoverImageSharpChildrenParentId = 'coverImageSharp___children___parent___id',
  CoverImageSharpChildrenParentChildren = 'coverImageSharp___children___parent___children',
  CoverImageSharpChildrenChildren = 'coverImageSharp___children___children',
  CoverImageSharpChildrenChildrenId = 'coverImageSharp___children___children___id',
  CoverImageSharpChildrenChildrenChildren = 'coverImageSharp___children___children___children',
  CoverImageSharpChildrenInternalContent = 'coverImageSharp___children___internal___content',
  CoverImageSharpChildrenInternalContentDigest = 'coverImageSharp___children___internal___contentDigest',
  CoverImageSharpChildrenInternalDescription = 'coverImageSharp___children___internal___description',
  CoverImageSharpChildrenInternalFieldOwners = 'coverImageSharp___children___internal___fieldOwners',
  CoverImageSharpChildrenInternalIgnoreType = 'coverImageSharp___children___internal___ignoreType',
  CoverImageSharpChildrenInternalMediaType = 'coverImageSharp___children___internal___mediaType',
  CoverImageSharpChildrenInternalOwner = 'coverImageSharp___children___internal___owner',
  CoverImageSharpChildrenInternalType = 'coverImageSharp___children___internal___type',
  CoverImageSharpInternalContent = 'coverImageSharp___internal___content',
  CoverImageSharpInternalContentDigest = 'coverImageSharp___internal___contentDigest',
  CoverImageSharpInternalDescription = 'coverImageSharp___internal___description',
  CoverImageSharpInternalFieldOwners = 'coverImageSharp___internal___fieldOwners',
  CoverImageSharpInternalIgnoreType = 'coverImageSharp___internal___ignoreType',
  CoverImageSharpInternalMediaType = 'coverImageSharp___internal___mediaType',
  CoverImageSharpInternalOwner = 'coverImageSharp___internal___owner',
  CoverImageSharpInternalType = 'coverImageSharp___internal___type',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type GhostSettingsGroupConnection = {
  __typename?: 'GhostSettingsGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<GhostSettingsEdge>;
  nodes: Array<GhostSettings>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type GhostSettingsFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  logo?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  cover_image?: Maybe<StringQueryOperatorInput>;
  facebook?: Maybe<StringQueryOperatorInput>;
  twitter?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  timezone?: Maybe<StringQueryOperatorInput>;
  navigation?: Maybe<GhostNavigationFilterListInput>;
  secondary_navigation?: Maybe<GhostNavigationFilterListInput>;
  meta_title?: Maybe<StringQueryOperatorInput>;
  meta_description?: Maybe<StringQueryOperatorInput>;
  og_image?: Maybe<StringQueryOperatorInput>;
  og_title?: Maybe<StringQueryOperatorInput>;
  og_description?: Maybe<StringQueryOperatorInput>;
  twitter_image?: Maybe<StringQueryOperatorInput>;
  twitter_title?: Maybe<StringQueryOperatorInput>;
  twitter_description?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  codeinjection_head?: Maybe<StringQueryOperatorInput>;
  codeinjection_foot?: Maybe<StringQueryOperatorInput>;
  codeinjection_styles?: Maybe<StringQueryOperatorInput>;
  active_timezone?: Maybe<StringQueryOperatorInput>;
  default_locale?: Maybe<StringQueryOperatorInput>;
  members_support_address?: Maybe<StringQueryOperatorInput>;
  ghostId?: Maybe<IntQueryOperatorInput>;
  coverImageSharp?: Maybe<FileFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type GhostSettingsSortInput = {
  fields?: Maybe<Array<Maybe<GhostSettingsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type HtmlRehypeConnection = {
  __typename?: 'HtmlRehypeConnection';
  totalCount: Scalars['Int'];
  edges: Array<HtmlRehypeEdge>;
  nodes: Array<HtmlRehype>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<HtmlRehypeGroupConnection>;
};

export type HtmlRehypeConnectionDistinctArgs = {
  field: HtmlRehypeFieldsEnum;
};

export type HtmlRehypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: HtmlRehypeFieldsEnum;
};

export type HtmlRehypeEdge = {
  __typename?: 'HtmlRehypeEdge';
  next?: Maybe<HtmlRehype>;
  node: HtmlRehype;
  previous?: Maybe<HtmlRehype>;
};

export enum HtmlRehypeFieldsEnum {
  Html = 'html',
  HtmlAst = 'htmlAst',
  TableOfContents = 'tableOfContents',
  ContextUrl = 'context___url',
  ContextSlug = 'context___slug',
  ContextFeatureImage = 'context___feature_image',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type HtmlRehypeGroupConnection = {
  __typename?: 'HtmlRehypeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<HtmlRehypeEdge>;
  nodes: Array<HtmlRehype>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type HtmlRehypeSortInput = {
  fields?: Maybe<Array<Maybe<HtmlRehypeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicHomepageBodyFeaturedContentsPrimaryTypeFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  navigation_position?: Maybe<BooleanQueryOperatorInput>;
};

export type PrismicHomepageBodyFeaturedContentsItemTypeFilterListInput = {
  elemMatch?: Maybe<PrismicHomepageBodyFeaturedContentsItemTypeFilterInput>;
};

export type PrismicHomepageBodyFeaturedContentsItemTypeFilterInput = {
  image?: Maybe<PrismicImageTypeFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  information?: Maybe<PrismicStructuredTextTypeFilterInput>;
};

export type PrismicImageTypeFilterInput = {
  alt?: Maybe<StringQueryOperatorInput>;
  copyright?: Maybe<StringQueryOperatorInput>;
  dimensions?: Maybe<PrismicImageDimensionsTypeFilterInput>;
  url?: Maybe<StringQueryOperatorInput>;
  fixed?: Maybe<PrismicImageFixedTypeFilterInput>;
  fluid?: Maybe<PrismicImageFluidTypeFilterInput>;
  localFile?: Maybe<FileFilterInput>;
  thumbnails?: Maybe<PrismicImageThumbnailsTypeQueryOperatorInput>;
};

export type PrismicImageDimensionsTypeFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type PrismicImageFixedTypeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type PrismicImageFluidTypeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
};

export type PrismicImageThumbnailsTypeQueryOperatorInput = {
  eq?: Maybe<Scalars['PrismicImageThumbnailsType']>;
  ne?: Maybe<Scalars['PrismicImageThumbnailsType']>;
  in?: Maybe<Array<Maybe<Scalars['PrismicImageThumbnailsType']>>>;
  nin?: Maybe<Array<Maybe<Scalars['PrismicImageThumbnailsType']>>>;
};

export type PrismicStructuredTextTypeFilterInput = {
  html?: Maybe<StringQueryOperatorInput>;
  text?: Maybe<StringQueryOperatorInput>;
  raw?: Maybe<JsonQueryOperatorInput>;
};

export type PrismicHomepageBodyFeaturedContentsConnection = {
  __typename?: 'PrismicHomepageBodyFeaturedContentsConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicHomepageBodyFeaturedContentsEdge>;
  nodes: Array<PrismicHomepageBodyFeaturedContents>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicHomepageBodyFeaturedContentsGroupConnection>;
};

export type PrismicHomepageBodyFeaturedContentsConnectionDistinctArgs = {
  field: PrismicHomepageBodyFeaturedContentsFieldsEnum;
};

export type PrismicHomepageBodyFeaturedContentsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicHomepageBodyFeaturedContentsFieldsEnum;
};

export type PrismicHomepageBodyFeaturedContentsEdge = {
  __typename?: 'PrismicHomepageBodyFeaturedContentsEdge';
  next?: Maybe<PrismicHomepageBodyFeaturedContents>;
  node: PrismicHomepageBodyFeaturedContents;
  previous?: Maybe<PrismicHomepageBodyFeaturedContents>;
};

export enum PrismicHomepageBodyFeaturedContentsFieldsEnum {
  SliceType = 'slice_type',
  SliceLabel = 'slice_label',
  PrimaryTitle = 'primary___title',
  PrimaryNavigationPosition = 'primary___navigation_position',
  Items = 'items',
  ItemsImageAlt = 'items___image___alt',
  ItemsImageCopyright = 'items___image___copyright',
  ItemsImageDimensionsWidth = 'items___image___dimensions___width',
  ItemsImageDimensionsHeight = 'items___image___dimensions___height',
  ItemsImageUrl = 'items___image___url',
  ItemsImageFixedBase64 = 'items___image___fixed___base64',
  ItemsImageFixedSrc = 'items___image___fixed___src',
  ItemsImageFixedSrcSet = 'items___image___fixed___srcSet',
  ItemsImageFixedSrcWebp = 'items___image___fixed___srcWebp',
  ItemsImageFixedSrcSetWebp = 'items___image___fixed___srcSetWebp',
  ItemsImageFixedSizes = 'items___image___fixed___sizes',
  ItemsImageFixedWidth = 'items___image___fixed___width',
  ItemsImageFixedHeight = 'items___image___fixed___height',
  ItemsImageFluidBase64 = 'items___image___fluid___base64',
  ItemsImageFluidSrc = 'items___image___fluid___src',
  ItemsImageFluidSrcSet = 'items___image___fluid___srcSet',
  ItemsImageFluidSrcWebp = 'items___image___fluid___srcWebp',
  ItemsImageFluidSrcSetWebp = 'items___image___fluid___srcSetWebp',
  ItemsImageFluidSizes = 'items___image___fluid___sizes',
  ItemsImageFluidAspectRatio = 'items___image___fluid___aspectRatio',
  ItemsImageLocalFileSourceInstanceName = 'items___image___localFile___sourceInstanceName',
  ItemsImageLocalFileAbsolutePath = 'items___image___localFile___absolutePath',
  ItemsImageLocalFileRelativePath = 'items___image___localFile___relativePath',
  ItemsImageLocalFileExtension = 'items___image___localFile___extension',
  ItemsImageLocalFileSize = 'items___image___localFile___size',
  ItemsImageLocalFilePrettySize = 'items___image___localFile___prettySize',
  ItemsImageLocalFileModifiedTime = 'items___image___localFile___modifiedTime',
  ItemsImageLocalFileAccessTime = 'items___image___localFile___accessTime',
  ItemsImageLocalFileChangeTime = 'items___image___localFile___changeTime',
  ItemsImageLocalFileBirthTime = 'items___image___localFile___birthTime',
  ItemsImageLocalFileRoot = 'items___image___localFile___root',
  ItemsImageLocalFileDir = 'items___image___localFile___dir',
  ItemsImageLocalFileBase = 'items___image___localFile___base',
  ItemsImageLocalFileExt = 'items___image___localFile___ext',
  ItemsImageLocalFileName = 'items___image___localFile___name',
  ItemsImageLocalFileRelativeDirectory = 'items___image___localFile___relativeDirectory',
  ItemsImageLocalFileDev = 'items___image___localFile___dev',
  ItemsImageLocalFileMode = 'items___image___localFile___mode',
  ItemsImageLocalFileNlink = 'items___image___localFile___nlink',
  ItemsImageLocalFileUid = 'items___image___localFile___uid',
  ItemsImageLocalFileGid = 'items___image___localFile___gid',
  ItemsImageLocalFileRdev = 'items___image___localFile___rdev',
  ItemsImageLocalFileIno = 'items___image___localFile___ino',
  ItemsImageLocalFileAtimeMs = 'items___image___localFile___atimeMs',
  ItemsImageLocalFileMtimeMs = 'items___image___localFile___mtimeMs',
  ItemsImageLocalFileCtimeMs = 'items___image___localFile___ctimeMs',
  ItemsImageLocalFileAtime = 'items___image___localFile___atime',
  ItemsImageLocalFileMtime = 'items___image___localFile___mtime',
  ItemsImageLocalFileCtime = 'items___image___localFile___ctime',
  ItemsImageLocalFileBirthtime = 'items___image___localFile___birthtime',
  ItemsImageLocalFileBirthtimeMs = 'items___image___localFile___birthtimeMs',
  ItemsImageLocalFileBlksize = 'items___image___localFile___blksize',
  ItemsImageLocalFileBlocks = 'items___image___localFile___blocks',
  ItemsImageLocalFileUrl = 'items___image___localFile___url',
  ItemsImageLocalFilePublicUrl = 'items___image___localFile___publicURL',
  ItemsImageLocalFileChildrenImageSharp = 'items___image___localFile___childrenImageSharp',
  ItemsImageLocalFileId = 'items___image___localFile___id',
  ItemsImageLocalFileChildren = 'items___image___localFile___children',
  ItemsImageThumbnails = 'items___image___thumbnails',
  ItemsName = 'items___name',
  ItemsInformationHtml = 'items___information___html',
  ItemsInformationText = 'items___information___text',
  ItemsInformationRaw = 'items___information___raw',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type PrismicHomepageBodyFeaturedContentsGroupConnection = {
  __typename?: 'PrismicHomepageBodyFeaturedContentsGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicHomepageBodyFeaturedContentsEdge>;
  nodes: Array<PrismicHomepageBodyFeaturedContents>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicHomepageBodyFeaturedContentsFilterInput = {
  slice_type?: Maybe<StringQueryOperatorInput>;
  slice_label?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<PrismicHomepageBodyFeaturedContentsPrimaryTypeFilterInput>;
  items?: Maybe<PrismicHomepageBodyFeaturedContentsItemTypeFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicHomepageBodyFeaturedContentsSortInput = {
  fields?: Maybe<Array<Maybe<PrismicHomepageBodyFeaturedContentsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicHomepageDataTypeFilterInput = {
  jumbotron_slider?: Maybe<PrismicHomepageJumbotronSliderGroupTypeFilterListInput>;
};

export type PrismicHomepageJumbotronSliderGroupTypeFilterListInput = {
  elemMatch?: Maybe<PrismicHomepageJumbotronSliderGroupTypeFilterInput>;
};

export type PrismicHomepageJumbotronSliderGroupTypeFilterInput = {
  image?: Maybe<PrismicImageTypeFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<PrismicLinkTypeFilterInput>;
};

export type PrismicLinkTypeFilterInput = {
  link_type?: Maybe<PrismicLinkTypesQueryOperatorInput>;
  isBroken?: Maybe<BooleanQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  target?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<IdQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  raw?: Maybe<JsonQueryOperatorInput>;
};

export type PrismicLinkTypesQueryOperatorInput = {
  eq?: Maybe<PrismicLinkTypes>;
  ne?: Maybe<PrismicLinkTypes>;
  in?: Maybe<Array<Maybe<PrismicLinkTypes>>>;
  nin?: Maybe<Array<Maybe<PrismicLinkTypes>>>;
};

export type IdQueryOperatorInput = {
  eq?: Maybe<Scalars['ID']>;
  ne?: Maybe<Scalars['ID']>;
  in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type PrismicLinkTypeFilterListInput = {
  elemMatch?: Maybe<PrismicLinkTypeFilterInput>;
};

export type PrismicHomepageConnection = {
  __typename?: 'PrismicHomepageConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicHomepageEdge>;
  nodes: Array<PrismicHomepage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicHomepageGroupConnection>;
};

export type PrismicHomepageConnectionDistinctArgs = {
  field: PrismicHomepageFieldsEnum;
};

export type PrismicHomepageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicHomepageFieldsEnum;
};

export type PrismicHomepageEdge = {
  __typename?: 'PrismicHomepageEdge';
  next?: Maybe<PrismicHomepage>;
  node: PrismicHomepage;
  previous?: Maybe<PrismicHomepage>;
};

export enum PrismicHomepageFieldsEnum {
  DataJumbotronSlider = 'data___jumbotron_slider',
  DataJumbotronSliderImageAlt = 'data___jumbotron_slider___image___alt',
  DataJumbotronSliderImageCopyright = 'data___jumbotron_slider___image___copyright',
  DataJumbotronSliderImageUrl = 'data___jumbotron_slider___image___url',
  DataJumbotronSliderImageThumbnails = 'data___jumbotron_slider___image___thumbnails',
  DataJumbotronSliderTitle = 'data___jumbotron_slider___title',
  DataJumbotronSliderContent = 'data___jumbotron_slider___content',
  DataJumbotronSliderLinkLinkType = 'data___jumbotron_slider___link___link_type',
  DataJumbotronSliderLinkIsBroken = 'data___jumbotron_slider___link___isBroken',
  DataJumbotronSliderLinkUrl = 'data___jumbotron_slider___link___url',
  DataJumbotronSliderLinkTarget = 'data___jumbotron_slider___link___target',
  DataJumbotronSliderLinkSize = 'data___jumbotron_slider___link___size',
  DataJumbotronSliderLinkId = 'data___jumbotron_slider___link___id',
  DataJumbotronSliderLinkType = 'data___jumbotron_slider___link___type',
  DataJumbotronSliderLinkTags = 'data___jumbotron_slider___link___tags',
  DataJumbotronSliderLinkLang = 'data___jumbotron_slider___link___lang',
  DataJumbotronSliderLinkSlug = 'data___jumbotron_slider___link___slug',
  DataJumbotronSliderLinkUid = 'data___jumbotron_slider___link___uid',
  DataJumbotronSliderLinkRaw = 'data___jumbotron_slider___link___raw',
  DataRaw = 'dataRaw',
  DataString = 'dataString',
  FirstPublicationDate = 'first_publication_date',
  Href = 'href',
  Url = 'url',
  Lang = 'lang',
  LastPublicationDate = 'last_publication_date',
  Tags = 'tags',
  AlternateLanguages = 'alternate_languages',
  AlternateLanguagesLinkType = 'alternate_languages___link_type',
  AlternateLanguagesIsBroken = 'alternate_languages___isBroken',
  AlternateLanguagesUrl = 'alternate_languages___url',
  AlternateLanguagesTarget = 'alternate_languages___target',
  AlternateLanguagesSize = 'alternate_languages___size',
  AlternateLanguagesId = 'alternate_languages___id',
  AlternateLanguagesType = 'alternate_languages___type',
  AlternateLanguagesTags = 'alternate_languages___tags',
  AlternateLanguagesLang = 'alternate_languages___lang',
  AlternateLanguagesSlug = 'alternate_languages___slug',
  AlternateLanguagesUid = 'alternate_languages___uid',
  AlternateLanguagesRaw = 'alternate_languages___raw',
  Type = 'type',
  PrismicId = 'prismicId',
  Previewable = '_previewable',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type PrismicHomepageGroupConnection = {
  __typename?: 'PrismicHomepageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicHomepageEdge>;
  nodes: Array<PrismicHomepage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicHomepageFilterInput = {
  data?: Maybe<PrismicHomepageDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicHomepageSortInput = {
  fields?: Maybe<Array<Maybe<PrismicHomepageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicContactDataTypeFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  phone_number?: Maybe<StringQueryOperatorInput>;
  contact_email?: Maybe<StringQueryOperatorInput>;
  address?: Maybe<PrismicStructuredTextTypeFilterInput>;
  address_geolocation?: Maybe<PrismicGeoPointTypeFilterInput>;
};

export type PrismicGeoPointTypeFilterInput = {
  latitude?: Maybe<FloatQueryOperatorInput>;
  longitude?: Maybe<FloatQueryOperatorInput>;
};

export type PrismicContactConnection = {
  __typename?: 'PrismicContactConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicContactEdge>;
  nodes: Array<PrismicContact>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicContactGroupConnection>;
};

export type PrismicContactConnectionDistinctArgs = {
  field: PrismicContactFieldsEnum;
};

export type PrismicContactConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicContactFieldsEnum;
};

export type PrismicContactEdge = {
  __typename?: 'PrismicContactEdge';
  next?: Maybe<PrismicContact>;
  node: PrismicContact;
  previous?: Maybe<PrismicContact>;
};

export enum PrismicContactFieldsEnum {
  DataTitle = 'data___title',
  DataPhoneNumber = 'data___phone_number',
  DataContactEmail = 'data___contact_email',
  DataAddressHtml = 'data___address___html',
  DataAddressText = 'data___address___text',
  DataAddressRaw = 'data___address___raw',
  DataAddressGeolocationLatitude = 'data___address_geolocation___latitude',
  DataAddressGeolocationLongitude = 'data___address_geolocation___longitude',
  DataRaw = 'dataRaw',
  DataString = 'dataString',
  FirstPublicationDate = 'first_publication_date',
  Href = 'href',
  Url = 'url',
  Lang = 'lang',
  LastPublicationDate = 'last_publication_date',
  Tags = 'tags',
  AlternateLanguages = 'alternate_languages',
  AlternateLanguagesLinkType = 'alternate_languages___link_type',
  AlternateLanguagesIsBroken = 'alternate_languages___isBroken',
  AlternateLanguagesUrl = 'alternate_languages___url',
  AlternateLanguagesTarget = 'alternate_languages___target',
  AlternateLanguagesSize = 'alternate_languages___size',
  AlternateLanguagesId = 'alternate_languages___id',
  AlternateLanguagesType = 'alternate_languages___type',
  AlternateLanguagesTags = 'alternate_languages___tags',
  AlternateLanguagesLang = 'alternate_languages___lang',
  AlternateLanguagesSlug = 'alternate_languages___slug',
  AlternateLanguagesUid = 'alternate_languages___uid',
  AlternateLanguagesRaw = 'alternate_languages___raw',
  Type = 'type',
  PrismicId = 'prismicId',
  Previewable = '_previewable',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type PrismicContactGroupConnection = {
  __typename?: 'PrismicContactGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicContactEdge>;
  nodes: Array<PrismicContact>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicContactFilterInput = {
  data?: Maybe<PrismicContactDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicContactSortInput = {
  fields?: Maybe<Array<Maybe<PrismicContactFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicPageDataTypeFilterInput = {
  title?: Maybe<PrismicStructuredTextTypeFilterInput>;
  subtitle?: Maybe<PrismicStructuredTextTypeFilterInput>;
  banner?: Maybe<PrismicImageTypeFilterInput>;
  content?: Maybe<PrismicStructuredTextTypeFilterInput>;
};

export type PrismicPageConnection = {
  __typename?: 'PrismicPageConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicPageEdge>;
  nodes: Array<PrismicPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicPageGroupConnection>;
};

export type PrismicPageConnectionDistinctArgs = {
  field: PrismicPageFieldsEnum;
};

export type PrismicPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicPageFieldsEnum;
};

export type PrismicPageEdge = {
  __typename?: 'PrismicPageEdge';
  next?: Maybe<PrismicPage>;
  node: PrismicPage;
  previous?: Maybe<PrismicPage>;
};

export enum PrismicPageFieldsEnum {
  DataTitleHtml = 'data___title___html',
  DataTitleText = 'data___title___text',
  DataTitleRaw = 'data___title___raw',
  DataSubtitleHtml = 'data___subtitle___html',
  DataSubtitleText = 'data___subtitle___text',
  DataSubtitleRaw = 'data___subtitle___raw',
  DataBannerAlt = 'data___banner___alt',
  DataBannerCopyright = 'data___banner___copyright',
  DataBannerDimensionsWidth = 'data___banner___dimensions___width',
  DataBannerDimensionsHeight = 'data___banner___dimensions___height',
  DataBannerUrl = 'data___banner___url',
  DataBannerFixedBase64 = 'data___banner___fixed___base64',
  DataBannerFixedSrc = 'data___banner___fixed___src',
  DataBannerFixedSrcSet = 'data___banner___fixed___srcSet',
  DataBannerFixedSrcWebp = 'data___banner___fixed___srcWebp',
  DataBannerFixedSrcSetWebp = 'data___banner___fixed___srcSetWebp',
  DataBannerFixedSizes = 'data___banner___fixed___sizes',
  DataBannerFixedWidth = 'data___banner___fixed___width',
  DataBannerFixedHeight = 'data___banner___fixed___height',
  DataBannerFluidBase64 = 'data___banner___fluid___base64',
  DataBannerFluidSrc = 'data___banner___fluid___src',
  DataBannerFluidSrcSet = 'data___banner___fluid___srcSet',
  DataBannerFluidSrcWebp = 'data___banner___fluid___srcWebp',
  DataBannerFluidSrcSetWebp = 'data___banner___fluid___srcSetWebp',
  DataBannerFluidSizes = 'data___banner___fluid___sizes',
  DataBannerFluidAspectRatio = 'data___banner___fluid___aspectRatio',
  DataBannerLocalFileSourceInstanceName = 'data___banner___localFile___sourceInstanceName',
  DataBannerLocalFileAbsolutePath = 'data___banner___localFile___absolutePath',
  DataBannerLocalFileRelativePath = 'data___banner___localFile___relativePath',
  DataBannerLocalFileExtension = 'data___banner___localFile___extension',
  DataBannerLocalFileSize = 'data___banner___localFile___size',
  DataBannerLocalFilePrettySize = 'data___banner___localFile___prettySize',
  DataBannerLocalFileModifiedTime = 'data___banner___localFile___modifiedTime',
  DataBannerLocalFileAccessTime = 'data___banner___localFile___accessTime',
  DataBannerLocalFileChangeTime = 'data___banner___localFile___changeTime',
  DataBannerLocalFileBirthTime = 'data___banner___localFile___birthTime',
  DataBannerLocalFileRoot = 'data___banner___localFile___root',
  DataBannerLocalFileDir = 'data___banner___localFile___dir',
  DataBannerLocalFileBase = 'data___banner___localFile___base',
  DataBannerLocalFileExt = 'data___banner___localFile___ext',
  DataBannerLocalFileName = 'data___banner___localFile___name',
  DataBannerLocalFileRelativeDirectory = 'data___banner___localFile___relativeDirectory',
  DataBannerLocalFileDev = 'data___banner___localFile___dev',
  DataBannerLocalFileMode = 'data___banner___localFile___mode',
  DataBannerLocalFileNlink = 'data___banner___localFile___nlink',
  DataBannerLocalFileUid = 'data___banner___localFile___uid',
  DataBannerLocalFileGid = 'data___banner___localFile___gid',
  DataBannerLocalFileRdev = 'data___banner___localFile___rdev',
  DataBannerLocalFileIno = 'data___banner___localFile___ino',
  DataBannerLocalFileAtimeMs = 'data___banner___localFile___atimeMs',
  DataBannerLocalFileMtimeMs = 'data___banner___localFile___mtimeMs',
  DataBannerLocalFileCtimeMs = 'data___banner___localFile___ctimeMs',
  DataBannerLocalFileAtime = 'data___banner___localFile___atime',
  DataBannerLocalFileMtime = 'data___banner___localFile___mtime',
  DataBannerLocalFileCtime = 'data___banner___localFile___ctime',
  DataBannerLocalFileBirthtime = 'data___banner___localFile___birthtime',
  DataBannerLocalFileBirthtimeMs = 'data___banner___localFile___birthtimeMs',
  DataBannerLocalFileBlksize = 'data___banner___localFile___blksize',
  DataBannerLocalFileBlocks = 'data___banner___localFile___blocks',
  DataBannerLocalFileUrl = 'data___banner___localFile___url',
  DataBannerLocalFilePublicUrl = 'data___banner___localFile___publicURL',
  DataBannerLocalFileChildrenImageSharp = 'data___banner___localFile___childrenImageSharp',
  DataBannerLocalFileId = 'data___banner___localFile___id',
  DataBannerLocalFileChildren = 'data___banner___localFile___children',
  DataBannerThumbnails = 'data___banner___thumbnails',
  DataContentHtml = 'data___content___html',
  DataContentText = 'data___content___text',
  DataContentRaw = 'data___content___raw',
  DataRaw = 'dataRaw',
  DataString = 'dataString',
  FirstPublicationDate = 'first_publication_date',
  Href = 'href',
  Url = 'url',
  Lang = 'lang',
  LastPublicationDate = 'last_publication_date',
  Tags = 'tags',
  AlternateLanguages = 'alternate_languages',
  AlternateLanguagesLinkType = 'alternate_languages___link_type',
  AlternateLanguagesIsBroken = 'alternate_languages___isBroken',
  AlternateLanguagesUrl = 'alternate_languages___url',
  AlternateLanguagesTarget = 'alternate_languages___target',
  AlternateLanguagesSize = 'alternate_languages___size',
  AlternateLanguagesId = 'alternate_languages___id',
  AlternateLanguagesType = 'alternate_languages___type',
  AlternateLanguagesTags = 'alternate_languages___tags',
  AlternateLanguagesLang = 'alternate_languages___lang',
  AlternateLanguagesSlug = 'alternate_languages___slug',
  AlternateLanguagesUid = 'alternate_languages___uid',
  AlternateLanguagesRaw = 'alternate_languages___raw',
  Type = 'type',
  PrismicId = 'prismicId',
  Previewable = '_previewable',
  Uid = 'uid',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type PrismicPageGroupConnection = {
  __typename?: 'PrismicPageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicPageEdge>;
  nodes: Array<PrismicPage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicPageFilterInput = {
  data?: Maybe<PrismicPageDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicPageSortInput = {
  fields?: Maybe<Array<Maybe<PrismicPageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicProductDataTypeFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<PrismicStructuredTextTypeFilterInput>;
  features?: Maybe<PrismicProductFeaturesGroupTypeFilterListInput>;
};

export type PrismicProductFeaturesGroupTypeFilterListInput = {
  elemMatch?: Maybe<PrismicProductFeaturesGroupTypeFilterInput>;
};

export type PrismicProductFeaturesGroupTypeFilterInput = {
  image?: Maybe<PrismicImageTypeFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
  information?: Maybe<PrismicStructuredTextTypeFilterInput>;
  link?: Maybe<PrismicLinkTypeFilterInput>;
};

export type PrismicProductConnection = {
  __typename?: 'PrismicProductConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicProductEdge>;
  nodes: Array<PrismicProduct>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicProductGroupConnection>;
};

export type PrismicProductConnectionDistinctArgs = {
  field: PrismicProductFieldsEnum;
};

export type PrismicProductConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicProductFieldsEnum;
};

export type PrismicProductEdge = {
  __typename?: 'PrismicProductEdge';
  next?: Maybe<PrismicProduct>;
  node: PrismicProduct;
  previous?: Maybe<PrismicProduct>;
};

export enum PrismicProductFieldsEnum {
  DataTitle = 'data___title',
  DataDescriptionHtml = 'data___description___html',
  DataDescriptionText = 'data___description___text',
  DataDescriptionRaw = 'data___description___raw',
  DataFeatures = 'data___features',
  DataFeaturesImageAlt = 'data___features___image___alt',
  DataFeaturesImageCopyright = 'data___features___image___copyright',
  DataFeaturesImageUrl = 'data___features___image___url',
  DataFeaturesImageThumbnails = 'data___features___image___thumbnails',
  DataFeaturesName = 'data___features___name',
  DataFeaturesType = 'data___features___type',
  DataFeaturesInformationHtml = 'data___features___information___html',
  DataFeaturesInformationText = 'data___features___information___text',
  DataFeaturesInformationRaw = 'data___features___information___raw',
  DataFeaturesLinkLinkType = 'data___features___link___link_type',
  DataFeaturesLinkIsBroken = 'data___features___link___isBroken',
  DataFeaturesLinkUrl = 'data___features___link___url',
  DataFeaturesLinkTarget = 'data___features___link___target',
  DataFeaturesLinkSize = 'data___features___link___size',
  DataFeaturesLinkId = 'data___features___link___id',
  DataFeaturesLinkType = 'data___features___link___type',
  DataFeaturesLinkTags = 'data___features___link___tags',
  DataFeaturesLinkLang = 'data___features___link___lang',
  DataFeaturesLinkSlug = 'data___features___link___slug',
  DataFeaturesLinkUid = 'data___features___link___uid',
  DataFeaturesLinkRaw = 'data___features___link___raw',
  DataRaw = 'dataRaw',
  DataString = 'dataString',
  FirstPublicationDate = 'first_publication_date',
  Href = 'href',
  Url = 'url',
  Lang = 'lang',
  LastPublicationDate = 'last_publication_date',
  Tags = 'tags',
  AlternateLanguages = 'alternate_languages',
  AlternateLanguagesLinkType = 'alternate_languages___link_type',
  AlternateLanguagesIsBroken = 'alternate_languages___isBroken',
  AlternateLanguagesUrl = 'alternate_languages___url',
  AlternateLanguagesTarget = 'alternate_languages___target',
  AlternateLanguagesSize = 'alternate_languages___size',
  AlternateLanguagesId = 'alternate_languages___id',
  AlternateLanguagesType = 'alternate_languages___type',
  AlternateLanguagesTags = 'alternate_languages___tags',
  AlternateLanguagesLang = 'alternate_languages___lang',
  AlternateLanguagesSlug = 'alternate_languages___slug',
  AlternateLanguagesUid = 'alternate_languages___uid',
  AlternateLanguagesRaw = 'alternate_languages___raw',
  Type = 'type',
  PrismicId = 'prismicId',
  Previewable = '_previewable',
  Uid = 'uid',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type PrismicProductGroupConnection = {
  __typename?: 'PrismicProductGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicProductEdge>;
  nodes: Array<PrismicProduct>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicProductFilterInput = {
  data?: Maybe<PrismicProductDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicProductSortInput = {
  fields?: Maybe<Array<Maybe<PrismicProductFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type PrismicMenuDataTypeFilterInput = {
  menus?: Maybe<PrismicMenuMenusGroupTypeFilterListInput>;
};

export type PrismicMenuMenusGroupTypeFilterListInput = {
  elemMatch?: Maybe<PrismicMenuMenusGroupTypeFilterInput>;
};

export type PrismicMenuMenusGroupTypeFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<PrismicLinkTypeFilterInput>;
};

export type PrismicMenuConnection = {
  __typename?: 'PrismicMenuConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicMenuEdge>;
  nodes: Array<PrismicMenu>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<PrismicMenuGroupConnection>;
};

export type PrismicMenuConnectionDistinctArgs = {
  field: PrismicMenuFieldsEnum;
};

export type PrismicMenuConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: PrismicMenuFieldsEnum;
};

export type PrismicMenuEdge = {
  __typename?: 'PrismicMenuEdge';
  next?: Maybe<PrismicMenu>;
  node: PrismicMenu;
  previous?: Maybe<PrismicMenu>;
};

export enum PrismicMenuFieldsEnum {
  DataMenus = 'data___menus',
  DataMenusLabel = 'data___menus___label',
  DataMenusLinkLinkType = 'data___menus___link___link_type',
  DataMenusLinkIsBroken = 'data___menus___link___isBroken',
  DataMenusLinkUrl = 'data___menus___link___url',
  DataMenusLinkTarget = 'data___menus___link___target',
  DataMenusLinkSize = 'data___menus___link___size',
  DataMenusLinkId = 'data___menus___link___id',
  DataMenusLinkType = 'data___menus___link___type',
  DataMenusLinkTags = 'data___menus___link___tags',
  DataMenusLinkLang = 'data___menus___link___lang',
  DataMenusLinkSlug = 'data___menus___link___slug',
  DataMenusLinkUid = 'data___menus___link___uid',
  DataMenusLinkRaw = 'data___menus___link___raw',
  DataRaw = 'dataRaw',
  DataString = 'dataString',
  FirstPublicationDate = 'first_publication_date',
  Href = 'href',
  Url = 'url',
  Lang = 'lang',
  LastPublicationDate = 'last_publication_date',
  Tags = 'tags',
  AlternateLanguages = 'alternate_languages',
  AlternateLanguagesLinkType = 'alternate_languages___link_type',
  AlternateLanguagesIsBroken = 'alternate_languages___isBroken',
  AlternateLanguagesUrl = 'alternate_languages___url',
  AlternateLanguagesTarget = 'alternate_languages___target',
  AlternateLanguagesSize = 'alternate_languages___size',
  AlternateLanguagesId = 'alternate_languages___id',
  AlternateLanguagesType = 'alternate_languages___type',
  AlternateLanguagesTags = 'alternate_languages___tags',
  AlternateLanguagesLang = 'alternate_languages___lang',
  AlternateLanguagesSlug = 'alternate_languages___slug',
  AlternateLanguagesUid = 'alternate_languages___uid',
  AlternateLanguagesRaw = 'alternate_languages___raw',
  Type = 'type',
  PrismicId = 'prismicId',
  Previewable = '_previewable',
  Uid = 'uid',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
}

export type PrismicMenuGroupConnection = {
  __typename?: 'PrismicMenuGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<PrismicMenuEdge>;
  nodes: Array<PrismicMenu>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicMenuFilterInput = {
  data?: Maybe<PrismicMenuDataTypeFilterInput>;
  dataRaw?: Maybe<JsonQueryOperatorInput>;
  dataString?: Maybe<StringQueryOperatorInput>;
  first_publication_date?: Maybe<DateQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
  last_publication_date?: Maybe<DateQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  alternate_languages?: Maybe<PrismicLinkTypeFilterListInput>;
  type?: Maybe<StringQueryOperatorInput>;
  prismicId?: Maybe<IdQueryOperatorInput>;
  _previewable?: Maybe<IdQueryOperatorInput>;
  uid?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type PrismicMenuSortInput = {
  fields?: Maybe<Array<Maybe<PrismicMenuFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge';
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  BuildTime = 'buildTime',
}

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePluginPluginOptionsFilterInput = {
  plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  pathToConfigModule?: Maybe<StringQueryOperatorInput>;
  sourceMap?: Maybe<BooleanQueryOperatorInput>;
  autoLabel?: Maybe<StringQueryOperatorInput>;
  labelFormat?: Maybe<StringQueryOperatorInput>;
  cssPropOptimization?: Maybe<BooleanQueryOperatorInput>;
  base64Width?: Maybe<IntQueryOperatorInput>;
  stripMetadata?: Maybe<BooleanQueryOperatorInput>;
  defaultQuality?: Maybe<IntQueryOperatorInput>;
  failOnError?: Maybe<BooleanQueryOperatorInput>;
  color?: Maybe<StringQueryOperatorInput>;
  showSpinner?: Maybe<BooleanQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  apiUrl?: Maybe<StringQueryOperatorInput>;
  contentApiKey?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  lookup?: Maybe<SitePluginPluginOptionsLookupFilterListInput>;
  verbose?: Maybe<BooleanQueryOperatorInput>;
  repositoryName?: Maybe<StringQueryOperatorInput>;
  accessToken?: Maybe<StringQueryOperatorInput>;
  schemas?: Maybe<SitePluginPluginOptionsSchemasFilterInput>;
  output?: Maybe<StringQueryOperatorInput>;
  createLinkInHead?: Maybe<BooleanQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  includeInDevelopment?: Maybe<BooleanQueryOperatorInput>;
  routeChangeEventName?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>;
};

export type SitePluginPluginOptionsPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsLookupFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsLookupFilterInput>;
};

export type SitePluginPluginOptionsLookupFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  imgTags?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasFilterInput = {
  homepage?: Maybe<SitePluginPluginOptionsSchemasHomepageFilterInput>;
  contact?: Maybe<SitePluginPluginOptionsSchemasContactFilterInput>;
  page?: Maybe<SitePluginPluginOptionsSchemasPageFilterInput>;
  product?: Maybe<SitePluginPluginOptionsSchemasProductFilterInput>;
  menu?: Maybe<SitePluginPluginOptionsSchemasMenuFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomepageFilterInput = {
  Main?: Maybe<SitePluginPluginOptionsSchemasHomepageMainFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomepageMainFilterInput = {
  jumbotron_slider?: Maybe<SitePluginPluginOptionsSchemasHomepageMainJumbotron_SliderFilterInput>;
  body?: Maybe<SitePluginPluginOptionsSchemasHomepageMainBodyFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomepageMainJumbotron_SliderFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomepageMainJumbotron_SliderConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomepageMainJumbotron_SliderConfigFilterInput = {
  fields?: Maybe<SitePluginPluginOptionsSchemasHomepageMainJumbotron_SliderConfigFieldsFilterInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomepageMainJumbotron_SliderConfigFieldsFilterInput = {
  image?: Maybe<SitePluginPluginOptionsSchemasHomepageMainJumbotron_SliderConfigFieldsImageFilterInput>;
  title?: Maybe<SitePluginPluginOptionsSchemasHomepageMainJumbotron_SliderConfigFieldsTitleFilterInput>;
  content?: Maybe<SitePluginPluginOptionsSchemasHomepageMainJumbotron_SliderConfigFieldsContentFilterInput>;
  link?: Maybe<SitePluginPluginOptionsSchemasHomepageMainJumbotron_SliderConfigFieldsLinkFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomepageMainJumbotron_SliderConfigFieldsImageFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomepageMainJumbotron_SliderConfigFieldsImageConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomepageMainJumbotron_SliderConfigFieldsImageConfigFilterInput = {
  constraint?: Maybe<SitePluginPluginOptionsSchemasHomepageMainJumbotron_SliderConfigFieldsImageConfigConstraintFilterInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomepageMainJumbotron_SliderConfigFieldsImageConfigConstraintFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomepageMainJumbotron_SliderConfigFieldsTitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomepageMainJumbotron_SliderConfigFieldsTitleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomepageMainJumbotron_SliderConfigFieldsTitleConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomepageMainJumbotron_SliderConfigFieldsContentFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomepageMainJumbotron_SliderConfigFieldsContentConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomepageMainJumbotron_SliderConfigFieldsContentConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomepageMainJumbotron_SliderConfigFieldsLinkFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomepageMainJumbotron_SliderConfigFieldsLinkConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomepageMainJumbotron_SliderConfigFieldsLinkConfigFilterInput = {
  allowTargetBlank?: Maybe<BooleanQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomepageMainBodyFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomepageMainBodyConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomepageMainBodyConfigFilterInput = {
  choices?: Maybe<SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFilterInput = {
  featured_contents?: Maybe<SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  fieldset?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  non_repeat?: Maybe<SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsNon_RepeatFilterInput>;
  repeat?: Maybe<SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsRepeatFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsNon_RepeatFilterInput = {
  title?: Maybe<SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsNon_RepeatTitleFilterInput>;
  navigation_position?: Maybe<SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsNon_RepeatNavigation_PositionFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsNon_RepeatTitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsNon_RepeatTitleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsNon_RepeatTitleConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsNon_RepeatNavigation_PositionFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsNon_RepeatNavigation_PositionConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsNon_RepeatNavigation_PositionConfigFilterInput = {
  placeholder_false?: Maybe<StringQueryOperatorInput>;
  placeholder_true?: Maybe<StringQueryOperatorInput>;
  default_value?: Maybe<BooleanQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsRepeatFilterInput = {
  image?: Maybe<SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsRepeatImageFilterInput>;
  name?: Maybe<SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsRepeatNameFilterInput>;
  information?: Maybe<SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsRepeatInformationFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsRepeatImageFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsRepeatImageConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsRepeatImageConfigFilterInput = {
  constraint?: Maybe<SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsRepeatImageConfigConstraintFilterInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsRepeatImageConfigConstraintFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsRepeatNameFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsRepeatNameConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsRepeatNameConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsRepeatInformationFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsRepeatInformationConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasHomepageMainBodyConfigChoicesFeatured_ContentsRepeatInformationConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  allowTargetBlank?: Maybe<BooleanQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasContactFilterInput = {
  Main?: Maybe<SitePluginPluginOptionsSchemasContactMainFilterInput>;
};

export type SitePluginPluginOptionsSchemasContactMainFilterInput = {
  title?: Maybe<SitePluginPluginOptionsSchemasContactMainTitleFilterInput>;
  phone_number?: Maybe<SitePluginPluginOptionsSchemasContactMainPhone_NumberFilterInput>;
  contact_email?: Maybe<SitePluginPluginOptionsSchemasContactMainContact_EmailFilterInput>;
  address?: Maybe<SitePluginPluginOptionsSchemasContactMainAddressFilterInput>;
  address_geolocation?: Maybe<SitePluginPluginOptionsSchemasContactMainAddress_GeolocationFilterInput>;
};

export type SitePluginPluginOptionsSchemasContactMainTitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasContactMainTitleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasContactMainTitleConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasContactMainPhone_NumberFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasContactMainPhone_NumberConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasContactMainPhone_NumberConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasContactMainContact_EmailFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasContactMainContact_EmailConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasContactMainContact_EmailConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasContactMainAddressFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasContactMainAddressConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasContactMainAddressConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  allowTargetBlank?: Maybe<BooleanQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasContactMainAddress_GeolocationFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasContactMainAddress_GeolocationConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasContactMainAddress_GeolocationConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageFilterInput = {
  Main?: Maybe<SitePluginPluginOptionsSchemasPageMainFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageMainFilterInput = {
  uid?: Maybe<SitePluginPluginOptionsSchemasPageMainUidFilterInput>;
  title?: Maybe<SitePluginPluginOptionsSchemasPageMainTitleFilterInput>;
  subtitle?: Maybe<SitePluginPluginOptionsSchemasPageMainSubtitleFilterInput>;
  banner?: Maybe<SitePluginPluginOptionsSchemasPageMainBannerFilterInput>;
  content?: Maybe<SitePluginPluginOptionsSchemasPageMainContentFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageMainUidFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainUidConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageMainUidConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageMainTitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainTitleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageMainTitleConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageMainSubtitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainSubtitleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageMainSubtitleConfigFilterInput = {
  single?: Maybe<StringQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageMainBannerFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainBannerConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageMainBannerConfigFilterInput = {
  constraint?: Maybe<SitePluginPluginOptionsSchemasPageMainBannerConfigConstraintFilterInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageMainBannerConfigConstraintFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasPageMainContentFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasPageMainContentConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasPageMainContentConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  allowTargetBlank?: Maybe<BooleanQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasProductFilterInput = {
  Main?: Maybe<SitePluginPluginOptionsSchemasProductMainFilterInput>;
};

export type SitePluginPluginOptionsSchemasProductMainFilterInput = {
  uid?: Maybe<SitePluginPluginOptionsSchemasProductMainUidFilterInput>;
  title?: Maybe<SitePluginPluginOptionsSchemasProductMainTitleFilterInput>;
  description?: Maybe<SitePluginPluginOptionsSchemasProductMainDescriptionFilterInput>;
  features?: Maybe<SitePluginPluginOptionsSchemasProductMainFeaturesFilterInput>;
};

export type SitePluginPluginOptionsSchemasProductMainUidFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasProductMainUidConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasProductMainUidConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasProductMainTitleFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasProductMainTitleConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasProductMainTitleConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasProductMainDescriptionFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasProductMainDescriptionConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasProductMainDescriptionConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  allowTargetBlank?: Maybe<BooleanQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasProductMainFeaturesFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasProductMainFeaturesConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasProductMainFeaturesConfigFilterInput = {
  fields?: Maybe<SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsFilterInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsFilterInput = {
  image?: Maybe<SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsImageFilterInput>;
  name?: Maybe<SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsNameFilterInput>;
  type?: Maybe<SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsTypeFilterInput>;
  information?: Maybe<SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsInformationFilterInput>;
  link?: Maybe<SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsLinkFilterInput>;
};

export type SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsImageFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsImageConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsImageConfigFilterInput = {
  constraint?: Maybe<SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsImageConfigConstraintFilterInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsImageConfigConstraintFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsNameFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsNameConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsNameConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsTypeFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsTypeConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsTypeConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsInformationFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsInformationConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsInformationConfigFilterInput = {
  multi?: Maybe<StringQueryOperatorInput>;
  allowTargetBlank?: Maybe<BooleanQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsLinkFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsLinkConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasProductMainFeaturesConfigFieldsLinkConfigFilterInput = {
  allowTargetBlank?: Maybe<BooleanQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasMenuFilterInput = {
  Main?: Maybe<SitePluginPluginOptionsSchemasMenuMainFilterInput>;
};

export type SitePluginPluginOptionsSchemasMenuMainFilterInput = {
  uid?: Maybe<SitePluginPluginOptionsSchemasMenuMainUidFilterInput>;
  menus?: Maybe<SitePluginPluginOptionsSchemasMenuMainMenusFilterInput>;
};

export type SitePluginPluginOptionsSchemasMenuMainUidFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasMenuMainUidConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasMenuMainUidConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasMenuMainMenusFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasMenuMainMenusConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasMenuMainMenusConfigFilterInput = {
  fields?: Maybe<SitePluginPluginOptionsSchemasMenuMainMenusConfigFieldsFilterInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasMenuMainMenusConfigFieldsFilterInput = {
  label?: Maybe<SitePluginPluginOptionsSchemasMenuMainMenusConfigFieldsLabelFilterInput>;
  link?: Maybe<SitePluginPluginOptionsSchemasMenuMainMenusConfigFieldsLinkFilterInput>;
};

export type SitePluginPluginOptionsSchemasMenuMainMenusConfigFieldsLabelFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasMenuMainMenusConfigFieldsLabelConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasMenuMainMenusConfigFieldsLabelConfigFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsSchemasMenuMainMenusConfigFieldsLinkFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  config?: Maybe<SitePluginPluginOptionsSchemasMenuMainMenusConfigFieldsLinkConfigFilterInput>;
};

export type SitePluginPluginOptionsSchemasMenuMainMenusConfigFieldsLinkConfigFilterInput = {
  allowTargetBlank?: Maybe<BooleanQueryOperatorInput>;
  label?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsPlugins = 'pluginOptions___plugins',
  PluginOptionsPluginsResolve = 'pluginOptions___plugins___resolve',
  PluginOptionsPluginsId = 'pluginOptions___plugins___id',
  PluginOptionsPluginsName = 'pluginOptions___plugins___name',
  PluginOptionsPluginsVersion = 'pluginOptions___plugins___version',
  PluginOptionsPluginsPluginFilepath = 'pluginOptions___plugins___pluginFilepath',
  PluginOptionsIsTsx = 'pluginOptions___isTSX',
  PluginOptionsJsxPragma = 'pluginOptions___jsxPragma',
  PluginOptionsAllExtensions = 'pluginOptions___allExtensions',
  PluginOptionsPathToConfigModule = 'pluginOptions___pathToConfigModule',
  PluginOptionsSourceMap = 'pluginOptions___sourceMap',
  PluginOptionsAutoLabel = 'pluginOptions___autoLabel',
  PluginOptionsLabelFormat = 'pluginOptions___labelFormat',
  PluginOptionsCssPropOptimization = 'pluginOptions___cssPropOptimization',
  PluginOptionsBase64Width = 'pluginOptions___base64Width',
  PluginOptionsStripMetadata = 'pluginOptions___stripMetadata',
  PluginOptionsDefaultQuality = 'pluginOptions___defaultQuality',
  PluginOptionsFailOnError = 'pluginOptions___failOnError',
  PluginOptionsColor = 'pluginOptions___color',
  PluginOptionsShowSpinner = 'pluginOptions___showSpinner',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsApiUrl = 'pluginOptions___apiUrl',
  PluginOptionsContentApiKey = 'pluginOptions___contentApiKey',
  PluginOptionsVersion = 'pluginOptions___version',
  PluginOptionsLookup = 'pluginOptions___lookup',
  PluginOptionsLookupType = 'pluginOptions___lookup___type',
  PluginOptionsLookupImgTags = 'pluginOptions___lookup___imgTags',
  PluginOptionsVerbose = 'pluginOptions___verbose',
  PluginOptionsRepositoryName = 'pluginOptions___repositoryName',
  PluginOptionsAccessToken = 'pluginOptions___accessToken',
  PluginOptionsOutput = 'pluginOptions___output',
  PluginOptionsCreateLinkInHead = 'pluginOptions___createLinkInHead',
  PluginOptionsId = 'pluginOptions___id',
  PluginOptionsIncludeInDevelopment = 'pluginOptions___includeInDevelopment',
  PluginOptionsRouteChangeEventName = 'pluginOptions___routeChangeEventName',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords',
}

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type GetFooterDataQueryVariables = Exact<{ [key: string]: never }>;

export type GetFooterDataQuery = { __typename?: 'Query' } & {
  prismicContact?: Maybe<
    { __typename?: 'PrismicContact' } & {
      data?: Maybe<
        { __typename?: 'PrismicContactDataType' } & Pick<
          PrismicContactDataType,
          'phone_number' | 'contact_email'
        > & {
            address?: Maybe<
              { __typename?: 'PrismicStructuredTextType' } & Pick<PrismicStructuredTextType, 'raw'>
            >;
            address_geolocation?: Maybe<
              { __typename?: 'PrismicGeoPointType' } & Pick<
                PrismicGeoPointType,
                'latitude' | 'longitude'
              >
            >;
          }
      >;
    }
  >;
  site?: Maybe<
    { __typename?: 'Site' } & {
      siteMetadata?: Maybe<{ __typename?: 'SiteSiteMetadata' } & SiteMetadataFieldsFragment>;
    }
  >;
  prismicMenu?: Maybe<{ __typename?: 'PrismicMenu' } & PrismicMenuFieldFragment>;
};

export type GetHeaderDataQueryVariables = Exact<{ [key: string]: never }>;

export type GetHeaderDataQuery = { __typename?: 'Query' } & {
  site?: Maybe<
    { __typename?: 'Site' } & {
      siteMetadata?: Maybe<{ __typename?: 'SiteSiteMetadata' } & SiteMetadataFieldsFragment>;
    }
  >;
  prismicMenu?: Maybe<{ __typename?: 'PrismicMenu' } & PrismicMenuFieldFragment>;
};

export type GetHomepageDataQueryVariables = Exact<{ [key: string]: never }>;

export type GetHomepageDataQuery = { __typename?: 'Query' } & {
  prismicHomepage?: Maybe<
    { __typename?: 'PrismicHomepage' } & {
      data?: Maybe<
        { __typename?: 'PrismicHomepageDataType' } & {
          jumbotron_slider?: Maybe<
            Array<
              Maybe<
                { __typename?: 'PrismicHomepageJumbotronSliderGroupType' } & Pick<
                  PrismicHomepageJumbotronSliderGroupType,
                  'title' | 'content'
                > & {
                    image?: Maybe<
                      { __typename?: 'PrismicImageType' } & Pick<
                        PrismicImageType,
                        'url' | 'alt'
                      > & {
                          dimensions?: Maybe<
                            { __typename?: 'PrismicImageDimensionsType' } & Pick<
                              PrismicImageDimensionsType,
                              'width' | 'height'
                            >
                          >;
                          fluid?: Maybe<
                            {
                              __typename?: 'PrismicImageFluidType';
                            } & PrismicImageFluidFieldsFragment
                          >;
                        }
                    >;
                  }
              >
            >
          >;
          body?: Maybe<
            Array<
              Maybe<
                { __typename?: 'PrismicHomepageBodyFeaturedContents' } & Pick<
                  PrismicHomepageBodyFeaturedContents,
                  'slice_type' | 'slice_label'
                > & {
                    primary?: Maybe<
                      { __typename?: 'PrismicHomepageBodyFeaturedContentsPrimaryType' } & Pick<
                        PrismicHomepageBodyFeaturedContentsPrimaryType,
                        'title' | 'navigation_position'
                      >
                    >;
                    items?: Maybe<
                      Array<
                        Maybe<
                          { __typename?: 'PrismicHomepageBodyFeaturedContentsItemType' } & Pick<
                            PrismicHomepageBodyFeaturedContentsItemType,
                            'name'
                          > & {
                              image?: Maybe<
                                { __typename?: 'PrismicImageType' } & Pick<
                                  PrismicImageType,
                                  'url' | 'alt'
                                > & {
                                    dimensions?: Maybe<
                                      { __typename?: 'PrismicImageDimensionsType' } & Pick<
                                        PrismicImageDimensionsType,
                                        'width' | 'height'
                                      >
                                    >;
                                    fluid?: Maybe<
                                      {
                                        __typename?: 'PrismicImageFluidType';
                                      } & PrismicImageFluidFieldsFragment
                                    >;
                                  }
                              >;
                              information?: Maybe<
                                { __typename?: 'PrismicStructuredTextType' } & Pick<
                                  PrismicStructuredTextType,
                                  'raw'
                                >
                              >;
                            }
                        >
                      >
                    >;
                  }
              >
            >
          >;
        }
      >;
    }
  >;
  allGhostPost: { __typename?: 'GhostPostConnection' } & Pick<GhostPostConnection, 'totalCount'> & {
      edges: Array<
        { __typename?: 'GhostPostEdge' } & {
          node: { __typename?: 'GhostPost' } & GhostPostFieldsFragment;
        }
      >;
    };
  site?: Maybe<
    { __typename?: 'Site' } & {
      siteMetadata?: Maybe<{ __typename?: 'SiteSiteMetadata' } & SiteMetadataFieldsFragment>;
    }
  >;
};

export type GetAuthorQueryVariables = Exact<{
  slug: Scalars['String'];
  limit: Scalars['Int'];
  skip: Scalars['Int'];
}>;

export type GetAuthorQuery = { __typename?: 'Query' } & {
  ghostAuthor?: Maybe<{ __typename?: 'GhostAuthor' } & GhostAuthorFieldsFragment>;
  ghostSettings?: Maybe<{ __typename?: 'GhostSettings' } & GhostSettingsFieldsFragment>;
  site?: Maybe<
    { __typename?: 'Site' } & {
      siteMetadata?: Maybe<{ __typename?: 'SiteSiteMetadata' } & SiteMetadataFieldsFragment>;
    }
  >;
  allGhostPost: { __typename?: 'GhostPostConnection' } & {
    edges: Array<
      { __typename?: 'GhostPostEdge' } & {
        node: { __typename?: 'GhostPost' } & GhostPostFieldsFragment;
      }
    >;
  };
};

export type GetIndexPostQueryVariables = Exact<{
  limit: Scalars['Int'];
  skip: Scalars['Int'];
}>;

export type GetIndexPostQuery = { __typename?: 'Query' } & {
  allGhostPost: { __typename?: 'GhostPostConnection' } & {
    edges: Array<
      { __typename?: 'GhostPostEdge' } & {
        node: { __typename?: 'GhostPost' } & GhostPostFieldsFragment;
      }
    >;
  };
  allGhostTag: { __typename?: 'GhostTagConnection' } & {
    edges: Array<
      { __typename?: 'GhostTagEdge' } & {
        node: { __typename?: 'GhostTag' } & GhostTagFieldsFragment;
      }
    >;
  };
  ghostSettings?: Maybe<{ __typename?: 'GhostSettings' } & GhostSettingsFieldsFragment>;
  site?: Maybe<
    { __typename?: 'Site' } & {
      siteMetadata?: Maybe<{ __typename?: 'SiteSiteMetadata' } & SiteMetadataFieldsFragment>;
    }
  >;
};

export type GetPageQueryVariables = Exact<{
  uid: Scalars['String'];
}>;

export type GetPageQuery = { __typename?: 'Query' } & {
  allPrismicPage: { __typename?: 'PrismicPageConnection' } & {
    edges: Array<
      { __typename?: 'PrismicPageEdge' } & {
        node: { __typename?: 'PrismicPage' } & Pick<
          PrismicPage,
          'uid' | 'first_publication_date' | 'last_publication_date' | 'tags'
        > & {
            data?: Maybe<
              { __typename?: 'PrismicPageDataType' } & {
                title?: Maybe<
                  { __typename?: 'PrismicStructuredTextType' } & Pick<
                    PrismicStructuredTextType,
                    'raw' | 'text'
                  >
                >;
                subtitle?: Maybe<
                  { __typename?: 'PrismicStructuredTextType' } & Pick<
                    PrismicStructuredTextType,
                    'raw' | 'text'
                  >
                >;
                banner?: Maybe<
                  { __typename?: 'PrismicImageType' } & Pick<PrismicImageType, 'alt' | 'url'> & {
                      fluid?: Maybe<
                        { __typename?: 'PrismicImageFluidType' } & PrismicImageFluidFieldsFragment
                      >;
                    }
                >;
                content?: Maybe<
                  { __typename?: 'PrismicStructuredTextType' } & Pick<
                    PrismicStructuredTextType,
                    'raw' | 'text'
                  >
                >;
              }
            >;
          };
      }
    >;
  };
  site?: Maybe<
    { __typename?: 'Site' } & {
      siteMetadata?: Maybe<{ __typename?: 'SiteSiteMetadata' } & SiteMetadataFieldsFragment>;
    }
  >;
};

export type GetPostQueryVariables = Exact<{
  slug: Scalars['String'];
}>;

export type GetPostQuery = { __typename?: 'Query' } & {
  ghostPost?: Maybe<
    { __typename?: 'GhostPost' } & {
      childHtmlRehype?: Maybe<
        { __typename?: 'HtmlRehype' } & Pick<HtmlRehype, 'html' | 'tableOfContents'>
      >;
    } & GhostPostFieldsFragment
  >;
  ghostSettings?: Maybe<{ __typename?: 'GhostSettings' } & GhostSettingsFieldsFragment>;
  site?: Maybe<
    { __typename?: 'Site' } & {
      siteMetadata?: Maybe<{ __typename?: 'SiteSiteMetadata' } & SiteMetadataFieldsFragment>;
    }
  >;
};

export type GetProductQueryVariables = Exact<{
  uid: Scalars['String'];
}>;

export type GetProductQuery = { __typename?: 'Query' } & {
  allPrismicProduct: { __typename?: 'PrismicProductConnection' } & {
    edges: Array<
      { __typename?: 'PrismicProductEdge' } & {
        node: { __typename?: 'PrismicProduct' } & Pick<
          PrismicProduct,
          'uid' | 'first_publication_date' | 'last_publication_date' | 'tags'
        > & {
            data?: Maybe<
              { __typename?: 'PrismicProductDataType' } & Pick<PrismicProductDataType, 'title'> & {
                  description?: Maybe<
                    { __typename?: 'PrismicStructuredTextType' } & Pick<
                      PrismicStructuredTextType,
                      'raw' | 'text'
                    >
                  >;
                  features?: Maybe<
                    Array<
                      Maybe<
                        { __typename?: 'PrismicProductFeaturesGroupType' } & Pick<
                          PrismicProductFeaturesGroupType,
                          'name' | 'type'
                        > & {
                            image?: Maybe<
                              { __typename?: 'PrismicImageType' } & Pick<
                                PrismicImageType,
                                'alt'
                              > & {
                                  fluid?: Maybe<
                                    {
                                      __typename?: 'PrismicImageFluidType';
                                    } & PrismicImageFluidFieldsFragment
                                  >;
                                }
                            >;
                            information?: Maybe<
                              { __typename?: 'PrismicStructuredTextType' } & Pick<
                                PrismicStructuredTextType,
                                'raw' | 'text'
                              >
                            >;
                            link?: Maybe<
                              { __typename?: 'PrismicLinkType' } & Pick<PrismicLinkType, 'url'>
                            >;
                          }
                      >
                    >
                  >;
                }
            >;
          };
      }
    >;
  };
  site?: Maybe<
    { __typename?: 'Site' } & {
      siteMetadata?: Maybe<{ __typename?: 'SiteSiteMetadata' } & SiteMetadataFieldsFragment>;
    }
  >;
};

export type GetTagQueryVariables = Exact<{
  slug: Scalars['String'];
  limit: Scalars['Int'];
  skip: Scalars['Int'];
}>;

export type GetTagQuery = { __typename?: 'Query' } & {
  ghostTag?: Maybe<{ __typename?: 'GhostTag' } & GhostTagFieldsFragment>;
  allGhostPost: { __typename?: 'GhostPostConnection' } & {
    edges: Array<
      { __typename?: 'GhostPostEdge' } & {
        node: { __typename?: 'GhostPost' } & GhostPostFieldsFragment;
      }
    >;
  };
  ghostSettings?: Maybe<{ __typename?: 'GhostSettings' } & GhostSettingsFieldsFragment>;
  site?: Maybe<
    { __typename?: 'Site' } & {
      siteMetadata?: Maybe<{ __typename?: 'SiteSiteMetadata' } & SiteMetadataFieldsFragment>;
    }
  >;
};

export type SiteMetadataFieldsFragment = { __typename?: 'SiteSiteMetadata' } & Pick<
  SiteSiteMetadata,
  'title' | 'description' | 'url' | 'siteUrl' | 'image' | 'logo'
>;

type PrismicImageFields_PrismicImageType_Fragment = { __typename?: 'PrismicImageType' } & Pick<
  PrismicImageType,
  'alt' | 'copyright'
> & {
    dimensions?: Maybe<
      { __typename?: 'PrismicImageDimensionsType' } & Pick<
        PrismicImageDimensionsType,
        'width' | 'height'
      >
    >;
    fixed?: Maybe<{ __typename?: 'PrismicImageFixedType' } & PrismicImageFixedFieldsFragment>;
    fluid?: Maybe<{ __typename?: 'PrismicImageFluidType' } & PrismicImageFluidFieldsFragment>;
  };

type PrismicImageFields_PrismicImageThumbnailType_Fragment = {
  __typename?: 'PrismicImageThumbnailType';
} & Pick<PrismicImageThumbnailType, 'alt' | 'copyright'> & {
    dimensions?: Maybe<
      { __typename?: 'PrismicImageDimensionsType' } & Pick<
        PrismicImageDimensionsType,
        'width' | 'height'
      >
    >;
    fixed?: Maybe<{ __typename?: 'PrismicImageFixedType' } & PrismicImageFixedFieldsFragment>;
    fluid?: Maybe<{ __typename?: 'PrismicImageFluidType' } & PrismicImageFluidFieldsFragment>;
  };

export type PrismicImageFieldsFragment =
  | PrismicImageFields_PrismicImageType_Fragment
  | PrismicImageFields_PrismicImageThumbnailType_Fragment;

export type PrismicImageFixedFieldsFragment = { __typename?: 'PrismicImageFixedType' } & Pick<
  PrismicImageFixedType,
  'base64' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'width' | 'height'
>;

export type PrismicImageFluidFieldsFragment = { __typename?: 'PrismicImageFluidType' } & Pick<
  PrismicImageFluidType,
  'base64' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes' | 'aspectRatio'
>;

export type ImageSharpFluidFieldsFragment = { __typename?: 'ImageSharpFluid' } & Pick<
  ImageSharpFluid,
  'base64' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes' | 'aspectRatio'
>;

export type PrismicMenuFieldFragment = { __typename?: 'PrismicMenu' } & Pick<PrismicMenu, 'uid'> & {
    data?: Maybe<
      { __typename?: 'PrismicMenuDataType' } & {
        menus?: Maybe<
          Array<
            Maybe<
              { __typename?: 'PrismicMenuMenusGroupType' } & Pick<
                PrismicMenuMenusGroupType,
                'label'
              > & {
                  link?: Maybe<
                    { __typename?: 'PrismicLinkType' } & Pick<
                      PrismicLinkType,
                      'url' | 'link_type' | 'type' | 'uid'
                    >
                  >;
                }
            >
          >
        >;
      }
    >;
  };

export type GhostTagFieldsFragment = { __typename?: 'GhostTag' } & Pick<
  GhostTag,
  | 'slug'
  | 'name'
  | 'visibility'
  | 'feature_image'
  | 'description'
  | 'meta_title'
  | 'meta_description'
> & {
    featureImageSharp?: Maybe<
      { __typename?: 'File' } & {
        childImageSharp?: Maybe<
          { __typename?: 'ImageSharp' } & {
            fluid?: Maybe<{ __typename?: 'ImageSharpFluid' } & ImageSharpFluidFieldsFragment>;
          }
        >;
      }
    >;
  };

export type GhostAuthorFieldsFragment = { __typename?: 'GhostAuthor' } & Pick<
  GhostAuthor,
  | 'slug'
  | 'name'
  | 'bio'
  | 'cover_image'
  | 'profile_image'
  | 'location'
  | 'website'
  | 'twitter'
  | 'facebook'
> & {
    coverImageSharp?: Maybe<
      { __typename?: 'File' } & {
        childImageSharp?: Maybe<
          { __typename?: 'ImageSharp' } & {
            fluid?: Maybe<{ __typename?: 'ImageSharpFluid' } & ImageSharpFluidFieldsFragment>;
          }
        >;
      }
    >;
    profileImageSharp?: Maybe<
      { __typename?: 'File' } & {
        childImageSharp?: Maybe<
          { __typename?: 'ImageSharp' } & {
            fluid?: Maybe<{ __typename?: 'ImageSharpFluid' } & ImageSharpFluidFieldsFragment>;
          }
        >;
      }
    >;
  };

export type GhostPostFieldsFragment = { __typename?: 'GhostPost' } & Pick<
  GhostPost,
  | 'id'
  | 'title'
  | 'slug'
  | 'featured'
  | 'feature_image'
  | 'excerpt'
  | 'custom_excerpt'
  | 'visibility'
  | 'created_at'
  | 'published_at'
  | 'updated_at'
  | 'meta_title'
  | 'meta_description'
  | 'og_description'
  | 'og_image'
  | 'og_title'
  | 'twitter_description'
  | 'twitter_image'
  | 'twitter_title'
  | 'plaintext'
  | 'html'
  | 'url'
  | 'canonical_url'
  | 'uuid'
  | 'page'
  | 'codeinjection_foot'
  | 'codeinjection_head'
  | 'codeinjection_styles'
  | 'comment_id'
  | 'reading_time'
> & {
    created_at_pretty: GhostPost['created_at'];
    published_at_pretty: GhostPost['published_at'];
    updated_at_pretty: GhostPost['updated_at'];
  } & {
    featureImageSharp?: Maybe<
      { __typename?: 'File' } & {
        childImageSharp?: Maybe<
          { __typename?: 'ImageSharp' } & {
            fluid?: Maybe<{ __typename?: 'ImageSharpFluid' } & ImageSharpFluidFieldsFragment>;
          }
        >;
      }
    >;
    authors: Array<
      Maybe<
        { __typename?: 'GhostAuthor' } & Pick<
          GhostAuthor,
          'name' | 'slug' | 'bio' | 'twitter' | 'facebook' | 'website'
        > & {
            profileImageSharp?: Maybe<
              { __typename?: 'File' } & {
                childImageSharp?: Maybe<
                  { __typename?: 'ImageSharp' } & {
                    fluid?: Maybe<
                      { __typename?: 'ImageSharpFluid' } & ImageSharpFluidFieldsFragment
                    >;
                  }
                >;
              }
            >;
          }
      >
    >;
    primary_author: { __typename?: 'GhostAuthor' } & Pick<
      GhostAuthor,
      'name' | 'slug' | 'bio' | 'twitter' | 'facebook' | 'website'
    > & {
        profileImageSharp?: Maybe<
          { __typename?: 'File' } & {
            childImageSharp?: Maybe<
              { __typename?: 'ImageSharp' } & {
                fluid?: Maybe<{ __typename?: 'ImageSharpFluid' } & ImageSharpFluidFieldsFragment>;
              }
            >;
          }
        >;
      };
    primary_tag?: Maybe<
      { __typename?: 'GhostTag' } & Pick<
        GhostTag,
        | 'name'
        | 'slug'
        | 'description'
        | 'feature_image'
        | 'meta_description'
        | 'meta_title'
        | 'visibility'
      >
    >;
    tags?: Maybe<
      Array<
        Maybe<
          { __typename?: 'GhostTag' } & Pick<
            GhostTag,
            | 'name'
            | 'slug'
            | 'description'
            | 'feature_image'
            | 'meta_description'
            | 'meta_title'
            | 'visibility'
          >
        >
      >
    >;
  };

export type GhostPageFieldsFragment = { __typename?: 'GhostPage' } & Pick<
  GhostPage,
  | 'title'
  | 'slug'
  | 'featured'
  | 'feature_image'
  | 'excerpt'
  | 'custom_excerpt'
  | 'visibility'
  | 'created_at'
  | 'published_at'
  | 'updated_at'
  | 'meta_title'
  | 'meta_description'
  | 'og_description'
  | 'og_image'
  | 'og_title'
  | 'twitter_description'
  | 'twitter_image'
  | 'twitter_title'
  | 'plaintext'
  | 'html'
  | 'url'
  | 'canonical_url'
  | 'uuid'
  | 'page'
  | 'codeinjection_foot'
  | 'codeinjection_head'
  | 'codeinjection_styles'
  | 'comment_id'
  | 'reading_time'
> & {
    created_at_pretty: GhostPage['created_at'];
    published_at_pretty: GhostPage['published_at'];
    updated_at_pretty: GhostPage['updated_at'];
  } & {
    authors: Array<
      Maybe<
        { __typename?: 'GhostAuthor' } & Pick<
          GhostAuthor,
          'name' | 'slug' | 'bio' | 'profile_image' | 'twitter' | 'facebook' | 'website'
        >
      >
    >;
    primary_author: { __typename?: 'GhostAuthor' } & Pick<
      GhostAuthor,
      'name' | 'slug' | 'bio' | 'profile_image' | 'twitter' | 'facebook' | 'website'
    >;
    primary_tag?: Maybe<
      { __typename?: 'GhostTag' } & Pick<
        GhostTag,
        | 'name'
        | 'slug'
        | 'description'
        | 'feature_image'
        | 'meta_description'
        | 'meta_title'
        | 'visibility'
      >
    >;
    tags?: Maybe<
      Array<
        Maybe<
          { __typename?: 'GhostTag' } & Pick<
            GhostTag,
            | 'name'
            | 'slug'
            | 'description'
            | 'feature_image'
            | 'meta_description'
            | 'meta_title'
            | 'visibility'
          >
        >
      >
    >;
  };

export type GhostSettingsFieldsFragment = { __typename?: 'GhostSettings' } & Pick<
  GhostSettings,
  | 'title'
  | 'description'
  | 'logo'
  | 'icon'
  | 'cover_image'
  | 'facebook'
  | 'twitter'
  | 'lang'
  | 'timezone'
  | 'codeinjection_head'
  | 'codeinjection_foot'
  | 'codeinjection_styles'
> & {
    navigation?: Maybe<
      Array<Maybe<{ __typename?: 'GhostNavigation' } & Pick<GhostNavigation, 'label' | 'url'>>>
    >;
    coverImageSharp?: Maybe<
      { __typename?: 'File' } & {
        childImageSharp?: Maybe<
          { __typename?: 'ImageSharp' } & {
            fluid?: Maybe<{ __typename?: 'ImageSharpFluid' } & ImageSharpFluidFieldsFragment>;
          }
        >;
      }
    >;
  };
