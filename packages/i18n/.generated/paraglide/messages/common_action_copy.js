/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Action_CopyInputs */

const en_common_action_copy = /** @type {(inputs: Common_Action_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copy`)
};

const es_common_action_copy = /** @type {(inputs: Common_Action_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiar`)
};

const de_common_action_copy = /** @type {(inputs: Common_Action_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopieren`)
};

const fr_common_action_copy = /** @type {(inputs: Common_Action_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copier`)
};

const it_common_action_copy = /** @type {(inputs: Common_Action_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copia`)
};

const nl_common_action_copy = /** @type {(inputs: Common_Action_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiëren`)
};

const pl_common_action_copy = /** @type {(inputs: Common_Action_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiuj`)
};

const pt_common_action_copy = /** @type {(inputs: Common_Action_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiar`)
};

const ru_common_action_copy = /** @type {(inputs: Common_Action_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Копировать`)
};

const sv_common_action_copy = /** @type {(inputs: Common_Action_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiera`)
};

const tr_common_action_copy = /** @type {(inputs: Common_Action_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopyala`)
};

const zh_common_action_copy = /** @type {(inputs: Common_Action_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`复制`)
};

const ja_common_action_copy = /** @type {(inputs: Common_Action_CopyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コピー`)
};

/**
* | output |
* | --- |
* | "Copy" |
*
* @param {Common_Action_CopyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_action_copy = /** @type {((inputs?: Common_Action_CopyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Action_CopyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_action_copy(inputs)
	if (locale === "de") return de_common_action_copy(inputs)
	if (locale === "fr") return fr_common_action_copy(inputs)
	if (locale === "it") return it_common_action_copy(inputs)
	if (locale === "nl") return nl_common_action_copy(inputs)
	if (locale === "pl") return pl_common_action_copy(inputs)
	if (locale === "pt") return pt_common_action_copy(inputs)
	if (locale === "ru") return ru_common_action_copy(inputs)
	if (locale === "sv") return sv_common_action_copy(inputs)
	if (locale === "tr") return tr_common_action_copy(inputs)
	if (locale === "zh") return zh_common_action_copy(inputs)
	if (locale === "ja") return ja_common_action_copy(inputs)
	return en_common_action_copy(inputs)
});
