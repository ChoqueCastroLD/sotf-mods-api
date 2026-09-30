/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Move_UpInputs */

const en_mod_knowledge_move_up = /** @type {(inputs: Mod_Knowledge_Move_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Move up`)
};

const es_mod_knowledge_move_up = /** @type {(inputs: Mod_Knowledge_Move_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Subir`)
};

const de_mod_knowledge_move_up = /** @type {(inputs: Mod_Knowledge_Move_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nach oben`)
};

const fr_mod_knowledge_move_up = /** @type {(inputs: Mod_Knowledge_Move_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Monter`)
};

const it_mod_knowledge_move_up = /** @type {(inputs: Mod_Knowledge_Move_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sposta su`)
};

const nl_mod_knowledge_move_up = /** @type {(inputs: Mod_Knowledge_Move_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Omhoog`)
};

const pl_mod_knowledge_move_up = /** @type {(inputs: Mod_Knowledge_Move_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`W górę`)
};

const pt_mod_knowledge_move_up = /** @type {(inputs: Mod_Knowledge_Move_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mover para cima`)
};

const ru_mod_knowledge_move_up = /** @type {(inputs: Mod_Knowledge_Move_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вверх`)
};

const sv_mod_knowledge_move_up = /** @type {(inputs: Mod_Knowledge_Move_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flytta upp`)
};

const tr_mod_knowledge_move_up = /** @type {(inputs: Mod_Knowledge_Move_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yukarı taşı`)
};

const zh_mod_knowledge_move_up = /** @type {(inputs: Mod_Knowledge_Move_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上移`)
};

const ja_mod_knowledge_move_up = /** @type {(inputs: Mod_Knowledge_Move_UpInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上へ`)
};

/**
* | output |
* | --- |
* | "Move up" |
*
* @param {Mod_Knowledge_Move_UpInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_move_up = /** @type {((inputs?: Mod_Knowledge_Move_UpInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Move_UpInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_move_up(inputs)
	if (locale === "de") return de_mod_knowledge_move_up(inputs)
	if (locale === "fr") return fr_mod_knowledge_move_up(inputs)
	if (locale === "it") return it_mod_knowledge_move_up(inputs)
	if (locale === "nl") return nl_mod_knowledge_move_up(inputs)
	if (locale === "pl") return pl_mod_knowledge_move_up(inputs)
	if (locale === "pt") return pt_mod_knowledge_move_up(inputs)
	if (locale === "ru") return ru_mod_knowledge_move_up(inputs)
	if (locale === "sv") return sv_mod_knowledge_move_up(inputs)
	if (locale === "tr") return tr_mod_knowledge_move_up(inputs)
	if (locale === "zh") return zh_mod_knowledge_move_up(inputs)
	if (locale === "ja") return ja_mod_knowledge_move_up(inputs)
	return en_mod_knowledge_move_up(inputs)
});
