/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Action_MoreInputs */

const en_mod_action_more = /** @type {(inputs: Mod_Action_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`More actions`)
};

const es_mod_action_more = /** @type {(inputs: Mod_Action_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más acciones`)
};

const de_mod_action_more = /** @type {(inputs: Mod_Action_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weitere Aktionen`)
};

const fr_mod_action_more = /** @type {(inputs: Mod_Action_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plus d’actions`)
};

const it_mod_action_more = /** @type {(inputs: Mod_Action_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Altre azioni`)
};

const nl_mod_action_more = /** @type {(inputs: Mod_Action_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meer acties`)
};

const pl_mod_action_more = /** @type {(inputs: Mod_Action_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Więcej akcji`)
};

const pt_mod_action_more = /** @type {(inputs: Mod_Action_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais ações`)
};

const ru_mod_action_more = /** @type {(inputs: Mod_Action_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Другие действия`)
};

const sv_mod_action_more = /** @type {(inputs: Mod_Action_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fler åtgärder`)
};

const tr_mod_action_more = /** @type {(inputs: Mod_Action_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diğer eylemler`)
};

const zh_mod_action_more = /** @type {(inputs: Mod_Action_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更多操作`)
};

const ja_mod_action_more = /** @type {(inputs: Mod_Action_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`その他の操作`)
};

/**
* | output |
* | --- |
* | "More actions" |
*
* @param {Mod_Action_MoreInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_action_more = /** @type {((inputs?: Mod_Action_MoreInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Action_MoreInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_action_more(inputs)
	if (locale === "de") return de_mod_action_more(inputs)
	if (locale === "fr") return fr_mod_action_more(inputs)
	if (locale === "it") return it_mod_action_more(inputs)
	if (locale === "nl") return nl_mod_action_more(inputs)
	if (locale === "pl") return pl_mod_action_more(inputs)
	if (locale === "pt") return pt_mod_action_more(inputs)
	if (locale === "ru") return ru_mod_action_more(inputs)
	if (locale === "sv") return sv_mod_action_more(inputs)
	if (locale === "tr") return tr_mod_action_more(inputs)
	if (locale === "zh") return zh_mod_action_more(inputs)
	if (locale === "ja") return ja_mod_action_more(inputs)
	return en_mod_action_more(inputs)
});
