/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Copy_LineInputs */

const en_logs_copy_line = /** @type {(inputs: Logs_Copy_LineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copy line`)
};

const es_logs_copy_line = /** @type {(inputs: Logs_Copy_LineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiar línea`)
};

const de_logs_copy_line = /** @type {(inputs: Logs_Copy_LineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zeile kopieren`)
};

const fr_logs_copy_line = /** @type {(inputs: Logs_Copy_LineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copier la ligne`)
};

const it_logs_copy_line = /** @type {(inputs: Logs_Copy_LineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copia riga`)
};

const nl_logs_copy_line = /** @type {(inputs: Logs_Copy_LineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regel kopiëren`)
};

const pl_logs_copy_line = /** @type {(inputs: Logs_Copy_LineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiuj wiersz`)
};

const pt_logs_copy_line = /** @type {(inputs: Logs_Copy_LineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiar linha`)
};

const ru_logs_copy_line = /** @type {(inputs: Logs_Copy_LineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Копировать строку`)
};

const sv_logs_copy_line = /** @type {(inputs: Logs_Copy_LineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiera rad`)
};

const tr_logs_copy_line = /** @type {(inputs: Logs_Copy_LineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Satırı kopyala`)
};

const zh_logs_copy_line = /** @type {(inputs: Logs_Copy_LineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`复制此行`)
};

const ja_logs_copy_line = /** @type {(inputs: Logs_Copy_LineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`行をコピー`)
};

/**
* | output |
* | --- |
* | "Copy line" |
*
* @param {Logs_Copy_LineInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_copy_line = /** @type {((inputs?: Logs_Copy_LineInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Copy_LineInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_copy_line(inputs)
	if (locale === "de") return de_logs_copy_line(inputs)
	if (locale === "fr") return fr_logs_copy_line(inputs)
	if (locale === "it") return it_logs_copy_line(inputs)
	if (locale === "nl") return nl_logs_copy_line(inputs)
	if (locale === "pl") return pl_logs_copy_line(inputs)
	if (locale === "pt") return pt_logs_copy_line(inputs)
	if (locale === "ru") return ru_logs_copy_line(inputs)
	if (locale === "sv") return sv_logs_copy_line(inputs)
	if (locale === "tr") return tr_logs_copy_line(inputs)
	if (locale === "zh") return zh_logs_copy_line(inputs)
	if (locale === "ja") return ja_logs_copy_line(inputs)
	return en_logs_copy_line(inputs)
});
