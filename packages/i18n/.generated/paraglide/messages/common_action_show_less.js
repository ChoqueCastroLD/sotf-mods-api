/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Action_Show_LessInputs */

const en_common_action_show_less = /** @type {(inputs: Common_Action_Show_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show less`)
};

const es_common_action_show_less = /** @type {(inputs: Common_Action_Show_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver menos`)
};

const de_common_action_show_less = /** @type {(inputs: Common_Action_Show_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weniger anzeigen`)
};

const fr_common_action_show_less = /** @type {(inputs: Common_Action_Show_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afficher moins`)
};

const it_common_action_show_less = /** @type {(inputs: Common_Action_Show_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostra meno`)
};

const nl_common_action_show_less = /** @type {(inputs: Common_Action_Show_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Minder tonen`)
};

const pl_common_action_show_less = /** @type {(inputs: Common_Action_Show_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pokaż mniej`)
};

const pt_common_action_show_less = /** @type {(inputs: Common_Action_Show_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostrar menos`)
};

const ru_common_action_show_less = /** @type {(inputs: Common_Action_Show_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Показать меньше`)
};

const sv_common_action_show_less = /** @type {(inputs: Common_Action_Show_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa mindre`)
};

const tr_common_action_show_less = /** @type {(inputs: Common_Action_Show_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Daha az göster`)
};

const zh_common_action_show_less = /** @type {(inputs: Common_Action_Show_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`收起`)
};

const ja_common_action_show_less = /** @type {(inputs: Common_Action_Show_LessInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`閉じる`)
};

/**
* | output |
* | --- |
* | "Show less" |
*
* @param {Common_Action_Show_LessInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_action_show_less = /** @type {((inputs?: Common_Action_Show_LessInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Action_Show_LessInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_action_show_less(inputs)
	if (locale === "de") return de_common_action_show_less(inputs)
	if (locale === "fr") return fr_common_action_show_less(inputs)
	if (locale === "it") return it_common_action_show_less(inputs)
	if (locale === "nl") return nl_common_action_show_less(inputs)
	if (locale === "pl") return pl_common_action_show_less(inputs)
	if (locale === "pt") return pt_common_action_show_less(inputs)
	if (locale === "ru") return ru_common_action_show_less(inputs)
	if (locale === "sv") return sv_common_action_show_less(inputs)
	if (locale === "tr") return tr_common_action_show_less(inputs)
	if (locale === "zh") return zh_common_action_show_less(inputs)
	if (locale === "ja") return ja_common_action_show_less(inputs)
	return en_common_action_show_less(inputs)
});
