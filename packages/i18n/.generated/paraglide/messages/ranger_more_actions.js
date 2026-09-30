/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_More_ActionsInputs */

const en_ranger_more_actions = /** @type {(inputs: Ranger_More_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`More actions`)
};

const es_ranger_more_actions = /** @type {(inputs: Ranger_More_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más acciones`)
};

const de_ranger_more_actions = /** @type {(inputs: Ranger_More_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weitere Aktionen`)
};

const fr_ranger_more_actions = /** @type {(inputs: Ranger_More_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plus d’actions`)
};

const it_ranger_more_actions = /** @type {(inputs: Ranger_More_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Altre azioni`)
};

const nl_ranger_more_actions = /** @type {(inputs: Ranger_More_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meer acties`)
};

const pl_ranger_more_actions = /** @type {(inputs: Ranger_More_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Więcej działań`)
};

const pt_ranger_more_actions = /** @type {(inputs: Ranger_More_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais ações`)
};

const ru_ranger_more_actions = /** @type {(inputs: Ranger_More_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Другие действия`)
};

const sv_ranger_more_actions = /** @type {(inputs: Ranger_More_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fler åtgärder`)
};

const tr_ranger_more_actions = /** @type {(inputs: Ranger_More_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diğer işlemler`)
};

const zh_ranger_more_actions = /** @type {(inputs: Ranger_More_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更多操作`)
};

const ja_ranger_more_actions = /** @type {(inputs: Ranger_More_ActionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`その他の操作`)
};

/**
* | output |
* | --- |
* | "More actions" |
*
* @param {Ranger_More_ActionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_more_actions = /** @type {((inputs?: Ranger_More_ActionsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_More_ActionsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_more_actions(inputs)
	if (locale === "de") return de_ranger_more_actions(inputs)
	if (locale === "fr") return fr_ranger_more_actions(inputs)
	if (locale === "it") return it_ranger_more_actions(inputs)
	if (locale === "nl") return nl_ranger_more_actions(inputs)
	if (locale === "pl") return pl_ranger_more_actions(inputs)
	if (locale === "pt") return pt_ranger_more_actions(inputs)
	if (locale === "ru") return ru_ranger_more_actions(inputs)
	if (locale === "sv") return sv_ranger_more_actions(inputs)
	if (locale === "tr") return tr_ranger_more_actions(inputs)
	if (locale === "zh") return zh_ranger_more_actions(inputs)
	if (locale === "ja") return ja_ranger_more_actions(inputs)
	return en_ranger_more_actions(inputs)
});
