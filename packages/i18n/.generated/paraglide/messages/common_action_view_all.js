/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Action_View_AllInputs */

const en_common_action_view_all = /** @type {(inputs: Common_Action_View_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`View all`)
};

const es_common_action_view_all = /** @type {(inputs: Common_Action_View_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver todo`)
};

const de_common_action_view_all = /** @type {(inputs: Common_Action_View_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle anzeigen`)
};

const fr_common_action_view_all = /** @type {(inputs: Common_Action_View_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tout voir`)
};

const it_common_action_view_all = /** @type {(inputs: Common_Action_View_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vedi tutto`)
};

const nl_common_action_view_all = /** @type {(inputs: Common_Action_View_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles bekijken`)
};

const pl_common_action_view_all = /** @type {(inputs: Common_Action_View_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zobacz wszystko`)
};

const pt_common_action_view_all = /** @type {(inputs: Common_Action_View_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver tudo`)
};

const ru_common_action_view_all = /** @type {(inputs: Common_Action_View_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Смотреть все`)
};

const sv_common_action_view_all = /** @type {(inputs: Common_Action_View_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa alla`)
};

const tr_common_action_view_all = /** @type {(inputs: Common_Action_View_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tümünü gör`)
};

const zh_common_action_view_all = /** @type {(inputs: Common_Action_View_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`查看全部`)
};

const ja_common_action_view_all = /** @type {(inputs: Common_Action_View_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべて見る`)
};

/**
* | output |
* | --- |
* | "View all" |
*
* @param {Common_Action_View_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_action_view_all = /** @type {((inputs?: Common_Action_View_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Action_View_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_action_view_all(inputs)
	if (locale === "de") return de_common_action_view_all(inputs)
	if (locale === "fr") return fr_common_action_view_all(inputs)
	if (locale === "it") return it_common_action_view_all(inputs)
	if (locale === "nl") return nl_common_action_view_all(inputs)
	if (locale === "pl") return pl_common_action_view_all(inputs)
	if (locale === "pt") return pt_common_action_view_all(inputs)
	if (locale === "ru") return ru_common_action_view_all(inputs)
	if (locale === "sv") return sv_common_action_view_all(inputs)
	if (locale === "tr") return tr_common_action_view_all(inputs)
	if (locale === "zh") return zh_common_action_view_all(inputs)
	if (locale === "ja") return ja_common_action_view_all(inputs)
	return en_common_action_view_all(inputs)
});
