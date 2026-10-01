/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Copy_LinkInputs */

const en_logs_copy_link = /** @type {(inputs: Logs_Copy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copy link`)
};

const es_logs_copy_link = /** @type {(inputs: Logs_Copy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiar enlace`)
};

const de_logs_copy_link = /** @type {(inputs: Logs_Copy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link kopieren`)
};

const fr_logs_copy_link = /** @type {(inputs: Logs_Copy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copier le lien`)
};

const it_logs_copy_link = /** @type {(inputs: Logs_Copy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copia link`)
};

const nl_logs_copy_link = /** @type {(inputs: Logs_Copy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link kopiëren`)
};

const pl_logs_copy_link = /** @type {(inputs: Logs_Copy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiuj link`)
};

const pt_logs_copy_link = /** @type {(inputs: Logs_Copy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiar ligação`)
};

const ru_logs_copy_link = /** @type {(inputs: Logs_Copy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Копировать ссылку`)
};

const sv_logs_copy_link = /** @type {(inputs: Logs_Copy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiera länk`)
};

const tr_logs_copy_link = /** @type {(inputs: Logs_Copy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bağlantıyı kopyala`)
};

const zh_logs_copy_link = /** @type {(inputs: Logs_Copy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`复制链接`)
};

const ja_logs_copy_link = /** @type {(inputs: Logs_Copy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リンクをコピー`)
};

/**
* | output |
* | --- |
* | "Copy link" |
*
* @param {Logs_Copy_LinkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_copy_link = /** @type {((inputs?: Logs_Copy_LinkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Copy_LinkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_copy_link(inputs)
	if (locale === "de") return de_logs_copy_link(inputs)
	if (locale === "fr") return fr_logs_copy_link(inputs)
	if (locale === "it") return it_logs_copy_link(inputs)
	if (locale === "nl") return nl_logs_copy_link(inputs)
	if (locale === "pl") return pl_logs_copy_link(inputs)
	if (locale === "pt") return pt_logs_copy_link(inputs)
	if (locale === "ru") return ru_logs_copy_link(inputs)
	if (locale === "sv") return sv_logs_copy_link(inputs)
	if (locale === "tr") return tr_logs_copy_link(inputs)
	if (locale === "zh") return zh_logs_copy_link(inputs)
	if (locale === "ja") return ja_logs_copy_link(inputs)
	return en_logs_copy_link(inputs)
});
