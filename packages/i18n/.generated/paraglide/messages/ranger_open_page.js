/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Open_PageInputs */

const en_ranger_open_page = /** @type {(inputs: Ranger_Open_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open page`)
};

const es_ranger_open_page = /** @type {(inputs: Ranger_Open_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir página`)
};

const de_ranger_open_page = /** @type {(inputs: Ranger_Open_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seite öffnen`)
};

const fr_ranger_open_page = /** @type {(inputs: Ranger_Open_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ouvrir la page`)
};

const it_ranger_open_page = /** @type {(inputs: Ranger_Open_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apri la pagina`)
};

const nl_ranger_open_page = /** @type {(inputs: Ranger_Open_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pagina openen`)
};

const pl_ranger_open_page = /** @type {(inputs: Ranger_Open_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otwórz stronę`)
};

const pt_ranger_open_page = /** @type {(inputs: Ranger_Open_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir página`)
};

const ru_ranger_open_page = /** @type {(inputs: Ranger_Open_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Открыть страницу`)
};

const sv_ranger_open_page = /** @type {(inputs: Ranger_Open_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öppna sidan`)
};

const tr_ranger_open_page = /** @type {(inputs: Ranger_Open_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sayfayı aç`)
};

const zh_ranger_open_page = /** @type {(inputs: Ranger_Open_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`打开页面`)
};

const ja_ranger_open_page = /** @type {(inputs: Ranger_Open_PageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ページを開く`)
};

/**
* | output |
* | --- |
* | "Open page" |
*
* @param {Ranger_Open_PageInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_open_page = /** @type {((inputs?: Ranger_Open_PageInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Open_PageInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_open_page(inputs)
	if (locale === "de") return de_ranger_open_page(inputs)
	if (locale === "fr") return fr_ranger_open_page(inputs)
	if (locale === "it") return it_ranger_open_page(inputs)
	if (locale === "nl") return nl_ranger_open_page(inputs)
	if (locale === "pl") return pl_ranger_open_page(inputs)
	if (locale === "pt") return pt_ranger_open_page(inputs)
	if (locale === "ru") return ru_ranger_open_page(inputs)
	if (locale === "sv") return sv_ranger_open_page(inputs)
	if (locale === "tr") return tr_ranger_open_page(inputs)
	if (locale === "zh") return zh_ranger_open_page(inputs)
	if (locale === "ja") return ja_ranger_open_page(inputs)
	return en_ranger_open_page(inputs)
});
