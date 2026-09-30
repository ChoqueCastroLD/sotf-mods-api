/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_StaffInputs */

const en_ranger_staff = /** @type {(inputs: Ranger_StaffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Staff`)
};

const es_ranger_staff = /** @type {(inputs: Ranger_StaffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Staff`)
};

const de_ranger_staff = /** @type {(inputs: Ranger_StaffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Team`)
};

const fr_ranger_staff = /** @type {(inputs: Ranger_StaffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Équipe`)
};

const it_ranger_staff = /** @type {(inputs: Ranger_StaffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Staff`)
};

const nl_ranger_staff = /** @type {(inputs: Ranger_StaffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Team`)
};

const pl_ranger_staff = /** @type {(inputs: Ranger_StaffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zespół`)
};

const pt_ranger_staff = /** @type {(inputs: Ranger_StaffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Equipe`)
};

const ru_ranger_staff = /** @type {(inputs: Ranger_StaffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Команда`)
};

const sv_ranger_staff = /** @type {(inputs: Ranger_StaffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Personal`)
};

const tr_ranger_staff = /** @type {(inputs: Ranger_StaffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ekip`)
};

const zh_ranger_staff = /** @type {(inputs: Ranger_StaffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`工作人员`)
};

const ja_ranger_staff = /** @type {(inputs: Ranger_StaffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スタッフ`)
};

/**
* | output |
* | --- |
* | "Staff" |
*
* @param {Ranger_StaffInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_staff = /** @type {((inputs?: Ranger_StaffInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_StaffInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_staff(inputs)
	if (locale === "de") return de_ranger_staff(inputs)
	if (locale === "fr") return fr_ranger_staff(inputs)
	if (locale === "it") return it_ranger_staff(inputs)
	if (locale === "nl") return nl_ranger_staff(inputs)
	if (locale === "pl") return pl_ranger_staff(inputs)
	if (locale === "pt") return pt_ranger_staff(inputs)
	if (locale === "ru") return ru_ranger_staff(inputs)
	if (locale === "sv") return sv_ranger_staff(inputs)
	if (locale === "tr") return tr_ranger_staff(inputs)
	if (locale === "zh") return zh_ranger_staff(inputs)
	if (locale === "ja") return ja_ranger_staff(inputs)
	return en_ranger_staff(inputs)
});
