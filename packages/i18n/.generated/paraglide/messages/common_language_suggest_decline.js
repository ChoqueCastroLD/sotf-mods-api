/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Language_Suggest_DeclineInputs */

const en_common_language_suggest_decline = /** @type {(inputs: Common_Language_Suggest_DeclineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No, thanks`)
};

const es_common_language_suggest_decline = /** @type {(inputs: Common_Language_Suggest_DeclineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No, gracias`)
};

const de_common_language_suggest_decline = /** @type {(inputs: Common_Language_Suggest_DeclineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nein, danke`)
};

const fr_common_language_suggest_decline = /** @type {(inputs: Common_Language_Suggest_DeclineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non merci`)
};

const it_common_language_suggest_decline = /** @type {(inputs: Common_Language_Suggest_DeclineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No, grazie`)
};

const nl_common_language_suggest_decline = /** @type {(inputs: Common_Language_Suggest_DeclineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nee, bedankt`)
};

const pl_common_language_suggest_decline = /** @type {(inputs: Common_Language_Suggest_DeclineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie, dziękuję`)
};

const pt_common_language_suggest_decline = /** @type {(inputs: Common_Language_Suggest_DeclineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não, obrigado`)
};

const ru_common_language_suggest_decline = /** @type {(inputs: Common_Language_Suggest_DeclineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет, спасибо`)
};

const sv_common_language_suggest_decline = /** @type {(inputs: Common_Language_Suggest_DeclineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nej tack`)
};

const tr_common_language_suggest_decline = /** @type {(inputs: Common_Language_Suggest_DeclineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hayır, teşekkürler`)
};

const zh_common_language_suggest_decline = /** @type {(inputs: Common_Language_Suggest_DeclineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不用了，谢谢`)
};

const ja_common_language_suggest_decline = /** @type {(inputs: Common_Language_Suggest_DeclineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`いいえ`)
};

/**
* | output |
* | --- |
* | "No, thanks" |
*
* @param {Common_Language_Suggest_DeclineInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_language_suggest_decline = /** @type {((inputs?: Common_Language_Suggest_DeclineInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Language_Suggest_DeclineInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_language_suggest_decline(inputs)
	if (locale === "de") return de_common_language_suggest_decline(inputs)
	if (locale === "fr") return fr_common_language_suggest_decline(inputs)
	if (locale === "it") return it_common_language_suggest_decline(inputs)
	if (locale === "nl") return nl_common_language_suggest_decline(inputs)
	if (locale === "pl") return pl_common_language_suggest_decline(inputs)
	if (locale === "pt") return pt_common_language_suggest_decline(inputs)
	if (locale === "ru") return ru_common_language_suggest_decline(inputs)
	if (locale === "sv") return sv_common_language_suggest_decline(inputs)
	if (locale === "tr") return tr_common_language_suggest_decline(inputs)
	if (locale === "zh") return zh_common_language_suggest_decline(inputs)
	if (locale === "ja") return ja_common_language_suggest_decline(inputs)
	return en_common_language_suggest_decline(inputs)
});
