/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_CopiedInputs */

const en_logs_copied = /** @type {(inputs: Logs_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copied`)
};

const es_logs_copied = /** @type {(inputs: Logs_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiado`)
};

const de_logs_copied = /** @type {(inputs: Logs_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiert`)
};

const fr_logs_copied = /** @type {(inputs: Logs_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copié`)
};

const it_logs_copied = /** @type {(inputs: Logs_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiato`)
};

const nl_logs_copied = /** @type {(inputs: Logs_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gekopieerd`)
};

const pl_logs_copied = /** @type {(inputs: Logs_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skopiowano`)
};

const pt_logs_copied = /** @type {(inputs: Logs_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiado`)
};

const ru_logs_copied = /** @type {(inputs: Logs_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скопировано`)
};

const sv_logs_copied = /** @type {(inputs: Logs_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopierad`)
};

const tr_logs_copied = /** @type {(inputs: Logs_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopyalandı`)
};

const zh_logs_copied = /** @type {(inputs: Logs_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已复制`)
};

const ja_logs_copied = /** @type {(inputs: Logs_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コピーしました`)
};

/**
* | output |
* | --- |
* | "Copied" |
*
* @param {Logs_CopiedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_copied = /** @type {((inputs?: Logs_CopiedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_CopiedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_copied(inputs)
	if (locale === "de") return de_logs_copied(inputs)
	if (locale === "fr") return fr_logs_copied(inputs)
	if (locale === "it") return it_logs_copied(inputs)
	if (locale === "nl") return nl_logs_copied(inputs)
	if (locale === "pl") return pl_logs_copied(inputs)
	if (locale === "pt") return pt_logs_copied(inputs)
	if (locale === "ru") return ru_logs_copied(inputs)
	if (locale === "sv") return sv_logs_copied(inputs)
	if (locale === "tr") return tr_logs_copied(inputs)
	if (locale === "zh") return zh_logs_copied(inputs)
	if (locale === "ja") return ja_logs_copied(inputs)
	return en_logs_copied(inputs)
});
