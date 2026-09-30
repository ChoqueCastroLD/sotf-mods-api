/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Act_MoreInputs */

const en_cmdk_act_more = /** @type {(inputs: Cmdk_Act_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`More actions`)
};

const es_cmdk_act_more = /** @type {(inputs: Cmdk_Act_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más acciones`)
};

const de_cmdk_act_more = /** @type {(inputs: Cmdk_Act_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weitere Aktionen`)
};

const fr_cmdk_act_more = /** @type {(inputs: Cmdk_Act_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plus d’actions`)
};

const it_cmdk_act_more = /** @type {(inputs: Cmdk_Act_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Altre azioni`)
};

const nl_cmdk_act_more = /** @type {(inputs: Cmdk_Act_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meer acties`)
};

const pl_cmdk_act_more = /** @type {(inputs: Cmdk_Act_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Więcej działań`)
};

const pt_cmdk_act_more = /** @type {(inputs: Cmdk_Act_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais ações`)
};

const ru_cmdk_act_more = /** @type {(inputs: Cmdk_Act_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Другие действия`)
};

const sv_cmdk_act_more = /** @type {(inputs: Cmdk_Act_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fler åtgärder`)
};

const tr_cmdk_act_more = /** @type {(inputs: Cmdk_Act_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diğer eylemler`)
};

const zh_cmdk_act_more = /** @type {(inputs: Cmdk_Act_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更多操作`)
};

const ja_cmdk_act_more = /** @type {(inputs: Cmdk_Act_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`その他の操作`)
};

/**
* | output |
* | --- |
* | "More actions" |
*
* @param {Cmdk_Act_MoreInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_act_more = /** @type {((inputs?: Cmdk_Act_MoreInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Act_MoreInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_act_more(inputs)
	if (locale === "de") return de_cmdk_act_more(inputs)
	if (locale === "fr") return fr_cmdk_act_more(inputs)
	if (locale === "it") return it_cmdk_act_more(inputs)
	if (locale === "nl") return nl_cmdk_act_more(inputs)
	if (locale === "pl") return pl_cmdk_act_more(inputs)
	if (locale === "pt") return pt_cmdk_act_more(inputs)
	if (locale === "ru") return ru_cmdk_act_more(inputs)
	if (locale === "sv") return sv_cmdk_act_more(inputs)
	if (locale === "tr") return tr_cmdk_act_more(inputs)
	if (locale === "zh") return zh_cmdk_act_more(inputs)
	if (locale === "ja") return ja_cmdk_act_more(inputs)
	return en_cmdk_act_more(inputs)
});
