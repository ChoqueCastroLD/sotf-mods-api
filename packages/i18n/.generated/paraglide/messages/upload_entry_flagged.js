/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Entry_FlaggedInputs */

const en_upload_entry_flagged = /** @type {(inputs: Upload_Entry_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Needs review`)
};

const es_upload_entry_flagged = /** @type {(inputs: Upload_Entry_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Requiere revisión`)
};

const de_upload_entry_flagged = /** @type {(inputs: Upload_Entry_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Braucht Prüfung`)
};

const fr_upload_entry_flagged = /** @type {(inputs: Upload_Entry_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`À examiner`)
};

const it_upload_entry_flagged = /** @type {(inputs: Upload_Entry_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Da esaminare`)
};

const nl_upload_entry_flagged = /** @type {(inputs: Upload_Entry_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Controle nodig`)
};

const pl_upload_entry_flagged = /** @type {(inputs: Upload_Entry_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wymaga przeglądu`)
};

const pt_upload_entry_flagged = /** @type {(inputs: Upload_Entry_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Precisa de revisão`)
};

const ru_upload_entry_flagged = /** @type {(inputs: Upload_Entry_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нужна проверка`)
};

const sv_upload_entry_flagged = /** @type {(inputs: Upload_Entry_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Behöver granskas`)
};

const tr_upload_entry_flagged = /** @type {(inputs: Upload_Entry_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İnceleme gerekiyor`)
};

const zh_upload_entry_flagged = /** @type {(inputs: Upload_Entry_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`需审核`)
};

const ja_upload_entry_flagged = /** @type {(inputs: Upload_Entry_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`要確認`)
};

/**
* | output |
* | --- |
* | "Needs review" |
*
* @param {Upload_Entry_FlaggedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_entry_flagged = /** @type {((inputs?: Upload_Entry_FlaggedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Entry_FlaggedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_entry_flagged(inputs)
	if (locale === "de") return de_upload_entry_flagged(inputs)
	if (locale === "fr") return fr_upload_entry_flagged(inputs)
	if (locale === "it") return it_upload_entry_flagged(inputs)
	if (locale === "nl") return nl_upload_entry_flagged(inputs)
	if (locale === "pl") return pl_upload_entry_flagged(inputs)
	if (locale === "pt") return pt_upload_entry_flagged(inputs)
	if (locale === "ru") return ru_upload_entry_flagged(inputs)
	if (locale === "sv") return sv_upload_entry_flagged(inputs)
	if (locale === "tr") return tr_upload_entry_flagged(inputs)
	if (locale === "zh") return zh_upload_entry_flagged(inputs)
	if (locale === "ja") return ja_upload_entry_flagged(inputs)
	return en_upload_entry_flagged(inputs)
});
