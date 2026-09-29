/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Action_Show_MoreInputs */

const en_common_action_show_more = /** @type {(inputs: Common_Action_Show_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show more`)
};

const es_common_action_show_more = /** @type {(inputs: Common_Action_Show_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver más`)
};

const de_common_action_show_more = /** @type {(inputs: Common_Action_Show_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mehr anzeigen`)
};

const fr_common_action_show_more = /** @type {(inputs: Common_Action_Show_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afficher plus`)
};

const it_common_action_show_more = /** @type {(inputs: Common_Action_Show_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostra di più`)
};

const nl_common_action_show_more = /** @type {(inputs: Common_Action_Show_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meer tonen`)
};

const pl_common_action_show_more = /** @type {(inputs: Common_Action_Show_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pokaż więcej`)
};

const pt_common_action_show_more = /** @type {(inputs: Common_Action_Show_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostrar mais`)
};

const ru_common_action_show_more = /** @type {(inputs: Common_Action_Show_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Показать больше`)
};

const sv_common_action_show_more = /** @type {(inputs: Common_Action_Show_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa mer`)
};

const tr_common_action_show_more = /** @type {(inputs: Common_Action_Show_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Daha fazla göster`)
};

const zh_common_action_show_more = /** @type {(inputs: Common_Action_Show_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`显示更多`)
};

const ja_common_action_show_more = /** @type {(inputs: Common_Action_Show_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`もっと見る`)
};

/**
* | output |
* | --- |
* | "Show more" |
*
* @param {Common_Action_Show_MoreInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_action_show_more = /** @type {((inputs?: Common_Action_Show_MoreInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Action_Show_MoreInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_action_show_more(inputs)
	if (locale === "de") return de_common_action_show_more(inputs)
	if (locale === "fr") return fr_common_action_show_more(inputs)
	if (locale === "it") return it_common_action_show_more(inputs)
	if (locale === "nl") return nl_common_action_show_more(inputs)
	if (locale === "pl") return pl_common_action_show_more(inputs)
	if (locale === "pt") return pt_common_action_show_more(inputs)
	if (locale === "ru") return ru_common_action_show_more(inputs)
	if (locale === "sv") return sv_common_action_show_more(inputs)
	if (locale === "tr") return tr_common_action_show_more(inputs)
	if (locale === "zh") return zh_common_action_show_more(inputs)
	if (locale === "ja") return ja_common_action_show_more(inputs)
	return en_common_action_show_more(inputs)
});
