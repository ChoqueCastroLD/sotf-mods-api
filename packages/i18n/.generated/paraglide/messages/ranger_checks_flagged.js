/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Checks_FlaggedInputs */

const en_ranger_checks_flagged = /** @type {(inputs: Ranger_Checks_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flagged for review`)
};

const es_ranger_checks_flagged = /** @type {(inputs: Ranger_Checks_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marcado para revisión`)
};

const de_ranger_checks_flagged = /** @type {(inputs: Ranger_Checks_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zur Prüfung markiert`)
};

const fr_ranger_checks_flagged = /** @type {(inputs: Ranger_Checks_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signalé pour revue`)
};

const it_ranger_checks_flagged = /** @type {(inputs: Ranger_Checks_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segnalato per la revisione`)
};

const nl_ranger_checks_flagged = /** @type {(inputs: Ranger_Checks_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gemarkeerd voor controle`)
};

const pl_ranger_checks_flagged = /** @type {(inputs: Ranger_Checks_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oznaczone do przeglądu`)
};

const pt_ranger_checks_flagged = /** @type {(inputs: Ranger_Checks_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marcado para revisão`)
};

const ru_ranger_checks_flagged = /** @type {(inputs: Ranger_Checks_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отмечено для проверки`)
};

const sv_ranger_checks_flagged = /** @type {(inputs: Ranger_Checks_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flaggat för granskning`)
};

const tr_ranger_checks_flagged = /** @type {(inputs: Ranger_Checks_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İncelemeye işaretlendi`)
};

const zh_ranger_checks_flagged = /** @type {(inputs: Ranger_Checks_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已标记待审`)
};

const ja_ranger_checks_flagged = /** @type {(inputs: Ranger_Checks_FlaggedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レビュー対象としてフラグ`)
};

/**
* | output |
* | --- |
* | "Flagged for review" |
*
* @param {Ranger_Checks_FlaggedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_checks_flagged = /** @type {((inputs?: Ranger_Checks_FlaggedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Checks_FlaggedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_checks_flagged(inputs)
	if (locale === "de") return de_ranger_checks_flagged(inputs)
	if (locale === "fr") return fr_ranger_checks_flagged(inputs)
	if (locale === "it") return it_ranger_checks_flagged(inputs)
	if (locale === "nl") return nl_ranger_checks_flagged(inputs)
	if (locale === "pl") return pl_ranger_checks_flagged(inputs)
	if (locale === "pt") return pt_ranger_checks_flagged(inputs)
	if (locale === "ru") return ru_ranger_checks_flagged(inputs)
	if (locale === "sv") return sv_ranger_checks_flagged(inputs)
	if (locale === "tr") return tr_ranger_checks_flagged(inputs)
	if (locale === "zh") return zh_ranger_checks_flagged(inputs)
	if (locale === "ja") return ja_ranger_checks_flagged(inputs)
	return en_ranger_checks_flagged(inputs)
});
