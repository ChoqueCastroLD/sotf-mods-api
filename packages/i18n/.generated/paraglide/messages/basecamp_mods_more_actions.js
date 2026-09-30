/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Basecamp_Mods_More_ActionsInputs */

const en_basecamp_mods_more_actions = /** @type {(inputs: Basecamp_Mods_More_ActionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`More actions for ${i?.name}`)
};

const es_basecamp_mods_more_actions = /** @type {(inputs: Basecamp_Mods_More_ActionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Más acciones de ${i?.name}`)
};

const de_basecamp_mods_more_actions = /** @type {(inputs: Basecamp_Mods_More_ActionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Weitere Aktionen für ${i?.name}`)
};

const fr_basecamp_mods_more_actions = /** @type {(inputs: Basecamp_Mods_More_ActionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Plus d’actions pour ${i?.name}`)
};

const it_basecamp_mods_more_actions = /** @type {(inputs: Basecamp_Mods_More_ActionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Altre azioni per ${i?.name}`)
};

const nl_basecamp_mods_more_actions = /** @type {(inputs: Basecamp_Mods_More_ActionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Meer acties voor ${i?.name}`)
};

const pl_basecamp_mods_more_actions = /** @type {(inputs: Basecamp_Mods_More_ActionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Więcej działań: ${i?.name}`)
};

const pt_basecamp_mods_more_actions = /** @type {(inputs: Basecamp_Mods_More_ActionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mais ações para ${i?.name}`)
};

const ru_basecamp_mods_more_actions = /** @type {(inputs: Basecamp_Mods_More_ActionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Другие действия с ${i?.name}`)
};

const sv_basecamp_mods_more_actions = /** @type {(inputs: Basecamp_Mods_More_ActionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Fler åtgärder för ${i?.name}`)
};

const tr_basecamp_mods_more_actions = /** @type {(inputs: Basecamp_Mods_More_ActionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} için diğer işlemler`)
};

const zh_basecamp_mods_more_actions = /** @type {(inputs: Basecamp_Mods_More_ActionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 的更多操作`)
};

const ja_basecamp_mods_more_actions = /** @type {(inputs: Basecamp_Mods_More_ActionsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} のその他の操作`)
};

/**
* | output |
* | --- |
* | "More actions for {name}" |
*
* @param {Basecamp_Mods_More_ActionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_mods_more_actions = /** @type {((inputs: Basecamp_Mods_More_ActionsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Mods_More_ActionsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_mods_more_actions(inputs)
	if (locale === "de") return de_basecamp_mods_more_actions(inputs)
	if (locale === "fr") return fr_basecamp_mods_more_actions(inputs)
	if (locale === "it") return it_basecamp_mods_more_actions(inputs)
	if (locale === "nl") return nl_basecamp_mods_more_actions(inputs)
	if (locale === "pl") return pl_basecamp_mods_more_actions(inputs)
	if (locale === "pt") return pt_basecamp_mods_more_actions(inputs)
	if (locale === "ru") return ru_basecamp_mods_more_actions(inputs)
	if (locale === "sv") return sv_basecamp_mods_more_actions(inputs)
	if (locale === "tr") return tr_basecamp_mods_more_actions(inputs)
	if (locale === "zh") return zh_basecamp_mods_more_actions(inputs)
	if (locale === "ja") return ja_basecamp_mods_more_actions(inputs)
	return en_basecamp_mods_more_actions(inputs)
});
