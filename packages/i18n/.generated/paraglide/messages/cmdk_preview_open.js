/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Preview_OpenInputs */

const en_cmdk_preview_open = /** @type {(inputs: Cmdk_Preview_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open page`)
};

const es_cmdk_preview_open = /** @type {(inputs: Cmdk_Preview_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir página`)
};

const de_cmdk_preview_open = /** @type {(inputs: Cmdk_Preview_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seite öffnen`)
};

const fr_cmdk_preview_open = /** @type {(inputs: Cmdk_Preview_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ouvrir la page`)
};

const it_cmdk_preview_open = /** @type {(inputs: Cmdk_Preview_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apri la pagina`)
};

const nl_cmdk_preview_open = /** @type {(inputs: Cmdk_Preview_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pagina openen`)
};

const pl_cmdk_preview_open = /** @type {(inputs: Cmdk_Preview_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otwórz stronę`)
};

const pt_cmdk_preview_open = /** @type {(inputs: Cmdk_Preview_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir página`)
};

const ru_cmdk_preview_open = /** @type {(inputs: Cmdk_Preview_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Открыть страницу`)
};

const sv_cmdk_preview_open = /** @type {(inputs: Cmdk_Preview_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öppna sidan`)
};

const tr_cmdk_preview_open = /** @type {(inputs: Cmdk_Preview_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sayfayı aç`)
};

const zh_cmdk_preview_open = /** @type {(inputs: Cmdk_Preview_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`打开页面`)
};

const ja_cmdk_preview_open = /** @type {(inputs: Cmdk_Preview_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ページを開く`)
};

/**
* | output |
* | --- |
* | "Open page" |
*
* @param {Cmdk_Preview_OpenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_preview_open = /** @type {((inputs?: Cmdk_Preview_OpenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Preview_OpenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_preview_open(inputs)
	if (locale === "de") return de_cmdk_preview_open(inputs)
	if (locale === "fr") return fr_cmdk_preview_open(inputs)
	if (locale === "it") return it_cmdk_preview_open(inputs)
	if (locale === "nl") return nl_cmdk_preview_open(inputs)
	if (locale === "pl") return pl_cmdk_preview_open(inputs)
	if (locale === "pt") return pt_cmdk_preview_open(inputs)
	if (locale === "ru") return ru_cmdk_preview_open(inputs)
	if (locale === "sv") return sv_cmdk_preview_open(inputs)
	if (locale === "tr") return tr_cmdk_preview_open(inputs)
	if (locale === "zh") return zh_cmdk_preview_open(inputs)
	if (locale === "ja") return ja_cmdk_preview_open(inputs)
	return en_cmdk_preview_open(inputs)
});
