/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Action_Load_MoreInputs */

const en_common_action_load_more = /** @type {(inputs: Common_Action_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Load more`)
};

const es_common_action_load_more = /** @type {(inputs: Common_Action_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cargar más`)
};

const de_common_action_load_more = /** @type {(inputs: Common_Action_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mehr laden`)
};

const fr_common_action_load_more = /** @type {(inputs: Common_Action_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Charger plus`)
};

const it_common_action_load_more = /** @type {(inputs: Common_Action_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carica altri`)
};

const nl_common_action_load_more = /** @type {(inputs: Common_Action_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meer laden`)
};

const pl_common_action_load_more = /** @type {(inputs: Common_Action_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wczytaj więcej`)
};

const pt_common_action_load_more = /** @type {(inputs: Common_Action_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carregar mais`)
};

const ru_common_action_load_more = /** @type {(inputs: Common_Action_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузить ещё`)
};

const sv_common_action_load_more = /** @type {(inputs: Common_Action_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ladda fler`)
};

const tr_common_action_load_more = /** @type {(inputs: Common_Action_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Daha fazla yükle`)
};

const zh_common_action_load_more = /** @type {(inputs: Common_Action_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`加载更多`)
};

const ja_common_action_load_more = /** @type {(inputs: Common_Action_Load_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`さらに読み込む`)
};

/**
* | output |
* | --- |
* | "Load more" |
*
* @param {Common_Action_Load_MoreInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_action_load_more = /** @type {((inputs?: Common_Action_Load_MoreInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Action_Load_MoreInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_action_load_more(inputs)
	if (locale === "de") return de_common_action_load_more(inputs)
	if (locale === "fr") return fr_common_action_load_more(inputs)
	if (locale === "it") return it_common_action_load_more(inputs)
	if (locale === "nl") return nl_common_action_load_more(inputs)
	if (locale === "pl") return pl_common_action_load_more(inputs)
	if (locale === "pt") return pt_common_action_load_more(inputs)
	if (locale === "ru") return ru_common_action_load_more(inputs)
	if (locale === "sv") return sv_common_action_load_more(inputs)
	if (locale === "tr") return tr_common_action_load_more(inputs)
	if (locale === "zh") return zh_common_action_load_more(inputs)
	if (locale === "ja") return ja_common_action_load_more(inputs)
	return en_common_action_load_more(inputs)
});
