/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Act_Copy_IdInputs */

const en_cmdk_act_copy_id = /** @type {(inputs: Cmdk_Act_Copy_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copy mod ID`)
};

const es_cmdk_act_copy_id = /** @type {(inputs: Cmdk_Act_Copy_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiar ID del mod`)
};

const de_cmdk_act_copy_id = /** @type {(inputs: Cmdk_Act_Copy_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod-ID kopieren`)
};

const fr_cmdk_act_copy_id = /** @type {(inputs: Cmdk_Act_Copy_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copier l’ID du mod`)
};

const it_cmdk_act_copy_id = /** @type {(inputs: Cmdk_Act_Copy_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copia ID della mod`)
};

const nl_cmdk_act_copy_id = /** @type {(inputs: Cmdk_Act_Copy_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod-ID kopiëren`)
};

const pl_cmdk_act_copy_id = /** @type {(inputs: Cmdk_Act_Copy_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiuj ID modyfikacji`)
};

const pt_cmdk_act_copy_id = /** @type {(inputs: Cmdk_Act_Copy_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiar ID do mod`)
};

const ru_cmdk_act_copy_id = /** @type {(inputs: Cmdk_Act_Copy_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Копировать ID мода`)
};

const sv_cmdk_act_copy_id = /** @type {(inputs: Cmdk_Act_Copy_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiera mod-ID`)
};

const tr_cmdk_act_copy_id = /** @type {(inputs: Cmdk_Act_Copy_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod kimliğini kopyala`)
};

const zh_cmdk_act_copy_id = /** @type {(inputs: Cmdk_Act_Copy_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`复制模组 ID`)
};

const ja_cmdk_act_copy_id = /** @type {(inputs: Cmdk_Act_Copy_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod ID をコピー`)
};

/**
* | output |
* | --- |
* | "Copy mod ID" |
*
* @param {Cmdk_Act_Copy_IdInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_act_copy_id = /** @type {((inputs?: Cmdk_Act_Copy_IdInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Act_Copy_IdInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_act_copy_id(inputs)
	if (locale === "de") return de_cmdk_act_copy_id(inputs)
	if (locale === "fr") return fr_cmdk_act_copy_id(inputs)
	if (locale === "it") return it_cmdk_act_copy_id(inputs)
	if (locale === "nl") return nl_cmdk_act_copy_id(inputs)
	if (locale === "pl") return pl_cmdk_act_copy_id(inputs)
	if (locale === "pt") return pt_cmdk_act_copy_id(inputs)
	if (locale === "ru") return ru_cmdk_act_copy_id(inputs)
	if (locale === "sv") return sv_cmdk_act_copy_id(inputs)
	if (locale === "tr") return tr_cmdk_act_copy_id(inputs)
	if (locale === "zh") return zh_cmdk_act_copy_id(inputs)
	if (locale === "ja") return ja_cmdk_act_copy_id(inputs)
	return en_cmdk_act_copy_id(inputs)
});
