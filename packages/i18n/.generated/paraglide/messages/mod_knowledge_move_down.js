/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Move_DownInputs */

const en_mod_knowledge_move_down = /** @type {(inputs: Mod_Knowledge_Move_DownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Move down`)
};

const es_mod_knowledge_move_down = /** @type {(inputs: Mod_Knowledge_Move_DownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bajar`)
};

const de_mod_knowledge_move_down = /** @type {(inputs: Mod_Knowledge_Move_DownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nach unten`)
};

const fr_mod_knowledge_move_down = /** @type {(inputs: Mod_Knowledge_Move_DownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descendre`)
};

const it_mod_knowledge_move_down = /** @type {(inputs: Mod_Knowledge_Move_DownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sposta giù`)
};

const nl_mod_knowledge_move_down = /** @type {(inputs: Mod_Knowledge_Move_DownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Omlaag`)
};

const pl_mod_knowledge_move_down = /** @type {(inputs: Mod_Knowledge_Move_DownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`W dół`)
};

const pt_mod_knowledge_move_down = /** @type {(inputs: Mod_Knowledge_Move_DownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mover para baixo`)
};

const ru_mod_knowledge_move_down = /** @type {(inputs: Mod_Knowledge_Move_DownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вниз`)
};

const sv_mod_knowledge_move_down = /** @type {(inputs: Mod_Knowledge_Move_DownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flytta ned`)
};

const tr_mod_knowledge_move_down = /** @type {(inputs: Mod_Knowledge_Move_DownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aşağı taşı`)
};

const zh_mod_knowledge_move_down = /** @type {(inputs: Mod_Knowledge_Move_DownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下移`)
};

const ja_mod_knowledge_move_down = /** @type {(inputs: Mod_Knowledge_Move_DownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下へ`)
};

/**
* | output |
* | --- |
* | "Move down" |
*
* @param {Mod_Knowledge_Move_DownInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_move_down = /** @type {((inputs?: Mod_Knowledge_Move_DownInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Move_DownInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_move_down(inputs)
	if (locale === "de") return de_mod_knowledge_move_down(inputs)
	if (locale === "fr") return fr_mod_knowledge_move_down(inputs)
	if (locale === "it") return it_mod_knowledge_move_down(inputs)
	if (locale === "nl") return nl_mod_knowledge_move_down(inputs)
	if (locale === "pl") return pl_mod_knowledge_move_down(inputs)
	if (locale === "pt") return pt_mod_knowledge_move_down(inputs)
	if (locale === "ru") return ru_mod_knowledge_move_down(inputs)
	if (locale === "sv") return sv_mod_knowledge_move_down(inputs)
	if (locale === "tr") return tr_mod_knowledge_move_down(inputs)
	if (locale === "zh") return zh_mod_knowledge_move_down(inputs)
	if (locale === "ja") return ja_mod_knowledge_move_down(inputs)
	return en_mod_knowledge_move_down(inputs)
});
