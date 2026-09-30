/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Brand_Asset_App_IconInputs */

const en_content_brand_asset_app_icon = /** @type {(inputs: Content_Brand_Asset_App_IconInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`App icon`)
};

const es_content_brand_asset_app_icon = /** @type {(inputs: Content_Brand_Asset_App_IconInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Icono de app`)
};

const de_content_brand_asset_app_icon = /** @type {(inputs: Content_Brand_Asset_App_IconInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`App-Symbol`)
};

const fr_content_brand_asset_app_icon = /** @type {(inputs: Content_Brand_Asset_App_IconInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Icône d’application`)
};

const it_content_brand_asset_app_icon = /** @type {(inputs: Content_Brand_Asset_App_IconInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Icona dell’app`)
};

const nl_content_brand_asset_app_icon = /** @type {(inputs: Content_Brand_Asset_App_IconInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`App-pictogram`)
};

const pl_content_brand_asset_app_icon = /** @type {(inputs: Content_Brand_Asset_App_IconInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ikona aplikacji`)
};

const pt_content_brand_asset_app_icon = /** @type {(inputs: Content_Brand_Asset_App_IconInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ícone de app`)
};

const ru_content_brand_asset_app_icon = /** @type {(inputs: Content_Brand_Asset_App_IconInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Иконка приложения`)
};

const sv_content_brand_asset_app_icon = /** @type {(inputs: Content_Brand_Asset_App_IconInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Appikon`)
};

const tr_content_brand_asset_app_icon = /** @type {(inputs: Content_Brand_Asset_App_IconInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uygulama simgesi`)
};

const zh_content_brand_asset_app_icon = /** @type {(inputs: Content_Brand_Asset_App_IconInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`应用图标`)
};

const ja_content_brand_asset_app_icon = /** @type {(inputs: Content_Brand_Asset_App_IconInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アプリアイコン`)
};

/**
* | output |
* | --- |
* | "App icon" |
*
* @param {Content_Brand_Asset_App_IconInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_brand_asset_app_icon = /** @type {((inputs?: Content_Brand_Asset_App_IconInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_Asset_App_IconInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_brand_asset_app_icon(inputs)
	if (locale === "de") return de_content_brand_asset_app_icon(inputs)
	if (locale === "fr") return fr_content_brand_asset_app_icon(inputs)
	if (locale === "it") return it_content_brand_asset_app_icon(inputs)
	if (locale === "nl") return nl_content_brand_asset_app_icon(inputs)
	if (locale === "pl") return pl_content_brand_asset_app_icon(inputs)
	if (locale === "pt") return pt_content_brand_asset_app_icon(inputs)
	if (locale === "ru") return ru_content_brand_asset_app_icon(inputs)
	if (locale === "sv") return sv_content_brand_asset_app_icon(inputs)
	if (locale === "tr") return tr_content_brand_asset_app_icon(inputs)
	if (locale === "zh") return zh_content_brand_asset_app_icon(inputs)
	if (locale === "ja") return ja_content_brand_asset_app_icon(inputs)
	return en_content_brand_asset_app_icon(inputs)
});
