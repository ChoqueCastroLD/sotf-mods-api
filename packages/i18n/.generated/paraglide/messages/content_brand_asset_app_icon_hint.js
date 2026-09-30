/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Brand_Asset_App_Icon_HintInputs */

const en_content_brand_asset_app_icon_hint = /** @type {(inputs: Content_Brand_Asset_App_Icon_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The pin on a Night tile, for avatars and shortcuts.`)
};

const es_content_brand_asset_app_icon_hint = /** @type {(inputs: Content_Brand_Asset_App_Icon_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El pin sobre un fondo Noche, para avatares y accesos directos.`)
};

const de_content_brand_asset_app_icon_hint = /** @type {(inputs: Content_Brand_Asset_App_Icon_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Pin auf einer Night-Fläche, für Avatare und Verknüpfungen.`)
};

const fr_content_brand_asset_app_icon_hint = /** @type {(inputs: Content_Brand_Asset_App_Icon_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le repère sur un fond Nuit, pour les avatars et les raccourcis.`)
};

const it_content_brand_asset_app_icon_hint = /** @type {(inputs: Content_Brand_Asset_App_Icon_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il segnaposto su fondo Notte, per avatar e collegamenti.`)
};

const nl_content_brand_asset_app_icon_hint = /** @type {(inputs: Content_Brand_Asset_App_Icon_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De pin op een Night-vlak, voor avatars en snelkoppelingen.`)
};

const pl_content_brand_asset_app_icon_hint = /** @type {(inputs: Content_Brand_Asset_App_Icon_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pinezka na tle Noc, do awatarów i skrótów.`)
};

const pt_content_brand_asset_app_icon_hint = /** @type {(inputs: Content_Brand_Asset_App_Icon_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O pino sobre um fundo Noite, para avatares e atalhos.`)
};

const ru_content_brand_asset_app_icon_hint = /** @type {(inputs: Content_Brand_Asset_App_Icon_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Метка на фоне «Ночь», для аватаров и ярлыков.`)
};

const sv_content_brand_asset_app_icon_hint = /** @type {(inputs: Content_Brand_Asset_App_Icon_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nålen på en Night-yta, för avatarer och genvägar.`)
};

const tr_content_brand_asset_app_icon_hint = /** @type {(inputs: Content_Brand_Asset_App_Icon_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Night zemin üzerinde iğne; avatarlar ve kısayollar için.`)
};

const zh_content_brand_asset_app_icon_hint = /** @type {(inputs: Content_Brand_Asset_App_Icon_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`夜间底色上的图钉，用于头像和快捷方式。`)
};

const ja_content_brand_asset_app_icon_hint = /** @type {(inputs: Content_Brand_Asset_App_Icon_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Night の背景にピン。アバターやショートカット向け。`)
};

/**
* | output |
* | --- |
* | "The pin on a Night tile, for avatars and shortcuts." |
*
* @param {Content_Brand_Asset_App_Icon_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_brand_asset_app_icon_hint = /** @type {((inputs?: Content_Brand_Asset_App_Icon_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_Asset_App_Icon_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_brand_asset_app_icon_hint(inputs)
	if (locale === "de") return de_content_brand_asset_app_icon_hint(inputs)
	if (locale === "fr") return fr_content_brand_asset_app_icon_hint(inputs)
	if (locale === "it") return it_content_brand_asset_app_icon_hint(inputs)
	if (locale === "nl") return nl_content_brand_asset_app_icon_hint(inputs)
	if (locale === "pl") return pl_content_brand_asset_app_icon_hint(inputs)
	if (locale === "pt") return pt_content_brand_asset_app_icon_hint(inputs)
	if (locale === "ru") return ru_content_brand_asset_app_icon_hint(inputs)
	if (locale === "sv") return sv_content_brand_asset_app_icon_hint(inputs)
	if (locale === "tr") return tr_content_brand_asset_app_icon_hint(inputs)
	if (locale === "zh") return zh_content_brand_asset_app_icon_hint(inputs)
	if (locale === "ja") return ja_content_brand_asset_app_icon_hint(inputs)
	return en_content_brand_asset_app_icon_hint(inputs)
});
