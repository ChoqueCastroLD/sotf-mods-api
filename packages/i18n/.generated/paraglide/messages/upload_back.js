/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_BackInputs */

const en_upload_back = /** @type {(inputs: Upload_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back`)
};

const es_upload_back = /** @type {(inputs: Upload_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atrás`)
};

const de_upload_back = /** @type {(inputs: Upload_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zurück`)
};

const fr_upload_back = /** @type {(inputs: Upload_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retour`)
};

const it_upload_back = /** @type {(inputs: Upload_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Indietro`)
};

const nl_upload_back = /** @type {(inputs: Upload_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terug`)
};

const pl_upload_back = /** @type {(inputs: Upload_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wstecz`)
};

const pt_upload_back = /** @type {(inputs: Upload_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voltar`)
};

const ru_upload_back = /** @type {(inputs: Upload_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Назад`)
};

const sv_upload_back = /** @type {(inputs: Upload_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tillbaka`)
};

const tr_upload_back = /** @type {(inputs: Upload_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geri`)
};

const zh_upload_back = /** @type {(inputs: Upload_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上一步`)
};

const ja_upload_back = /** @type {(inputs: Upload_BackInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`戻る`)
};

/**
* | output |
* | --- |
* | "Back" |
*
* @param {Upload_BackInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_back = /** @type {((inputs?: Upload_BackInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_BackInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_back(inputs)
	if (locale === "de") return de_upload_back(inputs)
	if (locale === "fr") return fr_upload_back(inputs)
	if (locale === "it") return it_upload_back(inputs)
	if (locale === "nl") return nl_upload_back(inputs)
	if (locale === "pl") return pl_upload_back(inputs)
	if (locale === "pt") return pt_upload_back(inputs)
	if (locale === "ru") return ru_upload_back(inputs)
	if (locale === "sv") return sv_upload_back(inputs)
	if (locale === "tr") return tr_upload_back(inputs)
	if (locale === "zh") return zh_upload_back(inputs)
	if (locale === "ja") return ja_upload_back(inputs)
	return en_upload_back(inputs)
});
