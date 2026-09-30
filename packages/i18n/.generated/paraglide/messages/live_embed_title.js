/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Live_Embed_TitleInputs */

const en_live_embed_title = /** @type {(inputs: Live_Embed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Badges for your page`)
};

const es_live_embed_title = /** @type {(inputs: Live_Embed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Insignias para tu página`)
};

const de_live_embed_title = /** @type {(inputs: Live_Embed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Badges für deine Seite`)
};

const fr_live_embed_title = /** @type {(inputs: Live_Embed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Badges pour votre page`)
};

const it_live_embed_title = /** @type {(inputs: Live_Embed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Badge per la tua pagina`)
};

const nl_live_embed_title = /** @type {(inputs: Live_Embed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Badges voor je pagina`)
};

const pl_live_embed_title = /** @type {(inputs: Live_Embed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odznaki dla Twojej strony`)
};

const pt_live_embed_title = /** @type {(inputs: Live_Embed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Emblemas para sua página`)
};

const ru_live_embed_title = /** @type {(inputs: Live_Embed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Значки для вашей страницы`)
};

const sv_live_embed_title = /** @type {(inputs: Live_Embed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Märken för din sida`)
};

const tr_live_embed_title = /** @type {(inputs: Live_Embed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sayfan için rozetler`)
};

const zh_live_embed_title = /** @type {(inputs: Live_Embed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`页面徽章`)
};

const ja_live_embed_title = /** @type {(inputs: Live_Embed_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ページ用バッジ`)
};

/**
* | output |
* | --- |
* | "Badges for your page" |
*
* @param {Live_Embed_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const live_embed_title = /** @type {((inputs?: Live_Embed_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Live_Embed_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_live_embed_title(inputs)
	if (locale === "de") return de_live_embed_title(inputs)
	if (locale === "fr") return fr_live_embed_title(inputs)
	if (locale === "it") return it_live_embed_title(inputs)
	if (locale === "nl") return nl_live_embed_title(inputs)
	if (locale === "pl") return pl_live_embed_title(inputs)
	if (locale === "pt") return pt_live_embed_title(inputs)
	if (locale === "ru") return ru_live_embed_title(inputs)
	if (locale === "sv") return sv_live_embed_title(inputs)
	if (locale === "tr") return tr_live_embed_title(inputs)
	if (locale === "zh") return zh_live_embed_title(inputs)
	if (locale === "ja") return ja_live_embed_title(inputs)
	return en_live_embed_title(inputs)
});
