/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_User_SanctionsInputs */

const en_ranger_user_sanctions = /** @type {(inputs: Ranger_User_SanctionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sanctions`)
};

const es_ranger_user_sanctions = /** @type {(inputs: Ranger_User_SanctionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sanciones`)
};

const de_ranger_user_sanctions = /** @type {(inputs: Ranger_User_SanctionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sanktionen`)
};

const fr_ranger_user_sanctions = /** @type {(inputs: Ranger_User_SanctionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sanctions`)
};

const it_ranger_user_sanctions = /** @type {(inputs: Ranger_User_SanctionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sanzioni`)
};

const nl_ranger_user_sanctions = /** @type {(inputs: Ranger_User_SanctionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sancties`)
};

const pl_ranger_user_sanctions = /** @type {(inputs: Ranger_User_SanctionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sankcje`)
};

const pt_ranger_user_sanctions = /** @type {(inputs: Ranger_User_SanctionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sanções`)
};

const ru_ranger_user_sanctions = /** @type {(inputs: Ranger_User_SanctionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Санкции`)
};

const sv_ranger_user_sanctions = /** @type {(inputs: Ranger_User_SanctionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sanktioner`)
};

const tr_ranger_user_sanctions = /** @type {(inputs: Ranger_User_SanctionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yaptırımlar`)
};

const zh_ranger_user_sanctions = /** @type {(inputs: Ranger_User_SanctionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`处罚`)
};

const ja_ranger_user_sanctions = /** @type {(inputs: Ranger_User_SanctionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`制裁`)
};

/**
* | output |
* | --- |
* | "Sanctions" |
*
* @param {Ranger_User_SanctionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_user_sanctions = /** @type {((inputs?: Ranger_User_SanctionsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_User_SanctionsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_user_sanctions(inputs)
	if (locale === "de") return de_ranger_user_sanctions(inputs)
	if (locale === "fr") return fr_ranger_user_sanctions(inputs)
	if (locale === "it") return it_ranger_user_sanctions(inputs)
	if (locale === "nl") return nl_ranger_user_sanctions(inputs)
	if (locale === "pl") return pl_ranger_user_sanctions(inputs)
	if (locale === "pt") return pt_ranger_user_sanctions(inputs)
	if (locale === "ru") return ru_ranger_user_sanctions(inputs)
	if (locale === "sv") return sv_ranger_user_sanctions(inputs)
	if (locale === "tr") return tr_ranger_user_sanctions(inputs)
	if (locale === "zh") return zh_ranger_user_sanctions(inputs)
	if (locale === "ja") return ja_ranger_user_sanctions(inputs)
	return en_ranger_user_sanctions(inputs)
});
