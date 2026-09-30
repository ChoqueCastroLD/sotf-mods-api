/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Act_Copy_LinkInputs */

const en_cmdk_act_copy_link = /** @type {(inputs: Cmdk_Act_Copy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copy link`)
};

const es_cmdk_act_copy_link = /** @type {(inputs: Cmdk_Act_Copy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiar enlace`)
};

const de_cmdk_act_copy_link = /** @type {(inputs: Cmdk_Act_Copy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link kopieren`)
};

const fr_cmdk_act_copy_link = /** @type {(inputs: Cmdk_Act_Copy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copier le lien`)
};

const it_cmdk_act_copy_link = /** @type {(inputs: Cmdk_Act_Copy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copia link`)
};

const nl_cmdk_act_copy_link = /** @type {(inputs: Cmdk_Act_Copy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link kopiëren`)
};

const pl_cmdk_act_copy_link = /** @type {(inputs: Cmdk_Act_Copy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiuj link`)
};

const pt_cmdk_act_copy_link = /** @type {(inputs: Cmdk_Act_Copy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiar ligação`)
};

const ru_cmdk_act_copy_link = /** @type {(inputs: Cmdk_Act_Copy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Копировать ссылку`)
};

const sv_cmdk_act_copy_link = /** @type {(inputs: Cmdk_Act_Copy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiera länk`)
};

const tr_cmdk_act_copy_link = /** @type {(inputs: Cmdk_Act_Copy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bağlantıyı kopyala`)
};

const zh_cmdk_act_copy_link = /** @type {(inputs: Cmdk_Act_Copy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`复制链接`)
};

const ja_cmdk_act_copy_link = /** @type {(inputs: Cmdk_Act_Copy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リンクをコピー`)
};

/**
* | output |
* | --- |
* | "Copy link" |
*
* @param {Cmdk_Act_Copy_LinkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_act_copy_link = /** @type {((inputs?: Cmdk_Act_Copy_LinkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Act_Copy_LinkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_act_copy_link(inputs)
	if (locale === "de") return de_cmdk_act_copy_link(inputs)
	if (locale === "fr") return fr_cmdk_act_copy_link(inputs)
	if (locale === "it") return it_cmdk_act_copy_link(inputs)
	if (locale === "nl") return nl_cmdk_act_copy_link(inputs)
	if (locale === "pl") return pl_cmdk_act_copy_link(inputs)
	if (locale === "pt") return pt_cmdk_act_copy_link(inputs)
	if (locale === "ru") return ru_cmdk_act_copy_link(inputs)
	if (locale === "sv") return sv_cmdk_act_copy_link(inputs)
	if (locale === "tr") return tr_cmdk_act_copy_link(inputs)
	if (locale === "zh") return zh_cmdk_act_copy_link(inputs)
	if (locale === "ja") return ja_cmdk_act_copy_link(inputs)
	return en_cmdk_act_copy_link(inputs)
});
