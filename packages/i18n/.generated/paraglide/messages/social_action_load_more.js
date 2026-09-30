/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Action_Load_MoreInputs */

const en_social_action_load_more = /** @type {(inputs: Social_Action_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Load more`)
};

const es_social_action_load_more = /** @type {(inputs: Social_Action_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cargar más`)
};

const de_social_action_load_more = /** @type {(inputs: Social_Action_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mehr laden`)
};

const fr_social_action_load_more = /** @type {(inputs: Social_Action_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Charger plus`)
};

const it_social_action_load_more = /** @type {(inputs: Social_Action_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carica altri`)
};

const nl_social_action_load_more = /** @type {(inputs: Social_Action_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meer laden`)
};

const pl_social_action_load_more = /** @type {(inputs: Social_Action_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wczytaj więcej`)
};

const pt_social_action_load_more = /** @type {(inputs: Social_Action_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carregar mais`)
};

const ru_social_action_load_more = /** @type {(inputs: Social_Action_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузить ещё`)
};

const sv_social_action_load_more = /** @type {(inputs: Social_Action_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ladda fler`)
};

const tr_social_action_load_more = /** @type {(inputs: Social_Action_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Daha fazla yükle`)
};

const zh_social_action_load_more = /** @type {(inputs: Social_Action_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`加载更多`)
};

const ja_social_action_load_more = /** @type {(inputs: Social_Action_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`さらに読み込む`)
};

/**
* | output |
* | --- |
* | "Load more" |
*
* @param {Social_Action_Load_MoreInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_action_load_more = /** @type {((inputs?: Social_Action_Load_MoreInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Action_Load_MoreInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_action_load_more(inputs)
	if (locale === "de") return de_social_action_load_more(inputs)
	if (locale === "fr") return fr_social_action_load_more(inputs)
	if (locale === "it") return it_social_action_load_more(inputs)
	if (locale === "nl") return nl_social_action_load_more(inputs)
	if (locale === "pl") return pl_social_action_load_more(inputs)
	if (locale === "pt") return pt_social_action_load_more(inputs)
	if (locale === "ru") return ru_social_action_load_more(inputs)
	if (locale === "sv") return sv_social_action_load_more(inputs)
	if (locale === "tr") return tr_social_action_load_more(inputs)
	if (locale === "zh") return zh_social_action_load_more(inputs)
	if (locale === "ja") return ja_social_action_load_more(inputs)
	return en_social_action_load_more(inputs)
});
