/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Action_CopiedInputs */

const en_common_action_copied = /** @type {(inputs: Common_Action_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copied`)
};

const es_common_action_copied = /** @type {(inputs: Common_Action_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiado`)
};

const de_common_action_copied = /** @type {(inputs: Common_Action_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiert`)
};

const fr_common_action_copied = /** @type {(inputs: Common_Action_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copié`)
};

const it_common_action_copied = /** @type {(inputs: Common_Action_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiato`)
};

const nl_common_action_copied = /** @type {(inputs: Common_Action_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gekopieerd`)
};

const pl_common_action_copied = /** @type {(inputs: Common_Action_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skopiowano`)
};

const pt_common_action_copied = /** @type {(inputs: Common_Action_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiado`)
};

const ru_common_action_copied = /** @type {(inputs: Common_Action_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скопировано`)
};

const sv_common_action_copied = /** @type {(inputs: Common_Action_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopierat`)
};

const tr_common_action_copied = /** @type {(inputs: Common_Action_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopyalandı`)
};

const zh_common_action_copied = /** @type {(inputs: Common_Action_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已复制`)
};

const ja_common_action_copied = /** @type {(inputs: Common_Action_CopiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コピーしました`)
};

/**
* | output |
* | --- |
* | "Copied" |
*
* @param {Common_Action_CopiedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_action_copied = /** @type {((inputs?: Common_Action_CopiedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Action_CopiedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_action_copied(inputs)
	if (locale === "de") return de_common_action_copied(inputs)
	if (locale === "fr") return fr_common_action_copied(inputs)
	if (locale === "it") return it_common_action_copied(inputs)
	if (locale === "nl") return nl_common_action_copied(inputs)
	if (locale === "pl") return pl_common_action_copied(inputs)
	if (locale === "pt") return pt_common_action_copied(inputs)
	if (locale === "ru") return ru_common_action_copied(inputs)
	if (locale === "sv") return sv_common_action_copied(inputs)
	if (locale === "tr") return tr_common_action_copied(inputs)
	if (locale === "zh") return zh_common_action_copied(inputs)
	if (locale === "ja") return ja_common_action_copied(inputs)
	return en_common_action_copied(inputs)
});
