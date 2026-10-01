/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Copy_Line_LinkInputs */

const en_logs_copy_line_link = /** @type {(inputs: Logs_Copy_Line_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copy line link`)
};

const es_logs_copy_line_link = /** @type {(inputs: Logs_Copy_Line_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiar enlace de la línea`)
};

const de_logs_copy_line_link = /** @type {(inputs: Logs_Copy_Line_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zeilenlink kopieren`)
};

const fr_logs_copy_line_link = /** @type {(inputs: Logs_Copy_Line_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copier le lien de la ligne`)
};

const it_logs_copy_line_link = /** @type {(inputs: Logs_Copy_Line_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copia link della riga`)
};

const nl_logs_copy_line_link = /** @type {(inputs: Logs_Copy_Line_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regellink kopiëren`)
};

const pl_logs_copy_line_link = /** @type {(inputs: Logs_Copy_Line_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiuj link do wiersza`)
};

const pt_logs_copy_line_link = /** @type {(inputs: Logs_Copy_Line_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiar ligação da linha`)
};

const ru_logs_copy_line_link = /** @type {(inputs: Logs_Copy_Line_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Копировать ссылку на строку`)
};

const sv_logs_copy_line_link = /** @type {(inputs: Logs_Copy_Line_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiera radlänk`)
};

const tr_logs_copy_line_link = /** @type {(inputs: Logs_Copy_Line_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Satır bağlantısını kopyala`)
};

const zh_logs_copy_line_link = /** @type {(inputs: Logs_Copy_Line_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`复制此行链接`)
};

const ja_logs_copy_line_link = /** @type {(inputs: Logs_Copy_Line_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`行のリンクをコピー`)
};

/**
* | output |
* | --- |
* | "Copy line link" |
*
* @param {Logs_Copy_Line_LinkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_copy_line_link = /** @type {((inputs?: Logs_Copy_Line_LinkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Copy_Line_LinkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_copy_line_link(inputs)
	if (locale === "de") return de_logs_copy_line_link(inputs)
	if (locale === "fr") return fr_logs_copy_line_link(inputs)
	if (locale === "it") return it_logs_copy_line_link(inputs)
	if (locale === "nl") return nl_logs_copy_line_link(inputs)
	if (locale === "pl") return pl_logs_copy_line_link(inputs)
	if (locale === "pt") return pt_logs_copy_line_link(inputs)
	if (locale === "ru") return ru_logs_copy_line_link(inputs)
	if (locale === "sv") return sv_logs_copy_line_link(inputs)
	if (locale === "tr") return tr_logs_copy_line_link(inputs)
	if (locale === "zh") return zh_logs_copy_line_link(inputs)
	if (locale === "ja") return ja_logs_copy_line_link(inputs)
	return en_logs_copy_line_link(inputs)
});
