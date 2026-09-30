/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Downloads_TitleInputs */

const en_basecamp_downloads_title = /** @type {(inputs: Basecamp_Downloads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads`)
};

const es_basecamp_downloads_title = /** @type {(inputs: Basecamp_Downloads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargas`)
};

const de_basecamp_downloads_title = /** @type {(inputs: Basecamp_Downloads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads`)
};

const fr_basecamp_downloads_title = /** @type {(inputs: Basecamp_Downloads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléchargements`)
};

const it_basecamp_downloads_title = /** @type {(inputs: Basecamp_Downloads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download`)
};

const nl_basecamp_downloads_title = /** @type {(inputs: Basecamp_Downloads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads`)
};

const pl_basecamp_downloads_title = /** @type {(inputs: Basecamp_Downloads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobrania`)
};

const pt_basecamp_downloads_title = /** @type {(inputs: Basecamp_Downloads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads`)
};

const ru_basecamp_downloads_title = /** @type {(inputs: Basecamp_Downloads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузки`)
};

const sv_basecamp_downloads_title = /** @type {(inputs: Basecamp_Downloads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nedladdningar`)
};

const tr_basecamp_downloads_title = /** @type {(inputs: Basecamp_Downloads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İndirmeler`)
};

const zh_basecamp_downloads_title = /** @type {(inputs: Basecamp_Downloads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载量`)
};

const ja_basecamp_downloads_title = /** @type {(inputs: Basecamp_Downloads_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロード`)
};

/**
* | output |
* | --- |
* | "Downloads" |
*
* @param {Basecamp_Downloads_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_downloads_title = /** @type {((inputs?: Basecamp_Downloads_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Downloads_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_downloads_title(inputs)
	if (locale === "de") return de_basecamp_downloads_title(inputs)
	if (locale === "fr") return fr_basecamp_downloads_title(inputs)
	if (locale === "it") return it_basecamp_downloads_title(inputs)
	if (locale === "nl") return nl_basecamp_downloads_title(inputs)
	if (locale === "pl") return pl_basecamp_downloads_title(inputs)
	if (locale === "pt") return pt_basecamp_downloads_title(inputs)
	if (locale === "ru") return ru_basecamp_downloads_title(inputs)
	if (locale === "sv") return sv_basecamp_downloads_title(inputs)
	if (locale === "tr") return tr_basecamp_downloads_title(inputs)
	if (locale === "zh") return zh_basecamp_downloads_title(inputs)
	if (locale === "ja") return ja_basecamp_downloads_title(inputs)
	return en_basecamp_downloads_title(inputs)
});
