/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_History_SanctionsInputs */

const en_ranger_history_sanctions = /** @type {(inputs: Ranger_History_SanctionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Active sanctions`)
};

const es_ranger_history_sanctions = /** @type {(inputs: Ranger_History_SanctionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sanciones activas`)
};

const de_ranger_history_sanctions = /** @type {(inputs: Ranger_History_SanctionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktive Sanktionen`)
};

const fr_ranger_history_sanctions = /** @type {(inputs: Ranger_History_SanctionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sanctions actives`)
};

const it_ranger_history_sanctions = /** @type {(inputs: Ranger_History_SanctionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sanzioni attive`)
};

const nl_ranger_history_sanctions = /** @type {(inputs: Ranger_History_SanctionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actieve sancties`)
};

const pl_ranger_history_sanctions = /** @type {(inputs: Ranger_History_SanctionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktywne sankcje`)
};

const pt_ranger_history_sanctions = /** @type {(inputs: Ranger_History_SanctionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sanções ativas`)
};

const ru_ranger_history_sanctions = /** @type {(inputs: Ranger_History_SanctionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Активные санкции`)
};

const sv_ranger_history_sanctions = /** @type {(inputs: Ranger_History_SanctionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktiva sanktioner`)
};

const tr_ranger_history_sanctions = /** @type {(inputs: Ranger_History_SanctionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etkin yaptırımlar`)
};

const zh_ranger_history_sanctions = /** @type {(inputs: Ranger_History_SanctionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`生效中的处罚`)
};

const ja_ranger_history_sanctions = /** @type {(inputs: Ranger_History_SanctionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有効な制裁`)
};

/**
* | output |
* | --- |
* | "Active sanctions" |
*
* @param {Ranger_History_SanctionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_history_sanctions = /** @type {((inputs?: Ranger_History_SanctionsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_History_SanctionsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_history_sanctions(inputs)
	if (locale === "de") return de_ranger_history_sanctions(inputs)
	if (locale === "fr") return fr_ranger_history_sanctions(inputs)
	if (locale === "it") return it_ranger_history_sanctions(inputs)
	if (locale === "nl") return nl_ranger_history_sanctions(inputs)
	if (locale === "pl") return pl_ranger_history_sanctions(inputs)
	if (locale === "pt") return pt_ranger_history_sanctions(inputs)
	if (locale === "ru") return ru_ranger_history_sanctions(inputs)
	if (locale === "sv") return sv_ranger_history_sanctions(inputs)
	if (locale === "tr") return tr_ranger_history_sanctions(inputs)
	if (locale === "zh") return zh_ranger_history_sanctions(inputs)
	if (locale === "ja") return ja_ranger_history_sanctions(inputs)
	return en_ranger_history_sanctions(inputs)
});
